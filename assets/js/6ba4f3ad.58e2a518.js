"use strict";(self.webpackChunkphoenixiq_github_io=self.webpackChunkphoenixiq_github_io||[]).push([[36972],{22271:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>a,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var s=i(85893),t=i(11151);const c={id:"reliability-test",title:"\u53ef\u9760\u6027\u6d4b\u8bd5"},l=void 0,d={id:"phoenix-test/reliability-test",title:"\u53ef\u9760\u6027\u6d4b\u8bd5",description:"\u6982\u8ff0",source:"@site/versioned_docs/version-2.6.0/06-phoenix-test/05-reliability.md",sourceDirName:"06-phoenix-test",slug:"/phoenix-test/reliability-test",permalink:"/docs/2.6.0/phoenix-test/reliability-test",draft:!1,unlisted:!1,editUrl:"https://github.com/PhoenixIQ/versioned_docs/version-2.6.0/06-phoenix-test/05-reliability.md",tags:[],version:"2.6.0",sidebarPosition:5,frontMatter:{id:"reliability-test",title:"\u53ef\u9760\u6027\u6d4b\u8bd5"},sidebar:"docs",previous:{title:"\u4f38\u7f29\u6027\u6d4b\u8bd5",permalink:"/docs/2.6.0/phoenix-test/elasticity-test"},next:{title:"\u538b\u529b\u6d4b\u8bd5",permalink:"/docs/2.6.0/phoenix-test/pressure-test"}},r={},h=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u5904\u7406\u53ef\u9760\u6027\u6d4b\u8bd5",id:"\u5904\u7406\u53ef\u9760\u6027\u6d4b\u8bd5",level:2},{value:"\u6d4b\u8bd5\u573a\u666f",id:"\u6d4b\u8bd5\u573a\u666f",level:3},{value:"\u6821\u9a8c\u65b9\u6cd5",id:"\u6821\u9a8c\u65b9\u6cd5",level:3},{value:"\u6d4b\u8bd5\u6b65\u9aa4",id:"\u6d4b\u8bd5\u6b65\u9aa4",level:3},{value:"\u91cd\u542f\u53ef\u9760\u6027\u6d4b\u8bd5",id:"\u91cd\u542f\u53ef\u9760\u6027\u6d4b\u8bd5",level:2},{value:"\u6d4b\u8bd5\u573a\u666f",id:"\u6d4b\u8bd5\u573a\u666f-1",level:3},{value:"\u6821\u9a8c\u65b9\u6cd5",id:"\u6821\u9a8c\u65b9\u6cd5-1",level:3},{value:"\u6d4b\u8bd5\u6b65\u9aa4",id:"\u6d4b\u8bd5\u6b65\u9aa4-1",level:3},{value:"\u6295\u9012\u53ef\u9760\u6027\u6d4b\u8bd5",id:"\u6295\u9012\u53ef\u9760\u6027\u6d4b\u8bd5",level:2},{value:"\u6d4b\u8bd5\u573a\u666f",id:"\u6d4b\u8bd5\u573a\u666f-2",level:3},{value:"\u6821\u9a8c\u65b9\u6cd5",id:"\u6821\u9a8c\u65b9\u6cd5-2",level:3},{value:"\u6d4b\u8bd5\u6b65\u9aa4",id:"\u6d4b\u8bd5\u6b65\u9aa4-2",level:3},{value:"\u7ed3\u8bba",id:"\u7ed3\u8bba",level:2}];function o(e){const n={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u6982\u8ff0",children:"\u6982\u8ff0"}),"\n",(0,s.jsx)(n.p,{children:"\u53ef\u9760\u6027\u6307\u7684\u662f\u8f6f\u4ef6\u7cfb\u7edf\u5728\u89c4\u5b9a\u7684\u65f6\u95f4\u5185\u4ee5\u53ca\u89c4\u5b9a\u7684\u73af\u5883\u6761\u4ef6\u4e0b\uff0c\u5b8c\u6210\u89c4\u5b9a\u529f\u80fd\u7684\u80fd\u529b\u3002Phoenix \u662f\u4e00\u4e2a\u6d88\u606f\u9a71\u52a8\u7684\u6709\u72b6\u6001\u5fae\u670d\u52a1\u6846\u67b6\uff0c\u5176\u53ef\u9760\u6027\u6211\u4eec\u91cd\u70b9\u5173\u5fc3\u4ee5\u4e0b\u51e0\u4e2a\u80fd\u529b:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u5904\u7406\u53ef\u9760\u6027:\u4f7f\u7528\u6848\u4f8b\u53d1\u8d77\u4e00\u7b14\u540c\u6b65\u8c03\u7528\uff0c\u5982\u679c\u8c03\u7528\u6210\u529f\uff0c\u5fc5\u5b9a\u80fd\u67e5\u8be2\u5230\u8c03\u7528\u5904\u7406\u7684\u7ed3\u679c\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u91cd\u542f\u53ef\u9760\u6027: Phoenix \u4e3a\u4e86\u4fdd\u8bc1\u5185\u5b58\u72b6\u6001\uff0c\u4f1a\u5728\u91cd\u542f\u540e\u505a EventSourcing\uff0c\u9700\u8981\u6d4b\u8bd5\u91cd\u542f\u540e\uff0cEventSourcing \u662f\u5426\u6b63\u5e38\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u6295\u9012\u53ef\u9760\u6027: Phoenix \u53ef\u4ee5\u4fdd\u969c\u6240\u6709\u5230\u8fbe Kafka \u7684\u6d88\u606f\u53ef\u9760\u7684\u6d88\u8d39\uff0c\u5e76\u4e14\u53ef\u4ee5\u4fdd\u8bc1\u540e\u7eed\u6bcf\u4e00\u4e2a Actor \u7684\u6700\u5c11\u4e00\u6b21\u6295\u9012\uff0c\u5e76\u4e14 Phoenix \u5185\u7f6e\u6d88\u606f\u5e42\u7b49\u53ef\u4ee5\u4fdd\u969c\u6d88\u606f\u53ef\u9760\u5904\u7406\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u4e0b\u9762\u5206\u522b\u5bf9\u4e0a\u8ff0\u7ef4\u5ea6\u7684\u53ef\u9760\u6027\u8fdb\u884c\u6d4b\u8bd5\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u5904\u7406\u53ef\u9760\u6027\u6d4b\u8bd5",children:"\u5904\u7406\u53ef\u9760\u6027\u6d4b\u8bd5"}),"\n",(0,s.jsx)(n.h3,{id:"\u6d4b\u8bd5\u573a\u666f",children:"\u6d4b\u8bd5\u573a\u666f"}),"\n",(0,s.jsx)(n.p,{children:"Phoenix \u6846\u67b6\u5904\u7406\u53ef\u9760\u6027\u57fa\u4e8e bank-account \u670d\u52a1\u8fdb\u884c\u3002\u6211\u4eec\u901a\u8fc7\u6a21\u62df\u4e00\u7b14\u8f6c\u8d26\u6307\u4ee4\uff0c\u89c2\u5bdf\u7cfb\u7edf\u5904\u7406\u7ed3\u679c\u540e\u7684\u524d\u7aef\u9875\u9762\uff0c\u8bc1\u660e Phoenix \u53ef\u4ee5\u6b63\u786e\u5904\u7406\u8bf7\u6c42\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u6821\u9a8c\u65b9\u6cd5",children:"\u6821\u9a8c\u65b9\u6cd5"}),"\n",(0,s.jsx)(n.p,{children:"\u89c2\u5bdf account-server \u670d\u52a1\u7684\u524d\u7aef\u9875\u9762\uff0c\u6700\u7ec8\u7684\u5904\u7406\u7ed3\u679c\u65e0\u8bef\u5219\u8bc1\u660e Phoenix \u5177\u6709\u5904\u7406\u53ef\u9760\u6027\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u6d4b\u8bd5\u6b65\u9aa4",children:"\u6d4b\u8bd5\u6b65\u9aa4"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528 bank-account \u670d\u52a1\uff0c\u5728\u524d\u7aef\u53d1\u8d77\u4e00\u7b14\u8f6c\u8d26\u3002[account_1] \u7ed9\u8d26\u6237 [account_2] \u8f6c\u8d26 100 \u5143\u7b49\u5f85\u8bf7\u6c42\u8fd4\u56de\u3002\n",(0,s.jsx)(n.img,{alt:"show",src:i(76882).Z+"",width:"1631",height:"758"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u8bf7\u6c42\u8fd4\u56de\u7ed3\u679c\u4e3a\u8f6c\u8d26\u6210\u529f\u540e\uff0c\u5237\u65b0\u524d\u7aef\u9875\u9762\u6570\u636e\uff0c\u67e5\u770b\u6240\u6709\u8d26\u6237\u7684\u8d44\u91d1\u6570\u636e\u3002\n",(0,s.jsx)(n.img,{alt:"show",src:i(95247).Z+"",width:"1583",height:"762"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u7531\u67e5\u8be2\u7ed3\u679c\u53ef\u77e5\uff0c\u8d26\u6237 [account_1] \u7684\u6700\u7ec8\u91d1\u989d\u4e3a 900 \u5143\uff0c\u8d26\u6237 [account_2] \u7684\u6700\u7ec8\u91d1\u989d\u4e3a 1100 \u5143\uff08\u6bcf\u4e2a\u8d26\u6237\u9ed8\u8ba4\u6709 1000 \u5143\u7684\u521d\u59cb\u8d44\u91d1\uff09\u3002Phoenix \u6b63\u786e\u5904\u7406\u4e86\u524d\u7aef\u8bf7\u6c42\uff0c\u5177\u6709\u5904\u7406\u53ef\u9760\u6027\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u91cd\u542f\u53ef\u9760\u6027\u6d4b\u8bd5",children:"\u91cd\u542f\u53ef\u9760\u6027\u6d4b\u8bd5"}),"\n",(0,s.jsx)(n.h3,{id:"\u6d4b\u8bd5\u573a\u666f-1",children:"\u6d4b\u8bd5\u573a\u666f"}),"\n",(0,s.jsx)(n.p,{children:"Phoenix \u6846\u67b6\u91cd\u542f\u53ef\u9760\u6027\u57fa\u4e8e bank-account \u793a\u4f8b\u5e94\u7528\u8fdb\u884c\u3002\u901a\u8fc7\u6a21\u62df\u5e94\u7528\u5904\u7406\u5b8c\u6bd5\u6279\u91cf\u8bf7\u6c42\u540e\uff0c\u8fdb\u884c\u670d\u52a1\u91cd\u542f\u3002\u8bc1\u660e\u91cd\u542f\u5b8c\u6bd5\u540e\uff0c\u5e94\u7528\u6570\u636e\u80fd\u6062\u590d\u5230\u91cd\u542f\u524d\u7684\u72b6\u6001\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u6821\u9a8c\u65b9\u6cd5-1",children:"\u6821\u9a8c\u65b9\u6cd5"}),"\n",(0,s.jsx)(n.p,{children:"\u89c2\u5bdf account-server \u670d\u52a1\u5904\u7406\u6279\u91cf\u8bf7\u6c42\u5e76\u91cd\u542f\u8fd9\u4e00\u64cd\u4f5c\u524d\u540e\u7684\u524d\u7aef\u9875\u9762\uff0c\u4e00\u81f4\u5219\u8bc1\u660e Phoenix \u5177\u6709\u91cd\u542f\u53ef\u9760\u6027\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u6d4b\u8bd5\u6b65\u9aa4-1",children:"\u6d4b\u8bd5\u6b65\u9aa4"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528 bank-account \u670d\u52a1\uff0c\u5728\u524d\u7aef\u53d1\u8d77\u6279\u91cf\u8f6c\u8d26\u3002\u5168\u90e8\u5904\u7406\u5b8c\u6bd5\u540e\uff0c\u5237\u65b0\u9875\u9762\u6570\u636e\uff0c\u67e5\u770b\u6240\u6709\u8d26\u6237\u7684\u8d44\u91d1\u6570\u636e\u3002\n",(0,s.jsx)(n.img,{alt:"show",src:i(43746).Z+"",width:"1570",height:"769"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5f85\u8bf7\u6c42\u5168\u90e8\u5904\u7406\u5b8c\u6bd5\u540e\uff0c\u91cd\u542f\u670d\u52a1\u8282\u70b9\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u91cd\u542f\u5b8c\u6bd5\u540e\uff0c\u5237\u65b0\u9875\u9762\u6570\u636e\uff0c\u67e5\u770b\u6240\u6709\u8d26\u6237\u7684\u8d44\u91d1\u6570\u636e\u3002\n",(0,s.jsx)(n.img,{alt:"show",src:i(96691).Z+"",width:"1246",height:"400"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5bf9\u6bd4\u91cd\u542f\u524d\u540e\u7684\u8d26\u6237\u8868\u683c\uff0c\u53d1\u73b0\u5b8c\u5168\u4e00\u81f4\u3002Phoenix \u5177\u6709\u91cd\u542f\u53ef\u9760\u6027\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6295\u9012\u53ef\u9760\u6027\u6d4b\u8bd5",children:"\u6295\u9012\u53ef\u9760\u6027\u6d4b\u8bd5"}),"\n",(0,s.jsx)(n.h3,{id:"\u6d4b\u8bd5\u573a\u666f-2",children:"\u6d4b\u8bd5\u573a\u666f"}),"\n",(0,s.jsxs)(n.p,{children:["Phoenix \u76ee\u524d\u4f1a\u5bf9\u6240\u6709\u6295\u9012\u5230 Kafka \u4e2d\u7684\u6d88\u606f\u505a\u53ef\u9760\u6027\u6d88\u8d39\uff0c\u5e76\u4e14\u4fdd\u8bc1\u53ef\u9760\u7684\u6295\u9012\u7ed9\u4e0b\u6e38\u5e76\u4ea7\u51fa\u7ed3\u679c\uff0cPhoenix \u53ef\u4ee5\u68c0\u6d4b\u4e8b\u52a1\u8d85\u65f6\u672a\u7ed3\u675f\u65f6\u53d1\u8d77\u91cd\u8bd5\u6765\u8fbe\u5230\u53ef\u9760\u6027\u6295\u9012\u3002\n\u5728 bank-account \u5e94\u7528\u4e2d\u5bf9\u7279\u5b9a\u8d26\u6237 ",(0,s.jsx)(n.code,{children:"monitor_retry"})," \u7684\u8f6c\u8d26\u6a21\u62df\u4e86\u7f51\u7edc\u5835\u585e\u3002\u5177\u4f53\u6d4b\u8bd5\u573a\u666f\u5982\u4e0b:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u538b\u6d4b\u524d\u5173\u95ed Phoenix \u670d\u52a1\u7aef\uff0c\u5f85\u538b\u6d4b\u7ed3\u675f\u540e\u518d\u542f\u52a8\u670d\u52a1\u7aef\uff0c\u89c2\u5bdf\u538b\u6d4b\u7684\u6d88\u606f\u90fd\u53ef\u4ee5\u6b63\u786e\u65e0\u8bef\u7684\u5904\u7406\u3002"}),"\n",(0,s.jsxs)(n.li,{children:["\u7136\u540e\u901a\u8fc7\u4e0b\u5355\u9875\u9762\u4f7f\u7528\u56fa\u5b9a\u8d26\u6237 ",(0,s.jsx)(n.code,{children:"monitor_retry"})," \u53d1\u8d77\u8f6c\u8d26\u8bf7\u6c42\uff0c\u671f\u671b\u89e6\u53d1\u7cfb\u7edf\u91cd\u8bd5\u6295\u9012\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u6821\u9a8c\u65b9\u6cd5-2",children:"\u6821\u9a8c\u65b9\u6cd5"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"account-server \u670d\u52a1\u542f\u52a8\u540e\uff0cKafka \u7684\u6d88\u606f\u88ab\u6b63\u786e\u5904\u7406\uff0c\u901a\u8fc7\u8d26\u6237\u9875\u9762\u67e5\u8be2\u5230\u5904\u7406\u7ed3\u679c\u6b63\u786e\u3002"}),"\n",(0,s.jsxs)(n.li,{children:["\u53d1\u8d77 ",(0,s.jsx)(n.code,{children:"monitor_retry"})," \u8d26\u6237\u8f6c\u8d26\u8bf7\u6c42\u540e\uff0c\u524d\u7aef\u4f1a\u62a5 RPC \u8d85\u65f6\uff0c\u67e5\u770b Grafana \u548c\u8d26\u6237\u8be6\u60c5\uff0c\u8bc1\u660e\u4e2d\u95f4\u53d1\u751f\u4e86\u91cd\u8bd5\u6700\u7ec8\u8fbe\u5230\u6d88\u606f\u6b63\u786e\u5904\u7406\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u6d4b\u8bd5\u6b65\u9aa4-2",children:"\u6d4b\u8bd5\u6b65\u9aa4"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u538b\u6d4b\u524d\u505c\u6389 account-server, account-tn \u5e94\u7528\uff0c\u4f7f\u7528\u538b\u6d4b\u9875\u9762\u4e0b\u5355 100 \u7b14\n",(0,s.jsx)(n.img,{alt:"show",src:i(3149).Z+"",width:"1325",height:"274"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u8bf7\u6c42\u7ed3\u675f\u540e\uff0c\u542f\u52a8 account-server, account-tn\uff0c\u89c2\u5bdf Grafana \u53d1\u73b0\u6240\u6709\u6d88\u606f\u90fd\u6b63\u786e\u5904\u7406\uff0c\u8d26\u6237\u8be6\u60c5\u7ed3\u679c\u6b63\u786e\u3002\n",(0,s.jsx)(n.img,{alt:"show",src:i(41444).Z+"",width:"1267",height:"360"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528\u56fa\u5b9a\u8d26\u6237\u53d1\u8d77\u5212\u62e8\u8bf7\u6c42 ",(0,s.jsx)(n.code,{children:"monitor_retry"}),"\u3002\n",(0,s.jsx)(n.img,{alt:"show",src:i(36172).Z+"",width:"1219",height:"184"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u89c2\u5bdf Grafana \u5904\u7406\u60c5\u51b5\uff0c\u4e00\u6bb5\u65f6\u95f4\u540e\u4f1a\u53ef\u4ee5\u770b\u5230\u6709 ",(0,s.jsx)(n.code,{children:"RETRY_MESSAGE"})," \u6307\u6807\u4ea7\u751f\uff0c\u8bc1\u660e\u7cfb\u7edf\u4ea7\u751f\u4e86\u91cd\u8bd5\u3002\n",(0,s.jsx)(n.img,{alt:"show",src:i(2867).Z+"",width:"1312",height:"995"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u67e5\u770b\u8d26\u6237\u8be6\u60c5\u9875\u9762\uff0c\u6b65\u9aa44\u56e0\u4e3a\u8d85\u65f6\u53d1\u8d77\u91cd\u8bd5\u7684\u6d88\u606f\u4e5f\u88ab\u6b63\u786e\u5904\u7406\u4e86\u3002\n",(0,s.jsx)(n.img,{alt:"show",src:i(10819).Z+"",width:"1251",height:"388"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u7ed3\u8bba",children:"\u7ed3\u8bba"}),"\n",(0,s.jsx)(n.p,{children:"\u901a\u8fc7\u4e0a\u9762\u4e09\u4e2a\u7ef4\u5ea6\u7684\u53ef\u9760\u6027\u6d4b\u8bd5\uff0c\u8bc1\u660e Phoenix \u4f5c\u4e3a\u57fa\u4e8e\u5185\u5b58\u7684\u6d88\u606f\u9a71\u52a8\u6846\u67b6\uff0c\u53ef\u4ee5\u5728\u6846\u67b6\u5c42\u9762\u4fdd\u8bc1\u72b6\u6001\u6b63\u786e\u4fee\u6539\uff0c\u6d88\u606f\u7684\u53ef\u9760\u6027\u6295\u9012\uff0c\u72b6\u6001\u7684\u6b63\u786e\u6062\u590d\u3002"})]})}function a(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},76882:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/001-d492a7b4779f3a47236811b1ea664d8e.png"},95247:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/002-87274f208a69e64a061f041c9a59f2c2.png"},43746:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/003-8c78715b64a0bc01fa04cc882d7ddac4.png"},96691:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/005-6814d90f880cb20bf43c1b745ccff750.png"},3149:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/006-363f08f6bd2fd8756cd827f86b5c06be.png"},41444:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/007-5e958cd6472809275db35c117fe68a5e.png"},36172:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/008-8be6a5549be887fc0c57b946aedfdcf7.png"},2867:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/009-1f9b863fbcc63fde610798711241d374.png"},10819:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/010-5090fc95f36bebdcabcf39f5f58beec2.png"},11151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>l});var s=i(67294);const t={},c=s.createContext(t);function l(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);