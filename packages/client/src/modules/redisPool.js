import asyncRedis from "async-redis";

import RedisPool from "@kin-common/redis-pool";

let redisPool;
let redisconf;
let poolconf;
function initRedis() {
    if (!redisconf) {
        throw new Error("redis config, please use pool.setConfig({...})");
        return;
    }
    redisPool = new RedisPool(redisconf, poolconf);
}

export default {
    start: () =>
        redisPool.getClient().then(client => asyncRedis.decorate(client)),

    release: client => {
        redisPool.releaseClient(client);
    },

    getClient: () => redisPool.getClient(),

    setConfig: (redisConf, poolConf) => {
        redisconf = redisConf;
        poolconf = poolConf;
        initRedis();
    },
};
