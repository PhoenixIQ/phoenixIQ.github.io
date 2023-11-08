"use strict";(self.webpackChunkphoenix_website_next=self.webpackChunkphoenix_website_next||[]).push([[34793],{61506:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>h,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var i=n(85893),a=n(11151),c=n(74866),t=n(85162);const r={id:"phoenix-console-service-management",title:"Phoenix Console",description:"Phoenix \u5185\u5b58\u5b9e\u65f6\u8fd0\u7ef4\u5e73\u53f0"},l=void 0,d={id:"phoenix-console/phoenix-console-service-management",title:"Phoenix Console",description:"Phoenix \u5185\u5b58\u5b9e\u65f6\u8fd0\u7ef4\u5e73\u53f0",source:"@site/docs/05-phoenix-console/02-service-management.md",sourceDirName:"05-phoenix-console",slug:"/phoenix-console/phoenix-console-service-management",permalink:"/docs/phoenix-console/phoenix-console-service-management",draft:!1,unlisted:!1,editUrl:"https://github.com/PhoenixIQ/docs/05-phoenix-console/02-service-management.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"phoenix-console-service-management",title:"Phoenix Console",description:"Phoenix \u5185\u5b58\u5b9e\u65f6\u8fd0\u7ef4\u5e73\u53f0"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/phoenix-console/phoenix-console-overall"},next:{title:"Phoenix ElasticSearch",permalink:"/docs/phoenix-console/phoenix-console-business-monitor"}},h={},o=[{value:"\u5feb\u901f\u4f7f\u7528",id:"quick-start",level:2},{value:"\u4e00. \u5e94\u7528\u603b\u89c8",id:"overview",level:2},{value:"1.1 \u5e94\u7528\u72b6\u6001\u603b\u89c8",id:"application-overview",level:3},{value:"1.2 \u5e94\u7528\u72b6\u6001\u8be6\u60c5",id:"application-detail",level:3},{value:"\u4e8c. \u96c6\u7fa4\u5206\u7247\u53ef\u89c6\u5316",id:"cluster",level:2},{value:"\u4e09. \u72b6\u6001\u7ba1\u7406",id:"memory",level:2},{value:"3.1 \u5185\u5b58\u67e5\u8be2",id:"memory-query",level:3},{value:"3.2 \u72b6\u6001\u7ba1\u7406",id:"memory-manager",level:3},{value:"3.3 \u5feb\u7167\u7ba1\u7406",id:"snapshot",level:3},{value:"3.4 \u4e8b\u52a1\u8c03\u7528\u94fe\u8def\u56fe",id:"transaction",level:3},{value:"\u56db. \u4e8b\u4ef6\u7ba1\u7406",id:"event",level:2},{value:"1. \u591a\u79cd\u4e8b\u4ef6\u5217\u8868\u67e5\u8be2\u7ef4\u5ea6",id:"event-query",level:3},{value:"2. \u4e8b\u4ef6\u8be6\u60c5",id:"event-detail",level:3},{value:"3. \u4e00\u952e\u5f52\u6863",id:"achived",level:3},{value:"\u4e94. \u5b58\u6d3b\u805a\u5408\u6839\u67e5\u8be2",id:"alive-aggregate",level:2},{value:"\u516d. MetaData \u7ba1\u7406",id:"metadata",level:2},{value:"\u4e03. \u5386\u53f2\u5f02\u5e38\u4fe1\u606f",id:"exception-history",level:2},{value:"\u516b. \u7ebf\u7a0b\u6c60\u9965\u997f\u4e8b\u4ef6\u67e5\u8be2",id:"starvation",level:2}];function x(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"Phoenix Console(Phoenix \u670d\u52a1\u76d1\u63a7\u7ba1\u7406\u5e73\u53f0)\u662f Phoenix \u6846\u67b6\u9ed8\u8ba4\u63d0\u4f9b\u7684\u8f7b\u91cf\u7ea7\u3001\u5d4c\u5165\u5f0f\u76d1\u63a7\u5e73\u53f0\u3002\u8be5\u5e73\u53f0\u5171\u5185\u7f6e\u591a\u4e2a\u529f\u80fd\u6a21\u5757\uff1a"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"\u5e94\u7528\u603b\u89c8"}),"\uff1a\u96c6\u7fa4\u3001\u5e94\u7528\u914d\u7f6e\u60c5\u51b5\u3001\u8fd0\u884c\u72b6\u6001\uff08\u8fdb\u5ea6\uff09\u3001\u6027\u80fd\u76d1\u63a7\u3001\u7edf\u8ba1\u9762\u677f"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"\u96c6\u7fa4\u5c55\u793a"}),"\uff1a\u96c6\u7fa4\u72b6\u6001\u3001\u5206\u7247\u60c5\u51b5"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"\u5185\u5b58\u7ba1\u7406"}),"\uff1a\u67e5\u770b\u805a\u5408\u6839\u7684\u5185\u5b58\u72b6\u6001\u3001\u5386\u53f2\u72b6\u6001\u56de\u6eaf\u67e5\u8be2\u3001\u547d\u4ee4\u7ba1\u7406\uff08\u53d1\u9001\uff09"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"\u4e8b\u4ef6\u7ba1\u7406"}),"\uff1a\u5168\u5c40\u3001\u7cbe\u786e\u3001\u6a21\u7cca\u67e5\u8be2\u5386\u53f2\u4e8b\u4ef6\uff0c\u4e8b\u4ef6\u6570\u91cf\u7edf\u8ba1"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"\u805a\u5408\u6839\u7ba1\u7406"}),"\uff1a\u67e5\u8be2\u5f53\u524d\u96c6\u7fa4\u5b58\u6d3b\u7684\u805a\u5408\u6839\u53ca\u5176\u5206\u914d\u8282\u70b9\u3001\u5b58\u6d3b\u65f6\u95f4\u3001\u542f\u52a8\u65f6\u95f4"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"MetaData\u7ba1\u7406"}),": MetaData \u662f\u805a\u5408\u6839\u7684\u5143\u6570\u636e\u4fe1\u606f, \u805a\u5408\u6839\u53ef\u4ee5\u9009\u62e9\u5411\u6307\u5b9a\u7684\u67d0\u4e2a\u8ba2\u9605\u4e2d\u6ce8\u518c, \u6b64\u9875\u9762\u7528\u4e8e\u68c0\u7d22\u5df2\u6ce8\u518c MetaData."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"\u5386\u53f2\u6355\u83b7\u5f02\u5e38"}),"\uff1a\u67e5\u8be2\u6846\u67b6\u5185\u90e8\u5386\u53f2\u6355\u83b7\u7684\u5f02\u5e38\u4fe1\u606f\u3001\u5806\u6808\u3001\u65f6\u95f4"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"\u7ebf\u7a0b\u6c60\u9965\u997f\u68c0\u6d4b\u5668"}),": \u67e5\u8be2\u7ebf\u7a0b\u6c60\u9965\u997f\u68c0\u6d4b\u5668\u53d1\u51fa\u7684\u4e8b\u4ef6"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"\u4e0a\u8ff0\u6a21\u5757\u53ef\u5e2e\u52a9\u7528\u6237\u5bf9 Phoenix \u670d\u52a1\u7684\u72b6\u6001\u8fdb\u884c\u5b9e\u65f6\u76d1\u63a7\uff0c\u5386\u53f2\u56de\u6eaf\uff0c\u8fd0\u7ef4\u6392\u67e5\u3002"}),"\n",(0,i.jsx)(s.h2,{id:"quick-start",children:"\u5feb\u901f\u4f7f\u7528"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsx)(s.li,{children:"\u6253\u5f00phoenix \u670d\u52a1\u76d1\u63a7\u7ba1\u7406\u5e73\u53f0\u7684\u63a7\u5236\u5f00\u5173"}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-yaml",children:"quantex.phoenix.server.console.enabled: true\n"})}),"\n",(0,i.jsxs)(s.ol,{start:"2",children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u542f\u52a8 Phoenix \u5e94\u7528\u670d\u52a1\u3002"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["\u8bbf\u95ee\u5730\u5740\uff1a",(0,i.jsx)(s.code,{children:"http://ip:port/phx-console"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"overview",children:"\u4e00. \u5e94\u7528\u603b\u89c8"}),"\n",(0,i.jsx)(s.p,{children:"\u5e94\u7528\u603b\u89c8\u9875\u9762\u5c55\u793a\u8be5 Phoenix\u670d\u52a1\u7684\u4e00\u4e9b\u57fa\u672c\u4fe1\u606f\u548c\u914d\u7f6e\u3002\u5176\u4e2d\u5305\u62ec\uff1a"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"\u96c6\u7fa4\u4fe1\u606f\uff1a\u670d\u52a1\u7684\u8fd0\u884c\u72b6\u6001\u3001\u5b9e\u4f8b\u4e2a\u6570\u3001\u670d\u52a1\u4e2d\u5b58\u5728\u7684\u805a\u5408\u6839\u6570\u91cf"}),"\n",(0,i.jsx)(s.li,{children:"\u5e94\u7528\u72b6\u6001\uff1a\u5b58\u6d3b\u805a\u5408\u6839\u6570\u91cf\u53ca\u5176\u5206\u914d\u8282\u70b9"}),"\n",(0,i.jsx)(s.li,{children:"\u5e94\u7528\u6d41\u7a0b\u56fe\uff1a\u6d41\u7a0b\u56fe\u53ca\u8ba2\u9605\u3001\u53d1\u5e03\u7684\u8fdb\u5ea6\u5c55\u793a\uff0c\u4ee5\u53ca Phoenix \u914d\u7f6e\u8be6\u60c5\uff08\u70b9\u51fb\u5143\u7d20\u540e\u5c55\u793a\uff09"}),"\n",(0,i.jsx)(s.li,{children:"\u5e94\u7528\u914d\u7f6e\uff1a\u805a\u5408\u6839\u7684\u914d\u7f6e\u4fe1\u606f\u53ca Command \u89e3\u6790"}),"\n",(0,i.jsx)(s.li,{children:"\u6027\u80fd\u76d1\u63a7\uff1a\u5185\u7f6e\u7684\u6027\u80fd\u6d41\u901f\u76d1\u63a7\u5c55\u793a"}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"application-overview",children:"1.1 \u5e94\u7528\u72b6\u6001\u603b\u89c8"}),"\n",(0,i.jsxs)(c.Z,{className:"unique-tabs",children:[(0,i.jsx)(t.Z,{value:"\u5e94\u7528\u72b6\u6001",children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(51919).Z+"",width:"1893",height:"1356"})})}),(0,i.jsx)(t.Z,{value:"\u5e94\u7528\u914d\u7f6e",children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(9728).Z+"",width:"1893",height:"1356"})})}),(0,i.jsx)(t.Z,{value:"\u6027\u80fd\u76d1\u63a7",children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(98340).Z+"",width:"1893",height:"1356"})})})]}),"\n",(0,i.jsx)(s.h3,{id:"application-detail",children:"1.2 \u5e94\u7528\u72b6\u6001\u8be6\u60c5"}),"\n",(0,i.jsx)(s.p,{children:"\u9664\u4e86\u9875\u9762\u9ed8\u8ba4\u6240\u5c55\u793a\u7684\u5185\u5bb9\u4e4b\u5916\uff0c\u5e94\u7528\u6d41\u7a0b\u56fe\u8fd8\u53ef\u4ee5\u70b9\u51fb\u5c55\u5f00\u8be6\u7ec6\u4fe1\u606f\uff0c\u5982\uff1a\u8ba2\u9605\u8fdb\u5ea6\u3001\u5e94\u7528\u914d\u7f6e\u7b49"}),"\n",(0,i.jsxs)(c.Z,{className:"unique-tabs",children:[(0,i.jsx)(t.Z,{value:"\u8ba2\u9605\u8fdb\u5ea6",children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(44403).Z+"",width:"1893",height:"1356"})})}),(0,i.jsx)(t.Z,{value:"Phoenix \u914d\u7f6e",children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(39727).Z+"",width:"1893",height:"1356"})})}),(0,i.jsx)(t.Z,{value:"Event Store \u914d\u7f6e",children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(67338).Z+"",width:"1893",height:"1356"})})}),(0,i.jsx)(t.Z,{value:"Event Publish \u8fdb\u5ea6",children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(29327).Z+"",width:"1893",height:"1356"})})})]}),"\n",(0,i.jsx)(s.h2,{id:"cluster",children:"\u4e8c. \u96c6\u7fa4\u5206\u7247\u53ef\u89c6\u5316"}),"\n",(0,i.jsx)(s.p,{children:"\u5728Phoenix\u8fd0\u884c\u65f6\uff0c\u6700\u5c0f\u8c03\u5ea6\u5355\u4f4d\u4e3a\u805a\u5408\u6839\uff0c\u5728\u96c6\u7fa4\u7ba1\u7406\u9875\u9762\u4e2d\u53ef\u4ee5\u5c55\u793aPhoenix\u670d\u52a1\u4e2d\u805a\u5408\u6839\u7684\u5206\u5e03\u60c5\u51b5\u3002"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"\u7ea2\u70b9: \u5f53\u524d Phoenix \u96c6\u7fa4\u7684\u96c6\u7fa4\u540d\u79f0"}),"\n",(0,i.jsx)(s.li,{children:"\u6a59\u70b9: \u5f53\u524d Phoenix \u96c6\u7fa4\u5185\u7684\u8282\u70b9\u7684IP\u548c\u7aef\u53e3"}),"\n",(0,i.jsx)(s.li,{children:"\u7eff\u70b9: \u805a\u5408\u6839 Shard \u96c6\u5408,\u6570\u5b57\u4ee3\u8868\u6bcf\u4e2a Shard \u540e\u805a\u5408\u6839\u7684\u6570\u91cf"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(28968).Z+"",width:"1893",height:"1356"})}),"\n",(0,i.jsx)(s.h2,{id:"memory",children:"\u4e09. \u72b6\u6001\u7ba1\u7406"}),"\n",(0,i.jsx)(s.p,{children:"\u72b6\u6001\u7ba1\u7406\u4e5f\u53ef\u4ee5\u53eb\u5185\u5b58\u7ba1\u7406\uff0c\u53ef\u5bf9\u5185\u5b58\u6570\u636e\u8fdb\u884c\u67e5\u8be2\u6216\u4fee\u6539\u3002\u5176\u4e2d\u5305\u62ec\u805a\u5408\u6839\u5185\u5b58\u6570\u636e\u67e5\u8be2\u3001\u4e8b\u52a1\u8c03\u7528\u94fe\u67e5\u8be2 \u3001\u624b\u52a8\u89e6\u53d1\u5feb\u7167\u3001\u53d1\u9001\u4e07\u80fd\u547d\u4ee4\u7b49\u3002"}),"\n",(0,i.jsx)(s.p,{children:":::info \u63d0\u793a"}),"\n",(0,i.jsx)(s.p,{children:"\u9ed8\u8ba4\u4ece\u5feb\u7167\u6570\u636e\u5e93\u4e2d\u67e5\u8be2\u805a\u5408\u6839\u5217\u8868, \u53ef\u9009\u62e9\u4ece\u4e8b\u4ef6\u6570\u636e\u5e93\u4e2d\u67e5\u8be2\u805a\u5408\u6839\u96c6\u5408\uff08\u5982\u67e5\u8be2\u4e8b\u52a1\u805a\u5408\u6839\uff09\u3002"}),"\n",(0,i.jsx)(s.p,{children:":::"}),"\n",(0,i.jsx)(s.h3,{id:"memory-query",children:"3.1 \u5185\u5b58\u67e5\u8be2"}),"\n",(0,i.jsx)(s.p,{children:"Phoenix \u652f\u6301\u4ece\u591a\u4e2a\u7ef4\u5ea6\u5bf9\u805a\u5408\u6839\u5185\u5b58\u72b6\u6001\u8fdb\u884c\u67e5\u8be2\u3002"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\u6839\u636e\u7248\u672c\u53f7\u8fdb\u884c\u7cbe\u786e\u67e5\u8be2\uff08\u7248\u672c\u53f7\u4e3a ",(0,i.jsx)(s.strong,{children:"-1"})," \u65f6\uff0c\u9ed8\u8ba4\u67e5\u8be2\u805a\u5408\u6839\u7684\u6700\u65b0\u72b6\u6001\uff09"]}),"\n",(0,i.jsx)(s.li,{children:"\u6839\u636e\u65f6\u95f4\u6233\u67e5\u770b\u805a\u5408\u6839\u7684\u5386\u53f2\u72b6\u6001\u3002"}),"\n",(0,i.jsx)(s.li,{children:"\u6839\u636e\u5feb\u7167\u7248\u672c\u53f7\u67e5\u8be2\u805a\u5408\u6839\u5386\u53f2\u72b6\u6001"}),"\n"]}),"\n",(0,i.jsxs)(c.Z,{className:"unique-tabs",children:[(0,i.jsx)(t.Z,{value:"\u6309\u7248\u672c\u53f7\u56de\u6eaf",children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(4151).Z+"",width:"1893",height:"1356"})})}),(0,i.jsx)(t.Z,{value:"\u6309\u5386\u53f2\u65f6\u95f4\u56de\u6eaf",children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(43224).Z+"",width:"1893",height:"1356"})})}),(0,i.jsx)(t.Z,{value:"\u6309\u5feb\u7167\u7248\u672c\u56de\u6eaf",children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(26991).Z+"",width:"1893",height:"1356"})})})]}),"\n",(0,i.jsx)(s.h3,{id:"memory-manager",children:"3.2 \u72b6\u6001\u7ba1\u7406"}),"\n",(0,i.jsx)(s.p,{children:"\u5728\u5185\u5b58\u7ba1\u7406\u6a21\u5757\u4e2d\u7684\u72b6\u6001\u7ba1\u7406\u5904\uff0c\u53ef\u4ee5\u901a\u8fc7\u6307\u5b9a\u547d\u4ee4\u7684\u5168\u8def\u5f84\u540d\u548c\u547d\u4ee4\u7684 json \u6570\u636e\u76f4\u63a5\u64cd\u4f5c\u805a\u5408\u6839\u72b6\u6001\u3002\u5e76\u6709\u4e24\u79cd\u547d\u4ee4\u751f\u6210\u65b9\u5f0f\u53ef\u9009\uff1a"}),"\n",(0,i.jsxs)(c.Z,{className:"unique-tabs",children:[(0,i.jsx)(t.Z,{value:"\u7f16\u8f91\u6a21\u5f0f",children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(15958).Z+"",width:"1893",height:"1356"})})}),(0,i.jsx)(t.Z,{value:"\u6587\u672c\u6a21\u5f0f",children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(22791).Z+"",width:"1893",height:"1356"})})})]}),"\n",(0,i.jsx)(s.h3,{id:"snapshot",children:"3.3 \u5feb\u7167\u7ba1\u7406"}),"\n",(0,i.jsx)(s.p,{children:"Phoenix \u63d0\u4f9b\u624b\u52a8\u89e6\u53d1\u5feb\u7167\u529f\u80fd\u3002\u53ef\u4ee5\u9488\u5bf9\u67d0\u4e00\u805a\u5408\u6839\u8fdb\u884c\u5feb\u7167\u89e6\u53d1\uff0c\u4e5f\u53ef\u5bf9\u67d0\u4e00\u7c7b\u805a\u5408\u6839\u8fdb\u884c\u96c6\u4f53\u5feb\u7167\u89e6\u53d1"}),"\n",(0,i.jsx)(s.p,{children:":::caution \u6ce8\u610f"}),"\n",(0,i.jsx)(s.p,{children:"\u4e8b\u52a1\u805a\u5408\u6839\u4e0d\u63d0\u4f9b\u8be5\u529f\u80fd\u3002"}),"\n",(0,i.jsx)(s.p,{children:":::"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(82975).Z+"",width:"1893",height:"1356"})}),"\n",(0,i.jsx)(s.h3,{id:"transaction",children:"3.4 \u4e8b\u52a1\u8c03\u7528\u94fe\u8def\u56fe"}),"\n",(0,i.jsxs)(s.p,{children:["\u5bf9\u4e8e Phoenix \u7684",(0,i.jsx)(s.a,{href:"/docs/phoenix-transaction",children:"\u4e8b\u52a1\u6a21\u5757"}),", Console \u63d0\u4f9b\u4e86\u4e8b\u52a1\u7684\u8c03\u7528\u94fe\u8def\u8ffd\u8e2a\u56fe\u7684\u96c6\u6210\uff0c\u7528\u6237\u53ef\u501f\u52a9\u8be5\u5de5\u5177\u6d1e\u6089\u6d41\u7a0b\uff0c\u4ee5\u53ca\u6bcf\u4e2a\u6d41\u7a0b\u7684\u4e8b\u4ef6\u8be6\u60c5\u3002"]}),"\n",(0,i.jsxs)(c.Z,{className:"unique-tabs",children:[(0,i.jsx)(t.Z,{value:"\u8c03\u7528\u94fe\u8def",children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(77298).Z+"",width:"1893",height:"1356"})})}),(0,i.jsx)(t.Z,{value:"\u4e8b\u4ef6\u8be6\u60c5",children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(29496).Z+"",width:"1893",height:"1356"})})})]}),"\n",(0,i.jsx)(s.h2,{id:"event",children:"\u56db. \u4e8b\u4ef6\u7ba1\u7406"}),"\n",(0,i.jsx)(s.p,{children:"\u4e8b\u4ef6\u7ba1\u7406\u6a21\u5757\u7528\u4e8e\u67e5\u8be2\u5386\u53f2\u4e8b\u4ef6\u3001\u4ee5\u53ca\u4e8b\u4ef6\u8be6\u7ec6\u5185\u5bb9\uff0c\u4e5f\u652f\u6301\u5bf9\u5386\u53f2\u4e8b\u4ef6\u8fdb\u884c\u4e00\u5b9a\u7a0b\u5ea6\u7684\u5f52\u6863\u3002"}),"\n",(0,i.jsx)(s.h3,{id:"event-query",children:"1. \u591a\u79cd\u4e8b\u4ef6\u5217\u8868\u67e5\u8be2\u7ef4\u5ea6"}),"\n",(0,i.jsx)(s.p,{children:"Console \u63d0\u4f9b\u4e86\u591a\u79cd\u7ef4\u5ea6\u7684\u4e8b\u4ef6\u67e5\u8be2\uff0c\u4ee5\u4fbf\u4e8e\u7528\u6237\u5728\u4e0d\u786e\u5b9a\u4e8b\u4ef6\u6240\u5904\u504f\u79fb\u3001\u7248\u672c\u65f6\uff0c\u534f\u52a9\u7528\u6237\u5b9a\u4f4d\u3002"}),"\n",(0,i.jsxs)(s.p,{children:[":::tip \u63d0\u793a\n\u805a\u5408\u6839 ID \u7ef4\u5ea6\u4e2d\uff0c\u6309\u6d88\u606f ID \u67e5\u8be2\u53ef\u67e5\u8be2",(0,i.jsx)(s.code,{children:"[MsgId, RequestId, TransID]"}),", \u4f8b\u5982\u7528 TransID \u67e5\u8be2\u67d0\u4e2a\u5206\u5e03\u5f0f\u4e8b\u52a1\u5728\u5f53\u524d\u805a\u5408\u6839\u7684\u4ea4\u4e92\u4e8b\u4ef6.\n:::"]}),"\n",(0,i.jsxs)(c.Z,{className:"unique-tabs",children:[(0,i.jsx)(t.Z,{value:"\u5168\u5c40\u7ef4\u5ea6\u5012\u5e8f\u67e5\u8be2",children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(48261).Z+"",width:"1893",height:"1356"})})}),(0,i.jsx)(t.Z,{value:"\u805a\u5408\u6839\u7ef4\u5ea6",children:(0,i.jsxs)(c.Z,{className:"unique-tabs",children:[(0,i.jsx)(t.Z,{value:"\u805a\u5408\u6839\u7248\u672c\u5012\u5e8f\u67e5\u8be2",children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(64354).Z+"",width:"1893",height:"1356"})})}),(0,i.jsx)(t.Z,{value:"\u805a\u5408\u6839\u7248\u672c\u7cbe\u786e\u67e5\u8be2",children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(48942).Z+"",width:"1893",height:"1356"})})}),(0,i.jsx)(t.Z,{value:"\u805a\u5408\u6839\u6309\u547d\u4ee4\u7c7b\u578b\u67e5\u8be2",children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(76557).Z+"",width:"1893",height:"1356"})})}),(0,i.jsx)(t.Z,{value:"\u805a\u5408\u6839\u6309\u6d88\u606f ID \u67e5\u8be2",children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(52160).Z+"",width:"1893",height:"1357"})})})]})}),(0,i.jsx)(t.Z,{value:"ID \u7ef4\u5ea6",children:(0,i.jsxs)(c.Z,{className:"unique-tabs",children:[(0,i.jsx)(t.Z,{value:"\u6309\u5e42\u7b49ID\u67e5\u8be2",children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(32462).Z+"",width:"1893",height:"1356"})})}),(0,i.jsx)(t.Z,{value:"\u805a\u5408\u6839ID\u6a21\u7cca\u67e5\u8be2",children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(51607).Z+"",width:"1893",height:"1356"})})})]})}),(0,i.jsx)(t.Z,{value:"\u805a\u5408\u6839\u7c7b\u578b\u7ef4\u5ea6",children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(51425).Z+"",width:"1893",height:"1356"})})})]}),"\n",(0,i.jsx)(s.h3,{id:"event-detail",children:"2. \u4e8b\u4ef6\u8be6\u60c5"}),"\n",(0,i.jsx)(s.p,{children:"\u4e8b\u4ef6\u9ed8\u8ba4\u4e3a\u61d2\u52a0\u8f7d\u6a21\u5f0f\uff0c\u4ec5\u5f53\u7528\u6237\u70b9\u51fb\u8be6\u60c5\u65f6\uff0c\u83b7\u53d6\u5e76\u5c55\u793a\u8be6\u7ec6\u4e8b\u4ef6\u5185\u5bb9\u3002\u5982\u679c\u5f53\u524d\u4e8b\u4ef6\u4e3a\u5f02\u5e38\u4e8b\u4ef6\uff0c\u5219\u53ef\u901a\u8fc7\u5f02\u5e38\u8be6\u60c5\u7684\u65b9\u5f0f\u67e5\u770b\u5f02\u5e38\u5806\u6808\u3002"}),"\n",(0,i.jsxs)(c.Z,{className:"unique-tabs",children:[(0,i.jsx)(t.Z,{value:"\u4e8b\u4ef6\u8be6\u60c5",children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(22387).Z+"",width:"1791",height:"1137"})})}),(0,i.jsx)(t.Z,{value:"\u4e8b\u4ef6\u5f02\u5e38",children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(50094).Z+"",width:"1791",height:"1137"})})})]}),"\n",(0,i.jsx)(s.h3,{id:"achived",children:"3. \u4e00\u952e\u5f52\u6863"}),"\n",(0,i.jsxs)(s.p,{children:["\u70b9\u51fb",(0,i.jsx)(s.code,{children:"\u4e00\u952e\u5f52\u6863"}),"\u6309\u94ae\uff0c\u53ef\u5bf9\u5386\u53f2\u4e8b\u4ef6\u8fdb\u884c\u5f52\u6863\uff0c\u91ca\u653e\u4e8b\u4ef6\u5b58\u50a8\u7a7a\u95f4\u3002"]}),"\n",(0,i.jsxs)(s.p,{children:["\u5f52\u6863\u529f\u80fd\u903b\u8f91\u53ef\u53c2\u8003\uff1a",(0,i.jsx)(s.a,{href:"../phoenix-core/phoenix-core-event-store#archive",children:"\u4e8b\u4ef6\u5f52\u6863"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(25760).Z+"",width:"1893",height:"1356"})}),"\n",(0,i.jsx)(s.h2,{id:"alive-aggregate",children:"\u4e94. \u5b58\u6d3b\u805a\u5408\u6839\u67e5\u8be2"}),"\n",(0,i.jsx)(s.p,{children:"\u5728\u805a\u5408\u6839\u7ba1\u7406\u9875\u9762\uff0cConsole \u652f\u6301\u67e5\u8be2\u5f53\u524d\u5b58\u6d3b\u7684\u805a\u5408\u6839\uff0c\u4ee5\u53ca\u8be5\u805a\u5408\u6839\u6240\u5728\u8282\u70b9\u3001\u521b\u5efa\u65f6\u95f4\u3001\u5b58\u6d3b\u65f6\u95f4\uff08\u6ce8\u89e3\u914d\u7f6e\u7684\u56fa\u5b9a\u503c\uff09"}),"\n",(0,i.jsx)(s.p,{children:":::info \u63d0\u793a\n\u6ce8\u610f\uff0c\u5b58\u6d3b\u805a\u5408\u6839\u7684\u4fe1\u606f\u4e0d\u5b8c\u5168\u5b9e\u65f6\uff0c\u53ef\u80fd\u5b58\u5728\u4e00\u5b9a\u7684\u5ef6\u8fdf\uff0c\u53d6\u51b3\u4e8e\u5f53\u524d\u7cfb\u7edf\u8d1f\u8f7d\n:::"}),"\n",(0,i.jsxs)(c.Z,{className:"unique-tabs",children:[(0,i.jsx)(t.Z,{value:"\u9ed8\u8ba4\u89c6\u56fe",children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(70075).Z+"",width:"1893",height:"1356"})})}),(0,i.jsx)(t.Z,{value:"\u6309\u8282\u70b9\u67e5\u8be2",children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(30175).Z+"",width:"1893",height:"1356"})})}),(0,i.jsx)(t.Z,{value:"\u6309\u7c7b\u578b\u67e5\u8be2",children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(96571).Z+"",width:"1893",height:"1356"})})}),(0,i.jsx)(t.Z,{value:"\u7ec4\u5408\u67e5\u8be2",children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(13456).Z+"",width:"1893",height:"1356"})})}),(0,i.jsx)(t.Z,{value:"\u6309 ID \u67e5\u8be2",children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(83282).Z+"",width:"1893",height:"1356"})})})]}),"\n",(0,i.jsx)(s.h2,{id:"metadata",children:"\u516d. MetaData \u7ba1\u7406"}),"\n",(0,i.jsx)(s.p,{children:"MetaData \u76ee\u524d\u5b9a\u4e49\u4e3a\u805a\u5408\u6839\u7684\u5143\u6570\u636e\u4fe1\u606f\uff0c\u6bcf\u4e2a\u805a\u5408\u6839\u5f7c\u6b64\u9694\u79bb\uff0c\u5e76\u901a\u8fc7\u7edf\u4e00\u56fa\u5b9a\u7684\u534f\u8c03\u8005\uff08\u8ba2\u9605\uff09\u6765\u7ba1\u7406\u548c\u6301\u4e45\u5316\u3002"}),"\n",(0,i.jsxs)(s.p,{children:["\u56e0\u6b64\uff0c\u5728\u8ba2\u9605\u89e3\u6790\u547d\u4ee4\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u89e3\u6790\u51fd\u6570\uff08SourceCollect\uff09\u4e2d\u901a\u8fc7 ",(0,i.jsx)(s.code,{children:"CollectMetaDataQuery"})," \u63a5\u53e3\u67e5\u8be2\u6240\u6709\u805a\u5408\u6839\u7684\u5143\u6570\u636e."]}),"\n",(0,i.jsxs)(c.Z,{className:"unique-tabs",children:[(0,i.jsx)(t.Z,{value:"\u6309\u8ba2\u9605\u67e5\u8be2",children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(96204).Z+"",width:"1893",height:"1356"})})}),(0,i.jsx)(t.Z,{value:"\u6309\u805a\u5408\u6839\u67e5\u8be2",children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(62561).Z+"",width:"1893",height:"1356"})})})]}),"\n",(0,i.jsx)(s.h2,{id:"exception-history",children:"\u4e03. \u5386\u53f2\u5f02\u5e38\u4fe1\u606f"}),"\n",(0,i.jsxs)(s.p,{children:["Phoenix \u652f\u6301\u4fdd\u7559\u4e00\u5b9a\u6570\u91cf\uff08\u9ed8\u8ba4\u6bcf\u4e2a\u8282\u70b920\uff09\u7684\u6846\u67b6\u5f02\u5e38\u4e8b\u4ef6. ",(0,i.jsx)(s.a,{href:"/docs/phoenix-core/phoenix-core-config#server",children:"\u5927\u5c0f\u53c2\u8003 Console \u914d\u7f6e"})]}),"\n",(0,i.jsx)(s.p,{children:"\u7528\u6237\u53ef\u4ee5\u5728 Console \u4e2d\u6309\u8282\u70b9\u67e5\u8be2\u5f02\u5e38\u7684\u57fa\u672c\u4fe1\u606f\uff08\u7c7b\u578b\u3001\u65f6\u95f4\u3001\u6d88\u606f\u3001\u5806\u6808\uff09"}),"\n",(0,i.jsxs)(c.Z,{className:"unique-tabs",children:[(0,i.jsx)(t.Z,{value:"\u5386\u53f2\u5f02\u5e38",children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(54103).Z+"",width:"1893",height:"1356"})})}),(0,i.jsx)(t.Z,{value:"\u5f02\u5e38\u5806\u6808",children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(42538).Z+"",width:"1893",height:"1356"})})})]}),"\n",(0,i.jsx)(s.h2,{id:"starvation",children:"\u516b. \u7ebf\u7a0b\u6c60\u9965\u997f\u4e8b\u4ef6\u67e5\u8be2"}),"\n",(0,i.jsxs)(s.p,{children:["\u5f00\u542f",(0,i.jsx)(s.a,{href:"/docs/phoenix-advanced/starvation-detector",children:(0,i.jsx)(s.strong,{children:"\u7ebf\u7a0b\u6c60\u9965\u997f\u68c0\u67e5\u5668"})})," \u540e\uff0c\u9664\u4e86\u9ed8\u8ba4\u7684 WARN \u8b66\u544a\u65e5\u5fd7\u6253\u5370\u4e4b\u5916\uff0c\u9965\u997f\u68c0\u67e5\u5668\u8fd8\u4f1a\u53d1\u51fa\u4e8b\u4ef6\uff0cPhoenix Console \u4f1a\u8ba2\u9605\u8be5\u4e8b\u4ef6\u5e76\u7f13\u5b58 Console \uff08\u5f02\u5e38\u5806\u6808\u5927\u5c0f / 3 \uff09\u5927\u5c0f\u7684\u5386\u53f2\u4e8b\u4ef6\uff0c\u5e76\u652f\u6301\u5728 Console \u4e2d\u6309\u8282\u70b9\u67e5\u8be2, \u5e76\u652f\u6301\u67e5\u8be2\u9965\u997f\u53d1\u751f\u65f6\uff0c\u6574\u4e2a\u7ebf\u7a0b\u6c60\u7684\u5806\u6808\u8be6\u60c5."]}),"\n",(0,i.jsx)(s.p,{children:":::info \u63d0\u793a\n\u7ebf\u7a0b\u6c60\u9965\u997f\u68c0\u67e5\u5668\u9ed8\u8ba4\u60c5\u51b5\u5904\u4e8e\u5173\u95ed\u72b6\u6001\uff0c\u9700\u8981\u7528\u6237\u624b\u52a8\u5f00\u542f.\n:::"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(36308).Z+"",width:"1893",height:"1356"})}),"\n",(0,i.jsxs)(c.Z,{className:"unique-tabs",children:[(0,i.jsx)(t.Z,{value:"\u5386\u53f2\u68c0\u6d4b\u4e8b\u4ef6",children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(95354).Z+"",width:"1792",height:"1162"})})}),(0,i.jsx)(t.Z,{value:"\u7ebf\u7a0b\u5806\u6808",children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(51374).Z+"",width:"1792",height:"1162"})})})]})]})}function u(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},85162:(e,s,n)=>{n.d(s,{Z:()=>t});n(67294);var i=n(86010);const a={tabItem:"tabItem_Ymn6"};var c=n(85893);function t(e){let{children:s,hidden:n,className:t}=e;return(0,c.jsx)("div",{role:"tabpanel",className:(0,i.Z)(a.tabItem,t),hidden:n,children:s})}},74866:(e,s,n)=>{n.d(s,{Z:()=>w});var i=n(67294),a=n(86010),c=n(12466),t=n(16550),r=n(20469),l=n(91980),d=n(67392),h=n(50012);function o(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function x(e){const{values:s,children:n}=e;return(0,i.useMemo)((()=>{const e=s??function(e){return o(e).map((e=>{let{props:{value:s,label:n,attributes:i,default:a}}=e;return{value:s,label:n,attributes:i,default:a}}))}(n);return function(e){const s=(0,d.l)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,n])}function u(e){let{value:s,tabValues:n}=e;return n.some((e=>e.value===s))}function p(e){let{queryString:s=!1,groupId:n}=e;const a=(0,t.k6)(),c=function(e){let{queryString:s=!1,groupId:n}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:s,groupId:n});return[(0,l._X)(c),(0,i.useCallback)((e=>{if(!c)return;const s=new URLSearchParams(a.location.search);s.set(c,e),a.replace({...a.location,search:s.toString()})}),[c,a])]}function j(e){const{defaultValue:s,queryString:n=!1,groupId:a}=e,c=x(e),[t,l]=(0,i.useState)((()=>function(e){let{defaultValue:s,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!u({value:s,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:s,tabValues:c}))),[d,o]=p({queryString:n,groupId:a}),[j,g]=function(e){let{groupId:s}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(s),[a,c]=(0,h.Nk)(n);return[a,(0,i.useCallback)((e=>{n&&c.set(e)}),[n,c])]}({groupId:a}),m=(()=>{const e=d??j;return u({value:e,tabValues:c})?e:null})();(0,r.Z)((()=>{m&&l(m)}),[m]);return{selectedValue:t,selectValue:(0,i.useCallback)((e=>{if(!u({value:e,tabValues:c}))throw new Error(`Can't select invalid tab value=${e}`);l(e),o(e),g(e)}),[o,g,c]),tabValues:c}}var g=n(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(85893);function b(e){let{className:s,block:n,selectedValue:i,selectValue:t,tabValues:r}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,c.o5)(),h=e=>{const s=e.currentTarget,n=l.indexOf(s),a=r[n].value;a!==i&&(d(s),t(a))},o=e=>{let s=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;s=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;s=l[n]??l[l.length-1];break}}s?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},s),children:r.map((e=>{let{value:s,label:n,attributes:c}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:i===s?0:-1,"aria-selected":i===s,ref:e=>l.push(e),onKeyDown:o,onClick:h,...c,className:(0,a.Z)("tabs__item",m.tabItem,c?.className,{"tabs__item--active":i===s}),children:n??s},s)}))})}function f(e){let{lazy:s,children:n,selectedValue:a}=e;const c=(Array.isArray(n)?n:[n]).filter(Boolean);if(s){const e=c.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:c.map(((e,s)=>(0,i.cloneElement)(e,{key:s,hidden:e.props.value!==a})))})}function Z(e){const s=j(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",m.tabList),children:[(0,v.jsx)(b,{...e,...s}),(0,v.jsx)(f,{...e,...s})]})}function w(e){const s=(0,g.Z)();return(0,v.jsx)(Z,{...e,children:o(e.children)},String(s))}},51919:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/001-f3471704b9653fb34bda419a05bdf32b.png"},9728:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/002-db59819f2dd4fda27b0dc006bb6bd446.png"},98340:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/003-ee901125beda61fa0e3ca0caee5fa202.png"},44403:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/004-926f2adcff0d546dcaaa1534916da1ea.png"},39727:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/005-b5ae4e7c91240197925116a77da63f28.png"},67338:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/006-6cce6eaee5bf5685fc40db8a250e6a20.png"},29327:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/007-bd0b8018d5641d04917c0550ce68079a.png"},28968:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/008-75f5cac3168e13c74e713dc9087d8996.png"},4151:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/009-4d5cb92f6daae66038c10607e53e25cb.png"},43224:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/010-2ca145b490214d5c2345f3295ff4a65d.png"},26991:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/011-cb105483573f951c12169b4289c9ccf7.png"},15958:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/012-4511de63f451e154c13b6f4bdebfd6d1.png"},22791:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/013-37b24c38501aa69d54def4cf09a3e5b1.png"},82975:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/014-563f1962c38206be294d15c4e2cca28b.png"},77298:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/015-375d5d29a1424bb748a8cc0b81c27dcf.png"},29496:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/016-980016b5836fbc1303abca97c30fbf70.png"},48261:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/017-9407082cf83d43443e534c39114115bd.png"},64354:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/018-5f6016507985a832e6302153ce8a9eb2.png"},48942:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/019-c18fd6c338ce768e98a4c6e1a8a136fa.png"},76557:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/020-4cc4934a1ddec55c3772e03b940c5e76.png"},32462:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/021-57091ffa376174c934ca6bc11c35312f.png"},51607:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/022-3bc37430b23f56341940b3084e774c27.png"},51425:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/023-6187976c16188a3e4d6fde282929f9ce.png"},22387:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/024-432d89db56a8522a100ef1292a40002a.png"},25760:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/025-b31d452c22fc066790e5d383c813883a.png"},70075:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/026-762723abc88e731815be8d2385494bda.png"},30175:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/027-cf747a0252c8d819447d80a5dc7e1621.png"},96571:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/028-62889fddc22b99fb2771ceff1ad1ebd1.png"},13456:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/029-33d9ee324148a9f28632f37ba5f58197.png"},83282:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/030-0856835b8687e663e71f470f746db7a3.png"},96204:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/031-60951f3bb5740f3e0b0bbc56b40522da.png"},62561:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/032-1281f5af6d65a4460c354e5c94c7164e.png"},54103:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/033-d17e8ad0515d4ef87c177f1917c4b0fb.png"},42538:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/034-2cc6debaef0f0991ec71e0948968b6ba.png"},36308:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/035-2c801e9e0b016481dbe046af882a682f.png"},95354:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/036-d43d5bcff2a67c03af199865aeb440f2.png"},51374:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/037-53416371af0d83d7c8ce4ae3d7188f2a.png"},50094:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/038-5d016729cb1015cb709f57e991719fd0.png"},52160:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/039-142154f9b99be363def8cf82a0754532.png"},11151:(e,s,n)=>{n.d(s,{Z:()=>r,a:()=>t});var i=n(67294);const a={},c=i.createContext(a);function t(e){const s=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),i.createElement(c.Provider,{value:s},e.children)}}}]);