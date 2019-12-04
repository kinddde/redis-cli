# pubSub 
## Constants

<dl>
<dt><a href="#publish">publish</a> ⇒ <code>Promise</code></dt>
<dd><p>将信息发送到指定的频道。</p>
</dd>
<dt><a href="#subscribe">subscribe</a> ⇒ <code>Promise</code></dt>
<dd><p>订阅给定的频道的信息。</p>
</dd>
</dl>

<a name="publish"></a>

## publish ⇒ <code>Promise</code>
将信息发送到指定的频道。

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | 频道名称 |
| value | <code>any</code> | 发送的消息 |

<a name="subscribe"></a>

## subscribe ⇒ <code>Promise</code>
订阅给定的频道的信息。

**Kind**: global constant  
**Returns**: <code>Promise</code> - 返回cancel  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>string</code> | 订阅的频道名称 |
| callback | <code>function</code> | 订阅执行的方法 |

