"use strict";(self.webpackChunkphoenix_website_next=self.webpackChunkphoenix_website_next||[]).push([[95275],{43822:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=s(85893),t=s(11151);const a={id:"phoenix-cluster-manager",title:"\u96c6\u7fa4\u7ba1\u7406"},c=void 0,i={id:"phoenix-2.x/phoenix-core/phoenix-cluster-manager",title:"\u96c6\u7fa4\u7ba1\u7406",description:"\u96c6\u7fa4\u80fd\u529b",source:"@site/versioned_docs/version-2.5.2/phoenix-2.x/02-phoenix-core/08-cluster.md",sourceDirName:"phoenix-2.x/02-phoenix-core",slug:"/phoenix-2.x/phoenix-core/phoenix-cluster-manager",permalink:"/docs/2.5.2/phoenix-2.x/phoenix-core/phoenix-cluster-manager",draft:!1,unlisted:!1,editUrl:"https://github.com/PhoenixIQ/versioned_docs/version-2.5.2/phoenix-2.x/02-phoenix-core/08-cluster.md",tags:[],version:"2.5.2",sidebarPosition:8,frontMatter:{id:"phoenix-cluster-manager",title:"\u96c6\u7fa4\u7ba1\u7406"},sidebar:"docs",previous:{title:"\u8ba2\u9605\u4e0e\u5e7f\u64ad",permalink:"/docs/2.5.2/phoenix-2.x/phoenix-core/phoenix-subscribe-pub"},next:{title:"\u914d\u7f6e\u8be6\u60c5",permalink:"/docs/2.5.2/phoenix-2.x/phoenix-core/phoenix-core-config"}},l={},d=[{value:"\u96c6\u7fa4\u80fd\u529b",id:"\u96c6\u7fa4\u80fd\u529b",level:2},{value:"\u96c6\u7fa4\u914d\u7f6e",id:"\u96c6\u7fa4\u914d\u7f6e",level:2},{value:"\u5b8c\u6574\u914d\u7f6e",id:"\u5b8c\u6574\u914d\u7f6e",level:3},{value:"1. \u672c\u5730\u5355\u70b9\u8fd0\u884c",id:"1-\u672c\u5730\u5355\u70b9\u8fd0\u884c",level:3},{value:"2. Config \u6a21\u5f0f\u8fd0\u884c\u96c6\u7fa4",id:"2-config-\u6a21\u5f0f\u8fd0\u884c\u96c6\u7fa4",level:3},{value:"3. Kubernetes-API \u6a21\u5f0f\u8fd0\u884c\u96c6\u7fa4",id:"3-kubernetes-api-\u6a21\u5f0f\u8fd0\u884c\u96c6\u7fa4",level:3},{value:"4. Kubernetes-DNS \u6a21\u5f0f\u8fd0\u884c\u96c6\u7fa4",id:"4-kubernetes-dns-\u6a21\u5f0f\u8fd0\u884c\u96c6\u7fa4",level:3},{value:"5. Consul \u96c6\u7fa4\u8fd0\u884c",id:"5-consul-\u96c6\u7fa4\u8fd0\u884c",level:3},{value:"6. Nacos \u96c6\u7fa4\u8fd0\u884c",id:"6-nacos-\u96c6\u7fa4\u8fd0\u884c",level:3},{value:"7. Eureka \u96c6\u7fa4\u8fd0\u884c",id:"7-eureka-\u96c6\u7fa4\u8fd0\u884c",level:3},{value:"\u96c6\u7fa4\u8fd0\u7ef4",id:"\u96c6\u7fa4\u8fd0\u7ef4",level:2},{value:"\u5e94\u7528\u72b6\u6001\u67e5\u770b",id:"\u5e94\u7528\u72b6\u6001\u67e5\u770b",level:4},{value:"\u96c6\u7fa4\u72b6\u6001\u5c55\u793a",id:"\u96c6\u7fa4\u72b6\u6001\u5c55\u793a",level:4},{value:"\u4e2d\u95f4\u4ef6\u96c6\u7fa4\u517c\u5bb9\u6027",id:"\u4e2d\u95f4\u4ef6\u96c6\u7fa4\u517c\u5bb9\u6027",level:2}];function o(e){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u96c6\u7fa4\u80fd\u529b",children:"\u96c6\u7fa4\u80fd\u529b"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u9ad8\u5e76\u53d1\u573a\u666f\u4e2d\uff0c\u5e94\u7528\u7cfb\u7edf\u7684\u5904\u7406\u80fd\u529b\u901a\u5e38\u662f\u4e2a\u4e25\u5cfb\u7684\u6311\u6218\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u63d0\u9ad8\u7cfb\u7edf\u7684\u5e76\u53d1\u5904\u7406\u80fd\u529b\u4e0a\uff0cPhoenix \u6846\u67b6\u4f7f\u7528\u805a\u5408\u6839\u5bf9\u8c61\u4f5c\u4e3a\u8c03\u5ea6\u5355\u4f4d\u8fdb\u884c\u7ebf\u7a0b\u8c03\u5ea6\uff0c\u4ee5\u63d0\u5347\u5355\u8282\u70b9\u90e8\u7f72\u7684\u60c5\u51b5\u4e0b\u7ebf\u7a0b\u8d44\u6e90\u7684\u5229\u7528\u6548\u7387\u3002\u6b64\u5916\uff0c\u501f\u52a9 Akka-Cluster \u548c Akka-Cluster-Sharding \u7684\u80fd\u529b\u5b9e\u73b0\u6a2a\u5411\u6269\u5c55\uff0c\u901a\u8fc7\u90e8\u7f72\u591a\u4e2a\u670d\u52a1\u8282\u70b9\u7ec4\u6210\u96c6\u7fa4\uff0c\u805a\u5408\u6839\u5bf9\u8c61\u53ef\u4ee5\u5728\u96c6\u7fa4\u8282\u70b9\u4e4b\u95f4\u7075\u6d3b\u8c03\u5ea6\uff0c\u4f7f\u5f97\u7cfb\u7edf\u53ef\u4ee5\u901a\u8fc7\u589e\u52a0\u8282\u70b9\u7684\u65b9\u5f0f\u63d0\u5347\u5904\u7406\u80fd\u529b\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"show",src:s(60908).Z+"",width:"980",height:"240"})}),"\n",(0,r.jsx)(n.p,{children:"Phoenix \u6846\u67b6\u63d0\u4f9b\u5e94\u7528\u7cfb\u7edf\u7684\u4f38\u7f29\u6027\u3002\u4e0e\u6a2a\u5411\u6269\u5c55\u76f8\u4f3c\uff0cPhoenix \u670d\u52a1\u96c6\u7fa4\u53ef\u4ee5\u52a8\u6001\u7f29\u51cf\u8282\u70b9\u6570\u91cf\u3002Akka-Cluster \u548c Akka-Cluster-Sharding \u53ef\u4ee5\u5bf9\u805a\u5408\u6839\u5bf9\u8c61\u8fdb\u884c\u96c6\u7fa4\u8c03\u5ea6\u548c\u7ba1\u7406\uff0c\u5728\u96c6\u7fa4\u51cf\u5c11\u670d\u52a1\u8282\u70b9\u6570\u91cf\u65f6\uff0cAkka\u53ef\u4ee5\u5c06\u8fd9\u4e9b\u8282\u70b9\u4e2d\u7684\u805a\u5408\u6839\u5bf9\u8c61\u8f6c\u79fb\u5230\u5269\u4f59\u8282\u70b9\u4e2d\u3002\u5728\u8fdb\u884c\u8282\u70b9\u79fb\u9664\u7684\u8fc7\u7a0b\u4e2d\uff0c\u914d\u5408 EventSourcing \u7684\u80fd\u529b\uff0c\u88ab\u79fb\u9664\u8282\u70b9\u4e2d\u7684\u805a\u5408\u6839\u53ef\u4ee5\u5728\u5269\u4f59\u8282\u70b9\u4e2d\u91cd\u65b0\u6784\u5efa\u5e76\u6062\u590d\u72b6\u6001\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u96c6\u7fa4\u914d\u7f6e",children:"\u96c6\u7fa4\u914d\u7f6e"}),"\n",(0,r.jsx)(n.p,{children:"Phoenix \u652f\u6301\u5728\u591a\u79cd\u73af\u5883\u4e2d\u8fd0\u884c\u3002 \u4e0b\u9762\u5206\u522b\u4ecb\u7ecd\u4e0b Phoenix \u670d\u52a1\u5728\u96c6\u7fa4\u65f6 Akka \u7684\u914d\u7f6e\u9879\u9700\u8981\u5982\u4f55\u8fdb\u884c\u914d\u7f6e\u3002"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Config"}),(0,r.jsx)(n.th,{children:"Kubernetes-API"}),(0,r.jsx)(n.th,{children:"Kubernetes-DNS"}),(0,r.jsx)(n.th,{children:"Consul"}),(0,r.jsx)(n.th,{children:"Nacos"}),(0,r.jsx)(n.th,{children:"Eureka"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"\u52a8\u6001\u79cd\u5b50\u8282\u70b9"})}),(0,r.jsx)(n.td,{children:"\u4e0d\u652f\u6301"}),(0,r.jsx)(n.td,{children:"\u652f\u6301"}),(0,r.jsx)(n.td,{children:"\u652f\u6301"}),(0,r.jsx)(n.td,{children:"\u652f\u6301"}),(0,r.jsx)(n.td,{children:"\u652f\u6301"}),(0,r.jsx)(n.td,{children:"\u652f\u6301"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"\u5fc5\u8981\u6761\u4ef6"})}),(0,r.jsx)(n.td,{children:"\u9700\u8981\u914d\u7f6e\u79cd\u5b50\u8282\u70b9"}),(0,r.jsxs)(n.td,{children:["\u9700\u8981\u8fd0\u884c\u670d\u52a1\u7684 POD \u80fd\u591f\u8bbf\u95ee ",(0,r.jsx)(n.code,{children:"Kubernetes-API"})]}),(0,r.jsxs)(n.td,{children:["\u9700\u8981\u5b9a\u4e49 Headless service \u5e76\u4e14 Kubernetes \u652f\u6301 ",(0,r.jsx)(n.code,{children:"publishNotReadyAddresses"})]}),(0,r.jsx)(n.td,{children:"\u5916\u90e8\u670d\u52a1 Consul"}),(0,r.jsx)(n.td,{children:"\u5916\u90e8\u670d\u52a1 Nacos"}),(0,r.jsx)(n.td,{children:"\u5916\u90e8\u670d\u52a1 Eureka"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"\u8fd0\u884c\u73af\u5883"})}),(0,r.jsx)(n.td,{children:"\u65e0\u663e\u5f0f\u8981\u6c42"}),(0,r.jsx)(n.td,{children:"Kubernetes"}),(0,r.jsx)(n.td,{children:"Kubernetes"}),(0,r.jsx)(n.td,{children:"\u65e0\u663e\u5f0f\u8981\u6c42"}),(0,r.jsx)(n.td,{children:"\u65e0\u663e\u5f0f\u8981\u6c42"}),(0,r.jsx)(n.td,{children:"\u65e0\u663e\u5f0f\u8981\u6c42"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"\u4f18\u52bf"})}),(0,r.jsx)(n.td,{children:"\u914d\u7f6e\u7b80\u5355, \u4ec5\u9760\u7a0b\u5e8f\u5c31\u53ef\u4ee5\u8fd0\u884c"}),(0,r.jsx)(n.td,{children:"\u4ea4\u7531 Kubernetes API Server \u7ba1\u7406"}),(0,r.jsx)(n.td,{children:"\u4f7f\u7528 DNS \u4f5c\u4e3a\u670d\u52a1\u53d1\u73b0, \u65e0\u9700 POD \u6743\u9650"}),(0,r.jsx)(n.td,{children:"\u65e0\u8fd0\u884c\u73af\u5883\u9650\u5236, \u652f\u6301\u914d\u7f6e\u4e2d\u5fc3\uff0c\u5f3a\u4e00\u81f4\u6027"}),(0,r.jsx)(n.td,{children:"\u65e0\u8fd0\u884c\u73af\u5883\u9650\u5236, \u652f\u6301\u914d\u7f6e\u4e2d\u5fc3\uff0c\u540c\u65f6\u652f\u6301 AP,CP"}),(0,r.jsx)(n.td,{children:"\u65e0\u8fd0\u884c\u73af\u5883\u9650\u5236, \u9ad8\u53ef\u7528\u6ce8\u518c\u4e2d\u5fc3"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"\u52a3\u52bf"})}),(0,r.jsx)(n.td,{children:"\u9759\u6001\u914d\u7f6e\uff0c\u5bb9\u9519\u80fd\u529b\u5dee"}),(0,r.jsx)(n.td,{children:"\u9700\u8981 Kubernetes \u73af\u5883\u548c POD \u6743\u9650"}),(0,r.jsx)(n.td,{children:"\u9700\u8981 Kubernetes \u73af\u5883\uff0c\u4f9d\u8d56\u4e8e DNS \u89e3\u6790\uff0c\u6027\u80fd\u4e0d\u597d"}),(0,r.jsx)(n.td,{children:"\u5f3a\u4e00\u81f4\u5bfc\u81f4\u670d\u52a1\u4e0d\u53ef\u7528\uff0c\u624b\u52a8\u6ce8\u9500\u5b9e\u4f8b"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"\u9700\u8981\u5ba2\u6237\u7aef\u7ef4\u62a4\u670d\u52a1\u72b6\u6001"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"\u5206\u533a\u529f\u80fd"})}),(0,r.jsx)(n.td,{children:"\u4e0d\u652f\u6301"}),(0,r.jsx)(n.td,{children:"\u4e0d\u652f\u6301"}),(0,r.jsx)(n.td,{children:"\u4e0d\u652f\u6301"}),(0,r.jsx)(n.td,{children:"\u4e0d\u652f\u6301"}),(0,r.jsx)(n.td,{children:"\u652f\u6301"}),(0,r.jsx)(n.td,{children:"\u652f\u6301"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"\u5b8c\u6574\u914d\u7f6e",children:"\u5b8c\u6574\u914d\u7f6e"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'quantex:\n  phoenix:\n   cluster: # \u96c6\u7fa4\u914d\u7f6e\n      # \u96c6\u7fa4\u7ec4\u5efa\u65b9\u5f0f\n      discovery-method: config / kubernetes / kubernetes_dns / consul / nacos / eureka\n      # \u914d\u7f6e\u6587\u4ef6\u7ec4\u5efa\u96c6\u7fa4\n      config:\n        seed-node:  # \u96c6\u7fa4\u79cd\u5b50\u8282\u70b9\n          - akka://account-server@127.0.0.1:2551\n          - akka://account-server@127.0.0.1:2552\n      # Kubernetes-API \u65b9\u5f0f\n      kubernetes:\n        k8s-pod-domain: "cluster.local" # k8s\u670d\u52a1\u53d1\u73b0\u9ed8\u8ba4\u96c6\u7fa4\u57df\u540d\u540e\u7f00\n        pod-label-selector: "app=%s" #[\u53ef\u9009\u914d\u7f6e]:\u8bbe\u7f6e Selector label \u7684\u683c\u5f0f\uff0c`%s` \u5c06\u66ff\u6362\u4e3a\u914d\u7f6e\u7684\u6709\u6548\u540d\u79f0\uff08\u8fd9\u4e2a\u9700\u8981\u5728 Deployment \u81ea\u5df1\u8bbe\u7f6e\uff09\n      # Kubernetes-DNS \u65b9\u5f0f\n      kubernetes-dns:\n        port-name: management # management \u7aef\u53e3\n        headless-service-name: account-server-headless # Headless \u670d\u52a1\u540d\n      # Consul \u65b9\u5f0f\n      consul:\n        consul-host: 127.0.0.1 # consul host\n        consul-port: 8500 # consul \u7aef\u53e3\n        group-name: default # \u53ef\u9009\u53c2\u6570, \u5206\u7ec4\u540d\n      # Nacos \u65b9\u5f0f\n      nacos:\n        nacos-host: 127.0.0.1 # nacos host\n        nacos-port: 8500 # nacos \u7aef\u53e3\n        group-name: default # \u5206\u7ec4\u529f\u80fd. \u5f53\u4e24\u4e2a\u4e0d\u540c\u7f51\u7edc\u533a\u57df\u7684\u7a0b\u5e8f\uff0c\u4f7f\u7528\u4e86\u76f8\u540c\u7684 Nacos \u65f6, \u652f\u6301\u4ee5\u8be5\u53c2\u6570\u533a\u5206\u6570\u636e\u4e2d\u5fc3, \u4ee5\u5f62\u6210\u4e0d\u540c\u7684\u96c6\u7fa4.\n     # Eureka \u65b9\u5f0f\n      eureka:\n        eureka-host: 127.0.0.1 # Eureka host\n        eureka-port: 8761 # Eureka \u7aef\u53e3\n        eureka-path: eureka # \u8d44\u6e90\u8def\u5f84, \u6700\u7ec8\u7ec4\u6210 http://127.0.0.1:8761/eureka/\n        group-name: default # \u53ef\u9009\u53c2\u6570, \u5206\u7ec4\u540d\n'})}),"\n",(0,r.jsx)(n.h3,{id:"1-\u672c\u5730\u5355\u70b9\u8fd0\u884c",children:"1. \u672c\u5730\u5355\u70b9\u8fd0\u884c"}),"\n",(0,r.jsxs)(n.p,{children:["Phoenix \u7684\u9ed8\u8ba4\u914d\u7f6e\u5c31\u662f\u672c\u5730\u6a21\u5f0f\uff0c\u76f4\u63a5\u542f\u52a8\u5373\u53ef\uff0c\u4e0d\u7528\u5728 ",(0,r.jsx)(n.code,{children:"application.yaml"})," \u6216\u8005 ",(0,r.jsx)(n.code,{children:"application.properties"})," \u4e2d\u663e\u5f0f\u914d\u7f6e\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"2-config-\u6a21\u5f0f\u8fd0\u884c\u96c6\u7fa4",children:"2. Config \u6a21\u5f0f\u8fd0\u884c\u96c6\u7fa4"}),"\n",(0,r.jsx)(n.p,{children:"\u6dfb\u52a0\u6216\u4fee\u6539\u4ee5\u4e0b\u51e0\u9879\u914d\u7f6e\uff0c\u4fdd\u8bc1\u591a\u4e2a\u5b9e\u4f8b\u7684\u7aef\u53e3\u4e0d\u80fd\u51b2\u7a81\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u914d\u7f6e\u6587\u4ef6\u65b9\u5f0f\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"quantex:\n  phoenix:\n    # \u8282\u70b9\u4e13\u5c5e\u914d\u7f6e\n    akka:\n      artery-canonical-port: 2552  # \u8282\u70b9\u901a\u4fe1\u7aef\u53e3,\u591a\u4e2a\u5b9e\u4f8b\u4e0d\u76f8\u540c\n      management-http-port: 8559 # \u96c6\u7fa4\u7ba1\u7406\u7684 HTTP \u7aef\u53e3,\u591a\u4e2a\u5b9e\u4f8b\u4e0d\u76f8\u540c\n      artery-canonical-hostname: 127.0.0.1   # \u8282\u70b9\u7684 IP \u5730\u5740\n    # \u96c6\u7fa4\u901a\u7528\u914d\u7f6e\n    cluster:\n      discovery-method: config # \u4f7f\u7528 Config \u7ec4\u5efa\u96c6\u7fa4\n      # \u914d\u7f6e\u6587\u4ef6\u7ec4\u5efa\u96c6\u7fa4\n      config:\n        seed-node:  # \u96c6\u7fa4\u4e2d \u79cd\u5b50\u8282\u70b9\u7684\u5730\u5740, \u4e00\u822c\u4f1a\u628a\u6240\u6709\u8282\u70b9\u90fd\u8bbe\u7f6e, \u53e6\u5916`account-server`\u8981\u548c\u5e94\u7528${spring.application.name}\u7684\u540d\u5b57\u76f8\u540c\n          - akka://account-server@127.0.0.1:2551\n          - akka://account-server@127.0.0.1:2552\n"})}),"\n",(0,r.jsx)(n.p,{children:"JVM\u53c2\u6570\u914d\u7f6e\u65b9\u5f0f\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:'-Dquantex.phoenix.cluster.discovery-method=config\n-Dquantex.phoenix.cluster.config.seed-node=akka://bank-account@127.0.0.1:2551,akka://bank-account@127.0.0.1:2552\n-Dquantex.phoenix.akka.arteryCanonicalHostname=127.0.0.1\n-Dquantex.phoenix.akka.artery-canonical-port=2552\n-Dquantex.phoenix.akka.management-http-port=8559\n-Dserver.port=8081\n-Dspring.datasource.url="jdbc:h2:file:./data/test2;DB_CLOSE_DELAY=-1;DATABASE_TO_UPPER=FALSE;INIT=CREATE SCHEMA IF NOT EXISTS PUBLIC"\n-Dquantex.phoenix.server.event-store.data-sources[0].url="jdbc:h2:~/data/test2;DB_CLOSE_DELAY=-1;DATABASE_TO_UPPER=FALSE;INIT=CREATE SCHEMA IF NOT EXISTS PUBLIC"\n-Dquantex.phoenix.server.event-store.data-sources[0].username="sa"\n-Dquantex.phoenix.server.event-store.data-sources[0].password=123\n'})}),"\n",(0,r.jsx)(n.p,{children:":::info \u6ce8\u610f"}),"\n",(0,r.jsx)(n.p,{children:"\u672c\u5730\u7ec4\u5efa\u96c6\u7fa4\u65f6\u9700\u8981\u6ce8\u610f"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u4f7f\u7528\u5185\u5b58\u6570\u636e\u5e93\u65f6\u4fdd\u8bc1\u6bcf\u4e2a\u6570\u636e\u5e93\u53ea\u6709\u4e00\u4e2a\u6709\u6548\u8fde\u63a5 \u6216 \u8fde\u63a5\u4e0d\u540c\u5185\u5b58\u6570\u636e\u5e93\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u4f7f\u7528\u5185\u5b58\u7248Kafka\u65f6\u907f\u514d\u7aef\u53e3\u51b2\u7a81\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:":::"}),"\n",(0,r.jsx)(n.h3,{id:"3-kubernetes-api-\u6a21\u5f0f\u8fd0\u884c\u96c6\u7fa4",children:"3. Kubernetes-API \u6a21\u5f0f\u8fd0\u884c\u96c6\u7fa4"}),"\n",(0,r.jsx)(n.p,{children:"Phoenix \u7684\u96c6\u7fa4\u80fd\u529b\u4f9d\u8d56\u4e8e Akka-Cluster, Akka-Cluster \u63d0\u4f9b\u4e86\u65b9\u4fbf\u7684 Kubernetes API \u6765\u5e2e\u52a9\u6211\u4eec\u5728 kubernetes \u73af\u5883\u4e2d\u53d1\u73b0\u670d\u52a1\u4ee5\u53ca\u7ec4\u96c6\u7fa4\u3002"}),"\n",(0,r.jsx)(n.p,{children:"Phoenix \u670d\u52a1\u540c\u65f6\u8fd8\u9700\u8981\u8fdb\u884c\u5982\u4e0b\u914d\u7f6e"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'quantex:\n  phoenix:\n    cluster:\n      discovery-method: kubernetes # \u4f7f\u7528 Kubernetes-API \u7ec4\u5efa\u96c6\u7fa4\n      # Kubernetes-API \u65b9\u5f0f\n      kubernetes:\n        k8s-pod-domain: "cluster.local" # k8s\u670d\u52a1\u53d1\u73b0\u9ed8\u8ba4\u96c6\u7fa4\u57df\u540d\u540e\u7f00\n        pod-label-selector: "app=%s" #[\u53ef\u9009\u914d\u7f6e]:\u8bbe\u7f6e Selector label \u7684\u683c\u5f0f\uff0c`%s` \u5c06\u66ff\u6362\u4e3a\u914d\u7f6e\u7684\u6709\u6548\u540d\u79f0\uff08\u8fd9\u4e2a\u9700\u8981\u5728 Deployment \u81ea\u5df1\u8bbe\u7f6e\uff09\n'})}),"\n",(0,r.jsx)(n.p,{children:"Kubernetes \u8fd8\u9700\u8981\u4ee5\u4e0b\u914d\u7f6e:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Deployment\uff1a\u7528\u6765\u5728 kubernetes \u4e2d\u521b\u5efa\u4e00\u4e2a\u670d\u52a1 pod"}),"\n",(0,r.jsx)(n.li,{children:"Role \u548c RoleBinding\uff1a\u4f7fphoenix\u670d\u52a1\uff08akka pod\uff09\u53ef\u4ee5\u8bbf\u95ee kubernetes api"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u4e00\u4e2a Deployment \u793a\u4f8b\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: phoenix-demo # \u670d\u52a1\u540d\n  labels:\n    app: phoenix-demo # \u9700\u8981\u8bbe\u7f6elabels\n...\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5141\u8bb8\u8282\u70b9\u67e5\u8be2 Kubernetes API \u670d\u52a1\u5668\u7684Role \u548c RoleBinding\u793a\u4f8b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'# \u521b\u5efa\u4e00\u4e2a\u89d2\u8272 `pod-reader`\uff0c\u5b83\u53ef\u4ee5\u5217\u51fa pod\uff0c\u5e76\u5c06\u7ed1\u5b9a\u90e8\u7f72\u5230\u7684\u547d\u540d\u7a7a\u95f4\u4e2d\u7684\u9ed8\u8ba4\u670d\u52a1\u5e10\u6237\u7ed1\u5b9a\u5230\u8be5\u89d2\u8272\u3002\nkind: Role\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  name: pod-reader\nrules:\n  - apiGroups: [""] # "" indicates the core API group\n    resources: ["pods"]\n    verbs: ["get", "watch", "list"]\n---\nkind: RoleBinding\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  name: read-pods\nsubjects:\n  # Create the default user for the akka-cluster-1 namespace\n  - kind: User\n    name: system:serviceaccount:{{- printf "%s" .Release.Namespace | trunc 63 -}}:default\nroleRef:\n  kind: Role\n  name: pod-reader\n  apiGroup: rbac.authorization.k8s.io\n'})}),"\n",(0,r.jsx)(n.h3,{id:"4-kubernetes-dns-\u6a21\u5f0f\u8fd0\u884c\u96c6\u7fa4",children:"4. Kubernetes-DNS \u6a21\u5f0f\u8fd0\u884c\u96c6\u7fa4"}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u7684\u751f\u4ea7\u73af\u5883\u4e2d\u4e0d\u5141\u8bb8\u4e3a\u8fd0\u884c\u7a0b\u5e8f\u7684 POD \u6dfb\u52a0 ",(0,r.jsx)(n.code,{children:"Kubernetes-API"})," \u6743\u9650\uff0c\u5219\u53ef\u4ee5\u5c1d\u8bd5\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"Kubernetes-DNS"})," \u7684\u65b9\u5f0f\u7ec4\u5efa\u96c6\u7fa4"]}),"\n",(0,r.jsx)(n.p,{children:"\u53c2\u8003\u914d\u7f6e\u5982\u4e0b:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"quantex:\n  phoenix:\n    cluster:\n      discovery-method: kubernetes_dns # \u4f7f\u7528 Kubernetes-DNS \u7ec4\u5efa\u96c6\u7fa4\n      # Kubernetes-DNS \u65b9\u5f0f\n      kubernetes-dns:\n        port-name: management # management \u7aef\u53e3\n        headless-service-name: account-server-headless # Headless \u670d\u52a1\u540d\n"})}),"\n",(0,r.jsx)(n.p,{children:"DNS \u6a21\u5f0f\u4e0b\uff0c\u9700\u8981\u4e3a\u7a0b\u5e8f\u521b\u5efa Headless Service\uff0c\u5e76\u5141\u8bb8 POD \u5728\u672a\u542f\u52a8\u5b8c\u6210\u65f6\u53d1\u5e03\u81ea\u8eab\u7684\u5730\u5740\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u53c2\u8003\u914d\u7f6e\u5982\u4e0b:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'#public, \u7a0b\u5e8f\u5bf9\u5916\u7684\u670d\u52a1\napiVersion: v1\nkind: Service\nmetadata:\n  name: {{ .Values.bank_account.server.name | quote }}\n  labels:\n{{ include "phoenix.labels" . | indent 4 }}\n    app.name: {{ .Values.bank_account.server.name | quote }}\nspec:\n  type: {{ .Values.bank_account.server.service.type }}\n  ports:\n    - name: {{ .Values.bank_account.server.name | quote }}\n      port: 80\n      targetPort: 8080\n      protocol: TCP\n  selector:\n    app.kubernetes.io/name: {{ include "phoenix.name" . }}\n    app.kubernetes.io/instance: {{ .Release.Name }}\n    app.name: {{ .Values.bank_account.server.name | quote }}\n#public\n---\n#headless \u7528\u4e8e Forming \u96c6\u7fa4\u7684\u5185\u90e8 Headless \u670d\u52a1\napiVersion: v1\nkind: Service\nmetadata:\n  labels:\n    app: {{ .Values.bank_account.server.name | quote }}\n  annotations:\n    service.alpha.kubernetes.io/tolerate-unready-endpoints: "true" # \u5173\u952e\u53c2\u6570, \u65e7\u7248\u6ce8\u89e3\u65b9\u5f0f\u53d1\u5e03\u81ea\u8eab\u5730\u5740\n  name: "account-server-headless" # \u6b64\u503c\u9700\u8981\u5728\u914d\u7f6e\u4e2d\u6307\u5b9a quantex.phoenix.cluster.kubernetes-dns.headless-service-name\nspec:\n  ports:\n    - name: management # \u5f00\u653emanagement\u7684\u7aef\u53e3\uff0c\u7528\u4e8e\u67e5\u627eseed-node\n      port: 8558      # \u8be5\u7aef\u53e3\u4e0d\u5f71\u54cd\u96c6\u7fa4\u7ec4\u5efa\n      protocol: TCP\n      targetPort: 8558\n    - name: remoting\n      port: 2551\n      protocol: TCP\n      targetPort: 2551\n  selector:\n    app: {{ .Values.bank_account.server.name | quote }}\n  clusterIP: None\n  publishNotReadyAddresses: true # \u5173\u952e\u53c2\u6570, \u65b0\u7248\u4f7f\u7528\u5c5e\u6027\u7684\u65b9\u5f0f\u53d1\u5e03\u81ea\u8eab\u5730\u5740\n#headless\n\n'})}),"\n",(0,r.jsx)(n.h3,{id:"5-consul-\u96c6\u7fa4\u8fd0\u884c",children:"5. Consul \u96c6\u7fa4\u8fd0\u884c"}),"\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528 Consul \u8fd0\u884c\u96c6\u7fa4\u5219\u8f83\u4e3a\u7b80\u5355\uff0cPhoenix \u4f1a\u7ef4\u62a4 Consul \u4e2d\u670d\u52a1\u7684\u4e0a\u7ebf\u548c\u4e0b\u9650, \u914d\u7f6e\u5982\u4e0b\u53c2\u6570\u5373\u53ef\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"quantex:\n  phoenix:\n    cluster:\n      discovery-method: consul # \u4f7f\u7528 Consul \u7ec4\u5efa\u96c6\u7fa4\n      # Consul \u65b9\u5f0f\n      consul:\n        consul-host: 127.0.0.1 # consul host\n        consul-port: 8500 # consul \u7aef\u53e3\n        group-name: default # \u53ef\u9009\u53c2\u6570, \u5206\u7ec4\u540d\n"})}),"\n",(0,r.jsx)(n.h3,{id:"6-nacos-\u96c6\u7fa4\u8fd0\u884c",children:"6. Nacos \u96c6\u7fa4\u8fd0\u884c"}),"\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528 Nacos \u8fd0\u884c\u96c6\u7fa4\u652f\u6301\u5206\u7ec4\u529f\u80fd. Phoenix \u7ef4\u62a4\u4e86\u670d\u52a1\u7684\u6ce8\u518c, \u53ea\u9700\u8981\u914d\u7f6e\u5982\u4e0b\u53c2\u6570\u5373\u53ef\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"quantex:\n  phoenix:\n    cluster:\n      discovery-method: nacos # \u4f7f\u7528 Nacos \u7ec4\u5efa\u96c6\u7fa4\n      # Nacos \u65b9\u5f0f\n      nacos:\n        nacos-host: 127.0.0.1 # nacos host\n        nacos-port: 8848 # nacos \u7aef\u53e3\n        group-name: dc1 # \u53ef\u9009\u53c2\u6570, \u5206\u7ec4\u540d\n"})}),"\n",(0,r.jsx)(n.h3,{id:"7-eureka-\u96c6\u7fa4\u8fd0\u884c",children:"7. Eureka \u96c6\u7fa4\u8fd0\u884c"}),"\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528 Eureka \u8fd0\u884c\u96c6\u7fa4\u652f\u6301\u5206\u7ec4\u529f\u80fd. Phoenix \u7ef4\u62a4\u4e86\u670d\u52a1\u7684\u6ce8\u518c, \u53ea\u9700\u8981\u914d\u7f6e\u5982\u4e0b\u53c2\u6570\u5373\u53ef\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"quantex:\n  phoenix:\n    cluster:\n      discovery-method: eureka # \u4f7f\u7528 Eureka \u7ec4\u5efa\u96c6\u7fa4\n      # Eureka \u65b9\u5f0f\n      eureka:\n        eureka-host: 127.0.0.1 # Eureka host\n        eureka-port: 8761 # Eureka \u7aef\u53e3\n        eureka-path: eureka # \u8d44\u6e90\u8def\u5f84, \u6700\u7ec8\u7ec4\u6210 http://127.0.0.1:8761/eureka/\n        group-name: default # \u53ef\u9009\u53c2\u6570, \u5206\u7ec4\u540d\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u96c6\u7fa4\u8fd0\u7ef4",children:"\u96c6\u7fa4\u8fd0\u7ef4"}),"\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528\u96c6\u7fa4\u80fd\u529b\u4e4b\u540e\uff0c\u53ef\u4ee5\u914d\u5408 phoenix-console \u63d0\u4f9b\u7684\u76d1\u63a7\u9762\u677f\u6765\u5b9e\u65f6\u67e5\u770b\u96c6\u7fa4\u7684\u72b6\u6001\u3002"}),"\n",(0,r.jsx)(n.h4,{id:"\u5e94\u7528\u72b6\u6001\u67e5\u770b",children:"\u5e94\u7528\u72b6\u6001\u67e5\u770b"}),"\n",(0,r.jsx)(n.p,{children:"phoenix-console \u63d0\u4f9b\u7684\u5e94\u7528\u603b\u89c8\u9875\u9762\uff0c\u53ef\u4ee5\u67e5\u770b\u4e00\u4e0b\u4e24\u4e2a\u4fe1\u606f\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5e94\u7528\u72b6\u6001 [\u5c31\u7eea/\u7ec4\u96c6\u7fa4\u4e2d/\u6545\u969c]"}),"\n",(0,r.jsx)(n.li,{children:"\u96c6\u7fa4\u65b9\u5f0f [\u96c6\u7fa4/\u5355\u70b9]"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u901a\u8fc7\u4ee5\u4e0a\u4e24\u4e2a\u4fe1\u606f\uff0c\u53ef\u4ee5\u65b9\u4fbf\u7684\u5224\u65ad\u5f53\u524d\u670d\u52a1\u8fd0\u884c\u72b6\u6001\u662f\u5426\u6b63\u5e38\u3002"}),"\n",(0,r.jsx)(n.h4,{id:"\u96c6\u7fa4\u72b6\u6001\u5c55\u793a",children:"\u96c6\u7fa4\u72b6\u6001\u5c55\u793a"}),"\n",(0,r.jsx)(n.p,{children:"\u5728Phoenix\u8fd0\u884c\u65f6\uff0c\u6700\u5c0f\u8c03\u5ea6\u5355\u4f4d\u4e3a\u805a\u5408\u6839\uff0c\u5728 phoenix-console \u63d0\u4f9b\u7684\u96c6\u7fa4\u7ba1\u7406\u9875\u9762\u4e2d\u53ef\u4ee5\u5c55\u793aPhoenix\u670d\u52a1\u4e2d\u805a\u5408\u6839\u7684\u5206\u5e03\u60c5\u51b5\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u7ea2\u70b9: \u5f53\u524dPhoenix\u96c6\u7fa4\u7684\u96c6\u7fa4\u540d\u79f0\n\u6a59\u70b9: \u5f53\u524dPhoenix\u96c6\u7fa4\u5185\u7684\u8282\u70b9\u7684IP\u548c\u7aef\u53e3\n\u7eff\u70b9: \u805a\u5408\u6839shard\u96c6\u5408,\u6570\u5b57\u4ee3\u8868\u6bcf\u4e2ashard\u540e\u805a\u5408\u6839\u7684\u6570\u91cf"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"image-20210924145546645",src:s(46293).Z+"",width:"2560",height:"1369"})}),"\n",(0,r.jsx)(n.h2,{id:"\u4e2d\u95f4\u4ef6\u96c6\u7fa4\u517c\u5bb9\u6027",children:"\u4e2d\u95f4\u4ef6\u96c6\u7fa4\u517c\u5bb9\u6027"}),"\n",(0,r.jsx)(n.p,{children:":::info \u517c\u5bb9\u6027\u8bf4\u660e"}),"\n",(0,r.jsx)(n.p,{children:"\u76ee\u524d Phoenix \u96c6\u7fa4\u7684\u4e2d\u95f4\u4ef6\u96c6\u7fa4\u90fd\u662f\u4f7f\u7528\u7684 HTTP \u7684\u65b9\u5f0f\u67e5\u627e\u670d\u52a1\u800c\u975e DNS. Eureka \u5219\u4e0d\u652f\u6301 DNS \u65b9\u5f0f."}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u517c\u5bb9\u6027\u7684\u6d4b\u8bd5\u4e2d, Consul \u53ca Eureka \u90fd\u662f\u57fa\u4e8e\u5b98\u65b9\u63d0\u4f9b\u7684 REST API \u6807\u51c6\u5b9e\u73b0\u7684\u5ba2\u6237\u7aef. Nacos \u5219\u662f\u4f7f\u7528\u4e86\u5b98\u65b9\u7684\u5ba2\u6237\u7aef."}),"\n",(0,r.jsx)(n.p,{children:"\u9664\u4e86 Nacos \u5728\u5927\u7248\u672c\u4e0a\u6709\u517c\u5bb9\u6027\u95ee\u9898\u4e4b\u5916, Eureka \u548c Consul \u5728\u8de8\u591a\u4e2a\u5e74\u5ea6\u7684\u7248\u672c\u7684\u6d4b\u8bd5\u4e2d\u5747\u8868\u73b0\u6b63\u5e38."}),"\n",(0,r.jsx)(n.p,{children:":::"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Consul"}),(0,r.jsx)(n.th,{children:"Nacos"}),(0,r.jsx)(n.th,{children:"Eureka"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u5ba2\u6237\u7aef\u7248\u672c"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"com.orbitz.consul:consul-client:1.4.2"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"com.alibaba.nacos:nacos-client:1.4.2"})}),(0,r.jsx)(n.td,{children:"\u57fa\u4e8e HTTP REST"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"HTTP \u5ba2\u6237\u7aef"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"com.squareup.retrofit2"})," \u57fa\u4e8e ",(0,r.jsx)(n.code,{children:"okhttp3"})]}),(0,r.jsx)(n.td,{children:"Nacos HTTP Client \u57fa\u4e8e Apache HttpClient"}),(0,r.jsx)(n.td,{children:"\u57fa\u4e8e Akka HTTP"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u4e0d\u517c\u5bb9\u7248\u672c"}),(0,r.jsx)(n.td,{children:"\u53d7\u7248\u672c\u5f71\u54cd\u8f83\u5c0f, \u6d4b\u8bd5\u4e2d,\u80fd\u591f\u5355\u673a\u7684\u6700\u4f4e\u7248\u672c 0.6.0 \u80fd\u591f\u6b63\u5e38\u8fd0\u884c"}),(0,r.jsx)(n.td,{children:"Nacos v1.0.0 \u4ee5\u4e0b\u7248\u672c"}),(0,r.jsxs)(n.td,{children:["\u53d7\u7248\u672c\u5f71\u54cd\u8f83\u5c0f, Eureka Server \u4e2d, REST endpoint \u7684\u8def\u5f84\u7531\u7248\u672c\u53c2\u6570\u62fc\u63a5, \u5176\u4f59\u8d44\u6e90\u8def\u5f84\u7684\u4f4d\u7f6e\u6ca1\u6709\u53d8\u5316. Phoenix \u63d0\u4f9b\u4e86 ",(0,r.jsx)(n.code,{children:"eureka-path"})," \u517c\u5bb9\u4e0d\u540c\u7248\u672c"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u517c\u5bb9\u670d\u52a1\u7aef\u7248\u672c"}),(0,r.jsx)(n.td,{children:"0.6.0 ~ 1.11.3"}),(0,r.jsx)(n.td,{children:"1.0.0 ~ 1.4.2 (~ 2.0.3)"}),(0,r.jsx)(n.td,{children:"Brixton.SR1 ~ 2021.0.0 (\u4ee5 Spring Cloud \u7248\u672c\u4e3a\u4f8b)"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},46293:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/005-db7ecc12cab3856ecd9bc330fb66b55f.png"},60908:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/03-06-8c2e94abaf1e550ac919555d64fd8613.png"},11151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>c});var r=s(67294);const t={},a=r.createContext(t);function c(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);