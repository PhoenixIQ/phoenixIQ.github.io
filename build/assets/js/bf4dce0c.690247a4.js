"use strict";(self.webpackChunkphoenix_website_next=self.webpackChunkphoenix_website_next||[]).push([[6935],{28998:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>c,metadata:()=>t,toc:()=>h});var o=i(85893),s=i(11151);const c={id:"phoenix-console-overall",title:"Introduction",description:"Phoenix \u53ef\u89c2\u6d4b\u6027\u67b6\u6784\u8bf4\u660e"},r=void 0,t={id:"phoenix-console/phoenix-console-overall",title:"Introduction",description:"Phoenix \u53ef\u89c2\u6d4b\u6027\u67b6\u6784\u8bf4\u660e",source:"@site/versioned_docs/version-2.6.0/05-phoenix-console/01-overall.md",sourceDirName:"05-phoenix-console",slug:"/phoenix-console/phoenix-console-overall",permalink:"/docs/2.6.0/phoenix-console/phoenix-console-overall",draft:!1,unlisted:!1,editUrl:"https://github.com/PhoenixIQ/versioned_docs/version-2.6.0/05-phoenix-console/01-overall.md",tags:[],version:"2.6.0",sidebarPosition:1,frontMatter:{id:"phoenix-console-overall",title:"Introduction",description:"Phoenix \u53ef\u89c2\u6d4b\u6027\u67b6\u6784\u8bf4\u660e"},sidebar:"docs",previous:{title:"Phoenix Observability",permalink:"/docs/2.6.0/phoenix-observability"},next:{title:"Phoenix Console",permalink:"/docs/2.6.0/phoenix-console/phoenix-console-service-management"}},l={},h=[{value:"Phoenix Console",id:"console",level:2},{value:"Phoenix ElasticSearch",id:"log",level:2},{value:"Phoenix Metrics",id:"metrics",level:2},{value:"\u5feb\u6377\u90e8\u7f72",id:"deploy",level:2}];function a(e){const n={a:"a",admonition:"admonition",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Phoenix \u63d0\u4f9b\u4e86\u53ef\u89c2\u6d4b\u6027\u7684\u76d1\u63a7\u7ba1\u7406\u5e73\u53f0\uff0c\u652f\u6301\u5bf9 Phoenix \u670d\u52a1\u8fdb\u884c\u7cfb\u7edf\u72b6\u6001\u7ba1\u7406\u3001\u4e8b\u4ef6\u7ba1\u7406\u3001\u6027\u80fd\u76d1\u63a7\u3001\u4e1a\u52a1\u76d1\u63a7\u3001\u4e8b\u52a1\u8c03\u7528\u94fe\u8ffd\u8e2a\u4ee5\u53ca\u5f02\u5e38\u5206\u6790\u3002"}),"\n",(0,o.jsx)(n.p,{children:"Phoenix \u5728\u53ef\u89c2\u6d4b\u6027\u4e0a\u4e00\u5171\u63d0\u4f9b\u4e86\u4e09\u4e2a\u6a21\u5757\uff1a"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Phoenix Console\uff1a\u5185\u5d4c\u5f0f\u7f51\u9875\u7248\u8fd0\u7ef4\u7ba1\u7406\u5e73\u53f0\uff0c\u63d0\u4f9b\u5e94\u7528\u4fe1\u606f\u3001\u96c6\u7fa4\u72b6\u6001\u3001\u805a\u5408\u6839\u5185\u5b58\u72b6\u6001\u3001\u4e8b\u4ef6\u7ba1\u7406\u7b49\u8fd0\u7ef4\u80fd\u529b"}),"\n",(0,o.jsx)(n.li,{children:"Phoenix ElasticSearch\uff1a\u57fa\u4e8e ElasticSearch \u4e8b\u4ef6\u7684\u53ef\u89c6\u5316\u5e73\u53f0, \u7528\u4e8e\u5feb\u901f\u6392\u67e5\u5f02\u5e38\u6570\u636e\u548c\u5f02\u5e38\u884c\u4e3a"}),"\n",(0,o.jsx)(n.li,{children:"Phoenix Metrics\uff1a\u57fa\u4e8e\u53ef\u6269\u5c55\u6307\u6807\u5bfc\u51fa\u7684 APM(Application Performance Monitor) \u4f53\u7cfb, \u7528\u4e8e\u6d1e\u6089\u7a0b\u5e8f\u7684\u6027\u80fd\u6307\u6807."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"image",src:i(84354).Z+"",width:"830",height:"480"})}),"\n",(0,o.jsx)(n.h2,{id:"console",children:"Phoenix Console"}),"\n",(0,o.jsx)(n.p,{children:"Phoenix \u7f51\u9875\u5185\u5d4c\u5f0f\u652f\u6301\u7cfb\u7edf\u72b6\u6001\u7ba1\u7406\u3001\u4e8b\u4ef6\u7ba1\u7406\u3001\u4e8b\u52a1\u8c03\u7528\u94fe\u8ffd\u8e2a\u4ee5\u53ca\u5f02\u5e38\u5206\u6790\u7b49\u529f\u80fd\u3002"}),"\n",(0,o.jsxs)(n.p,{children:["\u66f4\u8be6\u7ec6\u7684\u529f\u80fd\u4ecb\u7ecd\u53ef\u53c2\u8003\uff1a",(0,o.jsx)(n.a,{href:"/docs/phoenix-console/phoenix-console-service-management",children:"\u670d\u52a1\u7ba1\u7406"})]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"\u4e3a\u4e86\u66f4\u597d\u7684\u5bf9 Phoenix \u670d\u52a1\u7684\u6027\u80fd\u4ee5\u53ca\u4e1a\u52a1\u4fe1\u606f\u8fdb\u884c\u76d1\u63a7\uff0cPhoenix \u9700\u8981\u501f\u52a9\u4e00\u4e9b\u7b2c\u4e09\u65b9\u7684\u76d1\u63a7\u7ec4\u4ef6\uff0c\u4f8b\u5982Grafana\u3001Elasticsearch\u3001Prometheus\u3002"})}),"\n",(0,o.jsx)(n.h2,{id:"log",children:"Phoenix ElasticSearch"}),"\n",(0,o.jsx)(n.p,{children:"Event-Publish-ES \u662f Phoenix \u6846\u67b6\u63d0\u4f9b\u7684\u4e00\u4e2a Event Publish \u4efb\u52a1, \u8be5\u4efb\u52a1\u53ef\u4ee5\u5c06 Phoenix \u670d\u52a1\u5904\u7406\u8fc7\u7684\u4e8b\u4ef6\u8fdb\u884c\u8f6c\u6362\u5e76\u4e0a\u62a5\u81f3 ElasticSearch , Grafana \u901a\u8fc7\u8bfb\u53d6 ElasticSearch \u4e2d\u7684\u6570\u636e\u8fdb\u884c\u53ef\u89c6\u5316\u7684\u5c55\u793a\u3002"}),"\n",(0,o.jsxs)(n.p,{children:["\u540c\u65f6 Phoenix \u8fd8\u63d0\u4f9b\u4e86\u4e00\u7ec4\u4e1a\u52a1\u6570\u636e\u7684\u76d1\u63a7\u9762\u677f\uff0c\u53ef\u4ee5\u66f4\u65b9\u4fbf\u7684\u4f9b\u5f00\u53d1\u4eba\u5458\u8fdb\u884c\u4f7f\u7528\u3002\u66f4\u8be6\u7ec6\u7684\u529f\u80fd\u4ecb\u7ecd\u53ef\u53c2\u8003\uff1a",(0,o.jsx)(n.a,{href:"/docs/phoenix-console/phoenix-console-business-monitor",children:"\u4e1a\u52a1\u76d1\u63a7"})]}),"\n",(0,o.jsx)(n.h2,{id:"metrics",children:"Phoenix Metrics"}),"\n",(0,o.jsxs)(n.p,{children:["Phoenix \u6846\u67b6\u9ed8\u8ba4\u96c6\u6210\u4e86 Prometheus Agent \u540c\u65f6\u914d\u5408 ",(0,o.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Java_Management_Extensions",children:"Java Management Extensions (JMX)"})," \u5bf9\u7cfb\u7edf\u4e2d\u7684\u4e00\u4e9b\u5173\u952e\u7cfb\u7edf\u8282\u70b9\u8fdb\u884c\u57cb\u70b9\u3002\u7cfb\u7edf\u76d1\u63a7\u6570\u636e\u6700\u7ec8\u5c06\u901a\u8fc7 Grafana \u8fdb\u884c\u53ef\u89c6\u5316\u7684\u5c55\u793a\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u540c\u6837\u7684 Phoenix \u4e5f\u63d0\u4f9b\u4e86\u4e00\u7ec4\u7cfb\u7edf\u6570\u636e\u7684\u76d1\u63a7\u9762\u677f\uff0c\u53ef\u4ee5\u66f4\u65b9\u4fbf\u7684\u5171\u5f00\u53d1\u4eba\u5458\u8fdb\u884c\u4f7f\u7528\u3002\u66f4\u8be6\u7ec6\u7684\u529f\u80fd\u4ecb\u7ecd\u53ef\u53c2\u8003\uff1a",(0,o.jsx)(n.a,{href:"/docs/phoenix-console/phoenix-console-system-monitor",children:"\u7cfb\u7edf\u76d1\u63a7"})]}),"\n",(0,o.jsx)(n.h2,{id:"deploy",children:"\u5feb\u6377\u90e8\u7f72"}),"\n",(0,o.jsxs)(n.p,{children:["\u4e1a\u52a1\u76d1\u63a7\u548c\u7cfb\u7edf\u76d1\u63a7\u9700\u8981\u4f9d\u8d56\u4e8eprometheus\uff0cgrafna\uff0celasticsearch\uff0c\u5e76\u4e14\u9700\u8981\u5bfc\u5165Phoenix\u914d\u7f6e\u7684",(0,o.jsx)(n.a,{href:"/docs/2.6.0/assets/file/phoenix-admin/system-monitor-model",children:"\u9762\u677f\u6570\u636e"}),"\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u5728\u516c\u53f8\u73af\u5883\uff0c\u53ef\u4ee5\u901a\u8fc7rancher\u4e00\u952e\u90e8\u7f72\u8fd9\u4e09\u4e2a\u670d\u52a1\u5728\u5f00\u53d1\u73af\u5883\u4e2d\u4f7f\u7528\uff0c\u8fd9\u6837\u90e8\u7f72\u7684\u670d\u52a1\u9ed8\u8ba4\u96c6\u6210\u4e86phoenix\u76f8\u5173\u7684grafna\u9762\u677f\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u3002\u5f53\u7136\uff0c\u5982\u679c\u662f\u751f\u4ea7\u73af\u5883\uff0c\u5efa\u8bae\u8ba9\u8fd0\u7ef4\u90e8\u7f72\u597d\u8fd9\u4e09\u4e2a\u670d\u52a1\uff0c\u7136\u540e\u901a\u8fc7\u540e\u9762",(0,o.jsx)(n.a,{href:"/docs/phoenix-console/phoenix-console-business-monitor",children:"\u4e1a\u52a1\u76d1\u63a7"}),"\u548c",(0,o.jsx)(n.a,{href:"/docs/phoenix-console/phoenix-console-system-monitor",children:"\u7cfb\u7edf\u76d1\u63a7"}),"\u4e2d\u7684\u4f7f\u7528\u8bf4\u660e\u5728grafna\u4e2d\u624b\u5de5\u914d\u7f6e\u548c\u5bfc\u5165\u3002"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"rancher\u4e00\u952e\u90e8\u7f72:"})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\u767b\u9646rancher\uff0c\u6253\u5f00\u5e94\u7528\u5546\u57ce\uff0c\u70b9\u51fb",(0,o.jsx)(n.strong,{children:"\u542f\u52a8"}),"\u6309\u94ae\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:i(22123).Z+"",width:"2560",height:"1367"})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsx)(n.li,{children:"\u641c\u7d22phoenix-metric\uff0c\u70b9\u51fb\u3002"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:i(85103).Z+"",width:"2560",height:"1367"})}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsxs)(n.li,{children:["\u53ef\u4ee5\u81ea\u5b9a\u4e49\u540d\u79f0\u548c\u547d\u540d\u7a7a\u95f4\uff0c\u70b9\u51fb",(0,o.jsx)(n.strong,{children:"\u542f\u52a8"}),"\u5373\u53ef\u90e8\u7f72\u597d\u4e09\u4e2a\u670d\u52a1\u4e86\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:i(38886).Z+"",width:"2542",height:"1554"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:i(26184).Z+"",width:"1994",height:"297"})})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},84354:(e,n,i)=>{i.d(n,{Z:()=>o});const o=i.p+"assets/images/001-a3046992ef019807281ac9fc2738887b.png"},22123:(e,n,i)=>{i.d(n,{Z:()=>o});const o=i.p+"assets/images/002-34f2debec29e501a71e9e0c20658fb32.png"},85103:(e,n,i)=>{i.d(n,{Z:()=>o});const o=i.p+"assets/images/003-1d4d50b3ea1d0a7ee54d952b75f4310b.png"},38886:(e,n,i)=>{i.d(n,{Z:()=>o});const o=i.p+"assets/images/004-0a9de8dd0c250bb6529571b5cb8f8962.png"},26184:(e,n,i)=>{i.d(n,{Z:()=>o});const o=i.p+"assets/images/005-650d662b7bb2529ec90451805ea121f3.png"},11151:(e,n,i)=>{i.d(n,{Z:()=>t,a:()=>r});var o=i(67294);const s={},c=o.createContext(s);function r(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);