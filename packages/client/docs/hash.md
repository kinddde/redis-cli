# hash 
## Constants

<dl>
<dt><a href="#hvals">hvals</a> ⇒ <code>Promise</code></dt>
<dd><p>获取哈希表中所有值</p>
</dd>
<dt><a href="#hkeys">hkeys</a> ⇒ <code>Promise</code></dt>
<dd><p>获取所有哈希表中的字段</p>
</dd>
<dt><a href="#hgetall">hgetall</a> ⇒ <code>Promise</code></dt>
<dd><p>获取在哈希表中指定 key 的所有字段和值</p>
</dd>
<dt><a href="#hmget">hmget</a> ⇒ <code>Promise</code></dt>
<dd><p>获取所有给定字段的值</p>
</dd>
<dt><a href="#hget">hget</a> ⇒ <code>Promise</code></dt>
<dd><p>获取存储在哈希表中指定字段的值。</p>
</dd>
<dt><a href="#hmset">hmset</a> ⇒ <code>Promise</code></dt>
<dd><p>同时将多个 field-value (域-值)对设置到哈希表 key 中。</p>
</dd>
<dt><a href="#hset">hset</a> ⇒ <code>Promise</code></dt>
<dd><p>将哈希表 key 中的字段 field 的值设为 value 。</p>
</dd>
</dl>

<a name="hvals"></a>

## hvals ⇒ <code>Promise</code>
获取哈希表中所有值

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>number</code> | 数据库 |
| key | <code>string</code> | key |

<a name="hkeys"></a>

## hkeys ⇒ <code>Promise</code>
获取所有哈希表中的字段

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>number</code> | 数据库 |
| key | <code>string</code> | key |

<a name="hgetall"></a>

## hgetall ⇒ <code>Promise</code>
获取在哈希表中指定 key 的所有字段和值

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>number</code> | 数据库 |
| key | <code>stirng</code> | key |

<a name="hmget"></a>

## hmget ⇒ <code>Promise</code>
获取所有给定字段的值

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>Number</code> | 数据库 |
| key | <code>string</code> | key |
| fields | <code>string</code> | field1, field2, field3 |

<a name="hget"></a>

## hget ⇒ <code>Promise</code>
获取存储在哈希表中指定字段的值。

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>number</code> | 数据库 |
| key | <code>string</code> | key |
| field | <code>string</code> | 字段 |

<a name="hmset"></a>

## hmset ⇒ <code>Promise</code>
同时将多个 field-value (域-值)对设置到哈希表 key 中。

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>number</code> | 数据库 |
| key | <code>string</code> | key |
| obj | <code>object</code> | {field1:value1, field2:value2 } |

<a name="hset"></a>

## hset ⇒ <code>Promise</code>
将哈希表 key 中的字段 field 的值设为 value 。

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>number</code> | 数据库 |
| key | <code>string</code> | key |
| field | <code>string</code> | field |
| value | <code>any</code> | value |

