import "./modules";

const config = {
    host: "106.13.214.181",
    port: 6379,
    password: "kindom@987",
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
