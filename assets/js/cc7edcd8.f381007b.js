"use strict";(self.webpackChunkphoenixiq_github_io=self.webpackChunkphoenixiq_github_io||[]).push([[10170],{20310:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>t,frontMatter:()=>s,metadata:()=>x,toc:()=>d});var h=i(85893),o=i(11151);const s={id:"how-event-driven-microservice",title:"Phoenix\u5b9e\u73b0\u4e8b\u4ef6\u9a71\u52a8\u578b\u5fae\u670d\u52a1"},r=void 0,x={id:"phoenix-2.x/phoenix/how-event-driven-microservice",title:"Phoenix\u5b9e\u73b0\u4e8b\u4ef6\u9a71\u52a8\u578b\u5fae\u670d\u52a1",description:"Phoenix \u67b6\u6784",source:"@site/versioned_docs/version-2.4.3/phoenix-2.x/01-phoenix/03-how-event-driven-microservice.md",sourceDirName:"phoenix-2.x/01-phoenix",slug:"/phoenix-2.x/phoenix/how-event-driven-microservice",permalink:"/docs/2.4.3/phoenix-2.x/phoenix/how-event-driven-microservice",draft:!1,unlisted:!1,editUrl:"https://github.com/PhoenixIQ/versioned_docs/version-2.4.3/phoenix-2.x/01-phoenix/03-how-event-driven-microservice.md",tags:[],version:"2.4.3",sidebarPosition:3,frontMatter:{id:"how-event-driven-microservice",title:"Phoenix\u5b9e\u73b0\u4e8b\u4ef6\u9a71\u52a8\u578b\u5fae\u670d\u52a1"},sidebar:"docs",previous:{title:"\u4e3a\u4ec0\u4e48\u9700\u8981\u4e8b\u4ef6\u9a71\u52a8\u578b\u5fae\u670d\u52a1",permalink:"/docs/2.4.3/phoenix-2.x/phoenix/why-event-driven-microservice"},next:{title:"1. \u9152\u5e97\u9884\u8ba2\u6848\u4f8b\u67b6\u6784",permalink:"/docs/2.4.3/phoenix-2.x/phoenix/quick-start-example/bookings-architecture"}},c={},d=[{value:"Phoenix \u67b6\u6784",id:"phoenix-\u67b6\u6784",level:2},{value:"\u5ba2\u6237\u7aef\u901a\u4fe1\u6a21\u578b",id:"\u5ba2\u6237\u7aef\u901a\u4fe1\u6a21\u578b",level:2},{value:"\u670d\u52a1\u95f4\u901a\u8baf\u6a21\u578b",id:"\u670d\u52a1\u95f4\u901a\u8baf\u6a21\u578b",level:2},{value:"DDD(\u9886\u57df\u9a71\u52a8\u8bbe\u8ba1)",id:"ddd\u9886\u57df\u9a71\u52a8\u8bbe\u8ba1",level:2},{value:"\u805a\u5408\u6839",id:"\u805a\u5408\u6839",level:4},{value:"Phoenix\u4e2d\u7684EventSourcing",id:"phoenix\u4e2d\u7684eventsourcing",level:2},{value:"Phoenix \u4e2d\u7684 CQRS",id:"phoenix-\u4e2d\u7684-cqrs",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",h2:"h2",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(n.h2,{id:"phoenix-\u67b6\u6784",children:"Phoenix \u67b6\u6784"}),"\n",(0,h.jsx)(n.p,{children:"Phoenix \u662f\u4e00\u6b3e\u9ad8\u6027\u80fd\u3001\u4e8b\u4ef6\u9a71\u52a8\u578b\u7684\u5fae\u670d\u52a1\u6846\u67b6\u3002\u5b83\u63d0\u4f9b\u4e86\u4e00\u5957\u9886\u57df\u9a71\u52a8\u8bbe\u8ba1\u6a21\u5f0f(DDD)\u7684\u5b9e\u73b0\u6a21\u578b\uff0c\u4ee5\u5b9e\u4f53\u805a\u5408\u6839\u4f5c\u4e3a\u4e1a\u52a1\u8ba1\u7b97\u7684\u57fa\u672c\u5355\u5143\uff0c\u5728\u6574\u4e2a\u4e1a\u52a1\u8ba1\u7b97\u7684\u6d41\u7a0b\u4e2d\uff0c\u805a\u5408\u6839\u5bf9\u8c61\u4e4b\u95f4\u76f8\u4e92\u9694\u79bb\uff0c\u4ec5\u4ee5\u6d88\u606f(Message)\u8fdb\u884c\u4ea4\u4e92\u3002Phoenix \u6846\u67b6\u5bf9\u805a\u5408\u6839\u5bf9\u8c61\u7684\u72b6\u6001\u7ba1\u7406\u548c\u591a\u5c42\u6b21\u4ea4\u4e92\u7684\u5b9e\u73b0\u8fdb\u884c\u4e86\u5c01\u88c5\u3002\u4f7f\u5f97\u4e1a\u52a1\u5f00\u53d1\u4eba\u5458\u53ea\u9700\u8981\u5173\u6ce8\u4e1a\u52a1\u903b\u8f91\u672c\u8eab\u5373\u53ef\u3002"}),"\n",(0,h.jsx)(n.p,{children:(0,h.jsx)(n.img,{src:i(88927).Z+"",width:"1399",height:"400"})}),"\n",(0,h.jsx)(n.p,{children:"\u5728 Phoenix \u7684\u6574\u4e2a\u67b6\u6784\u8bbe\u8ba1\u4e2d\uff0c\u63d0\u4f9b\u4e86\u5982\u4e0b\u80fd\u529b\uff1a"}),"\n",(0,h.jsxs)(n.ol,{children:["\n",(0,h.jsx)(n.li,{children:"Phoenix \u901a\u8fc7\u501f\u52a9 Kafka \u7b49\u6d88\u606f\u4e2d\u95f4\u4ef6\u6765\u5b8c\u6210\u76f8\u4e92\u4e4b\u95f4\u7684\u901a\u4fe1\u3002\u901a\u8fc7\u5bf9\u5ba2\u6237\u7aef\u4ee3\u7801\u8fdb\u884c\u5c01\u88c5\uff0c\u4e3a\u7528\u6237\u63d0\u4f9b\u65b9\u4fbf\u6613\u7528\u7684 API\u3002"}),"\n",(0,h.jsx)(n.li,{children:"\u5b9e\u4f53\u805a\u5408\u6839\u91c7\u7528 Event Sourcing \u7684\u601d\u60f3\uff0c\u5c06\u6574\u4e2a\u805a\u5408\u6839\u7684\u72b6\u6001\u53d8\u66f4\u6301\u4e45\u5316\u4e3a\u4e00\u7cfb\u5217\u4e0d\u53ef\u53d8\u7684\u4e8b\u4ef6\u3002\u4f7f\u5f97\u5b9e\u4f53\u805a\u5408\u6839\u5177\u5907\u5386\u53f2\u8bb0\u5f55\u7684\u80fd\u529b\uff0c\u652f\u6301\u6eaf\u6e90\u548c\u5ba1\u8ba1\u3002"}),"\n",(0,h.jsx)(n.li,{children:"Phoenix \u5b9e\u73b0\u4e86\u4e8b\u4ef6\u7684\u53ef\u9760\u4ea4\u4ed8\u3002"}),"\n",(0,h.jsx)(n.li,{children:"Phoenix \u5c06\u4e8b\u4ef6\u6301\u4e45\u5316\u81f3 Event Store\uff0c\u4f7f\u5f97\u5b9e\u4f53\u805a\u5408\u6839\u652f\u6301\u968f\u65f6\u6eaf\u6e90\uff0c\u540c\u65f6\u8fd8\u652f\u6301\u901a\u8fc7\u5feb\u7167\u6765\u52a0\u901f\u6eaf\u6e90\u8fc7\u7a0b\u3002"}),"\n",(0,h.jsx)(n.li,{children:"Phoenix \u652f\u6301\u8ba2\u9605\u80fd\u529b\uff0c\u53ef\u4ee5\u5c06\u7b2c\u4e09\u65b9\u670d\u52a1\u7684\u6570\u636e\u901a\u8fc7\u8f6c\u6362\u3001\u6295\u9012\u81f3Phoenix \u670d\u52a1\u3002"}),"\n",(0,h.jsx)(n.li,{children:"Phoenix \u652f\u6301\u53d1\u5e03\u7684\u80fd\u529b\uff0c\u53ef\u4ee5\u5c06 Phoenix \u670d\u52a1\u4ea7\u751f\u7684\u4e8b\u4ef6\u8fdb\u884c\u8f6c\u6362\uff0c\u6295\u9012\u81f3\u7b2c\u4e09\u65b9\u670d\u52a1\u3002"}),"\n",(0,h.jsx)(n.li,{children:"Phoenix \u63d0\u4f9b\u4e8b\u52a1\u6a21\u5757\u7528\u6765\u89e3\u51b3\u5206\u5e03\u5f0f\u4e8b\u52a1\u95ee\u9898\uff0c\u76ee\u524d\u652f\u6301\u7684\u4e8b\u52a1\u6a21\u5f0f\u6709SAGA\u4e0eTCC\u3002"}),"\n"]}),"\n",(0,h.jsx)(n.h2,{id:"\u5ba2\u6237\u7aef\u901a\u4fe1\u6a21\u578b",children:"\u5ba2\u6237\u7aef\u901a\u4fe1\u6a21\u578b"}),"\n",(0,h.jsx)(n.p,{children:"\u5728\u4e8b\u4ef6\u9a71\u52a8\u578b\u5fae\u670d\u52a1\u67b6\u6784\u4e2d\uff0c\u670d\u52a1\u4e4b\u95f4\u901a\u5e38\u4f1a\u501f\u52a9\u4e8b\u4ef6\u901a\u9053\u6765\u5b8c\u6210\u5f02\u6b65\u7684\u901a\u4fe1\u3002\u4ece\u800c\u4f7f\u6574\u4e2a\u7cfb\u7edf\u53ef\u4ee5\u83b7\u5f97\u677e\u8026\u5408\u3001\u9ad8\u6027\u80fd\u7b49\u65b9\u9762\u7684\u597d\u5904\u3002"}),"\n",(0,h.jsx)(n.p,{children:"\u5229\u7528 Phoenix \u5f00\u53d1\u7684\u670d\u52a1\uff0c\u901a\u8fc7\u501f\u52a9 Kafka \u7b49\u6d88\u606f\u4e2d\u95f4\u4ef6\u6765\u5b8c\u6210\u76f8\u4e92\u4e4b\u95f4\u7684\u901a\u4fe1\u3002Phoenix \u901a\u8fc7\u5bf9\u5ba2\u6237\u7aef\u4ee3\u7801\u8fdb\u884c\u5c01\u88c5\uff0c\u4e3a\u7528\u6237\u63d0\u4f9b\u65b9\u4fbf\u6613\u7528\u7684 API\uff0c\u540c\u65f6\u53ef\u4ee5\u4fdd\u8bc1\u6d88\u606f\u6295\u9012\u7684\u7cbe\u786e\u4e00\u6b21\u6027\u8bed\u4e49\u3002"}),"\n",(0,h.jsx)(n.p,{children:(0,h.jsx)(n.img,{src:i(14915).Z+"",width:"980",height:"309"})}),"\n",(0,h.jsx)(n.p,{children:"Phoenix \u5ba2\u6237\u7aef\u652f\u6301\u4ee5\u4e0b\u51e0\u79cd\u4ea4\u4e92\u65b9\u5f0f\uff1a"}),"\n",(0,h.jsxs)(n.ul,{children:["\n",(0,h.jsx)(n.li,{children:"\u5f02\u6b65: \u4f7f\u7528\u5f02\u6b65\u6d88\u606f\u5b9e\u73b0\u5355\u5411\u901a\u77e5\u6bd4\u8f83\u7b80\u5355\u3002\u5ba2\u6237\u7aef\u5c06\u6d88\u606f\uff08\u901a\u5e38\u662f\u547d\u4ee4\u5f0f\u6d88\u606f\uff09\u53d1\u9001\u5230 kafka\u3002Phoenix \u670d\u52a1\u8ba2\u9605\u8ba2\u9605\u5e76\u5904\u7406\u8be5\u6d88\u606f\uff0c\u4f46\u662f\u670d\u52a1\u4e0d\u4f1a\u53d1\u56de\u56de\u590d\u3002"}),"\n",(0,h.jsx)(n.li,{children:"RPC: RPC\u8bf7\u6c42\u5728\u9762\u5411\u7528\u6237\u7aef\u4f7f\u7528\u65f6\u5f88\u6709\u7528\u3002\u5ba2\u6237\u7aef\u5c06\u6d88\u606f\u53d1\u9001\u7ed9Kafka\u4e4b\u540e\uff0c\u4f1a\u7b49\u5f85Phoenix\u5904\u7406\u5b8c\u6d88\u606f\u6765\u56de\u590d\u3002Phoenix\u5185\u90e8\u5904\u7406\u662f\u5f02\u6b65\u7684\u3002"}),"\n"]}),"\n",(0,h.jsx)(n.h2,{id:"\u670d\u52a1\u95f4\u901a\u8baf\u6a21\u578b",children:"\u670d\u52a1\u95f4\u901a\u8baf\u6a21\u578b"}),"\n",(0,h.jsx)(n.p,{children:"Phoenix \u9664\u4e86\u63d0\u4f9b\u5ba2\u6237\u7aef\u7684\u4ea4\u4e92\u65b9\u5f0f\u4e4b\u5916\uff0c\u8fd8\u652f\u6301\u901a\u8fc7\u53d1\u5e03\u8ba2\u9605\u7684\u6a21\u5f0f\u6765\u5b8c\u6210\u670d\u52a1\u4e4b\u95f4\u7684\u4ea4\u4e92\u3002"}),"\n",(0,h.jsxs)(n.blockquote,{children:["\n",(0,h.jsx)(n.p,{children:"\u5047\u8bbe\u6709\u4e00\u4e0b\u573a\u666f\uff1a"}),"\n",(0,h.jsx)(n.p,{children:"\u5728\u4e00\u4e2a\u5927\u578b\u7684\u5206\u5e03\u5f0f\u7cfb\u7edf\u4e2d\uff0c\u5b58\u5728\u4e24\u4e2a\u670d\u52a1\uff08\u670d\u52a1A\u3001\u670d\u52a1B\uff09\uff0c\u5176\u4e2d\u6709\u4e00\u4e2a\u4e1a\u52a1\u573a\u666f\u4f1a\u4f7f\u5f97\u670d\u52a1A\u4ea7\u751f\u4e8b\u4ef6A\uff0c\u5f53A\u4e8b\u4ef6\u4ea7\u751f\u65f6\uff0c\u9700\u8981\u901a\u77e5\u670d\u52a1B\u5b8c\u6210\u540e\u7eed\u4efb\u52a1\u3002"}),"\n"]}),"\n",(0,h.jsx)(n.p,{children:"\u8981\u5b8c\u6210\u670d\u52a1\u4e4b\u95f4\u7684\u901a\u4fe1\uff0c\u5b58\u5728\u5f88\u591a\u65b9\u5f0f\u3002 \u5982\u679c\u4f7f\u7528 Phoenix \u6846\u67b6\uff0c\u53ef\u4ee5\u4f7f\u7528 Event Publish \u80fd\u529b\u6765\u5b9e\u73b0\u6b64\u573a\u666f\u3002"}),"\n",(0,h.jsx)(n.p,{children:"\u91c7\u7528 Phoenix \u5f00\u53d1\u7684\u670d\u52a1\uff0c\u670d\u52a1\u5904\u7406\u8fc7\u7a0b\u4e2d\u7684\u4e8b\u4ef6\u4f1a\u88ab\u6301\u4e45\u5316\u81f3 Event Store\u3002Event Publish \u529f\u80fd\uff0c\u901a\u8fc7\u8bfb\u53d6Event Store \u4e2d\u7684\u6240\u6709\u4e8b\u4ef6\uff0c\u6309\u7167\u4e0d\u540c\u7684\u4e1a\u52a1\u9700\u6c42\uff0c\u8fdb\u884c\u7b5b\u9009\u3001\u8f6c\u6362\uff0c\u6700\u7ec8\u6295\u9012\u81f3 kafka \u961f\u5217\u4e2d\uff08\u5177\u4f53\u903b\u8f91\u53ef\u4ee5\u7531\u7528\u6237\u81ea\u5df1\u5b9e\u73b0\uff09\u3002"}),"\n",(0,h.jsx)(n.p,{children:"\u5176\u4ed6\u670d\u52a1\u53ef\u4ee5\u901a\u8fc7\u8ba2\u9605 kafka \u7684\u76f8\u5173\u4e3b\u9898\u6765\u5b8c\u6210\u4ea4\u4e92\u3002"}),"\n",(0,h.jsx)(n.p,{children:(0,h.jsx)(n.img,{src:i(24074).Z+"",width:"1100",height:"161"})}),"\n",(0,h.jsx)(n.p,{children:"Phoenix Event Publish \u901a\u8fc7\u5bf9\u6838\u5fc3\u903b\u8f91\u8fdb\u884c\u5c01\u88c5\uff0c\u7528\u6237\u4ec5\u9700\u8981\u5b9e\u73b0\u4e00\u4e2a\u56fa\u5b9a\u7684\u63a5\u53e3\uff0c\u63d0\u4f9b\u4e1a\u52a1\u903b\u8f91\u5c31\u53ef\u4ee5\u4e86\u3002Event Publish \u53ef\u4ee5\u4fdd\u8bc1 Event Store \u4e2d\u6240\u6709\u4e8b\u4ef6\u7684\u53ef\u9760\u53d1\u5e03\u3002"}),"\n",(0,h.jsxs)(n.p,{children:["\u8be6\u7ec6\u7684 API \u4ecb\u7ecd\u53ef\u53c2\u8003\uff1a",(0,h.jsx)(n.a,{href:"/docs/2.4.3/phoenix-2.x/phoenix-event-publish/event-publish-readme",children:"Phoenix Event Publish"}),", ",(0,h.jsx)(n.a,{href:"/docs/2.4.3/phoenix-2.x/phoenix-core/phoenix-subscribe-pub",children:"Phoenix Subscribe"})]}),"\n",(0,h.jsx)(n.h2,{id:"ddd\u9886\u57df\u9a71\u52a8\u8bbe\u8ba1",children:"DDD(\u9886\u57df\u9a71\u52a8\u8bbe\u8ba1)"}),"\n",(0,h.jsxs)(n.p,{children:["\u5728\u4ecb\u7ecdPhoenix\u7684\u7f16\u7a0b\u6a21\u578b\u4e4b\u524d\uff0c\u5e94\u5f53\u5148\u4e86\u89e3\u4e00\u4e0bDDD\u3002",(0,h.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Domain-driven_design",children:"DDD - Domain Driven Design"})," \u662f\u4e00\u79cd\u5904\u7406\u9ad8\u5ea6\u590d\u6742\u9886\u57df\u7684\u8bbe\u8ba1\u601d\u60f3\uff0c\u5b83\u8bd5\u56fe\u5206\u79bb\u6280\u672f\u5b9e\u73b0\u7684\u590d\u6742\u6027\uff0c\u5e76\u56f4\u7ed5\u4e1a\u52a1\u6982\u5ff5\u6784\u5efa\u9886\u57df\u6a21\u578b\u6765\u63a7\u5236\u4e1a\u52a1\u7684\u590d\u6742\u6027\uff0c\u4ee5\u89e3\u51b3\u8f6f\u4ef6\u96be\u4ee5\u7406\u89e3\uff0c\u96be\u4ee5\u6f14\u8fdb\u7684\u95ee\u9898\u3002"]}),"\n",(0,h.jsx)(n.p,{children:"DDD \u4e0d\u662f\u67b6\u6784\uff0c\u800c\u662f\u4e00\u79cd\u67b6\u6784\u8bbe\u8ba1\u65b9\u6cd5\u8bba\uff0c\u5b83\u901a\u8fc7\u8fb9\u754c\u5212\u5206\u5c06\u590d\u6742\u4e1a\u52a1\u9886\u57df\u7b80\u5355\u5316\uff0c\u5e2e\u6211\u4eec\u8bbe\u8ba1\u51fa\u6e05\u6670\u7684\u9886\u57df\u548c\u5e94\u7528\u8fb9\u754c\uff0c\u53ef\u4ee5\u5f88\u5bb9\u6613\u5730\u5b9e\u73b0\u67b6\u6784\u6f14\u8fdb\u3002"}),"\n",(0,h.jsx)(n.h4,{id:"\u805a\u5408\u6839",children:"\u805a\u5408\u6839"}),"\n",(0,h.jsx)(n.p,{children:"\u901a\u8fc7DDD\u7684\u65b9\u6cd5\u5212\u5206\u597d\u9886\u57df\u4e4b\u540e\uff0c\u9488\u5bf9\u6bcf\u4e2a\u9886\u57df\u4e0b\u7684\u5404\u4e2a\u805a\u5408\u9700\u8981\u8bc6\u522b\u51fa\u6765\u805a\u5408\u6839\uff0c\u805a\u5408\u6839\u662f\u805a\u5408\u7684\u552f\u4e00\u5165\u53e3\uff0c\u6240\u6709\u5bf9\u4e8e\u805a\u5408\u5185\u90e8\u5b9e\u4f53\u7684\u547d\u4ee4\u90fd\u9700\u8981\u901a\u8fc7\u805a\u5408\u6839\u3002"}),"\n",(0,h.jsx)(n.p,{children:"\u5982\u679c\u628a\u805a\u5408\u6bd4\u4f5c\u7ec4\u7ec7\uff0c\u90a3\u805a\u5408\u6839\u5c31\u662f\u8fd9\u4e2a\u7ec4\u7ec7\u7684\u8d1f\u8d23\u4eba\u3002\u805a\u5408\u6839\u4e5f\u79f0\u4e3a\u6839\u5b9e\u4f53\uff0c\u5b83\u4e0d\u4ec5\u662f\u5b9e\u4f53\uff0c\u8fd8\u662f\u805a\u5408\u7684\u7ba1\u7406\u8005\u3002\u9996\u5148\u5b83\u4f5c\u4e3a\u5b9e\u4f53\u672c\u8eab\uff0c\u62e5\u6709\u5b9e\u4f53\u7684\u5c5e\u6027\u548c\u4e1a\u52a1\u884c\u4e3a\uff0c\u5b9e\u73b0\u81ea\u8eab\u7684\u4e1a\u52a1\u903b\u8f91\u3002\u5176\u6b21\u5b83\u4f5c\u4e3a\u805a\u5408\u7684\u7ba1\u7406\u8005\uff0c\u5728\u805a\u5408\u5185\u90e8\u8d1f\u8d23\u534f\u8c03\u5b9e\u4f53\u548c\u503c\u5bf9\u8c61\u6309\u7167\u56fa\u5b9a\u7684\u4e1a\u52a1\u89c4\u5219\u534f\u540c\u5b8c\u6210\u5171\u540c\u7684\u4e1a\u52a1\u903b\u8f91\u3002"}),"\n",(0,h.jsx)(n.p,{children:"\u805a\u5408\u4e4b\u95f4\u901a\u8fc7\u805a\u5408\u6839 ID \u5173\u8054\u5f15\u7528\uff0c\u5982\u679c\u9700\u8981\u8bbf\u95ee\u5176\u5b83\u805a\u5408\u7684\u5b9e\u4f53\uff0c\u5c31\u8981\u5148\u8bbf\u95ee\u805a\u5408\u6839\uff0c\u518d\u5bfc\u822a\u5230\u805a\u5408\u5185\u90e8\u5b9e\u4f53\uff0c\u5916\u90e8\u5bf9\u8c61\u4e0d\u80fd\u76f4\u63a5\u8bbf\u95ee\u805a\u5408\u5185\u5b9e\u4f53\u3002"}),"\n",(0,h.jsx)(n.p,{children:"\u5728\u4f7f\u7528Phoenix\u5f00\u53d1\u670d\u52a1\u65f6\uff0c\u9996\u5148\u4f1a\u5b9a\u4e49\u805a\u5408\u6839\uff0c\u805a\u5408\u6839\u662fPhoenix\u7684\u5904\u7406\u6d88\u606f\u7684\u5165\u53e3\u3002Phoenix\u63d0\u4f9b\u7ed9\u7528\u6237\u7684\u6240\u6709\u529f\u80fd\u90fd\u662f\u56f4\u7ed5\u7740\u805a\u5408\u6839\u5c55\u5f00\u7684\uff1a"}),"\n",(0,h.jsxs)(n.ol,{children:["\n",(0,h.jsx)(n.li,{children:"EventSouring: Phoenix\u5bf9\u4e8e\u805a\u5408\u6839\u63d0\u4f9bEventSouring\u7684\u7f16\u7a0bapi\uff0c\u4f7f\u7528\u6237\u53ef\u4ee5\u65b9\u4fbf\u6784\u5efa\u51faEventSouring\u6a21\u578b\u3002"}),"\n",(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Actor_model",children:"Actor Model"}),": Phoenix\u628a\u6bcf\u4e2a\u805a\u5408\u6839\u5b9e\u4f8b\u548c\u4e00\u4e2aActor\u7ed1\u5b9a\uff0c\u4fdd\u8bc1\u805a\u5408\u6839\u5185\u90e8\u5904\u7406\u662f\u7ebf\u7a0b\u5b89\u5168\u5e76\u4e14\u662f\u5f3a\u4e00\u81f4\u7684\u3002"]}),"\n",(0,h.jsx)(n.li,{children:"ACID: Phoenix\u53ef\u4ee5\u4fdd\u8bc1\u5728\u805a\u5408\u6839\u5185\u90e8\u5904\u7406\u4e00\u4e2a\u547d\u4ee4\u662f\u6301\u4e45\u6027\uff0c\u5f3a\u9694\u79bb\u6027\u548c\u4e00\u81f4\u6027\u4ee5\u53ca\u539f\u5b50\u6027\u7684\u3002"}),"\n",(0,h.jsx)(n.li,{children:"Saga: Phoenix\u63d0\u4f9b\u65b9\u4fbf\u8fdb\u884cSaga\u7f16\u7a0b\u7684\u4e8b\u52a1\u6027\u805a\u5408\u6839\uff0c\u7528\u6765\u534f\u8c03\u591a\u4e2a\u5b9e\u4f53\u805a\u5408\u6839\u6765\u5b8c\u6210\u5206\u5e03\u5f0f\u4e8b\u52a1\u3002"}),"\n"]}),"\n",(0,h.jsx)(n.h2,{id:"phoenix\u4e2d\u7684eventsourcing",children:"Phoenix\u4e2d\u7684EventSourcing"}),"\n",(0,h.jsxs)(n.p,{children:["\u901a\u8fc7\u524d\u6587\u7684\u63cf\u8ff0\uff0c",(0,h.jsx)(n.a,{href:"/docs/2.4.3/phoenix-2.x/phoenix/why-event-driven-microservice#EventSouring%E4%BB%8B%E7%BB%8D",children:"\u4e8b\u4ef6\u6eaf\u6e90"}),"\u7684\u597d\u5904\u662f\u663e\u800c\u6613\u89c1\u7684\u3002\u4e0b\u9762\u6765\u770b\u4e0b Phoenix \u5982\u4f55\u5c06\u8fd9\u79cd\u72ec\u7279\u800c\u5f3a\u5927\u7684\u65b9\u6cd5\u4ed8\u8bf8\u5b9e\u73b0\u3002"]}),"\n",(0,h.jsx)(n.p,{children:"\u4e0b\u9762\u7b80\u5355\u63cf\u8ff0\u4e00\u4e0b\uff0c\u4ece\u5ba2\u6237\u7aef\u53d1\u9001\u547d\u4ee4\uff08Command\uff09\u901a\u77e5 Phoenix \u670d\u52a1\u505a\u4fee\u6539\uff0c\u5230 Phoenix \u670d\u52a1\u5904\u7406\u7684\u6574\u4e2a\u6d41\u7a0b\u3002"}),"\n",(0,h.jsxs)(n.ol,{children:["\n",(0,h.jsx)(n.li,{children:"\u5ba2\u6237\u7aef\u53d1\u9001\u547d\u4ee4\uff08Command\uff09\u5230 MQ\uff08kafka\uff09"}),"\n",(0,h.jsx)(n.li,{children:"\u8ba2\u9605\u8005\u63a5\u6536\u5230\u547d\u4ee4\u4e4b\u540e\uff0c\u8c03\u7528 Command Handler \u8fdb\u884c\u5904\u7406\u3002"}),"\n",(0,h.jsx)(n.li,{children:"Command Handler \u5185\u90e8\u6839\u636e\u547d\u4ee4\u6240\u6307\u5b9a\u7684\u805a\u5408\u6839ID\uff0c\u627e\u5230\u5177\u4f53\u7684\u805a\u5408\u6839\u5bf9\u8c61"}),"\n",(0,h.jsx)(n.li,{children:"\u805a\u5408\u6839\u5bf9\u8c61\u5904\u7406\u8be5 Command \u5e76\u4ea7\u751f\u4e8b\u4ef6\uff08Event\uff09\uff0c\u6846\u67b6\u6839\u636e Event \u6765\u4fee\u6539\u805a\u5408\u6839\u72b6\u6001"}),"\n",(0,h.jsx)(n.li,{children:"\u6846\u67b6\u8d1f\u8d23\u81ea\u52a8\u6301\u4e45\u5316\u4e8b\u4ef6\u5230 Event Store"}),"\n"]}),"\n",(0,h.jsx)(n.p,{children:(0,h.jsx)(n.img,{src:i(19788).Z+"",width:"979",height:"213"})}),"\n",(0,h.jsxs)(n.blockquote,{children:["\n",(0,h.jsxs)(n.p,{children:["\u5728\u4e00\u4e2a\u547d\u4ee4\u7684\u5904\u7406\u8fc7\u7a0b\u4e2d\uff0c\u6846\u67b6\u4fdd\u8bc1 Command \u7684\u5904\u7406\u4e0e Event \u6301\u4e45\u5316",(0,h.jsx)(n.strong,{children:"\u4fdd\u6301\u539f\u5b50\u6027"}),"\uff0c\u540c\u65f6\u4fdd\u8bc1\u805a\u5408\u6839\u5185\u90e8\u5904\u7406\u662f\u6ee1\u8db3\u5f3aACID\u7684\uff0c\u9664\u6b64\u4e4b\u5916\uff0cPhoenix \u8fd8\u53ef\u4ee5\u4fdd\u8bc1\u88ab\u6d88\u8d39\u5230\u7684\u6570\u636e\u80fd\u591f\u88ab",(0,h.jsx)(n.strong,{children:"\u7cbe\u786e\u4e00\u6b21\u6027\u5904\u7406"}),"\u3002"]}),"\n"]}),"\n",(0,h.jsx)(n.p,{children:"Phoenix \u901a\u8fc7\u4e0a\u9762\u7684\u5904\u7406\u6d41\u7a0b\uff0c\u5c06\u72b6\u6001\u4fee\u6539\u6301\u4e45\u5316\u4e3a\u4e00\u7cfb\u5217\u7684\u4e8b\u4ef6\u3002\u901a\u8fc7\u4e8b\u4ef6\u8868\u793a\u5bf9\u8c61\u7684\u72b6\u6001\uff0c\u800c\u4e8b\u4ef6\u662f\u53ea\u4f1a\u589e\u52a0\u4e0d\u4f1a\u4fee\u6539\u3002\u8fd9\u5c31\u80fd\u8ba9\u6570\u636e\u5e93\u91cc\u7684\u8868\u793a\u5bf9\u8c61\u7684\u6570\u636e\u975e\u5e38\u7a33\u5b9a\uff0c\u4e0d\u53ef\u80fd\u5b58\u5728DELETE\u6216UPDATE\u7b49\u64cd\u4f5c\u3002\u56e0\u4e3a\u4e00\u4e2a\u4e8b\u4ef6\u5c31\u662f\u8868\u793a\u4e00\u4e2a\u4e8b\u5b9e\uff0c\u4e8b\u5b9e\u662f\u4e0d\u80fd\u88ab\u78e8\u706d\u6216\u4fee\u6539\u7684\u3002\u8fd9\u79cd\u7279\u6027\u53ef\u4ee5\u8ba9\u9886\u57df\u6a21\u578b\u975e\u5e38\u7a33\u5b9a\uff0c\u5728\u6570\u636e\u5e93\u7ea7\u522b\u4e0d\u4f1a\u4ea7\u751f\u5e76\u53d1\u66f4\u65b0\u540c\u4e00\u6761\u6570\u636e\u7684\u95ee\u9898\u3002"}),"\n",(0,h.jsx)(n.p,{children:"\u7531\u4e8e Phoenix \u4f7f\u7528\u4e86 Event Sourcing \u6280\u672f\uff0c\u6240\u4ee5\u53ef\u4ee5\u76f4\u63a5\u5728 Event Store \u4e2d\u81ea\u52a8\u505a\u5230\u805a\u5408\u6839\u5e76\u53d1\u4fee\u6539\u7684\u51b2\u7a81\u68c0\u6d4b\uff0c\u4ee5\u53ca\u540c\u4e00\u4e2a\u547d\u4ee4\u7684\u91cd\u590d\u5904\u7406\u68c0\u6d4b\u3002\u5e76\u4e14\u80fd\u591f\u81ea\u52a8\u505a\u5e76\u53d1\u5904\u7406\u6216\u91cd\u65b0\u53d1\u5e03\u8be5\u547d\u4ee4\u6240\u4ea7\u751f\u7684\u4e8b\u4ef6\u3002"}),"\n",(0,h.jsx)(n.h2,{id:"phoenix-\u4e2d\u7684-cqrs",children:"Phoenix \u4e2d\u7684 CQRS"}),"\n",(0,h.jsx)(n.p,{children:"CQRS\u5168\u79f0\u662f\uff1aCommand Query Responsibility Segregation\uff0c\u5373\u547d\u4ee4\u67e5\u8be2\u804c\u8d23\u5206\u79bb\u3002\u4e00\u4e2a\u547d\u4ee4\u8868\u793a\u4e00\u79cd\u610f\u56fe\uff0c\u8868\u793a\u547d\u4ee4\u7cfb\u7edf\u505a\u4ec0\u4e48\u4fee\u6539\uff0c\u547d\u4ee4\u7684\u6267\u884c\u7ed3\u679c\u901a\u5e38\u4e0d\u9700\u8981\u8fd4\u56de\uff1b\u4e00\u4e2a\u67e5\u8be2\u8868\u793a\u5411\u7cfb\u7edf\u67e5\u8be2\u6570\u636e\u5e76\u8fd4\u56de\u3002\u53e6\u5916\u4e00\u4e2a\u91cd\u8981\u7684\u6982\u5ff5\u5c31\u662f\u4e8b\u4ef6\uff0c\u4e8b\u4ef6\u8868\u793a\u9886\u57df\u4e2d\u7684\u805a\u5408\u6839\u7684\u72b6\u6001\u53d1\u751f\u53d8\u5316\u540e\u4ea7\u751f\u7684\u4e8b\u4ef6\uff0c\u57fa\u672c\u5bf9\u5e94DDD\u4e2d\u7684\u9886\u57df\u4e8b\u4ef6\uff1b"}),"\n",(0,h.jsx)(n.p,{children:"CQRS\u67b6\u6784\u7684\u6838\u5fc3\u51fa\u53d1\u70b9\u662f\u5c06\u6574\u4e2a\u7cfb\u7edf\u7684\u67b6\u6784\u5206\u5272\u4e3a\u8bfb\u548c\u5199\u4e24\u90e8\u5206\uff0c\u4ece\u800c\u65b9\u4fbf\u6211\u4eec\u5bf9\u8bfb\u5199\u4e24\u7aef\u8fdb\u884c\u5206\u5f00\u4f18\u5316\uff1b"}),"\n",(0,h.jsxs)(n.p,{children:["\u901a\u8fc7\u4e0a\u9762\u7684\u63cf\u8ff0\uff0c\u53ef\u4ee5\u53d1\u73b0 Phoenix \u5b9e\u73b0\u4e86 Event Sourcing \u6a21\u578b\uff0c\u4f7f\u5f97 Phoenix \u670d\u52a1\u53ef\u4ee5\u5929\u7136\u7684\u4f5c\u4e3a\u4e00\u4e2a C \u7aef\u6a21\u578b\u3002\u540c\u65f6\u8fd8\u53ef\u4ee5\u501f\u52a9 Phoenix \u63d0\u4f9b\u7684 ",(0,h.jsx)(n.a,{href:"/docs/2.4.3/phoenix-2.x/phoenix-event-publish/event-publish-readme",children:"Event Publish"})," \u529f\u80fd(Event\nPublish \u53ef\u4ee5\u505a\u5230\u4e8b\u4ef6\u6700\u5c11\u4e00\u6b21\u6027\u6295\u9012)\u6765\u534f\u52a9\u6784\u5efa Q \u7aef\u670d\u52a1\u3002"]}),"\n",(0,h.jsx)(n.p,{children:(0,h.jsx)(n.img,{src:i(94078).Z+"",width:"980",height:"378"})})]})}function t(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,h.jsx)(n,{...e,children:(0,h.jsx)(l,{...e})}):l(e)}},88927:(e,n,i)=>{i.d(n,{Z:()=>h});const h=i.p+"assets/images/03-01-4dfa6fe7cdd2cb4899f8ada2379247e9.png"},14915:(e,n,i)=>{i.d(n,{Z:()=>h});const h=i.p+"assets/images/03-03-ec9e0549f62606158d471e1fa8aa24cc.png"},24074:(e,n,i)=>{i.d(n,{Z:()=>h});const h=i.p+"assets/images/03-04-c11ab1049a5c0a3e6c28d1c13f99b061.png"},19788:(e,n,i)=>{i.d(n,{Z:()=>h});const h=i.p+"assets/images/03-05-f24f36d079976be6353eec4a2838b913.png"},94078:(e,n,i)=>{i.d(n,{Z:()=>h});const h=i.p+"assets/images/03-07-3ef1677216bb590bff3fdb3b4ca61f9a.png"},11151:(e,n,i)=>{i.d(n,{Z:()=>x,a:()=>r});var h=i(67294);const o={},s=h.createContext(o);function r(e){const n=h.useContext(s);return h.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function x(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),h.createElement(s.Provider,{value:n},e.children)}}}]);