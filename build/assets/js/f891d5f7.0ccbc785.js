"use strict";(self.webpackChunkphoenix_website_next=self.webpackChunkphoenix_website_next||[]).push([[57460],{19182:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>h,contentTitle:()=>r,default:()=>x,frontMatter:()=>s,metadata:()=>l,toc:()=>t});var c=i(85893),d=i(11151);const s={id:"phoenix-transaction-module",title:"\u4e8b\u52a1\u6a21\u5f0f"},r=void 0,l={id:"phoenix-2.x/phoenix-transaction/phoenix-transaction-module",title:"\u4e8b\u52a1\u6a21\u5f0f",description:"\u805a\u5408\u6839\u7684\u672c\u5730\u4e8b\u52a1\u89e3\u6790",source:"@site/versioned_docs/version-2.5.0/phoenix-2.x/03-phoenix-transaction/01-transaction-module.md",sourceDirName:"phoenix-2.x/03-phoenix-transaction",slug:"/phoenix-2.x/phoenix-transaction/phoenix-transaction-module",permalink:"/docs/2.5.0/phoenix-2.x/phoenix-transaction/phoenix-transaction-module",draft:!1,unlisted:!1,editUrl:"https://github.com/PhoenixIQ/versioned_docs/version-2.5.0/phoenix-2.x/03-phoenix-transaction/01-transaction-module.md",tags:[],version:"2.5.0",sidebarPosition:1,frontMatter:{id:"phoenix-transaction-module",title:"\u4e8b\u52a1\u6a21\u5f0f"},sidebar:"docs",previous:{title:"\u914d\u7f6e\u8be6\u60c5",permalink:"/docs/2.5.0/phoenix-2.x/phoenix-core/phoenix-core-config"},next:{title:"\u4f7f\u7528\u8bf4\u660e",permalink:"/docs/2.5.0/phoenix-2.x/phoenix-transaction/phoenix-transaction-aggregate"}},h={},t=[{value:"\u805a\u5408\u6839\u7684\u672c\u5730\u4e8b\u52a1\u89e3\u6790",id:"\u805a\u5408\u6839\u7684\u672c\u5730\u4e8b\u52a1\u89e3\u6790",level:2},{value:"\u5206\u5e03\u5f0f\u4e8b\u52a1\u4ea7\u751f\u7684\u80cc\u666f",id:"\u5206\u5e03\u5f0f\u4e8b\u52a1\u4ea7\u751f\u7684\u80cc\u666f",level:2},{value:"\u5b9e\u4f53\u805a\u5408\u6839\u6c34\u5e73\u62c6\u5206",id:"\u5b9e\u4f53\u805a\u5408\u6839\u6c34\u5e73\u62c6\u5206",level:3},{value:"\u5b9e\u4f53\u805a\u5408\u6839\u670d\u52a1\u5316\u62c6\u5206",id:"\u5b9e\u4f53\u805a\u5408\u6839\u670d\u52a1\u5316\u62c6\u5206",level:3},{value:"\u5206\u5e03\u5f0f\u4e8b\u52a1\u7406\u8bba\u57fa\u7840",id:"\u5206\u5e03\u5f0f\u4e8b\u52a1\u7406\u8bba\u57fa\u7840",level:2},{value:"XA\u534f\u8bae",id:"xa\u534f\u8bae",level:3},{value:"TCC\u534f\u8bae",id:"tcc\u534f\u8bae",level:3},{value:"Saga\u534f\u8bae",id:"saga\u534f\u8bae",level:3},{value:"Phoenix Transaction\u8be6\u89e3",id:"phoenix-transaction\u8be6\u89e3",level:2},{value:"TCC\u6a21\u5f0f",id:"tcc\u6a21\u5f0f",level:3},{value:"TCC \u8bbe\u8ba1 - \u4e1a\u52a1\u6a21\u578b\u5206 2 \u9636\u6bb5\u8bbe\u8ba1",id:"tcc-\u8bbe\u8ba1---\u4e1a\u52a1\u6a21\u578b\u5206-2-\u9636\u6bb5\u8bbe\u8ba1",level:4},{value:"\u8d85\u65f6\u573a\u666f",id:"\u8d85\u65f6\u573a\u666f",level:4},{value:"\u5e42\u7b49\u63a7\u5236",id:"\u5e42\u7b49\u63a7\u5236",level:4},{value:"\u7a7a\u56de\u6eda",id:"\u7a7a\u56de\u6eda",level:4},{value:"\u9632\u60ac\u6302",id:"\u9632\u60ac\u6302",level:4},{value:"Saga\u6a21\u5f0f",id:"saga\u6a21\u5f0f",level:3},{value:"\u6df7\u7528\u6a21\u5f0f",id:"\u6df7\u7528\u6a21\u5f0f",level:3},{value:"\u603b\u7ed3\u5c55\u671b",id:"\u603b\u7ed3\u5c55\u671b",level:2}];function o(n){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h2,{id:"\u805a\u5408\u6839\u7684\u672c\u5730\u4e8b\u52a1\u89e3\u6790",children:"\u805a\u5408\u6839\u7684\u672c\u5730\u4e8b\u52a1\u89e3\u6790"}),"\n",(0,c.jsxs)(e.blockquote,{children:["\n",(0,c.jsx)(e.p,{children:"\u5728\u4ecb\u7ecd\u5206\u5e03\u5f0f\u4e8b\u52a1\u5177\u4f53\u4e4b\u524d\uff0c\u5148\u5256\u6790\u4e00\u4e0b phoenix \u4e2d\u5b9e\u4f53\u805a\u5408\u6839\u7684\u672c\u5730\u4e8b\u52a1\u3002"}),"\n"]}),"\n",(0,c.jsxs)(e.p,{children:["\u5728Phoenix\u5f53\u4e2d\uff0c\u5b9e\u4f53\u805a\u5408\u6839\u662f\u6700\u5c0f\u7684\u903b\u8f91\u5904\u7406\u5355\u5143\uff0c\u4e00\u4e2aPhoenix\u96c6\u7fa4\u4f1a\u6709N\u591a\u4e2a\u5b9e\u4f53\u805a\u5408\u6839\u5bf9\u8c61\uff0c\u6bcf\u4e2a\u5b9e\u4f53\u805a\u5408\u6839\u5bf9\u8c61\u5728\u5904\u7406\u6d88\u606f\u65f6\u90fd\u6ee1\u8db3\u4e8b\u52a1\u4e2d",(0,c.jsx)(e.code,{children:"ACID"}),"\u7684\u7279\u6027\uff0c\u4e0b\u9762\u89e3\u6790\u4e00\u4e0b\u5b9e\u4f53\u805a\u5408\u6839\u5bf9",(0,c.jsx)(e.code,{children:"ACID"}),"\u7684\u652f\u6301\u80fd\u529b\u3002"]}),"\n",(0,c.jsxs)(e.table,{children:[(0,c.jsx)(e.thead,{children:(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.th,{children:"\u7279\u6027"}),(0,c.jsx)(e.th,{children:"\u652f\u6301\u7ea7\u522b"}),(0,c.jsx)(e.th,{children:"\u5b9e\u73b0\u539f\u7406"})]})}),(0,c.jsxs)(e.tbody,{children:[(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"\u539f\u5b50\u6027\uff08Atomicity\uff09"}),(0,c.jsx)(e.td,{children:"\u652f\u6301"}),(0,c.jsx)(e.td,{children:"\u5b9e\u4f53\u805a\u5408\u6839\u5904\u7406\u6d88\u606f\u4fee\u6539\u591a\u4e2a\u72b6\u6001\u65f6\uff0c\u53ef\u4ee5\u4fdd\u8bc1\u8981\u4e48\u5168\u90e8\u6210\u529f\u8981\u4e48\u5168\u90e8\u5931\u8d25\u3002"})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"\u4e00\u81f4\u6027\uff08Consistency\uff09"}),(0,c.jsx)(e.td,{children:"\u652f\u6301"}),(0,c.jsx)(e.td,{children:"\u5b9e\u4f53\u805a\u5408\u6839\u5904\u7406\u6d88\u606f\u662f\u6709\u5e8f\u5904\u7406\u7684\uff0c\u5bf9\u4e8e\u6bcf\u4e2a\u6d88\u606f\u5904\u7406\u65f6\uff0c\u72b6\u6001\u662f\u7ebf\u6027\u4e00\u81f4\u7684\u3002"})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"\u9694\u79bb\u6027\uff08Isolation\uff09"}),(0,c.jsx)(e.td,{children:"\u652f\u6301"}),(0,c.jsx)(e.td,{children:"\u5b9e\u4f53\u805a\u5408\u6839\u5904\u7406\u6d88\u606f\u662f\u6709\u5e8f\u5904\u7406\u7684\uff0c\u9694\u79bb\u7ea7\u522b\u662f\u6700\u9ad8\uff08\u4e32\u884c\u5316\uff09\u3002"})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"\u6301\u4e45\u6027\uff08Durability\uff09"}),(0,c.jsx)(e.td,{children:"\u652f\u6301"}),(0,c.jsx)(e.td,{children:"\u5b9e\u4f53\u805a\u5408\u6839\u7684\u72b6\u6001\u4f9d\u8d56EventStore\u5b58\u50a8\uff0c\u4f9d\u8d56EventSouring\u6280\u672f\u6062\u590d\u3002"})]})]})]}),"\n",(0,c.jsx)(e.h2,{id:"\u5206\u5e03\u5f0f\u4e8b\u52a1\u4ea7\u751f\u7684\u80cc\u666f",children:"\u5206\u5e03\u5f0f\u4e8b\u52a1\u4ea7\u751f\u7684\u80cc\u666f"}),"\n",(0,c.jsxs)(e.p,{children:["\u5728Phoenix\u5f53\u4e2d\uff0c\u4e1a\u52a1\u662f",(0,c.jsx)(e.code,{children:"\u5b9e\u4f53\u805a\u5408\u6839"}),"\u5904\u7406\u7684\uff0c\u5b9e\u4f53\u805a\u5408\u6839\u90fd\u6709\u4e00\u4e2a\u552f\u4e00id\u6807\u8bc6(\u805a\u5408\u6839id)\uff0c\u4e00\u4e2a\u5b9e\u4f53\u805a\u5408\u6839\u5185\u90e8\u5904\u7406",(0,c.jsx)(e.code,{children:"\u6d88\u606f"}),"\u65f6\u6ee1\u8db3\u4e8b\u52a1\u7684",(0,c.jsx)(e.code,{children:"ACID"}),"\u7279\u6027\u3002\u4f46\u4e1a\u52a1\u7cfb\u7edf\u4f7f\u7528Phoenix\u5f00\u53d1\u670d\u52a1\u65f6\uff0c\u4f1a\u5bf9\u4e1a\u52a1\u505a",(0,c.jsx)(e.code,{children:"\u6c34\u5e73"}),"\u548c",(0,c.jsx)(e.code,{children:"\u670d\u52a1\u5316"}),"\u62c6\u5206\u6210\u4e0d\u540c\u7684\u805a\u5408\u6839\uff0c\u5982\u679c\u4e00\u4e2a\u4e1a\u52a1\u8bf7\u6c42\u9700\u8981\u591a\u4e2a\u805a\u5408\u6839\u4e00\u8d77\u5b8c\u6210\u7684\u8bdd\uff0c\u5c31\u5f15\u51fa\u4e86\u5206\u5e03\u5f0f\u4e8b\u52a1\u3002"]}),"\n",(0,c.jsx)(e.h3,{id:"\u5b9e\u4f53\u805a\u5408\u6839\u6c34\u5e73\u62c6\u5206",children:"\u5b9e\u4f53\u805a\u5408\u6839\u6c34\u5e73\u62c6\u5206"}),"\n",(0,c.jsxs)(e.p,{children:["\u5728\u4f7f\u7528Phoenix\u6846\u67b6\u65f6\uff0c\u4e3a\u4e86\u8ffd\u6c42\u5e76\u53d1\u7c92\u5ea6\u6765\u627f\u62c5\u66f4\u5927\u7684\u4e1a\u52a1\u4f53\u91cf\uff0c\u4f1a\u5bf9\u4e00\u4e2a\u805a\u5408\u6839\u505a",(0,c.jsx)(e.code,{children:"\u6c34\u5e73"}),"\u62c6\u5206\uff0c\u901a\u5e38\u4e00\u4e2a\u805a\u5408\u6839\u7c7b\u901a\u8fc7\u4e0d\u540c\u7684",(0,c.jsx)(e.code,{children:"\u805a\u5408\u6839id"}),"\u6765\u751f\u6210\u4e0d\u540c\u7684",(0,c.jsx)(e.code,{children:"\u805a\u5408\u6839\u5bf9\u8c61"}),"\uff0c\u90a3\u4e48\u4e0d\u540c\u7684\u805a\u5408\u6839\u5bf9\u8c61\u8fd0\u884c\u65f6\u4f1a\u5728\u4e0d\u540c\u7684\u8282\u70b9\u5f53\u4e2d\u3002\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u4e00\u4e2a\u8d26\u6237\u805a\u5408\u6839\u901a\u8fc7\u8d26\u6237id\u6765\u751f\u6210\u4e86N\u4e2a\u805a\u5408\u6839\u5bf9\u8c61\uff0c\u8fd9\u4e9b\u805a\u5408\u6839\u5bf9\u8c61\u8fd0\u884c\u5728\u4e0d\u540c\u7684\u8282\u70b9\u5f53\u4e2d\uff0c\u5982\u679c\u53d1\u8d77",(0,c.jsx)(e.code,{children:"\u8d26\u62371"}),"\u5bf9",(0,c.jsx)(e.code,{children:"\u8d26\u62372"}),"\u7684\u8f6c\u8d26\u8bf7\u6c42\uff0c\u5219\u4f1a\u6d89\u53ca\u5230\u5206\u5e03\u5f0f\u4e8b\u52a1\u573a\u666f\u3002"]}),"\n",(0,c.jsxs)(e.blockquote,{children:["\n",(0,c.jsxs)(e.p,{children:["\u5b9e\u9645\u4e0a",(0,c.jsx)(e.code,{children:"\u8d26\u62371"}),"\u5411",(0,c.jsx)(e.code,{children:"\u8d26\u62373"}),"\u8f6c\u8d26\u4e5f\u662f\u4e00\u4e2a\u5206\u5e03\u5f0f\u4e8b\u52a1\uff0c\u867d\u7136\u8fd9\u4e24\u4e2a\u5b9e\u4f53\u805a\u5408\u6839\u5bf9\u8c61\u5728\u4e00\u4e2a\u8282\u70b9\u4e0a\uff0c\u4f46\u662fphoenix\u662f\u65e0\u670d\u52a1\u5316\u7684\u601d\u60f3\uff0c\u4e00\u5207\u90fd\u4ee5\u805a\u5408\u6839\u9694\u79bb\u3002"]}),"\n"]}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.img,{alt:"show",src:i(75888).Z+"",width:"615",height:"452"})}),"\n",(0,c.jsx)(e.h3,{id:"\u5b9e\u4f53\u805a\u5408\u6839\u670d\u52a1\u5316\u62c6\u5206",children:"\u5b9e\u4f53\u805a\u5408\u6839\u670d\u52a1\u5316\u62c6\u5206"}),"\n",(0,c.jsxs)(e.p,{children:["\u5728\u4f7f\u7528Phoenix\u6846\u67b6\u65f6\uff0c\u4f1a\u8fdb\u884cDDD\u9886\u57df\u8bbe\u8ba1\u51fa\u4e0d\u540c\u7c7b\u578b\u7684",(0,c.jsx)(e.code,{children:"\u805a\u5408\u6839"}),"\uff0c\u6bd4\u5982\u5546\u54c1\u8d2d\u7269\u4e1a\u52a1\u573a\u666f\u53ef\u4ee5\u5212\u5206\u4e3a",(0,c.jsx)(e.code,{children:"\u5546\u54c1\u4ed3\u50a8"}),"\u548c",(0,c.jsx)(e.code,{children:"\u8d44\u91d1\u8d26\u6237"}),"\u4e24\u7c7b\u805a\u5408\u6839\uff0c\u4e0d\u540c\u7c7b\u522b\u805a\u5408\u6839\u4f1a\u534f\u4f5c\u5b8c\u6210\u8d2d\u7269\u7684\u6d41\u7a0b\uff0c\u8fd9\u6837\u5219\u4f1a\u6d89\u53ca\u5206\u5e03\u5f0f\u4e8b\u52a1\u7684\u573a\u666f\u3002"]}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.img,{alt:"show",src:i(55408).Z+"",width:"1592",height:"930"})}),"\n",(0,c.jsx)(e.h2,{id:"\u5206\u5e03\u5f0f\u4e8b\u52a1\u7406\u8bba\u57fa\u7840",children:"\u5206\u5e03\u5f0f\u4e8b\u52a1\u7406\u8bba\u57fa\u7840"}),"\n",(0,c.jsx)(e.h3,{id:"xa\u534f\u8bae",children:"XA\u534f\u8bae"}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"XA"}),"\u534f\u8bae\u662f\u4e00\u4e2a\u57fa\u4e8e\u6570\u636e\u5e93\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u534f\u8bae\uff0c\u5176\u5206\u4e3a\u4e24\u90e8\u5206\uff1a\u4e8b\u52a1\u7ba1\u7406\u5668\u548c\u672c\u5730\u8d44\u6e90\u7ba1\u7406\u5668\u3002\u4e8b\u52a1\u7ba1\u7406\u5668\u4f5c\u4e3a\u4e00\u4e2a\u5168\u5c40\u7684\u8c03\u5ea6\u8005\uff0c\u8d1f\u8d23\u5bf9\u5404\u4e2a\u672c\u5730\u8d44\u6e90\u7ba1\u7406\u5668\u8fdb\u884c\u7edf\u4e00\u63d0\u4ea4\u6216\u8005\u56de\u6eda\u3002\u4e8c\u9636\u63d0\u4ea4\u534f\u8bae\uff082PC\uff09\u548c\u4e09\u9636\u63d0\u4ea4\u534f\u8bae\uff083PC\uff09\u5c31\u662f\u6839\u636e\u6b64\u534f\u8bae\u884d\u751f\u51fa\u6765\u800c\u6765\u3002\u5982\u4ecaOracle\u3001Mysql\u7b49\u6570\u636e\u5e93\u5747\u5df2\u5b9e\u73b0\u4e86XA\u63a5\u53e3\u3002"]}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"2PC"}),"\u534f\u8bae\u6d41\u7a0b\u56fe\n",(0,c.jsx)(e.img,{alt:"show",src:i(43816).Z+"",width:"1794",height:"904"})]}),"\n",(0,c.jsxs)(e.blockquote,{children:["\n",(0,c.jsx)(e.p,{children:"\u4e0a\u8fb9\u56fe\u7247\u6e90\u81ea\u7f51\u7edc\uff0c\u5982\u6709\u4fb5\u6743\u8054\u7cfb\u5220\u9664"}),"\n"]}),"\n",(0,c.jsxs)(e.p,{children:["\u5b9e\u9645\u4e0a\u65e0\u8bba\u662f",(0,c.jsx)(e.code,{children:"2PC"}),"\u8fd8\u662f",(0,c.jsx)(e.code,{children:"3PC"}),"\u534f\u8bae\u90fd\u5c1d\u8bd5\u5728\u6ee1\u8db3\u6bd4\u8f83\u5f3a\u7684",(0,c.jsx)(e.code,{children:"ACID"}),"\u7279\u6027\uff0c\u4f46\u662f\u4ed8\u51fa\u7684\u4ee3\u4ef7\u4e5f\u5f88\u9ad8\uff0c\u5c31\u662f\u6027\u80fd\u5f88\u6162\uff0c\u963b\u585e\u540c\u6b65\u7b49\u7b49\u3002\u5b9e\u9645\u4e0a",(0,c.jsx)(e.code,{children:"3PC"}),"\u4e5f\u5b58\u5728\u6570\u636e\u4e0d\u4e00\u81f4\u7684\u95ee\u9898\uff0c\u8fd9\u91cc\u5c31\u4e0d\u518d\u9610\u8ff0\u3002"]}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"XA"}),"\u534f\u8bae\u662f\u7ad9\u5728\u5173\u7cfb\u578b\u6570\u636e\u5e93\u7ef4\u5ea6\u63d0\u51fa\u7684\uff0c\u5e94\u7528\u5728",(0,c.jsx)(e.code,{children:"DB"}),"\u5c42\u9762\uff0c\u5e76\u4e14\u65e8\u5728\u505a\u5230\u5bf9\u7528\u6237\u900f\u660e\uff0c",(0,c.jsx)(e.code,{children:"ACID"}),"\u7684\u4fdd\u969c\u7b49\u3002\u73b0\u5728\u573a\u666f\u4e00\u822c\u4e60\u60ef\u5728\u7528\u6237\u5c42\u9762\u89e3\u51b3\u5206\u5e03\u5f0f\u4e8b\u52a1\u95ee\u9898\u7684\u8bdd\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,c.jsx)(e.code,{children:"TCC"}),"\u548c",(0,c.jsx)(e.code,{children:"SAGA"}),"\uff0c\u867d\u7136\u4e27\u5931\u4e86\u4e00\u4e9b\u9694\u79bb\u6027\u548c\u4e00\u81f4\u6027\u4f46\u662f\u53ef\u4ee5\u505a\u5230\u65e0\u9501\uff0c\u975e\u963b\u585e\u3002"]}),"\n",(0,c.jsx)(e.h3,{id:"tcc\u534f\u8bae",children:"TCC\u534f\u8bae"}),"\n",(0,c.jsx)(e.p,{children:"TCC\uff08Try-Confirm-Cancel\uff09\u5b9e\u9645\u4e0a\u662f\u670d\u52a1\u5316\u7684\u4e24\u9636\u6bb5\u63d0\u4ea4\u534f\u8bae\uff0c\u4e1a\u52a1\u5f00\u53d1\u8005\u9700\u8981\u5b9e\u73b0\u8fd9\u4e09\u4e2a\u670d\u52a1\u63a5\u53e3\uff0c\u7b2c\u4e00\u9636\u6bb5\u7531\u4e1a\u52a1\u4ee3\u7801\u7f16\u6392\u6765\u8c03\u7528 Try \u63a5\u53e3\u8fdb\u884c\u8d44\u6e90\u9884\u7559\uff0c\u6240\u6709\u53c2\u4e0e\u8005\u7684 Try \u63a5\u53e3\u90fd\u6210\u529f\u4e86\uff0c\u4e8b\u52a1\u7ba1\u7406\u5668\u4f1a\u63d0\u4ea4\u4e8b\u52a1\uff0c\u5e76\u8c03\u7528\u6bcf\u4e2a\u53c2\u4e0e\u8005\u7684 Confirm \u63a5\u53e3\u771f\u6b63\u63d0\u4ea4\u4e1a\u52a1\u64cd\u4f5c\uff0c\u5426\u5219\u8c03\u7528\u6bcf\u4e2a\u53c2\u4e0e\u8005\u7684 Cancel \u63a5\u53e3\u56de\u6eda\u4e8b\u52a1\u3002"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"Try\u9636\u6bb5\uff1a \u4e0b\u5355\u65f6\u901a\u8fc7Try\u64cd\u4f5c\u53bb\u6263\u9664\u5e93\u5b58\u9884\u7559\u8d44\u6e90\u3002"}),"\n",(0,c.jsx)(e.li,{children:"Confirm\u9636\u6bb5\uff1a \u786e\u8ba4\u6267\u884c\u4e1a\u52a1\u64cd\u4f5c\uff0c\u5728\u53ea\u9884\u7559\u7684\u8d44\u6e90\u57fa\u7840\u4e0a\uff0c\u53d1\u8d77\u8d2d\u4e70\u8bf7\u6c42\u3002"}),"\n",(0,c.jsx)(e.li,{children:"Cancel\u9636\u6bb5\uff1a \u53ea\u8981\u6d89\u53ca\u5230\u7684\u76f8\u5173\u4e1a\u52a1\u4e2d\uff0c\u6709\u4e00\u4e2a\u4e1a\u52a1\u65b9\u9884\u7559\u8d44\u6e90\u672a\u6210\u529f\uff0c\u5219\u53d6\u6d88\u6240\u6709\u4e1a\u52a1\u8d44\u6e90\u7684\u9884\u7559\u8bf7\u6c42\u3002"}),"\n"]}),"\n",(0,c.jsx)(e.p,{children:"\u7406\u8bba\u4e0aConfirm\u9636\u6bb5\u548cCancel\u9636\u6bb5\u4e0d\u5141\u8bb8\u51fa\u73b0\u4e1a\u52a1\u578b\u5931\u8d25\uff0c\u6846\u67b6\u5b9e\u73b0\u65f6\u8981\u4fdd\u8bc1\u5e42\u7b49\uff0c\u8d85\u65f6\u91cd\u8bd5\uff0c\u8d85\u65f6\u56de\u6eda\uff0c\u7a7a\u56de\u6eda\uff0c\u60ac\u6302\u7b49\u4e00\u7cfb\u5217\u95ee\u9898\uff0c\u540e\u6587\u4f1a\u8be6\u7ec6\u4ecb\u7ecdPhoenix\u7684\u5b9e\u73b0\u3002"}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.img,{alt:"show",src:i(7768).Z+"",width:"1986",height:"960"})}),"\n",(0,c.jsx)(e.p,{children:"TCC\u5bf9\u4e8eACID\u7684\u4fdd\u8bc1:"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"\u539f\u5b50\u6027\uff1a\u6b63\u5e38\u60c5\u51b5\u4e0b\u4fdd\u8bc1\u3002"}),"\n",(0,c.jsx)(e.li,{children:"\u4e00\u81f4\u6027\uff1a\u6700\u7ec8\u4e00\u81f4\u6027\uff0c\u53ef\u80fd\u51fa\u73b0A\u672c\u5730\u4e8b\u52a1\u548cB\u672c\u5730\u4e8b\u52a1\u4e0d\u4e00\u81f4\u7684\u60c5\u51b5\u3002"}),"\n",(0,c.jsx)(e.li,{children:"\u9694\u79bb\u6027\uff1a\u4e0d\u4fdd\u8bc1\uff0c\u5728\u67d0\u4e2a\u65f6\u95f4\u70b9\u4f1a\u51fa\u73b0\u4e00\u4e2a\u4e8b\u52a1\u770b\u5230\u53e6\u5916\u4e00\u4e2a\u4e8b\u52a1\u7684\u4e2d\u95f4\u7ed3\u679c\u3002"}),"\n",(0,c.jsx)(e.li,{children:"\u6301\u4e45\u6027\uff1a\u548c\u672c\u5730\u4e8b\u52a1\u4e00\u6837\uff0c\u53ea\u8981\u5206\u5e03\u5f0f\u4e8b\u52a1\u7ed3\u675f\uff0c\u5219\u4f1a\u88ab\u6301\u4e45\u5316\u3002"}),"\n"]}),"\n",(0,c.jsx)(e.h3,{id:"saga\u534f\u8bae",children:"Saga\u534f\u8bae"}),"\n",(0,c.jsx)(e.p,{children:"1987\u5e74\u666e\u6797\u65af\u987f\u5927\u5b66Hector & Kenneth\u53d1\u8868\u8bba\u6587Sagas\uff0cSaga\u662f\u4e00\u4e2a\u957f\u6d3b\u4e8b\u52a1\u53ef\u88ab\u5206\u89e3\u6210\u53ef\u4ee5\u4ea4\u9519\u4e91\u8fd0\u884c\u7684\u5b50\u4e8b\u52a1\u96c6\u5408\uff0c\u5176\u4e2d\u6bcf\u4e2a\u5b50\u4e8b\u52a1\u90fd\u662f\u4e00\u4e2a\u4fdd\u6301\u4e00\u81f4\u6027\u7684\u771f\u5b9e\u4e8b\u52a1\u3002"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"\u6bcf\u4e2aSaga\u90fd\u7531\u4e00\u7cfb\u5217\u7684sub-transaction Ti\u7ec4\u6210\u3002"}),"\n",(0,c.jsx)(e.li,{children:"\u6bcf\u4e2aTi\u90fd\u5bf9\u5e94\u6709\u8865\u507f\u7684\u52a8\u4f5cCi\uff0c\u8865\u507f\u52a8\u4f5c\u7528\u6237\u64a4\u9500Ti\u9020\u6210\u7684\u7ed3\u679c\u3002"}),"\n",(0,c.jsx)(e.li,{children:"\u7406\u8bba\u4e0aCi\u6267\u884c\u4e0d\u80fd\u5931\u8d25\uff0c\u5982\u679c\u5931\u8d25\u5219\u9700\u8981\u4eba\u5de5\u4ecb\u5165\uff0c\u5b9e\u73b0\u65f6\u8981\u4fdd\u8bc1Ti-Ci\u548cCi->Ti\u6267\u884c\u7ed3\u679c\u90fd\u662f\u4e00\u6837\uff08\u4e8b\u52a1\u88ab\u56de\u6eda\u4e86\uff09\u3002"}),"\n"]}),"\n",(0,c.jsxs)(e.p,{children:["Ti\u548cCi\u4e5f\u540c\u6837\u662f\u7528\u6237\u5b9a\u4e49\u7684\uff0c\u53ef\u4ee5\u770b\u5230\u548cTCC\u76f8\u6bd4\uff0cSaga\u6ca1\u6709",(0,c.jsx)(e.code,{children:"\u9884\u7559"}),"\u52a8\u4f5c\uff0c\u5b83\u7684Ti\u5c31\u662f\u76f4\u63a5\u63d0\u4ea4\u5b50\u4e8b\u52a1\uff0c\u8fd9\u4e5f\u540c\u65f6\u8981\u6c42\u4e1a\u52a1\u573a\u666f\u8981\u6ee1\u8db3\u53ef\u4ee5\u64a4\u9500\u7684\u573a\u666f\uff0c\u6bd4\u5982\u706b\u7bad\u53d1\u5c04\u5c31\u4e0d\u80fd\u64a4\u9500\uff0c\u6216\u8005\u8d44\u91d1\u7ba1\u7406\u4e2dTi\u4e0d\u80fd\u76f4\u63a5\u7528\u4e8e\u52a0\u94b1\u64cd\u4f5c\uff0c\u4e0d\u7136\u4e5f\u6709\u53ef\u80fd\u4e0d\u80fd\u64a4\u9500\uff08\u52a0\u7684\u94b1\u88ab\u522b\u7684\u4e8b\u52a1\u7528\u4e86\uff09\u3002"]}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.img,{alt:"show",src:i(53498).Z+"",width:"1442",height:"694"})}),"\n",(0,c.jsx)(e.p,{children:"Saga\u4e8b\u52a1\u5bf9\u4e8eACID\u7684\u4fdd\u8bc1\u548cTCC\u4e00\u6837\uff0c\u5b9e\u9645\u4e0a\u7528\u6237\u5c42\u9762\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u89e3\u51b3\u65b9\u6848\u90fd\u4e0d\u80fd\u4fdd\u8bc1\u9694\u79bb\u6027\uff0c\u9700\u8981\u7528\u6237\u6839\u636e\u4e1a\u52a1\u53bb\u8861\u91cf\u3002"}),"\n",(0,c.jsx)(e.h2,{id:"phoenix-transaction\u8be6\u89e3",children:"Phoenix Transaction\u8be6\u89e3"}),"\n",(0,c.jsxs)(e.p,{children:["Phoenix Transaction\u662fPhoenix\u6846\u67b6\u5728\u5206\u5e03\u5f0f\u4e8b\u52a1\u573a\u666f\u4e0b\u534f\u8c03\u591a\u4e2a\u805a\u5408\u6839\u5171\u540c\u5b8c\u6210\u4e00\u4e2a\u4e8b\u52a1\u7684\u5b9e\u73b0\uff0c\u76ee\u524d\u6846\u67b6\u652f\u6301",(0,c.jsx)(e.code,{children:"TCC"}),"\u548c",(0,c.jsx)(e.code,{children:"Saga"}),"\u4e24\u79cd\u4e8b\u52a1\u6a21\u578b\uff0c\u540c\u65f6\u4e5f\u652f\u6301",(0,c.jsx)(e.code,{children:"\u6df7\u7528"}),"(\u4e00\u4e2a\u4e8b\u52a1\u5305\u542bTCC\u548cSaga\u4e24\u79cd\u5b50\u4e8b\u52a1)\u3002"]}),"\n",(0,c.jsx)(e.h3,{id:"tcc\u6a21\u5f0f",children:"TCC\u6a21\u5f0f"}),"\n",(0,c.jsx)(e.p,{children:"TCC\u6a21\u5f0f\u9700\u8981\u7528\u6237\u6839\u636e\u81ea\u5df1\u7684\u4e1a\u52a1\u573a\u666f\u5b9e\u73b0 Try\u3001Confirm \u548c Cancel \u4e09\u4e2a\u64cd\u4f5c\u3002\u4e8b\u52a1\u805a\u5408\u6839\u5728\u4e00\u9636\u6bb5\u6267\u884c Try \u65b9\u5f0f\uff0c\u5728\u4e8c\u9636\u6bb5\u63d0\u4ea4\u6267\u884c Confirm \u65b9\u6cd5\uff0c\u4e8c\u9636\u6bb5\u56de\u6eda\u6267\u884c Cancel \u65b9\u6cd5\u3002"}),"\n",(0,c.jsx)(e.p,{children:"TCC\u6a21\u5f0f\u4e2dConfirm\u548cCancel\u4e0d\u5141\u8bb8\u51fa\u73b0\u5904\u7406\u5931\u8d25\u7684\u8fd4\u56de\u7ed3\u679c\uff0c\u4e0d\u7136\u6574\u4e2a\u4e8b\u52a1\u4f1a\u8fdb\u5165\u5f02\u5e38\u72b6\u6001\uff0c\u9700\u8981\u4eba\u5de5\u5904\u7406\u3002"}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.img,{alt:"show",src:i(7768).Z+"",width:"1986",height:"960"})}),"\n",(0,c.jsxs)(e.p,{children:["\u53ef\u4ee5\u53c2\u8003",(0,c.jsx)(e.a,{href:"./phoenix-transaction-aggregate",children:"\u4f7f\u7528\u6587\u6863"}),"\u5b9a\u4e49\u4e8b\u52a1\u805a\u5408\u6839\u5e76\u8bbe\u7f6eTCC\u547d\u4ee4\u3002"]}),"\n",(0,c.jsx)(e.h4,{id:"tcc-\u8bbe\u8ba1---\u4e1a\u52a1\u6a21\u578b\u5206-2-\u9636\u6bb5\u8bbe\u8ba1",children:"TCC \u8bbe\u8ba1 - \u4e1a\u52a1\u6a21\u578b\u5206 2 \u9636\u6bb5\u8bbe\u8ba1"}),"\n",(0,c.jsx)(e.p,{children:"\u7528\u6237\u63a5\u5165 TCC \uff0c\u6700\u91cd\u8981\u7684\u662f\u8003\u8651\u5982\u4f55\u5c06\u81ea\u5df1\u7684\u4e1a\u52a1\u6a21\u578b\u62c6\u6210\u4e24\u9636\u6bb5\u6765\u5b9e\u73b0\u3002"}),"\n",(0,c.jsx)(e.p,{children:"\u4ee5\u6263\u94b1\u573a\u666f\u4e3a\u4f8b\uff0c\u5728\u63a5\u5165 TCC \u524d\uff0c\u5bf9 A \u8d26\u6237\u7684\u6263\u94b1\uff0c\u53ea\u9700\u4e00\u6761\u66f4\u65b0\u8d26\u6237\u4f59\u989d\u7684 SQL \u4fbf\u80fd\u5b8c\u6210\uff1b\u4f46\u662f\u5728\u63a5\u5165 TCC \u4e4b\u540e\uff0c\u7528\u6237\u5c31\u9700\u8981\u8003\u8651\u5982\u4f55\u5c06\u539f\u6765\u4e00\u6b65\u5c31\u80fd\u5b8c\u6210\u7684\u6263\u94b1\u64cd\u4f5c\uff0c\u62c6\u6210\u4e24\u9636\u6bb5\uff0c\u5b9e\u73b0\u6210\u4e09\u4e2a\u65b9\u6cd5\uff0c\u5e76\u4e14\u4fdd\u8bc1\u4e00\u9636\u6bb5 Try  \u6210\u529f\u7684\u8bdd \u4e8c\u9636\u6bb5 Confirm \u4e00\u5b9a\u80fd\u6210\u529f\u3002"}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.img,{alt:"show",src:i(52726).Z+"",width:"1876",height:"728"})}),"\n",(0,c.jsxs)(e.blockquote,{children:["\n",(0,c.jsxs)(e.p,{children:["\u56fe\u7247",(0,c.jsx)(e.a,{href:"http://seata.io/zh-cn/blog/seata-at-tcc-saga.html",children:"\u6765\u6e90"}),"\uff0c\u8be5\u6bb5\u843d\u4e5f\u53c2\u8003\u4e86Seata"]}),"\n"]}),"\n",(0,c.jsx)(e.p,{children:"\u5982\u4e0a\u56fe\u6240\u793a\uff0c"}),"\n",(0,c.jsx)(e.p,{children:"Try \u65b9\u6cd5\u4f5c\u4e3a\u4e00\u9636\u6bb5\u51c6\u5907\u65b9\u6cd5\uff0c\u9700\u8981\u505a\u8d44\u6e90\u7684\u68c0\u67e5\u548c\u9884\u7559\u3002\u5728\u6263\u94b1\u573a\u666f\u4e0b\uff0cTry \u8981\u505a\u7684\u4e8b\u60c5\u662f\u5c31\u662f\u68c0\u67e5\u8d26\u6237\u4f59\u989d\u662f\u5426\u5145\u8db3\uff0c\u9884\u7559\u8f6c\u8d26\u8d44\u91d1\uff0c\u9884\u7559\u7684\u65b9\u5f0f\u5c31\u662f\u51bb\u7ed3 A \u8d26\u6237\u7684 \u8f6c\u8d26\u8d44\u91d1\u3002Try \u65b9\u6cd5\u6267\u884c\u4e4b\u540e\uff0c\u8d26\u53f7 A \u4f59\u989d\u867d\u7136\u8fd8\u662f 100\uff0c\u4f46\u662f\u5176\u4e2d 30 \u5143\u5df2\u7ecf\u88ab\u51bb\u7ed3\u4e86\uff0c\u4e0d\u80fd\u88ab\u5176\u4ed6\u4e8b\u52a1\u4f7f\u7528\u3002"}),"\n",(0,c.jsx)(e.p,{children:"\u4e8c\u9636\u6bb5 Confirm \u65b9\u6cd5\u6267\u884c\u771f\u6b63\u7684\u6263\u94b1\u64cd\u4f5c\u3002Confirm \u4f1a\u4f7f\u7528 Try \u9636\u6bb5\u51bb\u7ed3\u7684\u8d44\u91d1\uff0c\u6267\u884c\u8d26\u53f7\u6263\u6b3e\u3002Confirm \u65b9\u6cd5\u6267\u884c\u4e4b\u540e\uff0c\u8d26\u53f7 A \u5728\u4e00\u9636\u6bb5\u4e2d\u51bb\u7ed3\u7684 30 \u5143\u5df2\u7ecf\u88ab\u6263\u9664\uff0c\u8d26\u53f7 A \u4f59\u989d\u53d8\u6210 70 \u5143 \u3002"}),"\n",(0,c.jsx)(e.p,{children:"\u5982\u679c\u4e8c\u9636\u6bb5\u662f\u56de\u6eda\u7684\u8bdd\uff0c\u5c31\u9700\u8981\u5728 Cancel \u65b9\u6cd5\u5185\u91ca\u653e\u4e00\u9636\u6bb5 Try \u51bb\u7ed3\u7684 30 \u5143\uff0c\u4f7f\u8d26\u53f7 A \u7684\u56de\u5230\u521d\u59cb\u72b6\u6001\uff0c100 \u5143\u5168\u90e8\u53ef\u7528\u3002"}),"\n",(0,c.jsx)(e.p,{children:"\u7528\u6237\u63a5\u5165TCC\u6a21\u5f0f\uff0c\u6700\u91cd\u8981\u7684\u4e8b\u60c5\u5c31\u662f\u8003\u8651\u5982\u4f55\u5c06\u4e1a\u52a1\u6a21\u578b\u62c6\u6210 2 \u9636\u6bb5\uff0c\u5b9e\u73b0\u6210 TCC \u7684 3 \u4e2a\u65b9\u6cd5\uff0c\u5e76\u4e14\u4fdd\u8bc1 Try \u6210\u529f Confirm \u4e00\u5b9a\u80fd\u6210\u529f\u3002"}),"\n",(0,c.jsx)(e.p,{children:"Phoenix Transaction\u7684TCC\u6a21\u5f0f\u96c6\u7fa4\u4e2d\u5b9e\u9645\u4f7f\u7528\u65f6\u9700\u8981\u6ce8\u610f\u4e00\u4e0b\u51e0\u4e2a\u4e8b\u9879\u3002"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"\u8d85\u65f6\u573a\u666f"}),"\n",(0,c.jsx)(e.li,{children:"\u5e42\u7b49\u63a7\u5236"}),"\n",(0,c.jsx)(e.li,{children:"\u7a7a\u56de\u6eda"}),"\n",(0,c.jsx)(e.li,{children:"\u9632\u60ac\u6302"}),"\n"]}),"\n",(0,c.jsx)(e.h4,{id:"\u8d85\u65f6\u573a\u666f",children:"\u8d85\u65f6\u573a\u666f"}),"\n",(0,c.jsx)(e.p,{children:"Phoenix\u5728\u96c6\u7fa4\u72b6\u6001\u8fd0\u884c\u65f6\uff0c\u7f51\u7edc\u662f\u4e0d\u53ef\u9760\u7684\uff0c\u53ef\u80fd\u9047\u5230\u7f51\u7edc\u8d85\u65f6\uff0c\u6d88\u606f\u4e22\u5931\u7b49\u5404\u79cd\u5f02\u5e38\u573a\u666f\u3002\u8fd9\u79cd\u60c5\u51b5\u4f1a\u5bfc\u81f4Try\uff0cConfirm\uff0cCancel\u547d\u4ee4\u5f97\u4e0d\u5230\u5904\u7406\uff0c\u8fdb\u800c\u6574\u4e2a\u4e8b\u52a1\u4e0d\u80fd\u7ed3\u675f\u3002"}),"\n",(0,c.jsxs)(e.p,{children:["Phoenix Transaction\u5728\u5904\u7406\u8d85\u65f6\u573a\u666f\u65f6\u7684\u7b56\u7565\u662f\uff1a\u6bcf\u79d2\u5411\u524d\u91cd\u8bd5\uff0c\u5e76\u8fbe\u5230\u4e00\u5b9a\u6b21\u6570\u65f6\u56de\u6eda\u6216\u8005\u8fdb\u5165\u5f02\u5e38\u3002\u5982\u679c\u7528\u6237\u9700\u8981\u4e00\u76f4\u5411\u524d\u6062\u590d\uff0c\u5219\u8bbe\u7f6eTry\u6216\u8005Ti\u9636\u6bb5\u7684\u91cd\u8bd5\u6b21\u6570\u4e3a",(0,c.jsx)(e.code,{children:"Integer.MAX_VALUE"}),"\u3002"]}),"\n",(0,c.jsxs)(e.table,{children:[(0,c.jsx)(e.thead,{children:(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.th,{children:"\u547d\u4ee4\u7c7b\u578b"}),(0,c.jsx)(e.th,{children:"\u8d85\u65f6\u7b56\u7565"})]})}),(0,c.jsxs)(e.tbody,{children:[(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"Try"}),(0,c.jsx)(e.td,{children:"\u91cd\u8bd5N\u6b21\u540e\u4f1a\u9a71\u52a8\u6574\u4e2a\u4e8b\u52a1\u8fdb\u884c\u56de\u6eda(Cancel)"})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"Confirm"}),(0,c.jsx)(e.td,{children:"\u91cd\u8bd5N\u6b21\u540e\u4e8b\u52a1\u8fdb\u5165\u5f02\u5e38\uff0c\u63d0\u9192\u4eba\u5de5\u4ecb\u5165"})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"Cancel"}),(0,c.jsx)(e.td,{children:"\u91cd\u8bd5N\u6b21\u540e\u4e8b\u52a1\u8fdb\u5165\u5f02\u5e38\uff0c\u63d0\u9192\u4eba\u5de5\u4ecb\u5165"})]})]})]}),"\n",(0,c.jsx)(e.p,{children:"\u7528\u6237\u53ef\u5728\u8bbe\u7f6e\u547d\u4ee4\u65f6\u8bbe\u7f6e\u547d\u4ee4\u5bf9\u5e94\u7684\u91cd\u8bd5\u6b21\u6570\uff0c\u4e00\u822cConfirmCmd\u548cCancelCmd\u7684\u8d85\u65f6\u6b21\u6570\u8981\u5927\u4e00\u4e9b\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-java",children:" TccAction.builder()\n         .tryCmd(new AccountTryCmd(request.getAccountCode(), frozenAmt))\n         .confirmCmd(\n                 new AccountConfirmCmd(request.getAccountCode(), frozenAmt))\n         .cancelCmd(\n                 new AccountCancelCmd(request.getAccountCode(), frozenAmt))\n         .tryMaxRetryNum(2)\n         .confirmRetryNum(3)\n         .cancelRetryNum(3)\n"})}),"\n",(0,c.jsx)(e.h4,{id:"\u5e42\u7b49\u63a7\u5236",children:"\u5e42\u7b49\u63a7\u5236"}),"\n",(0,c.jsxs)(e.p,{children:["\u4e0a\u8ff0\u4ecb\u7ecd\u4e86\u8d85\u65f6\u91cd\u8bd5\uff0c\u90a3\u4e48Phoenix\u662f\u8981\u652f\u6301\u5e42\u7b49\u63a7\u5236\u624d\u53ef\u4ee5\uff0c\u4e0d\u7136\u5c31\u4f1a\u91cd\u590d\u5904\u7406\u6d88\u606f\u3002Phoenix\u6846\u67b6\u539f\u751f\u662f\u652f\u6301\u5e42\u7b49\u7684\uff0c\u53ef\u4ee5\u53c2\u8003\u6587\u6863",(0,c.jsx)(e.a,{href:"../phoenix-core/phoenix-core-entity-aggregate",children:"\u5b9e\u4f53\u805a\u5408\u6839"})]}),"\n",(0,c.jsx)(e.h4,{id:"\u7a7a\u56de\u6eda",children:"\u7a7a\u56de\u6eda"}),"\n",(0,c.jsx)(e.p,{children:"Cancel\u547d\u4ee4\u7684\u5904\u7406\u8981\u5141\u8bb8\u7a7a\u56de\u6eda\uff0c\u5728Try\u547d\u4ee4\u8d85\u65f6\u540e\u4e8b\u52a1\u4f1a\u8fdb\u5165\u56de\u6eda\u72b6\u6001(Try\u547d\u4ee4\u4e22\u5931)\uff0c\u8fd9\u65f6\u4f1a\u89e6\u53d1\u53d1\u9001Cancel\u547d\u4ee4\uff0c\u8fd9\u65f6\u5982\u679c\u6267\u884c\u4e86Cancel\u547d\u4ee4\u5c31\u4f1a\u5bfc\u81f4\u6570\u636e\u4e0d\u4e00\u81f4\u3002"}),"\n",(0,c.jsx)(e.p,{children:"Phoenix\u7684\u5b9e\u4f53\u805a\u5408\u6839\u5728\u6536\u5230Cancel\u547d\u4ee4\u65f6\u4f1a\u5224\u65ad\u5982\u679c\u5904\u7406\u8fc7Try\u624d\u4f1a\u6267\u884c\uff0c\u4e0d\u7136\u5219\u4f1a\u63d2\u5165\u4e00\u6761\u5047\u7684Try\u547d\u4ee4\u5e76\u4e14\u8fd4\u56de\u56de\u6eda\u6210\u529f\u3002 \u540c\u7406\uff0c\u5bf9\u4e8eSaga\u6a21\u5f0f\u4e00\u6837\uff0c\u5728\u6536\u5230Ci\u7684\u65f6\u5019\uff0c\u5982\u679c\u6ca1\u6709Ti\u5904\u7406\u8fc7\uff0c\u5219\u56de\u63d2\u5165\u4e00\u6761\u5047\u7684Ci\u547d\u4ee4\u6807\u8bc6\u5e76\u4e14\u8fd4\u56de\u56de\u6eda\u6210\u529f\u3002"}),"\n",(0,c.jsxs)(e.blockquote,{children:["\n",(0,c.jsxs)(e.p,{children:["\u63d2\u5165\u4e00\u6761\u5047\u7684\u547d\u4ee4\u4e3b\u8981\u662f\u4e3a\u4e86\u89e3\u51b3",(0,c.jsx)(e.code,{children:"\u60ac\u6302"}),"\u95ee\u9898\u3002"]}),"\n"]}),"\n",(0,c.jsx)(e.h4,{id:"\u9632\u60ac\u6302",children:"\u9632\u60ac\u6302"}),"\n",(0,c.jsxs)(e.p,{children:["\u60ac\u6302\u662f\u6307\u56de\u6eda\u547d\u4ee4\u5148\u4e0e\u5904\u7406\u547d\u4ee4\u5230\u8fbe\uff0c\u6bd4\u5982TCC\u4e2d",(0,c.jsx)(e.code,{children:"Cancel"}),"\u5148\u4e8e",(0,c.jsx)(e.code,{children:"Try"}),"\u5230\u8fbe\uff0cSaga\u4e2d",(0,c.jsx)(e.code,{children:"Ci"}),"\u5148\u4e8e",(0,c.jsx)(e.code,{children:"Ti"}),"\u5230\u8fbe\uff0c\u8be5\u573a\u666f\u4e0b\u7684\u5904\u7406\u7ed3\u679c\u90fd\u5e94\u5f53\u662f\u56de\u6eda\u6210\u529f\u3002\u4e0a\u6587\u63d0\u5230\uff0c\u5728\u56de\u6eda\u547d\u4ee4\u5148\u4e8e\u5904\u7406\u547d\u4ee4\u5230\u8fbe\u65f6\u4f1a\u4ea7\u751f\u4e00\u4e2a\u5047\u7684",(0,c.jsx)(e.code,{children:"\u5904\u7406\u547d\u4ee4"}),"\u6807\u8bb0\uff0c\u5f53\u771f\u7684\u5904\u7406\u547d\u4ee4\u518d\u6765\u4f1a\u88ab\u5e42\u7b49\u6389\u3002"]}),"\n",(0,c.jsx)(e.h3,{id:"saga\u6a21\u5f0f",children:"Saga\u6a21\u5f0f"}),"\n",(0,c.jsxs)(e.p,{children:["Phoenix Transaction\u4e5f\u63d0\u4f9b\u4e86Saga\u6a21\u5f0f\u7684\u539f\u751f\u652f\u6301\uff0cSaga\u6a21\u5f0f\u4e0eTCC\u6a21\u5f0f\u6700\u5927\u7684\u4e0d\u540c\u5728\u4e8e\u6ca1\u6709\u9884\u7559\u52a8\u4f5c\u9636\u6bb5\u4e86\uff0c\u8fd9\u6837\u4e5f\u8981\u6c42\u7528\u6237\u4f7f\u7528\u65f6\u8981\u8003\u8651\u4e1a\u52a1\u573a\u666f\u662f\u5426\u5408\u7406\u3002 \u6bd4\u5982",(0,c.jsx)(e.code,{children:"\u52a0\u94b1"}),"\u573a\u666f\u5c31\u4e0d\u5408\u7406\uff0c\u6ca1\u6709\u51bb\u7ed3\u8fd9\u4e00\u9636\u6bb5\u4f1a\u51fa\u73b0\u94b1\u5728Ti\u9636\u6bb5\u52a0\u4e0a\u4e86\u4f46\u662f\u5728Ci\u65f6\u94b1\u4e0d\u591f(\u56e0\u4e3aSaga\u4e8b\u52a1\u662f\u6ca1\u6709\u9694\u79bb\u6027\u7684\uff0c\u4f1a\u88ab\u522b\u7684\u4e8b\u52a1\u7528\u5230)\u3002"]}),"\n",(0,c.jsx)(e.p,{children:"Saga\u6a21\u5f0f\u4e2dCi\u7684\u6267\u884c\u4e0d\u5141\u8bb8\u51fa\u73b0\u5904\u7406\u5931\u8d25\u7684\u8fd4\u56de\u7ed3\u679c\uff0c\u4e0d\u7136\u6574\u4e2a\u4e8b\u52a1\u4f1a\u8fdb\u5165\u5f02\u5e38\u72b6\u6001\uff0c\u9700\u8981\u4eba\u5de5\u5904\u7406\u3002\u5b9e\u73b0\u65f6\u8981\u4fdd\u8bc1Ti-Ci\u548cCi->Ti\u6267\u884c\u7ed3\u679c\u90fd\u662f\u4e00\u6837\uff08\u4e8b\u52a1\u88ab\u56de\u6eda\u4e86\uff09\uff0c\u53c2\u8003\u9632\u60ac\u6302\u548c\u7a7a\u56de\u6eda\u7684\u4ecb\u7ecd\u3002"}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.img,{alt:"show",src:i(53498).Z+"",width:"1442",height:"694"})}),"\n",(0,c.jsxs)(e.p,{children:["\u53ef\u4ee5\u53c2\u8003",(0,c.jsx)(e.a,{href:"./phoenix-transaction-aggregate",children:"\u4f7f\u7528\u6587\u6863"}),"\u5b9a\u4e49\u4e8b\u52a1\u805a\u5408\u6839\u5e76\u8bbe\u7f6eSaga\u547d\u4ee4\u3002"]}),"\n",(0,c.jsx)(e.p,{children:"Phoenix Transaction\u7684Saga\u6a21\u5f0f\u96c6\u7fa4\u4e2d\u5b9e\u9645\u4f7f\u7528\u65f6\u540c\u6837\u9700\u8981\u6ce8\u610f\u4e00\u4e0b\u51e0\u4e2a\u4e8b\u9879\uff0c\u53c2\u8003\u4e0a\u6587\u63cf\u8ff0\u3002"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"\u8d85\u65f6\u573a\u666f"}),"\n",(0,c.jsx)(e.li,{children:"\u5e42\u7b49\u63a7\u5236"}),"\n",(0,c.jsx)(e.li,{children:"\u7a7a\u56de\u6eda"}),"\n",(0,c.jsx)(e.li,{children:"\u9632\u60ac\u6302"}),"\n"]}),"\n",(0,c.jsx)(e.h3,{id:"\u6df7\u7528\u6a21\u5f0f",children:"\u6df7\u7528\u6a21\u5f0f"}),"\n",(0,c.jsx)(e.p,{children:"\u65e0\u8bba\u662fSaga\u6a21\u5f0f\u8fd8\u662fTCC\u6a21\u5f0f\u5b9e\u5219\u90fd\u662f\u4e8c\u9636\u6bb5\u63d0\u4ea4\u7684\u4e1a\u52a1\u5c42\u5b9e\u73b0\uff0cPhoenix\u4e8b\u52a1\u6a21\u5757\u5b9e\u5219\u662f\u628a\u4e00\u4e2aTCC\u6216\u8005Saga\u4e8b\u52a1\u5f53\u505a\u5b50\u4e8b\u52a1\uff0c\u7531N\u4e2aTCC\u548cSaga\u7ec4\u6210\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u5f53\u505a\u5927\u4e8b\u52a1\u3002\u5b50\u4e8b\u52a1\u4f1a\u7684\u53d8\u5316\u4f1a\u9a71\u52a8\u5927\u4e8b\u52a1\u7684\u72b6\u6001\u66f4\u65b0\uff0c\u5927\u4e8b\u52a1\u5219\u4f1a\u8c03\u5ea6\u5b50\u4e8b\u52a1\u4ece\u4e00\u9636\u6bb5\u8fdb\u5165\u4e8c\u9636\u6bb5\u3002"}),"\n",(0,c.jsx)(e.p,{children:"TCC\u548cSaga\u7684\u4e00\u9636\u6bb5\u548c\u4e8c\u9636\u6bb5\u662f\u53ef\u4ee5\u5339\u914d\u8d77\u6765\u7684\u3002"}),"\n",(0,c.jsxs)(e.table,{children:[(0,c.jsx)(e.thead,{children:(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.th,{children:"\u4e8b\u52a1\u540d\u79f0"}),(0,c.jsx)(e.th,{children:"\u4e00\u9636\u6bb5"}),(0,c.jsx)(e.th,{children:"\u4e8c\u9636\u6bb5"})]})}),(0,c.jsxs)(e.tbody,{children:[(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"TCC"}),(0,c.jsx)(e.td,{children:"Try"}),(0,c.jsx)(e.td,{children:"Confirm or Cancel"})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"Saga"}),(0,c.jsx)(e.td,{children:"Ti"}),(0,c.jsx)(e.td,{children:"null or Ci"})]})]})]}),"\n",(0,c.jsx)(e.p,{children:"\u6240\u4ee5\u5728\u5b9e\u9645\u4f7f\u7528\u573a\u666f\u4e2d\uff0c\u53ef\u4ee5\u652f\u6301\u4e00\u4e2a\u4e8b\u52a1\u805a\u5408\u6839\u540c\u65f6\u5305\u542bTCC\u548cSaga\u7684\u5904\u7406\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-java",children:'    @TransactionStart\n    public TransactionReturn on(BuyGoodsCmd request) {\n        this.request = request;\n        double frozenAmt = request.getQty() * request.getPrice();\n        return TransactionReturn.builder()\n                 // TCC\u5b50\u4e8b\u52a1\n                .addAction(\n                        TccAction.builder()\n                                .tryCmd(new AccountTryCmd(request.getAccountCode(), frozenAmt))\n                                .confirmCmd(\n                                        new AccountConfirmCmd(request.getAccountCode(), frozenAmt))\n                                .cancelCmd(\n                                        new AccountCancelCmd(request.getAccountCode(), frozenAmt))\n                                .build())\n                 // Saga\u5b50\u4e8b\u52a1\n                .addAction(\n                        SagaAction.builder()\n                                .targetTopic("")\n                                .tiCmd(new GoodsSellCmd(request.getGoodsCode(), request.getQty()))\n                                .ciCmd(\n                                        new GoodsSellCompensateCmd(\n                                                request.getGoodsCode(), request.getQty()))\n                                .build())\n                .build();\n    }\n'})}),"\n",(0,c.jsx)(e.h2,{id:"\u603b\u7ed3\u5c55\u671b",children:"\u603b\u7ed3\u5c55\u671b"}),"\n",(0,c.jsx)(e.p,{children:"\u672c\u6587\u5148\u5206\u6790\u4e86Phoenix\u7684\u5b9e\u4f53\u805a\u5408\u6839\u7684\u672c\u5730\u4e8b\u52a1\uff0c\u53c8\u5206\u522b\u4ecb\u7ecd\u4e86Phoenix\u51fa\u73b0\u5206\u5e03\u5f0f\u4e8b\u52a1\u7684\u573a\u666f\u4ee5\u53ca\u7406\u8bba\u57fa\u7840\uff0c\u7136\u540e\u91cd\u70b9\u4ecb\u7ecd\u4e86Phoenix\u4e8b\u52a1\u805a\u5408\u6839\u7684\u539f\u7406\u548c\u4f7f\u7528\u573a\u666f\u3002"}),"\n",(0,c.jsx)(e.p,{children:"Phoenix\u4f5c\u4e3a\u4e00\u6b3eDDD\u5f00\u53d1\u6846\u67b6\uff0c\u672c\u5730\u4e8b\u52a1\u7684\u5904\u7406\u5e76\u6ca1\u6709\u4f9d\u8d56\u5173\u7cfb\u578b\u6570\u636e\u5e93\uff0c\u6240\u4ee5\u5206\u5e03\u5f0f\u4e8b\u52a1\u81ea\u7136\u4ece\u4e1a\u52a1\u6846\u67b6\u5c42\u9762\u89e3\u51b3\uff0c\u5f53\u7136\u8fd9\u4e5f\u662f\u76ee\u524d\u591a\u6570\u573a\u666f\u4f7f\u7528\u7684\u65b9\u6848\uff0c\u67d4\u6027\u4e8b\u52a1\u7684\u597d\u5904\u662f\u8fdc\u8fdc\u5927\u4e8e\u521a\u6027\u4e8b\u52a1\u7684\u3002"})]})}function x(n={}){const{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(o,{...n})}):o(n)}},75888:(n,e,i)=>{i.d(e,{Z:()=>c});const c=i.p+"assets/images/001-5257fabff54dccc846b13c0cb4e08418.png"},55408:(n,e,i)=>{i.d(e,{Z:()=>c});const c=i.p+"assets/images/002-643d5efddc229773b8389628cd7baba4.png"},43816:(n,e,i)=>{i.d(e,{Z:()=>c});const c=i.p+"assets/images/003-60402388d404372f610c5972eb827e26.png"},7768:(n,e,i)=>{i.d(e,{Z:()=>c});const c=i.p+"assets/images/004-7ffa1c6cd4949af749a47cb94d104661.png"},53498:(n,e,i)=>{i.d(e,{Z:()=>c});const c=i.p+"assets/images/005-6161236344b408dcbafdb00fa425e7e1.png"},52726:(n,e,i)=>{i.d(e,{Z:()=>c});const c=i.p+"assets/images/006-d8a43295fc7ad64119cabe1fb333580a.png"},11151:(n,e,i)=>{i.d(e,{Z:()=>l,a:()=>r});var c=i(67294);const d={},s=c.createContext(d);function r(n){const e=c.useContext(s);return c.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:r(n.components),c.createElement(s.Provider,{value:e},n.children)}}}]);