/**
 * 简易消息队列实现
 */

import { lpop, rpush, lpush, llen } from "./list";

import { subscribe, publish } from "./pubSub";

export default class MessageQueue {
    constructor(event, db = 0) {
        if (!event) {
            throw new Error(`MessageQueue event is null`);
        }
        this.eventName = event;

        this.selectDb = db;

        this.type = `message_queue_start`;

        this.running = false;
    }

    async enqueue(...vals) {
        await rpush(this.selectDb, this.eventName, ...vals).catch(() => false);

        return publish(this.eventName, this.type).catch(() => false);
    }

    /**
     * 优先插入
     * @return {Promise} [description]
     */
    async enqueuePriority(...vals) {
        await lpush(this.selectDb, this.eventName, ...vals).catch(() => false);

        return publish(this.eventName, this.type).catch(() => false);
    }

    dequeue() {
        return lpop(this.selectDb, this.eventName).catch(err => {
            console.log(err);

            return false;
        });
    }

    async isEmpty() {
        return (await this.size()) === 0;
    }

    size() {
        return llen(this.selectDb, this.eventName).catch(() => 0);
    }

    /* eslint-disable */
    _listener_(listener, complated) {
        const self = this;

        async function callback(param) {
            // running 防止重复开始执行

            if (param !== self.type || self.running) {
                return;
            }

            self.running = true;

            let flag = false;
            let promises = [];

            while (!flag) {
                flag = await self.isEmpty();

                if (!flag) {
                    const data = await self.dequeue();

                    await listener(data, promises);
                }
            }

            self.running = false;

            await Promise.all(promises).then(complated);

            promises = [];
        }

        return subscribe(this.eventName, callback).catch(() => false);
    }

    /**
     * 同步执行的方法
     * @param  {[type]} [run=()       =>            {}] [description]
     * @param  {[type]} [complated=() =>            {}] [description]
     * @return {[type]}               [description]
     */
    listenerSync(run = () => {}, complated = () => {}) {
        const self = this;

        function runCallBack(data, promises) {
            let pro = run(data);

            promises.push(pro);

            return pro;
        }

        return self._listener_(runCallBack, complated);
    }

    /**
     * 异步执行的方法
     * @param  {[type]} [run=()       =>            {}] [description]
     * @param  {[type]} [complated=() =>            {}] [description]
     * @return {[type]}               [description]
     */
    listener(run = () => {}, complated = () => {}) {
        const self = this;

        function runCallBack(data, promises) {
            promises.push(run(data));
        }

        return self._listener_(runCallBack, complated);
    }

    /**
     * 异步执行方法, 延时
     * @param  {[type]} [run=()       =>            {}] [description]
     * @param  {[type]} [complated=() =>            {}] [description]
     * @param  {Number} [sleep=300]   [description]
     * @return {[type]}               [description]
     */
    listenerSleep(run = () => {}, complated = () => {}, sleep = 2000) {
        const self = this;

        function runCallBack(data, list) {
            return new Promise(resolve => {
                let timer = setTimeout(resolve, sleep);

                list.push(
                    run(data).finally(() => {
                        resolve();

                        timer && clearTimeout(timer);
                    })
                );
            });
        }

        return self._listener_(runCallBack, complated);
    }
}
