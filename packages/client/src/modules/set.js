import { methodFactory } from "./factory";
import { encode, decode } from "./util";

/**
 * 向集合添加一个或多个成员
 * @param  {number}  db      数据库
 * @param  {string}  key     key
 * @param  {string}  members 成员
 * @return {Promise}
 */
export const sadd = async (db, key, ...members) => {
    return methodFactory("sadd", db, key, ...members.map(encode));
};

/**
 * 获取集合的成员数
 * @param  {number}  db  数据库
 * @param  {string}  key key
 * @return {Promise}
 */
export const scard = async (db, key) => {
    return methodFactory("scard", db, key);
};

/**
 * 判断 member 元素是否是集合 key 的成员
 * @param  {number}  db     数据库
 * @param  {string}  key    key
 * @param  {any}  member menber
 * @return {Promise}
 */
export const sismember = async (db, key, member) => {
    return methodFactory("sismember", db, key, encode(member));
};

/**
 * 返回集合中的所有成员
 * @param  {Number}  db  [数据库]
 * @param  {string}  key [key]
 * @return {Promise}
 */
export const smembers = async (db, key) => {
    return methodFactory("smembers", db, key).then(res => res.map(decode));
};

/**
 * 返回所有给定集合的并集
 * @param  {number}  db   数据库
 * @param  {string}  keys key1, key2, key3
 * @return {Promise}
 */
export const sunion = async (db, ...keys) => {
    return methodFactory("sunion", db, ...keys).then(res => res.map(decode));
};

/**
 * 返回给定所有集合的交集
 * @param  {number}  db   数据库
 * @param  {string}  keys key1, key2, key3
 * @return {Promise}
 */
export const sinter = async (db, ...keys) => {
    return methodFactory("sinter", db, ...keys).then(res => res.map(decode));
};

/**
 * 移除并返回集合中的一个随机元素
 * @param  {number}  db  数据库
 * @param  {string}  key key
 * @return {Promise}     description
 */
export const spop = async (db, key) => {
    return methodFactory("spop", db, key).then(decode);
};

/**
 * 移除集合中一个或多个成员
 * @param  {number}  db      数据库
 * @param  {string}  key     key
 * @param  {string}  members members
 * @return {Promise}
 */
export const srem = async (db, key, ...members) => {
    return methodFactory("srem", db, key, ...members.map(encode));
};
