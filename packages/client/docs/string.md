# string 
## Constants

<dl>
<dt><a href="#set">set</a> ⇒ <code>Promise</code></dt>
<dd><p>写入字符串</p>
</dd>
<dt><a href="#get">get</a> ⇒ <code>Promise</code></dt>
<dd><p>获取字符串</p>
</dd>
<dt><a href="#mget">mget</a> ⇒ <code>Promise</code></dt>
<dd><p>获取所有(一个或多个)给定 key 的值。</p>
</dd>
<dt><a href="#incr">incr</a> ⇒ <code>Promise</code></dt>
<dd><p>写入的数字 +1</p>
</dd>
<dt><a href="#decr">decr</a> ⇒ <code>Promise</code></dt>
<dd><p>写入的数字 -1</p>
</dd>
</dl>

<a name="set"></a>

## set ⇒ <code>Promise</code>
写入字符串

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>number</code> | 数据库 |
| key | <code>string</code> | 键 |
| value | <code>any</code> | 值 |
| timeout | <code>number</code> | 过期时间（s） |

<a name="get"></a>

## get ⇒ <code>Promise</code>
获取字符串

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>number</code> | 数据库 |
| key | <code>string</code> | 键 |

<a name="mget"></a>

## mget ⇒ <code>Promise</code>
获取所有(一个或多个)给定 key 的值。

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>number</code> | 数据库 |
| keys | <code>string</code> | key1, key2, key3 |

<a name="incr"></a>

## incr ⇒ <code>Promise</code>
写入的数字 +1

**Kind**: global constant  
**Returns**: <code>Promise</code> - description  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>number</code> | 数据库 |
| key | <code>string</code> | 键 |

<a name="decr"></a>

## decr ⇒ <code>Promise</code>
写入的数字 -1

**Kind**: global constant  
**Returns**: <code>Promise</code> - description  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>number</code> | 数据库 |
| key | <code>string</code> | 键 |

