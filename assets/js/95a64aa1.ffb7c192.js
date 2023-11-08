"use strict";(self.webpackChunkphoenixiq_github_io=self.webpackChunkphoenixiq_github_io||[]).push([[60746],{90358:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var s=t(85893),i=t(11151);const a={slug:"features",title:"Phoenix \u7279\u6027\u89e3\u6790",authors:"baozi",tags:["phoenix","features"]},l=void 0,r={permalink:"/blog/features",editUrl:"https://github.com/PhoenixIQ/blog/2020-06-05-phoniex-features.md",source:"@site/blog/2020-06-05-phoniex-features.md",title:"Phoenix \u7279\u6027\u89e3\u6790",description:"\u672c\u6587\u89e3\u6790phoenix\u7684\u7279\u6027",date:"2020-06-05T00:00:00.000Z",formattedDate:"2020\u5e746\u67085\u65e5",tags:[{label:"phoenix",permalink:"/blog/tags/phoenix"},{label:"features",permalink:"/blog/tags/features"}],readingTime:.785,hasTruncateMarker:!1,authors:[{name:"\u5305\u5b50",title:"Honor Member",url:"https://github.com/shibd",imageURL:"https://avatars.githubusercontent.com/u/33416836?s=400&v=4 Tay",key:"baozi"}],frontMatter:{slug:"features",title:"Phoenix \u7279\u6027\u89e3\u6790",authors:"baozi",tags:["phoenix","features"]},unlisted:!1,prevItem:{title:"Phoenix \u6df7\u6c8c\u6d4b\u8bd5\u5b9e\u8df5",permalink:"/blog/phoenix-openchaos"},nextItem:{title:"Phoenix \u662f\u5982\u4f55\u5b9e\u73b0\u5e42\u7b49\u7684",permalink:"/blog/idempotent"}},c={authorsImageUrls:[void 0]},d=[{value:"\u7f16\u7a0b\u6a21\u578b",id:"\u7f16\u7a0b\u6a21\u578b",level:2},{value:"Actor\u6a21\u578b",id:"actor\u6a21\u578b",level:3},{value:"\u5b9e\u4f53\u805a\u5408\u6839",id:"\u5b9e\u4f53\u805a\u5408\u6839",level:3},{value:"\u4e8b\u52a1\u805a\u5408\u6839",id:"\u4e8b\u52a1\u805a\u5408\u6839",level:3},{value:"\u5355\u5143\u6d4b\u8bd5",id:"\u5355\u5143\u6d4b\u8bd5",level:3},{value:"\u901a\u8baf\u6a21\u578b",id:"\u901a\u8baf\u6a21\u578b",level:2},{value:"\u8bf7\u6c42-\u54cd\u5e94",id:"\u8bf7\u6c42-\u54cd\u5e94",level:3},{value:"\u975e\u56de\u590d",id:"\u975e\u56de\u590d",level:3},{value:"\u4e3b\u52a8\u8ba2\u9605",id:"\u4e3b\u52a8\u8ba2\u9605",level:3},{value:"\u8c03\u7528\u5176\u4ed6\u670d\u52a1",id:"\u8c03\u7528\u5176\u4ed6\u670d\u52a1",level:2},{value:"\u4e8b\u4ef6\u53d1\u5e03",id:"\u4e8b\u4ef6\u53d1\u5e03",level:2},{value:"\u67e5\u8be2\u6a21\u578b",id:"\u67e5\u8be2\u6a21\u578b",level:2},{value:"Query-Model",id:"query-model",level:3},{value:"QueryCommandHandler",id:"querycommandhandler",level:3},{value:"\u8fd0\u884c\u6a21\u578b",id:"\u8fd0\u884c\u6a21\u578b",level:2}];function o(e){const n={blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u672c\u6587\u89e3\u6790phoenix\u7684\u7279\u6027"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["{/*\\s",(0,s.jsx)(n.em,{children:"truncate\\s"}),"*/}/"]}),"\n",(0,s.jsx)(n.h2,{id:"\u7f16\u7a0b\u6a21\u578b",children:"\u7f16\u7a0b\u6a21\u578b"}),"\n",(0,s.jsx)(n.h3,{id:"actor\u6a21\u578b",children:"Actor\u6a21\u578b"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"rpc",src:t(95115).Z+"",width:"686",height:"377"})}),"\n",(0,s.jsx)(n.h3,{id:"\u5b9e\u4f53\u805a\u5408\u6839",children:"\u5b9e\u4f53\u805a\u5408\u6839"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"rpc",src:t(65431).Z+"",width:"993",height:"443"})}),"\n",(0,s.jsx)(n.h3,{id:"\u4e8b\u52a1\u805a\u5408\u6839",children:"\u4e8b\u52a1\u805a\u5408\u6839"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"rpc",src:t(17984).Z+"",width:"1289",height:"414"})}),"\n",(0,s.jsx)(n.h3,{id:"\u5355\u5143\u6d4b\u8bd5",children:"\u5355\u5143\u6d4b\u8bd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'/**\n * \u5212\u62e8\u5931\u8d25\n */\n@Test\npublic void allocate_exceptFail() {\n\tEntityAggregateFixture fixture = new EntityAggregateFixture();\n\t// \u5411 A0 \u8d26\u6237\u5212\u62e8 -1500 \u5143\uff0c\u671f\u5f85\u5212\u62e8\u5931\u8d25\n\tAccountAllocateCmd cmd = new AccountAllocateCmd("A0", -1500);\n\t// \u65ad\u8a00\n\tfixture.when(cmd).expectRetFailCode().expectMessage(AccountAllocateFailEvent.class);\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u901a\u8baf\u6a21\u578b",children:"\u901a\u8baf\u6a21\u578b"}),"\n",(0,s.jsx)(n.h3,{id:"\u8bf7\u6c42-\u54cd\u5e94",children:"\u8bf7\u6c42-\u54cd\u5e94"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"rpc",src:t(50047).Z+"",width:"771",height:"731"})}),"\n",(0,s.jsx)(n.h3,{id:"\u975e\u56de\u590d",children:"\u975e\u56de\u590d"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"rpc-noreply",src:t(74483).Z+"",width:"919",height:"950"})}),"\n",(0,s.jsx)(n.h3,{id:"\u4e3b\u52a8\u8ba2\u9605",children:"\u4e3b\u52a8\u8ba2\u9605"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"subscribes",src:t(59157).Z+"",width:"1094",height:"732"})}),"\n",(0,s.jsx)(n.h2,{id:"\u8c03\u7528\u5176\u4ed6\u670d\u52a1",children:"\u8c03\u7528\u5176\u4ed6\u670d\u52a1"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"subscribes",src:t(13754).Z+"",width:"954",height:"776"})}),"\n",(0,s.jsx)(n.h2,{id:"\u4e8b\u4ef6\u53d1\u5e03",children:"\u4e8b\u4ef6\u53d1\u5e03"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"subscribes",src:t(87565).Z+"",width:"990",height:"635"})}),"\n",(0,s.jsx)(n.h2,{id:"\u67e5\u8be2\u6a21\u578b",children:"\u67e5\u8be2\u6a21\u578b"}),"\n",(0,s.jsx)(n.h3,{id:"query-model",children:"Query-Model"}),"\n",(0,s.jsxs)(n.p,{children:["\u6700\u7ec8\u4e00\u81f4\u6027\u8bfb\n\u57fa\u4e8e\u6570\u636e\u5e93query\n",(0,s.jsx)(n.img,{alt:"subscribes",src:t(34773).Z+"",width:"949",height:"647"})]}),"\n",(0,s.jsx)(n.h3,{id:"querycommandhandler",children:"QueryCommandHandler"}),"\n",(0,s.jsxs)(n.p,{children:["\u7ebf\u6027\u4e00\u81f4\u6027\u8bfb\n",(0,s.jsx)(n.img,{alt:"subscribes",src:t(31045).Z+"",width:"1046",height:"792"})]}),"\n",(0,s.jsx)(n.h2,{id:"\u8fd0\u884c\u6a21\u578b",children:"\u8fd0\u884c\u6a21\u578b"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"dataSharding"}),"\n",(0,s.jsx)(n.li,{children:"\u805a\u5408\u6839\u98d8\u9038"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},95115:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/actor-636bf93c5bf7429f3d6ccfda529e2929.png"},65431:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/entity-aggregate-9e67719ff1a780e0bbe1137c4554d884.png"},87565:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/eventpublish-bf09504881b64e10e9d5c726700c24df.png"},34773:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/query-module-da94b624f1f120fa6fc2c6f4da86a0b2.png"},31045:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/query-rpc-1fff913b6a8543f9f6172e213b74b68e.png"},74483:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/rpc-noreply-65b5259ca5c44923e5698fa0eff54507.png"},50047:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/rpc-8fa44d8194379af873096e254f36be23.png"},13754:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/spring-d9d300793f7ffda90a244af981ac0e9c.png"},59157:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/subscribes-7d9c8abff5bd69f93b10a774b8da4344.png"},17984:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/transaction-aggregate-34038ebda2ff6dc5062ddba00e1432fd.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>l});var s=t(67294);const i={},a=s.createContext(i);function l(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);