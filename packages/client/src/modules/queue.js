/**
 * 简易消息队列实现
 */

import { lpop, rpush, lpush, llen } from "./list";

import { subscribe, publish } from "./pubSub";

class MessageQueue {
    constructor(event, db = 0) {
        if (!event) {
            throw new Error(`MessageQueue event is null`);
        }
        this.eventName = event;

        this.selectDb = db;

        this.type = `message_queue_start`;
    }

    async enqueue(...vals) {
        await rpush(this.selectDb, this.eventName, ...vals).catch(() => false);

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

    /**
     * 同步执行的方法
     * @param  {[type]} [run=()       =>            {}] [description]
     * @param  {[type]} [complated=() =>            {}] [description]
     * @return {[type]}               [description]
     */
    listenerSync(run = () => {}, complated = () => {}) {
        const self = this;

        async function callback(param) {
            if (param !== self.type) {
                return;
            }
            let flag = false;

            /* eslint-disable */
            while (!flag) {
                flag = await self.isEmpty();

                if (!flag) {
                    const data = await self.dequeue();

                    await run(data);
                }
            }

            complated();
        }

        return subscribe(this.eventName, callback).catch(() => false);
    }

    /**
     * 异步执行的方法
     * @param  {[type]} [run=()       =>            {}] [description]
     * @param  {[type]} [complated=() =>            {}] [description]
     * @return {[type]}               [description]
     */
    listener(run = () => {}, complated = () => {}) {
        const self = this;

        async function callback(param) {
            if (param !== self.type) {
                return;
            }
            let flag = false;

            /* eslint-disable */
            let promises = [];
            while (!flag) {
                flag = await self.isEmpty();

                if (!flag) {
                    const data = await self.dequeue();

                    promises.push(run(data));
                }
            }

            Promise.all(promises).then(complated);
        }

        return subscribe(this.eventName, callback).catch(() => false);
    }

    /**
     * 异步执行方法, 延时
     * @param  {[type]} [run=()       =>            {}] [description]
     * @param  {[type]} [complated=() =>            {}] [description]
     * @param  {Number} [sleep=300]   [description]
     * @return {[type]}               [description]
     */
    listenerSleep(run = () => {}, complated = () => {}, sleep = 300) {
        const self = this;

        async function callback(param) {
            if (param !== self.type) {
                return;
            }
            let flag = false;

            /* eslint-disable */
            let promises = [];
            while (!flag) {
                flag = await self.isEmpty();

                if (!flag) {
                    const data = await self.dequeue();

                    promises.push(run(data));
                }
            }

            Promise.all(promises).then(complated);
        }

        return subscribe(this.eventName, callback).catch(() => false);
    }
}

export default MessageQueue;
