"use strict";(self.webpackChunkphoenixiq_github_io=self.webpackChunkphoenixiq_github_io||[]).push([[83397],{36371:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>o,metadata:()=>t,toc:()=>d});var r=i(85893),s=i(11151);const o={id:"phoenix-core-event-store",title:"\u4e8b\u4ef6\u5b58\u50a8",description:"\u4e8b\u4ef6\u7684\u5b58\u50a8\u65b9\u5f0f"},l=void 0,t={id:"phoenix-core/phoenix-core-event-store",title:"\u4e8b\u4ef6\u5b58\u50a8",description:"\u4e8b\u4ef6\u7684\u5b58\u50a8\u65b9\u5f0f",source:"@site/docs/02-phoenix-core/04-event-store.md",sourceDirName:"02-phoenix-core",slug:"/phoenix-core/phoenix-core-event-store",permalink:"/docs/phoenix-core/phoenix-core-event-store",draft:!1,unlisted:!1,editUrl:"https://github.com/PhoenixIQ/docs/02-phoenix-core/04-event-store.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"phoenix-core-event-store",title:"\u4e8b\u4ef6\u5b58\u50a8",description:"\u4e8b\u4ef6\u7684\u5b58\u50a8\u65b9\u5f0f"},sidebar:"docs",previous:{title:"\u4e8b\u4ef6\u6eaf\u6e90",permalink:"/docs/phoenix-core/phoenix-core-event-souring"},next:{title:"\u8ba2\u9605\u4e0e\u5e7f\u64ad",permalink:"/docs/phoenix-core/phoenix-subscribe-pub"}},c={},d=[{value:"\u8bbe\u8ba1\u601d\u60f3",id:"principle",level:2},{value:"EventStore-JDBC",id:"jdbc",level:2},{value:"\u4e8b\u4ef6\u5f52\u6863",id:"archive",level:2},{value:"\u5207\u7247\u6a21\u5f0f",id:"slice-mode",level:2},{value:"\u4f7f\u7528\u8bf4\u660e",id:"useage",level:3},{value:"\u6570\u636e\u5e93\u7c7b\u578b",id:"type",level:2},{value:"\u6ea2\u51fa\u7b56\u7565\u8bf4\u660e",id:"overflow",level:3},{value:"\u914d\u7f6e",id:"config",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"principle",children:"\u8bbe\u8ba1\u601d\u60f3"}),"\n",(0,r.jsx)(n.p,{children:"Phoenix\u7ef4\u62a4\u5185\u5b58\u72b6\u6001\uff0c\u6838\u5fc3\u80fd\u529b\u662f\u4f7f\u7528EventSourcing\u6280\u672f\uff0cPhoenix\u4f1a\u5b9a\u65f6\u6253\u5feb\u7167\u7528\u6765\u52a0\u901fEventSourcing\u7684\u6062\u590d\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"show",src:i(45508).Z+"",width:"1486",height:"512"})}),"\n",(0,r.jsx)(n.h2,{id:"jdbc",children:"EventStore-JDBC"}),"\n",(0,r.jsx)(n.p,{children:"Phoenix \u9ed8\u8ba4\u4f7f\u7528\u7684\u662f JDBC \u7248\u672c\u7684 EventStore, \u8bf7\u6309\u4e0b\u9762\u6b65\u9aa4\u8fdb\u884c\u914d\u7f6e"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u5f15\u7528 phoenix-server-starter \u7684\u4f9d\u8d56"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:"<dependency>\n   <groupId>com.iquantex</groupId>\n   <artifactId>phoenix-server-starter</artifactId>\n   <version>2.6.1</version>\n</dependency>\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["\u5728",(0,r.jsx)(n.code,{children:"application.yaml"}),"\u4e2d\u589e\u52a0EventStore\u914d\u7f6e"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5176\u4e2d\u53ef\u4ee5\u7ed9\u4e00\u4e2a",(0,r.jsx)(n.code,{children:"DataSources"}),"\u589e\u52a0",(0,r.jsx)(n.code,{children:"label"}),"\u9694\u79bb\u4e1a\u52a1\u4f7f\u7528\u548c\u7cfb\u7edf\u4f7f\u7528,\u4e00\u822c\u7528\u4e8e\u6027\u80fd\u6d4b\u8bd5"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"quantex:\n  phoenix:\n      event-store:\n        driver-class-name: org.h2.Driver\n        data-sources:\n          - url: jdbc:h2:file:./data/test;DB_CLOSE_DELAY=-1;DATABASE_TO_UPPER=FALSE;INIT=CREATE SCHEMA IF NOT EXISTS PUBLIC\n            username: sa\n            password:\n          - url: jdbc:h2:file:./data2/test;DB_CLOSE_DELAY=-1;DATABASE_TO_UPPER=FALSE;INIT=CREATE SCHEMA IF NOT EXISTS PUBLIC\n            username: sa\n            password:\n            label: reliablity   # \u914d\u7f6eLabel\u8ba9\u8d44\u6e90\u9694\u79bb(\u6027\u80fd\u6d4b\u8bd5\u7528)\n        initial-size: 0\n        min-idle: 0\n        max-active: 8\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"\u5982\u679c\u5728\u6d4b\u8bd5\u8fc7\u7a0b\u4e2d\u4e0d\u60f3\u4f7f\u7528 EventStore \u529f\u80fd\uff0c\u53ef\u4ee5\u8fdb\u884c\u5982\u4e0b\u914d\u7f6e\uff1a"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"quantex:\n  phoenix:\n      event-store:\n        no-eventstore: true\n"})}),"\n",(0,r.jsx)(n.h2,{id:"archive",children:"\u4e8b\u4ef6\u5f52\u6863"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u9009\u62e9JDBC\u652f\u6301\u7684\u6570\u636e\u5e93\u65f6\uff0c\u7531\u4e8e\u6709\u4e9b\u6570\u636e\u5e93\u4e0d\u5177\u5907\u52a8\u6001\u6269\u5bb9\u7684\u529f\u80fd\uff0c\u4e8b\u4ef6\u7684\u5b58\u50a8\u5e76\u4e0d\u80fd\u4e00\u76f4\u5b58\u50a8\u4e0b\u53bb\uff0c\u9700\u8981\u5b9a\u671f\u5f52\u6863\u3002\u76ee\u524d\u8c03\u7814\u4e0b\u6765\u7684\u6570\u636e\u5e93\u6709"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u4e0d\u652f\u6301\u52a8\u6001\u6269\u5bb9\u7684: MySQL,Oracle"}),"\n",(0,r.jsx)(n.li,{children:"\u652f\u6301\u52a8\u6001\u6269\u5bb9\u7684: TIDB"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u6570\u636e\u5e93\u5f52\u6863\u5b58\u5728\u624b\u52a8/\u81ea\u52a8\u89e6\u53d1\u4e24\u79cd\u65b9\u5f0f"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u5feb\u7167\u6570\u91cf\u89e6\u53d1\u5f52\u6863\uff1a\u5f53\u5feb\u7167\u6570\u91cf\u7d2f\u8ba1\u5230\u4e00\u5b9a\u6570\u91cf\u540e\u89e6\u53d1\u4e00\u6b21\u5f52\u6863\uff08\u6700\u5927\u7d2f\u79ef\u5feb\u7167\u6570\u91cf\u53ef\u914d\u7f6e\uff0c\u9ed8\u8ba4\u4e0d\u89e6\u53d1\u5f52\u6863\uff09"}),"\n",(0,r.jsxs)(n.li,{children:["\u624b\u52a8\u4e00\u952e\u5f52\u6863\uff1a \u5728 ",(0,r.jsx)(n.code,{children:"PhoenixConsole"})," \u7684\u4e8b\u4ef6\u7ba1\u7406\u4e2d\uff0c\u901a\u8fc7 API \u89e6\u53d1\u4e00\u952e\u5168\u91cf\u5f52\u6863."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:":::info \u914d\u7f6e\u63d0\u793a"}),"\n",(0,r.jsxs)(n.p,{children:["\u6700\u5927\u7d2f\u79ef\u5feb\u7167\u6570\u91cf\u914d\u7f6e\uff1a",(0,r.jsx)(n.code,{children:"numberOfRetainSnapshots"})," \uff08int\uff09 \u9ed8\u8ba4\u4e3a ",(0,r.jsx)(n.code,{children:"Integer.MAX_VALUE"}),"\uff0c\u4e0d\u89e6\u53d1\u5f52\u6863 \uff08\u805a\u5408\u6839\u7ea7\u522b\u914d\u7f6e\uff09"]}),"\n",(0,r.jsx)(n.p,{children:":::"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'@EntityAggregateAnnotation(\n        aggregateRootType = "BankAccount",\n        idempotentSize = 100,\n        snapshotInterval = 100000,\n        numberOfRetainSnapshots = 2)\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u5f53\u914d\u7f6e\u4e86\u6700\u5927\u7d2f\u79ef\u5feb\u7167\u6570\u91cf\u7684\u805a\u5408\u6839\u65f6, \u5982\u4e0a\u56fe\u7684\u914d\u7f6e\u5c06\u4f1a\u5728\u805a\u5408\u6839\u89e6\u53d1\u7b2c\u4e09\u6b21\u5feb\u7167\u5f52\u6863, \u5373\u805a\u5408\u6839\u5230\u8fbe\u7b2c 300000 \u7248\u672c\u65f6, \u4f1a\u89e6\u53d1\u5f52\u6863\u5220\u6389 0~100000 \u7248\u672c\u7684\u4e8b\u4ef6\u53ca\u5feb\u7167."}),"\n",(0,r.jsx)(n.h2,{id:"slice-mode",children:"\u5207\u7247\u6a21\u5f0f"}),"\n",(0,r.jsx)(n.p,{children:"EventStore-JDBC \u652f\u6301\u5207\u7247\u6a21\u5f0f, \u5f53\u4f7f\u7528\u5207\u7247\u6a21\u5f0f\u65f6, \u6bcf\u4e2a\u4e8b\u4ef6\u4f1a\u6839\u636e\u805a\u5408\u6839 ID \u7684\u4e0d\u540c\u88ab\u5207\u5206\u5230 1024 \u4e2a\u5206\u7247\u4e2d, \u5e76\u5b58\u50a8\u5230 EventStore \u4e2d\u65b0\u589e\u7684 Slice \u5b57\u6bb5\u4e2d."}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u6b64\u6a21\u5f0f\u4e0b, \u56e0\u4e3a\u7d22\u5f15\u5b57\u77ed\u589e\u52a0\u6240\u4ee5\u63d2\u5165\u6027\u80fd\u6709\u7565\u5fae\u4e0b\u964d, \u4f46\u662f Slice \u6a21\u5f0f\u4e0b\u80fd\u591f\u652f\u6301\u542f\u52a8\u591a\u4e2a EventPublish \u7ebf\u7a0b."}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"\u6b64\u6a21\u5f0f\u4e0d\u4e0e\u539f\u6709\u7684 Time \u6a21\u5f0f\u517c\u5bb9, \u5f53\u5207\u6362\u65f6\u5fc5\u987b\u6e05\u7406\u6570\u636e\u5e93\u8868\u5e76\u7531 Phoenix \u91cd\u5efa."})}),"\n",(0,r.jsx)(n.h3,{id:"useage",children:"\u4f7f\u7528\u8bf4\u660e"}),"\n",(0,r.jsxs)(n.p,{children:["\u4f7f\u7528\u914d\u7f6e ",(0,r.jsx)(n.code,{children:"quantex.phoenix.server.event-store.event-query-type"})," \u53ef\u4ee5\u5207\u6362 EventStore \u7684\u6a21\u5f0f, \u53ef\u9009\u6a21\u5f0f\u4e3a\uff1a"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"time\uff1a\u9ed8\u8ba4\u6a21\u5f0f"}),"\n",(0,r.jsx)(n.li,{children:"slice\uff1a\u5207\u7247\u6a21\u5f0f"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"type",children:"\u6570\u636e\u5e93\u7c7b\u578b"}),"\n",(0,r.jsx)(n.p,{children:"Phoenix \u9ed8\u8ba4\u4f7f\u7528 JDBC \u4f5c\u4e3a\u4e8b\u4ef6\u6eaf\u6e90\u7684\u5b58\u50a8\u65b9\u5f0f\uff0c\u4ee5\u6b64\u5b9e\u73b0\u805a\u5408\u6839\u7684 ACID \u7279\u6027\u3002\u867d\u7136\u8fd9\u5e76\u4e0d\u63d0\u5021\uff0c\u4f46\u6211\u4eec\u4ecd\u7136\u5f00\u653e\u4e86\u4e00\u4e9b\u5176\u4ed6\u5b58\u50a8\u65b9\u5f0f\u4f9b\u7528\u6237\u9009\u62e9\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"jdbc"}),"\uff1a\u9ed8\u8ba4\u7684\u5b58\u50a8\u65b9\u5f0f"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"none"}),"\uff1a\u65e0\u5b58\u50a8\uff0c\u6240\u6709\u805a\u5408\u6839\u4e8b\u4ef6\u4ec5\u4f1a\u5c3d\u529b\u800c\u4e3a\u7684\u4ea4\u4ed8\u5230 Phoenix Client \u7684 RPC Reply\u3001sendNoReply \u7684 ",(0,r.jsx)(n.code,{children:"sourceTopic"})," \u4e2d\uff0c\u6b64\u6a21\u5f0f\u4e0b EventPublish \u4e0d\u53ef\u7528"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"memory"}),"\uff1a\u5185\u5b58\u5b58\u50a8\uff0c\u4f7f\u7528 JVM \u5185\u5b58\u4e0a\u7684\u591a\u5c42\u6b21\u6563\u5217\u8868\u5b58\u50a8\u805a\u5408\u6839\u6301\u4e45\u5316\u4e8b\u4ef6\uff0c\u5f53 JVM \u91cd\u542f\u540e\uff0c\u4e8b\u4ef6\u4e22\u5931\u3002\uff08\u867d\u7136\u6211\u4eec\u4e5f\u4e3a\u6b64\u6a21\u5f0f\u63d0\u4f9b\u4e86 Console \u7684\u652f\u6301\uff0c\u4f46\u6211\u4eec\u53ea\u63a8\u8350\u8be5\u6a21\u5f0f\u7528\u4e8e\u96c6\u6210\u6d4b\u8bd5\u4e2d\uff0c\u5bf9\u4e8e\u672c\u5730\u5f00\u53d1\uff0c\u63a8\u8350\u4f7f\u7528 JDBC + H2 Database\uff09"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"async"}),"\uff1a\u5f02\u6b65\u7684 JDBC \u5b58\u50a8\uff0c\u5728\u6b64\u6a21\u5f0f\u4e0b\uff0c\u4e8b\u4ef6\u6301\u4e45\u5316\u7684\u662f\u5c3d\u529b\u800c\u4e3a\u7684\u6a21\u5f0f\uff0c\u5f53\u5f02\u6b65\u6301\u4e45\u5316\u7684\u7f13\u51b2\u533a\u5df2\u6ee1\u65f6\uff0c\u901a\u8fc7\u7528\u6237\u914d\u7f6e\u7684\u6ea2\u51fa\u7b56\u7565\u5bf9\u672a\u5728\u961f\u5217\u7684\u4e8b\u4ef6\u8fdb\u884c\u51b3\u7b56\u3002\n\uff08",(0,r.jsx)(n.strong,{children:"\u6ce8\u610f\uff0c\u6b64\u6a21\u5f0f\u4e0b\u53ef\u80fd\u5bfc\u81f4\u805a\u5408\u6839\u65e0\u6cd5\u6210\u529f\u6eaf\u6e90\uff0c\u56e0\u4e3a\u7f3a\u5931\u4e86\u90e8\u5206\u7248\u672c\u7684\u4e8b\u4ef6\u4fe1\u606f\uff0c\u5982\u9700\u91cd\u542f\uff0c\u8bf7\u63d0\u524d\u5728 Console \u4e0a\u4e3a\u805a\u5408\u6839\u89e6\u53d1\u5feb\u7167\uff1b\u5bf9\u4e8e\u53ef\u9760\u6027\u6295\u9012\uff0c\u4e3a\u4e86\u4fdd\u8bc1\u6b63\u786e\u6eaf\u6e90\uff0c\u5728\u6b64\u6a21\u5f0f\u4e0b\u4e5f\u4ecd\u7136\u4f7f\u7528 JDBC \u6a21\u5f0f"}),"\uff09"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"overflow",children:"\u6ea2\u51fa\u7b56\u7565\u8bf4\u660e"}),"\n",(0,r.jsx)(n.p,{children:":::info \u63d0\u793a\n\u5bf9\u4e8e\u53ef\u9760\u6027\u6295\u9012\u800c\u8a00\uff0c\u4fdd\u8bc1\u80fd\u591f\u6b63\u786e\u6eaf\u6e90\u975e\u5e38\u91cd\u8981\uff08\u6d41\u91cf\u552f\u4e00\u5165\u53e3\uff09\uff0c\u56e0\u6b64\u65e0\u8bba\u6ea2\u51fa\u7b56\u7565\u548c\u6570\u636e\u5e93\u7c7b\u578b\u5982\u4f55\u9009\u62e9\uff0c\u53ef\u9760\u6027\u6295\u9012\u90fd\u4f1a\u9009\u62e9 JDBC \u6a21\u5f0f + FAIL \u6ea2\u51fa\u7b56\u7565\uff08none \u548c memory \u9664\u5916\uff09\n:::"}),"\n",(0,r.jsx)(n.p,{children:"\u6ea2\u51fa\u7b56\u7565\u9ed8\u8ba4\u4e0b\u4e3a FAIL\uff0c\u5c06\u5f02\u5e38\u4ea4\u7ed9\u4e0a\u5c42\uff08\u4e5f\u5c31\u662f\u805a\u5408\u6839\u6765\u5904\u7406\uff0c\u901a\u5e38\u662f\u91cd\u505a\uff09\uff0c\u5176\u4ed6\u6ea2\u51fa\u7b56\u7565\u5982\u4e0b\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"FAIL"}),": \u8fd4\u56de\u5931\u8d25\u7ed9\u4e0a\u5c42"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"BACKPRESSURE"}),"\uff1a\u80cc\u538b\uff0c\u963b\u585e\u5f53\u524d\u7ebf\u7a0b\uff0c\u76f4\u5230\u7f13\u51b2\u533a\u7a7a\u95f2"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"BACKOFF"}),"\uff1a\u80cc\u538b\uff0c\u963b\u585e\u5f53\u524d\u7ebf\u7a0b\uff0c\u76f4\u5230\u7f13\u51b2\u533a\u7a7a\u95f2\u6216\u8005\u8d85\u51fa\u6700\u5927\u91cd\u8bd5\u6b21\u6570\uff0c\u8d85\u51fa\u540e\u5219\u9000\u907f\u4e3a FAIL"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"DROP"}),"\uff1a\u4e22\u5f03\u5f53\u524d\u4e8b\u4ef6"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"config",children:"\u914d\u7f6e"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"quantex:\n  phoenix:\n      event-store:\n        # \u9ed8\u8ba4\u6570\u636e\u7c7b\u578b\u914d\u7f6e\n        type: jdbc\n        # \u9ed8\u8ba4\u6ea2\u51fa\u7b56\u7565\n        overflow-strategy: fail\n        # \u4e0e\u6ea2\u51fa\u7b56\u7565\u76f8\u5173\u7684 Buffer \u5927\u5c0f\n        buffer-size: 500\n        # JDBC \u6570\u636e\u6e90\u914d\u7f6e\n        driver-class-name: org.h2.Driver\n        data-sources:\n          - url: jdbc:h2:file:./data/test;DB_CLOSE_DELAY=-1;DATABASE_TO_UPPER=FALSE;INIT=CREATE SCHEMA IF NOT EXISTS PUBLIC\n            username: sa\n            password:\n        \n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5176\u4ed6\u76f8\u5173\u914d\u7f6e\u8bf7\u53c2\u8003 EventStore \u914d\u7f6e: ",(0,r.jsx)(n.a,{href:"/docs/phoenix-core/phoenix-core-config#server",children:"Phoenix \u914d\u7f6e\u8bf4\u660e"})]})]})}function a(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},45508:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/eventsouring-f9020652410148dc17dd3fbea67bc562.png"},11151:(e,n,i)=>{i.d(n,{Z:()=>t,a:()=>l});var r=i(67294);const s={},o=r.createContext(s);function l(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);