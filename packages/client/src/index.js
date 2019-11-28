import { mapValues } from "lodash";

import _pool from "./modules/redisPool";

import { publish, subscribe } from "./modules/pubSub";

import _MessageQueue from "./modules/queue";

import * as _client from "./modules";

export * from "./modules";

export * from "./modules/pubSub";

export { _pool as pool };

export { _MessageQueue as MessageQueue };

export const selectDB = db => {
    return mapValues(_client, fun => {
        return (...args) => {
            return fun(db, ...args);
        };
    });
};

export default {
    ..._client,
    pool: _pool,
    selectDB,
    publish,
    subscribe,
    MessageQueue: _MessageQueue,
};
