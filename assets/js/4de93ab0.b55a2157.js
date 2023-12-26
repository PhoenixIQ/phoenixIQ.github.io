"use strict";(self.webpackChunkphoenixiq_github_io=self.webpackChunkphoenixiq_github_io||[]).push([[9803],{93222:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>h,default:()=>o,frontMatter:()=>l,metadata:()=>c,toc:()=>a});var s=i(85893),t=i(11151);const l={slug:"event-publish-backtrack",title:"EventPublish \u7684\u56de\u6eaf\u548c\u53bb\u91cd",authors:"andychen",tags:["Phoenix","EventPublish","Backtrack"]},h=void 0,c={permalink:"/blog/event-publish-backtrack",editUrl:"https://github.com/PhoenixIQ/blog/2023-11-11-EventPublish-Backtrack.md",source:"@site/blog/2023-11-11-EventPublish-Backtrack.md",title:"EventPublish \u7684\u56de\u6eaf\u548c\u53bb\u91cd",description:"\u5728 2.6.0 \u4e2d, \u6211\u4eec\u5b9e\u73b0\u4e86 EventPublish \u7684\u56de\u6eaf\u548c\u53bb\u91cd\u673a\u5236\uff0c\u4fee\u590d\u4e86\u4e4b\u524d\u5728\u90e8\u5206\u6781\u7aef\u573a\u666f\u4e0b\u53ef\u80fd\u51fa\u73b0\u6570\u636e\u5e93\u6f0f\u8bfb\u7684\u95ee\u9898\u3002",date:"2023-11-11T00:00:00.000Z",formattedDate:"2023\u5e7411\u670811\u65e5",tags:[{label:"Phoenix",permalink:"/blog/tags/phoenix"},{label:"EventPublish",permalink:"/blog/tags/event-publish"},{label:"Backtrack",permalink:"/blog/tags/backtrack"}],readingTime:10.03,hasTruncateMarker:!0,authors:[{name:"jingzhang.chen",title:"Maintainer",url:"https://github.com/roiocam",imageURL:"https://avatars.githubusercontent.com/u/26020358?v=4",key:"andychen"}],frontMatter:{slug:"event-publish-backtrack",title:"EventPublish \u7684\u56de\u6eaf\u548c\u53bb\u91cd",authors:"andychen",tags:["Phoenix","EventPublish","Backtrack"]},unlisted:!1,nextItem:{title:"Phoenix 2.6.0 \u8fc1\u79fb\u6307\u5357",permalink:"/blog/2.6.x-migration-guide"}},d={authorsImageUrls:[void 0]},a=[{value:"EventPublish \u7684\u6311\u62181: \u6027\u80fd",id:"eventpublish-\u7684\u6311\u62181-\u6027\u80fd",level:2},{value:"\u52a8\u6001\u8fb9\u754c(\u7d22\u5f15)",id:"\u52a8\u6001\u8fb9\u754c\u7d22\u5f15",level:3},{value:"EventPublish \u7684\u6311\u62182: \u5b8c\u6574\u6027",id:"eventpublish-\u7684\u6311\u62182-\u5b8c\u6574\u6027",level:2},{value:"1. EventStore \u5199\u5165\u793a\u4f8b",id:"1-eventstore-\u5199\u5165\u793a\u4f8b",level:3},{value:"2 EventPublish \u7a97\u53e3\u6ed1\u52a8\u524d",id:"2-eventpublish-\u7a97\u53e3\u6ed1\u52a8\u524d",level:3},{value:"3. EventPublish \u7a97\u53e3\u6ed1\u52a8\u540e",id:"3-eventpublish-\u7a97\u53e3\u6ed1\u52a8\u540e",level:3},{value:"EventPublish \u56de\u6eaf\u673a\u5236",id:"eventpublish-\u56de\u6eaf\u673a\u5236",level:2},{value:"1. \u5b8c\u6574\u6027\u6821\u9a8c",id:"1-\u5b8c\u6574\u6027\u6821\u9a8c",level:3},{value:"2. \u56de\u6eaf\u67e5\u8be2",id:"2-\u56de\u6eaf\u67e5\u8be2",level:3},{value:"3. \u53bb\u91cd\u673a\u5236",id:"3-\u53bb\u91cd\u673a\u5236",level:3},{value:"\u9a8c\u8bc1",id:"\u9a8c\u8bc1",level:2},{value:"\u4fee\u590d\u524d",id:"\u4fee\u590d\u524d",level:3},{value:"\u4fee\u590d\u540e",id:"\u4fee\u590d\u540e",level:3}];function r(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u5728 2.6.0 \u4e2d, \u6211\u4eec\u5b9e\u73b0\u4e86 EventPublish \u7684\u56de\u6eaf\u548c\u53bb\u91cd\u673a\u5236\uff0c\u4fee\u590d\u4e86\u4e4b\u524d\u5728\u90e8\u5206\u6781\u7aef\u573a\u666f\u4e0b\u53ef\u80fd\u51fa\u73b0\u6570\u636e\u5e93\u6f0f\u8bfb\u7684\u95ee\u9898\u3002"}),"\n"]}),"\n","\n",(0,s.jsx)(n.h2,{id:"eventpublish-\u7684\u6311\u62181-\u6027\u80fd",children:"EventPublish \u7684\u6311\u62181: \u6027\u80fd"}),"\n",(0,s.jsx)(n.p,{children:"\u5728 Phoenix 2.6.0 \u7248\u672c\u4e2d\uff0c\u4e3a\u4e86\u63d0\u5347 EventPublish \u7684\u8bfb\u53d6\u6027\u80fd\uff0c\u6211\u4eec\u91cd\u6784\u4e86 EventPublish \u7684\u6838\u5fc3\u90e8\u5206\u3002\u5728\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u53d1\u73b0\u4e86\u4e00\u4e9b\u9700\u8981\u89e3\u51b3\u7684\u95ee\u9898\u3002\u8ba9\u6211\u4eec\u9996\u5148\u4e86\u89e3\u4e00\u4e0b EventPublish \u7684\u5b9a\u4e49\u548c\u5b9e\u73b0\uff1a"}),"\n",(0,s.jsxs)(n.p,{children:["EventPublish \u5b9e\u9645\u4e0a\u662f EventSourcing \u4e2d\u5168\u5c40\u4e8b\u4ef6\u6d41\u7684\u4e00\u4e2a\u6295\u5f71\u3002\u5168\u5c40\u4e8b\u4ef6\u6d41\u9700\u8981\u4e25\u683c\u6709\u5e8f\uff0c\u5426\u5219\uff0c\u591a\u4e2a\u805a\u5408\u6839\u7684\u4ea4\u4e92\u53ef\u80fd\u4f1a\u5bfc\u81f4\u4e8b\u4ef6\u987a\u5e8f\uff08\u65f6\u95f4\uff09\u4e0d\u4e00\u81f4\u7684\u95ee\u9898\uff08\u4f8b\u5982\uff1a\u5728Saga\u573a\u666f\u4e0b\uff09\u3002\n\u56e0\u6b64\uff0cEventPublish\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"create_time"})," \u5b57\u6bb5\u4f5c\u4e3a\u67e5\u8be2\u7d22\u5f15\uff0c\u4e14\u4e25\u683c\u6309\u7167\u65f6\u95f4\u987a\u5e8f\u8fdb\u884c\u6392\u5e8f\u3002\u540c\u65f6\uff0c\u6211\u4eec\u4f7f\u7528\u6570\u636e\u5e93(MySQL)\u63d0\u4f9b\u7684 ",(0,s.jsx)(n.code,{children:"CURRENT_TIMESTAMP()"})," \u51fd\u6570\u4f5c\u4e3a\u65f6\u95f4\u5b57\u6bb5\u7684\u63d2\u5165\u503c\uff08\u4f7f\u7528\u4e86\u5355\u70b9\u7684\u65f6\u95f4\u6233\uff0c\u80fd\u907f\u514d",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Logical_clock",children:"\u5206\u5e03\u5f0f\u7cfb\u7edf\u7684\u4e8b\u4ef6\u987a\u5e8f\u95ee\u9898"}),"\uff09"]}),"\n",(0,s.jsx)(n.p,{children:"\u4e3a\u4e86\u964d\u4f4eEventPublish\u5230\u6d88\u8d39\u8005\u4e4b\u95f4\u7684\u5ef6\u8fdf\uff0c\u6211\u4eec\u91c7\u7528\u4e86\u5206\u9875\u548c\u8303\u56f4\u67e5\u8be2\u6765\u52a0\u901f\u6570\u636e\u5e93\u67e5\u8be2\uff0c\u4ece\u800c\u51cf\u5c11\u7aef\u5230\u7aef\u7684\u5ef6\u8fdf\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u7136\u800c\uff0c\u5728\u9ad8\u541e\u5410\u91cf\u7684\u5e94\u7528\u573a\u666f\u4e0b\uff0c\u8fd9\u4e9b\u673a\u5236\u4ecd\u53ef\u80fd\u4f1a\u5f15\u53d1\u95ee\u9898\uff1a ",(0,s.jsx)(n.strong,{children:"\u5728\u6211\u4eec\u7684\u6027\u80fd\u6d4b\u8bd5\u4e2d\u53d1\u73b0\uff0c\u5199\u5165\u662f\u5e76\u884c\u7684\uff0c\u800c\u67e5\u8be2\u5219\u662f\u5355\u7ebf\u7a0b\u7684\u3002\u5728\u5206\u9875\u67e5\u8be2\u7684\u573a\u666f\u4e0b\uff0c\u5373\u4f7f\u6570\u636e\u5e93\u54cd\u5e94\u65f6\u95f4\u53ea\u670910ms\uff0c\u6211\u4eec\u4e5f\u9700\u8981\u6bcf\u79d2\u6267\u884c\u8d85\u8fc7100\u6b21\u7684\u6570\u636e\u5e93\u67e5\u8be2\u3002"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u5199\u5165\u548c\u67e5\u8be2\u901f\u5ea6\u7684\u4e0d\u5339\u914d\u5bfc\u81f4\u4e86\u751f\u4ea7\u8005\u548c\u6d88\u8d39\u8005\u4e4b\u95f4\u7684\u95ee\u9898\uff0c\u4e8b\u4ef6\u5728\u6570\u636e\u5e93\u4e2d\u79ef\u538b\uff0c\u67e5\u8be2\u8303\u56f4\u968f\u7740\u65f6\u95f4\u7684\u63a8\u79fb\u800c\u589e\u5927\u3002\u6839\u636e ",(0,s.jsx)(n.a,{href:"https://dev.mysql.com/doc/refman/8.0/en/where-optimization.html",children:"MySQL \u67e5\u8be2\u4f18\u5316\u6587\u6863"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Each table index is queried, and the best index is used unless the optimizer believes that it is more efficient to use a table scan. \nAt one time, a scan was used based on whether the best index spanned more than 30% of the table, but a fixed percentage no longer determines the choice between using an index or a scan. \nThe optimizer now is more complex and bases its estimate on additional factors such as table size, number of rows, and I/O block size.\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5f53EventPublish Reader\u7684\u4e8b\u4ef6\u6d88\u8d39\u901f\u7387\u843d\u540e\u4e8e\u603b\u884c\u6570\u768430%\u65f6\uff0c\u7d22\u5f15\u5c06\u5931\u6548\uff0c\u67e5\u8be2\u5c06\u9000\u5316\u4e3a\u5168\u8868\u626b\u63cf\uff0c\u8fd9\u4f1a\u5bfc\u81f4\u6570\u636e\u5e93\u67e5\u8be2\u7684QPS\u4e0b\u964d\u52302000/s\uff0c\u6d88\u8d39\u843d\u540e\u7684\u95ee\u9898\u5c06\u66f4\u52a0\u4e25\u91cd\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u52a8\u6001\u8fb9\u754c\u7d22\u5f15",children:"\u52a8\u6001\u8fb9\u754c(\u7d22\u5f15)"}),"\n",(0,s.jsx)(n.p,{children:"\u4e3a\u4e86\u89e3\u51b3\u8be5\u95ee\u9898\uff0cPhoenix \u5728\u5185\u90e8\u5bf9\u8303\u56f4\u67e5\u8be2\u7684\u8fb9\u754c\u8fdb\u884c\u4e86\u52a8\u6001\u8c03\u6574\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5f53\u5355\u6b21\u67e5\u8be2\u6761\u4ef6",(0,s.jsx)(n.code,{children:"(\u5f53\u524d Offset, \u6570\u636e\u5e93\u65f6\u95f4 - 1s)"}),"\u4e0b\uff0c\u8fd4\u56de\u7684\u7ed3\u679c\u7b49\u4e8e\u67e5\u8be2\u5206\u9875\u7684\u5927\u5c0f\u65f6\uff0cEventPublish Reader \u5219\u8ba4\u4e3a\u5f53\u524d\u9700\u8981\u5206\u9875\uff0c \u5e76\u8fdb\u5165\u5206\u9875\u6a21\u5f0f"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5728\u5206\u9875\u6a21\u5f0f\u4e0b\uff0c\u67e5\u8be2\u6761\u4ef6\u53d8\u6210\u4e86",(0,s.jsx)(n.code,{children:"(\u5f53\u524d Offset, \u7b2c\u4e00\u6b21\u54cd\u5e94\u7ed3\u679c\u96c6\u5408\u4e2d\u7684\u6700\u5927\u65f6\u95f4\u6233)"}),"\uff0c\u76f4\u5230\u5206\u9875\u6a21\u5f0f\u4e0b\u67e5\u8be2\u7684\u7ed3\u679c\u5c0f\u4e8e\u5206\u9875\u5927\u5c0f"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5728\u5206\u9875\u6a21\u5f0f\u4e0b\uff0c\u6570\u636e\u5e93\u54cd\u5e94\u96c6\u5408\u5927\u5c0f\u4f4e\u4e8e\u5206\u9875\u5927\u5c0f\uff0c\u9000\u51fa\u5206\u9875\u6a21\u5f0f\uff0c\u4f7f\u7528\uff1a",(0,s.jsx)(n.code,{children:"(\u5f53\u524d Offset, \u6570\u636e\u5e93\u65f6\u95f4 - 1s)"})," \u4f5c\u4e3a\u7d22\u5f15\u67e5\u8be2"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u79cd\u5206\u9875\u673a\u5236\u4e0b\uff0c\u867d\u7136\u5728\u957f\u65f6\u95f4\u9ad8\u541e\u5410\u91cf\u4e0b\uff0cEventPublish \u6709\u53ef\u80fd\u4f1a\u4e0d\u65ad\u5728\u666e\u901a\u6a21\u5f0f\u548c\u5206\u9875\u6a21\u5f0f\u4e4b\u95f4\u6765\u5207\u6362\uff0c\u4f46\u76f8\u5bf9\u4e8e\u5168\u8868\u626b\u63cf\uff0c\u7d22\u5f15\u7684\u5229\u7528\u7387\u66f4\u9ad8\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"eventpublish-\u7684\u6311\u62182-\u5b8c\u6574\u6027",children:"EventPublish \u7684\u6311\u62182: \u5b8c\u6574\u6027"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u4f18\u5316\u5206\u9875\u67e5\u8be2\u6027\u80fd\u4ee5\u53ca\u5b9e\u73b0\u5e76\u884c\u7684 EventPublish Reader \u540e\uff0cEventPublish \u7684\u6027\u80fd\u6709\u4e86\u663e\u8457\u7684\u63d0\u9ad8\u3002\u5728\u6211\u4eec\u5185\u90e8\u7684\u6d4b\u8bd5\u4e2d\uff0c32 \u5e76\u884c\u5ea6\u7684 EventPublish \u80fd\u5b9e\u73b0 15k/s \u7684 QPS\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u7136\u800c\uff0c\u6211\u4eec\u5728 Phoenix \u7684 ",(0,s.jsx)(n.a,{href:"/docs/phoenix-console/phoenix-console-system-monitor",children:"APM"})," \u4e2d\n\u89c2\u5bdf\u5230\u5728\u9ad8\u541e\u5410\u91cf\u4e0b EventPublish \u65e0\u6cd5\u5b8c\u6574\u5730\u53d1\u9001\u6240\u6709\u4e8b\u4ef6\u3002\u4f8b\u5982\uff1a\u63d2\u5165\u4e86200,000\u6761\u6570\u636e\uff0c\u4f46\u53ea\u8bfb\u53d6\u5230\u4e86199,888\u6761\u6570\u636e\uff0c\u7f3a\u5931\u4e86112\u6761\u6570\u636e\u3002\u7ecf\u8fc7\u8be6\u7ec6\u7684\u6df1\u5165\u5206\u6790\uff0c\u6211\u4eec\u8ba4\u4e3aEventPublish Reader\u5b58\u5728\u6f0f\u8bfb\u7684\u73b0\u8c61\uff0c\u5176\u4e3b\u8981\u539f\u56e0\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6839\u636e ",(0,s.jsx)(n.a,{href:"https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_now",children:"MySQL \u7684\u6587\u6863"}),"\uff08\u5176\u4ed6\u6570\u636e\u5e93\u540c\u7406\uff09"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"NOW() returns a constant time that indicates the time at which the statement began to execute."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u610f\u5473\u7740\uff0c\u5b83\u8bb0\u5f55\u7684\u662f\u4e8b\u52a1\u5f00\u59cb\u7684\u65f6\u95f4\uff0c\u800c\u4e0d\u662f\u4e8b\u52a1\u63d0\u4ea4\u7684\u65f6\u95f4\u3002\u56e0\u6b64\uff0c\u5728Phoenix\u7684\u6301\u4e45\u5316\u6279\u91cf\u5904\u7406\u548c EventPublish \u7684\u65f6\u95f4\u6233\u8bfb\u53d6\u8fc7\u7a0b\u4e2d\uff0c\u53ef\u80fd\u4f1a\u4e22\u5931\u4e00\u6279\u6301\u4e45\u5316\u4e8b\u4ef6\u4e2d\u5904\u4e8e\u6279\u6b21\u5c3e\u90e8\u7684\u4e8b\u4ef6\u3002\u4ee5\u4e0b\u662f\u793a\u4f8b\u8bf4\u660e\uff1a"}),"\n",(0,s.jsx)(n.h3,{id:"1-eventstore-\u5199\u5165\u793a\u4f8b",children:"1. EventStore \u5199\u5165\u793a\u4f8b"}),"\n",(0,s.jsx)(n.p,{children:"EventStore \u7684\u5199\u5165\u6a21\u5f0f\u662f\u6279\u5904\u7406\u6a21\u5f0f\u4e14\u7531\u591a\u7ebf\u7a0b\u6267\u884c\u3002\u5728\u67d0\u4e9b\u6781\u7aef\u6761\u4ef6\u4e0b\uff0c\u53ef\u80fd\u4f1a\u51fa\u73b0\u5982\u4e0b\u7684\u60c5\u51b5\uff1a\u6570\u636e\u5e93\u5728\u5904\u7406\u67d0\u4e00\u6279\u4e2d\u90e8\u7684\u51e0\u4e2a\u4e8b\u4ef6\u65f6\uff0c\u7531\u4e8e\u6210\u672c\u8f83\u9ad8\uff0c\u5bfc\u81f4\u8fd9\u4e00\u6279\u6b21\u5c3e\u90e8\u7684\u4e8b\u4ef6\u65e0\u6cd5\u53ca\u65f6\u521b\u5efa\u5feb\u7167\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(52562).Z+"",width:"1033",height:"435"})}),"\n",(0,s.jsx)(n.h3,{id:"2-eventpublish-\u7a97\u53e3\u6ed1\u52a8\u524d",children:"2 EventPublish \u7a97\u53e3\u6ed1\u52a8\u524d"}),"\n",(0,s.jsx)(n.p,{children:"\u5bf9\u4e8e\u8fd0\u884c\u901f\u5ea6\u591f\u5feb\u7684 EventPublish \u800c\u8a00\uff08\u5982\u4e0b\u56fe\uff1a\u53ea\u6709 Phoenix \u624b\u52a8\u5ef6\u540e\u7684 1s \u67e5\u8be2\uff09\uff0c\u6b64\u65f6\u5f53\u524d\u65f6\u95f4\u7a97\u53e3\u548c\u4e0a\u4e00\u6279\u7684\u5199\u5165\u53ef\u80fd\u8fd8\u672a\u5b8c\u5168\u5b8c\u6210\uff0c\u4f46\u662f\u5728\u672c\u65f6\u95f4\u7a97\u53e3\u5185\uff0cEventPublish \u5df2\u65e0\u6cd5\u67e5\u8be2/\u8bfb\u53d6\u5230\u66f4\u591a\u6570\u636e\u4e86\u3002\u56e0\u6b64\nEventPublish \u5c06\u4f1a\u6ed1\u52a8\u5230\u4e0b\u4e00\u4e2a\u65f6\u95f4\u7a97\u53e3\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(21507).Z+"",width:"1493",height:"272"})}),"\n",(0,s.jsx)(n.h3,{id:"3-eventpublish-\u7a97\u53e3\u6ed1\u52a8\u540e",children:"3. EventPublish \u7a97\u53e3\u6ed1\u52a8\u540e"}),"\n",(0,s.jsx)(n.p,{children:'\u5728 EventPublish \u7684\u6ed1\u52a8\u8fc7\u7a0b\u4e2d\uff0c\u53ef\u80fd\u6570\u636e\u5e93\u4ecd\u7136\u4f1a\u5199\u5165\u4e00\u4e9b\u5f53\u524d\u65f6\u95f4\u7a97\u53e3\u7684\u4e8b\u4ef6\uff0c\u4f46\u4e5f\u6709\u4e00\u79cd\u53ef\u80fd\uff0c\u76f4\u5230\u5f53\u524d\u65f6\u95f4\u7a97\u53e3\u5904\u7406\u5b8c\u6bd5\uff0c\u5269\u4f59\u7684 "8\u30019" \u4e8b\u4ef6\u4ecd\u672a\u63d0\u4ea4\uff0c\u56e0\u6b64\u5bf9\u4e8e EventPublish \u800c\u8a00\uff0c"8\uff0c9" \u4e8b\u4ef6\u76f8\u5f53\u4e8e"\u6f0f\u8bfb"\u4e86\u3002'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(33381).Z+"",width:"1493",height:"386"})}),"\n",(0,s.jsx)(n.h2,{id:"eventpublish-\u56de\u6eaf\u673a\u5236",children:"EventPublish \u56de\u6eaf\u673a\u5236"}),"\n",(0,s.jsx)(n.p,{children:"\u4e3a\u4e86\u89e3\u51b3 EventPublish \u6f0f\u8bfb\u95ee\u9898\uff0cPhoenix \u5728 2.6.0 \u4e2d\u4e3a EventPublish \u589e\u52a0\u4e86\u56de\u6eaf\u673a\u5236\uff0c\u8be5\u673a\u5236\u4e3b\u8981\u7684\u6d41\u7a0b\u5982\u4e0b\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5b9e\u65f6\u68c0\u6d4b\u8bfb\u53d6\u4e8b\u4ef6\u6d41\u7684\u5b8c\u6574\u6027"}),"\n",(0,s.jsx)(n.li,{children:"\u68c0\u6d4b\u4e8b\u4ef6\u6f0f\u8bfb\u65f6\uff0c\u8fdb\u884c\u56de\u6eaf\u67e5\u8be2\u4ee5\u56de\u586b\u4e8b\u4ef6\u6d41\u95f4\u9699"}),"\n",(0,s.jsx)(n.li,{children:"\u4e8b\u4ef6\u53bb\u91cd\u673a\u5236"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"1-\u5b8c\u6574\u6027\u6821\u9a8c",children:"1. \u5b8c\u6574\u6027\u6821\u9a8c"}),"\n",(0,s.jsx)(n.p,{children:"EventPublish \u8bfb\u53d6\u7684\u662f EventSourcing \u7684\u5168\u5c40\u6295\u5f71\uff0c\u5728\u5168\u5c40\u7ef4\u5ea6\u4e0a\u4e8b\u4ef6\u6d41\u7684\u5b8c\u6574\u6027\u96be\u4ee5\u68c0\u67e5\uff08\u540c\u4e00\u4e2a\u65f6\u95f4\u53ef\u80fd\u5199\u5165\u591a\u6b21\uff0c\u5e76\u65e0\u4e00\u4e2a\u5168\u5c40\u552f\u4e00\u7684 UUID \u5b57\u6bb5\uff09\uff0c\u9664\u975e\u4e8b\u4ef6\u7684\u552f\u4e00\u5217\u4f7f\u7528\u81ea\u589e\u7684\u5e8f\u5217\uff08\u8fd9\u4f1a\u5e26\u6765\u5199\u5165\u7684\u5f00\u9500\uff09\u3002\n\u4f46\u662f\u6211\u4eec\u53ef\u4ee5\u4ece\u805a\u5408\u6839\u7ef4\u5ea6\u6765\u68c0\u67e5\u5176\u4e8b\u4ef6\u6d41\u7684\u5b8c\u6574\u6027\uff0c\u56e0\u4e3a\u805a\u5408\u6839\u7684\u7248\u672c\u662f\u5b8c\u5168\u5355\u8c03\u9012\u589e\u7684\u5e8f\u5217\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(195).Z+"",width:"1967",height:"595"})}),"\n",(0,s.jsx)(n.h3,{id:"2-\u56de\u6eaf\u67e5\u8be2",children:"2. \u56de\u6eaf\u67e5\u8be2"}),"\n",(0,s.jsxs)(n.p,{children:["\u56de\u6eaf\u67e5\u8be2\u5efa\u7acb\u5728\u5b8c\u6574\u6027\u6821\u9a8c\u4e4b\u4e0a\uff0c\u5f53\u68c0\u67e5\u5230\u4e8b\u4ef6\u7f3a\u5931\u65f6\uff0cEventPublish \u4f1a\u505c\u4e0b\u5e76\u5c1d\u8bd5\u83b7\u53d6\u7f3a\u5931\u7684\u4e8b\u4ef6\u76f4\u5230\u8be5\u805a\u5408\u6839\u4e8b\u4ef6\u6d41\u7f3a\u5931\u7684\u4e8b\u4ef6\u5e8f\u5217\u88ab\u8865\u9f50\uff0c\u6216\u8005\u91cd\u8bd5\u67e5\u8be2\u6b21\u6570\u5230\u8fbe\n",(0,s.jsx)(n.code,{children:"maxBackoff"})," \u6b21\u6570\u540e\uff0c\u7565\u8fc7\u8be5\u6bb5\u4e8b\u4ef6\u5e8f\u5217\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(83622).Z+"",width:"1315",height:"714"})}),"\n",(0,s.jsx)(n.h3,{id:"3-\u53bb\u91cd\u673a\u5236",children:"3. \u53bb\u91cd\u673a\u5236"}),"\n",(0,s.jsx)(n.p,{children:'\u5728\u652f\u6301\u4e86\u56de\u6eaf\u67e5\u8be2\u540e\uff0c\u53ef\u80fd\u5b58\u5728\u4e00\u79cd\u7279\u6b8a\u60c5\u51b5\uff0c\u5728\u56de\u6eaf\u67e5\u8be2\u4e4b\u540e\u7684\u4e0b\u4e00\u4e2a\u67e5\u8be2\u7a97\u53e3\u4e2d\uff0c\u63a5\u6536\u5230"\u5df2\u586b\u5145\u7684\u7684\u4e8b\u4ef6\u5e8f\u5217"\uff0c\u6b64\u65f6\u9700\u8981\u5c06\u8fd9\u4e9b\u91cd\u590d\u7684\u4e8b\u4ef6\u8fdb\u884c\u53bb\u91cd\u8fc7\u6ee4\uff0c\n\u53bb\u91cd\u673a\u5236\u7684\u5b9e\u73b0\u4e0e\u5b8c\u6574\u6027\u6821\u9a8c\u673a\u5236\u51e0\u4e4e\u4e00\u6837\u3002'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(66506).Z+"",width:"1435",height:"836"})}),"\n",(0,s.jsx)(n.p,{children:"\u5bf9\u4e8e\u4e3a\u4f55\u5728\u56de\u6eaf\u67e5\u8be2\u540e\uff0c\u4f1a\u63a5\u6536\u5230\u5df2\u586b\u5145\u7684\u4e8b\u4ef6\u5e8f\u5217\uff0c\u5219\u662f\u53e6\u4e00\u4e2a\u539f\u56e0\u3002\u5728\u5148\u524d\u672c\u6587\u5df2\u63d0\u5230\uff0c\u5199\u5165\u662f\u7ebf\u7a0b\u7ea7\u5e76\u884c\u7684\uff0c\u56e0\u6b64\u5f53\u540c\u4e00\u4e2a\u805a\u5408\u6839\u7684\u4e0d\u540c\u4e8b\u4ef6\u88ab\u5206\u6563\u5230\u4e0d\u540c\u7684\u805a\u5408\u6839\u4e4b\u540e\uff0c\n\u7531\u4e8e\u7ebf\u7a0b\u8c03\u5ea6\u7684\u968f\u673a\u6027\uff0c\u6709\u53ef\u80fd\u540c\u4e00\u4e2a\u805a\u5408\u6839\u7684\u9ad8\u7248\u672c\u4e8b\u4ef6\u7684\u6570\u636e\u5e93\u4e8b\u52a1\u53ef\u80fd\u4f1a\u5148\u4e8e\u8f83\u4f4e\u7248\u672c\u7684\u6570\u636e\u5e93\u4e8b\u52a1\u5f00\u59cb\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(83994).Z+"",width:"2286",height:"455"})}),"\n",(0,s.jsx)(n.p,{children:"\u53bb\u91cd\u662f\u6709\u610f\u4e49\u7684\uff0c\u53ef\u4ee5\u907f\u514d\u91cd\u590d\u53d1\u9001\u4e8b\u4ef6\uff0c\u5728\u5f02\u5e38\u91cd\u542f\u6216\u63d0\u4ea4 offset \u5931\u8d25\u7684\u60c5\u51b5\u4e0b\u7279\u522b\u6709\u7528\u3002\u53e6\u5916\uff0c\u56de\u6eaf\u65b9\u6848\u7684\u589e\u52a0\u8fd8\u80fd\u4fdd\u8bc1\u805a\u5408\u6839\u7684\u4e8b\u4ef6\u987a\u5e8f\u5f97\u5230\u5f3a\u4e00\u81f4\u7684\u4fdd\u8bc1\uff0c\u8fd9\u662f\u4e00\u4e2a\u989d\u5916\u7684\u5956\u52b1\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u9a8c\u8bc1",children:"\u9a8c\u8bc1"}),"\n",(0,s.jsx)(n.p,{children:"\u4ee5\u6bcf\u79d2 6,000, \u6bcf\u79d2 16,000 \u7684\u6848\u4f8b\u5404\u6d4b\u8bd5 100 \u79d2\uff0c\u603b\u5171\u5199\u5165 2,200,000 \u4e8b\u4ef6\u7684\u6848\u4f8b\u6765\u5bf9\u6bd4\u56de\u6eaf\u673a\u5236\u7684\u5b9e\u73b0\u524d\u540e"}),"\n",(0,s.jsx)(n.h3,{id:"\u4fee\u590d\u524d",children:"\u4fee\u590d\u524d"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u9ad8\u9891\u4e0b\uff0816,000\uff09\u4e22\u5931\u4e86 1371 \u4e2a\u4e8b\u4ef6\uff0c\u800c\u4f4e\u9891\uff086,000\uff09\u4e0b\u5219\u57fa\u672c\u65e0\u4e8b\u4ef6\u4e22\u5931\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(83112).Z+"",width:"1075",height:"682"})}),"\n",(0,s.jsx)(n.h3,{id:"\u4fee\u590d\u540e",children:"\u4fee\u590d\u540e"}),"\n",(0,s.jsx)(n.p,{children:"\u5373\u4f7f\u662f\u5728\u9ad8\u9891\u4e0b\uff0816,000\uff09\u4e5f\u65e0\u4e8b\u4ef6\u4e22\u5931\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(45262).Z+"",width:"1075",height:"682"})})]})}function o(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},45262:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/after-backtrack-d8ed9d3d1b2e519bbd848e96e6cbf048.png"},195:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/backtrack-check-24c1609d7e2434348c6c7f03e9ee48d3.png"},66506:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/backtrack-deduplicate-3c2c74e3dd71b89b9f94824ca170f797.png"},83622:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/backtrack-query-8ab19fa116671b99f043ea6819ddff32.png"},83112:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/before-backtrack-aafec2660e40e3c6f162bfc8e4197a5a.png"},83994:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/concurrent-insert-5e1e2837e8bae161e89dfefd3c68137b.png"},52562:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/database-f1586ae219f5d056457fa4ec17fb9ae0.png"},21507:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/event-publish-1-2a04cdf8cf15ab4d68d1588c0c217aae.png"},33381:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/event-publish-2-bfce0701fd3738d1889954187104b720.png"},11151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>h});var s=i(67294);const t={},l=s.createContext(t);function h(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:h(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);