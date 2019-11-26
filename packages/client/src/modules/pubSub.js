// import asyncRedis from "async-redis";
import pool from "./redisPool";

import { exchange } from "./factory";

import { decode, encode } from "./util";

export const publish = async (key, value) => {
    const client = await pool.getClient();

    // client = asyncRedis.decorate(client);
    const fun = exchange(client, "publish");

    return fun(key, value ? encode(value) : "").finally(() => {
        pool.release(client);
    });
};

let subClient;
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
