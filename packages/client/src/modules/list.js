import { methodFactory } from "./factory";

import { decode, encode } from "./util";

/**
 * 移出并获取列表的第一个元素
 * @param  {number} db  数据库
 * @param  {string} key  key
 * @return {Promise}     [description]
 */
export const lpop = (db, key) => {
    return methodFactory("lpop", db, key).then(decode);
};

/**
 * 将一个或多个值插入到列表头部
 * @param  {number} db   数据库
 * @param  {string} key  key
 * @param  {any} vals val1,val2,val3
 * @return {Promise}      [description]
 */
export const lpush = (db, key, ...vals) => {
    return methodFactory("lpush", db, key, ...vals.map(encode));
};

/**
 * 移除列表的最后一个元素，返回值为移除的元素。
 * @param  {number} db  数据库
 * @param  {string} key key
 * @return {Promise}     [description]
 */
export const rpop = (db, key) => {
    return methodFactory("rpop", db, key).then(decode);
};

/**
 * 在列表中添加一个或多个值
 * @param  {number} db   数据库
 * @param  {string} key  key
 * @param  {any} vals val1,val2,val3
 * @return {Promise}      [description]
 */
export const rpush = (db, key, ...vals) => {
    return methodFactory("rpush", db, key, ...vals.map(encode));
};

/**
 * 获取列表长度
 * @param  {number} db  数据库
 * @param  {string} key key
 * @return {Promise}
 */
export const llen = (db, key) => {
    return methodFactory("llen", db, key);
};

/**
 * 移除列表元素
 * @param  {number} db    数据库
 * @param  {string} key   string
 * @param  {any} value  删除的值
 * @return {Promise}
 */
export const lrem = (db, key, value) => {
    return methodFactory("lrem", db, key, 0, encode(value));
};

/**
 * 通过索引获取列表中的元素
 * @param  {number} db    数据库
 * @param  {string} key   string
 * @param  {number} index  索引
 * @return {Promise}
 */
export const lindex = (db, key, index) => {
    return methodFactory("lindex", db, key, index).then(decode);
};

/**
 * 获取列表指定范围内的元素
 * @param  {number} db    数据库
 * @param  {string} key   string
 * @param  {number} start  开始
 * @param  {number} stop  结束
 * @return {Promise}
 */
export const lrange = (db, key, start, stop) => {
    return methodFactory("lrange", db, key, start, stop).then(res =>
        res.map(decode)
    );
};
