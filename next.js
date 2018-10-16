const genericPool = require("generic-pool");

const redis = require("redis");

require("kin-promise-finally");

const defaultOptions = {
  max: 10, // maximum size of the pool
  min: 2 // minimum size of the pool
};

class ClientPool {
  constructor(config, options) {
    if (!config) {
      throw new Error("redis config can not null");
    }
    this.config = config;
    this.options = options || {};
    this.redisPools = "";

    this.initPoll();
  }

  initPoll() {
    let factory = {
      create: () => {
        return redis.createClient(this.config);
      },
      destroy: client => {
        client.disconnect();
      }
    };

    // 初始化连接池
    this.redisPools = genericPool.createPool(factory, {
      ...defaultOptions,
      ...this.options
    });
  }

  clientFactory(redisDB = 0) {
    return this.redisPools.acquire().then(client => {
      // 选择数据库
      return new Promise((resolve, reject) => {
        client.select(redisDB, () => {
          resolve(client);
        });
      });
    });
  }

  start(db) {
    let cacheClient = null;
    return this.clientFactory(db)
      .then(client => {
        cacheClient = client;
        return client;
      })
      .finally(() => {
        console.log("销毁");
        this.redisPools.release(cacheClient);
      });
  }
}

module.exports = ClientPool;
