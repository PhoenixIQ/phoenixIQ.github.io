"use strict";(self.webpackChunkphoenix_website_next=self.webpackChunkphoenix_website_next||[]).push([[57224],{23362:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>t});var s=i(85893),o=i(11151);const r={id:"phoenix-cluster-manager",title:"\u96c6\u7fa4\u7ba1\u7406"},a=void 0,l={id:"phoenix-2.x/phoenix-core/phoenix-cluster-manager",title:"\u96c6\u7fa4\u7ba1\u7406",description:"\u96c6\u7fa4\u80fd\u529b",source:"@site/versioned_docs/version-2.4.3/phoenix-2.x/02-phoenix-core/08-cluster.md",sourceDirName:"phoenix-2.x/02-phoenix-core",slug:"/phoenix-2.x/phoenix-core/phoenix-cluster-manager",permalink:"/docs/2.4.3/phoenix-2.x/phoenix-core/phoenix-cluster-manager",draft:!1,unlisted:!1,editUrl:"https://github.com/PhoenixIQ/versioned_docs/version-2.4.3/phoenix-2.x/02-phoenix-core/08-cluster.md",tags:[],version:"2.4.3",sidebarPosition:8,frontMatter:{id:"phoenix-cluster-manager",title:"\u96c6\u7fa4\u7ba1\u7406"},sidebar:"docs",previous:{title:"\u8ba2\u9605\u4e0e\u5e7f\u64ad",permalink:"/docs/2.4.3/phoenix-2.x/phoenix-core/phoenix-subscribe-pub"},next:{title:"\u914d\u7f6e\u8be6\u60c5",permalink:"/docs/2.4.3/phoenix-2.x/phoenix-core/phoenix-core-config"}},c={},t=[{value:"\u96c6\u7fa4\u80fd\u529b",id:"\u96c6\u7fa4\u80fd\u529b",level:2},{value:"\u96c6\u7fa4\u914d\u7f6e",id:"\u96c6\u7fa4\u914d\u7f6e",level:2},{value:"\u672c\u5730\u5355\u70b9\u8fd0\u884c",id:"\u672c\u5730\u5355\u70b9\u8fd0\u884c",level:4},{value:"\u672c\u5730\u96c6\u7fa4\u8fd0\u884c",id:"\u672c\u5730\u96c6\u7fa4\u8fd0\u884c",level:4},{value:"K8s\u96c6\u7fa4\u8fd0\u884c",id:"k8s\u96c6\u7fa4\u8fd0\u884c",level:4},{value:"Consul \u96c6\u7fa4\u8fd0\u884c",id:"consul-\u96c6\u7fa4\u8fd0\u884c",level:4},{value:"\u96c6\u7fa4\u8fd0\u7ef4",id:"\u96c6\u7fa4\u8fd0\u7ef4",level:2},{value:"\u5e94\u7528\u72b6\u6001\u67e5\u770b",id:"\u5e94\u7528\u72b6\u6001\u67e5\u770b",level:4},{value:"\u96c6\u7fa4\u72b6\u6001\u5c55\u793a",id:"\u96c6\u7fa4\u72b6\u6001\u5c55\u793a",level:4}];function d(e){const n={code:"code",h2:"h2",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u96c6\u7fa4\u80fd\u529b",children:"\u96c6\u7fa4\u80fd\u529b"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u9ad8\u5e76\u53d1\u573a\u666f\u4e2d\uff0c\u5e94\u7528\u7cfb\u7edf\u7684\u5904\u7406\u80fd\u529b\u901a\u5e38\u662f\u4e2a\u4e25\u5cfb\u7684\u6311\u6218\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u63d0\u9ad8\u7cfb\u7edf\u7684\u5e76\u53d1\u5904\u7406\u80fd\u529b\u4e0a\uff0cPhoenix \u6846\u67b6\u4f7f\u7528\u805a\u5408\u6839\u5bf9\u8c61\u4f5c\u4e3a\u8c03\u5ea6\u5355\u4f4d\u8fdb\u884c\u7ebf\u7a0b\u8c03\u5ea6\uff0c\u4ee5\u63d0\u5347\u5355\u8282\u70b9\u90e8\u7f72\u7684\u60c5\u51b5\u4e0b\u7ebf\u7a0b\u8d44\u6e90\u7684\u5229\u7528\u6548\u7387\u3002\u6b64\u5916\uff0c\u501f\u52a9 Akka-Cluster \u548c Akka-Cluster-Sharding \u7684\u80fd\u529b\u5b9e\u73b0\u6a2a\u5411\u6269\u5c55\uff0c\u901a\u8fc7\u90e8\u7f72\u591a\u4e2a\u670d\u52a1\u8282\u70b9\u7ec4\u6210\u96c6\u7fa4\uff0c\u805a\u5408\u6839\u5bf9\u8c61\u53ef\u4ee5\u5728\u96c6\u7fa4\u8282\u70b9\u4e4b\u95f4\u7075\u6d3b\u8c03\u5ea6\uff0c\u4f7f\u5f97\u7cfb\u7edf\u53ef\u4ee5\u901a\u8fc7\u589e\u52a0\u8282\u70b9\u7684\u65b9\u5f0f\u63d0\u5347\u5904\u7406\u80fd\u529b\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"show",src:i(85411).Z+"",width:"980",height:"240"})}),"\n",(0,s.jsx)(n.p,{children:"Phoenix \u6846\u67b6\u63d0\u4f9b\u5e94\u7528\u7cfb\u7edf\u7684\u4f38\u7f29\u6027\u3002\u4e0e\u6a2a\u5411\u6269\u5c55\u76f8\u4f3c\uff0cPhoenix \u670d\u52a1\u96c6\u7fa4\u53ef\u4ee5\u52a8\u6001\u7f29\u51cf\u8282\u70b9\u6570\u91cf\u3002Akka-Cluster \u548c Akka-Cluster-Sharding \u53ef\u4ee5\u5bf9\u805a\u5408\u6839\u5bf9\u8c61\u8fdb\u884c\u96c6\u7fa4\u8c03\u5ea6\u548c\u7ba1\u7406\uff0c\u5728\u96c6\u7fa4\u51cf\u5c11\u670d\u52a1\u8282\u70b9\u6570\u91cf\u65f6\uff0cAkka\u53ef\u4ee5\u5c06\u8fd9\u4e9b\u8282\u70b9\u4e2d\u7684\u805a\u5408\u6839\u5bf9\u8c61\u8f6c\u79fb\u5230\u5269\u4f59\u8282\u70b9\u4e2d\u3002\u5728\u8fdb\u884c\u8282\u70b9\u79fb\u9664\u7684\u8fc7\u7a0b\u4e2d\uff0c\u914d\u5408 EventSourcing \u7684\u80fd\u529b\uff0c\u88ab\u79fb\u9664\u8282\u70b9\u4e2d\u7684\u805a\u5408\u6839\u53ef\u4ee5\u5728\u5269\u4f59\u8282\u70b9\u4e2d\u91cd\u65b0\u6784\u5efa\u5e76\u6062\u590d\u72b6\u6001\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u96c6\u7fa4\u914d\u7f6e",children:"\u96c6\u7fa4\u914d\u7f6e"}),"\n",(0,s.jsx)(n.p,{children:"Phoenix \u652f\u6301\u5728\u591a\u79cd\u73af\u5883\u4e2d\u8fd0\u884c\u3002 \u4e0b\u9762\u5206\u522b\u4ecb\u7ecd\u4e0b Phoenix \u670d\u52a1\u5728\u96c6\u7fa4\u65f6 Akka \u7684\u914d\u7f6e\u9879\u9700\u8981\u5982\u4f55\u8fdb\u884c\u914d\u7f6e\u3002"}),"\n",(0,s.jsx)(n.h4,{id:"\u672c\u5730\u5355\u70b9\u8fd0\u884c",children:"\u672c\u5730\u5355\u70b9\u8fd0\u884c"}),"\n",(0,s.jsxs)(n.p,{children:["phoenix\u7684\u9ed8\u8ba4\u914d\u7f6e\u5c31\u662f\u672c\u5730\u6a21\u5f0f\uff0c\u76f4\u63a5\u542f\u52a8\u5373\u53ef\uff0c\u4e0d\u7528\u5728 ",(0,s.jsx)(n.code,{children:"application.yaml"})," \u6216\u8005 ",(0,s.jsx)(n.code,{children:"application.properties"})," \u4e2d\u663e\u5f0f\u914d\u7f6e\u3002"]}),"\n",(0,s.jsx)(n.h4,{id:"\u672c\u5730\u96c6\u7fa4\u8fd0\u884c",children:"\u672c\u5730\u96c6\u7fa4\u8fd0\u884c"}),"\n",(0,s.jsx)(n.p,{children:"\u6dfb\u52a0\u6216\u4fee\u6539\u4ee5\u4e0b\u51e0\u9879\u914d\u7f6e\uff0c\u4fdd\u8bc1\u591a\u4e2a\u5b9e\u4f8b\u7684\u7aef\u53e3\u4e0d\u80fd\u51b2\u7a81\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"server:\n  port: 8080\n\nquantex:\n  phoenix:\n    akka:\n      discovery-method: config  # \u9ed8\u8ba4config\uff0c\u670d\u52a1\u53d1\u73b0\n      artery-canonical-port: 2552  # \u96c6\u7fa4\u7aef\u53e3\n      management-http-port: 8559 # \u96c6\u7fa4\u7ba1\u7406\u7684http\u7aef\u53e3 \n      artery-canonical-hostname: 192.168.1.9   # \u8282\u70b9\u7684ip\u5730\u5740\n      seed-node: akka://account-server@192.168.1.9:2551,akka://account-server@192.168.1.9:2552  # \u96c6\u7fa4\u4e2dseed-node\u7684\u8282\u70b9\u5730\u5740,\u4e00\u822c\u4f1a\u628a\u6240\u6709\u8282\u70b9\u90fd\u8bbe\u7f6e, \u53e6\u5916`account-server`\u8981\u548c\u5e94\u7528${spring.application.name}\u7684\u540d\u5b57\u76f8\u540c\n"})}),"\n",(0,s.jsx)(n.h4,{id:"k8s\u96c6\u7fa4\u8fd0\u884c",children:"K8s\u96c6\u7fa4\u8fd0\u884c"}),"\n",(0,s.jsx)(n.p,{children:"Phoenix \u7684\u96c6\u7fa4\u80fd\u529b\u4f9d\u8d56\u4e8e Akka-Cluster, Akka-Cluster \u63d0\u4f9b\u4e86\u65b9\u4fbf\u7684 Kubernetes API \u6765\u5e2e\u52a9\u6211\u4eec\u5728 kubernetes \u73af\u5883\u4e2d\u53d1\u73b0\u670d\u52a1\u4ee5\u53ca\u7ec4\u96c6\u7fa4\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5728 kubernetes \u73af\u5883\u4e0a\u8fd0\u884c\u96c6\u7fa4\u9700\u8981\u63d0\u4f9b\u5982\u4e0b\u5185\u5bb9\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Deployment\uff1a\u7528\u6765\u5728 kubernetes \u4e2d\u521b\u5efa\u4e00\u4e2a\u670d\u52a1 pod"}),"\n",(0,s.jsx)(n.li,{children:"Role \u548c RoleBinding\uff1a\u4f7fphoenix\u670d\u52a1\uff08akka pod\uff09\u53ef\u4ee5\u8bbf\u95ee kubernetes api"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u4e00\u4e2a Deployment \u793a\u4f8b\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: phoenix-demo # \u670d\u52a1\u540d\n  labels:\n    app: phoenix-demo # \u9700\u8981\u8bbe\u7f6elabels\n...\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5141\u8bb8\u8282\u70b9\u67e5\u8be2 Kubernetes API \u670d\u52a1\u5668\u7684Role \u548c RoleBinding\u793a\u4f8b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'# \u521b\u5efa\u4e00\u4e2a\u89d2\u8272 `pod-reader`\uff0c\u5b83\u53ef\u4ee5\u5217\u51fa pod\uff0c\u5e76\u5c06\u7ed1\u5b9a\u90e8\u7f72\u5230\u7684\u547d\u540d\u7a7a\u95f4\u4e2d\u7684\u9ed8\u8ba4\u670d\u52a1\u5e10\u6237\u7ed1\u5b9a\u5230\u8be5\u89d2\u8272\u3002\nkind: Role\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  name: pod-reader\nrules:\n  - apiGroups: [""] # "" indicates the core API group\n    resources: ["pods"]\n    verbs: ["get", "watch", "list"]\n---\nkind: RoleBinding\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  name: read-pods\nsubjects:\n  # Create the default user for the akka-cluster-1 namespace\n  - kind: User\n    name: system:serviceaccount:{{- printf "%s" .Release.Namespace | trunc 63 -}}:default\nroleRef:\n  kind: Role\n  name: pod-reader\n  apiGroup: rbac.authorization.k8s.io\n'})}),"\n",(0,s.jsx)(n.p,{children:"Phoenix\u670d\u52a1\u540c\u65f6\u8fd8\u9700\u8981\u8fdb\u884c\u5982\u4e0b\u914d\u7f6e"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"quantex:\n  phoenix:\n    akka:\n      # \u670d\u52a1\u53d1\u73b0\u7684\u65b9\u5f0f\n      discovery-method: kubernetes\n      # k8s\u670d\u52a1\u53d1\u73b0\u9ed8\u8ba4\u96c6\u7fa4\u57df\u540d\u540e\u7f00\n      # \u9ed8\u8ba4\u503c\n      k8s-pod-domain: cluster.local\n      # [\u53ef\u9009\u914d\u7f6e]:\u8bbe\u7f6e Selector label \u7684\u683c\u5f0f\uff0c`%s` \u5c06\u66ff\u6362\u4e3a\u914d\u7f6e\u7684\u6709\u6548\u540d\u79f0\uff08\u8fd9\u4e2a\u9700\u8981\u5728 Deployment \u81ea\u5df1\u8bbe\u7f6e\uff09\n      # \u9ed8\u8ba4\u503c\n      pod-label-selector: app=%s\n"})}),"\n",(0,s.jsx)(n.h4,{id:"consul-\u96c6\u7fa4\u8fd0\u884c",children:"Consul \u96c6\u7fa4\u8fd0\u884c"}),"\n",(0,s.jsx)(n.p,{children:"\u4f7f\u7528 Consul \u8fd0\u884c\u96c6\u7fa4\u5219\u8f83\u4e3a\u7b80\u5355\uff0c\u914d\u7f6e\u5982\u4e0b\u53c2\u6570\u5373\u53ef\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"quantex:\n  phoenix:\n    akka:\n      discovery-method: consul # \u4fee\u6539\u670d\u52a1\u53d1\u73b0\u4e3aconsul\n      consul-host: 127.0.0.1 # \u914d\u7f6eConsul\u5730\u5740\n      consul-port: 8500 # \u914d\u7f6econsul\u5730\u5740\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u96c6\u7fa4\u8fd0\u7ef4",children:"\u96c6\u7fa4\u8fd0\u7ef4"}),"\n",(0,s.jsx)(n.p,{children:"\u4f7f\u7528\u96c6\u7fa4\u80fd\u529b\u4e4b\u540e\uff0c\u53ef\u4ee5\u914d\u5408 phoenix-console \u63d0\u4f9b\u7684\u76d1\u63a7\u9762\u677f\u6765\u5b9e\u65f6\u67e5\u770b\u96c6\u7fa4\u7684\u72b6\u6001\u3002"}),"\n",(0,s.jsx)(n.h4,{id:"\u5e94\u7528\u72b6\u6001\u67e5\u770b",children:"\u5e94\u7528\u72b6\u6001\u67e5\u770b"}),"\n",(0,s.jsx)(n.p,{children:"phoenix-console \u63d0\u4f9b\u7684\u5e94\u7528\u603b\u89c8\u9875\u9762\uff0c\u53ef\u4ee5\u67e5\u770b\u4e00\u4e0b\u4e24\u4e2a\u4fe1\u606f\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5e94\u7528\u72b6\u6001 [\u5c31\u7eea/\u7ec4\u96c6\u7fa4\u4e2d/\u6545\u969c]"}),"\n",(0,s.jsx)(n.li,{children:"\u96c6\u7fa4\u65b9\u5f0f [\u96c6\u7fa4/\u5355\u70b9]"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u901a\u8fc7\u4ee5\u4e0a\u4e24\u4e2a\u4fe1\u606f\uff0c\u53ef\u4ee5\u65b9\u4fbf\u7684\u5224\u65ad\u5f53\u524d\u670d\u52a1\u8fd0\u884c\u72b6\u6001\u662f\u5426\u6b63\u5e38\u3002"}),"\n",(0,s.jsx)(n.h4,{id:"\u96c6\u7fa4\u72b6\u6001\u5c55\u793a",children:"\u96c6\u7fa4\u72b6\u6001\u5c55\u793a"}),"\n",(0,s.jsx)(n.p,{children:"\u5728Phoenix\u8fd0\u884c\u65f6\uff0c\u6700\u5c0f\u8c03\u5ea6\u5355\u4f4d\u4e3a\u805a\u5408\u6839\uff0c\u5728 phoenix-console \u63d0\u4f9b\u7684\u96c6\u7fa4\u7ba1\u7406\u9875\u9762\u4e2d\u53ef\u4ee5\u5c55\u793aPhoenix\u670d\u52a1\u4e2d\u805a\u5408\u6839\u7684\u5206\u5e03\u60c5\u51b5\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u7ea2\u70b9: \u5f53\u524dPhoenix\u96c6\u7fa4\u7684\u96c6\u7fa4\u540d\u79f0\n\u6a59\u70b9: \u5f53\u524dPhoenix\u96c6\u7fa4\u5185\u7684\u8282\u70b9\u7684IP\u548c\u7aef\u53e3\n\u7eff\u70b9: \u805a\u5408\u6839shard\u96c6\u5408,\u6570\u5b57\u4ee3\u8868\u6bcf\u4e2ashard\u540e\u805a\u5408\u6839\u7684\u6570\u91cf"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20210924145546645",src:i(52774).Z+"",width:"2560",height:"1369"})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},52774:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/005-4216984316035e5e1db76734a99bbbe5.png"},85411:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/03-06-8c2e94abaf1e550ac919555d64fd8613.png"},11151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>a});var s=i(67294);const o={},r=s.createContext(o);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);