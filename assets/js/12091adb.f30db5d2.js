"use strict";(self.webpackChunkphoenixiq_github_io=self.webpackChunkphoenixiq_github_io||[]).push([[90336],{59660:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>p,frontMatter:()=>t,metadata:()=>d,toc:()=>h});var s=i(85893),c=i(11151);const t={id:"phoenix-dgc-introduce",title:"\u80cc\u666f\u4ecb\u7ecd"},o=void 0,d={id:"phoenix-2.x/phoenix-dgc/phoenix-dgc-introduce",title:"\u80cc\u666f\u4ecb\u7ecd",description:"\u80cc\u666f\u4ecb\u7ecd",source:"@site/versioned_docs/version-2.4.2/phoenix-2.x/08-phoenix-dgc/00-introduce.md",sourceDirName:"phoenix-2.x/08-phoenix-dgc",slug:"/phoenix-2.x/phoenix-dgc/phoenix-dgc-introduce",permalink:"/docs/2.4.2/phoenix-2.x/phoenix-dgc/phoenix-dgc-introduce",draft:!1,unlisted:!1,editUrl:"https://github.com/PhoenixIQ/versioned_docs/version-2.4.2/phoenix-2.x/08-phoenix-dgc/00-introduce.md",tags:[],version:"2.4.2",sidebarPosition:0,frontMatter:{id:"phoenix-dgc-introduce",title:"\u80cc\u666f\u4ecb\u7ecd"},sidebar:"docs",previous:{title:"\u8ba2\u9605\u4e8b\u4ef6",permalink:"/docs/2.4.2/phoenix-2.x/phoenix-event-publish/event-publish-client-usage"},next:{title:"\u4f7f\u7528\u8bf4\u660e",permalink:"/docs/2.4.2/phoenix-2.x/phoenix-dgc/phoenix-dgc-api"}},r={},h=[{value:"\u80cc\u666f\u4ecb\u7ecd",id:"\u80cc\u666f\u4ecb\u7ecd",level:2},{value:"DGC\u6982\u8ff0",id:"dgc\u6982\u8ff0",level:2},{value:"\u9002\u7528\u573a\u666f",id:"\u9002\u7528\u573a\u666f",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u80cc\u666f\u4ecb\u7ecd",children:"\u80cc\u666f\u4ecb\u7ecd"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u7cfb\u7edf\u5f00\u53d1\u8fc7\u7a0b\u4e2d\uff0c\u7ecf\u5e38\u4f1a\u9047\u5230\u4e00\u4e9b\u590d\u6742\u7684\u4e1a\u52a1\u903b\u8f91\uff0c\u6d89\u53ca\u5230\u4e00\u7cfb\u5217\u7e41\u6742\u7684\u8ba1\u7b97\u903b\u8f91\uff0c\u5c24\u5176\u662f\u5728\u91d1\u878d\u5e94\u7528\u7cfb\u7edf\u4e2d\u3002\u9488\u5bf9\u4e00\u4e2a\u9700\u6c42\u7684\u6570\u636e\uff0c\u53ef\u80fd\u9700\u8981\u8bbe\u8ba1\u51fa\u4e00\u4e2a\u65f6\u95f4\u590d\u6742\u5ea6\uff0c\u548c\u7a7a\u95f4\u590d\u6742\u5ea6\u90fd\u975e\u5e38\u9ad8\u7684\u7b97\u6cd5\u6765\u8fdb\u884c\u8ba1\u7b97\u3002\u800c\u4e14\u7ecf\u5e38\u4f1a\u9762\u4e34\u9891\u7e41\u8bbf\u95ee\u8be5\u6570\u636e\u7684\u60c5\u51b5\uff08\u5373\u4f7f\u5165\u53c2\u4e0d\u53d8\uff09\u3002\u8fd9\u6837\u4f1a\u9020\u6210\u9891\u7e41\u7684\u91cd\u590d\u8ba1\u7b97\uff0c\u5bf9\u6027\u80fd\u4e0d\u53cb\u597d\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"dgc\u6982\u8ff0",children:"DGC\u6982\u8ff0"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"DGC"})," \u5168\u79f0 Dependence Graph Compute, \u7528\u4e8e\u6784\u5efajava\u4e2d\u5bf9\u8c61\u5c5e\u6027\u503c\u548c\u5bf9\u8c61\u65b9\u6cd5\u4e4b\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb\uff0c\u5f53\u5bf9\u8c61\u5c5e\u6027\u503c\u53d8\u5316\u540e\uff0c\u53ef\u81ea\u52a8\u6839\u636e\u4f9d\u8d56\u5173\u7cfb\u56fe\u66f4\u65b0\u5bf9\u5e94\u65b9\u6cd5\u7684\u8fd4\u56de\u503c\uff0c\u4ece\u800c\u5927\u5927\u51cf\u5c11\u91cd\u590d\u8ba1\u7b97\u5de5\u4f5c\u91cf, \u63d0\u5347\u7a0b\u5e8f\u7684\u8fd0\u884c\u6548\u7387\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u7ecf\u8fc7\u6d4b\u8bd5\uff0c\u4f7f\u7528 DGC \u4e4b\u540e\u53ef\u4ee5\u4f7f\u8fd0\u7b97\u6548\u7387\u63d0\u9ad8\u51e0\u5341\u500d\u3002 \u5177\u4f53\u7684\u6d4b\u8bd5\u6570\u636e\u53ef\u53c2\u8003\uff1a",(0,s.jsx)(n.a,{href:"/docs/2.4.2/phoenix-2.x/phoenix-test/features-test",children:"\u6027\u80fd\u6d4b\u8bd5"})]}),"\n",(0,s.jsx)(n.p,{children:"DGC \u5177\u4f53\u662f\u5982\u4f55\u6765\u63d0\u5347\u8fd0\u7b97\u6548\u7387\u7684\u5462\uff1f \u4e0b\u9762\u6211\u4eec\u901a\u8fc7\u4e00\u6bb5\u5177\u4f53\u7684\u8ba1\u7b97\u903b\u8f91\u6765\u770b\u4e00\u4e0b\uff1a"}),"\n",(0,s.jsx)(n.p,{children:"\u5047\u8bbe\u6709\u4e00\u6bb5\u8ba1\u7b97\u903b\u8f91\uff0c\u4f9d\u8d56\u5173\u7cfb\u56fe\u5982\u4e0b\u6240\u793a\uff1a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-group1",src:i(79401).Z+"",width:"301",height:"333"})}),"\n",(0,s.jsx)(n.p,{children:"\u5404\u4e2a\u8ba1\u7b97\u8282\u70b9\u7684\u4f9d\u8d56\u5173\u7cfb\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-group1",src:i(771).Z+"",width:"500",height:"500"})}),"\n",(0,s.jsx)(n.p,{children:"DGC \u4f1a\u6839\u636e\u76f8\u5173\u8ba1\u7b97\u903b\u8f91\uff0c\u5728\u5185\u5b58\u4e2d\u4e5f\u7ef4\u62a4\u4e00\u4efd\u5982\u4e0a\u6240\u793a\u7684\u4f9d\u8d56\u5173\u7cfb\u3002"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u8ba1\u7b97 A \u7684\u503c (\u8fd9\u65f6\u9700\u8981\u8fdb\u884c\u5168\u91cf\u8ba1\u7b97)\uff0c\u8ba1\u7b97\u8fc7\u7a0b\u5982\u4e0b"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-group1",src:i(10351).Z+"",width:"500",height:"500"})}),"\n",(0,s.jsx)(n.p,{children:"DGC \u4f1a\u5728\u8ba1\u7b97\u7684\u8fc7\u7a0b\u4e2d\u7f13\u5b58\u6bcf\u4e2a\u8ba1\u7b97\u8282\u70b9\u7684\u503c\uff08\u5f53\u7b2c\u4e00\u6b21\u8ba1\u7b97\u5b8c\u6210\u4e4b\u540e\uff0c\u4f1a\u7f13\u5b58A\u3001B\u3001C\u3001D\u3001E\u3001F\u8fd9\u4e9b\u8282\u70b9\u7684\u8ba1\u7b97\u7ed3\u679c\uff09"}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"\u67d0\u4e00\u65f6\u523b\u9700\u8981\u91cd\u65b0\u8ba1\u7b97 A \u503c, \u8fd9\u65f6\u4e0d\u4f1a\u518d\u8ba1\u7b97\u6240\u6709\u7684\u8fd0\u7b97\u903b\u8f91, \u76f4\u63a5\u8fd4\u56de\u7f13\u5b58\u7684\u6570\u636e\u3002\uff08\u8fd9\u6b21\u8ba1\u7b97\u548c\u4e0a\u6b21\u8ba1\u7b97\u4e4b\u95f4\u6ca1\u6709\u53d1\u751f\u6570\u636e\u6539\u53d8\uff0c\u6240\u4ee5\u4e0d\u9700\u8981\u91cd\u65b0\u8ba1\u7b97\uff0c\u7f13\u5b58\u503c\u5373\u4e3a\u6b63\u786e\u7684\u8ba1\u7b97\u7ed3\u679c\uff09"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u67d0\u4e00\u65f6\u523b\u5f53 F \u53d1\u751f\u6539\u53d8\u65f6\uff0c\u6839\u636e\u4f9d\u8d56\u5173\u7cfb\u56fe F, D, C, B, A \u8fd9\u4e9b\u8ba1\u7b97\u8282\u70b9\u7684\u7f13\u5b58\u503c\u9700\u8981\u7f6e\u4e3a\u5931\u6548\uff08E \u8282\u70b9\u7684\u7f13\u5b58\u503c\u4e0d\u5931\u6548\uff0c\u56e0\u4e3a\u6839\u636e\u4f9d\u8d56\u5173\u7cfb\u56fe\uff0cF \u8282\u70b9\u7684\u53d8\u66f4\u4e0d\u4f1a\u5f71\u54cd\u5230 E \u8282\u70b9\uff09\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-group1",src:i(28974).Z+"",width:"500",height:"500"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"\u4fee\u6539 F \u540e\uff0c\u91cd\u65b0\u8ba1\u7b97 A\uff0c\u8ba1\u7b97\u8fc7\u7a0b\u4e2d\u5982\u679c\u9047\u5230\u5b58\u5728\u7f13\u5b58\u503c\u7684\u8ba1\u7b97\u8282\u70b9\uff0c\u53ef\u4ee5\u76f4\u63a5\u8bfb\u53d6\u7f13\u5b58\u503c\uff0c\u4e0d\u9700\u8981\u518d\u6b21\u6267\u884c\u76f8\u5173\u8fd0\u7b97\u903b\u8f91\u3002\u5982\u679c\u8ba1\u7b97\u8282\u70b9\u4e0d\u5b58\u5728\u7f13\u5b58\u503c\uff0c\u5219\u91cd\u65b0\u6267\u884c\u8fd0\u7b97\u903b\u8f91\uff0c\u8ba1\u7b97\u5b8c\u6210\u4e4b\u540e\u7f13\u5b58\u8be5\u8ba1\u7b97\u8282\u70b9\u7684\u7ed3\u679c\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9002\u7528\u573a\u666f",children:"\u9002\u7528\u573a\u666f"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"DGC"})," \u9002\u7528\u4e8e\u8bfb\u591a\u5199\u5c11\u7684\u590d\u6742\u8ba1\u7b97\u903b\u8f91\u4e2d\uff08\u4e14\u5199\u65b9\u6cd5\u6bd4\u8f83\u8017\u65f6\uff09\uff0c\u901a\u8fc7\u4f9d\u8d56\u5173\u7cfb\u56fe\u8fdb\u884c\u5c40\u90e8\u91cd\u65b0\u8ba1\u7b97\uff0c\u5927\u5927\u51cf\u5c11\u91cd\u590d\u8ba1\u7b97\u5de5\u4f5c\u91cf, \u4ece\u800c\u63d0\u5347\u7a0b\u5e8f\u7684\u8fd0\u884c\u6548\u7387\u3002"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u6ce8\u610f\uff1a"})," \u5f53\u8ba1\u7b97\u903b\u8f91\u4e0d\u590d\u6742\uff08\u4e0d\u8017\u65f6\uff09\u65f6\uff0c\u4e0d\u9002\u5408\u4f7f\u7528DGC\u3002\u56e0\u4e3a DGC \u5185\u90e8\u9700\u8981\u7ef4\u62a4\u5bf9\u8c61\u5c5e\u6027\u4e0e\u65b9\u6cd5\u4e4b\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb\uff0c\u8fd9\u90e8\u5206\u903b\u8f91\u6709\u4e00\u5b9a\u7684\u590d\u6742\u5ea6\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"// \u6839\u636e\u5165\u53c2 a \u548c  b, \u901a\u8fc7\u4e00\u6bb5\u5177\u4f53\u7684\u903b\u8f91\u8fdb\u884c\u8fd0\u7b97\u5f97\u51fa c\npublic int demo_method(int a, int b) {\n    int c = \u8fd0\u7b97\u903b\u8f91;\n    return c;\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u4e0a\u8ff0\u65b9\u6cd5\u4e2d\u7684\u8fd0\u7b97\u903b\u8f91\u4ec5\u4ec5\u7c7b\u4f3c\u4e8e ",(0,s.jsx)(n.code,{children:"a + b"})," \u8fd9\u79cd\u590d\u6742\u5ea6\u7684\u8bdd\uff0c\u4e0d\u5efa\u8bae\u4f7f\u7528 DGC \uff08\u5982\u679c\u5f3a\u884c\u4f7f\u7528DGC\uff0c\u6709\u53ef\u80fd\u4f1a\u5bfc\u81f4\u6027\u80fd\u4e0b\u964d\uff09\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u5f53\u4e0a\u8ff0\u65b9\u6cd5\u4e2d\u7684\u8fd0\u7b97\u903b\u8f91\u8fbe\u5230\u4e00\u5b9a\u590d\u6742\u5ea6\u65f6\uff08\u6bcf\u6b21\u8ba1\u7b97\u5728\u767e\u6beb\u79d2 ~ \u79d2\u7ea7\uff09\uff0c\u63a8\u8350\u4f7f\u7528DGC\u6765\u8fdb\u884c\u4f18\u5316\u3002"})]})}function p(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},771:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/dgc1-bccd48cab0ca364589e921cdb3d3a89a.gif"},79401:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/dgc1-3ff3a24240770103248b636bf2172823.png"},10351:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/dgc2-95b536b74fae6161f3684fd9370a3059.gif"},28974:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/dgc3-e4dbb09c28a140485f9e1aa264fe2ea1.gif"},11151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>o});var s=i(67294);const c={},t=s.createContext(c);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);