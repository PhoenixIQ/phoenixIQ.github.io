"use strict";(self.webpackChunkphoenixiq_github_io=self.webpackChunkphoenixiq_github_io||[]).push([[14882],{97998:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var t=a(85893),o=a(11151);const r={id:"starvation-detector",title:"\u7ebf\u7a0b\u6c60\u9965\u997f\u68c0\u6d4b\u5668",description:"\u7528\u4e8e\u68c0\u6d4b\u7ebf\u7a0b\u6c60\u662f\u5426\u9965\u997f\u7684\u5de5\u5177"},i=void 0,c={id:"phoenix-advanced/starvation-detector",title:"\u7ebf\u7a0b\u6c60\u9965\u997f\u68c0\u6d4b\u5668",description:"\u7528\u4e8e\u68c0\u6d4b\u7ebf\u7a0b\u6c60\u662f\u5426\u9965\u997f\u7684\u5de5\u5177",source:"@site/versioned_docs/version-2.6.0/09-phoenix-advanced/05-starvation.md",sourceDirName:"09-phoenix-advanced",slug:"/phoenix-advanced/starvation-detector",permalink:"/docs/2.6.0/phoenix-advanced/starvation-detector",draft:!1,unlisted:!1,editUrl:"https://github.com/PhoenixIQ/versioned_docs/version-2.6.0/09-phoenix-advanced/05-starvation.md",tags:[],version:"2.6.0",sidebarPosition:5,frontMatter:{id:"starvation-detector",title:"\u7ebf\u7a0b\u6c60\u9965\u997f\u68c0\u6d4b\u5668",description:"\u7528\u4e8e\u68c0\u6d4b\u7ebf\u7a0b\u6c60\u662f\u5426\u9965\u997f\u7684\u5de5\u5177"},sidebar:"docs",previous:{title:"Kafka \u6269\u5c55",permalink:"/docs/2.6.0/phoenix-advanced/phoenix-kafka-extend"},next:{title:"\u96c6\u7fa4\u8ba1\u7b97\u6c60",permalink:"/docs/2.6.0/phoenix-advanced/cluster-pool"}},d={},l=[{value:"\u7b80\u4ecb",id:"introduce",level:2},{value:"\u4f7f\u7528\u8bf4\u660e",id:"usage",level:2},{value:"\u544a\u8b66\u65e5\u5fd7\u8f93\u51fa\u793a\u4f8b",id:"logging",level:2}];function s(e){const n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"introduce",children:"\u7b80\u4ecb"}),"\n",(0,t.jsx)(n.p,{children:"\u7ebf\u7a0b\u6c60\u9965\u997f\u68c0\u6d4b\u5668\u662f\u4e00\u4e2a\u5e94\u7528\u8bca\u65ad\u5de5\u5177\uff0c\u7528\u4e8e\u76d1\u89c6\u805a\u5408\u6839\u8fd0\u884c\u7ebf\u7a0b\u6c60\u53ca Phoenix \u5185\u90e8\u7ebf\u7a0b\u6c60\uff0c\u5e76\u5728\u7ebf\u7a0b\u6c60\u65e0\u54cd\u5e94\u65f6\u8bb0\u5f55\u8b66\u544a\u3002"}),"\n",(0,t.jsx)(n.p,{children:"Phoenix \u805a\u5408\u6839\u7ebf\u7a0b\u6c60\u65e0\u54cd\u5e94\u7684\u6700\u5e38\u89c1\u539f\u56e0\u662f\u5728\u805a\u5408\u6839\u5185\u90e8\u6267\u884c\u4e86\u963b\u585e\u8c03\u7528\uff0c\u4ece\u800c\u5bfc\u81f4\u5176\u4ed6\u805a\u5408\u6839\u65e0\u6cd5\u53ca\u65f6\u6267\u884c\u3002\u8fd9\u5c06\u5bfc\u81f4\u4e25\u91cd\u7684\u6027\u80fd\u95ee\u9898\uff08\u5ef6\u8fdf\u589e\u52a0\uff0c\u4f46 CPU \u5229\u7528\u7387\u8f83\u4f4e\uff09\u3002\n\u5f53\u9965\u997f\u53d1\u751f\u65f6\uff0c\u7ebf\u7a0b\u5185\u7684\u6240\u6709\u7ebf\u7a0b\u90fd\u4f1a\u963b\u585e\uff0c\u4f8b\u5982\uff1aIO \u884c\u4e3a\uff0c\u963b\u585e\u83b7\u53d6\u7ebf\u7a0b\u6c60\u5916\u7684\u5f02\u6b65\u7ed3\u679c\uff0c\u6b7b\u9501\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u9965\u997f\u68c0\u6d4b\u5668\u76d1\u89c6\u7684\u662f\u7ebf\u7a0b\u6c60\u800c\u4e0d\u662f\u7ebf\u7a0b\u7ea7\u522b\uff0c\u56e0\u6b64\u53ea\u6709\u5728\u7ebf\u7a0b\u6c60\u5229\u7528\u7387\u8f83\u9ad8\u4e14\u9965\u997f\u65f6\uff0c\u624d\u4f1a\u53d1\u51fa\u544a\u8b66\uff0c\u9965\u997f\u68c0\u6d4b\u5668\u5e76\u4e0d\u76d1\u89c6\u5355\u7ebf\u7a0b\u7ea7\u522b\u7684\u9ad8\u5ef6\u8fdf\u963b\u585e\u3002\u5982\uff1a"}),"\n",(0,t.jsx)(n.p,{children:"\u4e00\u4e2a Phoenix \u5e94\u7528\u90e8\u7f72\u5728 8 \u6838\u5fc3\u7684\u673a\u5668/\u5bb9\u5668\u4e0a\uff0c\u6b64\u65f6\u7ebf\u7a0b\u6c60\u6570\u91cf\u4e3a 24\u3002\uff08Phoenix \u9ed8\u8ba4\u7ed9\u805a\u5408\u6839\u914d\u7f6e\u4e86 CPU \u6838\u5fc3\u6570\u91cf * \u4e09\u500d\u7684\u7ebf\u7a0b\u6c60\u6570\u91cf\uff09\u6b64\u65f6\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u4f7f\u7528\u805a\u5408\u6839\u4f7f\u7528 20 \u7684\u5e76\u884c\u5ea6\u6267\u884c\u957f\u65f6\u95f4\u7684\u9636\u4e58\u7b97\u6cd5\uff1a\u5e76\u4e0d\u4f1a\u89e6\u53d1\u544a\u8b66\uff0c\u56e0\u4e3a\u7ebf\u7a0b\u6c60\u4ecd\u7136\u7a7a\u95f2\u7ebf\u7a0b\u7528\u4e8e\u6267\u884c\u5feb\u901f\u68c0\u67e5\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u4f7f\u7528\u805a\u5408\u6839\u4f7f\u7528 50 \u7684\u5e76\u884c\u5ea6\u6267\u884c\u957f\u65f6\u95f4\u7684\u9636\u4e58\u7b97\u6cd5\uff1a\u89e6\u53d1\u8b66\u544a\uff0c\u5e76\u884c\u5ea6\u5927\u4e8e\u7ebf\u7a0b\u6c60\u6570\u91cf\uff0c\u7ebf\u7a0b\u6c60\u963b\u585e\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u6b7b\u9501\u5c06\u4f1a\u5728\u7ebf\u7a0b\u6c60\u8d44\u6e90\u91ca\u653e\u65f6\u8bb0\u5f55\u544a\u8b66"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:":::tip \u63d0\u793a\n\u9664\u4e86\u65e5\u5fd7\u8f93\u51fa\u4e4b\u5916\uff0c\u7ebf\u7a0b\u6c60\u9965\u997f\u68c0\u6d4b\u5668\u8fd8\u4f1a\u5728\u6bcf\u4e2a\u8282\u70b9\u4e2d\u4fdd\u7559\u6700\u8fd1\u7684\u5341\u6b21\u544a\u8b66\u5386\u53f2\uff0c\u53ef\u901a\u8fc7 Phoenix Console \u67e5\u770b\u672c\u8282\u70b9\u53ca\u5176\u4ed6\u8282\u70b9\u7684\u5386\u53f2\u76d1\u89c6\u8bb0\u5f55\u3002\n:::"}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"\u4f7f\u7528\u8bf4\u660e"}),"\n",(0,t.jsx)(n.p,{children:"\u7ebf\u7a0b\u6c60\u9965\u997f\u68c0\u6d4b\u5668\u7684\u4f7f\u7528\u8f83\u4e3a\u7b80\u5355\uff0c\u901a\u8fc7\u7b80\u5355\u7684\u914d\u7f6e\u5373\u53ef\u5f00\u7bb1\u5373\u7528\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"quantex:\n  phoenix:\n    akka:\n      # \u9965\u997f\u68c0\u6d4b\u5668\u914d\u7f6e\n      starvation-detector:\n        enabled: true # \u5f00\u542f\u9965\u997f\u68c0\u6d4b\u5668\n        max-delay-warning-threshold: 500 # \u7ebf\u7a0b\u6c60\u963b\u585e\u9608\u503c\uff08ms\uff09\uff0c\u6b64\u9ed8\u8ba4\u8f83\u9ad8\uff0c\u53ef\u9002\u5f53\u964d\u4f4e\n        warning-interval: 60000 # \u8b66\u544a\u8f93\u51fa\u95f4\u9694\uff08ms\uff09\n        checker-interval: 1000 # \u68c0\u67e5\u6267\u884c\u95f4\u9694 (ms) \u53ef\u9002\u5f53\u964d\u4f4e\uff0c\u8f83\u9ad8\u7684\u95f4\u9694\u4e5f\u8bb8\u4f1a\u9519\u8fc7\u90e8\u5206\u77ed\u671f\u7684\u963b\u585e\n        checker-initial-delay: 10000 # \u521d\u59cb\u5316\u68c0\u6d4b\u4efb\u52a1\u5ef6\u8fdf(ms)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"logging",children:"\u544a\u8b66\u65e5\u5fd7\u8f93\u51fa\u793a\u4f8b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"Thread states (total 24 thread):  24 RUNNABLE\nStack traces:\n 22 thread(s) in state: RUNNABLE on java.math.BigInteger.multiplyByInt(BigInteger.java:1605) \n    java.math.BigInteger.multiply(BigInteger.java:1521)\n    java.math.BigInteger.multiply(BigInteger.java:1495)\n    com.iquantex.phoenix.samples.account.domain.BankAccountAggregate.factorial(BankAccountAggregate.java:71)\n    com.iquantex.phoenix.samples.account.domain.BankAccountAggregate.act(BankAccountAggregate.java:165)\n    java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\n    java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\n    java.lang.Thread.run(Thread.java:750)\n\n  2 thread(s) in state: RUNNABLE on java.math.BigInteger.multiplyByInt(BigInteger.java:1611) \n    java.math.BigInteger.multiply(BigInteger.java:1521)\n    java.math.BigInteger.multiply(BigInteger.java:1495)\n    com.iquantex.phoenix.samples.account.domain.BankAccountAggregate.factorial(BankAccountAggregate.java:71)\n    com.iquantex.phoenix.samples.account.domain.BankAccountAggregate.act(BankAccountAggregate.java:165)\n    java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\n    java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\n    java.lang.Thread.run(Thread.java:750)\n\nAdditionally, 24 threads reported an empty stack trace, and 0  threads were sleeping pool threads waiting for work.\n\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>c,a:()=>i});var t=a(67294);const o={},r=t.createContext(o);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);