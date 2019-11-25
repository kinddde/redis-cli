import { mapValues } from "lodash";

import _pool from "./modules/redisPool";

import { publish, subscribe } from "./modules/pubSub";

import * as _client from "./modules";

export * from "./modules";

export * from "./modules/pubSub";

export { _pool as pool };

export const selectDB = db => {
    return mapValues(_client, fun => {
        return (...args) => {
            return fun(db, ...args);
        };
    });
};

export default { ..._client, pool: _pool, selectDB, publish, subscribe };

require("./test");
