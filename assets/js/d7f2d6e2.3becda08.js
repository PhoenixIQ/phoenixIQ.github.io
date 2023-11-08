"use strict";(self.webpackChunkphoenixiq_github_io=self.webpackChunkphoenixiq_github_io||[]).push([[22829],{49190:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>h});var t=s(85893),i=s(11151);const a={id:"phoenix-console-system-monitor",title:"\u7cfb\u7edf\u76d1\u63a7"},o=void 0,r={id:"phoenix-2.x/phoenix-console/phoenix-console-system-monitor",title:"\u7cfb\u7edf\u76d1\u63a7",description:"\u4ece2.2.1\u7248\u672c\u5f00\u59cbphoenix\u5f15\u5165 JMX + Prometheus + Grafana \u76d1\u63a7\u673a\u5236\uff0c\u53ef\u4ee5\u5b9e\u65f6\u91c7\u96c6\u670d\u52a1\u7684\u8fd0\u884c\u6307\u6807\uff0c\u5e76\u901a\u8fc7Grafana\u8fdb\u884c\u5c55\u793a\u3002",source:"@site/versioned_docs/version-2.5.1/phoenix-2.x/05-phoenix-console/04-system-monitor.md",sourceDirName:"phoenix-2.x/05-phoenix-console",slug:"/phoenix-2.x/phoenix-console/phoenix-console-system-monitor",permalink:"/docs/2.5.1/phoenix-2.x/phoenix-console/phoenix-console-system-monitor",draft:!1,unlisted:!1,editUrl:"https://github.com/PhoenixIQ/versioned_docs/version-2.5.1/phoenix-2.x/05-phoenix-console/04-system-monitor.md",tags:[],version:"2.5.1",sidebarPosition:4,frontMatter:{id:"phoenix-console-system-monitor",title:"\u7cfb\u7edf\u76d1\u63a7"},sidebar:"docs",previous:{title:"\u4e1a\u52a1\u76d1\u63a7",permalink:"/docs/2.5.1/phoenix-2.x/phoenix-console/phoenix-console-business-monitor"},next:{title:"\u529f\u80fd\u6027\u6d4b\u8bd5",permalink:"/docs/2.5.1/phoenix-2.x/phoenix-test/features-test"}},c={},h=[{value:"\u6027\u80fd\u76d1\u63a7",id:"\u6027\u80fd\u76d1\u63a7",level:2},{value:"\u4f7f\u7528\u8bf4\u660e",id:"\u4f7f\u7528\u8bf4\u660e",level:2},{value:"\u9879\u76ee\u914d\u7f6e",id:"\u9879\u76ee\u914d\u7f6e",level:3},{value:"\u4f7f\u7528rancher\u64cd\u4f5c",id:"\u4f7f\u7528rancher\u64cd\u4f5c",level:4},{value:"\u68c0\u67e5\u670d\u52a1\u662f\u5426\u88ab\u76d1\u63a7",id:"\u68c0\u67e5\u670d\u52a1\u662f\u5426\u88ab\u76d1\u63a7",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["\u4ece2.2.1\u7248\u672c\u5f00\u59cbphoenix\u5f15\u5165 ",(0,t.jsx)(n.code,{children:"JMX + Prometheus + Grafana"})," \u76d1\u63a7\u673a\u5236\uff0c\u53ef\u4ee5\u5b9e\u65f6\u91c7\u96c6\u670d\u52a1\u7684\u8fd0\u884c\u6307\u6807\uff0c\u5e76\u901a\u8fc7Grafana\u8fdb\u884c\u5c55\u793a\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u76ee\u524d\u53ef\u76d1\u63a7\u7684\u6570\u636e\u6709\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"JVM \u6307\u6807\u76d1\u63a7(phoenix jvm)"}),"\n",(0,t.jsx)(n.li,{children:"\u4e8b\u4ef6\u53d1\u5e03\u6307\u6807\u76d1\u63a7(phoenix event publish)"}),"\n",(0,t.jsx)(n.li,{children:"\u4e8b\u4ef6\u5b58\u50a8\u6307\u6807\u76d1\u63a7(phoenix event store)"}),"\n",(0,t.jsx)(n.li,{children:"\u5ba2\u6237\u7aef\u6307\u6807\u76d1\u63a7(phoenix client)"}),"\n",(0,t.jsx)(n.li,{children:"\u6e90\u805a\u5408\u6839\u6307\u6807\u76d1\u63a7(phoenix source aggregate)"}),"\n",(0,t.jsx)(n.li,{children:"\u5b9e\u4f53\u805a\u5408\u6839\u6307\u6807\u76d1\u63a7(phoenix entity aggregate)"}),"\n",(0,t.jsx)(n.li,{children:"\u4e8b\u52a1\u805a\u5408\u6839\u6307\u6807\u76d1\u63a7(phoenix transaction aggregate)"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image",src:s(58691).Z+"",width:"830",height:"480"})}),"\n",(0,t.jsx)(n.h2,{id:"\u6027\u80fd\u76d1\u63a7",children:"\u6027\u80fd\u76d1\u63a7"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"jvm\u76d1\u63a7\u9762\u677f"})}),"\n",(0,t.jsxs)(n.p,{children:["\u76d1\u63a7JVM\u7684\u72b6\u6001\u4fe1\u606f\u3001\u4f7f\u7528\u65f6\u957f\u3001\u5f00\u673a\u65f6\u95f4\u3001CPU\u8d1f\u8f7d\u7b49\u3002\n",(0,t.jsx)(n.img,{alt:"jvm",src:s(75930).Z+"",width:"2478",height:"1272"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"event publish\u76d1\u63a7\u9762\u677f"})}),"\n",(0,t.jsxs)(n.p,{children:["\u76d1\u63a7\u4e8b\u4ef6\u53d1\u5e03\u7684\u76f8\u5173\u6307\u6807\uff0c\u53d1\u9001\u4e8b\u4ef6\u603b\u6570\u3001\u53d1\u9001\u5931\u8d25\u6b21\u6570\u3001\u8bfb\u5e93tps\u3001\u53d1\u9001\u4e8b\u4ef6tps\u3001\u53d1\u9001\u4e8b\u4ef6\u65f6\u5ef6\u7b49\u3002\n",(0,t.jsx)(n.img,{alt:"image",src:s(1783).Z+"",width:"2500",height:"916"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"event store\u76d1\u63a7\u9762\u677f"})}),"\n",(0,t.jsxs)(n.p,{children:["\u76d1\u63a7\u4e8b\u4ef6\u5b58\u50a8\u7684\u76f8\u5173\u6307\u6807\uff0c\u4e8b\u4ef6\u5b58\u50a8\u603b\u6570\u3001\u63a5\u6536\u548c\u6301\u4e45\u5316\u65f6tps\uff0c\u53d1\u751f\u5f02\u5e38\u6b21\u6570\u7b49\u3002\n",(0,t.jsx)(n.img,{alt:"image",src:s(41790).Z+"",width:"2500",height:"986"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"phoenix client\u76d1\u63a7\u9762\u677f"})}),"\n",(0,t.jsxs)(n.p,{children:["\u76d1\u63a7phoenix\u5ba2\u6237\u7aef\u884c\u4e3a\uff0c\u540c\u6b65\u6216\u5f02\u6b65\u53d1\u9001\u6d88\u606f\u6570\u91cf\u3001\u5f02\u5e38\u53d1\u9001\u6b21\u6570\u3001\u76f8\u5173\u901f\u7387\u7b49\u3002\n",(0,t.jsx)(n.img,{alt:"image",src:s(22324).Z+"",width:"2560",height:"1367"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"source aggregate\u76d1\u63a7\u9762\u677f"})}),"\n",(0,t.jsxs)(n.p,{children:["\u76d1\u63a7\u805a\u5408\u6839\u5904\u7406\u4e8b\u52a1\u7684\u80fd\u529b\uff0c\u4e8b\u52a1\u76f8\u5173\u6307\u6807\u3001\u5904\u7406\u7684\u5173\u952e\u5ef6\u65f6\u3001\u4e8b\u52a1\u5904\u7406tps\u7b49\u3002\n",(0,t.jsx)(n.img,{alt:"image",src:s(49804).Z+"",width:"2560",height:"1367"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"entity aggregate\u76d1\u63a7\u9762\u677f"})}),"\n",(0,t.jsxs)(n.p,{children:["\u76d1\u63a7\u5b9e\u4f53\u805a\u5408\u6839\u76f8\u5173\u6307\u6807\uff0c\u5b9e\u4f53\u805a\u5408\u6839\u5904\u7406\u6d88\u606ftps\u3001\u5b9e\u4f53\u805a\u5408\u6839\u5904\u7406\u6d88\u606f\u65f6\u7684\u5ef6\u65f6\u7b49\u3002\n",(0,t.jsx)(n.img,{alt:"image",src:s(9564).Z+"",width:"2560",height:"1367"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"transaction aggregate\u76d1\u63a7\u9762\u677f"})}),"\n",(0,t.jsxs)(n.p,{children:["\u76d1\u63a7\u4e8b\u52a1\u805a\u5408\u6839\u76f8\u5173\u6307\u6807\uff0c\u4e8b\u52a1\u805a\u5408\u6839\u5e42\u7b49\u5904\u7406tps\u3001\u4e8b\u52a1actor\u7d2f\u8ba1\u63a5\u6536\u5fc3\u8df3\u4e2a\u6570\u7b49\u3002\n",(0,t.jsx)(n.img,{alt:"image",src:s(18835).Z+"",width:"2560",height:"1367"})]}),"\n",(0,t.jsx)(n.h2,{id:"\u4f7f\u7528\u8bf4\u660e",children:"\u4f7f\u7528\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u90e8\u7f72prometheus\u548cgrafana\u3002"}),"\n",(0,t.jsxs)(n.li,{children:["\u9879\u76ee\u4e2d",(0,t.jsx)(n.a,{href:"#%E9%A1%B9%E7%9B%AE%E9%85%8D%E7%BD%AE",children:"\u914d\u7f6eprometheus"}),"\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u542f\u52a8\u9879\u76ee\uff0c",(0,t.jsx)(n.a,{href:"#%E6%A3%80%E6%9F%A5%E6%9C%8D%E5%8A%A1%E6%98%AF%E5%90%A6%E8%A2%AB%E7%9B%91%E6%8E%A7",children:"\u68c0\u67e5\u670d\u52a1\u662f\u5426\u88ab\u76d1\u63a7"}),"\u3002"]}),"\n",(0,t.jsx)(n.li,{children:"\u4f7f\u7528grafana\u5c55\u793a\u6570\u636e\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u5728grafana\u4e2d\u914d\u7f6eelasticsearch\u6570\u636e\u6e90",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.img,{alt:"message",src:s(66956).Z+"",width:"2560",height:"1349"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u4f7f\u7528grafana\u4e00\u952e\u5bfc\u5165\u81ea\u5b9a\u4e49\u9762\u677f\uff0c\u7528\u4e8e\u5c55\u793a\u6570\u636e\n",(0,t.jsx)(n.img,{alt:"message",src:s(71216).Z+"",width:"2560",height:"1367"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u4f7f\u7528json-model\u6570\u636e\u5373\u53ef\u5feb\u901f\u751f\u6210\u76d1\u63a7\u9762\u677f\uff0c\u4ee5phoenix jvm\u4e3a\u4f8b\uff1a",(0,t.jsx)(n.a,{href:"/docs/2.5.1/assets/file/phoenix-admin/system-monitor-model",children:"model"}),"\n",(0,t.jsx)(n.img,{alt:"message",src:s(90479).Z+"",width:"2560",height:"1367"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"\u9879\u76ee\u914d\u7f6e",children:"\u9879\u76ee\u914d\u7f6e"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u5f15\u5165Prometheus\u914d\u7f6e\u955c\u50cf"}),"\n",(0,t.jsxs)(n.li,{children:["\u62f7\u8d1d\u955c\u50cf\u4e2d\u7684\u914d\u7f6e\u6587\u4ef6\u7684\u5230",(0,t.jsx)(n.code,{children:"/prometheus-agent"}),"\u76ee\u5f55"]}),"\n",(0,t.jsx)(n.li,{children:"\u5728\u542f\u52a8\u670d\u52a1\u65f6\u9700\u8981\u6dfb\u52a0\u4ee5\u4e0b\u6307\u4ee4"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"-javaagent:/prometheus-agent/jmx_prometheus_javaagent.jar=8888:/prometheus-agent/config.yml"})}),"\n",(0,t.jsx)(n.p,{children:"\u63a5\u5165\u793a\u4f8b\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dockerfile",children:'#\u589e\u52a0Prometheus\u914d\u7f6e\u955c\u50cf,\u8d77\u4e00\u4e2a\u522b\u540d\u4e3aagent\nFROM harbor.iquantex.com/phoenix/prometheus-agent:1.0.0 as agent\nFROM harbor.iquantex.com/base_images/openjdk:8u212-jre-with-tool\n\nMAINTAINER "lan"\n\nVOLUME /tmp\n\n#\u62f7\u8d1d\u955c\u50cf\u4e2d\u7684\u914d\u7f6e\u6587\u4ef6\u5230\u6307\u5b9a\u76ee\u5f55\nCOPY --from=agent /prometheus-agent/ /prometheus-agent\nADD app.jar app.jar\n\n#\u589e\u52a0-javaagent:/prometheus-agent/jmx_prometheus_javaagent.jar=8888:/prometheus-agent/config.yml\nENTRYPOINT java -jar -javaagent:/prometheus-agent/jmx_prometheus_javaagent.jar=8888:/prometheus-agent/config.yml ${JAVA_OPTS} -XX:+UseConcMarkSweepGC -XX:+UseContainerSupport -XX:InitialRAMPercentage=75.0 -XX:MinRAMPercentage=75.0 -XX:MaxRAMPercentage=75.0  -XshowSettings:vm /app.jar\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u66b4\u9732",(0,t.jsx)(n.code,{children:"jmx"}),"\u91c7\u96c6\u6570\u636e\u7684\u7aef\u53e3\uff0chelm-chart\u6587\u4ef6\u5982\u4e0b\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'apiVersion: v1\nkind: Service\nmetadata:\n  annotations:\n    prometheus.io/path: /metrics\n    prometheus.io/port: "8888"\n    prometheus.io/scheme: http\n    prometheus.io/phoenix_scrape: "true"\n  name: phoenix-metric\nspec:\n  ports:\n  - name: default\n    port: 80\n    protocol: TCP\n    targetPort: 8888\n    selector:\n    apptype: phoenix\n    type: ClusterIP\nstatus:\n    loadBalancer: {}\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u540c\u65f6\u8981\u5728\u670d\u52a1\u7684helm chart\u4e2d\u589e\u52a0\u6807\u7b7e"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"spec:\n  template:\n    metadata:\n      labels:\n        app.name: bank-account\n        apptype: phoenix\n"})}),"\n",(0,t.jsx)(n.h4,{id:"\u4f7f\u7528rancher\u64cd\u4f5c",children:"\u4f7f\u7528rancher\u64cd\u4f5c"}),"\n",(0,t.jsx)(n.p,{children:"rancher => \u670d\u52a1\u53d1\u73b0 => \u6dfb\u52a0DNS\u8bb0\u5f55"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(53581).Z+"",width:"1967",height:"750"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(15670).Z+"",width:"1991",height:"874"})}),"\n",(0,t.jsxs)(n.p,{children:["\u88ab\u76d1\u63a7\u7684\u670d\u52a1\u589e\u52a0\u4ee5\u4e0b\u6807\u7b7e\n",(0,t.jsx)(n.img,{src:s(24987).Z+"",width:"898",height:"644"})]}),"\n",(0,t.jsx)(n.h3,{id:"\u68c0\u67e5\u670d\u52a1\u662f\u5426\u88ab\u76d1\u63a7",children:"\u68c0\u67e5\u670d\u52a1\u662f\u5426\u88ab\u76d1\u63a7"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u901a\u8fc7\u8bbf\u95ee\u672c\u5730\u7aef\u53e3\u6765\u67e5\u770b\u662f\u5426\u66b4\u9732\u76d1\u63a7\u6570\u636e"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u8fdb\u5165\u5bb9\u5668\u8bbf\u95ee8888\u7aef\u53e3\uff0c\u67e5\u770b\u662f\u5426\u6709\u66b4\u9732",(0,t.jsx)(n.code,{children:"com_iquantex_Phoenix"}),"\u6253\u5934\u7684\u76d1\u63a7\u4fe1\u606f"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'bash-5.0# curl localhost:8888\n# HELP com_iquantex_Phoenix_ReceiverActor_NoHandlerMessageTotal Attribute exposed for management (com.iquantex.Phoenix<type=ReceiverActor,  aggregateRootId=kafka-9092-account-web-event-0><>NoHandlerMessageTotal)\n# TYPE com_iquantex_Phoenix_ReceiverActor_NoHandlerMessageTotal untyped\ncom_iquantex_Phoenix_ReceiverActor_NoHandlerMessageTotal{_aggregateRootId="kafka-9092-account-web-event-0",} 0.0\ncom_iquantex_Phoenix_ReceiverActor_NoHandlerMessageTotal{_aggregateRootId="kafka-9092-account-server-2",} 0.0\ncom_iquantex_Phoenix_ReceiverActor_NoHandlerMessageTotal{_aggregateRootId="kafka-9092-account-web-event-2",} 0.0\ncom_iquantex_Phoenix_ReceiverActor_NoHandlerMessageTotal{_aggregateRootId="kafka-9092-account-server-0",} 0.0\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u901a\u8fc7Prometheus\u67e5\u770b\u76d1\u63a7\u4fe1\u606f"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u901a\u8fc7Prometheus\u670d\u52a1\u7684targets\u9875\u9762\u67e5\u770b\u662f\u5426\u6709\u88ab\u76d1\u63a7\u7684\u670d\u52a1"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(43564).Z+"",width:"1654",height:"922"})})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},58691:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/001-be170f83ed0b578cb817c47de2dc625d.png"},75930:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/002-3d6ee9136f9bde0e2c57344a4bf6c7f8.png"},1783:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/003-700849f9b694f718cd266385e90cd1a7.png"},41790:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/004-fb86132be2f3769019f6745ecc7b4129.png"},22324:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/005-e5f5a9eb5065d7fb5c1f34d90e484f60.png"},49804:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/006-f16e5839a46dc466cef00e823e57fc11.png"},9564:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/007-ffd09a89a06f096a8bd924a948c9a9e7.png"},18835:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/008-cb6ccf290ae6979d5d8e132c6c5430b5.png"},66956:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/009-2077a06397d9a5ebc5b4c52b14657b45.png"},71216:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/010-21877876103a805628214784255f47b4.png"},90479:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/011-2f0851e8ca33885be5828c61ca94dd33.png"},53581:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/012-82a00c4e252ff6c03685ae41697ff3e9.png"},15670:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/013-d3f9cbc8c1b159f406b36bdadf971cba.png"},24987:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/014-2d36cd2268d4319ace4f4c5412e39b1f.png"},43564:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/015-ac8ec672cf645771101785b176da9c8c.png"},11151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>o});var t=s(67294);const i={},a=t.createContext(i);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);