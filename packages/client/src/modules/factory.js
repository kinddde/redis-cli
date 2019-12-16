import { promisify } from "util";
import pool from "./redisPool";

export const exchange = (client, method) => {
    return promisify(client[method]).bind(client);
};

export const methodFactory = async (method, db, ...args) => {
    const client = await pool.getClient();

    await client.select(db);

    const fun = exchange(client, method);

    return fun(...args)
        .catch(err => {
            return Promise.reject(err);
        })
        .finally(() => {
            pool.release(client);
        });
};
