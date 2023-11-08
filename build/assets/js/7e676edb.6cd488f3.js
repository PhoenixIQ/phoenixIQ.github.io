"use strict";(self.webpackChunkphoenix_website_next=self.webpackChunkphoenix_website_next||[]).push([[37121],{32813:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=s(85893),t=s(11151);const o={id:"phoenix-core-event-store",title:"\u4e8b\u4ef6\u7ba1\u7406"},i=void 0,a={id:"phoenix-2.x/phoenix-core/phoenix-core-event-store",title:"\u4e8b\u4ef6\u7ba1\u7406",description:"\u8bbe\u8ba1\u601d\u60f3",source:"@site/versioned_docs/version-2.4.0/phoenix-2.x/02-phoenix-core/04-event-store.md",sourceDirName:"phoenix-2.x/02-phoenix-core",slug:"/phoenix-2.x/phoenix-core/phoenix-core-event-store",permalink:"/docs/2.4.0/phoenix-2.x/phoenix-core/phoenix-core-event-store",draft:!1,unlisted:!1,editUrl:"https://github.com/PhoenixIQ/versioned_docs/version-2.4.0/phoenix-2.x/02-phoenix-core/04-event-store.md",tags:[],version:"2.4.0",sidebarPosition:4,frontMatter:{id:"phoenix-core-event-store",title:"\u4e8b\u4ef6\u7ba1\u7406"},sidebar:"docs",previous:{title:"\u4e8b\u4ef6\u6eaf\u6e90",permalink:"/docs/2.4.0/phoenix-2.x/phoenix-core/phoenix-core-event-souring"},next:{title:"\u5206\u5e03\u5f0f\u6570\u636e",permalink:"/docs/2.4.0/phoenix-2.x/phoenix-core/phoenix-distributed-data"}},c={},d=[{value:"\u8bbe\u8ba1\u601d\u60f3",id:"\u8bbe\u8ba1\u601d\u60f3",level:2},{value:"EventStore-JDBC",id:"eventstore-jdbc",level:2},{value:"\u4e8b\u4ef6\u5f52\u6863",id:"\u4e8b\u4ef6\u5f52\u6863",level:2}];function h(e){const n={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u8bbe\u8ba1\u601d\u60f3",children:"\u8bbe\u8ba1\u601d\u60f3"}),"\n",(0,r.jsx)(n.p,{children:"Phoenix\u7ef4\u62a4\u5185\u5b58\u72b6\u6001\uff0c\u6838\u5fc3\u80fd\u529b\u662f\u4f7f\u7528EventSouring\u6280\u672f\uff0cPhoenix\u4f1a\u5b9a\u65f6\u6253\u5feb\u7167\u7528\u6765\u52a0\u901fEventSouring\u7684\u6062\u590d\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"show",src:s(48486).Z+"",width:"1486",height:"512"})}),"\n",(0,r.jsx)(n.h2,{id:"eventstore-jdbc",children:"EventStore-JDBC"}),"\n",(0,r.jsx)(n.p,{children:"Phoenix \u9ed8\u8ba4\u4f7f\u7528\u7684\u662f JDBC \u7248\u672c\u7684 EventStore, \u8bf7\u6309\u4e0b\u9762\u6b65\u9aa4\u8fdb\u884c\u914d\u7f6e"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u5f15\u7528 phoenix-server-starter \u7684\u4f9d\u8d56"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:"<dependency>\n   <groupId>com.iquantex</groupId>\n   <artifactId>phoenix-server-starter</artifactId>\n   <version>2.4.0</version>\n</dependency>\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["\u5728",(0,r.jsx)(n.code,{children:"application.yaml"}),"\u4e2d\u589e\u52a0EventStore\u914d\u7f6e"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5176\u4e2d\u53ef\u4ee5\u7ed9\u4e00\u4e2a",(0,r.jsx)(n.code,{children:"DataSources"}),"\u589e\u52a0",(0,r.jsx)(n.code,{children:"label"}),"\u9694\u79bb\u4e1a\u52a1\u4f7f\u7528\u548c\u7cfb\u7edf\u4f7f\u7528,\u4e00\u822c\u7528\u4e8e\u6027\u80fd\u6d4b\u8bd5"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"quantex:\n  phoenix:\n      event-store:\n        driver-class-name: org.h2.Driver\n        data-sources:\n          - url: jdbc:h2:file:./data/test;DB_CLOSE_DELAY=-1;DATABASE_TO_UPPER=FALSE;INIT=CREATE SCHEMA IF NOT EXISTS PUBLIC\n            username: sa\n            password:\n          - url: jdbc:h2:file:./data2/test;DB_CLOSE_DELAY=-1;DATABASE_TO_UPPER=FALSE;INIT=CREATE SCHEMA IF NOT EXISTS PUBLIC\n            username: sa\n            password:\n            label: reliablity   # \u914d\u7f6eLabel\u8ba9\u8d44\u6e90\u9694\u79bb(\u6027\u80fd\u6d4b\u8bd5\u7528)\n        initial-size: 0\n        min-idle: 0\n        max-active: 8\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"\u5982\u679c\u5728\u6d4b\u8bd5\u8fc7\u7a0b\u4e2d\u4e0d\u60f3\u4f7f\u7528 EventStore \u529f\u80fd\uff0c\u53ef\u4ee5\u8fdb\u884c\u5982\u4e0b\u914d\u7f6e\uff1a"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"quantex:\n  phoenix:\n      event-store:\n        no-eventstore: true\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u4e8b\u4ef6\u5f52\u6863",children:"\u4e8b\u4ef6\u5f52\u6863"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u9009\u62e9JDBC\u652f\u6301\u7684\u6570\u636e\u5e93\u65f6\uff0c\u7531\u4e8e\u6709\u4e9b\u6570\u636e\u5e93\u4e0d\u5177\u5907\u52a8\u6001\u6269\u5bb9\u7684\u529f\u80fd\uff0c\u4e8b\u4ef6\u7684\u5b58\u50a8\u5e76\u4e0d\u80fd\u4e00\u76f4\u5b58\u50a8\u4e0b\u53bb\uff0c\u9700\u8981\u5b9a\u671f\u5f52\u6863\u3002\u76ee\u524d\u8c03\u7814\u4e0b\u6765\u7684\u6570\u636e\u5e93\u6709"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u4e0d\u652f\u6301\u52a8\u6001\u6269\u5bb9\u7684: Mysql,Oracle"}),"\n",(0,r.jsx)(n.li,{children:"\u652f\u6301\u52a8\u6001\u6269\u5bb9\u7684: TIDB"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u6570\u636e\u5e93\u5f52\u6863\u7684\u4e3b\u8981\u903b\u8f91\u662f\uff1a\u53ef\u4ee5\u5f52\u6863\u6389\u6700\u65b0\u5feb\u7167\u4e4b\u524d\u7684\u4e8b\u4ef6\u548c\u5feb\u7167(\u5982\u679c\u6ca1\u6709\u5176\u4ed6\u4e8b\u540e\u5206\u6790\u9700\u6c42,\u4e5f\u53ef\u4ee5\u5220\u9664)\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u76ee\u524dPhoenix\u63d0\u4f9b\u5f52\u6863SQL\u6765\u65b9\u4fbf\u7528\u6237\u8fdb\u884c\u6570\u636e\u7684\u5f52\u6863\u64cd\u4f5c\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"oracle\u7248\u672c"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-oracle",children:"-- \u5f52\u6863\u5feb\u7167\u8868\n\n-- \u521b\u5efa\u5feb\u7167\u5907\u4efd\u8868\ncreate table snapshot_store_his as\nselect *\nfrom snapshot_store\nwhere 0 = 1;\n\n-- \u5f52\u6863\u5feb\u7167, \u6761\u4ef6snapshot.version < max(snapshot.version)\ninsert into snapshot_store_his\nselect *\nfrom snapshot_store\nwhere exists(select 1\n             from (select aggregate_id, max(version) as max_version from snapshot_store group by aggregate_id) s1\n             where snapshot_store.aggregate_id = s1.aggregate_id\n               and snapshot_store.version < s1.max_version);\n\n-- \u5220\u9664\u539f\u8868\u4e2d\u5df2\u7ecf\u5f52\u6863\u7684\u5feb\u7167\ndelete\nfrom snapshot_store\nwhere exists(select 1\n             from (select aggregate_id, max(version) as max_version from snapshot_store group by aggregate_id) s1\n             where snapshot_store.aggregate_id = s1.aggregate_id\n               and snapshot_store.version < s1.max_version);\n\n-- \u5f52\u6863\u4e8b\u4ef6\u8868\n-- \u521b\u5efa\u4e8b\u4ef6\u5907\u4efd\u8868\ncreate table event_store_his as\nselect *\nfrom event_store\nwhere 0 = 1;\n\n-- \u5f52\u6863\u4e8b\u4ef6, \u6761\u4ef6event.version < max(snapshot.version)\ninsert into event_store_his\nselect *\nfrom event_store\nwhere exists(select 1\n             from (select aggregate_id, max(version) as max_version from snapshot_store group by aggregate_id) s1\n             where event_store.aggregate_id = s1.aggregate_id\n               and event_store.version < s1.max_version);\n-- \u5220\u9664\u539f\u8868\u4e2d\u5df2\u5f52\u6863\u7684\u4e8b\u4ef6\ndelete\nfrom event_store\nwhere exists(select 1\n             from (select aggregate_id, max(version) as max_version from snapshot_store group by aggregate_id) s1\n             where event_store.aggregate_id = s1.aggregate_id and event_store.version < s1.max_version);\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"mysql\u7248\u672c"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mysql",children:"-- \u5f52\u6863\u5feb\u7167\u8868\n-- \u521b\u5efa\u5feb\u7167\u5907\u4efd\u8868\ncreate table if not exists snapshot_store_his as select * from snapshot_store where 0=1;\n-- \u5f52\u6863\u5feb\u7167\uff0c \u6761\u4ef6\uff1asnapshot.version < max(snapshot.version)\ninsert into snapshot_store_his\nselect *\nfrom snapshot_store\nwhere exists(select 1\n             from (select aggregate_id, max(version) as max_version from snapshot_store group by aggregate_id) as s1\n             where snapshot_store.aggregate_id = s1.aggregate_id and snapshot_store.version < s1.max_version);\n-- \u5220\u9664\u539f\u8868\u4e2d\u5df2\u5f52\u6863\u7684\u5feb\u7167\ndelete\nfrom snapshot_store\nwhere exists(select 1\n             from (select aggregate_id, max(version) as max_version from snapshot_store group by aggregate_id) as s1\n             where snapshot_store.aggregate_id = s1.aggregate_id and snapshot_store.version < s1.max_version);\n\n-- \u5f52\u6863\u4e8b\u4ef6\u8868\n-- # \u521b\u5efa\u4e8b\u4ef6\u5907\u4efd\u8868\ncreate table if not exists event_store_his as select * from event_store where 0=1;\n-- # \u5f52\u6863\u4e8b\u4ef6\uff0c\u6761\u4ef6\uff1aevent.version < max(snapshot.version)\ninsert into event_store_his\nselect *\nfrom event_store\nwhere exists(select 1\n             from (select aggregate_id, max(version) as max_version from snapshot_store group by aggregate_id) as s1\n             where event_store.aggregate_id = s1.aggregate_id and event_store.version < s1.max_version);\n-- # \u5220\u9664\u539f\u8868\u4e2d\u5df2\u5f52\u6863\u7684\u4e8b\u4ef6\ndelete\nfrom event_store\nwhere exists(select 1\n             from (select aggregate_id, max(version) as max_version from snapshot_store group by aggregate_id) as s1\n             where event_store.aggregate_id = s1.aggregate_id and event_store.version < s1.max_version);\n"})})]})}function l(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},48486:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/eventsouring-f9020652410148dc17dd3fbea67bc562.png"},11151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>i});var r=s(67294);const t={},o=r.createContext(t);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);