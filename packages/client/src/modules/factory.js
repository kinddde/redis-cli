import pool from "./redisPool";

export const methodFactory = async (method, db, ...args) => {
    const client = await pool.start(db);

    await client.select(db);

    return client[method](...args).finally(() => {
        pool.release(client);
    });
};
