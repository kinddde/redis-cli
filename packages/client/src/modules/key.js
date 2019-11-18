/**
 * redis key 相关操作
 */

import { methodFactory } from "./factory";

/**
 * 删除指定key
 * @param  {number}  db  数据库
 * @param  {string}  key key
 * @return {Promise}
 */
export const del = async (db, key) => {
    return methodFactory("del", db, key);
};

/**
 * 判断key是否存在
 * @param  {number}  db  数据库
 * @param  {string}  key key
 * @return {Promise}
 */
export const exists = async (db, key) => {
    return methodFactory("exists", db, key);
};

/**
 * 设置过期时间
 * @param  {number}  db      数据库
 * @param  {string}  key     key
 * @param  {number}  timeout 过期时间（s）
 * @return {Promise}         description
 */
export const expire = async (db, key, timeout) => {
    return methodFactory("expire", db, key, timeout * 60);
};

/**
 * 以秒为单位，返回给定 key 的剩余生存时间(TTL, time to live)。
 * @param  {number}  db  数据库
 * @param  {string}  key key
 * @return {Promise}     description
 */
export const ttl = async (db, key) => {
    return methodFactory("ttl", db, key);
};

/**
 * 返回 key 所储存的值的类型。
 * @param  {number}  db  数据库
 * @param  {string}  key key
 * @return {Promise}
 */
export const type = async (db, key) => {
    return methodFactory("type", db, key);
};
