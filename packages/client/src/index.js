import { mapValues } from "lodash";
import _pool from "./modules/redisPool";

import * as _client from "./modules";

export { _pool as pool };

export const selectDB = db => {
    return mapValues(_client, fun => {
        return (...args) => {
            return fun(db, ...args);
        };
    });
};

export { _client as client };
