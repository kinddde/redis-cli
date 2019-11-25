import asyncRedis from "async-redis";
import pool from "./redisPool";

import { decode, encode } from "./util";

export const publish = async (key, value) => {
    let client = await pool.getClient();

    client = asyncRedis.decorate(client);

    return client.publish(key, value ? encode(value) : "").finally(() => {
        pool.release(client);
    });
};

let subClient;
export const subscribe = async (event, callback = () => {}) => {
    if (!subClient) {
        subClient = await pool.getClient();

        subClient = asyncRedis.decorate(subClient);
    }

    subClient.on("subscribe", (channel, count) => {
        event === channel &&
            console.log(`redis client subscribe `, channel, count);
    });

    subClient.on("message", (channel, message) => {
        event === channel && callback(decode(message));
    });

    subClient.on("unsubscribe", (channel, count) => {
        if (count === 0) {
            pool.release(subClient);
        }
        event === channel && console.log(`redis client unsubscribe `, channel);
    });

    subClient.subscribe(event);

    // 返回取消方法
    return () => {
        subClient.unsubscribe(event);
    };
};
