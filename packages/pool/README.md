# redis-pool

> redis 连接池

## Usage

    npm install @kin-common/redis-pool

    const RedisPool = require('@kin-common/redis-pool');

    const redisPool = new RedisPool(redisconf, poolconf);

\- [redisConf](https://github.com/NodeRedis/node_redis#options-object-properties)

\- [poolConf](https://github.com/coopernurse/node-pool#createpool)

### redisPool.getClient()

> 从连接池中取出 client

### redisPool.releaseClient(client)

> client 归还连接池
