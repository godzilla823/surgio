(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{215:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"provider-服务提供者"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#provider-服务提供者"}},[t._v("#")]),t._v(" Provider 服务提供者")]),t._v(" "),a("p",[t._v("你可以在 "),a("code",[t._v("provider")]),t._v(" 目录内看到两个已经写好的 Provider，它们分别是订阅地址和自己维护的节点列表。")]),t._v(" "),a("p",[t._v("需要注意的是文件名即为该 Provider 的名称，后面在定义 Artifact 时会用到。")]),t._v(" "),a("p",[t._v("目前 Surgio 支持两种 Provider 类型：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("th",[t._v("描述")]),t._v(" "),a("th",[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("shadowsocks_json_subscribe")])]),t._v(" "),a("td",[t._v("针对 Windows 客户端的 Shadowsocks 订阅地址")]),t._v(" "),a("td",[t._v("通常命名为 "),a("em",[t._v("gui-config.json")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("shadowsocks_subscribe")])]),t._v(" "),a("td",[t._v("通用的 Shadowwsocks 订阅地址")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("shadowsocksr_subscribe")])]),t._v(" "),a("td",[t._v("通用的 Shadowwsocksr 订阅地址")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("v2rayn_subscribe")])]),t._v(" "),a("td",[t._v("V2rayN 订阅地址")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/2dust/v2rayN/wiki/%E8%AE%A2%E9%98%85%E5%8A%9F%E8%83%BD%E8%AF%B4%E6%98%8E",target:"_blank",rel:"noopener noreferrer"}},[t._v("协议"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("custom")]),t._v(" "),a("Badge",{attrs:{text:"推荐",vertical:"middle"}})],1),t._v(" "),a("td",[t._v("自己维护的节点")]),t._v(" "),a("td",[t._v("支持 Shadowsocks, Shadowsocksr, Snell, HTTPS, Vmess")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("clash")]),t._v(" "),a("Badge",{attrs:{text:"推荐",vertical:"middle"}})],1),t._v(" "),a("td",[t._v("Clash 配置")]),t._v(" "),a("td",[t._v("支持 Shadowsocks, Shadowsocksr, Snell, HTTPS, Vmess")])])])]),t._v(" "),a("h2",{attrs:{id:"shadowsocks-json-subscribe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shadowsocks-json-subscribe"}},[t._v("#")]),t._v(" shadowsocks_json_subscribe")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'shadowsocks_json_subscribe'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  udpRelay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#url"}},[t._v("#")]),t._v(" url")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("undefined")])]),t._v(" "),a("li",[a("Badge",{attrs:{text:"必须",vertical:"middle"}})],1)]),t._v(" "),a("p",[t._v("若机场没有提供这种订阅地址，推荐使用 Fndroid 的 "),a("a",{attrs:{href:"https://github.com/Fndroid/jsbox_script/wiki/%E5%BC%80%E6%94%BE%E6%8E%A5%E5%8F%A3%E4%BD%BF%E7%94%A8%E5%8F%8A%E8%AF%B4%E6%98%8E#surge%E6%89%98%E7%AE%A1%E8%BD%AC%E6%8D%A2shadowsockswindows%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"}},[t._v("接口"),a("OutboundLink")],1),t._v(" 进行转换。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("ul",[a("li",[t._v("如果你正在使用 "),a("a",{attrs:{href:"https://dlercloud.com/auth/register?affid=45071",target:"_blank",rel:"noopener noreferrer"}},[t._v("DlerCloud"),a("OutboundLink")],1),t._v("，可以使用 Surge 的托管订阅地址，然后使用 "),a("code",[t._v("surge2sswin")]),t._v(" 转换")])])]),t._v(" "),a("h3",{attrs:{id:"udprelay"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#udprelay"}},[t._v("#")]),t._v(" udpRelay")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("boolean")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("false")])])]),t._v(" "),a("p",[t._v("由于这种订阅协议不支持定义 UDP 转发的支持情况，所以单独出来进行配置。UDP 转发可以应用在 Surge 中。")]),t._v(" "),a("h2",{attrs:{id:"shadowsocks-subscribe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shadowsocks-subscribe"}},[t._v("#")]),t._v(" shadowsocks_subscribe")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'shadowsocks_subscribe'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  udpRelay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"url-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#url-2"}},[t._v("#")]),t._v(" url")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("undefined")])]),t._v(" "),a("li",[a("Badge",{attrs:{text:"必须",vertical:"middle"}})],1)]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("ul",[a("li",[t._v("如果你正在使用 "),a("a",{attrs:{href:"https://dlercloud.com/auth/register?affid=45071",target:"_blank",rel:"noopener noreferrer"}},[t._v("DlerCloud"),a("OutboundLink")],1),t._v("，可以使用 SS 订阅地址")])])]),t._v(" "),a("h3",{attrs:{id:"udprelay-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#udprelay-2"}},[t._v("#")]),t._v(" udpRelay")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("boolean")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("false")])])]),t._v(" "),a("p",[t._v("由于这种订阅协议不支持定义 UDP 转发的支持情况，所以单独出来进行配置。UDP 转发可以应用在 Surge 中。")]),t._v(" "),a("h2",{attrs:{id:"shadowsocksr-subscribe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shadowsocksr-subscribe"}},[t._v("#")]),t._v(" shadowsocksr_subscribe")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'shadowsocksr_subscribe'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"url-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#url-3"}},[t._v("#")]),t._v(" url")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("undefined")])]),t._v(" "),a("li",[a("Badge",{attrs:{text:"必须",vertical:"middle"}})],1)]),t._v(" "),a("h2",{attrs:{id:"v2rayn-subscribe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v2rayn-subscribe"}},[t._v("#")]),t._v(" v2rayn_subscribe")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'v2rayn_subscribe'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"url-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#url-4"}},[t._v("#")]),t._v(" url")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("undefined")])]),t._v(" "),a("li",[a("Badge",{attrs:{text:"必须",vertical:"middle"}})],1)]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("ul",[a("li",[t._v("Quantumult 的订阅格式和 V2rayN 的订阅格式有差异，不可以混用")]),t._v(" "),a("li",[t._v("如果你正在使用 "),a("a",{attrs:{href:"https://dlercloud.com/auth/register?affid=45071",target:"_blank",rel:"noopener noreferrer"}},[t._v("DlerCloud"),a("OutboundLink")],1),t._v("，可以使用「通用」类型的订阅地址")])])]),t._v(" "),a("h2",{attrs:{id:"clash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clash"}},[t._v("#")]),t._v(" clash "),a("Badge",{attrs:{text:"推荐",vertical:"middle"}})],1),t._v(" "),a("h3",{attrs:{id:"url-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#url-5"}},[t._v("#")]),t._v(" url")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("undefined")])]),t._v(" "),a("li",[a("Badge",{attrs:{text:"必须",vertical:"middle"}})],1)]),t._v(" "),a("h3",{attrs:{id:"udprelay-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#udprelay-3"}},[t._v("#")]),t._v(" udpRelay")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("boolean")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("false")])])]),t._v(" "),a("p",[t._v("我们发现部分机场的 Clash 订阅并没有设定 "),a("code",[t._v("udp")]),t._v("，所以你可以通过配置这个属性来强制设定节点的 UDP 转发支持情况。如果订阅节点中包含 "),a("code",[t._v("udp")]),t._v(" 字段，则该配置无效。")]),t._v(" "),a("h2",{attrs:{id:"custom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom"}},[t._v("#")]),t._v(" custom "),a("Badge",{attrs:{text:"推荐",vertical:"middle"}})],1),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'custom'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  nodeList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"nodelist"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nodelist"}},[t._v("#")]),t._v(" nodeList")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("NodeConfig[]")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("undefined")])]),t._v(" "),a("li",[a("Badge",{attrs:{text:"必须",vertical:"middle"}})],1)]),t._v(" "),a("p",[t._v("不同的类型的节点 "),a("code",[t._v("NodeConfig")]),t._v(" 结构有一些不同，下面是所有支持的节点类型：")]),t._v(" "),a("p",[a("em",[t._v("Shadowsocks")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'shadowsocks'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  nodeName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'🇺🇸US'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  hostname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'us.example.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  method"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chacha20-ietf-poly1305'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'password'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  obfs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tls'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// tls 或 http")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'obfs-host'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gateway-carry.icloud.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'udp-relay'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  tfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TCP Fast Open")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("em",[t._v("Shadowsocksr")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'shadowsocksr'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  nodeName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'🇭🇰HK'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  hostname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hk.example.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  method"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chacha20-ietf'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'password'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  obfs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tls1.2_ticket_auth'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  obfsparam"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'music.163.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  protocol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'auth_aes128_md5'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  protoparam"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'udp-relay'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  tfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TCP Fast Open")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("em",[t._v("Vmess")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  nodeName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'🇭🇰HK'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vmess'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  hostname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hk.example.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  method"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'auto'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 仅支持 auto/aes-128-gcm/chacha20-ietf-poly1305/none")]),t._v("\n  network"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ws'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 仅支持 tcp/ws")]),t._v("\n  alterId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'64'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  tls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'example.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  uuid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1386f85e-657b-4d6e-9d56-78badb75e1fd'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  tfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TCP Fast Open")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("em",[t._v("Snell")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'snell'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  nodeName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'🇭🇰HK'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  hostname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hk.example.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  psk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'RjEJRhNPps3DrYBcEQrcMe3q9NzFLMP'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  obfs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tls'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// tls 或 http")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("em",[t._v("HTTPS")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  nodeName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'🇭🇰HK'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  hostname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hk.example.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'username'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'password'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"公共属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#公共属性"}},[t._v("#")]),t._v(" 公共属性")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("公共属性可以定义在任何一种 Provider 中。")])]),t._v(" "),a("h3",{attrs:{id:"nodeconfig-enable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nodeconfig-enable"}},[t._v("#")]),t._v(" nodeConfig.enable")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("boolean")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("true")])])]),t._v(" "),a("p",[t._v("单独关闭某个节点输出到配置中。若没有 "),a("code",[t._v("enable")]),t._v(" 属性则默认打开。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  enable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'shadowsocks'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  nodeName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'🇺🇸US'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  hostname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'us.example.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10000'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  method"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chacha20-ietf-poly1305'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'password'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"provider-nodefilter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#provider-nodefilter"}},[t._v("#")]),t._v(" provider.nodeFilter")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("Function")])]),t._v(" "),a("li",[t._v("入参: "),a("code",[t._v("NodeConfig")])]),t._v(" "),a("li",[t._v("返回值: "),a("code",[t._v("boolean")])])]),t._v(" "),a("p",[t._v("有一些俗称「外贸机场」的服务商提供很多诸如马来西亚、土耳其的节点，不需要这些国家节点的朋友每次都要在数十个节点中寻找自己想要的。我们可以用这个方法把这些节点过滤掉。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" utils "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'surgio'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 过滤出名字中包含土耳其和马来西亚的节点")]),t._v("\n  nodeFilter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" utils"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useKeywords")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'土耳其'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'马来西亚'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("关于过滤器的自定义和其它进阶使用方法，请阅读 "),a("router-link",{attrs:{to:"/guide/advance/custom-filter.html"}},[t._v("「自定义过滤器」")]),t._v("。")],1)]),t._v(" "),a("h3",{attrs:{id:"provider-netflixfilter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#provider-netflixfilter"}},[t._v("#")]),t._v(" provider.netflixFilter")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("Function")])]),t._v(" "),a("li",[t._v("入参: "),a("code",[t._v("NodeConfig")])]),t._v(" "),a("li",[t._v("返回值: "),a("code",[t._v("boolean")])])]),t._v(" "),a("p",[t._v("该方法会覆盖 Surgio 内置的 "),a("code",[t._v("netflixFilter")]),t._v("。用于过滤出支持 Netflix 的节点。对于那些每一个节点都解锁流媒体的机场，也可以单独过滤出部分你喜欢的节点。")]),t._v(" "),a("p",[a("router-link",{attrs:{to:"/guide/custom-template.html#netflixfilter"}},[t._v("内置 "),a("code",[t._v("netflixFilter")]),t._v(" 的解释")]),t._v("。")],1),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 过滤出名字中包含 HK（大小写不敏感）的节点")]),t._v("\n  netflixFilter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" utils"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useKeywords")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hk'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HK'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"provider-youtubepremiumfilter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#provider-youtubepremiumfilter"}},[t._v("#")]),t._v(" provider.youtubePremiumFilter")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("Function")])]),t._v(" "),a("li",[t._v("入参: "),a("code",[t._v("NodeConfig")])]),t._v(" "),a("li",[t._v("返回值: "),a("code",[t._v("boolean")])])]),t._v(" "),a("p",[t._v("该方法会覆盖 Surgio 内置的 "),a("code",[t._v("youtubePremiumFilter")]),t._v("。用于过滤出支持 Youtube Premium 的节点。")]),t._v(" "),a("p",[a("router-link",{attrs:{to:"/guide/custom-template.html#youtubepremiumfilter"}},[t._v("内置 "),a("code",[t._v("youtubePremiumFilter")]),t._v(" 的解释")]),t._v("。")],1),t._v(" "),a("h3",{attrs:{id:"provider-customfilters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#provider-customfilters"}},[t._v("#")]),t._v(" provider.customFilters")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("object")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[t._v("自定义 Filter。关于自定义 Filter 的用法，请阅读 "),a("a",{attrs:{href:"/guide/advance/custom-filter"}},[t._v("进阶 - 自定义 Filter")]),t._v("。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("你现在可以定义 "),a("router-link",{attrs:{to:"/guide/custom-config.html#customfilters"}},[t._v("全局的过滤器")]),t._v(" 了！")],1)]),t._v(" "),a("h3",{attrs:{id:"provider-startport"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#provider-startport"}},[t._v("#")]),t._v(" provider.startPort")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("Number")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("61100")])])]),t._v(" "),a("p",[t._v("在生成 Surge 的 Shadowsocksr 和 Vmess 配置文件时，本地监听端口会根据此配置递增。这样做的好处是切换配置文件时不会遇到端口冲突。同一个 Provider 被用在不同的 Artifact 中也会进行递增。")]),t._v(" "),a("h3",{attrs:{id:"provider-addflag"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#provider-addflag"}},[t._v("#")]),t._v(" provider.addFlag")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("Boolean")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("false")])])]),t._v(" "),a("p",[t._v("在节点名称前加国旗 Emoji。需要注意的是，Surgio 是根据有限的节点名关键词判断位置的，如果无法匹配则会保留原节点名。你可以在所有的过滤器中检索国旗 Emoji。")]),t._v(" "),a("h3",{attrs:{id:"provider-tfo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#provider-tfo"}},[t._v("#")]),t._v(" provider.tfo")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("Boolean")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("false")])])]),t._v(" "),a("p",[t._v("是否为该订阅强制开启 TFO（TCP Fast Open），部分机场虽然支持 TFO 但是没有在订阅中开启，你可以通过这个配置强制打开。")])])}),[],!1,null,null,null);s.default=e.exports}}]);