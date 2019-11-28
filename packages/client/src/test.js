const { pool, publish, subscribe, MessageQueue } = require(".");
// import { pool } from ".";

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

function sleep() {
    return new Promise(resolve => setTimeout(resolve, 3000));
}

async function run() {
    const queue = new MessageQueue("message_test_queue", 4);

    await queue.listenerSync(
        async data => {
            console.log(data);

            await sleep();
        },
        () => {
            console.log("执行完成");
        }
    );

    await queue.enqueue("a");
    await queue.enqueue("b");
    // queue.dequeue().then(console.log);
}

run();
