import redis from "redis";

import genericPool from "generic-pool";

const defaultOptions = {
    max: 10, // maximum size of the pool
    min: 2, // minimum size of the pool
};


class RedisPool {
    constructor(config, options) {
        if (!config) {
            throw new Error("redis config can not null");
        }
        this.config = config;
        this.options = options || {};
        this.redisPools = "";

        this.initPoll();
    }

    getPool() {
        return this.redisPools;
    }

    initPoll() {
        const factory = {
            create: () => {
                return redis.createClient(this.config);
            },
            destroy: client => {
                client.quit();
            },
        };

        // 初始化连接池
        this.redisPools = genericPool.createPool(factory, {
            ...defaultOptions,
            ...this.options,
        });
    }

    getClient() {
        return this.redisPools.acquire();
    }

    releaseClient(client) {
        this.redisPools.release(client);
    }
}

export default RedisPool;
