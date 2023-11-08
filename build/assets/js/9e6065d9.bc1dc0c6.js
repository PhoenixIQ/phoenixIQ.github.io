"use strict";(self.webpackChunkphoenix_website_next=self.webpackChunkphoenix_website_next||[]).push([[26928],{52303:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>d,metadata:()=>s,toc:()=>c});var t=a(85893),i=a(11151);const d={id:"phoenix-distributed-data",title:"\u5206\u5e03\u5f0f\u6570\u636e"},r=void 0,s={id:"phoenix-2.x/phoenix-core/phoenix-distributed-data",title:"\u5206\u5e03\u5f0f\u6570\u636e",description:"\u6b64\u90e8\u5206\u7684 API \u8fd8\u5904\u4e8e\u8bd5\u9a8c\u9636\u6bb5, \u53ef\u80fd\u5728\u540e\u7eed\u7684\u7248\u672c\u4e2d\u4f1a\u53d1\u751f\u53d8\u66f4!",source:"@site/versioned_docs/version-2.5.4/phoenix-2.x/02-phoenix-core/07-distributed-data.md",sourceDirName:"phoenix-2.x/02-phoenix-core",slug:"/phoenix-2.x/phoenix-core/phoenix-distributed-data",permalink:"/docs/2.5.4/phoenix-2.x/phoenix-core/phoenix-distributed-data",draft:!1,unlisted:!1,editUrl:"https://github.com/PhoenixIQ/versioned_docs/version-2.5.4/phoenix-2.x/02-phoenix-core/07-distributed-data.md",tags:[],version:"2.5.4",sidebarPosition:7,frontMatter:{id:"phoenix-distributed-data",title:"\u5206\u5e03\u5f0f\u6570\u636e"},sidebar:"docs",previous:{title:"\u4e8b\u4ef6\u7ba1\u7406",permalink:"/docs/2.5.4/phoenix-2.x/phoenix-core/phoenix-core-event-store"},next:{title:"\u8ba2\u9605\u4e0e\u5e7f\u64ad",permalink:"/docs/2.5.4/phoenix-2.x/phoenix-core/phoenix-subscribe-pub"}},l={},c=[{value:"\u529f\u80fd\u4ecb\u7ecd",id:"\u529f\u80fd\u4ecb\u7ecd",level:2},{value:"API \u4ecb\u7ecd",id:"api-\u4ecb\u7ecd",level:2},{value:"\u5ba2\u6237\u7aef API",id:"\u5ba2\u6237\u7aef-api",level:3},{value:"Phoenix-Client API",id:"phoenix-client-api",level:4},{value:"Phoenix-Distributed-Data",id:"phoenix-distributed-data",level:4},{value:"\u66f4\u65b0\u5206\u5e03\u5f0f\u6570\u636e",id:"\u66f4\u65b0\u5206\u5e03\u5f0f\u6570\u636e",level:3},{value:"\u652f\u6301\u81ea\u5b9a\u4e49\u5206\u5e03\u5f0f\u6570\u636e\u7684\u83b7\u53d6\u65b9\u5f0f",id:"\u652f\u6301\u81ea\u5b9a\u4e49\u5206\u5e03\u5f0f\u6570\u636e\u7684\u83b7\u53d6\u65b9\u5f0f",level:3},{value:"\u503c\u8fc7\u671f\u529f\u80fd",id:"\u503c\u8fc7\u671f\u529f\u80fd",level:3},{value:"1. \u672c\u5730\u8fc7\u671f\u65f6\u95f4",id:"1-\u672c\u5730\u8fc7\u671f\u65f6\u95f4",level:4},{value:"2. \u8fdc\u7a0b\u8fc7\u671f\u65f6\u95f4",id:"2-\u8fdc\u7a0b\u8fc7\u671f\u65f6\u95f4",level:4},{value:"3. \u81ea\u5b9a\u4e49\u8fc7\u671f\u65f6\u95f4\u7684\u65f6\u949f",id:"3-\u81ea\u5b9a\u4e49\u8fc7\u671f\u65f6\u95f4\u7684\u65f6\u949f",level:4},{value:"\u4f7f\u7528\u8bf4\u660e",id:"\u4f7f\u7528\u8bf4\u660e",level:2}];function o(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:":::danger API May change"}),"\n",(0,t.jsx)(n.p,{children:"\u6b64\u90e8\u5206\u7684 API \u8fd8\u5904\u4e8e\u8bd5\u9a8c\u9636\u6bb5, \u53ef\u80fd\u5728\u540e\u7eed\u7684\u7248\u672c\u4e2d\u4f1a\u53d1\u751f\u53d8\u66f4!"}),"\n",(0,t.jsx)(n.p,{children:":::"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd\u4ecb\u7ecd",children:"\u529f\u80fd\u4ecb\u7ecd"}),"\n",(0,t.jsx)(n.p,{children:"\u5f53\u9700\u8981\u5728 Phoenix \u96c6\u7fa4\u4e2d\u7684\u591a\u4e2a\u8282\u70b9\u95f4\u4f7f\u7528\u5171\u4eab\u6570\u636e\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528 Phoenix \u63d0\u4f9b\u7684\u5206\u5e03\u5f0f\u6570\u636e\u529f\u80fd\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:a(55767).Z+"",width:"1057",height:"478"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u8be5\u529f\u80fd\u63d0\u4f9b\u4e86\u4e00\u7c7b\u7279\u6b8a\u7684\u805a\u5408\u6839\u7528\u6765\u4e13\u95e8\u7ef4\u62a4\u6240\u6709\u7684\u5206\u5e03\u5f0f\u6570\u636e\u3002\u9ed8\u8ba4 API \u57fa\u4e8e Multi \u6a21\u5f0f\u3002","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Multi \u6a21\u5f0f\u4e0b, \u5177\u4f53\u7684\u5206\u5e03\u5f0f\u6570\u636e\u7c7b\u7684 ",(0,t.jsx)(n.code,{children:"Class.SimpleName"})," \u4f5c\u4e3a\u805a\u5408\u6839 ID, \u5355\u4e2a\u805a\u5408\u6839\u7ef4\u62a4\u8be5\u7c7b\u4e0b\u7684\u6240\u6709\u5206\u5e03\u5f0f\u6570\u636e."]}),"\n",(0,t.jsxs)(n.li,{children:["Single \u6a21\u5f0f\u4e0b\uff0c",(0,t.jsx)(n.code,{children:"Class.SimpleName"}),"  + ",(0,t.jsx)(n.code,{children:"ddataCode"})," \u4e3a\u805a\u5408\u6839 ID, \u5355\u72ec\u4e00\u4e2a\u805a\u5408\u6839\u7ef4\u62a4\u5206\u5e03\u5f0f\u6570\u636e."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"\u8be5\u529f\u80fd\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u7684 API \u4f9b Phoenix \u670d\u52a1\u5bf9\u5206\u5e03\u5f0f\u6570\u636e\u8fdb\u884c \u65b0\u589e/\u66f4\u65b0/\u67e5\u8be2/\u8ba2\u9605/\u53d6\u6d88\u8ba2\u9605 \u7b49\u64cd\u4f5c\uff0c\u5e76\u652f\u6301\u503c\u8fc7\u671f\u529f\u80fd\u3002"}),"\n",(0,t.jsxs)(n.li,{children:["\u5206\u5e03\u5f0f\u6570\u636e\u63d0\u4f9b\u4e86 ",(0,t.jsx)(n.code,{children:"ExtendDDataSource"})," \u63a5\u53e3, \u5728\u503c\u8fc7\u671f\u6216\u521d\u59cb\u5316\u65f6, \u901a\u8fc7\u8be5\u63a5\u53e3\u83b7\u53d6\u5916\u90e8\u6570\u636e\u66f4\u65b0\u81ea\u8eab."]}),"\n",(0,t.jsxs)(n.li,{children:["\u8be5\u529f\u80fd\u63d0\u4f9b\u9ed8\u8ba4\u7684 Event-Publish \u4efb\u52a1 ddata-task \uff08\u8be5\u4efb\u52a1\u9ed8\u8ba4\u5f00\u542f, \u53ef\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"quantex.phoenix.event-publish.enable-ddata-task=false"})," \u8fdb\u884c\u5173\u95ed\uff09, \u5f53\u66f4\u65b0\u5206\u5e03\u5f0f\u6570\u636e\u65f6, ddata-task \u4f1a\u5c06\u5206\u5e03\u5f0f\u6570\u636e\u66f4\u65b0\u4e8b\u4ef6\u8f6c\u6362\u4e3a\u5206\u5e03\u5f0f\u6570\u636e\u53d8\u66f4\u547d\u4ee4, \u540c\u65f6\u6839\u636e\u8be5\u5206\u5e03\u5f0f\u6570\u636e\u4e0e\u4e1a\u52a1\u805a\u5408\u6839\u4e4b\u95f4\u7684\u8ba2\u9605\u5173\u7cfb, \u5c06\u5206\u5e03\u5f0f\u6570\u636e\u53d8\u66f4\u547d\u4ee4\u8fdb\u884c\u591a\u64ad\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"api-\u4ecb\u7ecd",children:"API \u4ecb\u7ecd"}),"\n",(0,t.jsx)(n.p,{children:"\u5206\u5e03\u5f0f\u6570\u636e\u4e3b\u8981\u5206\u4e3a\u5ba2\u6237\u7aef\uff0c\u548c\u57fa\u4e8e Event-Publish \u5b9e\u73b0\u6570\u636e\u66f4\u65b0\u7684\u670d\u52a1\u7aef\u4e24\u4e2a\u90e8\u5206\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"\u5ba2\u6237\u7aef-api",children:"\u5ba2\u6237\u7aef API"}),"\n",(0,t.jsx)(n.p,{children:"\u5ba2\u6237\u7aef\u5c42\u9762\u7684 API \u5206\u4e3a\u4e24\u4e2a\u90e8\u5206\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Phoenix-Client"}),"\uff1a\u8f7b\u91cf\u5ba2\u6237\u7aef  API\uff0c\u6ca1\u6709\u670d\u52a1\u7aef\u7ec4\u4ef6\uff0c\u7528\u4e8e\u5916\u90e8\u5411 Phoenix \u670d\u52a1\u7aef\u53d1\u8d77\u8bf7\u6c42"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Phoenix-Distributed-Data"}),": \u5b8c\u6574\u7684\u5ba2\u6237\u7aef API\uff0c\u7528\u4e8e\u805a\u5408\u6839\u5411\u5206\u5e03\u5f0f\u6570\u636e\u53d1\u8d77\u8bf7\u6c42"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u4e24\u8005\u7684\u5171\u540c\u70b9\u662f\u90fd\u5b9e\u73b0\u4e86 ",(0,t.jsx)(n.code,{children:"DistributedDataRemote"})," \u63a5\u53e3. \u8be5\u63a5\u53e3\u662f\u4e0e\u5206\u5e03\u5f0f\u6570\u636e\u670d\u52a1\u7aef\u901a\u4fe1\u7684\u5de5\u5177, \u53ef\u4ee5\u5229\u7528\u8be5\u63a5\u53e3 API \u65b9\u4fbf\u7684\u8fdb\u884c\u5206\u5e03\u5f0f\u6570\u636e\u7684\u7ef4\u62a4.\u8be5\u5bf9\u8c61\u4e0d\u652f\u6301\u5e8f\u5217\u5316."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"public interface DistributedDataRemote {\n\n  /**\n   * \u65b0\u589e\u5355\u4e2a\u5206\u5e03\u5f0f\u6570\u636e, \u7531\u4e00\u4e2a\u805a\u5408\u6839\u7ef4\u62a4\n   *\n   * @param ddataCls\n   * @param ddataCode\n   * @param value\n   * @param targetTopic\n   */\n  <T> boolean addSingleDData(\n          Class<T> ddataCls, String ddataCode, Object value, String targetTopic);\n\n  /**\n   * \u65b0\u589e\u5e26\u8fc7\u671f\u65f6\u95f4\u7684\u5355\u4e2a\u5206\u5e03\u5f0f\u6570\u636e, \u7531\u4e00\u4e2a\u805a\u5408\u6839\u7ef4\u62a4\n   *\n   * @param ddataCls\n   * @param ddataCode\n   * @param value\n   * @param targetTopic\n   * @param expireTime \u8fc7\u671f\u65f6\u95f4\n   */\n  <T> boolean addSingleDData(\n          Class<T> ddataCls, String ddataCode, Object value, String targetTopic, Duration expireTime);\n\n  /**\n   * \u65b0\u589e\u5206\u5e03\u5f0f\u6570\u636e\n   *\n   * @param ddataCls\n   * @param ddataCode\n   * @param value\n   * @param targetTopic\n   */\n  <T> boolean addDData(Class<T> ddataCls, String ddataCode, Object value, String targetTopic);\n\n  /**\n   * \u65b0\u589e\u5e26\u8fc7\u671f\u65f6\u95f4\u7684\u5206\u5e03\u5f0f\u6570\u636e\n   *\n   * @param ddataCls\n   * @param ddataCode\n   * @param value\n   * @param targetTopic\n   * @param expireTime \u8fc7\u671f\u65f6\u95f4\n   */\n  <T> boolean addDData(\n          Class<T> ddataCls, String ddataCode, Object value, String targetTopic,\n          Duration expireTime);\n\n  /**\n   * \u5355\u67e5\u8be2\u5355\u4e2a\u805a\u5408\u6839\u7684\u5206\u5e03\u5f0f\u5bf9\u8c61\uff0c\u4e0d\u7ef4\u62a4\u8ba2\u9605\u5173\u7cfb\n   *\n   * @param ddataCls\n   * @param ddataCode\n   * @param targetTopic\n   * @param <T>\n   * @return\n   */\n  <T> DData<T> querySingleDData(Class<T> ddataCls, String ddataCode, String targetTopic);\n\n  /**\n   * \u5355\u67e5\u8be2\u5206\u5e03\u5f0f\u5bf9\u8c61\uff0c\u4e0d\u7ef4\u62a4\u8ba2\u9605\u5173\u7cfb\n   *\n   * @param ddataCls\n   * @param ddataCode\n   * @param targetTopic\n   * @param <T>\n   * @return\n   */\n  <T> DData<T> queryDData(Class<T> ddataCls, String ddataCode, String targetTopic);\n\n  /**\n   * \u8c03\u7528\u8fdc\u7a0b\u65b9\u5f0f\u83b7\u53d6\u5355\u4e2a\u805a\u5408\u6839\u7684\u5206\u5e03\u5f0f\u6570\u636e\u5e76\u5efa\u7acb\u8ba2\u9605\u5173\u7cfb\n   *\n   * @param ddataCls\n   * @param ddataCode\n   * @param targetTopic\n   * @param selfTopic\n   * @param <T>\n   * @return\n   */\n  <T> DData<T> subscribeSingle(\n          Class<T> ddataCls, String ddataCode, String targetTopic, String selfTopic);\n\n  /**\n   * \u89e3\u7ed1\u67d0\u4e00\u8ba2\u9605\u8005\u548c\u67d0\u4e00\u5177\u4f53\u5355\u4e2a\u805a\u5408\u6839\u7684\u5206\u5e03\u5f0f\u6570\u636e\u4e4b\u95f4\u7684\u8ba2\u9605\u5173\u7cfb\n   *\n   * @param ddataCls\n   * @param ddataCode\n   * @param targetTopic\n   * @param selfTopic\n   */\n  <T> boolean unsubscribeSingle(\n          Class<T> ddataCls, String ddataCode, String targetTopic, String selfTopic);\n\n  /**\n   * \u8c03\u7528\u8fdc\u7a0b\u65b9\u5f0f\u83b7\u53d6\u5206\u5e03\u5f0f\u6570\u636e\u5e76\u5efa\u7acb\u8ba2\u9605\u5173\u7cfb\n   *\n   * @param ddataCls\n   * @param ddataCode\n   * @param targetTopic\n   * @param selfTopic\n   * @param <T>\n   * @return\n   */\n  <T> DData<T> subscribe(\n          Class<T> ddataCls, String ddataCode, String targetTopic, String selfTopic);\n\n  /**\n   * \u89e3\u7ed1\u67d0\u4e00\u8ba2\u9605\u8005\u548c\u67d0\u4e00\u5177\u4f53\u7684\u5206\u5e03\u5f0f\u6570\u636e\u4e4b\u95f4\u7684\u8ba2\u9605\u5173\u7cfb\n   *\n   * @param ddataCls\n   * @param ddataCode\n   * @param targetTopic\n   * @param selfTopic\n   */\n  <T> boolean unsubscribe(\n          Class<T> ddataCls, String ddataCode, String targetTopic, String selfTopic);\n\n  /**\n   * \u6e05\u9664\u8be5\u7c7b\u4e0b\u6240\u6709\u7684\u5206\u5e03\u5f0f\u6570\u636e, \u4ec5\u4f5c\u7528\u4e8e MultiMode\n   *\n   * @param ddataCls\n   * @param targetTopic\n   */\n  <T> boolean clear(Class<T> ddataCls, String targetTopic);\n}\n"})}),"\n",(0,t.jsx)(n.h4,{id:"phoenix-client-api",children:"Phoenix-Client API"}),"\n",(0,t.jsxs)(n.p,{children:["Phoenix-Client \u5305\u4e0b\u7684\u5206\u5e03\u5f0f\u6570\u636e\u5ba2\u6237\u7aef API \u4e3a ",(0,t.jsx)(n.strong,{children:"ClientDistributedDataRemote"}),", \u4e0e\u670d\u52a1\u7aef\u4e0d\u540c\u7684\u662f\u4e0d\u5305\u542b\u8ba2\u9605\u529f\u80fd\uff08\u805a\u5408\u6839\u8ba2\u9605\u5206\u5e03\u5f0f\u6570\u636e\u7684\u66f4\u65b0\uff09\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"DistributedDataRemote clientDData = new ClientDistributedDataRemote(phoenixClient, javaTimeClock);\n// \u652f\u6301\u7684\u65b9\u6cd5\nclientDData.addDData(DData.class, ddataCode, value, targetTopic);\nclientDData.addDData(DData.class, ddataCode, value, targetTopic, expireTime);\nclientDData.addSingleDData(DData.class, ddataCode, value, targetTopic);\nclientDData.addSingleDData(DData.class, ddataCode, value, targetTopic, expireTime);\nclientDData.queryDData(DData.class, ddataCode, targetTopic);\nclientDData.querySingleDData(DData.class, ddataCode, targetTopic);\nclientDData.clear();\n// \u4e0d\u652f\u6301\u7684\u65b9\u6cd5 UnsupportedOperationException\nclientDData.subscribe();\nclientDData.unsubscribe();\nclientDData.subscribeSingle();\nclientDData.unsubscribeSingle();\n\n"})}),"\n",(0,t.jsx)(n.h4,{id:"phoenix-distributed-data",children:"Phoenix-Distributed-Data"}),"\n",(0,t.jsxs)(n.p,{children:["\u5206\u5e03\u4e66\u6570\u636e\u670d\u52a1\u7aef\u5219\u63d0\u4f9b\u4e24\u79cd API\uff1a",(0,t.jsx)(n.code,{children:"DDataMap"})," \u548c ",(0,t.jsx)(n.code,{children:"DistributedDataRemote"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"DistributedDataRemote: \u4e0e\u5206\u5e03\u5f0f\u6570\u636e\u670d\u52a1\u7aef\u901a\u4fe1\u7684\u5de5\u5177,\u53ef\u4ee5\u5229\u7528\u8be5API\u65b9\u4fbf\u7684\u8fdb\u884c\u5206\u5e03\u5f0f\u6570\u636e\u7684\u7ef4\u62a4.\u8be5\u5bf9\u8c61\u4e0d\u652f\u6301\u5e8f\u5217\u5316."}),"\n",(0,t.jsx)(n.li,{children:"DDataMap: \u5c4f\u853d\u4e0e\u901a\u4fe1\u7ec6\u8282,\u63d0\u4f9b\u4e00\u4e2aMap\u7ed3\u6784\u7684\u4f7f\u7528\u65b9\u5f0f,\u652f\u6301\u5e8f\u5217\u5316,\u53ef\u4ee5\u518d\u805a\u5408\u6839\u5f53\u4e2d\u5f53\u505a\u666e\u901a\u5bf9\u8c61\u4f7f\u7528."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'public interface DistributeDataManager {\n\n    String NAME = "distributeDataManager";\n\n    /**\n     * \u83b7\u53d6\u5206\u5e03\u5f0f\u8fdc\u7a0b\u901a\u4fe1\u5de5\u5177\n     *\n     * @return\n     */\n    DistributedDataRemote getDistributedDataRemote();\n\n    /**\n     * \u521b\u5efa\u4e00\u4e2amap\u7ed3\u6784\u7684\u5206\u5e03\u5f0f\u6570\u636e\n     *\n     * @param cls\n     * @param targetTopic\n     * @param selfTopic\n     * @param <VALUE>\n     * @return\n     */\n    <VALUE> DDataMap<VALUE> create(Class<VALUE> cls, String targetTopic, String selfTopic);\n}\n\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u66f4\u65b0\u5206\u5e03\u5f0f\u6570\u636e",children:"\u66f4\u65b0\u5206\u5e03\u5f0f\u6570\u636e"}),"\n",(0,t.jsx)(n.p,{children:"\u670d\u52a1\u7aef\u7684\u66f4\u65b0\u529f\u80fd\uff0c\u53ef\u4ee5\u901a\u8fc7\u53c2\u6570\u63a7\u5236\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"quantex:\n  phoenix:\n    event-publish:\n      enable-ddata-task: true\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u652f\u6301\u81ea\u5b9a\u4e49\u5206\u5e03\u5f0f\u6570\u636e\u7684\u83b7\u53d6\u65b9\u5f0f",children:"\u652f\u6301\u81ea\u5b9a\u4e49\u5206\u5e03\u5f0f\u6570\u636e\u7684\u83b7\u53d6\u65b9\u5f0f"}),"\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528\u5206\u5e03\u5f0f\u6570\u636e\u65f6\uff0c\u4e00\u822c\u5728\u67e5\u8be2/\u8ba2\u9605\u67d0\u4e00\u4e2a\u5177\u4f53\u7684\u6570\u636e\u4e4b\u524d\u9700\u8981\u5148\u5c06\u8be5\u6570\u636e\u7ef4\u62a4\u5230\u5206\u5e03\u5f0f\u6570\u636e\u805a\u5408\u4e2d\u3002\u4f46\u5076\u5c14\u4e5f\u4f1a\u51fa\u73b0\u5728\u67e5\u8be2/\u8ba2\u9605\u67d0\u4e00\u6570\u636e\u65f6\uff0c\u8be5\u6570\u636e\u5e76\u4e0d\u5728\u5206\u5e03\u5f0f\u6570\u636e\u805a\u5408\u4e2d\uff08\u4e4b\u524d\u6ca1\u6709\u7ef4\u62a4\uff09\uff0c\u8fd9\u4e2a\u65f6\u5019\u4e0d\u671f\u671b\u5e94\u4e3a\u4e0d\u5b58\u5728\u800c\u62a5\u9519\u6216\u8005\u8fd4\u56denull\uff0c\u800c\u662f\u5e0c\u671b\u80fd\u591f\u8c03\u7528\u7528\u6237\u7aef\u7684\u67d0\u4e00\u65b9\u6cd5\u6765\u5b8c\u6210\u8be5\u6570\u636e\u7684\u521d\u59cb\u5316\u540c\u65f6\u7ef4\u62a4\u5230\u5206\u5e03\u5f0f\u6570\u636e\u805a\u5408\u4e2d\u65b9\u4fbf\u540e\u7eed\u4f7f\u7528\u3002"}),"\n",(0,t.jsx)(n.p,{children:"Phoenix \u63d0\u4f9b\u5982\u4e0b\u63a5\u53e3\uff0c\u7531\u7528\u6237\u63d0\u4f9b\u5177\u4f53\u5b9e\u73b0\u3002\u5f53\u67e5\u8be2/\u8ba2\u9605\u67d0\u4e00\u6570\u636e\u65f6\uff0c\u5982\u679c\u8be5\u6570\u636e\u4e0d\u5b58\u5728\uff0c\u5219\u8c03\u7528\u8be5\u63a5\u53e3\u6765\u5b8c\u6210\u521d\u59cb\u5316\u5e76\u7ef4\u62a4\u5230\u5206\u5e03\u5f0f\u6570\u636e\u805a\u5408\u4e2d\u3002"}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsxs)(n.p,{children:["\u5f53 ExtendDDataSource \u8fd4\u56de ",(0,t.jsx)(n.code,{children:"null"})," \u65f6,  ",(0,t.jsx)(n.code,{children:"null"})," \u5c06\u4f1a\u88ab\u7f13\u5b58\u5230\u5206\u5e03\u5f0f\u6570\u636e\u4e2d, \u4e0d\u4f1a\u518d\u6b21\u8c03\u7528."]}),(0,t.jsxs)(n.p,{children:["\u4ec5\u5f53\u663e\u5f0f\u8c03\u7528 API \u4f20\u5165 ",(0,t.jsx)(n.code,{children:"null"})," \u5220\u9664\u65f6, \u624d\u4f1a\u518d\u6b21\u8c03\u7528 ExtendDDataSource"]})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'/**\n * \u6269\u5c55\u83b7\u53d6\u5206\u5e03\u5f0f\u6570\u636e\u63a5\u53e3\n */\npublic interface ExtendDDataSource {\n\n    String NAME = "extendDDataSource";\n\n    /**\n     * \u67e5\u8be2\u6307\u5b9a\u5bf9\u8c61\uff0c\u5177\u4f53\u903b\u8f91\u7531\u7528\u6237\u51b3\u5b9a\n     *\n     * @param cls\n     * @param ddataCode\n     * @return\n     */\n    Object query(Class cls, String ddataCode);\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528\u6848\u4f8b\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(n.p,{children:":::info \u63d0\u793a"}),"\n",(0,t.jsxs)(n.p,{children:["\u6ce8\u610f\uff1a\u5728\u6ce8\u5165 Bean \u7684\u65f6\u5019\u5fc5\u987b\u8981\u6307\u5b9a Bean \u7684 name \u4e3a ",(0,t.jsx)(n.code,{children:"ExtendDDataSource.NAME"})]}),"\n",(0,t.jsx)(n.p,{children:":::"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"@Configuration\npublic class ExtendDDataSourceBean {\n\n    @Bean(name = ExtendDDataSource.NAME)\n    public ExtendDDataSource customExtendDDataSource() {\n        return new DdataExtendDDataSource();\n    }\n\n    class DdataExtendDDataSource implements ExtendDDataSource {\n\n        @Override\n        public Object query(Class cls, String ddataCode) {\n            if (MarketInfo.class.equals(cls)) {\n                return new MarketInfo(ddataCode, 100);\n            }\n            // else if ...\n            return null;\n        }\n    }\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u503c\u8fc7\u671f\u529f\u80fd",children:"\u503c\u8fc7\u671f\u529f\u80fd"}),"\n",(0,t.jsxs)(n.p,{children:["\u5206\u5e03\u5f0f\u6570\u636e\u652f\u6301\u7c7b\u4f3c\u4e8e Redis \u952e\u8fc7\u671f\u7684",(0,t.jsx)(n.strong,{children:"\u503c\u8fc7\u671f\u673a\u5236"})]}),"\n",(0,t.jsx)(n.p,{children:"\u76ee\u524d\u7684\u8fc7\u671f\u65f6\u95f4\u5206\u4e3a\u672c\u5730\u8fc7\u671f\u65f6\u95f4\u4ee5\u53ca\u8fdc\u7a0b\u8fc7\u671f\u65f6\u95f4."}),"\n",(0,t.jsxs)(n.p,{children:["\u5206\u5e03\u5f0f\u6570\u636e\u8fc7\u671f\u65f6\u95f4\u4e3a ",(0,t.jsx)(n.code,{children:"Long"})," \u7c7b\u578b\u7684\u65f6\u95f4\u6233. \u5f53 Phoenix \u5b9e\u4f8b\u7684\u7cfb\u7edf\u65f6\u95f4\u8d85\u8fc7\u8be5\u65f6\u95f4\u6233\u65f6, \u5e76\u53d1\u751f\u4e86\u67e5\u8be2\u65f6\u89e6\u53d1."]}),"\n",(0,t.jsx)(n.h4,{id:"1-\u672c\u5730\u8fc7\u671f\u65f6\u95f4",children:"1. \u672c\u5730\u8fc7\u671f\u65f6\u95f4"}),"\n",(0,t.jsxs)(n.p,{children:["\u672c\u5730\u8fc7\u671f\u65f6\u95f4\u6307\u7684\u662f ",(0,t.jsx)(n.code,{children:"DDataMap"})," \u4e2d\u8bbe\u7f6e\u7684\u8fc7\u671f\u65f6\u95f4, \u4f5c\u7528\u57df\u4e3a ",(0,t.jsx)(n.code,{children:"DDataMap"}),", \u5373\u5206\u5e03\u5f0f\u6570\u636e\u7684\u7f13\u5b58."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u5206\u5e03\u5f0f\u6570\u636e\u7f13\u5b58"}),"\u8fc7\u671f\u540e:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u89e6\u53d1 RPC \u5411\u8fdc\u7a0b\u7684\u5206\u5e03\u5f0f\u6570\u636e\u805a\u5408\u6839\u83b7\u53d6\u503c."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u8bbe\u7f6e\u672c\u5730\u8fc7\u671f\u65f6\u95f4\u7684\u65b9\u5f0f:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"updateLocal()"})," \u7684\u91cd\u8f7d\u65b9\u6cd5\u4e3b\u52a8\u8bbe\u7f6e\u8fc7\u671f\u65f6\u95f4."]}),"\n",(0,t.jsxs)(n.li,{children:["\u901a\u8fc7\u805a\u5408\u6839\u63a5\u6536 ",(0,t.jsx)(n.code,{children:"DdataChangeCmd"})," \u66f4\u65b0 ",(0,t.jsx)(n.code,{children:"DDataMap"})," \u6765\u540c\u6b65\u672c\u5730\u8fc7\u671f\u65f6\u95f4."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"2-\u8fdc\u7a0b\u8fc7\u671f\u65f6\u95f4",children:"2. \u8fdc\u7a0b\u8fc7\u671f\u65f6\u95f4"}),"\n",(0,t.jsxs)(n.p,{children:["\u8fdc\u7a0b\u8fc7\u671f\u65f6\u95f4\u6307\u7684\u662f ",(0,t.jsx)(n.code,{children:"\u5206\u5e03\u5f0f\u6570\u636e\u805a\u5408\u6839"})," \u4e2d\u503c\u7684\u8fc7\u671f\u65f6\u95f4. \u4f5c\u7528\u57df\u4e3a\u8be5\u5206\u5e03\u5f0f\u6570\u636e."]}),"\n",(0,t.jsx)(n.p,{children:"\u8bbe\u7f6e\u8fdc\u7a0b\u8fc7\u671f\u65f6\u95f4\u7684\u65b9\u5f0f:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"DistributedDataRemote.addDData()"})," \u65b9\u6cd5\u4e3b\u52a8\u8bbe\u7f6e\u8fdc\u7a0b\u8fc7\u671f\u65f6\u95f4"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ExtendDDataSource"})," \u8fd4\u56de\u5e26\u8fc7\u671f\u65f6\u95f4\u7684\u5206\u5e03\u5f0f\u6570\u636e\u5305\u88c5\u7c7b ",(0,t.jsx)(n.code,{children:"ExpireDData<T>"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u5206\u5e03\u5f0f\u6570\u636e\u503c"}),"\u8fc7\u671f\u540e:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\u5f53\u4e0e ",(0,t.jsx)(n.code,{children:"ExtendDDataSource"})," \u4e00\u8d77\u4f7f\u7528\u65f6, \u503c\u8fc7\u671f\u540e\u4ece ",(0,t.jsx)(n.code,{children:"ExtendDDataSource"})," \u83b7\u53d6\u65b0\u503c."]}),"\n",(0,t.jsxs)(n.li,{children:["\u5f53\u7528\u6237\u6ca1\u6709\u81ea\u5b9a\u4e49 ",(0,t.jsx)(n.code,{children:"ExtendDDataSource"}),"\u65f6, \u503c\u8fc7\u671f\u540e\u6e05\u9664."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:":::caution \u6ce8\u610f"}),"\n",(0,t.jsx)(n.p,{children:"\u503c\u8fc7\u671f\u540e\uff0c\u8ba2\u9605\u8005\u63a5\u6536\u503c\u8fc7\u671f\u7684\u53d8\u66f4\u4e0d\u662f\u53ef\u9760\u7684\uff0c\u53ef\u80fd\u4f1a\u5b58\u5728\u8ba2\u9605\u8005\u6ca1\u6709\u63a5\u6536\u5230\u5206\u5e03\u5f0f\u6570\u636e\u503c\u8fc7\u671f\u540e\u53d8\u66f4\u7684 DdataChangeCmd\u3002"}),"\n",(0,t.jsx)(n.p,{children:":::"}),"\n",(0,t.jsx)(n.h4,{id:"3-\u81ea\u5b9a\u4e49\u8fc7\u671f\u65f6\u95f4\u7684\u65f6\u949f",children:"3. \u81ea\u5b9a\u4e49\u8fc7\u671f\u65f6\u95f4\u7684\u65f6\u949f"}),"\n",(0,t.jsxs)(n.p,{children:["\u5206\u5e03\u5f0f\u6570\u636e\u503c\u8fc7\u671f\u65f6\u95f4\u9ed8\u8ba4\u4f7f\u7528 UTC \u65f6\u95f4\u7684 ",(0,t.jsx)(n.code,{children:"java.time.Clock.SystemClock"}),", \u5f00\u53d1\u8005\u4e5f\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u914d\u7f6e\u81ea\u5b9a\u4e49\u65f6\u533a\u7684\u65f6\u949f:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\u914d\u7f6e\u5173\u95ed ",(0,t.jsx)(n.code,{children:"UTC"})," \u65f6\u949f"]}),"\n",(0,t.jsxs)(n.li,{children:["\u5728 Spring \u5bb9\u5668\u4e2d\u589e\u52a0 ",(0,t.jsx)(n.code,{children:"java.time.Clock"})," Bean"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"quantex:\n  phoenix:\n    server:\n      ddata-utc-clock: false # \u914d\u7f6e\u5173\u95ed utc \u65f6\u949f\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'/**\n * \u5f00\u53d1\u8005\u81ea\u5b9a\u4e49\u65f6\u949fBean\n */\n@Bean(name = "customClock")\npublic Clock customClock() {\n    return Clock.system(ZoneId.of("UTC"));\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u4f7f\u7528\u8bf4\u660e",children:"\u4f7f\u7528\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u5f15\u7528\u4f9d\u8d56"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"\x3c!-- \u5b8c\u6574\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef --\x3e\n<dependency>\n  <groupId>com.iquantex</groupId>\n  <artifactId>phoenix-distributed-data-starter</artifactId>\n  <version>2.5.3</version>\n</dependency>\n\n\x3c!-- \u5355\u5ba2\u6237\u7aef API\uff0c\u4f9b Phoenix \u5ba2\u6237\u7aef\u4f7f\u7528 --\x3e\n\n<dependency>\n  <groupId>com.iquantex</groupId>\n  <artifactId>phoenix-client-starter</artifactId>\n  <version>2.5.3</version>\n</dependency>\n\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"\u4f7f\u7528\u6848\u4f8b1: DistributedDataRemote"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"@Autowired private DistributeDataManager distributeDataManager;\n        \n// 1. \u6dfb\u52a0\u5206\u5e03\u5f0f\u6570\u636e\ndistributeDataManager\n        .getDistributedDataRemote()\n        .addDData(MarketInfo.class, secCode, market1, SysConfig.getInstance().targetTopic);\n//2. \u67e5\u8be2\u5206\u5e03\u5f0f\u6570\u636e\ndistributeDataManager\n        .getDistributedDataRemote()\n        .queryDData(cls, ddataCode, targetTopic);\n// 3. \u83b7\u53d6\u5e76\u8ba2\u9605\u5206\u5e03\u5f0f\u6570\u636e\ndistributeDataManager\n        .getDistributedDataRemote()\n        .subscribe(cls, ddataCode, targetTopic, selfTopic)\n// 4. \u53d6\u6d88\u8ba2\u9605\ndistributeDataManager\n        .getDistributedDataRemote()\n        .unsubscribe(MarketInfo.class,secuCode,SysConfig.getInstance().targetTopic,SysConfig.getInstance().selfTopic);\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"\u4f7f\u7528\u6848\u4f8b2: DDataMap"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"@Getter private DDataMap<MarketInfo> marketInfoDDataMap;\n@Autowired private DistributeDataManager distributeDataManager;\n\nmarketInfoDDataMap = distributeDataManager.create(\n        MarketInfo.class,\n        SysConfig.getInstance().targetTopic,\n        SysConfig.getInstance().selfTopic);\n\n// 1. \u67e5\u8be2\u5206\u5e03\u5f0f\u6570\u636e\uff08\u4e0d\u5efa\u7acb\u8ba2\u9605\u5173\u7cfb\uff09\nmarketInfoDData.query(market.getSecuCode());\n// 2. \u67e5\u8be2\u5206\u5e03\u5f0f\u6570\u636e\uff08\u5efa\u7acb\u8ba2\u9605\u5173\u7cfb\uff09\nmarketInfoDData.get(market.getSecuCode());\n// 3. \u79fb\u9664\u672c\u5730\u7f13\u5b58 & \u79fb\u9664\u8ba2\u9605\u5173\u7cfb\nmarketInfoDData.remove(market.getSecuCode());\n// 4. \u66f4\u65b0\u672c\u5730\u7f13\u5b58\u7684\u503c\nmarketInfoDData.updateLocal(newMarket.getSecuCode(), newMarket);\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"\u66f4\u65b0\u5206\u5e03\u5f0f\u6570\u636e"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u4f7f\u7528\u5206\u5e03\u5f0f\u6570\u636eAPI\u65f6,\u5982\u679c\u805a\u5408\u6839\u8ba2\u9605\u4e86\u5206\u5e03\u5f0f\u6570\u636e,\u5728\u6570\u636e\u53d8\u66f4\u65f6\u5219\u4f1a\u4ee5\u547d\u4ee4\u7684\u65b9\u5f0f\u63a8\u9001\u5230\u805a\u5408\u6839.\u7528\u6237\u9700\u8981\u63a5\u6536\u8be5\u547d\u4ee4,\u7075\u6d3b\u9009\u62e9\u662f\u5426\u9700\u8981\u66f4\u65b0\u672c\u5730\u7f13\u5b58.\u4f7f\u7528\u65b9\u5f0f\u5982\u4e0b:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'@EntityAggregateAnnotation(aggregateRootType = "Demo")\npublic class DemoAggregate implements Serializable {\n    private static final long serialVersionUID = -2549468778385293048L;\n\n    @Getter private DistributedData.DDataMap<String, MarketInfo> marketInfoDDataMap;\n\n    @InnerCommandHandler\n    public ActReturn act(DdataChangeCmd cmd) {\n        // \u66f4\u65b0\u7f13\u5b58\u7684\u65b9\u5f0f\u6709 3 \u79cd.\n        // 1. \u76f4\u63a5\u6839\u636e DdataChangeCmd \u547d\u4ee4\u66f4\u65b0\n        marketInfoDDataMap.updateLocal(cmd);\n        // 2. \u6709\u9009\u62e9\u7684\u66f4\u65b0\uff08\u5f53\u5206\u5e03\u5f0f\u6570\u636e\u5e26\u6709\u8fc7\u671f\u65f6\u95f4\u65f6,\u4f1a\u4e22\u5931\u8be5\u503c\uff09\n        marketInfoDDataMap.updateLocal(cmd.getDdataCode(), (MarketInfo) cmd.getDdata());\n        // 3. \u5224\u65ad\u662f\u5426\u4e3a\u8fc7\u671f\u65f6\u95f4, \u9644\u52a0\u672c\u5730\u8fc7\u671f\u65f6\u95f4\n        if (cmd.getExpireTime() != null){\n            marketInfoDDataMap.updateLocal(cmd.getDdataCode(), (MarketInfo) cmd.getDdata(), cmd.getExpireTime());\n        }\n        // \u5f53\u4f7f\u7528\u4e86\u6279\u91cf\u5220\u9664\u6240\u6709\u5206\u5e03\u5f0f\u6570\u636e\u65f6, \u4f1a\u51fa\u73b0\u6ca1\u6709 ddataCode \u7684\u60c5\u51b5, \u9664\u4e86\u4e0a\u9762\u7684 1 \u65b9\u6848, \u90fd\u9700\u8981\u989d\u5916\u589e\u52a0\u4ee5\u4e0b\u5224\u65ad.\n        if (cmd.isClearAll()) {\n          marketInfoDDataMap.clear();\n        } else {\n            // ...\n        }\n        \n        return ActReturn.builder()\n                .retCode(RetCode.SUCCESS)\n                .retMessage("ok")\n                .event(new DdataChangeEvent())\n                .build();\n    }\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},55767:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/01-07f408beae22e0db97fef6f4b51c2147.png"},11151:(e,n,a)=>{a.d(n,{Z:()=>s,a:()=>r});var t=a(67294);const i={},d=t.createContext(i);function r(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);