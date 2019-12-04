import pool from "./redisPool";

import { exchange } from "./factory";

import { decode, encode } from "./util";

/**
 * 将信息发送到指定的频道。
 * @param  {string}  key   频道名称
 * @param  {any}  value 发送的消息
 * @return {Promise}
 */
export const publish = async (key, value) => {
    const client = await pool.getClient();

    const fun = exchange(client, "publish");

    return fun(key, value ? encode(value) : "").finally(() => {
        pool.release(client);
    });
};

let subClient;
/**
 * 订阅给定的频道的信息。
 * @param  {string}  event        订阅的频道名称
 * @param  {function}  callback 订阅执行的方法
 * @return {Promise}              返回cancel
 */
export const subscribe = async (event, callback = () => {}) => {
    if (!subClient) {
        subClient = await pool.getClient();
    }
    return new Promise(resolve => {
        subClient.on("subscribe", channel => {
            if (event === channel) {
                resolve();
            }
        });

        subClient.on("message", (channel, message) => {
            event === channel && callback(message ? decode(message) : message);
        });

        subClient.on("unsubscribe", (channel, count) => {
            if (count === 0) {
                pool.release(subClient);
            }
        });

        subClient.subscribe(event);

        // 返回取消方法
        return () => {
            subClient.unsubscribe(event);
        };
    });
};
