"use strict";(self.webpackChunkphoenix_website_next=self.webpackChunkphoenix_website_next||[]).push([[38512],{25609:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>x,contentTitle:()=>d,default:()=>c,frontMatter:()=>s,metadata:()=>t,toc:()=>o});var h=i(85893),r=i(11151);const s={id:"phoenix-introduce",title:"Phoenix\u4ecb\u7ecd"},d=void 0,t={id:"phoenix-2.x/phoenix/phoenix-introduce",title:"Phoenix\u4ecb\u7ecd",description:"Phoenix \u662f\u5bbd\u62d3\u81ea\u4e3b\u7814\u53d1\u7684\u4e00\u6b3e\u4e8b\u4ef6\u9a71\u52a8\u578b\u7684\u9ad8\u6027\u80fd Java \u5f00\u53d1\u6846\u67b6\uff0c\u5728\u91d1\u878d\u884c\u4e1a\u4e2d\u5f97\u5230\u4e86\u9a8c\u8bc1\u3002Phoenix \u4e13\u6ce8\u4e8e\u964d\u4f4e\u4e1a\u52a1\u590d\u6742\u6027\u9ad8\u3001\u6027\u80fd\u8981\u6c42\u9ad8\u7684\u5e94\u7528\u7cfb\u7edf\u7684\u5f00\u53d1\u96be\u5ea6\uff0c\u52a9\u529b\u7814\u53d1\u56e2\u961f\u6253\u9020\u4e13\u4e1a\u3001\u9ad8\u6548\u7684\u5fae\u670d\u52a1\u5316\u7684\u5e94\u7528\u7cfb\u7edf\u3002",source:"@site/versioned_docs/version-2.5.1/phoenix-2.x/01-phoenix/01-phoenix-introduce.md",sourceDirName:"phoenix-2.x/01-phoenix",slug:"/phoenix-2.x/phoenix/phoenix-introduce",permalink:"/docs/2.5.1/phoenix-2.x/phoenix/phoenix-introduce",draft:!1,unlisted:!1,editUrl:"https://github.com/PhoenixIQ/versioned_docs/version-2.5.1/phoenix-2.x/01-phoenix/01-phoenix-introduce.md",tags:[],version:"2.5.1",sidebarPosition:1,frontMatter:{id:"phoenix-introduce",title:"Phoenix\u4ecb\u7ecd"},sidebar:"docs",next:{title:"\u4e3a\u4ec0\u4e48\u9700\u8981\u4e8b\u4ef6\u9a71\u52a8\u578b\u5fae\u670d\u52a1",permalink:"/docs/2.5.1/phoenix-2.x/phoenix/why-event-driven-microservice"}},x={},o=[{value:"\u6574\u4f53\u4ecb\u7ecd",id:"\u6574\u4f53\u4ecb\u7ecd",level:2},{value:"\u5982\u4f55\u5165\u95e8",id:"\u5982\u4f55\u5165\u95e8",level:2},{value:"\u6846\u67b6\u6027\u80fd",id:"\u6846\u67b6\u6027\u80fd",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(n.blockquote,{children:["\n",(0,h.jsx)(n.p,{children:"Phoenix \u662f\u5bbd\u62d3\u81ea\u4e3b\u7814\u53d1\u7684\u4e00\u6b3e\u4e8b\u4ef6\u9a71\u52a8\u578b\u7684\u9ad8\u6027\u80fd Java \u5f00\u53d1\u6846\u67b6\uff0c\u5728\u91d1\u878d\u884c\u4e1a\u4e2d\u5f97\u5230\u4e86\u9a8c\u8bc1\u3002Phoenix \u4e13\u6ce8\u4e8e\u964d\u4f4e\u4e1a\u52a1\u590d\u6742\u6027\u9ad8\u3001\u6027\u80fd\u8981\u6c42\u9ad8\u7684\u5e94\u7528\u7cfb\u7edf\u7684\u5f00\u53d1\u96be\u5ea6\uff0c\u52a9\u529b\u7814\u53d1\u56e2\u961f\u6253\u9020\u4e13\u4e1a\u3001\u9ad8\u6548\u7684\u5fae\u670d\u52a1\u5316\u7684\u5e94\u7528\u7cfb\u7edf\u3002"}),"\n"]}),"\n",(0,h.jsx)(n.h2,{id:"\u6574\u4f53\u4ecb\u7ecd",children:"\u6574\u4f53\u4ecb\u7ecd"}),"\n",(0,h.jsx)(n.p,{children:"Phoenix \u662f\u4e00\u6b3e\u9ad8\u6027\u80fd\u3001\u4e8b\u4ef6\u9a71\u52a8\u578b\u7684\u5fae\u670d\u52a1\u6846\u67b6\u3002Phoenix \u4f7f\u5f00\u53d1\u8005\u4e13\u6ce8\u4e8e\u6ee1\u8db3\u4e1a\u52a1\u9700\u6c42\uff0c\u65e0\u9700\u7f16\u5199\u5e95\u5c42\u4ee3\u7801\u6765\u5b9e\u73b0\u53ef\u9760\u6027\u3001\u5bb9\u9519\u548c\u9ad8\u6027\u80fd\u3002"}),"\n",(0,h.jsx)(n.p,{children:"\u4f20\u7edf\u7684\u5fae\u670d\u52a1\u67b6\u6784\u505a\u6cd5\u4e0d\u5229\u4e8e\u5e94\u5bf9\u73b0\u4ee3\u8ba1\u7b97\u673a\u4f53\u7cfb\u7ed3\u6784\u7684\u8bbe\u8ba1\u6311\u6218\uff0c\u5f00\u53d1\u5206\u5e03\u5f0f\u7684\u5fae\u670d\u52a1\u7cfb\u7edf\u5c06\u4f1a\u9762\u4e34\u4ee5\u4e0b\u95ee\u9898\uff1a"}),"\n",(0,h.jsxs)(n.ul,{children:["\n",(0,h.jsx)(n.li,{children:"\u7ec4\u4ef6\u5d29\u6e83\u6ca1\u6709\u54cd\u5e94"}),"\n",(0,h.jsx)(n.li,{children:"\u6d88\u606f\u5728\u94fe\u8def\u4e2d\u4e22\u5931\u800c\u65e0\u8ff9\u53ef\u5bfb"}),"\n",(0,h.jsx)(n.li,{children:"\u7f51\u7edc\u5ef6\u8fdf\u6ce2\u52a8"}),"\n"]}),"\n",(0,h.jsx)(n.p,{children:"\u4e3a\u4e86\u5e2e\u52a9\u5f00\u53d1\u8005\u7f16\u5199\u51fa\u66f4\u7b26\u5408\u73b0\u4ee3\u8ba1\u7b97\u673a\u4f53\u7cfb\u7ed3\u6784\u7684\u7a0b\u5e8f\uff0cPhoenix \u5efa\u7acb\u5728\u5f02\u6b65\u548c\u4e8b\u4ef6\u601d\u60f3\u4e4b\u4e0a\u63d0\u4f9b\u4e86\u4ee5\u4e0b\u7279\u6027\uff1a"}),"\n",(0,h.jsxs)(n.ul,{children:["\n",(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.a,{href:"./why-event-driven-microservice#%E4%BB%80%E4%B9%88%E6%98%AF%E4%BA%8B%E4%BB%B6%E9%A9%B1%E5%8A%A8%E5%9E%8B%E5%BE%AE%E6%9C%8D%E5%8A%A1",children:"\u4e8b\u4ef6\u9a71\u52a8"}),"\uff1a\u4e8b\u4ef6\u9a71\u52a8\u578b\u67b6\u6784\u80fd\u591f\u771f\u6b63\u89e3\u8026\u5fae\u670d\u52a1\uff0c\u8fd9\u79cd\u677e\u8026\u5408\u5728\u7cfb\u7edf\u4e2d\u63d0\u4f9b\u4e86\u4e00\u5b9a\u7a0b\u5ea6\u7684\u5f39\u6027\u3002"]}),"\n",(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.a,{href:"./why-event-driven-microservice#eventsouring%E4%BB%8B%E7%BB%8D",children:"EventSouring"}),"\uff1aPhoenix\u63d0\u4f9b\u9ad8\u6027\u80fd\u4ee5\u53ca\u53ef\u4f38\u7f29\u7684EventSouring\u7f16\u7a0b\u6a21\u578b\uff0c\u65b9\u4fbf\u7528\u6237\u9762\u5411\u9886\u57df\u7f16\u7a0b\u3002"]}),"\n",(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.a,{href:"./why-event-driven-microservice#cqrs%E4%BB%8B%E7%BB%8D",children:"CQRS"}),"\uff1a\u5728EventSouring\u7684\u6a21\u5f0f\u4e4b\u4e0a\u63d0\u4f9b\u53ef\u9760\u7684\u4e8b\u4ef6\u53d1\u5e03\u529f\u80fd\uff0c\u65b9\u4fbf\u7528\u6237\u6784\u5efaQ\u7aef\u6a21\u578b\uff0c\u4ece\u800c\u5b9e\u73b0\u547d\u4ee4\u67e5\u8be2\u804c\u8d23\u5206\u79bb\u67b6\u6784\u3002"]}),"\n",(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.a,{href:"./why-event-driven-microservice#eventsouring%E4%BB%8B%E7%BB%8D",children:"\u5ba1\u8ba1"}),"\uff1aPhoenix \u4f7f\u7528\u4e00\u7cfb\u5217\u4e0d\u53ef\u53d8\u4e8b\u5b9e\u7684\u4e8b\u4ef6\u8868\u793a\u7a0b\u5e8f\u72b6\u6001\uff0c\u56e0\u6b64\u652f\u6301\u901a\u8fc7\u4e8b\u4ef6\u6d41\u56de\u6eaf\u7a0b\u5e8f\u72b6\u6001\u7684\u5386\u53f2\u8bb0\u5f55\u4ee5\u5b9e\u73b0\u5ba1\u8ba1\u548c\u8ddf\u8e2a\u3002"]}),"\n",(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.a,{href:"../phoenix-test/elasticity-test",children:"\u6a2a\u5411\u4f38\u7f29"}),"\uff1a\u5728Phoenix\u8fd0\u884c\u6a21\u578b\u4e2d\uff0c\u805a\u5408\u6839\u662f\u6700\u5c0f\u5e76\u53d1\u4ee5\u53ca\u9694\u79bb\u5355\u4f4d\uff0c\u805a\u5408\u6839\u4f1a\u81ea\u52a8\u5e73\u5747shard\u5230\u5404\u4e2a\u8282\u70b9\u5f53\u4e2d\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u589e/\u51cf\u8282\u70b9\u6765\u5b9e\u73b0\u6a2a\u5411\u4f38\u7f29\u3002"]}),"\n",(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.a,{href:"../phoenix-test/available-test",children:"\u9ad8\u53ef\u7528"}),"\uff1a\u4f9d\u8d56\u4e8e Phoenix \u7684\u96c6\u7fa4\u8c03\u5ea6\u80fd\u529b\uff0c\u5f53\u8282\u70b9\u6545\u969c\u65f6\uff0c\u96c6\u7fa4\u80fd\u591f\u5feb\u901f\u68c0\u6d4b\u5e76\u6062\u590d\uff0c\u6545\u969c\u8282\u70b9\u7684\u72b6\u6001\u4f1a\u8f6c\u79fb\u5230\u5065\u5eb7\u8282\u70b9\u3002"]}),"\n",(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.a,{href:"../phoenix-transaction/phoenix-transaction-module",children:"\u4e8b\u52a1\u652f\u6301"}),"\uff1aPhoenix \u652f\u6301 TCC \u548c Saga \u5206\u5e03\u5f0f\u4e8b\u52a1\uff0c\u5e76\u652f\u6301\u4e24\u79cd\u4e8b\u52a1\u6df7\u7528\uff0c\u4ee5\u6ee1\u8db3\u4e1a\u52a1\u9700\u6c42\u3002"]}),"\n",(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.a,{href:"../phoenix-console/phoenix-console-overall",children:"\u8fd0\u7ef4\u76d1\u63a7"}),"\uff1aPhoenix \u5b9e\u73b0\u4e86\u4e00\u5957\u5f3a\u5927\u7684\u670d\u52a1\u76d1\u63a7\u5e73\u53f0\uff0c\u652f\u6301\u5bf9\u591a\u4e2a\u9879\u76ee\u3001\u670d\u52a1\u3001\u5b9e\u4f8b\u7684\u76d1\u63a7\u4ee5\u53ca\u5185\u5b58\u7684\u7ba1\u7406\u3002"]}),"\n"]}),"\n",(0,h.jsx)(n.p,{children:"Phoenix \u5bf9\u805a\u5408\u6839\u7684\u4f7f\u7528\u5c01\u88c5\u4e86\u4e00\u5957\u6613\u4e8e\u4f7f\u7528\u7684\u62bd\u8c61 API\uff0c\u4f7f\u5f00\u53d1\u8005\u80fd\u591f\u9762\u5411\u5bf9\u8c61\u8bbe\u8ba1\u7f16\u7a0b\uff0c\u4e0d\u4f1a\u9677\u5165\u9762\u5411\u8868\u7ed3\u6784\u8bbe\u8ba1\u7684\u56f0\u5883\uff1b\u5728\u5e94\u7528\u67b6\u6784\u5c42\u9762\uff0cPhoenix \u57fa\u4e8e\u4e8b\u4ef6\u9a71\u52a8\u67b6\u6784\u5b9e\u73b0\u4e86\u6709\u72b6\u6001\u7684\u5fae\u670d\u52a1\u7684\u5f02\u6b65\u901a\u4fe1\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u6784\u5efa\u51fa\u677e\u8026\u5408\u3001\u9ad8\u53ef\u7528\u3001\u53ef\u4f38\u7f29\u7684\u5fae\u670d\u52a1\u67b6\u6784\u3002"}),"\n",(0,h.jsxs)(n.blockquote,{children:["\n",(0,h.jsxs)(n.p,{children:["\u6709\u5173 Phoenix \u5728\u9886\u57df\u9a71\u52a8\u8bbe\u8ba1\u65b9\u9762\u7684\u8bbe\u8ba1\u601d\u60f3\uff0c\u53ef\u4ee5\u53c2\u8003\uff1a",(0,h.jsx)(n.a,{href:"/blog/phoenix-scene",children:"Phoenix \u4f7f\u7528\u573a\u666f\u4ecb\u7ecd"})]}),"\n"]}),"\n",(0,h.jsx)(n.h2,{id:"\u5982\u4f55\u5165\u95e8",children:"\u5982\u4f55\u5165\u95e8"}),"\n",(0,h.jsxs)(n.p,{children:["\u5982\u679c\u60a8\u60f3\u8981\u5feb\u901f\u4e0a\u624b Phoenix\uff0c\u6211\u4eec\u5efa\u8bae\u60a8\u4ece\u8fd0\u884c\u7b80\u5355\u7684 Hello World \u9879\u76ee\u5f00\u59cb\uff0c\u4e86\u89e3 Phoenix API \u548c\u76f8\u5173\u914d\u7f6e\u3002\u6709\u5173 HelloWorld \u9879\u76ee\u7684\u5185\u5bb9\uff0c\u8bf7\u53c2\u9605\uff1a",(0,h.jsx)(n.a,{href:"https://github.com/PhoenixIQ/phoenix-samples/tree/master/hello-world",children:"https://github.com/PhoenixIQ/phoenix-samples/"})]}),"\n",(0,h.jsx)(n.p,{children:"\u5982\u679c\u60a8\u60f3\u8981\u6df1\u5165\u4e86\u89e3 Phoenix \u80cc\u540e\u7684\u8bbe\u8ba1\u601d\u60f3\u4ee5\u53ca\u66f4\u9ad8\u7ea7\u522b\u7684\u4fe1\u606f\uff0c\u8bf7\u67e5\u9605\u4e0b\u9762\u7684\u6307\u5357\u3002\u8be5\u6307\u5357\u8bb2\u8ff0\u4e86 Phoenix \u5982\u4f55\u6539\u9020\u5fae\u670d\u52a1\u67b6\u6784\u4ee5\u9002\u5e94\u73b0\u4ee3\u5206\u5e03\u5f0f\u7cfb\u7edf\u7684\u9700\u6c42\uff0c\u5e76\u5305\u542b\u4e00\u4e2a\u6559\u7a0b\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u8fdb\u4e00\u6b65\u4e86\u89e3 Phoenix \u8be5\u6307\u5357\u6db5\u76d6\u4e86\u4ee5\u4e0b\u4e3b\u9898\uff1a"}),"\n",(0,h.jsxs)(n.ul,{children:["\n",(0,h.jsx)(n.li,{children:(0,h.jsx)(n.a,{href:"/docs/2.5.1/phoenix-2.x/phoenix/why-event-driven-microservice",children:"\u4e3a\u4ec0\u4e48\u9700\u8981\u4e8b\u4ef6\u9a71\u52a8\u5fae\u670d\u52a1"})}),"\n",(0,h.jsx)(n.li,{children:(0,h.jsx)(n.a,{href:"/docs/2.5.1/phoenix-2.x/phoenix/how-event-driven-microservice",children:"Phoenix\u5b9e\u73b0\u4e8b\u4ef6\u9a71\u52a8\u578b\u5fae\u670d\u52a1"})}),"\n",(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.a,{href:"/docs/2.5.1/phoenix-2.x/phoenix/quick-start-example/bookings-architecture",children:"\u590d\u6742\u7684\u9152\u5e97\u9884\u8ba2\u6848\u4f8b"}),"\uff0c\u5728 Hello World \u9879\u76ee\u4e4b\u4e0a\uff0c\u7528\u4e8e\u793a\u4f8b\u5e38\u89c1\u7684\u5fae\u670d\u52a1\u7a0b\u5e8f"]}),"\n",(0,h.jsx)(n.li,{children:(0,h.jsx)(n.a,{href:"/docs/2.5.1/phoenix-2.x/phoenix/phoenix-glossary",children:"Phoenix\u6982\u5ff5"})}),"\n"]}),"\n",(0,h.jsx)(n.h2,{id:"\u6846\u67b6\u6027\u80fd",children:"\u6846\u67b6\u6027\u80fd"}),"\n",(0,h.jsx)(n.p,{children:"\u5728 Phoenix \u4e2d\uff0c\u6846\u67b6\u7684\u6027\u80fd\u5c06\u4f7f\u7528\u4ee5\u4e0b\u4e24\u4e2a\u6307\u6807\u8861\u91cf\uff1a"}),"\n",(0,h.jsxs)(n.ul,{children:["\n",(0,h.jsx)(n.li,{children:"\u541e\u5410\uff1a\u6307\u7cfb\u7edf\u6bcf\u79d2\u53ef\u4ee5\u5e76\u53d1\u5904\u7406\u4e8b\u52a1\u7684\u4e2a\u6570"}),"\n",(0,h.jsx)(n.li,{children:"\u65f6\u5ef6\uff1a\u6307\u6bcf\u7b14\u4e8b\u52a1\u5904\u7406\u7684\u8017\u65f6\u60c5\u51b5"}),"\n"]}),"\n",(0,h.jsx)(n.p,{children:"\u4e0b\u9762\u8868\u683c\u6570\u636e\u5c55\u793a\u5728\u4e0d\u540c\u786c\u4ef6\u8d44\u6e90\uff0c\u4e0d\u540c\u5b9e\u4f8b\u914d\u7f6e\u4e0b\uff0cPhoenix \u7684\u6027\u80fd\u8868\u73b0\u60c5\u51b5\uff1a"}),"\n",(0,h.jsxs)(n.blockquote,{children:["\n",(0,h.jsxs)(n.p,{children:["\u66f4\u591a Phoenix \u6027\u80fd\u53ca\u53ef\u7528\u6027\u7b49\u5c42\u9762\u7684\u6d4b\u8bd5\uff0c\u53ef\u4ee5\u53c2\u8003\uff1a",(0,h.jsx)(n.a,{href:"../phoenix-test/features-test",children:"Phoenix \u6d4b\u8bd5\u62a5\u544a"})]}),"\n"]}),"\n",(0,h.jsxs)(n.table,{children:[(0,h.jsx)(n.thead,{children:(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.th,{children:"\u538b\u6d4b\u53c2\u6570(\u6d88\u606f\u603b\u91cf/TPS/\u805a\u5408\u6839\u8303\u56f4)"}),(0,h.jsx)(n.th,{children:"\u5b9e\u4f8b\u4e2a\u6570"}),(0,h.jsx)(n.th,{children:"\u786c\u4ef6\u914d\u7f6e"}),(0,h.jsx)(n.th,{children:"\u7ebf\u7a0b\u6c60\u914d\u7f6e"}),(0,h.jsx)(n.th,{children:"DB\u914d\u7f6e"}),(0,h.jsx)(n.th,{children:"MQ\u914d\u7f6e"}),(0,h.jsx)(n.th,{children:"\u5e73\u5747\u65f6\u5ef6"}),(0,h.jsx)(n.th,{children:"CPU\u4f7f\u7528\u7387"}),(0,h.jsx)(n.th,{children:"\u5b9e\u9645\u5904\u7406TPS"})]})}),(0,h.jsxs)(n.tbody,{children:[(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.td,{children:"540W/4.5W/100"}),(0,h.jsx)(n.td,{children:"6"}),(0,h.jsx)(n.td,{children:"4Core 8GB"}),(0,h.jsx)(n.td,{children:"ForkJoin64"}),(0,h.jsx)(n.td,{children:"4\u5b9e\u4f8b"}),(0,h.jsx)(n.td,{children:"1\u5b9e\u4f8b36partition"}),(0,h.jsx)(n.td,{children:"1782ms"}),(0,h.jsx)(n.td,{children:"56%"}),(0,h.jsx)(n.td,{children:"35272"})]}),(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.td,{children:"600W/5W/100"}),(0,h.jsx)(n.td,{children:"12"}),(0,h.jsx)(n.td,{children:"4Core 8GB"}),(0,h.jsx)(n.td,{children:"ForkJoin64"}),(0,h.jsx)(n.td,{children:"4\u5b9e\u4f8b"}),(0,h.jsx)(n.td,{children:"1\u5b9e\u4f8b36partition"}),(0,h.jsx)(n.td,{children:"1896ms"}),(0,h.jsx)(n.td,{children:"40%"}),(0,h.jsx)(n.td,{children:"42646"})]}),(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.td,{children:"900W/7.5W/100"}),(0,h.jsx)(n.td,{children:"18"}),(0,h.jsx)(n.td,{children:"4Core 8GB"}),(0,h.jsx)(n.td,{children:"ForkJoin64"}),(0,h.jsx)(n.td,{children:"4\u5b9e\u4f8b"}),(0,h.jsx)(n.td,{children:"1\u5b9e\u4f8b36partition"}),(0,h.jsx)(n.td,{children:"1172ms"}),(0,h.jsx)(n.td,{children:"32%"}),(0,h.jsx)(n.td,{children:"52500"})]}),(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.td,{children:"780W/6.5W/100"}),(0,h.jsx)(n.td,{children:"24"}),(0,h.jsx)(n.td,{children:"4Core 8GB"}),(0,h.jsx)(n.td,{children:"ForkJoin64"}),(0,h.jsx)(n.td,{children:"4\u5b9e\u4f8b"}),(0,h.jsx)(n.td,{children:"1\u5b9e\u4f8b36partition"}),(0,h.jsx)(n.td,{children:"1858ms"}),(0,h.jsx)(n.td,{children:"24%"}),(0,h.jsx)(n.td,{children:"58880"})]}),(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.td,{children:"1080W/9W/100"}),(0,h.jsx)(n.td,{children:"30"}),(0,h.jsx)(n.td,{children:"4Core 8GB"}),(0,h.jsx)(n.td,{children:"ForkJoin64"}),(0,h.jsx)(n.td,{children:"4\u5b9e\u4f8b"}),(0,h.jsx)(n.td,{children:"1\u5b9e\u4f8b36partition"}),(0,h.jsx)(n.td,{children:"1437ms"}),(0,h.jsx)(n.td,{children:"24%"}),(0,h.jsx)(n.td,{children:"57077"})]})]})]})]})}function c(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,h.jsx)(n,{...e,children:(0,h.jsx)(l,{...e})}):l(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>t,a:()=>d});var h=i(67294);const r={},s=h.createContext(r);function d(e){const n=h.useContext(s);return h.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),h.createElement(s.Provider,{value:n},e.children)}}}]);