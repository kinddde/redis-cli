const { pool, del, set } = require(".");

const config = {
    host: "127.0.0.1",
    port: 6379,
    no_ready_check: true,
};

const poolConf = {
    min: 3,
    max: 100,
    maxWaitingClients: 20,
    acquireTimeoutMillis: 3000, // 在超时前等待资源的最长毫秒数
    softIdleTimeoutMillis: 1000 * 10, // pool 连接 空闲时间 逐出
    evictionRunIntervalMillis: 1000 * 30, // 对pool进行逐出检查 10分钟
};

pool.setConfig(config, poolConf);

async function run() {
    // await set(0, "a", 1);
    //
    // await set(0, "b", 1);
    await del(0, "a", "b").then(console.log);
}

run();
