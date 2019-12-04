# redis-client

> redis 常用方法封装

## Usage

    npm install @kin-common/redis-client

    const {pool, set, selectDB} = require('@kin-common/redis-client');

    // 设置redis连接信息
    pool.setConfig(redisConf, poolConf);

    // 使用

    set(12,'key', 'hello world');
    // 等价于
    const {set} = selectDB(12);

    set('key', 'hello world')

-   [pool.setConfig](docs/redisPool.md)
-   [String](docs/string.md)
-   [Set](docs/set.md)
-   [Hash](docs/hash.md)
-   [List](docs/list.md)
-   [Key](docs/key.md)

-   [pub/sub](docs/pubSub.md)

-   [MessageQueue](docs/messageQueue.md)

## 扩展(todo)
