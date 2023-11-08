"use strict";(self.webpackChunkphoenixiq_github_io=self.webpackChunkphoenixiq_github_io||[]).push([[87773],{81422:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>o,frontMatter:()=>r,metadata:()=>h,toc:()=>a});var i=t(85893),s=t(11151);const r={id:"event-publish-integration",title:"\u4f7f\u7528\u8bf4\u660e"},l=void 0,h={id:"phoenix-event-publish/event-publish-integration",title:"\u4f7f\u7528\u8bf4\u660e",description:"Phoenix\u4e2d\u63d0\u4f9b\u4e86\u53ef\u96c6\u6210\u4e8ePhoenix Server\u670d\u52a1\u4e2d\u7684EventPublish\u529f\u80fd\u6a21\u5757\uff0c\u542f\u7528\u8be5\u6a21\u5757\u53ef\u76f4\u63a5\u5728Phoenix\u670d\u52a1\u4e2d\u8fd0\u884cEvent Publish\u4efb\u52a1\uff0c\u670d\u52a1\u90e8\u7f72\u65f6\u53ef\u901a\u8fc7\u914d\u7f6e\u5b9a\u4e49Event Publish\u4efb\u52a1\u3002",source:"@site/docs/04-phoenix-event-publish/03-integration.md",sourceDirName:"04-phoenix-event-publish",slug:"/phoenix-event-publish/event-publish-integration",permalink:"/docs/phoenix-event-publish/event-publish-integration",draft:!1,unlisted:!1,editUrl:"https://github.com/PhoenixIQ/docs/04-phoenix-event-publish/03-integration.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"event-publish-integration",title:"\u4f7f\u7528\u8bf4\u660e"},sidebar:"docs",previous:{title:"\u529f\u80fd\u4ecb\u7ecd",permalink:"/docs/phoenix-event-publish/event-publish-readme"},next:{title:"\u8ba2\u9605\u4e8b\u4ef6",permalink:"/docs/phoenix-event-publish/event-publish-client-usage"}},d={},a=[{value:"\u5f15\u7528\u4f9d\u8d56",id:"dependency",level:2},{value:"\u529f\u80fd\u8bf4\u660e",id:"feature",level:2},{value:"\u4f7f\u7528\u8bf4\u660e",id:"readme",level:2},{value:"\u914d\u7f6e\u8be6\u60c5",id:"config",level:4},{value:"\u4e8b\u4ef6\u8fc7\u6ee4\u5668",id:"filter",level:4},{value:"\u81ea\u5b9a\u4e49\u6295\u9012 Key",id:"custom-key",level:2},{value:"\u4ea4\u4ed8\u8bed\u4e49",id:"delivery-seg",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Phoenix\u4e2d\u63d0\u4f9b\u4e86\u53ef\u96c6\u6210\u4e8ePhoenix Server\u670d\u52a1\u4e2d\u7684EventPublish\u529f\u80fd\u6a21\u5757\uff0c\u542f\u7528\u8be5\u6a21\u5757\u53ef\u76f4\u63a5\u5728Phoenix\u670d\u52a1\u4e2d\u8fd0\u884cEvent Publish\u4efb\u52a1\uff0c\u670d\u52a1\u90e8\u7f72\u65f6\u53ef\u901a\u8fc7\u914d\u7f6e\u5b9a\u4e49Event Publish\u4efb\u52a1\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"dependency",children:"\u5f15\u7528\u4f9d\u8d56"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:"<dependency>\n  <groupId>com.iquantex</groupId>\n  <artifactId>phoenix-event-publish-starter</artifactId>\n  <version>2.6.1</version>\n</dependency>\n"})}),"\n",(0,i.jsx)(n.h2,{id:"feature",children:"\u529f\u80fd\u8bf4\u660e"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u53ef\u5728Phoenix\u670d\u52a1\u4e2d\u5f00\u542fEvent-Publish\u80fd\u529b\uff0c\u626b\u63cfevent-store\u4e2d\u7684\u9886\u57df\u4e8b\u4ef6\uff0c\u53d1\u5e03\u5230\u7279\u5b9a\u7684Kafka Topic\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u53ef\u5728Phoenix\u670d\u52a1\u914d\u7f6e\u4e2d\u5b9a\u4e49Event-Publish\u6a21\u5757\u7684\u8fd0\u884c\u53c2\u6570\u548c\u5b9a\u4e49event-task\u4e0emonitor-task,event-task\u7528\u4e8e\u5c06Phoenix\u5904\u7406\u4e8b\u4ef6\u8f6c\u53d1\u81f3\u6307\u5b9a\u7684Topic\uff0cmonitor-task\u53ef\u4ee5\u91c7\u96c6Phoenix\u5904\u7406\u7684\u6d88\u606f\u4fe1\u606f\uff0c\u63a8\u9001\u5230Elasticsearch\uff0c\u901a\u8fc7Grafana\u8fdb\u884c\u76d1\u63a7\u3002"}),"\n",(0,i.jsx)(n.li,{children:"Event-Publish\u4efb\u52a1\u4fdd\u8bc1\u8bfb\u53d6\u7684Event-Store\u9886\u57df\u4e8b\u4ef6\u5b8c\u6574\u6027\uff0c\u4e0d\u51fa\u73b0\u4e8b\u4ef6\u9057\u6f0f\u3001\u4e22\u5931\u3002"}),"\n",(0,i.jsx)(n.li,{children:"Event-Publish\u4efb\u52a1\u4fdd\u8bc1\u76f8\u540c\u7684\u805a\u5408\u6839ID\u7684\u9886\u57df\u4e8b\u4ef6\u6309\u7167Version\u4e25\u683c\u9012\u589e\u7684\u987a\u5e8f\u6295\u9012\u5230Kafka\u3002"}),"\n",(0,i.jsx)(n.li,{children:"Event-Publish\u4efb\u52a1\u652f\u6301\u591a\u8282\u70b9\u8d1f\u8f7d\u5747\u8861\u548c\u9ad8\u53ef\u7528\uff0c\u9700\u8981\u4f9d\u8d56Phoenix\u670d\u52a1\u672c\u8eab\u7684Akka\u96c6\u7fa4\u80fd\u529b\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"readme",children:"\u4f7f\u7528\u8bf4\u660e"}),"\n",(0,i.jsx)(n.p,{children:":::tip \u63d0\u793a"}),"\n",(0,i.jsxs)(n.p,{children:["\u5f53 EventStore \u7684 Event-Query-Type \u7c7b\u578b\u4e3a Slice \u6a21\u5f0f\u65f6\uff0c\u4e5f\u5c31\u662f\u652f\u6301\u5207\u7247\u65f6\uff0c EventPublish \u53ef\u4ee5\u901a\u8fc7\u8c03\u8282\u5e76\u884c\u5ea6 ",(0,i.jsx)(n.code,{children:"quantex.phoenix.server.event-publish.parallelism"})," \u6765\u542f\u52a8\u591a\u4e2a\u8bfb\u53d6\u3001\u5904\u7406\u7ebf\u7a0b."]}),"\n",(0,i.jsx)(n.p,{children:":::"}),"\n",(0,i.jsxs)(n.p,{children:["Phoenix-Event-Publish\u529f\u80fd\u6a21\u5757\u5bf9Phoenix\u670d\u52a1\u672c\u8eab\u6ca1\u6709\u4ee3\u7801\u5165\u4fb5\uff0c\u8981\u6253\u5f00Event-Publish\u529f\u80fd\u6a21\u5757\uff0c\u4ec5\u9700\u8981\u4f7f\u7528",(0,i.jsx)(n.code,{children:"quantex.phoenix.event-publish"}),"\u914d\u7f6e\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u8981\u5f00\u542fEvent-Publish\u529f\u80fd\u6a21\u5757\uff0c\u9700\u8981\u5c06Phoenix\u670d\u52a1\u7684",(0,i.jsx)(n.code,{children:"quantex.phoenix.event-publsh.enabled"}),"\u914d\u7f6e\u7f6e\u4e3a",(0,i.jsx)(n.code,{children:"true"}),"\u3002"]}),"\n",(0,i.jsx)(n.h4,{id:"config",children:"\u914d\u7f6e\u8be6\u60c5"}),"\n",(0,i.jsx)(n.p,{children:"Event-Publish\u6a21\u5757\u5b8c\u5168\u4f7f\u7528\u914d\u7f6e\u5b9a\u4e49\u548c\u58f0\u660e\u670d\u52a1\u4e2d\u9700\u8981\u8fd0\u884c\u7684Event-Publish\u4efb\u52a1\uff0c\u5b8c\u5168\u914d\u7f6e\u53c2\u89c1:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u914d\u7f6e\u9879"}),(0,i.jsx)(n.th,{children:"\u63cf\u8ff0"}),(0,i.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,i.jsx)(n.th,{children:"\u9ed8\u8ba4\u503c"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"quantex.phoenix.event-publish.enabled"}),(0,i.jsx)(n.td,{children:"\u603b\u5f00\u5173,\u5173\u95ed\u6b64\u5f00\u5173\u6240\u6709\u76f8\u5173\u4f9d\u8d56\u7ec4\u4ef6(DGC\u3001DDATA\uff09\u90fd\u4f1a\u5173\u95ed"}),(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsx)(n.td,{children:"true"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"quantex.phoenix.event-publish.batch-size"}),(0,i.jsx)(n.td,{children:"\u6279\u91cf\u5927\u5c0f"}),(0,i.jsx)(n.td,{children:"int"}),(0,i.jsx)(n.td,{children:"128"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"quantex.phoenix.event-publish.buffer-queue-size"}),(0,i.jsx)(n.td,{children:"\u7f13\u5b58\u961f\u5217\u5927\u5c0f"}),(0,i.jsx)(n.td,{children:"int"}),(0,i.jsx)(n.td,{children:"64"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"quantex.phoenix.event-publish.state-table-name"}),(0,i.jsx)(n.td,{children:"EventPublish\u72b6\u6001\u8868\u540d\u79f0"}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"event_publish_state"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"quantex.phoenix.event-publish.from-begin"}),(0,i.jsx)(n.td,{children:"\u65b0\u5efa\u72b6\u6001\u6216\u72b6\u6001\u4e0d\u5b58\u5728\u65f6\uff0c\u662f\u5426\u91cd\u7f6e\u8bfb\u53d6\u4f4d\u7f6e\u5230EventStore\u6700\u65e9\u65f6\u95f4\u6233"}),(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsx)(n.td,{children:"false"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"quantex.phoenix.event-publish.ack-timeout"}),(0,i.jsx)(n.td,{children:"EventPublish \u6279\u91cf\u6295\u9012\u5230 Kafka \u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u9ed8\u8ba4  10s"}),(0,i.jsx)(n.td,{children:"long"}),(0,i.jsx)(n.td,{children:"10,000"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"quantex.phoenix.event-publish.event-task.enabled"}),(0,i.jsx)(n.td,{children:"\u662f\u5426\u5f00\u542f\u9886\u57df\u4e8b\u4ef6\u53d1\u5e03"}),(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsx)(n.td,{children:"true"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"quantex.phoenix.event-publish.event-task.topic"}),(0,i.jsx)(n.td,{children:"\u9886\u57df\u4e8b\u4ef6\u53d1\u5e03\u7684\u76ee\u6807topic"}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"\u65e0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"quantex.phoenix.event-publish.monitor-task.enabled"}),(0,i.jsx)(n.td,{children:"\u5f00\u5173"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"quantex.phoenix.event-publish.monitor-task.es-server"}),(0,i.jsx)(n.td,{children:"\u6d88\u606f\u76d1\u63a7\u4e0a\u62a5\u7684elasticsearch\u670d\u52a1\u5730\u5740"}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"\u65e0"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"\u4ee5\u4e0a\u914d\u7f6e\u4e3aEvent-Publish\u529f\u80fd\u6a21\u5757\u7684\u901a\u7528\u914d\u7f6e\uff0c\u5e94\u7528\u4e8e\u670d\u52a1\u5185\u6240\u6709Event-Publish\u4efb\u52a1\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"quantex:\n  phoenix:\n    event-publish:\n      batch-size: 64\n      buffer-queue-size: 64\n      from-begin: true\n      state-table-name: event_publish_state\n      event-task:\n        enabled: true\n        topic: bank-account-event-pub\n      monitor-task:\n        es-server: 127.0.0.1:9200\n"})}),"\n",(0,i.jsx)(n.h4,{id:"filter",children:"\u4e8b\u4ef6\u8fc7\u6ee4\u5668"}),"\n",(0,i.jsx)(n.p,{children:"\u4ece\u6570\u636e\u5e93\u4e2d\u8bfb\u53d6\u5230\u7684\u4e8b\u4ef6\u4f1a\u653e\u5230\u963b\u585e\u961f\u5217\u4e2d\uff0c\u7531\u4e8b\u4ef6\u5904\u7406\u7ebf\u7a0b\u8bfb\u53d6\u5e76\u53d1\u9001\u5230Kafka\u4e2d\uff0c\u5f53\u4e1a\u52a1\u7cfb\u7edf\u4f9d\u8d56\u4e86phoenix-stater\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u4f9d\u8d56\u6ce8\u5165\u7684\u65b9\u5f0f\u81ea\u5b9a\u4e49Event Handler\u505a\u4e8b\u4ef6\u62e6\u622a\u3002"}),"\n",(0,i.jsx)(n.p,{children:"Event Handler\u63d0\u4f9b\u4e86getOrder()\u63a5\u53e3\uff0c\u5b9a\u4e49\u4e86\u5904\u7406\u5668\u7684\u6267\u884c\u987a\u5e8f(Integer.MIN_VALUE > Integer.MAX_VALUE)\u3002\u5f53handleBatch()\u63a5\u53e3\u8fd4\u56denull\uff0c\u5219\u4e0d\u7ee7\u7eed\u6267\u884c\u4e0b\u9762\u7684\u5904\u7406\u5668\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"\npublic class MarketChangePublishHandler implements EventHandler<Phoenix.Message, Phoenix.Message> {\n    @Override\n    public CommittableEventBatchWrapper<Phoenix.Message> handleBatch(CommittableEventBatchWrapper<Phoenix.Message> batchWrapper) {\n        List<EventStoreRecord<Phoenix.Message>> events = batchWrapper.getEvents();\n\n        Iterator<EventStoreRecord<Phoenix.Message>> iterator = events.iterator();\n        // \u53ea\u53d1\u5e03\u884c\u60c5\u53d8\u66f4\u4e8b\u4ef6\n        while (iterator.hasNext()) {\n            EventStoreRecord<Phoenix.Message> event = iterator.next();\n            Phoenix.Message content = event.getContent();\n            String payloadClassName = content.getPayloadClassName();\n            if (!payloadClassName.equals(MarketChangeEvent.class.getName())) {\n                iterator.remove();\n            }\n        }\n        return batchWrapper;\n    }\n\n    @Override\n    public int getOrder() {\n        return 0;\n    }\n}\n\n\n"})}),"\n",(0,i.jsx)(n.h2,{id:"custom-key",children:"\u81ea\u5b9a\u4e49\u6295\u9012 Key"}),"\n",(0,i.jsx)(n.p,{children:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b, EventPublish \u4f1a\u4ee5\u7528\u6237\u805a\u5408\u6839 ID \u4f5c\u4e3a Key, \u6d88\u606f\u4f5c\u4e3a\u5185\u5bb9\u6295\u9012\u5230 Kafka."}),"\n",(0,i.jsxs)(n.p,{children:["\u5bf9\u4e8e\u7279\u5b9a\u9700\u6c42, \u5982\u7528\u6237\u9700\u8981\u5c06\u540c\u4e00\u7c7b\u578b\u7684\u805a\u5408\u6839\u6295\u9012\u5230\u67d0\u4e2a Partition. Phoenix \u652f\u6301\u81ea\u5b9a\u4e49 EventPublish \u6295\u9012\u5230 Kafka \u7684 Key. \u5176\u4e3b\u8981\u7684\u6838\u5fc3\u673a\u5236\u5efa\u7acb\u5728 ",(0,i.jsx)(n.code,{children:"Message"})," \u4e2d\u7684\u5143\u6570\u636e(MetaData)."]}),"\n",(0,i.jsx)(n.p,{children:"\u652f\u6301\u5982\u4e0b\u4e24\u79cd\u573a\u666f\u7684\u81ea\u5b9a\u4e49\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u4ece\u8ba2\u9605\u4e2d\u751f\u6210 Phoenix \u6d88\u606f,\u5728\u5904\u7406\u8ba2\u9605\u7684\u6d88\u606f\u8f6c\u6362\u7684 SourceCollect \u4e2d\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"MessageFactory"})," \u9644\u52a0 EventPublish Key."]}),"\n",(0,i.jsxs)(n.li,{children:["\u5ba2\u6237\u7aef\u4e3b\u52a8\u53d1\u9001 Phoenix \u6d88\u606f, \u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"PhoenixClient"})," \u65b0\u589e API \u9644\u52a0 EventPublish Key \u5230 Phoenix \u6d88\u606f."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"\u6ce8\u610f\uff1a\u76ee\u524d\u4e8b\u52a1\u573a\u666f\u4e0b, \u4e8b\u52a1\u805a\u5408\u6839\u53d1\u51fa\u7684 Ti,Ci \u7b49\u6d88\u606f\u6682\u4e0d\u652f\u6301\u81ea\u5b9a\u4e49\u6295\u9012 Key."})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"PhoenixClient"})," \u7684\u65b0\u589e API \u8bf7\u53c2\u8003",(0,i.jsx)(n.a,{href:"/docs/phoenix-core/phoenix-core-client#event-publish-key",children:(0,i.jsx)("u",{children:"\u5ba2\u6237\u7aef\u4ecb\u7ecd"})})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"MessageFactory"})," \u7684\u81ea\u5b9a\u4e49 Key API \u5982\u4e0b:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"\n /**\n * \u83b7\u53d6\u805a\u5408\u6839\u5904\u7406\u547d\u4ee4\uff08\u81ea\u5b9a\u4e49 EventPublish Key\uff09\n *\n * @param dst\n * @param src\n * @param payload\n * @param requestId\n * @param eventPublishKey \u6295\u5f71(EventPublish)\u53d1\u9001\u5230 Kafka \u65f6\u7684 Key\n * @return\n */\npublic static Message getCmdMsgWithEventPublishKey(String dst, String src, Object payload, String requestId, String eventPublishKey);\n/**\n * \u83b7\u53d6\u805a\u5408\u6839\u5904\u7406\u547d\u4ee4\uff08\u81ea\u5b9a\u4e49 EventPublish Key\uff09\n *\n * @param dst\n * @param src\n * @param payload\n * @param eventPublishKey \u6295\u5f71(EventPublish)\u53d1\u9001\u5230 Kafka \u65f6\u7684 Key\n * @return\n */\npublic static Message getCmdMsgWithEventPublishKey(String dst, String src, Object payload, String eventPublishKey);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"delivery-seg",children:"\u4ea4\u4ed8\u8bed\u4e49"}),"\n",(0,i.jsx)(n.p,{children:"EventPublish \u63d0\u4f9b\u201c\u81f3\u5c11\u4e00\u6b21\u201d\u7684\u4ea4\u4ed8\u8bed\u4e49\uff0c\u8fd9\u610f\u5473\u7740\uff0c\u5f53\u53d1\u9001\u5931\u8d25\uff08\u8d85\u65f6\uff09\u65f6\uff0c\u5c06\u4f1a\u91cd\u8bd5\u53d1\u9001\uff0c\u76f4\u5230\u4e8b\u4ef6\u88ab\u6210\u529f\u4ea4\u4ed8\u5230 Kafka\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"quantex.phoenix.event-publish.ack-timeout"})," \u6765\u6839\u636e\u5b9e\u9645\u73af\u5883\u6765\u8c03\u6574\u7b49\u5f85 Kafka Ack \u7684\u6700\u5927\u8d85\u65f6\u65f6\u95f4\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0cEventPublish \u5728\u53d1\u9001\u65f6\u4f7f\u7528\u4e86\u6279\u91cf\u548c\u5f02\u6b65\u7684\u4ea4\u4ed8\u65b9\u5f0f\uff0c\u8fd9\u610f\u5473\u7740 Ack \u65f6\u95f4\u53d6\u51b3\u4e8e\u6700\u6162\u7684 Records \u88ab\u4ea4\u4ed8\u5230 Kafka \u7684\u65f6\u95f4\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u540c\u6b65\u53d1\u9001\u7684\u65b9\u5f0f\u53ef\u9760\u6027\u9ad8\uff0c\u8981\u4e48\u6d88\u606f\u88ab\u53d1\u9001\u6210\u529f\uff0c\u8981\u4e48\u53d1\u751f\u5f02\u5e38\uff0c\u4f46\u540c\u6b65\u7684\u6027\u80fd\u5374\u5dee\u5f88\u591a\uff0c\u5f53 EventPublish \u5728\u53d1\u9001\u65f6\u51fa\u73b0\u4e86 Timeout \u65f6\uff0c\u4f1a\u4ece\u5f02\u6b65\u56de\u9000\u5230\u540c\u6b65\u6a21\u5f0f\u4e0b\u6765\u63d0\u9ad8\u53ef\u9760\u6027\u3002"}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)(n.p,{children:"EventPublish \u53d1\u9001\u8d85\u65f6\u7684\u539f\u56e0\u53ef\u80fd\u6709\u591a\u79cd\uff1a"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u6709\u53ef\u80fd\u662f\u5ba2\u6237\u7aef\u4e0e\u670d\u52a1\u7aef\u4e4b\u95f4\u7684\u5ef6\u8fdf\u8fc7\u9ad8\uff1a\u6b64\u65f6\u53ef\u4ee5\u8c03\u5927 AckTimeout \u53c2\u6570\u7684\u65b9\u5f0f\u63d0\u9ad8\u6210\u529f\u7387"}),"\n",(0,i.jsx)(n.li,{children:"\u4e5f\u53ef\u80fd\u662f\u53d1\u9001\u7684\u6d88\u606f\u8fc7\u5927\u800c\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u4e4b\u95f4\u7684\u5bbd\u5e26\u4e0d\u8db3\uff1a\u6b64\u65f6\u53ef\u4ee5\u901a\u8fc7\u51cf\u5c11\u6279\u6b21\u6765\u964d\u4f4e\u53d1\u9001\u603b\u8017\u65f6"}),"\n"]})]})]})}function o(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>h,a:()=>l});var i=t(67294);const s={},r=i.createContext(s);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function h(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);