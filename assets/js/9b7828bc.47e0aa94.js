"use strict";(self.webpackChunkphoenixiq_github_io=self.webpackChunkphoenixiq_github_io||[]).push([[28679],{30730:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=t(85893),r=t(11151);const o={id:"phoenix-core-client",title:"\u5ba2\u6237\u7aef\u4ecb\u7ecd"},s=void 0,a={id:"phoenix-2.x/phoenix-core/phoenix-core-client",title:"\u5ba2\u6237\u7aef\u4ecb\u7ecd",description:"PhoenixClient\u4e3b\u8981\u7528\u4e8e\u5411PhoenixServer\u53d1\u9001Command\u548c\u63a5\u6536PhoenixServer\u8fd4\u56de\u7684Event",source:"@site/versioned_docs/version-2.5.5/phoenix-2.x/02-phoenix-core/01-client.md",sourceDirName:"phoenix-2.x/02-phoenix-core",slug:"/phoenix-2.x/phoenix-core/phoenix-core-client",permalink:"/docs/2.5.5/phoenix-2.x/phoenix-core/phoenix-core-client",draft:!1,unlisted:!1,editUrl:"https://github.com/PhoenixIQ/versioned_docs/version-2.5.5/phoenix-2.x/02-phoenix-core/01-client.md",tags:[],version:"2.5.5",sidebarPosition:1,frontMatter:{id:"phoenix-core-client",title:"\u5ba2\u6237\u7aef\u4ecb\u7ecd"},sidebar:"docs",previous:{title:"FAQ",permalink:"/docs/2.5.5/phoenix-2.x/phoenix/phoenix-faq"},next:{title:"\u5b9e\u4f53\u805a\u5408\u6839",permalink:"/docs/2.5.5/phoenix-2.x/phoenix-core/phoenix-core-entity-aggregate"}},c={},l=[{value:"maven\u4f9d\u8d56",id:"maven\u4f9d\u8d56",level:2},{value:"\u63a5\u53e3\u8bf4\u660e",id:"\u63a5\u53e3\u8bf4\u660e",level:2},{value:"\u4f7f\u7528\u6837\u4f8b",id:"\u4f7f\u7528\u6837\u4f8b",level:2},{value:"\u540c\u6b65\u8c03\u7528",id:"\u540c\u6b65\u8c03\u7528",level:3},{value:"\u5f02\u6b65\u8c03\u7528",id:"\u5f02\u6b65\u8c03\u7528",level:3},{value:"\u5ba2\u6237\u7aef\u914d\u7f6e",id:"\u5ba2\u6237\u7aef\u914d\u7f6e",level:2},{value:"\u5176\u4ed6\u7279\u6027",id:"\u5176\u4ed6\u7279\u6027",level:2},{value:"\u8bd5\u7b97\u63a5\u53e3",id:"\u8bd5\u7b97\u63a5\u53e3",level:3},{value:"\u81ea\u5b9a\u4e49 EventPublish \u6295\u9012 Key",id:"\u81ea\u5b9a\u4e49-eventpublish-\u6295\u9012-key",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"PhoenixClient"}),"\u4e3b\u8981\u7528\u4e8e\u5411",(0,i.jsx)(n.strong,{children:"PhoenixServer"}),"\u53d1\u9001",(0,i.jsx)(n.strong,{children:"Command"}),"\u548c\u63a5\u6536",(0,i.jsx)(n.strong,{children:"PhoenixServer"}),"\u8fd4\u56de\u7684",(0,i.jsx)(n.strong,{children:"Event"})]}),"\n",(0,i.jsx)(n.h2,{id:"maven\u4f9d\u8d56",children:"maven\u4f9d\u8d56"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:"<dependency>\n    <groupId>com.iquantex</groupId>\n    <artifactId>phoenix-client-starter</artifactId>\n    <version>2.5.5</version>\n</dependency>\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u63a5\u53e3\u8bf4\u660e",children:"\u63a5\u53e3\u8bf4\u660e"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"PhoenixClient"}),"\u63d0\u4f9b\u4e24\u79cd\u63a5\u53e3,\u9700\u8981\u56de\u590d\u4ee5\u53ca\u4e0d\u9700\u8981\u56de\u590d\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"/**\n  * \u53d1\u9001\u63a5\u53e3\n  *\n  * @param msg               rpc\u8c03\u7528\u6d88\u606f\n  * @param targetTopic       \u6d88\u606f\u76ee\u6807\u670d\u52a1\u7684Topic\n  * @param requestId         \u8bf7\u6c42ID\n  * @return                  RPC\u8fd4\u56de\u7ed3\u679c\n  */\nFuture<RpcResult> send(Object msg, String targetTopic, String requestId);\n\n/**\n  * \u53d1\u9001\u63a5\u53e3\uff0c\u4e0d\u9700\u8981\u6062\u590d\u6d88\u606f\n  *\n  * @param msg               rpc\u8c03\u7528\u6d88\u606f\n  * @param targetTopic       \u6d88\u606f\u76ee\u6807\u670d\u52a1\u7684Topic\n  * @param requestId         \u8bf7\u6c42ID\n  */\nvoid sendNoReply(Object msg, String targetTopic, String requestId);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u4f7f\u7528\u6837\u4f8b",children:"\u4f7f\u7528\u6837\u4f8b"}),"\n",(0,i.jsxs)(n.p,{children:["\u542f\u52a8",(0,i.jsx)(n.strong,{children:"Phoenix"}),"\u9879\u76ee\u540e\uff0c",(0,i.jsx)(n.strong,{children:"Phoenix"}),"\u4f1a\u81ea\u52a8\u521b\u5efa",(0,i.jsx)(n.strong,{children:"PhoenixClient Bean"}),",\u53ef\u4ee5\u901a\u8fc7",(0,i.jsx)(n.code,{children:"@Autowired"}),"\u8fdb\u884c\u4f9d\u8d56\u6ce8\u5165"]}),"\n",(0,i.jsx)(n.h3,{id:"\u540c\u6b65\u8c03\u7528",children:"\u540c\u6b65\u8c03\u7528"}),"\n",(0,i.jsxs)(n.p,{children:["\u901a\u8fc7\u8c03\u7528 ",(0,i.jsx)(n.strong,{children:"send()"})," \u65b9\u6cd5\u8fd4\u56de\u7684 ",(0,i.jsx)(n.strong,{children:"Future"})," \u5bf9\u8c61\u7684 ",(0,i.jsx)(n.strong,{children:"get()"})," \u65b9\u6cd5\uff0c\u540c\u6b65\u63a5\u6536\u8bf7\u6c42\u7ed3\u679c\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'@Autowired\nprivate PhoenixClient client;\n\npublic void send() {\n    Future<RpcResult> future = client.send(new Command(), "target_topic", UUID.randomUUID());\n    RpcResult rpcResult = future.get();\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"\u5f02\u6b65\u8c03\u7528",children:"\u5f02\u6b65\u8c03\u7528"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'@Autowired\nprivate PhoenixClient client;\n\npublic void send() {\n    client.sendNoReply(new Command(), "target_topic", UUID.randomUUID());\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"\u5ba2\u6237\u7aef\u914d\u7f6e",children:"\u5ba2\u6237\u7aef\u914d\u7f6e"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728",(0,i.jsx)(n.strong,{children:"Spring Boot"}),"\u914d\u7f6e\u6587\u4ef6\u4e2d\u6dfb\u52a0",(0,i.jsx)(n.strong,{children:"Phoenix"}),"\u914d\u7f6e\u4fe1\u606f, 2.2.1\u7248\u672c\u540ePhoenix-Client\u589e\u52a0\u6d88\u606f\u91cd\u8bd5\u529f\u80fd\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"quantex:\n  phoenix:\n    client:                                     # client\u7aef\u914d\u7f6e\n      name: ${spring.application.name}-client   # \u670d\u52a1\u540d\u79f0\n      max-retry-num: 2\t\t\t\t\t\t              # \u6700\u5927\u91cd\u8bd5\u6b21\u6570\n      retry-interval: 1000000000\t\t          \t# \u91cd\u8bd5\u95f4\u9694\uff08\u5355\u4f4d\u6beb\u79d2\uff0c\u9ed8\u8ba410s\uff09\n      mq:\n        type: kafka                             # mq\u7c7b\u578b\n        address: 127.0.0.1:9092                 # mq\u670d\u52a1\u5730\u5740 \n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u76f8\u5173\u914d\u7f6e\u4ecb\u7ecd \u8bf7\u53c2\u89c1: ",(0,i.jsx)(n.a,{href:"./phoenix-core-config",children:"\u914d\u7f6e\u8be6\u60c5"})]}),"\n",(0,i.jsx)(n.h2,{id:"\u5176\u4ed6\u7279\u6027",children:"\u5176\u4ed6\u7279\u6027"}),"\n",(0,i.jsx)(n.h3,{id:"\u8bd5\u7b97\u63a5\u53e3",children:"\u8bd5\u7b97\u63a5\u53e3"}),"\n",(0,i.jsx)(n.p,{children:"Phoenix \u5ba2\u6237\u7aef\u63d0\u4f9b\u8bd5\u7b97\u63a5\u53e3\u4f9b\u7528\u6237\u7aef\u4f7f\u7528\uff0c\u5f53\u7528\u6237\u6709\u5982\u4e0b\u9700\u6c42\u65f6\uff0c\u53ef\u4ee5\u8003\u8651\u4f7f\u7528\u8bd5\u7b97\u63a5\u53e3\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u67e5\u8be2\u5386\u53f2\u72b6\u6001"}),"\n",(0,i.jsx)(n.li,{children:"\u6309\u6307\u5b9a\u7248\u672c/\u65f6\u95f4\u6233\u67e5\u8be2\u5386\u53f2\u72b6\u6001"}),"\n",(0,i.jsx)(n.li,{children:"\u8bd5\u7b97\u573a\u666f\uff08\u4fee\u6539\u4e86\u67d0\u4e2a\u503c\u4e4b\u540e\uff0c\u67e5\u770b\u5176\u4ed6\u503c\u7684\u53d8\u5316\u3002\u4f46\u662f\u5f53\u524d\u64cd\u4f5c\u53c8\u4e0d\u5e0c\u671b\u4fee\u6539\u72b6\u6001\uff0c\u53ea\u53bb\u8ba1\u7b97\u5f53\u4e0b\u7684\u7ed3\u679c\u5c31\u884c\u3002\uff09"}),"\n",(0,i.jsx)(n.li,{children:"\u6309\u6307\u5b9a\u7248\u672c/\u65f6\u95f4\u6233\u8fdb\u884c\u8bd5\u7b97"}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"\u63d0\u793a",type:"info",children:(0,i.jsx)(n.p,{children:"Phoenix \u6240\u63d0\u4f9b\u7684\u8bd5\u7b97\u529f\u80fd\uff0c\u662f\u901a\u8fc7\u514b\u9686\u526f\u672c\u805a\u5408\u6839\u6765\u8fdb\u884c\u65f6\u8bd5\u7b97\uff0c\u5bf9\u539f\u805a\u5408\u6839\u4e0d\u4f1a\u9020\u6210\u4efb\u4f55\u5f71\u54cd\u3002\u4e14\u9488\u5bf9\u540c\u4e00\u4e2a\u805a\u5408\u6839\u7684\u591a\u4e2a\u8bd5\u7b97\u8bf7\u6c42\u53ef\u4ee5\u505a\u5230\u5e76\u53d1\u5904\u7406\u3002"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"    /**\n     * \u8bd5\u7b97 - \u6839\u636e\u6700\u65b0\u72b6\u6001\u8fdb\u884c\u8bd5\u7b97\n     *\n     * @param msg msg\n     * @param targetTopic \u76ee\u6807topic\n     * @param requestId \u8bf7\u6c42id\n     * @param timeout \u7b49\u5f85\u7684\u6700\u957f\u65f6\u95f4\n     * @param unit \u8d85\u65f6\u53c2\u6570\u7684\u65f6\u95f4\u5355\u4f4d\n     * @return \u53ef\u8fd4\u56derpc\u8c03\u7528\u7ed3\u679c\n     */\n    public RpcResult trial(\n            Object msg, String targetTopic, String requestId, long timeout, TimeUnit unit)\n            throws ExecutionException, InterruptedException, TimeoutException {\n        return trialByVersion(msg, targetTopic, requestId, -1L, timeout, unit);\n    }\n\n    /**\n     * \u8bd5\u7b97 - \u6839\u636e\u5386\u53f2\u7248\u672c\u6062\u590d\u5386\u53f2\u72b6\u6001\uff0c\u5e76\u5b8c\u6210\u8bd5\u7b97\n     *\n     * @param msg msg\n     * @param targetTopic \u76ee\u6807topic\n     * @param requestId \u8bf7\u6c42id\n     * @param version \u5386\u53f2\u7248\u672c\u53f7\n     * @param timeout \u7b49\u5f85\u7684\u6700\u957f\u65f6\u95f4\n     * @param unit \u8d85\u65f6\u53c2\u6570\u7684\u65f6\u95f4\u5355\u4f4d\n     * @return \u53ef\u8fd4\u56derpc\u8c03\u7528\u7ed3\u679c\n     */\n    public RpcResult trialByVersion(\n            Object msg,\n            String targetTopic,\n            String requestId,\n            Long version,\n            long timeout,\n            TimeUnit unit)\n            throws ExecutionException, InterruptedException, TimeoutException {\n        HashMap<String, String> map = new HashMap<>(1);\n        map.put(MetaDataKey.TRIAL_BY_VERSION, String.valueOf(version));\n        return send(msg, targetTopic, requestId, map).get(timeout, unit);\n    }\n\n    /**\n     * \u8bd5\u7b97 - \u6839\u636e\u5386\u53f2\u65f6\u95f4\u6233\u6062\u590d\u5386\u53f2\u72b6\u6001\uff0c\u5e76\u5b8c\u6210\u8bd5\u7b97\n     *\n     * @param msg rpc\u8c03\u7528\u6d88\u606f\n     * @param requestId \u8bf7\u6c42ID\n     * @param timestamp \u5386\u53f2\u65f6\u95f4\u6233,\u5355\u4f4d\u6beb\u79d2\n     * @param timeout \u7b49\u5f85\u7684\u6700\u957f\u65f6\u95f4\n     * @param unit \u8d85\u65f6\u53c2\u6570\u7684\u65f6\u95f4\u5355\u4f4d\n     * @return \u8fd4\u56derpc\u8c03\u7528\u7ed3\u679c\n     */\n    public RpcResult trialByTimestamp(\n            Object msg,\n            String targetTopic,\n            String requestId,\n            Long timestamp,\n            long timeout,\n            TimeUnit unit)\n            throws ExecutionException, InterruptedException, TimeoutException {\n        HashMap<String, String> map = new HashMap<>(1);\n        map.put(MetaDataKey.TRIAL_BY_TIMESTAMP, String.valueOf(timestamp));\n        return send(msg, targetTopic, requestId, map).get(timeout, unit);\n    }\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u81ea\u5b9a\u4e49-eventpublish-\u6295\u9012-key",children:"\u81ea\u5b9a\u4e49 EventPublish \u6295\u9012 Key"}),"\n",(0,i.jsxs)(n.p,{children:["\u5bf9\u4e8e EventPublish \u4e2d",(0,i.jsx)(n.a,{href:"/docs/2.5.5/phoenix-2.x/phoenix-event-publish/event-publish-integration#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8A%95%E9%80%92-key",children:(0,i.jsx)("u",{children:"\u81ea\u5b9a\u4e49\u6295\u9012 Key"})})," \u7684\u9700\u6c42, PhoenixClient \u652f\u6301\u5982\u4e0b API \u81ea\u5b9a\u4e49 EventPublish \u6295\u9012 Key:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"/**\n * Client\u7aef\u53d1\u9001\u63a5\u53e3\n *\n * @param msg rpc\u8c03\u7528\u6d88\u606f\n * @param targetTopic \u6295\u9012 Topic\n * @param requestId \u8bf7\u6c42ID\n * @param eventPublishKey EventPublish \u6295\u9012 Event \u65f6\u53d1\u9001\u7684 Key\n * @return Future\uff0c\u53ef\u8fd4\u56derpc\u8c03\u7528\u7ed3\u679c\n */\npublic Future<RpcResult> sendWithEventPublishKey(Object msg, String targetTopic, String requestId, String eventPublishKey);\n\n/**\n * Client \u7aef\u5f02\u6b65\u53d1\u9001\u63a5\u53e3.\n *\n * @param msg\n * @param targetTopic \u63a5\u6536\u547d\u4ee4\u7684\u670d\u52a1 Topic\n * @param requestId\n * @param eventPublishKey \u81ea\u5b9a\u4e49EventPublish Key\n */\npublic void sendNoReplyWithEventPublishKey(Object msg, String targetTopic, String requestId, String eventPublishKey);\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var i=t(67294);const r={},o=i.createContext(r);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);