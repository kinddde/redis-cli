import asyncRedis from "async-redis";

import RedisPool from "@kin-common/redis-pool";

let redisPool;
let redisconf;
let poolconf;

function initRedis() {
    if (!redisconf) {
        throw new Error("redis config, please use pool.setConfig({...})");
    }

    if (redisPool) {
        return redisPool;
    }
    redisPool = new RedisPool(redisconf, poolconf);

    return redisPool;
}

export default {
    start: () =>
        initRedis()
            .getClient()
            .then(client => asyncRedis.decorate(client)),

    release: client => {
        initRedis().releaseClient(client);
    },

    getClient: () => initRedis().getClient(),

    setConfig: (redisConf, poolConf) => {
        redisconf = redisConf;
        poolconf = poolConf;
    },
};
