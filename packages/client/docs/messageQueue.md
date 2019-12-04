# 简易消息队列

## usage

```js
import { MessageQueue } from "@kin-common/redis-client";

// 初始化队列
let queue = new MessageQueue(queueName, useRedisDb);

// 消息插入队列
queue.enqueue(1, 2, 3);

// 消息队列优先执行
queue.enqueuePriority(1, 2, 3);

// run -> function  complated-> function
// 队列同步执行方法
queue.listenerSync(run, complated);

// 队列异步执行方法
queue.listener(run, complated);

// 队列同步执行方法，带延时 sleep(ms)
queue.listenerSleep(run, complated, sleep);
```
