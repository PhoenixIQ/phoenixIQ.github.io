"use strict";(self.webpackChunkphoenixiq_github_io=self.webpackChunkphoenixiq_github_io||[]).push([[84280],{71105:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>o,frontMatter:()=>c,metadata:()=>l,toc:()=>r});var i=s(85893),t=s(11151);const c={id:"pressure-test",title:"\u538b\u529b\u6d4b\u8bd5"},d=void 0,l={id:"phoenix-test/pressure-test",title:"\u538b\u529b\u6d4b\u8bd5",description:"\u6982\u8ff0",source:"@site/versioned_docs/version-2.6.0/06-phoenix-test/06-pressure.md",sourceDirName:"06-phoenix-test",slug:"/phoenix-test/pressure-test",permalink:"/docs/2.6.0/phoenix-test/pressure-test",draft:!1,unlisted:!1,editUrl:"https://github.com/PhoenixIQ/versioned_docs/version-2.6.0/06-phoenix-test/06-pressure.md",tags:[],version:"2.6.0",sidebarPosition:6,frontMatter:{id:"pressure-test",title:"\u538b\u529b\u6d4b\u8bd5"},sidebar:"docs",previous:{title:"\u53ef\u9760\u6027\u6d4b\u8bd5",permalink:"/docs/2.6.0/phoenix-test/reliability-test"},next:{title:"\u5747\u8861\u6027\u6d4b\u8bd5",permalink:"/docs/2.6.0/phoenix-test/balance-test"}},h={},r=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u6301\u7eed\u6d41\u91cf\u6d4b\u8bd5",id:"\u6301\u7eed\u6d41\u91cf\u6d4b\u8bd5",level:2},{value:"\u6d4b\u8bd5\u573a\u666f",id:"\u6d4b\u8bd5\u573a\u666f",level:3},{value:"\u6821\u9a8c\u65b9\u6cd5",id:"\u6821\u9a8c\u65b9\u6cd5",level:3},{value:"\u6d4b\u8bd5\u6b65\u9aa4",id:"\u6d4b\u8bd5\u6b65\u9aa4",level:3},{value:"\u6d2a\u5cf0\u6d41\u91cf\u6d4b\u8bd5",id:"\u6d2a\u5cf0\u6d41\u91cf\u6d4b\u8bd5",level:2},{value:"\u6d4b\u8bd5\u573a\u666f",id:"\u6d4b\u8bd5\u573a\u666f-1",level:3},{value:"\u6821\u9a8c\u65b9\u6cd5",id:"\u6821\u9a8c\u65b9\u6cd5-1",level:3},{value:"\u6d4b\u8bd5\u6b65\u9aa4",id:"\u6d4b\u8bd5\u6b65\u9aa4-1",level:3},{value:"\u7ed3\u8bba",id:"\u7ed3\u8bba",level:2}];function a(e){const n={h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u6982\u8ff0",children:"\u6982\u8ff0"}),"\n",(0,i.jsx)(n.p,{children:"\u6297\u538b\u80fd\u529b\u662f\u8861\u91cf\u4e00\u4e2a\u8f6f\u4ef6\u7cfb\u7edf\u4f18\u52a3\u7684\u53c8\u4e00\u91cd\u8981\u6307\u6807\uff0cPhoenix \u76ee\u524d\u6bd4\u8f83\u5173\u5fc3\u4e0b\u9762\u4e24\u4e2a\u4e0d\u540c\u7ef4\u5ea6\u7684\u6d41\u91cf\u538b\u529b:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u6301\u7eed\u6d41\u91cf\u538b\u529b:\u6301\u7eed\u7684\u6d41\u91cf\u538b\u529b\u53ef\u4ee5\u5168\u65b9\u9762\u7684\u8003\u7814\u7cfb\u7edf\u7684\u7a33\u5b9a\u6027\uff0c\u9632\u6b62\u5185\u5b58\u6cc4\u6f0f\u7b49\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u6d2a\u5cf0\u6d41\u91cf\u538b\u529b:\u77ac\u95f4\u7684\u6d41\u91cf\u538b\u529b\u53ef\u4ee5\u6d4b\u8bd5\u51fa\u7cfb\u7edf\u7684\u6297\u6d2a\u80fd\u529b\uff0c\u9632\u6b62\u7cfb\u7edf\u5728\u6d2a\u5cf0\u6d41\u91cf\u4e0b\u5d29\u6e83\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u6301\u7eed\u6d41\u91cf\u6d4b\u8bd5",children:"\u6301\u7eed\u6d41\u91cf\u6d4b\u8bd5"}),"\n",(0,i.jsx)(n.h3,{id:"\u6d4b\u8bd5\u573a\u666f",children:"\u6d4b\u8bd5\u573a\u666f"}),"\n",(0,i.jsx)(n.p,{children:"Phoenix \u6846\u67b6\u6301\u7eed\u6d41\u91cf\u538b\u529b\u6d4b\u8bd5\u57fa\u4e8e bank-account \u670d\u52a1\u8fdb\u884c\u3002\u90e8\u7f72 2 \u4e2a\u8282\u70b9\uff0c\u4f7f\u7528\u538b\u6d4b\u7a0b\u5e8f\u4ee5 500/s \u7684 TPS \u538b\u6d4b 8 \u4e2a\u5c0f\u65f6\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u6821\u9a8c\u65b9\u6cd5",children:"\u6821\u9a8c\u65b9\u6cd5"}),"\n",(0,i.jsx)(n.p,{children:"\u89c2\u5bdf Grafana \u4e2d\u7684 Phoenix \u76d1\u63a7\u4e2d\u7684\u901f\u7387\u56fe\u8868\u662f\u5426\u7a33\u5b9a\uff0c\u89c2\u5bdf JVM Metrics \u76d1\u63a7\u4e2d\u7684 GC \u56fe\u8868\u662f\u5426\u7a33\u5b9a\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u6d4b\u8bd5\u6b65\u9aa4",children:"\u6d4b\u8bd5\u6b65\u9aa4"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5728 Kubernetes \u73af\u5883\u4e2d\uff0c\u4f7f\u7528 bank-account \u670d\u52a1\uff0c\u90e8\u7f72 2 \u4e2a\u8282\u70b9\uff0c\u6bcf\u4e2a\u8282\u70b9\u7ed9\u5b9a pod 4c \u7684 CPU\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"1",src:s(90388).Z+"",width:"1896",height:"511"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u8c03\u6574\u524d\u7aef\u7684\u8bf7\u6c42\u6570\u4e3a 500/s\uff0c\u8bf7\u6c42\u65f6\u95f4\u4e3a 8h\uff0c\u5f00\u59cb\u6d4b\u8bd5\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5f85\u6d4b\u8bd5\u5b8c\u6bd5\u540e\uff0c\u89c2\u5bdf 8h \u5185 Phoenix admin\u5404\u76d1\u63a7\u9762\u677f\u4fe1\u606f\u3002"}),"\n",(0,i.jsx)(n.p,{children:"phoenix client \u76d1\u63a7\u56fe:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"2",src:s(2394).Z+"",width:"2560",height:"1191"})}),"\n",(0,i.jsx)(n.p,{children:"phoenix overview \u76d1\u63a7\u56fe:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"3",src:s(31918).Z+"",width:"2560",height:"1440"})}),"\n",(0,i.jsx)(n.p,{children:"JVM \u76d1\u63a7\u56fe"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"4",src:s(94936).Z+"",width:"2560",height:"1440"}),"\n",(0,i.jsx)(n.img,{alt:"13",src:s(33541).Z+"",width:"2560",height:"1440"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u89c2\u5bdf\u53ef\u77e5\uff0cPhoenix \u5904\u7406\u901f\u7387\u57fa\u672c\u7a33\u5b9a\uff0cGC \u6b63\u5e38\uff0c\u672a\u53d1\u751f\u9891\u7e41\u7684 Full GC\uff0cCPU \u4f7f\u7528\u5e73\u7a33\uff0c\u65e0\u592a\u5927\u6ce2\u52a8\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u6d2a\u5cf0\u6d41\u91cf\u6d4b\u8bd5",children:"\u6d2a\u5cf0\u6d41\u91cf\u6d4b\u8bd5"}),"\n",(0,i.jsx)(n.h3,{id:"\u6d4b\u8bd5\u573a\u666f-1",children:"\u6d4b\u8bd5\u573a\u666f"}),"\n",(0,i.jsx)(n.p,{children:"Phoenix \u6846\u67b6\u6d2a\u5cf0\u6d41\u91cf\u538b\u529b\u6d4b\u8bd5\u57fa\u4e8e bank-account \u793a\u4f8b\u5e94\u7528\u8fdb\u884c\u3002\u901a\u8fc7\u79ef\u538b\u6d88\u606f\uff0c\u6765\u6a21\u62df\u6d2a\u5cf0\u6d41\u91cf\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u6821\u9a8c\u65b9\u6cd5-1",children:"\u6821\u9a8c\u65b9\u6cd5"}),"\n",(0,i.jsx)(n.p,{children:"\u89c2\u5bdf bank-account \u670d\u52a1\u80fd\u5426\u5feb\u901f\u4e14\u7a33\u5b9a\u5730\u6d88\u8d39\u5b8c\u79ef\u538b\u7684\u6d88\u606f\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u6d4b\u8bd5\u6b65\u9aa4-1",children:"\u6d4b\u8bd5\u6b65\u9aa4"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5148\u4f7f\u7528\u538b\u6d4b\u7a0b\u5e8f\uff0c\u4e00\u6b21\u6027\u53d1\u9001 20 \u4e07\u6761\u6d88\u606f\u5230 Kafka \u4e2d\uff0c\u6b64\u65f6\u5173\u95ed\u5904\u7406\u7a0b\u5e8f account_server\uff0c\u6a21\u62df\u6d88\u606f\u5806\u79ef\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"5",src:s(80189).Z+"",width:"610",height:"362"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u6253\u5f00 2 \u4e2a\u8282\u70b9\u7684 account_server\uff0c\u5f85\u6240\u6709\u79ef\u538b\u7684\u6d88\u606f\u5168\u90e8\u5904\u7406\u5b8c\u6bd5\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"6",src:s(95445).Z+"",width:"559",height:"117"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u6253\u5f00 phoenix admin \u7684\u76d1\u63a7\u9875\u9762\uff0c\u67e5\u770b\u5404\u76d1\u63a7\u9762\u677f\u76d1\u63a7\u6307\u6807"}),"\n",(0,i.jsx)(n.p,{children:"phoenix client \u76d1\u63a7\u9762\u677f:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"7",src:s(91885).Z+"",width:"2560",height:"1440"})}),"\n",(0,i.jsx)(n.p,{children:"phoenix source aggregate \u76d1\u63a7\u9762\u677f:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"7",src:s(56677).Z+"",width:"2560",height:"1369"})}),"\n",(0,i.jsx)(n.p,{children:"JVM \u76d1\u63a7\u9762\u677f:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"8",src:s(41936).Z+"",width:"2560",height:"1440"})}),"\n",(0,i.jsx)(n.p,{children:"phoenix message \u76d1\u63a7\u9762\u677f:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"9",src:s(2712).Z+"",width:"2560",height:"1440"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u6839\u636e\u4e0a\u56fe\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u51fa\uff0c\u5806\u79ef\u6d88\u606f\u5728\u7cfb\u7edf\u542f\u52a8\u540e\uff0c\u5168\u90e8\u6b63\u5e38\u6d88\u8d39\u6389\u4e86"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u7ed3\u8bba",children:"\u7ed3\u8bba"}),"\n",(0,i.jsx)(n.p,{children:"\u7ecf\u9a8c\u8bc1\uff0c\u5bf9\u4e8e\u957f\u65f6\u95f4\u6216\u8005\u79ef\u538b\u7684\u6d41\u91cf\uff0cPhoenix \u53ef\u4ee5\u5f88\u597d\u7684\u5904\u7406"})]})}function o(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},90388:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/1-2c272b4ce8e28b06d06c5731ade13267.png"},91885:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/12-c1a09bc77be20de4f020f604e42621b4.png"},33541:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/13-d2d7441e32a6de4c8b02c459378a9e7f.png"},2394:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/2-f6ffca0490eb158da122b955f7ac9a17.png"},31918:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/3-c76c297c101d42f8d8413cd9f458c4ee.png"},94936:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/4-014704a1986a9c534293bc76eebb775b.png"},80189:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/5-e2f37070d2fa8323f5cfe15b331d98d5.png"},95445:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/6-ab9539fbc65a7033da4c265d5cdcbe3c.png"},56677:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/7-4902425c33ddeeccb112745b72c2e207.png"},41936:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/8-d8570cff2855d39754aea223e015ab05.png"},2712:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/9-ecb4f81b8e70607c77963d0fba798fc6.png"},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>d});var i=s(67294);const t={},c=i.createContext(t);function d(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);