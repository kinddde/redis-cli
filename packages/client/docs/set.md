# set 
## Constants

<dl>
<dt><a href="#sadd">sadd</a> ⇒ <code>Promise</code></dt>
<dd><p>向集合添加一个或多个成员</p>
</dd>
<dt><a href="#scard">scard</a> ⇒ <code>Promise</code></dt>
<dd><p>获取集合的成员数</p>
</dd>
<dt><a href="#sismember">sismember</a> ⇒ <code>Promise</code></dt>
<dd><p>判断 member 元素是否是集合 key 的成员</p>
</dd>
<dt><a href="#smembers">smembers</a> ⇒ <code>Promise</code></dt>
<dd><p>返回集合中的所有成员</p>
</dd>
<dt><a href="#sunion">sunion</a> ⇒ <code>Promise</code></dt>
<dd><p>返回所有给定集合的并集</p>
</dd>
<dt><a href="#sinter">sinter</a> ⇒ <code>Promise</code></dt>
<dd><p>返回给定所有集合的交集</p>
</dd>
<dt><a href="#spop">spop</a> ⇒ <code>Promise</code></dt>
<dd><p>移除并返回集合中的一个随机元素</p>
</dd>
<dt><a href="#srem">srem</a> ⇒ <code>Promise</code></dt>
<dd><p>移除集合中一个或多个成员</p>
</dd>
</dl>

<a name="sadd"></a>

## sadd ⇒ <code>Promise</code>
向集合添加一个或多个成员

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>number</code> | 数据库 |
| key | <code>string</code> | key |
| members | <code>string</code> | 成员 |

<a name="scard"></a>

## scard ⇒ <code>Promise</code>
获取集合的成员数

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>number</code> | 数据库 |
| key | <code>string</code> | key |

<a name="sismember"></a>

## sismember ⇒ <code>Promise</code>
判断 member 元素是否是集合 key 的成员

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>number</code> | 数据库 |
| key | <code>string</code> | key |
| member | <code>any</code> | menber |

<a name="smembers"></a>

## smembers ⇒ <code>Promise</code>
返回集合中的所有成员

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>Number</code> | [数据库] |
| key | <code>string</code> | [key] |

<a name="sunion"></a>

## sunion ⇒ <code>Promise</code>
返回所有给定集合的并集

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>number</code> | 数据库 |
| keys | <code>string</code> | key1, key2, key3 |

<a name="sinter"></a>

## sinter ⇒ <code>Promise</code>
返回给定所有集合的交集

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>number</code> | 数据库 |
| keys | <code>string</code> | key1, key2, key3 |

<a name="spop"></a>

## spop ⇒ <code>Promise</code>
移除并返回集合中的一个随机元素

**Kind**: global constant  
**Returns**: <code>Promise</code> - description  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>number</code> | 数据库 |
| key | <code>string</code> | key |

<a name="srem"></a>

## srem ⇒ <code>Promise</code>
移除集合中一个或多个成员

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>number</code> | 数据库 |
| key | <code>string</code> | key |
| members | <code>string</code> | members |

