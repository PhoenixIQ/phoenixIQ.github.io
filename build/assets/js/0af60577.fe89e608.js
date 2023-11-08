"use strict";(self.webpackChunkphoenix_website_next=self.webpackChunkphoenix_website_next||[]).push([[16172],{67524:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>r,default:()=>o,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var i=s(85893),d=s(11151);const t={id:"performance-test-2x",title:"\u6027\u80fd\u6d4b\u8bd5"},r=void 0,c={id:"phoenix-2.x/phoenix-test/performance-test-2x",title:"\u6027\u80fd\u6d4b\u8bd5",description:"\u6982\u8ff0",source:"@site/versioned_docs/version-2.2.4/phoenix-2.x/05-phoenix-test/02-performance.md",sourceDirName:"phoenix-2.x/05-phoenix-test",slug:"/phoenix-2.x/phoenix-test/performance-test-2x",permalink:"/docs/2.2.4/phoenix-2.x/phoenix-test/performance-test-2x",draft:!1,unlisted:!1,editUrl:"https://github.com/PhoenixIQ/versioned_docs/version-2.2.4/phoenix-2.x/05-phoenix-test/02-performance.md",tags:[],version:"2.2.4",sidebarPosition:2,frontMatter:{id:"performance-test-2x",title:"\u6027\u80fd\u6d4b\u8bd5"},sidebar:"docs",previous:{title:"\u529f\u80fd\u6027\u6d4b\u8bd5",permalink:"/docs/2.2.4/phoenix-2.x/phoenix-test/features-test-2x"},next:{title:"\u53ef\u7528\u6027\u6d4b\u8bd5",permalink:"/docs/2.2.4/phoenix-2.x/phoenix-test/available-test-2x"}},h={},l=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u6d4b\u8bd5\u65b9\u6848",id:"\u6d4b\u8bd5\u65b9\u6848",level:2},{value:"\u6d4b\u8bd5\u6b65\u9aa4",id:"\u6d4b\u8bd5\u6b65\u9aa4",level:2},{value:"\u6d4b\u8bd5\u7ed3\u679c",id:"\u6d4b\u8bd5\u7ed3\u679c",level:2},{value:"\u7ed3\u8bba",id:"\u7ed3\u8bba",level:2}];function x(e){const n={blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u6982\u8ff0",children:"\u6982\u8ff0"}),"\n",(0,i.jsx)(n.p,{children:"\u9ad8\u6027\u80fd\u662fPhoenix\u7684\u91cd\u8981\u7279\u6027\uff0cPhoenix\u4f7f\u7528\u5185\u5b58\u8ba1\u7b97\u6280\u672f\u4fdd\u969c\u5355\u7b14\u4e8b\u52a1\u5904\u7406\u7684\u4f4e\u5ef6\u8fdf\uff0c\u901a\u8fc7\u6a2a\u5411\u6269\u5bb9\u6280\u672f\u53ef\u4ee5\u4fdd\u969c\u670d\u52a1\u7684\u9ad8\u541e\u5410\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u7cfb\u7edf\u7684\u6027\u80fd\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u4e24\u4e2a\u6307\u6807\u8861\u91cf\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u541e\u5410\uff1a\u6307\u7cfb\u7edf\u6bcf\u79d2\u53ef\u4ee5\u5e76\u53d1\u5904\u7406\u4e8b\u52a1\u7684\u4e2a\u6570\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u65f6\u5ef6\uff1a\u6307\u6bcf\u7b14\u4e8b\u52a1\u5904\u7406\u7684\u8017\u65f6\u60c5\u51b5\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u672c\u7bc7\u6587\u7ae0\u6d4b\u8bd5\u4f1a\u4fdd\u8bc1\u65f6\u5ef6\u7a33\u5b9a\u4e14\u5728\u767e\u6beb\u79d2\u5de6\u53f3\u65f6\uff0c\u8bb0\u5f55\u7cfb\u7edf\u5904\u7406\u7684\u541e\u5410\u91cf\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u6d4b\u8bd5\u65b9\u6848",children:"\u6d4b\u8bd5\u65b9\u6848"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u6d4b\u8bd5\u5206\u652f\u4e3abenchmark:7285f2d7930f979c955c503b55d9f012536a1bae,\u5173\u95ed\u81ea\u52a8\u6253\u5feb\u7167\u7b56\u7565\u548c\u8d85\u65f6\u91cd\u4f20\u7b56\u7565\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Phoenix\u7684\u6027\u80fd\u548c\u8fd0\u884c\u7684\u4e1a\u52a1\u5f62\u6001\u6709\u5bc6\u5207\u5173\u7cfb\uff0c\u672c\u6b21\u6d4b\u8bd5\u91c7\u7528",(0,i.jsx)(n.code,{children:"\u94f6\u884c\u8d26\u6237\u5212\u62e8"}),"\u6848\u4f8b\uff0c\u53ef\u4ee5\u901a\u8fc7\u538b\u6d4b\u7a0b\u5e8f\u968f\u673a\u6279\u91cf\u53d1\u8d77",(0,i.jsx)(n.code,{children:"\u5212\u5165"}),"\u6216",(0,i.jsx)(n.code,{children:"\u5212\u51fa"}),"\u7684\u8bf7\u6c42\u3002 \u6d4b\u8bd5\u8fc7\u7a0b\u4e2d\u4f7f\u7528Kubernetes\u9650\u5236CPU\u3001\u5185\u5b58\u3001\u5b9e\u4f8b\u4e2a\u6570\uff0c\u5728\u4fdd\u8bc1\u65f6\u5ef6\u7a33\u5b9a\u7684\u524d\u63d0\u4e0b\uff0c\n\u4e0d\u65ad\u8c03\u6574\u7cfb\u7edf\u53c2\u6570\u6765\u8fbe\u5230\u6700\u4f18\u7684\u541e\u5410\u91cf\u3002\u7136\u540e\u9010\u6b65\u589e\u52a0\u786c\u4ef6\u8d44\u6e90\uff0c\u91cd\u590d\u538b\u6d4b\uff0c\u8bb0\u5f55\u4e0b\u6700\u4f18\u7684\u7cfb\u7edf\u5904\u7406\u60c5\u51b5\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u6211\u4eec\u4f7f\u7528Kubernetes\u914d\u5408Phoenix-admin\u76d1\u63a7\u6bcf\u4e00\u6b21\u6d4b\u8bd5\u4e2d\u5e94\u7528\u7684CPU\u4f7f\u7528\u7387\uff0c\u5185\u5b58GC\u60c5\u51b5\uff0c\u5904\u7406\u8017\u65f6\u56fe\uff0c\u901f\u7387\u7edf\u8ba1\u56fe\u7b49\u7b49\uff0c\u4e0b\u9762\u6b65\u9aa4\u4e2d\u4f1a\u9010\u6b65\u6f14\u793a\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u6d4b\u8bd5\u6b65\u9aa4",children:"\u6d4b\u8bd5\u6b65\u9aa4"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u4f7f\u7528Rancher\u63a7\u5236Kubernetes\u4e2dpod\u8d44\u6e90"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"show",src:s(64891).Z+"",width:"1612",height:"348"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"\u4f7f\u7528\u538b\u6d4b\u7a0b\u5e8f\u63a7\u5236\u538b\u6d4b\u53c2\u6570\u53d1\u8d77\u538b\u6d4b"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"show",src:s(20163).Z+"",width:"444",height:"163"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"\u5f85\u7a0b\u5e8f\u538b\u6d4b\u5b8c\u6bd5\u540e, \u901a\u8fc7Grafana\u89c2\u5bdf\u8bb0\u5f55\u65f6\u5ef6\u548c\u541e\u5410\u91cf"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"show",src:s(7048).Z+"",width:"2476",height:"956"})}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsx)(n.li,{children:"\u5f85\u7a0b\u5e8f\u538b\u6d4b\u5b8c\u6bd5\u540e\uff0c\u901a\u8fc7Rancher\u89c2\u5bdf\u8bb0\u5f55CPU\u4f7f\u7528\u60c5\u51b5"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"show",src:s(47967).Z+"",width:"646",height:"363"})}),"\n",(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsx)(n.li,{children:"\u5f85\u7a0b\u5e8f\u538b\u6d4b\u5b8c\u6bd5\u540e\uff0c\u901a\u8fc7Grafana\u89c2\u5bdf\u8bb0\u5f55\u5185\u5b58GC\u60c5\u51b5"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"show",src:s(8259).Z+"",width:"2468",height:"563"})}),"\n",(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsx)(n.li,{children:"\u5f85\u7a0b\u5e8f\u538b\u6d4b\u5b8c\u6bd5\u540e\uff0c\u901a\u8fc7Grafana\u89c2\u5bdf\u8bb0\u5f55\u7ebf\u7a0b\u4f7f\u7528\u60c5\u51b5"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"show",src:s(21748).Z+"",width:"1254",height:"304"})}),"\n",(0,i.jsxs)(n.ol,{start:"7",children:["\n",(0,i.jsx)(n.li,{children:"\u8bb0\u5f55\u4e0a\u8ff0\u7ed3\u679c, \u589e\u500d\u7cfb\u7edf\u8d44\u6e90\uff0c\u91cd\u65b0\u8c03\u4f18\u4f7f\u7528\u7cfb\u7edf\u5728\u6027\u80fd\u4e0a\u7ffb\u500d\u3002\u91cd\u590d\u4e0a\u8ff01~6\u6b65\u9aa4"}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u6ce8\u610f: \u6d4b\u8bd5\u8fc7\u7a0b\u4e2d\u9700\u8981\u8fdb\u884c\u7a0b\u5e8f\u7684\u9884\u70ed\uff0c\u6bd4\u5982\u51c6\u5907\u538b\u6d4b10\u805a\u5408\u6839\u7684\u8bdd\uff0c\u9700\u8981\u4ee5\u4e2d\u4f4e\u7684\u538b\u529b\u9884\u70ed1\u5206\u949f\u518d\u8fdb\u884c\u538b\u6d4b"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u6d4b\u8bd5\u7ed3\u679c",children:"\u6d4b\u8bd5\u7ed3\u679c"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"CPU\u89c4\u683c: Intel(R) Xeon(R) CPU E5-2620 v4 @ 2.10GHz"}),"\n"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u538b\u6d4b\u53c2\u6570(\u6d88\u606f\u603b\u91cf/TPS/\u805a\u5408\u6839\u8303\u56f4)"}),(0,i.jsx)(n.th,{children:"\u5b9e\u4f8b\u4e2a\u6570"}),(0,i.jsx)(n.th,{children:"\u786c\u4ef6\u914d\u7f6e"}),(0,i.jsx)(n.th,{children:"\u7ebf\u7a0b\u6c60\u914d\u7f6e"}),(0,i.jsx)(n.th,{children:"DB\u914d\u7f6e"}),(0,i.jsx)(n.th,{children:"MQ\u914d\u7f6e"}),(0,i.jsx)(n.th,{children:"\u5e73\u5747\u65f6\u5ef6"}),(0,i.jsx)(n.th,{children:"CPU\u4f7f\u7528\u7387"}),(0,i.jsx)(n.th,{children:"GC\u8017\u65f6"}),(0,i.jsx)(n.th,{children:"\u5907\u6ce8"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"40W/2000/10"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"1Core 2048MB"}),(0,i.jsx)(n.td,{children:"ForkJoin64"}),(0,i.jsx)(n.td,{children:"2\u5b9e\u4f8b"}),(0,i.jsx)(n.td,{children:"1\u5b9e\u4f8b4parttion"}),(0,i.jsx)(n.td,{children:"100MS"}),(0,i.jsx)(n.td,{children:"100%+"}),(0,i.jsx)(n.td,{children:"20S"}),(0,i.jsx)(n.td,{children:"GC\u9ad8\u662f\u56e0\u4e3aCPU\u4e0d\u591f\u7528"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"80W/4000/10"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"2Core 2048MB"}),(0,i.jsx)(n.td,{children:"ForkJoin64"}),(0,i.jsx)(n.td,{children:"2\u5b9e\u4f8b"}),(0,i.jsx)(n.td,{children:"1\u5b9e\u4f8b4parttion"}),(0,i.jsx)(n.td,{children:"100MS"}),(0,i.jsx)(n.td,{children:"80%"}),(0,i.jsx)(n.td,{children:"6S"}),(0,i.jsx)(n.td,{children:"\u6b63\u5e38"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"120W/6000/20"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"4Core 2048MB"}),(0,i.jsx)(n.td,{children:"ForkJoin64"}),(0,i.jsx)(n.td,{children:"2\u5b9e\u4f8b"}),(0,i.jsx)(n.td,{children:"1\u5b9e\u4f8b4parttion"}),(0,i.jsx)(n.td,{children:"100MS"}),(0,i.jsx)(n.td,{children:"50%"}),(0,i.jsx)(n.td,{children:"6S"}),(0,i.jsx)(n.td,{children:"\u6b63\u5e38"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"160W/8000/20"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"4Core 2048MB"}),(0,i.jsx)(n.td,{children:"ForkJoin64"}),(0,i.jsx)(n.td,{children:"2\u5b9e\u4f8b"}),(0,i.jsx)(n.td,{children:"1\u5b9e\u4f8b4parttion"}),(0,i.jsx)(n.td,{children:"100MS"}),(0,i.jsx)(n.td,{children:"70%"}),(0,i.jsx)(n.td,{children:"8S"}),(0,i.jsx)(n.td,{children:"\u6b63\u5e38"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"320W/16000/40"}),(0,i.jsx)(n.td,{children:"4"}),(0,i.jsx)(n.td,{children:"6Core 2048MB"}),(0,i.jsx)(n.td,{children:"ForkJoin64"}),(0,i.jsx)(n.td,{children:"2\u5b9e\u4f8b"}),(0,i.jsx)(n.td,{children:"1\u5b9e\u4f8b4parttion"}),(0,i.jsx)(n.td,{children:"100MS"}),(0,i.jsx)(n.td,{children:"70%"}),(0,i.jsx)(n.td,{children:"9S"}),(0,i.jsx)(n.td,{children:"\u5173\u95ed\u53ef\u9760\u6027\u6295\u9012\u5904\u7406\u903b\u8f91"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"20.4W/3400/1"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"4Core 2048MB"}),(0,i.jsx)(n.td,{children:"ForkJoin64"}),(0,i.jsx)(n.td,{children:"2\u5b9e\u4f8b"}),(0,i.jsx)(n.td,{children:"1\u5b9e\u4f8b4parttion"}),(0,i.jsx)(n.td,{children:"100MS"}),(0,i.jsx)(n.td,{children:"20%+"}),(0,i.jsx)(n.td,{children:"2S"}),(0,i.jsxs)(n.td,{children:["\u5355\u805a\u5408\u6839\u573a\u666f(\u6279\u5904\u7406\uff1a",(0,i.jsx)(n.code,{children:"PerformanceConfig.BATCH_PROCESS=500"})," )"]})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"\u7ed3\u8bba",children:"\u7ed3\u8bba"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u76ee\u524dPhoenix\u4f7f\u752824\u4e2a\u6838\u5fc3\u505a\u5230\u4e861w6\u7684TPS\uff0c\u7531\u4e8e1w6\u7684\u6574\u4f53TPS\u5df2\u7ecf\u63a5\u8fd1\u4e8e\u6570\u636e\u5e93\u4e0a\u9650\uff0c\u6240\u4ee5\u5c31\u6ca1\u6709\u7ee7\u7eed\u5f80\u4e0b\u6d4b\u8bd5\u3002"}),"\n",(0,i.jsx)(n.li,{children:"Phoenix\u57281w6TPS\u4ee5\u4e0b\uff0c\u53ef\u4ee5\u901a\u8fc7\u589e\u52a0\u5b9e\u4f8b\u6570\u548cCPU\u6570\u91cf\uff0c\u63d0\u5347TPS\uff0c\u6574\u4f53\u63d0\u5347\u6548\u679c\u7ebf\u6027\u7a0b\u5ea6\u6bd4\u8f83\u9ad8\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u6574\u4e2a\u538b\u6d4b\u8fc7\u7a0b\u4e2d\u90fd\u7ec6\u81f4\u7684\u505a\u4e86\u8bb0\u5f55\uff0c\u540c\u65f6\u4e5f\u89c2\u5bdf\u4e86\u6d88\u606f\u7684\u6570\u91cf\uff0c\u76ee\u524d\u6240\u6709\u7684\u6d88\u606f\u90fd\u53ef\u4ee5\u6b63\u786e\u7684\u5904\u7406\u3002"}),"\n",(0,i.jsx)(n.li,{children:"Phoenix\u6846\u67b6\u4e2dEventStore\u662f\u51e0\u4e2a\u5904\u7406\u5355\u5143\u7684\u7ade\u4e89\u70b9\uff0c\u8fd9\u548cactor\u6a21\u578b\u601d\u60f3\u6709\u70b9\u8fdd\u80cc\uff0c\u5e94\u8be5\u62c6\u5206\u8fd9\u4e9b\u70b9\uff0c\u6d88\u9664\u7ade\u4e89\uff0c\u53ef\u4ee5\u66f4\u9ad8\u7684\u63d0\u5347\u6027\u80fd\u3002"}),"\n",(0,i.jsx)(n.li,{children:"Phoenix\u662f\u5185\u5b58\u8ba1\u7b97\u6846\u67b6\uff0c\u6846\u67b6\u5c42\u9700\u8981\u5c0f\u5fc3\u7ec6\u81f4\u7684\u4f7f\u7528\u5185\u5b58\uff0c\u4ece\u4e0a\u9762\u770b\u5185\u5b58\u7684GC\u4e5f\u662f\u5f71\u54cd\u7cfb\u7edf\u7684\u5173\u952e\u56e0\u7d20\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u57281w6TPS\u4ee5\u4e0b\u538b\u6d4b\u8fd8\u672a\u8fbe\u5230\u4f9d\u8d56\u57fa\u7840\u4e2d\u95f4\u4ef6\u7684\u6027\u80fd\u74f6\u9888\uff0c\u5982\u679c\u540e\u7eed\u8981\u63a5\u7740\u505a\u7a81\u7834\u6027\u6d4b\u8bd5\uff0c\u9700\u8981\u6709\u80fd\u529b\u76d1\u63a7\u597d\u6570\u636e\u5e93\uff0cMQ\u7b49\u3002\u540c\u65f6\u9700\u8981\u4f7f\u7528\u5927\u5bb9\u91cf\u7684\u56fa\u6001\u786c\u76d8\u90e8\u7f72ES\uff0c\u589e\u52a0\u76d1\u63a7\u6307\u6807\u7684\u5199\u5165\u901f\u5ea6\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u76ee\u524d\u6d4b\u8bd5\u8fc7\u7a0b\u4e2d\u4f1a\u53d1\u73b0\u5b9e\u4f8b\u5904\u7406\u80fd\u529b\u4e0d\u4e00\u81f4\u7684\u60c5\u51b5\uff0c\u4f46\u662f\u6bcf\u4e2a\u5b9e\u4f8b\u63a5\u6536\u7684\u6d41\u91cf\u90fd\u662f\u76f8\u540c\u7684\uff0c\u8fd9\u4e2a\u6682\u65f6\u8fd8\u6ca1\u6709\u627e\u5230\u95ee\u9898\u89e3\u51b3\u3002"}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},64891:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/001-d934e4615e23f8f03db813c874dd7a51.png"},20163:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/002-c390a580e926cad6cea0b8d1084ff099.png"},7048:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/003-9f9054c749b147e086a3f39f0ad19ef0.png"},47967:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/004-1e292d06a387c3ba154da4ed8ef8db13.png"},8259:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/005-24b1c0485b0ee57aa74c98f177fa7ebc.png"},21748:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/006-bc88c9f5399ee061f491fe9a3b93f92b.png"},11151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>r});var i=s(67294);const d={},t=i.createContext(d);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);