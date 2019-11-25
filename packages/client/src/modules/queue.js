/**
 * 简易消息队列实现
 */

/**
 * 入队操作
 * @param  {[type]} event [description]
 * @param  {[type]} vlas  [description]
 * @return {[type]}       [description]
 */
export const enqueue = (event, ...vlas) => {};

/**
 * 出队操作
 * @param  {[type]} event [description]
 * @return {[type]}       [description]
 */
export const dequeue = event => {};

/**
 * 监听队列 入队事件
 * @param  {[type]} event
 * @param  {Function} run       执行方法
 * @param  {Function} complated 队列执行完成方法
 * @param  {number} sleep     延时操作 默认0
 */
export const listenerQueue = (event, { run, complated, sleep }) => {


  
};
