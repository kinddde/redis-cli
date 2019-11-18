/**
 * hash 相关操作
 */
import { forIn, toPairs } from "lodash";
import { methodFactory } from "./factory";
import { encode, decode } from "./util";

/**
 * 获取哈希表中所有值
 * @param  {number}  db  [数据库]
 * @param  {string}  key [key]
 * @return {Promise}     [description]
 */
export const hvals = async (db, key) => {
    return methodFactory("hvals", db, key).then(res => res.map(decode));
};

/**
 * 获取所有哈希表中的字段
 * @param  {number}  db  [数据库]
 * @param  {string}  key [key]
 * @return {Promise}     [description]
 */
export const hkeys = async (db, key) => {
    return methodFactory("hkeys", db, key);
};

/**
 * 获取在哈希表中指定 key 的所有字段和值
 * @param  {number}  db  [数据库]
 * @param  {stirng}  key [key]
 * @return {Promise}     [description]
 */
export const hgetall = async (db, key) => {
    return methodFactory("hgetall", db, key).then(res => {
        return forIn(res, (val, field) => {
            res[field] = decode(val);
        });
    });
};

/**
 * 获取所有给定字段的值
 * @param  {[type]}  db     [数据库]
 * @param  {[type]}  key    [key]
 * @param  {string,string, stirng}  fields [field1, field2, field3]
 * @return {Promise}        [description]
 */
export const hmget = async (db, key, ...fields) => {
    return methodFactory("hmget", db, key, ...fields).then(res =>
        res.map(decode)
    );
};

/**
 * 获取存储在哈希表中指定字段的值。
 * @param  {number}  db    [数据库]
 * @param  {string}  key   [key]
 * @param  {string}  field [字段]
 * @return {Promise}       [description]
 */
export const hget = async (db, key, field) => {
    return methodFactory("hget", db, key, field).then(decode);
};

/**
 * 同时将多个 field-value (域-值)对设置到哈希表 key 中。
 * @param  {[type]}  db   [数据库]
 * @param  {string}  key  [key]
 * @param  {object}  obj [{field1:value1, field2:value2 }]
 * @return {Promise}      [description]
 */
export const hmset = async (db, key, obj) => {
    const ls = toPairs(obj)
        .map(([field, value]) => {
            return [field, decode(value)];
        })
        .flat(1);

    return methodFactory("hmset", db, key, ...ls);
};

/**
 * 将哈希表 key 中的字段 field 的值设为 value 。
 * @param  {number}  db    [数据库]
 * @param  {string}  key   [key]
 * @param  {string}  field [field]
 * @param  {any}  value [value]
 * @return {Promise}       [description]
 */
export const hset = async (db, key, field, value) => {
    return methodFactory("hset", db, key, field, encode(value));
};

// hmset(13, "hast_test", {
//     a: 111,
//     b: 222,
// }).then(console.log);

// hgetall(13, "hast_test", "two", "one").then(console.log);
