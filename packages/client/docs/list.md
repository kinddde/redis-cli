# list 
## Constants

<dl>
<dt><a href="#lpop">lpop</a> ⇒ <code>Promise</code></dt>
<dd><p>移出并获取列表的第一个元素</p>
</dd>
<dt><a href="#lpush">lpush</a> ⇒ <code>Promise</code></dt>
<dd><p>将一个或多个值插入到列表头部</p>
</dd>
<dt><a href="#rpop">rpop</a> ⇒ <code>Promise</code></dt>
<dd><p>移除列表的最后一个元素，返回值为移除的元素。</p>
</dd>
<dt><a href="#rpush">rpush</a> ⇒ <code>Promise</code></dt>
<dd><p>在列表中添加一个或多个值</p>
</dd>
<dt><a href="#llen">llen</a> ⇒ <code>Promise</code></dt>
<dd><p>获取列表长度</p>
</dd>
<dt><a href="#lrem">lrem</a> ⇒ <code>Promise</code></dt>
<dd><p>移除列表元素</p>
</dd>
<dt><a href="#lindex">lindex</a> ⇒ <code>Promise</code></dt>
<dd><p>通过索引获取列表中的元素</p>
</dd>
<dt><a href="#lrange">lrange</a> ⇒ <code>Promise</code></dt>
<dd><p>获取列表指定范围内的元素</p>
</dd>
</dl>

<a name="lpop"></a>

## lpop ⇒ <code>Promise</code>
移出并获取列表的第一个元素

**Kind**: global constant  
**Returns**: <code>Promise</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>number</code> | 数据库 |
| key | <code>string</code> | key |

<a name="lpush"></a>

## lpush ⇒ <code>Promise</code>
将一个或多个值插入到列表头部

**Kind**: global constant  
**Returns**: <code>Promise</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>number</code> | 数据库 |
| key | <code>string</code> | key |
| vals | <code>any</code> | val1,val2,val3 |

<a name="rpop"></a>

## rpop ⇒ <code>Promise</code>
移除列表的最后一个元素，返回值为移除的元素。

**Kind**: global constant  
**Returns**: <code>Promise</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>number</code> | 数据库 |
| key | <code>string</code> | key |

<a name="rpush"></a>

## rpush ⇒ <code>Promise</code>
在列表中添加一个或多个值

**Kind**: global constant  
**Returns**: <code>Promise</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>number</code> | 数据库 |
| key | <code>string</code> | key |
| vals | <code>any</code> | val1,val2,val3 |

<a name="llen"></a>

## llen ⇒ <code>Promise</code>
获取列表长度

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>number</code> | 数据库 |
| key | <code>string</code> | key |

<a name="lrem"></a>

## lrem ⇒ <code>Promise</code>
移除列表元素

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>number</code> | 数据库 |
| key | <code>string</code> | string |
| value | <code>any</code> | 删除的值 |

<a name="lindex"></a>

## lindex ⇒ <code>Promise</code>
通过索引获取列表中的元素

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>number</code> | 数据库 |
| key | <code>string</code> | string |
| index | <code>number</code> | 索引 |

<a name="lrange"></a>

## lrange ⇒ <code>Promise</code>
获取列表指定范围内的元素

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>number</code> | 数据库 |
| key | <code>string</code> | string |
| start | <code>number</code> | 开始 |
| stop | <code>number</code> | 结束 |

