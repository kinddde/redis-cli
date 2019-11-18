# string 
## Constants

<dl>
<dt><a href="#set">set</a> ⇒ <code>Promise</code></dt>
<dd><p>写入字符串</p>
</dd>
<dt><a href="#get">get</a> ⇒ <code>Promise</code></dt>
<dd><p>获取字符串</p>
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

