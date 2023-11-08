"use strict";(self.webpackChunkphoenixiq_github_io=self.webpackChunkphoenixiq_github_io||[]).push([[74175],{40228:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>x,frontMatter:()=>c,metadata:()=>s,toc:()=>h});var o=i(85893),t=i(11151);const c={slug:"rocketmq-in-phoenix",title:"RocketMQ\u5728Phoenix\u6846\u67b6\u4e2d\u7684\u5e94\u7528\u4e0e\u5b9e\u8df5",authors:"baozi",tags:["Phoenix","Rocketmq"]},r=void 0,s={permalink:"/blog/rocketmq-in-phoenix",editUrl:"https://github.com/PhoenixIQ/blog/2020-01-16-rocketmq-in-phoenix.md",source:"@site/blog/2020-01-16-rocketmq-in-phoenix.md",title:"RocketMQ\u5728Phoenix\u6846\u67b6\u4e2d\u7684\u5e94\u7528\u4e0e\u5b9e\u8df5",description:"\u611f\u8c22RocketMQ\u5b98\u5fae\u91c7\u7a3f",date:"2020-01-16T00:00:00.000Z",formattedDate:"2020\u5e741\u670816\u65e5",tags:[{label:"Phoenix",permalink:"/blog/tags/phoenix"},{label:"Rocketmq",permalink:"/blog/tags/rocketmq"}],readingTime:10.53,hasTruncateMarker:!1,authors:[{name:"\u5305\u5b50",title:"Honor Member",url:"https://github.com/shibd",imageURL:"https://avatars.githubusercontent.com/u/33416836?s=400&v=4 Tay",key:"baozi"}],frontMatter:{slug:"rocketmq-in-phoenix",title:"RocketMQ\u5728Phoenix\u6846\u67b6\u4e2d\u7684\u5e94\u7528\u4e0e\u5b9e\u8df5",authors:"baozi",tags:["Phoenix","Rocketmq"]},unlisted:!1,prevItem:{title:"Phoenix \u901a\u8fc7GitLab\u7ba1\u7406\u5f00\u53d1\u6d41\u7a0b\u6280\u672f\u5206\u4eab",permalink:"/blog/GitLab-workflow"}},l={authorsImageUrls:[void 0]},h=[{value:"\u884c\u4e1a\u80cc\u666f",id:"\u884c\u4e1a\u80cc\u666f",level:2},{value:"Phoniex\u4ecb\u7ecd",id:"phoniex\u4ecb\u7ecd",level:2},{value:"\u67b6\u6784\u56fe",id:"\u67b6\u6784\u56fe",level:3},{value:"\u6982\u5ff5\u672f\u8bed",id:"\u6982\u5ff5\u672f\u8bed",level:3},{value:"RocketMQ\u548cPhoenix",id:"rocketmq\u548cphoenix",level:3},{value:"RocketMQ\u548cEventSouring",id:"rocketmq\u548ceventsouring",level:3},{value:"RocketMQ\u4e0b\u7684Phoenix\u6846\u67b6\u6027\u80fd",id:"rocketmq\u4e0b\u7684phoenix\u6846\u67b6\u6027\u80fd",level:3},{value:"RocketMQ\u7684\u6d88\u606f\u5b58\u50a8\u95ee\u9898",id:"rocketmq\u7684\u6d88\u606f\u5b58\u50a8\u95ee\u9898",level:3},{value:"RocketMQ\u7684\u90e8\u7f72\u65b9\u6848",id:"rocketmq\u7684\u90e8\u7f72\u65b9\u6848",level:3},{value:"Phoenix\u540e\u7eed\u7684RoadMap",id:"phoenix\u540e\u7eed\u7684roadmap",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.strong,{children:["\u611f\u8c22",(0,o.jsx)(n.a,{href:"https://mp.weixin.qq.com/s?__biz=MzIxODM2NTQ3OQ==&mid=2247484214&idx=1&sn=d17f889cd8ddefe65fb4dae8e95c1354&chksm=97eae87ea09d6168a3a13ea4266e2c0a9cbf0c4d2d67cb16a83a822e9f6b8f8281be1c23ff8c&scene=27#wechat_redirect",children:"RocketMQ\u5b98\u5fae"}),"\u91c7\u7a3f"]})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"\u6458\u8981\uff1aPhoenix\u662f\u5bbd\u62d3\u79d1\u6280\u67b6\u6784\u56e2\u961f\u7814\u53d1\u7684\u5185\u5b58\u8ba1\u7b97\u6846\u67b6\uff0c\u501f\u9274\u4e86LMAX\u7684\u67b6\u6784\u601d\u8def\uff0c\u91c7\u7528CQRS\u548cEventSouring\u7406\u5ff5\u6253\u9020\u3002\u672c\u6587\u7b80\u5355\u4ecb\u7ecdPhoenix\uff0c\u4ee5\u53caRocketMQ\u5728Phoenix\u4e2d\u7684\u5e94\u7528\u4e0e\u5b9e\u8df5\u3002 \u6ce8\uff1a\u8be5Phoenix\u4e0d\u662fApache\u5f00\u6e90\u7684\u90a3\u4e2aPhoenix\u3002"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["{/*\\s",(0,o.jsx)(n.em,{children:"truncate\\s"}),"*/}/"]}),"\n",(0,o.jsx)(n.h2,{id:"\u884c\u4e1a\u80cc\u666f",children:"\u884c\u4e1a\u80cc\u666f"}),"\n",(0,o.jsx)(n.p,{children:"\u5728\u91d1\u878d\u8d44\u7ba1\u6295\u8d44\u4ea4\u6613\u9886\u57df\uff0c\u4e1a\u52a1\u573a\u666f\u590d\u6742\uff0c\u5982\u5728\u4ea4\u6613\u5904\u7406\u573a\u666f\u4e2d\uff0c\u5b58\u5728\u4e8b\u524d\u7684\u98ce\u63a7\u5934\u5bf8\u63a7\u5236\u9700\u6c42\uff0c\u5bfc\u81f4\u4ea4\u6613\u4e8b\u4ef6\u5fc5\u987b\u4e32\u884c\u5904\u7406\uff0c\u65e0\u6cd5\u5e76\u53d1\uff0c\u4e14\u5355\u6b21\u4ea4\u6613\u4e8b\u4ef6\u5904\u7406\u4e2d\uff0c\u5b58\u5728\u9ad8\u5bc6\u5ea6\u7684\u590d\u6742\u4e1a\u52a1\u903b\u8f91\u8ba1\u7b97\u4e14\u4f9d\u8d56\u6570\u636e\u8303\u56f4\u5e7f\uff0c\u6240\u4ee5\u7cfb\u7edf\u7684\u6027\u80fd\u95ee\u9898\u975e\u5e38\u7a81\u51fa\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u76ee\u524d\u4e1a\u5185\u4e00\u822c\u57fa\u4e8e\u5173\u7cfb\u578b\u6570\u636e\u5e93\u6765\u5904\u7406\u5355\u4e2a\u4ea4\u6613\u4e8b\u4ef6\uff0c\u4f1a\u5b58\u5728\u590d\u6742SQL\u8fd0\u7b97\u903b\u8f91\u548c\u591a\u6b21IO\u8bfb\u53d6\u6570\u636e\uff0c\u56e0\u6b64\u5f88\u96be\u505a\u5230\u4f4e\u5ef6\u8fdf\u3002\u5e76\u4e14\u7531\u4e8e\u4e1a\u52a1\u903b\u8f91\u6bd4\u8f83\u590d\u6742\uff0c\u7ecf\u5e38\u9677\u5165\u4e0e\u8868\u6a21\u578b\u7ea0\u7f20\u5f53\u4e2d\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u56e0\u4e3a\u4ea4\u6613\u4e8b\u4ef6\u5fc5\u987b\u4e32\u884c\u5904\u7406\uff0c\u6240\u4ee5\u57fa\u4e8eSpringCloud/Dubbo\u8fd9\u7c7b\u5206\u5e03\u5f0f\u6846\u67b6\uff0c\u5e76\u4e0d\u80fd\u4eab\u53d7\u5230\u6a2a\u5411\u6269\u5bb9\u5e26\u6765\u7684\u8ba1\u7b97\u80fd\u529b\u63d0\u5347\u7684\u597d\u5904\uff0c\u53cd\u800c\u5728\u591a\u70b9\u90e8\u7f72\u7684\u65f6\u5019\u9700\u8981\u5f15\u5165\u5168\u5c40\u9501\u6765\u505a\u597d\u5e76\u53d1\u4fdd\u62a4\uff0c\u589e\u52a0\u4e86\u4e1a\u52a1\u5b9e\u73b0\u7684\u590d\u6742\u5ea6\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u57fa\u4e8e\u6b64\u6211\u4eec\u5728\u501f\u9274\u4e86\u82f1\u56fd\u5916\u6c47\u4ea4\u6613\u4e2d\u5fc3\u7684LMAX\u67b6\u6784\u57fa\u7840\u4e0a\uff0c\u7ed3\u5408CQRS + EventSouring\u7406\u5ff5\uff0c\u843d\u5730\u4e86\u4e00\u5957\u57fa\u4e8eJava\u7684\u5185\u5b58\u8ba1\u7b97\u6846\u67b6Phoenix\u3002\u76ee\u6807\u662f\u8981\u628a\u590d\u6742\u7684\u4e1a\u52a1\u903b\u8f91\u62ff\u5230\u5185\u5b58\u4e2d\u8ba1\u7b97\uff0c\u6446\u8131\u5bf9\u5173\u7cfb\u578b\u6570\u636e\u5e93\u7684\u4f9d\u8d56\uff0c\u7ed3\u5408DDD\u8bbe\u8ba1\u601d\u8def\uff0c\u8ba9\u4e1a\u52a1\u5f00\u53d1\u4eba\u5458\u771f\u6b63\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b\uff0c\u5927\u5927\u964d\u4f4e\u5355\u4e2a\u4e8b\u4ef6\u7684\u5904\u7406\u5ef6\u65f6\uff0c\u901a\u8fc7\u4f4e\u5ef6\u8fdf\u83b7\u53d6\u9ad8\u541e\u5410\u56de\u62a5\u3002\u540c\u65f6\u5229\u7528\u5355\u7ebf\u7a0b\u6a21\u5f0f\uff0c\u907f\u514d\u4e86\u5e76\u53d1\u573a\u666f\uff0c\u964d\u4f4e\u4e86\u7f16\u7a0b\u590d\u6742\u5ea6\u3002"}),"\n",(0,o.jsx)(n.h2,{id:"phoniex\u4ecb\u7ecd",children:"Phoniex\u4ecb\u7ecd"}),"\n",(0,o.jsx)(n.p,{children:"Phoenix\u662f\u5bf9CQRS + EventSouring\u7406\u5ff5\u843d\u5730\u7684JAVA\u5f00\u53d1\u6846\u67b6\uff0c\u56f4\u7ed5Phoenix\u5f00\u53d1\u6846\u67b6\u6253\u9020\u4e86\u4e00\u5957\u5f00\u53d1\u8fd0\u7ef4\u5e73\u53f0\u3002Phoenix\u6846\u67b6\u5177\u6709\u5982\u4e0b\u7279\u6027\uff1a ln-Memory\u3001\u652f\u6301\u5206\u5e03\u5f0f\u4e8b\u52a1\uff08SAGA\uff09\u3001\u5fae\u670d\u52a1\u3001\u5355\u7ebf\u7a0b\u3001\u652f\u6301\u540c\u6b65/\u5f02\u6b65\u8c03\u7528\u3002 \u5728\u5f00\u53d1\u8fd0\u7ef4\u5e73\u53f0\u4e0a\u63d0\u4f9b\uff0c\u5185\u5b58\u67e5\u8be2/\u4fee\u6539\u3001\u5feb\u7167\u7ba1\u7406\uff0c\u4e8b\u4ef6\u7f16\u6392\uff0c\u8c03\u7528\u94fe\u8ddf\u8e2a\u3001\u5b9e\u65f6\u76d1\u63a7\u3001\u4e2a\u6027\u5316\u4e1a\u52a1\u6307\u6807\u76d1\u63a7\u3001\u6027\u80fd\u6307\u6807\u7edf\u8ba1\u7b49\u3002\u76ee\u524d\u5df2\u7ecf\u5728\u751f\u4ea7\u4e2d\u4f7f\u7528"}),"\n",(0,o.jsx)(n.h3,{id:"\u67b6\u6784\u56fe",children:"\u67b6\u6784\u56fe"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"image-phoenix",src:i(92344).Z+"",width:"1614",height:"922"})}),"\n",(0,o.jsx)(n.h3,{id:"\u6982\u5ff5\u672f\u8bed",children:"\u6982\u5ff5\u672f\u8bed"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Command"}),"\uff1a\u7531CServer\u5b9a\u4e49\uff0c\u8868\u793a\u8bf7\u6c42\u7684\u5165\u53c2\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Event"})," \uff1a\u7531CServer\u5b9a\u4e49\uff0c\u8868\u793a\u9886\u57df\u5185\u5df2\u53d1\u751f\u7684\u4e8b\u4ef6\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"CServer"}),"\uff1a \u4e1a\u52a1\u5904\u7406\u670d\u52a1\uff0c\u91c7\u7528\u5185\u5b58\u4fdd\u5b58\u6570\u636e\u72b6\u6001\u3002\u6536\u5230\u8bf7\u6c42Command\u540e\uff0c\u901a\u8fc7\u4e1a\u52a1\u5904\u7406\u903b\u8f91\uff0c\u4ea7\u2f63\u7ed3\u679cEvent\uff0c\u7136\u540eEvent\u518d\u9a71\u52a8\u5185\u5b58\u6570\u636e\u72b6\u6001\u6539\u53d8\u3002\u5f53\u670d\u52a1\u91cd\u542f\u540e\uff0c \u5229\u7528EventSouring\u6765\u6062\u590d\u5185\u5b58\u6570\u636e\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"QServer"}),"\uff1a\u8ba2\u9605CServer\u4ea7\u751f\u7684\u9886\u57dfEvent\uff0c\u52a0\u5de5\u540e\u5f97\u5230\u67e5\u8be2\u7aef\u7684\u6570\u636e\u6a21\u578b\u3002 \u5982\u53ef\u4ee5\u6301\u4e45\u5316\u5230\u5173\u7cfb\u6570\u636e\u5e93\u4f9b\u67e5\u8be2\uff0c\u53c8\u6216\u8005\u6301\u4e45\u5316\u5230\u5185\u5b58\u6570\u636e\u5e93\u4f9b\u9ad8\u901f\u67e5\u8be2\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Saga"}),"\uff1a\u8d1f\u8d23\u5206\u5e03\u5f0f\u4e8b\u52a1\u534f\u8c03\uff0c\u63a5\u6536Event\uff0c\u4ea7\u751fCommand\uff0c \u534f\u8c03\u5404\u4e2aCServer\u4e00\u8d77\u5de5\u4f5c\uff0c\u5171\u540c\u5b8c\u6210\u4e8b\u52a1\u3002"]}),"\n",(0,o.jsx)(n.h3,{id:"rocketmq\u548cphoenix",children:"RocketMQ\u548cPhoenix"}),"\n",(0,o.jsx)(n.p,{children:"\u200b\u4e0a\u9762\u7b80\u5355\u4ecb\u7ecd\u4e86\u884c\u4e1a\u80cc\u666f\u548cPhoenix\uff0c\u5173\u4e8eCQRS\u548cEventSouring\u76f8\u5173\u7406\u5ff5\uff0c\u8fd9\u91cc\u4e0d\u591a\u9610\u8ff0\uff0c\u5927\u5bb6\u53ef\u4ee5\u4e0a\u7f51\u641c\u7d22\u76f8\u5173\u8d44\u6599\u6765\u7406\u89e3Phoenix\u3002\u56de\u5230\u4e0eRocketMQ\u76f8\u5173\uff0c\u5728Phoenix\u6846\u67b6\u91ccRocketMQ\u627f\u62c5\u4e86\u4ec0\u4e48\u89d2\u8272\uff1f\u6211\u4eec\u4e3a\u4ec0\u4e48\u9009\u7528RocketMQ\uff0c\u8fd9\u91cc\u8981\u4eceEventSouring\u8bf4\u8d77\u3002"}),"\n",(0,o.jsx)(n.h3,{id:"rocketmq\u548ceventsouring",children:"RocketMQ\u548cEventSouring"}),"\n",(0,o.jsx)(n.p,{children:"\u200bPhoenix\u5e94\u7528\u57fa\u4e8e\u7684\u5185\u5b58\u6765\u8ba1\u7b97\uff0c\u6700\u5927\u7684\u95ee\u9898\u5c31\u662f\u8fdb\u7a0b\u91cd\u542f\u6216Crash\uff0c\u5185\u5b58\u6570\u636e\u5168\u90e8\u4e22\u5931\u3002\u800cEventSourcing\u5c31\u662f\u7528\u4e8e\u8fdb\u7a0b\u91cd\u542f\u540e\u6062\u590d\u5185\u5b58\u6570\u636e\u72b6\u6001\u7684\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u200b\u4e3e\u4f8b\uff1a\u6709\u4e00\u4e2aJava\u5bf9\u8c61account\uff0cID\u4e3a001\uff0c\u5f53\u524d\u72b6\u6001\uff1a\u4f59\u989d10\u5143\u3002\u5047\u8bbe\u662f\u7ecf\u8fc7\u5982\u4e0b\u4e09\u4e2a\u64cd\u4f5c\u8fbe\u5230\u4e86\u8be5\u72b6\u6001\uff1a"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Account account = new Account(001, 0);  \u2014 \u521d\u5efa\u5bf9\u8c61"}),"\n",(0,o.jsx)(n.li,{children:"account.amt = account.amt + 14; \u2014 \u8f6c\u516514\u5143"}),"\n",(0,o.jsx)(n.li,{children:"account.amt = account.amt - 4; \u2014 \u8f6c\u51fa4\u5143"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"\u5982\u679c\u8fdb\u7a0b\u91cd\u542f\uff0c\u6839\u636eEventSouring\u601d\u60f3\uff0c\u6211\u4eec\u53ef\u4ee5\u91cd\u64ad\u64cd\u4f5c1\u30012\u30013\u6765\u6062\u590d\u91cd\u542f\u524d\u7684Account\u72b6\u6001\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u5bf9\u4e8ePhoenix\uff0c\u6211\u4eec\u505a\u4e86\u5982\u4e0b\u601d\u8003\uff1a"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"\u601d\u80031"}),"\uff1a Phoenix\u5e94\u7528\u901a\u8fc7\u9886\u57dfEvent\u56de\u6eaf\u53ef\u4ee5\u91cd\u5efa\u5185\u5b58\u72b6\u6001\uff0c\u90a3\u9886\u57dfEvent\u8be5\u600e\u4e48\u5b58\u50a8\uff1f"]}),"\n",(0,o.jsx)(n.p,{children:"\u9996\u5148\u56de\u6eaf\u7684\u65f6\u4e00\u5b9a\u8981\u786e\u4fdd\u9886\u57dfEvent\u6709\u5e8f\u4e14\u4e0d\u6f0f\uff0c\u8fd9\u91cc\u6211\u4eec\u9009\u62e9\u4e86RocketMQ\u6765\u5b58\u50a8\u9886\u57dfEvent:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"RocketMQ\u4e2d\u540c\u6b65\u5237\u76d8\u673a\u5236\uff0c\u53ef\u4ee5\u4fdd\u8bc1\u6d88\u606f\u4e0d\u4e22\u3002"}),"\n",(0,o.jsx)(n.li,{children:"topic\u7684\u5355queue\u6a21\u5f0f\uff0c\u53ef\u4ee5\u4fdd\u8bc1\u6d88\u606f\u6709\u5e8f\u5b58\u50a8\uff0c\u6709\u5e8f\u6d88\u8d39\u3002"}),"\n",(0,o.jsx)(n.li,{children:"RocketMQ\u662f\u4e00\u4e2a\u57fa\u4e8e\u6587\u4ef6\u6301\u4e45\u5316\u7684\u9ad8\u6027\u80fdMQ\uff0c\u652f\u6301\u91cd\u590d\u6d88\u8d39\u3002"}),"\n",(0,o.jsx)(n.li,{children:"RocketMQ\u672c\u8eab\u7ecf\u5386\u8fc7\u963f\u91cc\u53cc12\u7684\u8003\u9a8c\uff0c\u66f4\u9002\u5408\u91d1\u878d\u573a\u666f\u3002"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"\u601d\u80032"}),"\uff1a\u5bf9\u6bd4\u91c7\u7528\u6570\u636e\u5e93\u4fdd\u5b58\u6570\u636e\u72b6\u6001\uff0cPhoenix\u91c7\u7528\u4e86RocketMQ\u6765\u6301\u4e45\u5316\u9886\u57dfEvent\uff0c\u4e24\u8005\u90fd\u5b58\u5728\u6570\u636e\u6301\u4e45\u5316\u52a8\u4f5c\uff0c\u90a3\u4e48\u4e24\u8005\u6027\u80fd\u5bf9\u6bd4\u5982\u4f55\uff1f\u6211\u4eec\u6765\u5206\u6790\u4e00\u4e0b\u4e00\u4e2a\u8d26\u6237\u7684\u8f6c\u5165\u64cd\u4f5c\u3002"]}),"\n",(0,o.jsx)(n.p,{children:"\u4f7f\u7528\u6570\u636e\u5e93\u7684\u5904\u7406\u65b9\u5f0f\uff1a"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"\u6839\u636e\u8d26\u6237ID\u4ece\u6570\u636e\u5e93\u4e2d\u53d6\u51fa\u8d26\u6237\u4fe1\u606f\uff0c\u5f00\u542f\u4e8b\u52a1\u4e14\u52a0\u9501\u3002"}),"\n",(0,o.jsx)(n.li,{children:"\u7a0b\u5e8f\u8fdb\u884c\u8d26\u6237\u7684\u52a0\u94b1\u64cd\u4f5c\uff0c\u5199\u4f1a\u6570\u636e\u5e93\uff0c\u63d0\u4ea4\u4e8b\u52a1(\u5199\u6570\u636e\u5e93\u8fd8\u6d89\u53ca\u5efa\u7acb\u7d22\u5f15\uff0c\u5199binlog\uff0credolog\u7b49)\u3002"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"\u4f7f\u7528Phoenix\u7684\u5904\u7406\u65b9\u5f0f\uff1a"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Phoenix\u5e94\u7528\u4eceRocketMQ\u4e2d\u8bfb\u53d6Command\uff0c\u5b8c\u6210\u6d88\u606f\u53cd\u5e8f\u5217\u5316\u3002"}),"\n",(0,o.jsx)(n.li,{children:"\u8def\u7531Command\u5230\u5177\u4f53\u7684\u805a\u5408\u6839\u5bf9\u8c61\uff0c\u8c03\u7528\u5904\u7406\u51fd\u6570act\uff0c\u4ea7\u751f\u9886\u57dfEvent\uff0cEvent\u9a71\u52a8\u5185\u5b58\u6570\u636e\u72b6\u6001\u6539\u53d8\u3002"}),"\n",(0,o.jsx)(n.li,{children:"\u5c06Event\u5e8f\u5217\u5316\u540epublish\u5230RocketMQ\u3002"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"image-phoenix-handle",src:i(36598).Z+"",width:"1614",height:"1364"})}),"\n",(0,o.jsx)(n.p,{children:"\u200b\u4ee5\u4e0a3\u4e2a\u6b65\u9aa4\uff0c\u91c7\u7528disruptor\uff0c\u4ee5\u6d41\u6c34\u7ebf\u65b9\u5f0f\u5904\u7406\u3002\u5904\u7406\u8fc7\u7a0b\uff0c\u662f\u91c7\u7528\u5148\u4fee\u6539\u5185\u5b58\u72b6\u6001\uff0c\u518d\u6301\u4e45\u5316Event\u5230RocketMQ\u3002\u4e4b\u6240\u4ee5\u53ef\u4ee5\u8fd9\u6837\u8bbe\u8ba1\uff0c\u662f\u56e0\u4e3aEvent\u7684\u53d1\u5e03\u548c\u5b58\u50a8\u662f\u5728\u4e00\u4e2a\u4e8b\u52a1\u4e2d\u5b8c\u6210\u7684\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u200b\u663e\u7136\uff0c\u5b58\u50a8\u72b6\u6001\u9700\u8981\u8fdb\u884c\u4e24\u6b21IO\u64cd\u4f5c\uff0c\u5e76\u4e14\u5982\u679c\u662f\u4e00\u4e2a\u65b0\u589e\u64cd\u4f5c\uff0c\u5efa\u7acb\u7d22\u5f15\u7b49\u8017\u65f6\u90fd\u662f\u8981\u8003\u8651\u5728\u5185\u7684\u3002\u800cRocketMQ\u5b58\u50a8\u9886\u57dfEvent\u65f6\uff0c\u53ea\u9700\u8981\u628aEvent\u5185\u5bb9\u8ffd\u52a0\u5230commitlog\u6587\u4ef6\u5c3e\uff081~2ms\uff09\uff0c\u914d\u5408\u7740GroupCommit\u6280\u672f\uff0c\u53ef\u4ee5\u505a\u5230\u975e\u5e38\u9ad8\u7684\u541e\u5410\u91cf\uff0c\u6548\u7387\u66f4\u9ad8\u3002"}),"\n",(0,o.jsx)(n.h3,{id:"rocketmq\u4e0b\u7684phoenix\u6846\u67b6\u6027\u80fd",children:"RocketMQ\u4e0b\u7684Phoenix\u6846\u67b6\u6027\u80fd"}),"\n",(0,o.jsx)(n.p,{children:"\u200b\u5355\u4e2aCServer\uff0c\u5728PC\u673a\uff08X99\u5e73\u53f0 + Intel(R) Core(TM) i7-5820K CPU @ 3.30GHz + SSD) \u4e0b\u7684\u91c7\u7528echo\u6d4b\u8bd5\u7ed3\u679c\uff1aTPS=2w/s, latency = 1~2ms"}),"\n",(0,o.jsx)(n.p,{children:"\u200b\u867d\u7136\u8fd9\u4e2aTPS\u5bf9\u6bd4Dubbo\u8fd9\u7c7b\u7684\u6846\u67b6\u4e0b\u5355\u670d\u52a1TPS\u5e76\u4e0d\u7b97\u9ad8\uff0c \u4f46\u5f97\u76ca\u4e8e\u5185\u5b58\u8ba1\u7b97\uff0c\u56de\u5230\u5f00\u7bc7\u63d0\u5230\u7684\u590d\u6742\u4e1a\u52a1\u903b\u8f91\u8ba1\u7b97\u4e0b\uff0c\u5355\u4e2a\u4ea4\u6613\u4e8b\u4ef6\u7684\u4e1a\u52a1\u5904\u7406\u8017\u65f6\u80fd\u505a\u5230ms\u4e0b\uff0cTPS\u53ef\u4ee5\u8fbe\u5230 k/s \u7ea7\u522b\u3002 \u7aef\u5230\u7aef\u5ef6\u65f6\u5728\u6beb\u79d2\u7ea7\u3002\u8fd9\u5728\u57fa\u4e8e\u6570\u636e\u5e93\u7684\u6a21\u5f0f\u4e0b\u662f\u5f88\u96be\u505a\u5230\u7684\u3002"}),"\n",(0,o.jsx)(n.h3,{id:"rocketmq\u7684\u6d88\u606f\u5b58\u50a8\u95ee\u9898",children:"RocketMQ\u7684\u6d88\u606f\u5b58\u50a8\u95ee\u9898"}),"\n",(0,o.jsxs)(n.p,{children:["\u200b\u6839\u636eEventSouring\u7684\u63cf\u8ff0\uff0c\u7406\u60f3\u60c5\u51b5\u4e0b\u6211\u4eec\u662f\u9700\u8981RocketMQ\u6c38\u4e0d\u6e05\u7406\u6d88\u606f\uff0c\u53ef\u4ee5\u901a\u8fc7\u8c03\u6574broker\u7684\u914d\u7f6e\u8bbe\u7f6e",(0,o.jsx)(n.code,{children:"fileReservedTime=99999999999"}),"\u6d88\u606f\u65f6\u95f4\u3002\u8fd9\u91ccRocketMQ\u6ca1\u6709\u63d0\u4f9b\u76f4\u63a5\u5173\u6389\u6e05\u7406\u7b56\u7565\u5f00\u5173\uff0c\u5176\u4e2d\u4e00\u6761\u6e05\u7406\u7b56\u7565\u662f\uff0c\u5982\u679c\u78c1\u76d8\u7a7a\u95f4\u8fbe\u523085%\u4ee5\u4e0a\uff0cRocketMQ\u65e0\u8bba\u6d88\u606f\u8fc7\u671f\u90fd\u4f1a\u6e05\u7406\u6d88\u606f\u3002"]}),"\n",(0,o.jsx)(n.p,{children:"\u200b\u5728\u5b9e\u9645\u751f\u4ea7\u573a\u666f\u4e2d\uff0c\u6211\u4eec\u5e76\u4e0d\u4f1a\u8981\u6c42RocketMQ\u6c38\u4e0d\u6e05\u7406\u6d88\u606f\u3002\u56e0\u4e3aCServer\u5e94\u7528\u4f1a\u91c7\u7528\u5feb\u7167\u529f\u80fd\uff0c\u6bcf\u5929\u90fd\u4f1a\u5b9a\u65f6\u628a\u5185\u5b58\u72b6\u6001\u548c\u5f53\u65f6Queue\u7684Offset\u5b58\u50a8\u5230\u6570\u636e\u5e93\u4e2d\uff08\u5b58\u50a8\u5feb\u7167\uff09\u3002\u5728EventSouring\u7684\u65f6\u5019\uff0c\u5c31\u4e0d\u9700\u8981\u4eceOffset\u4e3a0\u7684\u5730\u65b9\u5f00\u59cb\u56de\u6eaf\uff0c\u5c31\u53ef\u4ee5\u6839\u636e\u5feb\u7167\u5148\u6062\u590d\u8fd1\u671f\u7684\u6570\u636e\u72b6\u6001\uff0c\u518d\u4ece\u5feb\u7167\u8bb0\u5f55\u7684Offset\u4e4b\u540e\u505a\u56de\u6eaf\u3002"}),"\n",(0,o.jsxs)(n.p,{children:["\u200b\u4e00\u822c\u60c5\u51b5\u4e0b\u628a",(0,o.jsx)(n.code,{children:"fileReservedTime=168"}),"\u8bbe\u7f6e\u6d88\u606f\u8fc7\u671f\u65f6\u95f4\u4e3a7\u5929\u5373\u53ef\u3002"]}),"\n",(0,o.jsx)(n.h3,{id:"rocketmq\u7684\u90e8\u7f72\u65b9\u6848",children:"RocketMQ\u7684\u90e8\u7f72\u65b9\u6848"}),"\n",(0,o.jsx)(n.p,{children:"\u200b\u5728Phoenix\u4e2d\uff0c\u7531\u4e8e\u6d88\u606f\u9700\u8981\u505a\u5230\u4e25\u683c\u7684\u6709\u5e8f\u4e14\u4e0d\u4e22\uff0c\u6240\u4ee5RocketMQ\u7684\u90e8\u7f72\u65b9\u6848\uff0c\u6211\u4eec\u53ea\u80fd\u91c7\u75281master-1slave\uff0c \u540c\u6b65\u5237\u78c1\u76d8\u673a\u5236+\u540c\u6b65\u5199Slave\u8282\u70b9\u6a21\u5f0f\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u200b\u57281master-1slave\u573a\u666f\u4e0b\uff0cRocketMQ\u662f\u4e0d\u80fd\u4fdd\u8bc1\u4e3b\u5907\u7684\u81ea\u52a8\u5207\u6362\u7684\uff0c\u6240\u4ee5\u76ee\u524d\u4e3b\u53d1\u751f\u6545\u969c\u7684\u65f6\u5019\uff0c\u6211\u4eec\u91c7\u7528\u4eba\u5de5\u624b\u52a8\u5207\u6362\u65b9\u5f0f\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u200b\u5728RocketMQ\u7684Deleger\u7248\u672c\u4e2d\uff0c\u63d0\u4f9b\u4e86\u591a\u526f\u672c\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u53ef\u4ee5\u505a\u5230\u81ea\u52a8\u9009\u4e3b\uff0c\u81ea\u52a8\u5207\u6362\uff0c\u6b63\u5728\u63a2\u7d22\u662f\u5426\u662f\u4e00\u4e2a\u597d\u7684\u89e3\u51b3\u7684\u65b9\u6848\u3002"}),"\n",(0,o.jsx)(n.h2,{id:"phoenix\u540e\u7eed\u7684roadmap",children:"Phoenix\u540e\u7eed\u7684RoadMap"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"CServer\u4e3b\u5907\u5207\u6362"}),"\n",(0,o.jsx)(n.li,{children:"\u6a2a\u5411\u6269\u5bb9\u652f\u6301"}),"\n",(0,o.jsx)(n.li,{children:"RocketMQ\u6545\u969c\u81ea\u52a8\u5207\u6362\uff08\u57fa\u4e8eDeleger\u65b9\u6848\uff09"}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},92344:(e,n,i)=>{i.d(n,{Z:()=>o});const o=i.p+"assets/images/jiagou-fce54f0a4c82f0cd6fe5f3a4b89bd7bf.jpg"},36598:(e,n,i)=>{i.d(n,{Z:()=>o});const o=i.p+"assets/images/phoenix-handle-904651b229198694fb6090d4634f782b.jpg"},11151:(e,n,i)=>{i.d(n,{Z:()=>s,a:()=>r});var o=i(67294);const t={},c=o.createContext(t);function r(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);