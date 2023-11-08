"use strict";(self.webpackChunkphoenix_website_next=self.webpackChunkphoenix_website_next||[]).push([[50994],{14394:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>a,frontMatter:()=>s,metadata:()=>c,toc:()=>x});var t=i(85893),o=i(11151);const s={id:"bookings-architecture",title:"1. \u9152\u5e97\u9884\u8ba2\u6848\u4f8b\u67b6\u6784"},r="\u9152\u5e97\u9884\u8ba2\u793a\u4f8b\u67b6\u6784",c={id:"phoenix-2.x/phoenix/quick-start-example/bookings-architecture",title:"1. \u9152\u5e97\u9884\u8ba2\u6848\u4f8b\u67b6\u6784",description:"\u672c\u6559\u7a0b\u8bf4\u660e\u4e86\u5982\u4f55\u4f7f\u7528 Phoenix \u6765\u5b9e\u73b0\u9152\u5e97\u9884\u8ba2\u7cfb\u7edf\u3002\u5e76\u5c55\u793a\u4e86\u5982\u4f55\u4ece\u5934\u5f00\u59cb\u4e00\u70b9\u4e00\u70b9\u5730\u6784\u5efa\u8be5\u670d\u52a1\u3002",source:"@site/versioned_docs/version-2.5.0/phoenix-2.x/01-phoenix/05-quick-start-example/01-bookings-architecture.md",sourceDirName:"phoenix-2.x/01-phoenix/05-quick-start-example",slug:"/phoenix-2.x/phoenix/quick-start-example/bookings-architecture",permalink:"/docs/2.5.0/phoenix-2.x/phoenix/quick-start-example/bookings-architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/PhoenixIQ/versioned_docs/version-2.5.0/phoenix-2.x/01-phoenix/05-quick-start-example/01-bookings-architecture.md",tags:[],version:"2.5.0",sidebarPosition:1,frontMatter:{id:"bookings-architecture",title:"1. \u9152\u5e97\u9884\u8ba2\u6848\u4f8b\u67b6\u6784"},sidebar:"docs",previous:{title:"Phoenix\u5b9e\u73b0\u4e8b\u4ef6\u9a71\u52a8\u578b\u5fae\u670d\u52a1",permalink:"/docs/2.5.0/phoenix-2.x/phoenix/how-event-driven-microservice"},next:{title:"2. \u5f00\u53d1\u73af\u5883\u642d\u5efa",permalink:"/docs/2.5.0/phoenix-2.x/phoenix/quick-start-example/setup-environment"}},l={},x=[];function h(e){const n={h1:"h1",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u9152\u5e97\u9884\u8ba2\u793a\u4f8b\u67b6\u6784",children:"\u9152\u5e97\u9884\u8ba2\u793a\u4f8b\u67b6\u6784"}),"\n",(0,t.jsx)(n.p,{children:"\u672c\u6559\u7a0b\u8bf4\u660e\u4e86\u5982\u4f55\u4f7f\u7528 Phoenix \u6765\u5b9e\u73b0\u9152\u5e97\u9884\u8ba2\u7cfb\u7edf\u3002\u5e76\u5c55\u793a\u4e86\u5982\u4f55\u4ece\u5934\u5f00\u59cb\u4e00\u70b9\u4e00\u70b9\u5730\u6784\u5efa\u8be5\u670d\u52a1\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u9152\u5e97\u9884\u8ba2\u7cfb\u7edf\u5305\u542b\u5982\u4e0b\u529f\u80fd\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u652f\u6301\u7528\u6237\u9009\u62e9\u9152\u5e97\u623f\u95f4\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u6839\u636e\u7528\u6237\u9009\u62e9\u751f\u6210\u8ba2\u5355\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u6839\u636e\u9884\u5b9a\u6570\u636e\u5206\u6790\u5404\u7c7b\u9152\u5e97\u623f\u95f4\u7684\u6d41\u884c\u7a0b\u5ea6\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u4e0b\u56fe\u5c55\u793a\u4e86\u9152\u5e97\u9884\u8ba2\u7cfb\u7edf\u7684\u6574\u4f53\u67b6\u6784\u56fe\uff1a"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image",src:i(24274).Z+"",width:"902",height:"602"})}),"\n",(0,t.jsx)(n.p,{children:"\u8be5\u7cfb\u7edf\u4e2d\u5305\u542b\u5982\u4e0b\u51e0\u4e2a\u670d\u52a1\uff1a"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"HotelAggregate: \u6bcf\u4e2a\u9152\u5e97\u7531\u4e00\u4e2a\u5b9e\u4f53\u805a\u5408\u6839\u8868\u793a\uff0c\u4f7f\u7528\u4e8b\u4ef6\u6e90\u4fdd\u6301\u9152\u5e97\u72b6\u6001\u3002N\u9152\u5e97\u4f1a\u751f\u6210N\u4e2a\u9152\u5e97\u805a\u5408\u6839\u5bf9\u8c61\u3002\u8be5\u805a\u5408\u6839\u53ef\u4ee5\u63d0\u4f9b\u9884\u5b9a\u623f\u95f4\u3001\u53d6\u6d88\u9884\u5b9a\u3001\u67e5\u8be2\u623f\u95f4\u5269\u4f59\u4fe1\u606f\u7b49\u529f\u80fd\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Popularity Handle: \u5904\u7406\u6240\u6709\u5b58\u50a8\u4e8e\u6570\u636e\u5e93\u4e2d\u7684\u9884\u8ba2\u4e8b\u4ef6\uff0c\u5206\u6790\u4e8b\u4ef6\u5185\u5bb9\uff0c\u4ee5\u56de\u7b54\u6709\u5173\u623f\u95f4\u53d7\u6b22\u8fce\u7a0b\u5ea6\u7684\u67e5\u8be2\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Order Service: \u901a\u8fc7\u9152\u5e97\u9884\u8ba2\u670d\u52a1\u751f\u6210\u8ba2\u5355\uff0c\u7531\u72ec\u7acb\u7684\u8ba2\u5355\u670d\u52a1\u7ba1\u7406\u3002"}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},24274:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/hotel-bookings-198204f5c47b3d8586ac2197237dbdc5.png"},11151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>r});var t=i(67294);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);