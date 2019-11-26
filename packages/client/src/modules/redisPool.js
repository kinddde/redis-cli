/**
 * redis pool
 * @module pool
 */

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
    release: client => {
        initRedis().releaseClient(client);
    },

    getClient: () => initRedis().getClient(),

    /**
     * 设置redis连接参数
     * @param {object} redisConf https://github.com/NodeRedis/node_redis#options-object-properties
     * @param {object}  poolConf  https://github.com/coopernurse/node-pool#createpool
     */
    setConfig: (redisConf, poolConf) => {
        redisconf = redisConf;
        poolconf = poolConf;
    },
};
