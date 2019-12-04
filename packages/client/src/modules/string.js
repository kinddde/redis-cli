/**
 *@external String
 */
import { decode, encode } from "./util";
import { methodFactory } from "./factory";

/**
 * 写入字符串
 * @param  {number}  db      数据库
 * @param  {string}  key     键
 * @param  {any}  value   值
 * @param  {number}  timeout 过期时间（s）
 * @return {Promise}
 */
export const set = async (db, key, value, timeout) => {
    if (timeout) {
        // 时间限制
        return methodFactory("set", db, key, encode(value), "EX", timeout);
    }

    return methodFactory("set", db, key, encode(value));
};

/**
 * 获取字符串
 * @param  {number}  db  数据库
 * @param  {string}  key 键
 * @return {Promise}
 */
export const get = async (db, key) => {
    return methodFactory("get", db, key).then(decode);
};

/**
 * 获取所有(一个或多个)给定 key 的值。
 * @param  {number}  db   数据库
 * @param  {string}  keys key1, key2, key3
 * @return {Promise}
 */
export const mget = async (db, ...keys) => {
    return methodFactory("mget", db, ...keys).then(data => data.map(decode));
};

/**
 * 写入的数字 +1
 * @param  {number}  db  数据库
 * @param  {string}  key 键
 * @return {Promise}     description
 */
export const incr = async (db, key) => {
    return methodFactory("incr", db, key);
};

/**
 * 写入的数字 -1
 * @param  {number}  db  数据库
 * @param  {string}  key 键
 * @return {Promise}     description
 */
export const decr = async (db, key) => {
    return methodFactory("decr", db, key);
};
