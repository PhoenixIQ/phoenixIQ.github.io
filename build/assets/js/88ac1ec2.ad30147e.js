"use strict";(self.webpackChunkphoenix_website_next=self.webpackChunkphoenix_website_next||[]).push([[87026],{62711:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var i=s(85893),r=s(11151);const t={id:"phoenix-console-system-monitor",title:"Phoenix Metrics",description:"Phoenix \u7684 APM\uff08\u5e94\u7528\u6027\u80fd\u76d1\u63a7\uff09"},a=void 0,l={id:"phoenix-console/phoenix-console-system-monitor",title:"Phoenix Metrics",description:"Phoenix \u7684 APM\uff08\u5e94\u7528\u6027\u80fd\u76d1\u63a7\uff09",source:"@site/versioned_docs/version-2.6.0/05-phoenix-console/04-system-monitor.md",sourceDirName:"05-phoenix-console",slug:"/phoenix-console/phoenix-console-system-monitor",permalink:"/docs/2.6.0/phoenix-console/phoenix-console-system-monitor",draft:!1,unlisted:!1,editUrl:"https://github.com/PhoenixIQ/versioned_docs/version-2.6.0/05-phoenix-console/04-system-monitor.md",tags:[],version:"2.6.0",sidebarPosition:4,frontMatter:{id:"phoenix-console-system-monitor",title:"Phoenix Metrics",description:"Phoenix \u7684 APM\uff08\u5e94\u7528\u6027\u80fd\u76d1\u63a7\uff09"},sidebar:"docs",previous:{title:"Phoenix ElasticSearch",permalink:"/docs/2.6.0/phoenix-console/phoenix-console-business-monitor"},next:{title:"\u529f\u80fd\u6027\u6d4b\u8bd5",permalink:"/docs/2.6.0/phoenix-test/features-test"}},c={},o=[{value:"\u6307\u6807\u5bfc\u51fa\u5668",id:"exporter",level:2},{value:"Prometheus + Grafana \u76d1\u63a7\u4f53\u7cfb",id:"prometheus-grafana",level:2},{value:"\u96c6\u6210\u6b65\u9aa4",id:"integration",level:2},{value:"1. \u90e8\u7f72 Prometheus + Grafana",id:"deploy",level:3},{value:"2. \u9009\u62e9\u6307\u6807\u5bfc\u51fa\u5668\u6a21\u5757",id:"choose-exporter",level:3},{value:"3. \u914d\u7f6e\u6307\u6807\u5bfc\u51fa\u5668",id:"config-exporter",level:3},{value:"3.1 JMX",id:"jmx",level:4},{value:"3.2 OpenTelemetry",id:"otel",level:4},{value:"4. \u96c6\u6210\u5230 Kubernetes",id:"integration-k8s",level:3},{value:"helm-chart \u66b4\u9732\u7aef\u53e3",id:"expose",level:4},{value:"\u4f7f\u7528 Rancher \u64cd\u4f5c\u66b4\u9732\u7aef\u53e3",id:"rancher-expose",level:4},{value:"5. \u68c0\u67e5\u670d\u52a1\u662f\u5426\u88ab\u76d1\u63a7",id:"telnet",level:3},{value:"\u6700\u4f73\u5b9e\u8df5",id:"best-practice",level:2},{value:"1. \u89c2\u5bdf\u5e94\u7528\u6d41\u91cf\u5206\u5e03",id:"distribute",level:3},{value:"2. \u89c2\u5bdf\u5e94\u7528\u5904\u7406\u5ef6\u8fdf",id:"latency",level:3},{value:"3. \u89c2\u5bdf\u767e\u5206\u6570\u5ef6\u8fdf",id:"histogram",level:3},{value:"4. \u89c2\u5bdf\u5ef6\u8fdf\u5206\u5e03",id:"latency-distribute",level:3},{value:"Grafana \u9762\u677f\u4ecb\u7ecd",id:"panel",level:2},{value:"1. JVM \u76d1\u63a7\u9762\u677f",id:"jvm-panel",level:3},{value:"2. Event Publish\u76d1\u63a7\u9762\u677f",id:"ep-panel",level:3},{value:"3. Event Store\u76d1\u63a7\u9762\u677f",id:"es-panel",level:3},{value:"4. Phoenix Client\u76d1\u63a7\u9762\u677f",id:"client-panel",level:3},{value:"5. Source Aggregate\u76d1\u63a7\u9762\u677f",id:"source-panel",level:3},{value:"6. Entity Aggregate\u76d1\u63a7\u9762\u677f",id:"ea-panel",level:3},{value:"7. Transaction Aggregate\u76d1\u63a7\u9762\u677f",id:"ta-panel",level:3},{value:"8. Performance \u76d1\u63a7\u9762\u677f",id:"perf",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Phoenix \u7684\u76d1\u63a7\u7ecf 2.2.1 \u4ee5\u53ca 2.6.0 \u4e24\u4e2a\u5927\u7248\u672c\u7684\u8fed\u4ee3, \u73b0\u5df2\u5efa\u7acb\u57fa\u4e8e ",(0,i.jsx)(n.code,{children:"Telemetry"})," \u63a5\u53e3\u7684\u6838\u5fc3\u94fe\u8def\u57cb\u70b9\u548c\u6307\u6807\u5bfc\u51fa\u7684\u4f53\u7cfb, \u6709\u52a9\u4e8e\u7528\u6237\u6d1e\u6089 Phoenix \u5e94\u7528\u6027\u80fd\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u57fa\u4e8e Phoenix Metrics\uff0c\u7528\u6237\u53ef\u4ee5\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5206\u6790\u96c6\u7fa4\u8fd0\u884c\u72b6\u51b5"}),"\n",(0,i.jsx)(n.li,{children:"\u5206\u6790\u96c6\u7fa4\u8bfb\u5199\u6d41\u91cf\u5206\u5e03\u4ee5\u53ca\u8d8b\u52bf\u53d8\u5316"}),"\n",(0,i.jsx)(n.li,{children:"\u5206\u6790\u5404\u4e2a\u7ec4\u4ef6\u7684\u6027\u80fd\u6570\u636e"}),"\n",(0,i.jsx)(n.li,{children:"\u5206\u6790\u5e94\u7528\u7684\u9519\u8bef\u3001\u5f02\u5e38\u6307\u6807"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u76ee\u524d\u53ef\u76d1\u63a7\u7684\u6570\u636e\u6709\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"JVM \u6307\u6807\u76d1\u63a7(phoenix jvm)"}),"\n",(0,i.jsx)(n.li,{children:"\u4e8b\u4ef6\u53d1\u5e03\u6307\u6807\u76d1\u63a7(phoenix event publish)"}),"\n",(0,i.jsx)(n.li,{children:"\u4e8b\u4ef6\u5b58\u50a8\u6307\u6807\u76d1\u63a7(phoenix event store)"}),"\n",(0,i.jsx)(n.li,{children:"\u5ba2\u6237\u7aef\u6307\u6807\u76d1\u63a7(phoenix client)"}),"\n",(0,i.jsx)(n.li,{children:"\u6e90\u805a\u5408\u6839\u6307\u6807\u76d1\u63a7(phoenix source aggregate)"}),"\n",(0,i.jsx)(n.li,{children:"\u5b9e\u4f53\u805a\u5408\u6839\u6307\u6807\u76d1\u63a7(phoenix entity aggregate)"}),"\n",(0,i.jsx)(n.li,{children:"\u4e8b\u52a1\u805a\u5408\u6839\u6307\u6807\u76d1\u63a7(phoenix transaction aggregate)"}),"\n",(0,i.jsx)(n.li,{children:"\u6027\u80fd\u6307\u6807(phoenix performance): \u4ec5 OpenTelemetry \u5bfc\u51fa\u5668\u652f\u6301"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u9664\u6b64\u4e4b\u5916\uff0cPhoenix \u4e5f\u652f\u6301\u7ebf\u7a0b\u6c60\u6307\u6807\u7684\u76d1\u63a7\uff08\u4ec5 OpenTelemetry \u5bfc\u51fa\u5668\u652f\u6301\uff09\uff0c\u5982\u6709\u9700\u8981\u8bf7\u8054\u7cfb\u6211\u4eec\u7684\u5f00\u53d1\u56e2\u961f\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image",src:s(75411).Z+"",width:"830",height:"480"})}),"\n",(0,i.jsx)(n.h2,{id:"exporter",children:"\u6307\u6807\u5bfc\u51fa\u5668"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728 2.6.0 \u4e4b\u524d\uff0cPhoenix \u4ec5\u652f\u6301 JMX \u5bfc\u51fa\u6307\u6807\uff0c\u57fa\u4e8e JMX \u7684\u6307\u6807\u5bfc\u51fa\u975e\u5e38\u65b9\u4fbf\u5feb\u6377\uff0c\u9664\u4e86 ",(0,i.jsx)(n.code,{children:"Prometheus + Grafana"})," \u76d1\u63a7\u4f53\u7cfb\u5916\u4e5f\u652f\u6301\u901a\u8fc7\u5404\u79cd JDK \u5de5\u5177(jConsole\u3001JProfiler\u3001VisualVM \u7b49)\n\u5feb\u901f\u67e5\u770b\uff0c\u80fd\u591f\u8ba9\u7528\u6237\u5728\u65e0\u9700\u590d\u6742\u73af\u5883\u5373\u53ef\u89c2\u6d4b\u5230\u7a0b\u5e8f\u6027\u80fd\uff0c\u8fd9\u5728\u5f00\u53d1\u9636\u6bb5\u6709\u52a9\u4e8e\u63d0\u524d\u8bc6\u522b\u5230\u7a0b\u5e8f\u7684\u6027\u80fd\u95ee\u9898\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u5f53\u7136 JMX \u4e5f\u4e0d\u662f\u5b8c\u5168\u7684\u9009\u62e9\uff0c\u5bf9\u4e8e\u590d\u6742\u7684\u751f\u4ea7\u73af\u5883\uff0c\u6211\u4eec\u53ef\u80fd\u9700\u8981\u66f4\u5f3a\u5927\u7684\u76f4\u65b9\u56fe\u6307\u6807\uff0c\u6765\u5e2e\u52a9\u6211\u4eec\u6d1e\u6089\u7a0b\u5e8f\u201c\u5ef6\u8fdf\u201d\u65f6\u95f4\u7684\u5206\u5e03\u60c5\u51b5\uff0c\u66f4\u6df1\u5165\u7684\u4e86\u89e3\u6027\u80fd\u539f\u56e0\u3002\u7136\u800c JMX \u5bf9\u4e8e\u76f4\u65b9\u56fe\u7684\u652f\u6301\u8fdc\u590d\u6742\u4e8e\u76f4\u63a5\u4f7f\u7528\u5176\u4ed6\u6846\u67b6\u3002\uff08\u5982 MicroMeter \u548c OpenTelemetry\u7b49\uff09"}),"\n",(0,i.jsx)(n.p,{children:"\u56e0\u6b64\uff0cPhoenix \u5728 2.6.0 \u4e2d\u91cd\u6784\u4e86\u6574\u4e2a\u76d1\u63a7\u4f53\u7cfb\uff0c\u5c06\u6307\u6807\u505a\u5230\u4e86\u540c\u65f6\u652f\u6301 OpenTelemetry + JMX, \u7528\u6237\u4e5f\u53ef\u4ee5\u57fa\u4e8e Telemetry \u81ea\u5b9a\u4e49\u81ea\u5df1\u7684\u6307\u6807\u5bfc\u51fa\u5668."}),"\n",(0,i.jsx)(n.p,{children:"Phoenix OpenTelemetry \u7684\u6307\u6807\u5bfc\u51fa\u5668\u589e\u52a0\u4e86\u6027\u80fd\u6307\u6807\u7684\u76f4\u65b9\u56fe\uff0c\u56e0\u6b64\u90e8\u5206 Grafana Dashboard \u5728 JMX \u4e0b\u4e0d\u53ef\u7528\u3002"}),"\n",(0,i.jsx)(n.p,{children:":::tip \u63d0\u793a"}),"\n",(0,i.jsx)(n.p,{children:"Telemetry \u548c Metrics \u7684\u5173\u7cfb\u4e3a\uff1aTelemetry \u662f Metrics \u7684\u91c7\u96c6\u5668, \u800c Metrics \u5219\u662f Telemetry \u91c7\u96c6\u7684\u7ed3\u679c."}),"\n",(0,i.jsx)(n.p,{children:":::"}),"\n",(0,i.jsx)(n.h2,{id:"prometheus-grafana",children:"Prometheus + Grafana \u76d1\u63a7\u4f53\u7cfb"}),"\n",(0,i.jsx)(n.p,{children:"\u5f53\u63d0\u5230\u76d1\u63a7\u4f53\u7cfb\u65f6\uff0cPrometheus\u548cGrafana\u901a\u5e38\u4f1a\u88ab\u4e00\u8d77\u63d0\u53ca\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Prometheus\u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u6307\u6807\u6536\u96c6\u548c\u67e5\u8be2\u7cfb\u7edf\uff0c\u5b83\u53ef\u4ee5\u4ece\u5404\u79cd\u6765\u6e90\uff08\u5305\u62ecJMX\u3001OpenTelemetry\u7b49\uff09\u6536\u96c6\u65f6\u95f4\u5e8f\u5217\u6570\u636e\uff0c\u5e76\u4e3a\u7528\u6237\u63d0\u4f9b\u5f3a\u5927\u7684\u67e5\u8be2\u8bed\u8a00\u548c\u53ef\u89c6\u5316\u5de5\u5177\u6765\u5206\u6790\u548c\u5c55\u793a\u8fd9\u4e9b\u6570\u636e\u3002"}),"\n",(0,i.jsx)(n.li,{children:"Grafana\u5219\u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u53ef\u89c6\u5316\u5e73\u53f0\uff0c\u5b83\u53ef\u4ee5\u4e0ePrometheus\u96c6\u6210\uff0c\u4ee5\u4fbf\u7528\u6237\u80fd\u591f\u4f7f\u7528\u70ab\u9177\u7684\u4eea\u8868\u677f\u548c\u56fe\u5f62\u6765\u5c55\u793a\u76d1\u63a7\u6570\u636e\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u901a\u8fc7\u5c06Prometheus\u548cGrafana\u7ed3\u5408\u4f7f\u7528\uff0c\u7528\u6237\u53ef\u4ee5\u8f7b\u677e\u5730\u6536\u96c6\u3001\u5b58\u50a8\u3001\u67e5\u8be2\u548c\u53ef\u89c6\u5316\u76d1\u63a7\u6570\u636e\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Prometheus\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5f3a\u5927\u7684\u67e5\u8be2\u8bed\u8a00\uff0c\u4f7f\u7528\u6237\u80fd\u591f\u5feb\u901f\u51c6\u786e\u5730\u83b7\u53d6\u6240\u9700\u7684\u6570\u636e\u3002"}),"\n",(0,i.jsx)(n.li,{children:"Grafana\u63d0\u4f9b\u4e86\u4e00\u4e2a\u76f4\u89c2\u6613\u7528\u7684\u53ef\u89c6\u5316\u754c\u9762\uff0c\u4f7f\u7528\u6237\u80fd\u591f\u4f7f\u7528\u56fe\u8868\u3001\u4eea\u8868\u677f\u7b49\u65b9\u5f0f\u5c55\u793a\u6570\u636e\uff0c\u540c\u65f6\u8fd8\u63d0\u4f9b\u4e86\u8b66\u62a5\u529f\u80fd\uff0c\u5f53\u6307\u6807\u8d85\u8fc7\u9884\u8bbe\u7684\u9608\u503c\u65f6\u4f1a\u81ea\u52a8\u53d1\u9001\u901a\u77e5\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Prometheus\u548cGrafana\u662f\u975e\u5e38\u51fa\u8272\u7684\u76d1\u63a7\u4f53\u7cfb\uff0c\u5b83\u4eec\u53ef\u4ee5\u5e2e\u52a9\u7528\u6237\u6536\u96c6\u5e76\u53ef\u89c6\u5316\u5173\u952e\u7684\u6027\u80fd\u6307\u6807\u548c\u5176\u4ed6\u76d1\u63a7\u6570\u636e\u3002\u5982\u679c\u4f60\u6b63\u5728\u4f7f\u7528Phoenix\u6846\u67b6\u8fdb\u884c\u5f00\u53d1\uff0c\u6211\u5efa\u8bae\u4f60\u8003\u8651\u5c06\u8fd9\u4e24\u4e2a\u5de5\u5177\u96c6\u6210\u5230\u4f60\u7684\u76d1\u63a7\u7b56\u7565\u4e2d\uff0c\u4ee5\u4fbf\u66f4\u597d\u5730\u4e86\u89e3\u548c\u4f18\u5316\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"integration",children:"\u96c6\u6210\u6b65\u9aa4"}),"\n",(0,i.jsx)(n.h3,{id:"deploy",children:"1. \u90e8\u7f72 Prometheus + Grafana"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u90e8\u7f72prometheus\u548cgrafana\u3002"}),"\n",(0,i.jsxs)(n.li,{children:["\u9879\u76ee\u4e2d",(0,i.jsx)(n.a,{href:"#1-%E9%83%A8%E7%BD%B2-prometheus--grafana",children:"\u914d\u7f6eprometheus"}),"\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u542f\u52a8\u9879\u76ee\uff0c",(0,i.jsx)(n.a,{href:"#5-%E6%A3%80%E6%9F%A5%E6%9C%8D%E5%8A%A1%E6%98%AF%E5%90%A6%E8%A2%AB%E7%9B%91%E6%8E%A7",children:"\u68c0\u67e5\u670d\u52a1\u662f\u5426\u88ab\u76d1\u63a7"}),"\u3002"]}),"\n",(0,i.jsx)(n.li,{children:"\u4f7f\u7528grafana\u5c55\u793a\u6570\u636e\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5728grafana\u4e2d\u914d\u7f6eelasticsearch\u6570\u636e\u6e90",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.img,{alt:"message",src:s(58613).Z+"",width:"2560",height:"1349"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u4f7f\u7528grafana\u4e00\u952e\u5bfc\u5165\u81ea\u5b9a\u4e49\u9762\u677f\uff0c\u7528\u4e8e\u5c55\u793a\u6570\u636e\n",(0,i.jsx)(n.img,{alt:"message",src:s(7407).Z+"",width:"2560",height:"1367"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u4f7f\u7528json-model\u6570\u636e\u5373\u53ef\u5feb\u901f\u751f\u6210\u76d1\u63a7\u9762\u677f\uff0c\u4ee5phoenix jvm\u4e3a\u4f8b\uff1a",(0,i.jsx)(n.a,{href:"/docs/2.6.0/assets/file/phoenix-admin/system-monitor-model",children:"\u914d\u7f6e\u793a\u4f8b"}),"\n",(0,i.jsx)(n.img,{alt:"message",src:s(59845).Z+"",width:"2560",height:"1367"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"choose-exporter",children:"2. \u9009\u62e9\u6307\u6807\u5bfc\u51fa\u5668\u6a21\u5757"}),"\n",(0,i.jsxs)(n.p,{children:["\u76ee\u524d Phoenix Telemetry \u5171\u6709\u4e24\u6b3e\u6307\u6807\u5bfc\u51fa\u5668\u53ef\u9009\uff0c\u5206\u522b\u662f JMX \u548c OpenTelemetry\uff0c\u4f7f\u7528\u65f6\u53ea\u9700\u8981\u6dfb\u52a0\u4e0b\u9762\u7684\u5176\u4e2d\u4e00\u4e2a\u4f9d\u8d56\uff0c\u5373\u53ef\u4f7f\u7528\u76f8\u5e94\u7684\u6307\u6807\u5bfc\u51fa\u5668\uff0c\u7528\u6237\u4e5f\u53ef\u4ee5\u53c2\u8003\u6307\u6807\u5bfc\u51fa\u5668\u5b9e\u73b0\u5236\u4f5c\u81ea\u5df1\u7684\u6307\u6807\u5bfc\u51fa\u5668\uff0c\u5982 ",(0,i.jsx)(n.code,{children:"micrometer"}),".\n\u6b64\u5916\uff0c\u76ee\u524d Phoenix \u4e0d\u652f\u6301\u540c\u65f6\u4f7f\u7528\u4e24\u4e2a\u6307\u6807\u5bfc\u51fa\u5668."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:"<dependency>\n    <groupId>com.iquantex</groupId>\n    <artifactId>phoenix-telemetry-otel</artifactId>\n</dependency>\n<dependency>\n    <groupId>com.iquantex</groupId>\n    <artifactId>phoenix-telemetry-jmx</artifactId>\n</dependency>\n"})}),"\n",(0,i.jsx)(n.h3,{id:"config-exporter",children:"3. \u914d\u7f6e\u6307\u6807\u5bfc\u51fa\u5668"}),"\n",(0,i.jsx)(n.h4,{id:"jmx",children:"3.1 JMX"}),"\n",(0,i.jsx)(n.p,{children:"\u5f53\u5c06JMX\u6570\u636e\u5bfc\u51fa\u5230Prometheus\u65f6\uff0c\u6709\u8bb8\u591a\u4e0d\u540c\u7684\u65b9\u6cd5\u53ef\u4f9b\u9009\u62e9\u3002\u5176\u4e2d\u4e00\u79cd\u65b9\u6cd5\u662f\u4f7f\u7528JMX exporter\u3002\u8fd9\u662f\u4e00\u4e2a\u5f00\u6e90\u9879\u76ee\uff0c\u53ef\u4ee5\u5c06JMX\u6570\u636e\u8f6c\u6362\u4e3aPrometheus\u683c\u5f0f\uff0c\u5e76\u5c06\u5176\u516c\u5f00\u53d1\u5e03\u7ed9Prometheus\u670d\u52a1\u5668\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u8981\u4f7f\u7528JMX exporter\uff0c\u8bf7\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u64cd\u4f5c\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u4e0b\u8f7d JMX exporter \u7684 agent jar \u5305"}),"\n",(0,i.jsxs)(n.li,{children:["\u7f16\u8f91",(0,i.jsx)(n.code,{children:"config.yml"}),"\u6587\u4ef6\u4ee5\u6307\u5b9a\u8981\u5bfc\u51fa\u7684JMX\u7aef\u53e3\u548c\u76d1\u63a7\u5bf9\u8c61\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u542f\u52a8\u4f60\u7684\u5e94\u7528\uff0c\u5e76\u5728\u865a\u62df\u673a\u53c2\u6570\u4e2d\u6dfb\u52a0 JMX exporter \u7684 agent \u53c2\u6570\uff0c\u5e76\u9644\u52a0\u914d\u7f6e: ",(0,i.jsx)(n.code,{children:"-javaagent:/prometheus-agent/jmx_prometheus_javaagent.jar=8888:/prometheus-agent/config.yml"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u6709\u5173\u5982\u4f55\u914d\u7f6eJMX exporter\u548cPrometheus\u7684\u66f4\u8be6\u7ec6\u8bf4\u660e\uff0c\u8bf7\u67e5\u770b\u5b98\u65b9\u6587\u6863\u3002"}),"\n",(0,i.jsx)(n.h4,{id:"otel",children:"3.2 OpenTelemetry"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u4e0b\u8f7d OpenTelemetry Agent. ",(0,i.jsx)(n.a,{href:"https://github.com/open-telemetry/opentelemetry-java-instrumentation/releases/latest/download/opentelemetry-javaagent.jar",children:"Github \u6700\u65b0\u7248\u672c\u94fe\u63a5"})]}),"\n",(0,i.jsxs)(n.li,{children:["\u4f7f\u7528 JVM \u7684 -javaagent \u6807\u5fd7\u542f\u7528 Agent\u3002",(0,i.jsx)(n.code,{children:"java -javaagent:path/to/opentelemetry-javaagent.jar -jar myapp.jar"})]}),"\n",(0,i.jsx)(n.li,{children:"\u914d\u7f6e\u4ee3\u7406\u53c2\u6570"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["OpenTelemetry \u652f\u6301\u9ad8\u5ea6\u914d\u7f6e\uff0c\u4f8b\u5982\u5c06\u6307\u6807\u5bfc\u51fa\u5230 Prometheus \u7684\u914d\u7f6e\u4e3a: ",(0,i.jsx)(n.a,{href:"https://github.com/open-telemetry/opentelemetry-java/blob/main/sdk-extensions/autoconfigure/README.md#prometheus-exporter",children:"Agent \u914d\u7f6e\u8be6\u60c5"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"-Dotel.metrics.exporter=prometheus\t\\\n-Dotel.exporter.prometheus.port=8888 \\\n-Dotel.exporter.prometheus.host=0.0.0.0\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u9664\u6b64\u4e4b\u5916\uff0c\u4f60\u8fd8\u53ef\u4ee5\u5c06 trace \u7684\u5bfc\u51fa\u5668\u5173\u95ed\uff0c\u76ee\u524d Phoenix \u6682\u4e0d\u652f\u6301\u94fe\u8def\u8ffd\u8e2a\uff08\u57fa\u4e8e Phoenix Telemetry \u7684\u4f53\u7cfb\u4e0b\uff0c\u7528\u6237\u4e5f\u53ef\u4ee5\u81ea\u5df1\u5b9e\u73b0)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"-Dotel.traces.exporter=none  // \u5173\u95ed trace exporter\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u6700\u540e\uff0cOpenTelemetry \u652f\u6301\u6269\u5c55\uff0c\u4f8b\u5982 Phoenix \u7528 OpenTelemetry \u5236\u4f5c\u4e86 Akka \u76f8\u5173\u7684\u6307\u6807\u91c7\u96c6\u6269\u5c55. \u914d\u7f6e\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"-Dotel.javaagent.extensions=/path-to-phoenix-akka-agent.jar\n"})}),"\n",(0,i.jsx)(n.h3,{id:"integration-k8s",children:"4. \u96c6\u6210\u5230 Kubernetes"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dockerfile",children:'#\u589e\u52a0Prometheus\u914d\u7f6e\u955c\u50cf,\u8d77\u4e00\u4e2a\u522b\u540d\u4e3aagent\nFROM harbor.iquantex.com/phoenix/prometheus-agent:1.0.0 as agent\nFROM harbor.iquantex.com/base_images/openjdk:8u212-jre-with-tool\n\nMAINTAINER "lan"\n\nVOLUME /tmp\n\n#\u62f7\u8d1d\u955c\u50cf\u4e2d\u7684\u914d\u7f6e\u6587\u4ef6\u5230\u6307\u5b9a\u76ee\u5f55\nCOPY --from=agent /prometheus-agent/ /prometheus-agent\nADD app.jar app.jar\n\n#\u589e\u52a0-javaagent:/prometheus-agent/jmx_prometheus_javaagent.jar=8888:/prometheus-agent/config.yml\nENTRYPOINT java -jar -javaagent:/prometheus-agent/jmx_prometheus_javaagent.jar=8888:/prometheus-agent/config.yml ${JAVA_OPTS} -XX:+UseConcMarkSweepGC -XX:+UseContainerSupport -XX:InitialRAMPercentage=75.0 -XX:MinRAMPercentage=75.0 -XX:MaxRAMPercentage=75.0  -XshowSettings:vm /app.jar\n'})}),"\n",(0,i.jsx)(n.h4,{id:"expose",children:"helm-chart \u66b4\u9732\u7aef\u53e3"}),"\n",(0,i.jsxs)(n.p,{children:["\u66b4\u9732",(0,i.jsx)(n.code,{children:"jmx"}),"\u91c7\u96c6\u6570\u636e\u7684\u7aef\u53e3\uff0chelm-chart\u6587\u4ef6\u5982\u4e0b\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'apiVersion: v1\nkind: Service\nmetadata:\n  annotations:\n    prometheus.io/path: /metrics\n    prometheus.io/port: "8888"\n    prometheus.io/scheme: http\n    prometheus.io/phoenix_scrape: "true"\n  name: phoenix-metric\nspec:\n  ports:\n  - name: default\n    port: 80\n    protocol: TCP\n    targetPort: 8888\n    selector:\n    apptype: phoenix\n    type: ClusterIP\nstatus:\n    loadBalancer: {}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u540c\u65f6\u8981\u5728\u670d\u52a1\u7684helm chart\u4e2d\u589e\u52a0\u6807\u7b7e"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"spec:\n  template:\n    metadata:\n      labels:\n        app.name: bank-account\n        apptype: phoenix\n"})}),"\n",(0,i.jsx)(n.h4,{id:"rancher-expose",children:"\u4f7f\u7528 Rancher \u64cd\u4f5c\u66b4\u9732\u7aef\u53e3"}),"\n",(0,i.jsx)(n.p,{children:"rancher => \u670d\u52a1\u53d1\u73b0 => \u6dfb\u52a0DNS\u8bb0\u5f55"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(86154).Z+"",width:"1967",height:"750"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(40912).Z+"",width:"1991",height:"874"})}),"\n",(0,i.jsxs)(n.p,{children:["\u88ab\u76d1\u63a7\u7684\u670d\u52a1\u589e\u52a0\u4ee5\u4e0b\u6807\u7b7e\n",(0,i.jsx)(n.img,{src:s(92696).Z+"",width:"898",height:"644"})]}),"\n",(0,i.jsx)(n.h3,{id:"telnet",children:"5. \u68c0\u67e5\u670d\u52a1\u662f\u5426\u88ab\u76d1\u63a7"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u901a\u8fc7\u8bbf\u95ee\u672c\u5730\u7aef\u53e3\u6765\u67e5\u770b\u662f\u5426\u66b4\u9732\u76d1\u63a7\u6570\u636e"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u8fdb\u5165\u5bb9\u5668\u8bbf\u95ee8888\u7aef\u53e3\uff0c\u67e5\u770b\u662f\u5426\u6709\u66b4\u9732",(0,i.jsx)(n.code,{children:"com_iquantex_Phoenix"}),"\u6253\u5934\u7684\u76d1\u63a7\u4fe1\u606f"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'bash-5.0# curl localhost:8888\n# HELP com_iquantex_Phoenix_ReceiverActor_NoHandlerMessageTotal Attribute exposed for management (com.iquantex.Phoenix<type=ReceiverActor,  aggregateRootId=kafka-9092-account-web-event-0><>NoHandlerMessageTotal)\n# TYPE com_iquantex_Phoenix_ReceiverActor_NoHandlerMessageTotal untyped\ncom_iquantex_Phoenix_ReceiverActor_NoHandlerMessageTotal{_aggregateRootId="kafka-9092-account-web-event-0",} 0.0\ncom_iquantex_Phoenix_ReceiverActor_NoHandlerMessageTotal{_aggregateRootId="kafka-9092-account-server-2",} 0.0\ncom_iquantex_Phoenix_ReceiverActor_NoHandlerMessageTotal{_aggregateRootId="kafka-9092-account-web-event-2",} 0.0\ncom_iquantex_Phoenix_ReceiverActor_NoHandlerMessageTotal{_aggregateRootId="kafka-9092-account-server-0",} 0.0\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u901a\u8fc7Prometheus\u67e5\u770b\u76d1\u63a7\u4fe1\u606f"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u901a\u8fc7Prometheus\u670d\u52a1\u7684targets\u9875\u9762\u67e5\u770b\u662f\u5426\u6709\u88ab\u76d1\u63a7\u7684\u670d\u52a1"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(28202).Z+"",width:"1654",height:"922"})}),"\n",(0,i.jsx)(n.h2,{id:"best-practice",children:"\u6700\u4f73\u5b9e\u8df5"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u5f00\u5934\u4ecb\u7ecd\u4e86 Phoenix Metrics \u7684\u610f\u4e49\u5728\u4e8e\u89c2\u5bdf\u6d41\u91cf\u8d8b\u52bf\u3001\u5206\u5e03\u4ee5\u53ca\u5206\u6790\u6027\u80fd\u6570\u636e\u3002\u4e0b\u9762\u6211\u4eec\u4ee5\u7a0b\u5e8f\u6027\u80fd\u9762\u677f\u6765\u4e00\u6b65\u4e00\u6b65\u5206\u6790\uff0c\u6d1e\u6089 Phoenix \u5e94\u7528\u7684\u6027\u80fd\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4e0b\u9762\u662f Phoenix \u5185\u90e8\u5904\u7406\u6d41\u7a0b\u7684\u5173\u952e\u8def\u5f84\u56fe\uff0c\u5176\u5e8f\u53f7\u5206\u522b\u4ee3\u8868\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u6d88\u606f\u4ece\u4ea7\u751f\uff0c\u8fdb\u5165\u5230 Kafka \u540e\u76f4\u5230\u88ab Phoenix \u6d88\u8d39\u671f\u95f4\u7684\u7b49\u5f85\u65f6\u95f4\uff08\u6d88\u606f\u963b\u585e\u5728 MQ \u7684\u65f6\u95f4\uff09"}),"\n",(0,i.jsx)(n.li,{children:"\u6d88\u606f\u7ecf\u8fc7 KafkaConsumer \u62c9\u53d6\u540e\uff0c\u7531 SourceCollect \u53cd\u5e8f\u5217\u5316\u5904\u7406\u7684\u8017\u65f6"}),"\n",(0,i.jsx)(n.li,{children:"\u6d88\u606f\u4ece\u53ef\u9760\u6027\u6295\u9012/KafkaConsumer \u53d1\u9001\u7ed9\u805a\u5408\u6839\u6512\u6279 Actor\uff0c\u5728 Actor \u7684 Mailbox \u4e2d\u7b49\u5f85\u7684\u65f6\u95f4\uff08\u7b49\u5f85\u7ebf\u7a0b\u6c60\u8c03\u5ea6\u8be5\u6512\u6279 Actor \u6267\u884c\uff09\uff0c\u8fd9\u91cc\u5e94\u4f4e\u4e8e 10ms"}),"\n",(0,i.jsx)(n.li,{children:"\u6d88\u606f\u7ecf\u8fc7\u6512\u6279\u5904\u7406\u540e\uff0c\u53d1\u9001\u7ed9\u805a\u5408\u6839 Child Actor\uff0c\u5728 ChildActor \u7684 Mailbox \u4e2d\u7b49\u5f85\u7684\u65f6\u95f4\uff08\u7b49\u5f85\u7ebf\u7a0b\u6c60\u8c03\u5ea6\u805a\u5408\u6839\u6267\u884c\uff0c\u8fd9\u91cc\u548c 2 \u7528\u7684\u4e0d\u662f\u4e00\u4e2a\u7ebf\u7a0b\u6c60\uff09"}),"\n",(0,i.jsx)(n.li,{children:"\u805a\u5408\u6839\u5904\u7406 Command \u7684\u8017\u65f6\uff08\u65e0\u6570\u636e\u5e93\u4ea4\u4e92\uff09"}),"\n",(0,i.jsx)(n.li,{children:"\u805a\u5408\u6839\u5c06\u5904\u7406\u7ed3\u679c\u7684\u4e8b\u4ef6\uff08Event\uff09\u63d2\u5165\u5230\u6570\u636e\u5e93\u7684\u8017\u65f6"}),"\n",(0,i.jsx)(n.li,{children:"\u6d88\u606f\u4ece\u4ea7\u751f\uff0c\u76f4\u5230\u805a\u5408\u6839\u5904\u7406\u5b8c\u6bd5\uff0c\u5373\u5c06\u8fdb\u884c\u56de\u590d\u65f6\u7684\u65f6\u95f4\u3002\uff08\u4e8b\u52a1\u65f6\u95f4\uff09"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"1\uff5e6 \u7684\u6307\u6807\u5408\u8ba1\u5c31\u662f\u4e00\u4e2a\u6d88\u606f\u4ece Client \u4ea7\u751f\u540e\u5230 Phoenix \u8ba1\u7b97\u5b8c\u6bd5\u603b\u5171\u82b1\u8d39\u7684\u65f6\u95f4\uff08\u4e8b\u52a1\u65f6\u95f4\uff09"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image",src:s(70760).Z+"",width:"1779",height:"446"})}),"\n",(0,i.jsx)(n.h3,{id:"distribute",children:"1. \u89c2\u5bdf\u5e94\u7528\u6d41\u91cf\u5206\u5e03"}),"\n",(0,i.jsx)(n.p,{children:"Phoenix \u63d0\u4f9b\u4e86 5 \u4e2a\u5173\u952e\u8def\u5f84\u7684\u6d41\u91cf\u89c6\u56fe\uff0c\u4ece\u4e0b\u9762\u7684\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u80fd\u591f\u89c2\u5bdf\u5230\uff0c\u6d41\u91cf\u5728\u805a\u5408\u6839\u5904\u7406\u9636\u6bb5\u5f00\u59cb\u4e0b\u964d\uff0c\u8fd9\u662f\u56e0\u4e3a\u805a\u5408\u6839\u662f\u4e2a\u963b\u585e\u6a21\u578b\uff0c\u5176\u9700\u8981\u7b49\u5f85\u4e0b\u5c42\u7684\u6570\u636e\u4ea4\u4e92\n\u5c42\u5b8c\u6210\u624d\u80fd\u91ca\u653e\u7ebf\u7a0b\u8d44\u6e90\uff0c\u56e0\u6b64\u5728\u805a\u5408\u6839\u5904\u7406\u8fc7\u7a0b\u4e2d\uff0c\u53ef\u80fd\u4f1a\u9762\u4e34\u7ebf\u7a0b\u6c60\u7e41\u5fd9\uff08\u963b\u585e\uff09\u7684\u95ee\u9898\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u800c\u5728\u6570\u636e\u5e93\u4ea4\u4e92\u5c42\uff08EventStore IO\uff09\uff0c\u6d41\u91cf\u7684\u4e0b\u964d\u66f4\u52a0\u660e\u663e\uff0c\u8fd9\u662f\u56e0\u4e3a Phoenix \u5728\u5185\u90e8\u5bf9\u6570\u636e\u5e93\u7684\u4ea4\u4e92\u505a\u4e86\u4f18\u5316\uff08\u6279\u91cf\u5904\u7406\uff09\uff0c\u6765\u907f\u514d\u9891\u7e41\u8fdb\u884c\u7f51\u7edc IO\uff0c\u4ee5\u6b64\u6765\u63d0\u9ad8\u7a0b\u5e8f\u6548\u7387\u3002"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Phoenix \u76ee\u524d\u5e76\u672a\u5b9e\u73b0\u805a\u5408\u6839\u5bf9\u5f02\u6b65\u63d2\u5165\u4e8b\u4ef6\u5230\u6570\u636e\u5e93\u7684\u652f\u6301\uff0c\u8fd9\u662f\u56e0\u4e3a\u6211\u4eec\u7528\u6570\u636e\u5e93\u4e8b\u52a1\u6765\u4fdd\u8bc1\u805a\u5408\u6839\u64cd\u4f5c\u7684\u539f\u5b50\u6027"}),"\n",(0,i.jsx)(n.p,{children:"\u7528\u6237\u5e94\u907f\u514d\u5728\u805a\u5408\u6839\u5185\u9891\u7e41\u7684\u6267\u884c I/O \u7b49\u963b\u585e\u7ebf\u7a0b\u7684\u64cd\u4f5c\uff0c\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u8fd9\u4f1a\u5f71\u54cd\u5176\u4ed6\u805a\u5408\u6839\u7684\u6267\u884c\u6548\u7387\uff1b\u4e5f\u5e94\u907f\u514d\u5728 SourceCollect \u4e2d\u6267\u884c I/O \u64cd\u4f5c\uff0c\u4ee5\u907f\u514d\u963b\u585e\u6d41\u91cf\u8fdb\u5165\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"throughput",src:s(10581).Z+"",width:"2159",height:"1312"})}),"\n",(0,i.jsx)(n.h3,{id:"latency",children:"2. \u89c2\u5bdf\u5e94\u7528\u5904\u7406\u5ef6\u8fdf"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u5ef6\u8fdf\u4e0a\uff0c\u76f8\u8f83\u4e8e\u6d41\u91cf\u6211\u4eec\u589e\u52a0\u4e00\u4e2a\u4e8b\u52a1\u5ef6\u8fdf\u6307\u6807\uff08\u6d88\u606f\u4ece Client \u7aef\u4ea7\u751f\u540e\uff0c\u5230 Phoenix \u8ba1\u7b97\u5b8c\u6bd5\u603b\u5171\u82b1\u8d39\u7684\u65f6\u95f4\uff09\uff0c\u5982\u679c\u5728 RPC \u6a21\u5f0f\u4e0b\uff0c\u4e8b\u52a1\u65f6\u95f4\u8fd1\u4f3c\u4e8e\u4e8e\u54cd\u5e94\u65f6\u95f4\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u901a\u8fc7\u4e0b\u56fe\u7684\u9762\u677f\uff0c\u7528\u6237\u80fd\u6d1e\u6089 Phoenix \u201c\u54cd\u5e94\u65f6\u95f4\u201d \u5982\u4f55\uff0c\u4ee5\u53ca\u6574\u4e2a\u54cd\u5e94\u65f6\u95f4\u5206\u522b\u82b1\u8d39\u5728\u5e94\u7528\u7684\u54ea\u4e2a\u6b65\u9aa4\u4e2d."}),"\n",(0,i.jsx)(n.p,{children:"\u4f8b\u5982\uff1a\u5f53\u201c\u805a\u5408\u6839\u963b\u585e\u201d\u8fd9\u4e00\u6307\u6807\u8fc7\u9ad8\uff0c\u800c\u5176\u4ed6\u6307\u6807\u5c5e\u4e8e\u6b63\u5e38\u8303\u56f4\u5185\uff0c\u5e76\u4e14 CPU \u5229\u7528\u7387\u4e0d\u9ad8\u7684\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u53ef\u4ee5\u63a8\u65ad\u51fa\u6d88\u606f\u603b\u662f\u963b\u585e\u5728\u7b49\u5f85\u805a\u5408\u6839\u7ebf\u7a0b\u6c60\u8c03\u5ea6\u7684\u8def\u4e0a\u3002\n\u9488\u5bf9\u8fd9\u4e00\u95ee\u9898\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u63d0\u9ad8\u805a\u5408\u6839\u7ebf\u7a0b\u6c60\u5927\u5c0f\u6765\u52a0\u901f\u6d88\u606f\u88ab\u8c03\u5ea6\u7684\u8fc7\u7a0b\u3002\u5176\u4ed6\u4f8b\u5b50\u5982\u4e0b\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u5f53 ",(0,i.jsx)(n.code,{children:"SourceCollect"})," \u5904\u7406\u8017\u65f6\u8f83\u9ad8\uff0c\u8003\u8651\u4f18\u5316 SourceCollect \u4e2d\u5bf9\u5916\u90e8\u4fe1\u606f\u7684\u4f9d\u8d56\uff0c\u4e5f\u53ef\u4ee5\u7528\u7f13\u5b58\u7684\u65b9\u5f0f\u52a0\u901f\u3002"]}),"\n",(0,i.jsx)(n.li,{children:"\u5f53\u201d\u6d88\u606f\u5728 MQ \u7b49\u5f85\u62c9\u53d6\u65f6\u5ef6\u201c\u8f83\u9ad8\uff0c\u53bb\u89c2\u5bdf KafkaConsumer \u6d41\u901f\uff0c\u5177\u4f53\u5230\u67d0\u4e2a Topic\u3001Partition \u7c92\u5ea6\uff0c\u770b\u770b\u662f\u5426\u662f\u5e76\u884c\u5ea6\u4e0d\u591f\uff0c\u6216\u8005 SourceCollect \u5f71\u54cd\u4e86\u6d88\u8d39\u901f\u5ea6\u3002\u4e5f\u53ef\u4ee5\u901a\u8fc7\u63d0\u9ad8\u6700\u5927\u5728\u9014\u4e8b\u52a1\u5927\u5c0f\u6765\u63d0\u9ad8\u6d88\u8d39\u901a\u9053\u7684\u5e26\u5bbd\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u5f53\u201c\u53ef\u9760\u6027\u6295\u9012 -> \u805a\u5408\u6839\u6279\u91cf Actor \u65f6\u5ef6\u201d\u8f83\u9ad8\uff0c\u5219\u53ef\u80fd\u662f\u6574\u4f53\u7684\u7ebf\u7a0b\u6570\u91cf\u8fc7\u591a\uff0c\u62a2\u5360\u4e86\u5185\u90e8\u6d88\u606f\u6d41\u8f6c\u7684 CPU \u8d44\u6e90\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u5f53\u201c\u805a\u5408\u6839\u5904\u7406\u65f6\u5ef6\u201d\u8f83\u9ad8\uff0c\u5219\u8003\u8651\u5728\u805a\u5408\u6839\u5185\u662f\u5426\u907f\u514d\u4e86 I/O \u884c\u4e3a\uff0c\u62bd\u8c61\u4e3a\u7eaf\u8ba1\u7b97\u6a21\u578b\uff0c\u4ee5\u6b64\u63d0\u9ad8\u901f\u5ea6\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"latency",src:s(58031).Z+"",width:"2159",height:"1312"})}),"\n",(0,i.jsx)(n.h3,{id:"histogram",children:"3. \u89c2\u5bdf\u767e\u5206\u6570\u5ef6\u8fdf"}),"\n",(0,i.jsx)(n.p,{children:"\u5e73\u5747\u5ef6\u8fdf\u4f5c\u4e3a\u6027\u80fd\u6307\u6807\u770b\u8d77\u6765\u8bf1\u4eba\uff0c\u56e0\u4e3a\u5b83\u80fd\u6355\u6349\u6d41\u91cf\u7684\u5927\u90e8\u5206\u53d8\u5316\uff0c\u4e8b\u5b9e\u4e5f\u786e\u5b9e\u5982\u6b64\uff0c\u4f46\u6d41\u91cf\u7684\u591a\u6570\u53d8\u5316\u5e76\u4e0d\u80fd\u53cd\u6620\u51fa\u7cfb\u7edf\u7684\u6574\u4f53\u6027\u80fd\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5982\uff1a\u4e00\u4e2a\u7cfb\u7edf\u7684\u6027\u80fd\u8981\u6c42\u662f\u4f4e\u4e8e 250ms \u7684\u5ef6\u8fdf\uff0c\u5426\u5219\u7528\u6237\u5219\u4f1a\u53d6\u6d88\u8be5\u8bf7\u6c42\uff0c\u4e5f\u5c31\u662f\u8bf4\u5927\u4e8e 250ms \u7684\u8bf7\u6c42\u5927\u6982\u7387\u4f1a\u88ab\u53d6\u6d88\uff0c\u8fd9\u5728\u4e1a\u52a1\u4e0a\u662f\u65e0\u6548\u6d41\u91cf\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5047\u8bbe\u7528\u6237\u4f7f\u7528\u7684\u5e73\u5747\u5ef6\u8fdf\uff0c\u90a3\u4e48\u4ece\u4e0b\u56fe\u4e2d\u53ef\u4ee5\u770b\u5230\u5e73\u5747\u5ef6\u8fdf\u6ee1\u8db3\u4e86\u8fd9\u4e00\u6307\u6807\uff0c\u5927\u591a\u6570\u7528\u6237\u90fd\u80fd\u5728 200ms \u5185\u8fd4\u56de\uff0c\u4f46\u5177\u4f53\u6709\u591a\u5c11\u6d41\u91cf\u662f\u65e0\u6548\u7684\uff0c\u88ab\u53d6\u6d88\u7684\uff0c\u6211\u4eec\u65e0\u4ece\u800c\u77e5\u3002\n\u7136\u800c\u5f53\u6211\u4eec\u62e5\u6709\u4e86\u76f4\u65b9\u56fe/\u767e\u5206\u4f4d\u6307\u6807\u65f6\uff0c\u6211\u4eec\u53d1\u73b0\u6709\u5927\u6982 75% \u5de6\u53f3\u7684\u8bf7\u6c42\u5728 250ms\uff0c\u4e5f\u5c31\u662f\u8bf4\u6574\u4e2a\u7cfb\u7edf\u6709 25% \u7684\u65e0\u6548\u6d41\u91cf\uff0c\u7136\u800c\u53ea\u4f7f\u7528\u5e73\u5747\u6307\u6807\u7684\u60c5\u51b5\u4e0b\u5e76\u4e0d\u80fd\u6d1e\u6089\u8fd9\u4e2a\u7ed3\u679c\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"percent",src:s(24492).Z+"",width:"2159",height:"1312"})}),"\n",(0,i.jsx)(n.h3,{id:"latency-distribute",children:"4. \u89c2\u5bdf\u5ef6\u8fdf\u5206\u5e03"}),"\n",(0,i.jsx)(n.p,{children:"\u4ec5\u4ec5\u4f9d\u9760\u767e\u5206\u6570\u5ef6\u8fdf\u548c\u6d41\u91cf\u5206\u5e03\u4e5f\u5e76\u4e0d\u80fd\u5b8c\u5168\u8986\u76d6\u5e94\u7528\u6027\u80fd\u7684\u5404\u4e2a\u65b9\u9762\uff0c\u8fd9\u65f6\u6211\u4eec\u9700\u8981\u5229\u7528\u5ef6\u8fdf\u7684\u76f4\u65b9\u5206\u5e03\u3002Phoenix \u6027\u80fd\u9762\u677f\u63d0\u4f9b\u4e86\u5206\u5e03\u7cfb\u5217\u9762\u677f\u5e2e\u52a9\u5206\u6790\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5982\uff1a\u5728\u67d0\u4e2a\u65f6\u95f4\u5185\uff0c\u53d1\u73b0\u65e0\u8bba\u662f\u767e\u5206\u6570\u5ef6\u8fdf\uff0c\u8fd8\u662f\u5e73\u5747\u5ef6\u8fdf\uff0c\u90fd\u51fa\u73b0\u4e86\u5cf0\u523a\uff0c\u5982\u4e0b\u56fe\u6240\u793a\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u4e0b\u56fe\u4e2d\u6211\u4eec\u53ef\u4ee5\u63d0\u53d6\u4e00\u4e9b\u4fe1\u606f\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u5e73\u5747\u548c\u767e\u5206\u4f4d\u5ef6\u8fdf\u88ab\u90e8\u5206\u5f02\u5e38\u6d41\u91cf\u62c9\u9ad8\u7edf\u8ba1\u6570\u503c"}),"\n",(0,i.jsx)(n.li,{children:"1 \u63d0\u5230\u7684\u5f02\u5e38\u6d41\u91cf\u5e76\u4e0d\u5f71\u54cd\u6574\u4f53\u7684\u541e\u5410\u91cf"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u79cd\u60c5\u51b5\u4e0b\u6211\u4eec\u5219\u53ef\u4ee5\u5206\u6790\uff0c\u662f\u5426\u67d0\u4e9b\u64cd\u4f5c\u8fdb\u5165\u5230\u67d0\u4e2a\u8def\u5f84\uff0c\u5728\u8fd9\u4e2a\u8def\u5f84\u4e0b\u5b58\u5728\u95ee\u9898\uff08\u5982\u7f51\u7ad9\u7684\u67d0\u4e2a API \u80cc\u540e\u6709\u6570\u636e\u5e93\u67e5\u8be2\u7684 N + 1 \u95ee\u9898\uff09"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"distribution",src:s(72603).Z+"",width:"2159",height:"1312"})}),"\n",(0,i.jsx)(n.h2,{id:"panel",children:"Grafana \u9762\u677f\u4ecb\u7ecd"}),"\n",(0,i.jsx)(n.h3,{id:"jvm-panel",children:"1. JVM \u76d1\u63a7\u9762\u677f"}),"\n",(0,i.jsxs)(n.p,{children:["\u76d1\u63a7JVM\u7684\u72b6\u6001\u4fe1\u606f\u3001\u4f7f\u7528\u65f6\u957f\u3001\u5f00\u673a\u65f6\u95f4\u3001CPU\u8d1f\u8f7d\u7b49\u3002\n",(0,i.jsx)(n.img,{alt:"jvm",src:s(74665).Z+"",width:"2478",height:"1272"})]}),"\n",(0,i.jsx)(n.h3,{id:"ep-panel",children:"2. Event Publish\u76d1\u63a7\u9762\u677f"}),"\n",(0,i.jsxs)(n.p,{children:["\u76d1\u63a7\u4e8b\u4ef6\u53d1\u5e03\u7684\u76f8\u5173\u6307\u6807\uff0c\u53d1\u9001\u4e8b\u4ef6\u603b\u6570\u3001\u53d1\u9001\u5931\u8d25\u6b21\u6570\u3001\u8bfb\u5e93tps\u3001\u53d1\u9001\u4e8b\u4ef6tps\u3001\u53d1\u9001\u4e8b\u4ef6\u65f6\u5ef6\u7b49\u3002\n",(0,i.jsx)(n.img,{alt:"image",src:s(93395).Z+"",width:"2500",height:"916"})]}),"\n",(0,i.jsx)(n.h3,{id:"es-panel",children:"3. Event Store\u76d1\u63a7\u9762\u677f"}),"\n",(0,i.jsxs)(n.p,{children:["\u76d1\u63a7\u4e8b\u4ef6\u5b58\u50a8\u7684\u76f8\u5173\u6307\u6807\uff0c\u4e8b\u4ef6\u5b58\u50a8\u603b\u6570\u3001\u63a5\u6536\u548c\u6301\u4e45\u5316\u65f6tps\uff0c\u53d1\u751f\u5f02\u5e38\u6b21\u6570\u7b49\u3002\n",(0,i.jsx)(n.img,{alt:"image",src:s(14477).Z+"",width:"2500",height:"986"})]}),"\n",(0,i.jsx)(n.h3,{id:"client-panel",children:"4. Phoenix Client\u76d1\u63a7\u9762\u677f"}),"\n",(0,i.jsxs)(n.p,{children:["\u76d1\u63a7phoenix\u5ba2\u6237\u7aef\u884c\u4e3a\uff0c\u540c\u6b65\u6216\u5f02\u6b65\u53d1\u9001\u6d88\u606f\u6570\u91cf\u3001\u5f02\u5e38\u53d1\u9001\u6b21\u6570\u3001\u76f8\u5173\u901f\u7387\u7b49\u3002\n",(0,i.jsx)(n.img,{alt:"image",src:s(14513).Z+"",width:"2560",height:"1367"})]}),"\n",(0,i.jsx)(n.h3,{id:"source-panel",children:"5. Source Aggregate\u76d1\u63a7\u9762\u677f"}),"\n",(0,i.jsxs)(n.p,{children:["\u76d1\u63a7\u805a\u5408\u6839\u5904\u7406\u4e8b\u52a1\u7684\u80fd\u529b\uff0c\u4e8b\u52a1\u76f8\u5173\u6307\u6807\u3001\u5904\u7406\u7684\u5173\u952e\u5ef6\u65f6\u3001\u4e8b\u52a1\u5904\u7406tps\u7b49\u3002\n",(0,i.jsx)(n.img,{alt:"image",src:s(14610).Z+"",width:"2560",height:"1367"})]}),"\n",(0,i.jsx)(n.h3,{id:"ea-panel",children:"6. Entity Aggregate\u76d1\u63a7\u9762\u677f"}),"\n",(0,i.jsxs)(n.p,{children:["\u76d1\u63a7\u5b9e\u4f53\u805a\u5408\u6839\u76f8\u5173\u6307\u6807\uff0c\u5b9e\u4f53\u805a\u5408\u6839\u5904\u7406\u6d88\u606ftps\u3001\u5b9e\u4f53\u805a\u5408\u6839\u5904\u7406\u6d88\u606f\u65f6\u7684\u5ef6\u65f6\u7b49\u3002\n",(0,i.jsx)(n.img,{alt:"image",src:s(54319).Z+"",width:"2560",height:"1367"})]}),"\n",(0,i.jsx)(n.h3,{id:"ta-panel",children:"7. Transaction Aggregate\u76d1\u63a7\u9762\u677f"}),"\n",(0,i.jsxs)(n.p,{children:["\u76d1\u63a7\u4e8b\u52a1\u805a\u5408\u6839\u76f8\u5173\u6307\u6807\uff0c\u4e8b\u52a1\u805a\u5408\u6839\u5e42\u7b49\u5904\u7406tps\u3001\u4e8b\u52a1actor\u7d2f\u8ba1\u63a5\u6536\u5fc3\u8df3\u4e2a\u6570\u7b49\u3002\n",(0,i.jsx)(n.img,{alt:"image",src:s(1046).Z+"",width:"2560",height:"1367"})]}),"\n",(0,i.jsx)(n.h3,{id:"perf",children:"8. Performance \u76d1\u63a7\u9762\u677f"}),"\n",(0,i.jsx)(n.p,{children:"\u76d1\u63a7\u5173\u952e\u8def\u5f84\u4e0a\u7684\u541e\u5410\u7387\u3001\u5ef6\u8fdf\u6027\u80fd\u76f8\u5173\u6307\u6807\u3002"})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},70760:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/000-cddb480b902a070a9400100a4b6f7665.png"},75411:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/001-be170f83ed0b578cb817c47de2dc625d.png"},74665:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/002-3d6ee9136f9bde0e2c57344a4bf6c7f8.png"},93395:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/003-700849f9b694f718cd266385e90cd1a7.png"},14477:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/004-fb86132be2f3769019f6745ecc7b4129.png"},14513:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/005-e5f5a9eb5065d7fb5c1f34d90e484f60.png"},14610:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/006-f16e5839a46dc466cef00e823e57fc11.png"},54319:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/007-ffd09a89a06f096a8bd924a948c9a9e7.png"},1046:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/008-cb6ccf290ae6979d5d8e132c6c5430b5.png"},58613:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/009-2077a06397d9a5ebc5b4c52b14657b45.png"},7407:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/010-21877876103a805628214784255f47b4.png"},59845:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/011-2f0851e8ca33885be5828c61ca94dd33.png"},86154:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/012-82a00c4e252ff6c03685ae41697ff3e9.png"},40912:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/013-d3f9cbc8c1b159f406b36bdadf971cba.png"},92696:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/014-2d36cd2268d4319ace4f4c5412e39b1f.png"},28202:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/015-ac8ec672cf645771101785b176da9c8c.png"},10581:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/016-879c22dc2e465c308fe4b86d0340c65a.png"},58031:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/017-fc14f2f22e64b2cb8ab2203d19d08068.png"},72603:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/018-c8b47243cf40899cd615b83445d59989.png"},24492:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/019-c46c8cfbd2dd20c6d2de066bd7ab8100.png"},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>a});var i=s(67294);const r={},t=i.createContext(r);function a(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);