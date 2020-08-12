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
<dt><a href="#hdel">hdel</a> ⇒ <code>Promise</code></dt>
<dd><p>删除一个或多个哈希表字段</p>
</dd>
<dt><a href="#hexists">hexists</a> ⇒ <code>Promise</code></dt>
<dd><p>查看哈希表的指定字段是否存在。</p>
</dd>
<dt><a href="#hlen">hlen</a> ⇒ <code>Promise</code></dt>
<dd><p>命令用于获取哈希表中字段的数量</p>
</dd>
<dt><a href="#hincrby">hincrby</a> ⇒ <code>Promise</code></dt>
<dd><p>为哈希表 key 中的指定字段的整数值加上增量 increment 。</p>
</dd>
<dt><a href="#hincrbyfloat">hincrbyfloat</a> ⇒ <code>Promise</code></dt>
<dd><p>为哈希表 key 中的指定字段的浮点数值加上增量 increment</p>
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

<a name="hdel"></a>

## hdel ⇒ <code>Promise</code>
删除一个或多个哈希表字段

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>number</code> | 数据库 |
| key | <code>string</code> | key |
| fields | <code>string</code> | field1,field2 |

<a name="hexists"></a>

## hexists ⇒ <code>Promise</code>
查看哈希表的指定字段是否存在。

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>number</code> | 数据库 |
| key | <code>string</code> | key |
| field | <code>string</code> | 字段 |

<a name="hlen"></a>

## hlen ⇒ <code>Promise</code>
命令用于获取哈希表中字段的数量

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>number</code> | 数据库 |
| key | <code>string</code> | key |

<a name="hincrby"></a>

## hincrby ⇒ <code>Promise</code>
为哈希表 key 中的指定字段的整数值加上增量 increment 。

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>number</code> | 数据库 |
| key | <code>string</code> | key |
| field | <code>string</code> | 字段 |
| increment | <code>number</code> | 字段 |

<a name="hincrbyfloat"></a>

## hincrbyfloat ⇒ <code>Promise</code>
为哈希表 key 中的指定字段的浮点数值加上增量 increment

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>number</code> | 数据库 |
| key | <code>string</code> | key |
| field | <code>string</code> | 字段 |
| increment | <code>number</code> | 字段 |

