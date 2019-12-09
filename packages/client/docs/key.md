# key 
## Constants

<dl>
<dt><a href="#del">del</a> ⇒ <code>Promise</code></dt>
<dd><p>删除指定key</p>
</dd>
<dt><a href="#exists">exists</a> ⇒ <code>Promise</code></dt>
<dd><p>判断key是否存在</p>
</dd>
<dt><a href="#expire">expire</a> ⇒ <code>Promise</code></dt>
<dd><p>设置过期时间</p>
</dd>
<dt><a href="#ttl">ttl</a> ⇒ <code>Promise</code></dt>
<dd><p>以秒为单位，返回给定 key 的剩余生存时间(TTL, time to live)。</p>
</dd>
<dt><a href="#type">type</a> ⇒ <code>Promise</code></dt>
<dd><p>返回 key 所储存的值的类型。</p>
</dd>
</dl>

<a name="del"></a>

## del ⇒ <code>Promise</code>
删除指定key

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>number</code> | 数据库 |
| key | <code>string</code> | key1,key2, key3 |

<a name="exists"></a>

## exists ⇒ <code>Promise</code>
判断key是否存在

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>number</code> | 数据库 |
| key | <code>string</code> | key |

<a name="expire"></a>

## expire ⇒ <code>Promise</code>
设置过期时间

**Kind**: global constant  
**Returns**: <code>Promise</code> - description  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>number</code> | 数据库 |
| key | <code>string</code> | key |
| timeout | <code>number</code> | 过期时间（s） |

<a name="ttl"></a>

## ttl ⇒ <code>Promise</code>
以秒为单位，返回给定 key 的剩余生存时间(TTL, time to live)。

**Kind**: global constant  
**Returns**: <code>Promise</code> - description  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>number</code> | 数据库 |
| key | <code>string</code> | key |

<a name="type"></a>

## type ⇒ <code>Promise</code>
返回 key 所储存的值的类型。

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>number</code> | 数据库 |
| key | <code>string</code> | key |

