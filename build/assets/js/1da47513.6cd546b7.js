"use strict";(self.webpackChunkphoenix_website_next=self.webpackChunkphoenix_website_next||[]).push([[6233],{37326:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=i(85893),t=i(11151);const o={id:"phoenix-core-client",title:"\u5ba2\u6237\u7aef\u4ecb\u7ecd"},s=void 0,c={id:"phoenix-2.x/phoenix-core/phoenix-core-client",title:"\u5ba2\u6237\u7aef\u4ecb\u7ecd",description:"PhoenixClient\u4e3b\u8981\u7528\u4e8e\u5411PhoenixServer\u53d1\u9001Command\u548c\u63a5\u6536PhoenixServer\u8fd4\u56de\u7684Event",source:"@site/versioned_docs/version-2.4.0/phoenix-2.x/02-phoenix-core/01-client.md",sourceDirName:"phoenix-2.x/02-phoenix-core",slug:"/phoenix-2.x/phoenix-core/phoenix-core-client",permalink:"/docs/2.4.0/phoenix-2.x/phoenix-core/phoenix-core-client",draft:!1,unlisted:!1,editUrl:"https://github.com/PhoenixIQ/versioned_docs/version-2.4.0/phoenix-2.x/02-phoenix-core/01-client.md",tags:[],version:"2.4.0",sidebarPosition:1,frontMatter:{id:"phoenix-core-client",title:"\u5ba2\u6237\u7aef\u4ecb\u7ecd"},sidebar:"docs",previous:{title:"\u5feb\u901f\u5165\u95e8",permalink:"/docs/2.4.0/phoenix-2.x/phoenix-core/phoenix-core-quick-start"},next:{title:"\u5b9e\u4f53\u805a\u5408\u6839",permalink:"/docs/2.4.0/phoenix-2.x/phoenix-core/phoenix-core-entity-aggregate"}},a={},l=[{value:"maven\u4f9d\u8d56",id:"maven\u4f9d\u8d56",level:2},{value:"\u63a5\u53e3\u8bf4\u660e",id:"\u63a5\u53e3\u8bf4\u660e",level:2},{value:"\u4f7f\u7528\u6837\u4f8b",id:"\u4f7f\u7528\u6837\u4f8b",level:2},{value:"\u540c\u6b65\u8c03\u7528",id:"\u540c\u6b65\u8c03\u7528",level:3},{value:"\u5f02\u6b65\u8c03\u7528",id:"\u5f02\u6b65\u8c03\u7528",level:3},{value:"\u5ba2\u6237\u7aef\u914d\u7f6e",id:"\u5ba2\u6237\u7aef\u914d\u7f6e",level:2},{value:"\u5386\u53f2\u67e5\u8be2\u63a5\u53e3",id:"\u5386\u53f2\u67e5\u8be2\u63a5\u53e3",level:2},{value:"\u6839\u636eVersion\u67e5\u8be2\u5386\u53f2\u72b6\u6001",id:"\u6839\u636eversion\u67e5\u8be2\u5386\u53f2\u72b6\u6001",level:3},{value:"\u6839\u636e\u4e8b\u4ef6\u5904\u7406\u65f6\u95f4\u67e5\u8be2\u5386\u53f2\u72b6\u6001",id:"\u6839\u636e\u4e8b\u4ef6\u5904\u7406\u65f6\u95f4\u67e5\u8be2\u5386\u53f2\u72b6\u6001",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"PhoenixClient"}),"\u4e3b\u8981\u7528\u4e8e\u5411",(0,r.jsx)(n.strong,{children:"PhoenixServer"}),"\u53d1\u9001",(0,r.jsx)(n.strong,{children:"Command"}),"\u548c\u63a5\u6536",(0,r.jsx)(n.strong,{children:"PhoenixServer"}),"\u8fd4\u56de\u7684",(0,r.jsx)(n.strong,{children:"Event"})]}),"\n",(0,r.jsx)(n.h2,{id:"maven\u4f9d\u8d56",children:"maven\u4f9d\u8d56"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:"<dependency>\n    <groupId>com.iquantex</groupId>\n    <artifactId>phoenix-client-starter</artifactId>\n    <version>2.4.0</version>\n</dependency>\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u63a5\u53e3\u8bf4\u660e",children:"\u63a5\u53e3\u8bf4\u660e"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"PhoenixClient"}),"\u63d0\u4f9b\u4e24\u79cd\u63a5\u53e3,\u9700\u8981\u56de\u590d\u4ee5\u53ca\u4e0d\u9700\u8981\u56de\u590d\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"/**\n  * \u53d1\u9001\u63a5\u53e3\n  *\n  * @param msg               rpc\u8c03\u7528\u6d88\u606f\n  * @param targetTopic       \u6d88\u606f\u76ee\u6807\u670d\u52a1\u7684Topic\n  * @param requestId         \u8bf7\u6c42ID\n  * @return                  RPC\u8fd4\u56de\u7ed3\u679c\n  */\nFuture<RpcResult> send(Object msg, String targetTopic, String requestId);\n\n/**\n  * \u53d1\u9001\u63a5\u53e3\uff0c\u4e0d\u9700\u8981\u6062\u590d\u6d88\u606f\n  *\n  * @param msg               rpc\u8c03\u7528\u6d88\u606f\n  * @param targetTopic       \u6d88\u606f\u76ee\u6807\u670d\u52a1\u7684Topic\n  * @param requestId         \u8bf7\u6c42ID\n  */\nvoid sendNoReply(Object msg, String targetTopic, String requestId);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u4f7f\u7528\u6837\u4f8b",children:"\u4f7f\u7528\u6837\u4f8b"}),"\n",(0,r.jsxs)(n.p,{children:["\u542f\u52a8",(0,r.jsx)(n.strong,{children:"Phoenix"}),"\u9879\u76ee\u540e\uff0c",(0,r.jsx)(n.strong,{children:"Phoenix"}),"\u4f1a\u81ea\u52a8\u521b\u5efa",(0,r.jsx)(n.strong,{children:"PhoenixClient Bean"}),",\u53ef\u4ee5\u901a\u8fc7",(0,r.jsx)(n.code,{children:"@Autowired"}),"\u8fdb\u884c\u4f9d\u8d56\u6ce8\u5165"]}),"\n",(0,r.jsx)(n.h3,{id:"\u540c\u6b65\u8c03\u7528",children:"\u540c\u6b65\u8c03\u7528"}),"\n",(0,r.jsxs)(n.p,{children:["\u901a\u8fc7\u8c03\u7528 ",(0,r.jsx)(n.strong,{children:"send()"})," \u65b9\u6cd5\u8fd4\u56de\u7684 ",(0,r.jsx)(n.strong,{children:"Future"})," \u5bf9\u8c61\u7684 ",(0,r.jsx)(n.strong,{children:"get()"})," \u65b9\u6cd5\uff0c\u540c\u6b65\u63a5\u6536\u8bf7\u6c42\u7ed3\u679c\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'@Autowired\nprivate PhoenixClient client;\n\npublic void send() {\n    Future<RpcResult> future = client.send(new Command(), "target_topic", UUID.randomUUID());\n    RpcResult rpcResult = future.get();\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"\u5f02\u6b65\u8c03\u7528",children:"\u5f02\u6b65\u8c03\u7528"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'@Autowired\nprivate PhoenixClient client;\n\npublic void send() {\n    client.sendNoReply(new Command(), "target_topic", UUID.randomUUID());\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u5ba2\u6237\u7aef\u914d\u7f6e",children:"\u5ba2\u6237\u7aef\u914d\u7f6e"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728",(0,r.jsx)(n.strong,{children:"Spring Boot"}),"\u914d\u7f6e\u6587\u4ef6\u4e2d\u6dfb\u52a0",(0,r.jsx)(n.strong,{children:"Phoenix"}),"\u914d\u7f6e\u4fe1\u606f, 2.2.1\u7248\u672c\u540ePhoenix-Client\u589e\u52a0\u6d88\u606f\u91cd\u8bd5\u529f\u80fd\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"quantex:\n  phoenix:\n    client:                                     # client\u7aef\u914d\u7f6e\n      name: ${spring.application.name}-client   # \u670d\u52a1\u540d\u79f0\n      max-retry-num: 2\t\t\t\t\t\t              # \u6700\u5927\u91cd\u8bd5\u6b21\u6570\n      retry-interval: 1000000000\t\t          \t# \u91cd\u8bd5\u95f4\u9694\uff08\u5355\u4f4d\u6beb\u79d2\uff0c\u9ed8\u8ba410s\uff09\n      mq:\n        type: kafka                             # mq\u7c7b\u578b\n        address: 127.0.0.1:9092                 # mq\u670d\u52a1\u5730\u5740 \n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u5386\u53f2\u67e5\u8be2\u63a5\u53e3",children:"\u5386\u53f2\u67e5\u8be2\u63a5\u53e3"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Phoenix \u4ece2.4.0\u7248\u672c\u5f00\u59cb\u652f\u6301\u5bf9\u805a\u5408\u6839\u5386\u53f2\u72b6\u6001\u67e5\u8be2\u7684\u529f\u80fd"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u60f3\u8981\u67e5\u8be2\u805a\u5408\u6839\u5386\u53f2\u72b6\u6001,\u9700\u8981\u4f7f\u7528Phoenix Client\u7279\u5b9a\u7684send\u65b9\u6cd5\u53d1\u9001\u5386\u53f2\u67e5\u8be2\u6307\u4ee4,\u53ef\u4ee5\u6309\u7167Version\u6216\u8005\u4e8b\u4ef6\u5904\u7406\u65f6\u95f4\u6765\u6307\u5b9a\u7684\u5386\u53f2\u72b6\u6001,\u7136\u540e\u6267\u884c\u67e5\u8be2\u6307\u4ee4."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u9700\u8981\u6ce8\u610f:"})," \u5386\u53f2\u67e5\u8be2\u4f1a\u91cd\u65b0\u8d70\u4e00\u904dEventSourcing\u6062\u590d\u5386\u53f2\u805a\u5408\u6839\u72b6\u6001\u7136\u540e\u6267\u884c\u67e5\u8be2\u6307\u4ee4,\u76ee\u524dPhoenix\u672a\u5bf9\u5386\u53f2\u72b6\u6001\u8fdb\u884c\u7f13\u5b58,\u6240\u4ee5\u5386\u53f2\u72b6\u6001\u67e5\u8be2\u5bf9\u6027\u80fd\u6d88\u8017\u8f83\u5927,\u8fd8\u8bf7\u914c\u60c5\u4f7f\u7528.\u5982\u6709\u5927\u91cf\u91cd\u590d\u67e5\u8be2\u5386\u53f2\u72b6\u6001\u7684\u9700\u6c42,\u8bf7\u53ca\u65f6\u8054\u7cfbPhoenix\u7ec4!"]}),"\n",(0,r.jsx)(n.h3,{id:"\u6839\u636eversion\u67e5\u8be2\u5386\u53f2\u72b6\u6001",children:"\u6839\u636eVersion\u67e5\u8be2\u5386\u53f2\u72b6\u6001"}),"\n",(0,r.jsx)(n.p,{children:"\u67e5\u8be2\u6307\u5b9aVersion\u7684\u5386\u53f2\u72b6\u6001,\u5982\u679c\u5f53\u524d\u805a\u5408\u6839Version\u5c0f\u4e8e\u8981\u67e5\u8be2\u7684Version,\u5219\u4f1a\u67e5\u8be2\u6700\u65b0\u72b6\u6001"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"/**\n * client\u7aef\u53d1\u9001\u63a5\u53e3,\u7528\u4e8e\u6839\u636e\u7248\u672c\u67e5\u8be2\u5386\u53f2\u72b6\u6001,msg\u505a\u7528\u4e0eQueryHandle\u6807\u8bb0\u7684\u65b9\u6cd5,\u53ca\u67e5\u8be2\u6307\u4ee4\n *\n * @param msg msg\n * @param targetTopic \u76ee\u6807topic\n * @param requestId \u8bf7\u6c42id\n * @param version \u5386\u53f2\u7248\u672c\u53f7\n * @return \u53ef\u8fd4\u56derpc\u8c03\u7528\u7ed3\u679c\n */\npublic RpcResult sendHistoryQueryCmdByVersion(Object msg, String targetTopic, String requestId, Long version) throws ExecutionException, InterruptedException;\n\n/**\n * client\u7aef\u53d1\u9001\u63a5\u53e3,\u7528\u4e8e\u6839\u636e\u7248\u672c\u67e5\u8be2\u5386\u53f2\u72b6\u6001,msg\u505a\u7528\u4e0eQueryHandle\u6807\u8bb0\u7684\u65b9\u6cd5,\u53ca\u67e5\u8be2\u6307\u4ee4\n *\n * @param msg msg\n * @param targetTopic \u76ee\u6807topic\n * @param requestId \u8bf7\u6c42id\n * @param version \u5386\u53f2\u7248\u672c\u53f7\n * @param timeout \u7b49\u5f85\u7684\u6700\u957f\u65f6\u95f4\n * @param unit \u8d85\u65f6\u53c2\u6570\u7684\u65f6\u95f4\u5355\u4f4d\n * @return \u53ef\u8fd4\u56derpc\u8c03\u7528\u7ed3\u679c\n */\npublic RpcResult sendHistoryQueryCmdByVersion(Object msg, String targetTopic, String requestId, Long version, long timeout, TimeUnit unit) throws InterruptedException, ExecutionException, TimeoutException;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u6839\u636e\u4e8b\u4ef6\u5904\u7406\u65f6\u95f4\u67e5\u8be2\u5386\u53f2\u72b6\u6001",children:"\u6839\u636e\u4e8b\u4ef6\u5904\u7406\u65f6\u95f4\u67e5\u8be2\u5386\u53f2\u72b6\u6001"}),"\n",(0,r.jsx)(n.p,{children:"\u67e5\u8be2\u6307\u5b9a\u65f6\u95f4\u805a\u5408\u6839\u7684\u72b6\u6001,\u5982\u679c\u5f53\u524d\u805a\u5408\u6839\u65f6\u95f4\u5c0f\u4e8e\u8981\u67e5\u8be2\u7684\u65f6\u95f4,\u5219\u4f1a\u67e5\u8be2\u6700\u65b0\u72b6\u6001"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"/**\n * Client\u7aef\u53d1\u9001\u63a5\u53e3,\u7528\u6237\u6839\u636e\u5386\u53f2\u65f6\u95f4\u6233\u67e5\u8be2\u5386\u53f2\u72b6\u6001,msg\u505a\u7528\u4e0eQueryHandle\u6807\u8bb0\u7684\u65b9\u6cd5\n *\n * @param msg rpc\u8c03\u7528\u6d88\u606f\n * @param requestId \u8bf7\u6c42ID\n * @param timestamp \u5386\u53f2\u65f6\u95f4\u6233,\u5355\u4f4d\u6beb\u79d2\n * @return \u8fd4\u56derpc\u8c03\u7528\u7ed3\u679c\n */\npublic RpcResult sendHistoryQueryCmdByTimestamp(Object msg, String targetTopic, String requestId, Long timestamp) throws ExecutionException, InterruptedException;\n\n/**\n * Client\u7aef\u53d1\u9001\u63a5\u53e3,\u7528\u6237\u6839\u636e\u5386\u53f2\u65f6\u95f4\u6233\u67e5\u8be2\u5386\u53f2\u72b6\u6001,msg\u505a\u7528\u4e0eQueryHandle\u6807\u8bb0\u7684\u65b9\u6cd5\n *\n * @param msg rpc\u8c03\u7528\u6d88\u606f\n * @param requestId \u8bf7\u6c42ID\n * @param timestamp \u5386\u53f2\u65f6\u95f4\u6233,\u5355\u4f4d\u6beb\u79d2\n * @param timeout \u7b49\u5f85\u7684\u6700\u957f\u65f6\u95f4\n * @param unit \u8d85\u65f6\u53c2\u6570\u7684\u65f6\u95f4\u5355\u4f4d\n * @return \u8fd4\u56derpc\u8c03\u7528\u7ed3\u679c\n */\npublic RpcResult sendHistoryQueryCmdByTimestamp(Object msg, String targetTopic, String requestId, Long timestamp, long timeout, TimeUnit unit) throws ExecutionException, InterruptedException, TimeoutException;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u76f8\u5173\u914d\u7f6e\u4ecb\u7ecd \u8bf7\u53c2\u89c1: ",(0,r.jsx)(n.a,{href:"./phoenix-core-config",children:"\u914d\u7f6e\u8be6\u60c5"})]})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>s});var r=i(67294);const t={},o=r.createContext(t);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);