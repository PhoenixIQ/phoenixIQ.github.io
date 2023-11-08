"use strict";(self.webpackChunkphoenix_website_next=self.webpackChunkphoenix_website_next||[]).push([[5632],{72382:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>a});var r=i(85893),s=i(11151);const l={id:"license-upgrade",title:"License \u5347\u7ea7",description:"License \u5347\u7ea7\u6307\u5357"},c=void 0,o={id:"phoenix/license-upgrade",title:"License \u5347\u7ea7",description:"License \u5347\u7ea7\u6307\u5357",source:"@site/docs/01-phoenix/05-license-upgrade.md",sourceDirName:"01-phoenix",slug:"/phoenix/license-upgrade",permalink:"/docs/phoenix/license-upgrade",draft:!1,unlisted:!1,editUrl:"https://github.com/PhoenixIQ/docs/01-phoenix/05-license-upgrade.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"license-upgrade",title:"License \u5347\u7ea7",description:"License \u5347\u7ea7\u6307\u5357"},sidebar:"docs",previous:{title:"2.6.x Release Notes",permalink:"/docs/phoenix/upgrade/2-6-x"},next:{title:"FAQ",permalink:"/docs/phoenix/phoenix-faq"}},d={},a=[{value:"License \u4fee\u6539",id:"license-modify",level:2},{value:"1.\u5728Pod\u5b9a\u4e49\u4e2d\u4f7f\u7528\u73af\u5883\u53d8\u91cf",id:"environment",level:3},{value:"2. \u5916\u90e8\u5316\u914d\u7f6e\u65b9\u6848",id:"extenal",level:3},{value:"2.1 \u4f7f\u7528\u5c5e\u6027\u6587\u4ef6",id:"profiles",level:4},{value:"2.2 \u4f7f\u7528\u73af\u5883\u53d8\u91cf",id:"java-environment",level:4},{value:"2.3 \u4f7f\u7528\u547d\u4ee4\u884c\u53c2\u6570",id:"command-line",level:4},{value:"3. \u5176\u4ed6\u65b9\u6848",id:"ohther",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"tips",level:2}];function t(e){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"license-modify",children:"License \u4fee\u6539"}),"\n",(0,r.jsxs)(n.p,{children:["Phoenix License \u7684\u4fee\u6539\u4e3b\u8981\u66f4\u6539\u5bf9\u8c61 ",(0,r.jsx)(n.code,{children:"PhoenixBootstrap"})," \u7684 ",(0,r.jsx)(n.code,{children:"license"})," \u5c5e\u6027\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u5f53\u524d\u8fd9\u79cd\u65b9\u5f0f\u6bd4\u8f83\u539f\u59cb\u548c\u9ebb\u70e6\uff0c\u6240\u4ee5 Phoenix \u63d0\u4f9b\u4e86 Spring \u7684\u96c6\u6210\uff0c\u53ef\u4ee5\u57fa\u4e8e Spring \u7684\u914d\u7f6e\u6765\u4fee\u6539 Phoenix License\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u66f4\u6539Spring\u914d\u7f6e\u65f6\uff0c\u6709\u591a\u79cd\u65b9\u6848\u53ef\u4f9b\u9009\u62e9\uff0c\u5177\u4f53\u53d6\u51b3\u4e8e\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u548c\u5177\u4f53\u9700\u6c42\u3002\u4ee5\u4e0b\u662f\u51e0\u79cd\u53ef\u80fd\u7684\u65b9\u6848\uff0c\u6309\u63a8\u8350\u7a0b\u5ea6\u6392\u5e8f\uff1a"}),"\n",(0,r.jsx)(n.h3,{id:"environment",children:"1.\u5728Pod\u5b9a\u4e49\u4e2d\u4f7f\u7528\u73af\u5883\u53d8\u91cf"}),"\n",(0,r.jsx)(n.p,{children:"\u5728Kubernetes\u73af\u5883\u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528\u591a\u79cd\u65b9\u6cd5\u6765\u4fee\u6539Java\u5e94\u7528\u7a0b\u5e8f\u7684\u73af\u5883\u53d8\u91cf\u3002\u5728Kubernetes Pod\u5b9a\u4e49\u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528env\u5b57\u6bb5\u6765\u6307\u5b9a\u5e94\u7528\u7a0b\u5e8f\u9700\u8981\u7684\u73af\u5883\u53d8\u91cf\u3002\u4f8b\u5982\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'apiVersion: v1\nkind: Pod\nmetadata:\n  name: myapp\nspec:\n  containers:\n    - name: myapp\n      image: myapp:latest\n      env:\n        - name: spring.xxx\n          value: "value"\n'})}),"\n",(0,r.jsx)(n.h3,{id:"extenal",children:"2. \u5916\u90e8\u5316\u914d\u7f6e\u65b9\u6848"}),"\n",(0,r.jsx)(n.p,{children:"Spring\u6846\u67b6\u63d0\u4f9b\u4e86\u5916\u90e8\u5316\u914d\u7f6e\u7684\u529f\u80fd\uff0c\u53ef\u4ee5\u901a\u8fc7\u4e0d\u540c\u7684\u65b9\u5f0f\u6765\u4fee\u6539\u5e94\u7528\u7a0b\u5e8f\u7684\u914d\u7f6e\u3002\u4ee5\u4e0b\u662f\u4e00\u4e9b\u5e38\u89c1\u7684\u65b9\u6cd5\uff1a"}),"\n",(0,r.jsx)(n.h4,{id:"profiles",children:"2.1 \u4f7f\u7528\u5c5e\u6027\u6587\u4ef6"}),"\n",(0,r.jsx)(n.p,{children:"Spring\u5e94\u7528\u7a0b\u5e8f\u901a\u5e38\u53ef\u4ee5\u4f7f\u7528\u5c5e\u6027\u6587\u4ef6\u6765\u8bbe\u7f6e\u914d\u7f6e\u53c2\u6570\u3002\u5728\u5c5e\u6027\u6587\u4ef6\u4e2d\uff0c\u60a8\u53ef\u4ee5\u4e3a\u6bcf\u4e2a\u914d\u7f6e\u53c2\u6570\u6307\u5b9a\u4e00\u4e2a\u952e\u503c\u5bf9\u3002Spring\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u5728\u542f\u52a8\u65f6\u8bfb\u53d6\u8fd9\u4e9b\u5c5e\u6027\u6587\u4ef6\uff0c\u7136\u540e\u4f7f\u7528\u5176\u4e2d\u7684\u914d\u7f6e\u53c2\u6570\u6765\u914d\u7f6e\u5e94\u7528\u7a0b\u5e8f\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u4f8b\u5982\uff0c\u5728\u5e94\u7528\u7a0b\u5e8f\u7684",(0,r.jsx)(n.code,{children:"application.properties"}),"\u6587\u4ef6\u4e2d\uff0c\u60a8\u53ef\u4ee5\u6307\u5b9a\u4ee5\u4e0b\u914d\u7f6e\u53c2\u6570\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-properties",children:"myapp.config.parameter=value\n"})}),"\n",(0,r.jsx)(n.h4,{id:"java-environment",children:"2.2 \u4f7f\u7528\u73af\u5883\u53d8\u91cf"}),"\n",(0,r.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u4f7f\u7528\u73af\u5883\u53d8\u91cf\u6765\u8bbe\u7f6eSpring\u5e94\u7528\u7a0b\u5e8f\u7684\u914d\u7f6e\u53c2\u6570\u3002\u5728\u64cd\u4f5c\u7cfb\u7edf\u7ea7\u522b\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\uff0c\u7136\u540e\u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u8bfb\u53d6\u8fd9\u4e9b\u73af\u5883\u53d8\u91cf\u7684\u503c\uff0cSpring\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e9b\u503c\u6765\u914d\u7f6e\u5e94\u7528\u7a0b\u5e8f\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u4f8b\u5982\uff0c\u5728\u64cd\u4f5c\u7cfb\u7edf\u4e2d\u8bbe\u7f6e\u4ee5\u4e0b\u73af\u5883\u53d8\u91cf\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"export MYAPP_CONFIG_PARAMETER=value\n"})}),"\n",(0,r.jsx)(n.h4,{id:"command-line",children:"2.3 \u4f7f\u7528\u547d\u4ee4\u884c\u53c2\u6570"}),"\n",(0,r.jsx)(n.p,{children:"\u60a8\u8fd8\u53ef\u4ee5\u4f7f\u7528\u547d\u4ee4\u884c\u53c2\u6570\u6765\u8bbe\u7f6eSpring\u5e94\u7528\u7a0b\u5e8f\u7684\u914d\u7f6e\u53c2\u6570\u3002\u5728\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\u65f6\uff0c\u53ef\u4ee5\u6307\u5b9a\u547d\u4ee4\u884c\u53c2\u6570\u6765\u8986\u76d6\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u9ed8\u8ba4\u914d\u7f6e\u53c2\u6570\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u4f8b\u5982\uff0c\u5728\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\u65f6\uff0c\u53ef\u4ee5\u6307\u5b9a\u4ee5\u4e0b\u547d\u4ee4\u884c\u53c2\u6570\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"java -jar myapp.jar --myapp.config.parameter=value\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u603b\u4e4b\uff0cSpring\u6846\u67b6\u63d0\u4f9b\u4e86\u591a\u79cd\u65b9\u5f0f\u6765\u4f7f\u7528\u5916\u90e8\u5316\u914d\u7f6e\u6765\u4fee\u6539\u5e94\u7528\u7a0b\u5e8f\u7684\u914d\u7f6e\u3002\u901a\u8fc7\u4f7f\u7528\u8fd9\u4e9b\u6280\u672f\uff0c\u60a8\u53ef\u4ee5\u5728\u4e0d\u4fee\u6539\u5e94\u7528\u7a0b\u5e8f\u4ee3\u7801\u7684\u60c5\u51b5\u4e0b\u66f4\u6539\u5e94\u7528\u7a0b\u5e8f\u7684\u914d\u7f6e\u53c2\u6570\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"ohther",children:"3. \u5176\u4ed6\u65b9\u6848"}),"\n",(0,r.jsx)(n.p,{children:"\u5176\u4ed6\u975e\u5916\u90e8\u5316\u914d\u7f6e\u7684\u65b9\u6848\u7684\u914d\u7f6e\u6682\u4e0d\u63d0\u4f9b\uff0c\u5982\u7528\u6237\u914d\u7f6e\u4e86 Spring Cloud Config \u8fd9\u7c7b\u914d\u7f6e\u4e2d\u5fc3\uff0c\u4e5f\u53ef\u4ee5\u5229\u7528\u4e0a Spring \u63d0\u4f9b\u7684\u66f4\u9ad8\u9636\u7528\u6cd5"}),"\n",(0,r.jsx)(n.h2,{id:"tips",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,r.jsx)(n.p,{children:"\u65e0\u8bba\u662f\u5916\u90e8\u5316\u914d\u7f6e\u8fd8\u662f\u4ee3\u7801\u5c42\u6b21\u4fee\u6539\uff0cLicense \u7684\u53d8\u52a8\u610f\u5473\u7740 JVM \u5fc5\u987b\u7ecf\u5386\u5173\u95ed-\u542f\u52a8\u8fd9\u4e00\u6b65\u9aa4\u3002Phoenix \u5e94\u7528\u8fd0\u884c\u5728\u5206\u5e03\u5f0f\u7684\u96c6\u7fa4\u73af\u5883\u4e0b\uff0c\u867d\u7136\u4f7f\u7528\u67d0\u4e9b\u6280\u5de7\u4e0b\uff0cPhoenix \u80fd\u591f\u5b9e\u73b0\u7070\u5ea6\u53d1\u5e03\uff0c\u4f46\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u63a8\u8350\u7528\u6237\u505c\u6b62\u6574\u4e2a Phoenix \u5e94\u7528\u96c6\u7fa4\u540e\uff0c\u518d\u7edf\u4e00\u4fee\u6539\u540e\u542f\u52a8\uff0c\u907f\u514d\u90e8\u5206\u8282\u70b9\u5728\u5b58\u8d27\u671f\u95f4\u5199\u5165\u5f02\u5e38\u6570\u636e\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5bf9\u4e8e\u5347\u7ea7\u8fc7\u7a0b\u4e2d\u5b58\u5728\u6570\u636e\u5e93\u5c42\u9762\uff08EventStore\uff09\u7684\u53d8\u52a8\uff0c\u5982\u6e05\u5e93\u91cd\u5efa\uff0c\u5219\u66f4\u662f\u5982\u6b64\uff0c\u56e0\u4e3a Phoenix \u5e94\u7528\u7684\u72b6\u6001\u5728\u5b58\u6d3b\u671f\u95f4\u4f7f\u7528\u4e86\u5185\u5b58\u955c\u50cf\u7684\u80fd\u529b\uff08memory image)\uff0c\u4ec5\u5f53\u53d1\u751f\u91cd\u542f\uff0c\u91cd\u65b0\u5e73\u8861\uff0c\u6545\u969c\u7b49\u60c5\u51b5\u4e0b\u4e22\u5931\u4e86\u5185\u5b58\u6570\u636e\u65f6\uff0c\u624d\u4f1a\u4f7f\u7528\u6570\u636e\u5e93\u7684\u6301\u4e45\u5316\u5b58\u50a8\u91cd\u65b0\u8f7d\u5165\u72b6\u6001\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u56e0\u6b64\uff0c\u5728\u505a\u6570\u636e\u5e93\u5c42\u9762\u7684\u53d8\u52a8\u65f6\uff0c\u4e00\u5b9a\u9075\u5faa\uff1a"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u505c\u6b62\u6240\u6709 Phoenix \u5e94\u7528\u96c6\u7fa4"}),"\n",(0,r.jsx)(n.li,{children:"\u4fee\u6539"}),"\n",(0,r.jsx)(n.li,{children:"\u91cd\u65b0\u542f\u52a8 Phoenix \u5e94\u7528\u96c6\u7fa4"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u7684\u6b65\u9aa4\u3002"})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>c});var r=i(67294);const s={},l=r.createContext(s);function c(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);