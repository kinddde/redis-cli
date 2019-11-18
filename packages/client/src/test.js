const { pool, selectDB, client } = require(".");

const config = {
    host: "127.0.0.1",
    port: 6379,
    no_ready_check: true,
};

const poolConf = {
    min: 20,
    max: 100,
    maxWaitingClients: 20,
    acquireTimeoutMillis: 3000, // 在超时前等待资源的最长毫秒数
    softIdleTimeoutMillis: 1000 * 10, // pool 连接 空闲时间 逐出
    evictionRunIntervalMillis: 1000 * 30, // 对pool进行逐出检查 10分钟
};

pool.setConfig(config, poolConf);

const client2 = selectDB(12);

console.log(client);

client2
    .sadd(12, "test2", 1, { a: 1 }, [1, 2, 3])
    .then(console.log)
    .catch(err => {
        console.log("error", err);
    });
