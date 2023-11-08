"use strict";(self.webpackChunkphoenixiq_github_io=self.webpackChunkphoenixiq_github_io||[]).push([[12602],{29834:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=s(85893),o=s(11151);const i={id:"cluster",title:"6. \u96c6\u7fa4\u793a\u4f8b"},t="\u7b80\u6613\u96c6\u7fa4\u642d\u5efa",a={id:"phoenix-2.x/phoenix/quick-start-example/cluster",title:"6. \u96c6\u7fa4\u793a\u4f8b",description:"\u672c\u7ae0\u4ecb\u7ecd\u672c\u5730\u642d\u5efa\u7b80\u6613\u7684 Phoenix \u670d\u52a1\u96c6\u7fa4\uff0c\u5982\u679c\u60a8\u60f3\u4e86\u89e3\u66f4\u591a\u8bf7\u53c2\u89c1\uff1a\u96c6\u7fa4\u914d\u7f6e\u3002",source:"@site/versioned_docs/version-2.4.3/phoenix-2.x/01-phoenix/05-quick-start-example/06-cluster.md",sourceDirName:"phoenix-2.x/01-phoenix/05-quick-start-example",slug:"/phoenix-2.x/phoenix/quick-start-example/cluster",permalink:"/docs/2.4.3/phoenix-2.x/phoenix/quick-start-example/cluster",draft:!1,unlisted:!1,editUrl:"https://github.com/PhoenixIQ/versioned_docs/version-2.4.3/phoenix-2.x/01-phoenix/05-quick-start-example/06-cluster.md",tags:[],version:"2.4.3",sidebarPosition:6,frontMatter:{id:"cluster",title:"6. \u96c6\u7fa4\u793a\u4f8b"},sidebar:"docs",previous:{title:"5. \u8ba2\u5355\u670d\u52a1",permalink:"/docs/2.4.3/phoenix-2.x/phoenix/quick-start-example/order-microservice"},next:{title:"\u529f\u80fd\u603b\u89c8",permalink:"/docs/2.4.3/phoenix-2.x/phoenix/phoenix-all-future"}},c={},l=[{value:"\u51c6\u5907",id:"\u51c6\u5907",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u542f\u52a8",id:"\u542f\u52a8",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u7b80\u6613\u96c6\u7fa4\u642d\u5efa",children:"\u7b80\u6613\u96c6\u7fa4\u642d\u5efa"}),"\n",(0,r.jsxs)(n.p,{children:["\u672c\u7ae0\u4ecb\u7ecd\u672c\u5730\u642d\u5efa\u7b80\u6613\u7684 Phoenix \u670d\u52a1\u96c6\u7fa4\uff0c\u5982\u679c\u60a8\u60f3\u4e86\u89e3\u66f4\u591a\u8bf7\u53c2\u89c1\uff1a",(0,r.jsx)(n.a,{href:"/docs/2.4.3/phoenix-2.x/phoenix-core/phoenix-cluster-manager",children:"\u96c6\u7fa4\u914d\u7f6e"}),"\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u51c6\u5907",children:"\u51c6\u5907"}),"\n",(0,r.jsx)(n.p,{children:"\u5f53\u60a8\u60f3\u5728\u672c\u5730\u642d\u5efa Phoenix \u96c6\u7fa4\uff0c\u90a3\u5f53\u7136\u662f\u53ef\u4ee5\u7684\uff0c\u4f46\u60a8\u9700\u8981\u51c6\u5907\u597d Phoenix \u652f\u6301\u7684\u6570\u636e\u5e93(h2\u3001mysql\u7b49)\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u60a8\u672c\u5730\u6ca1\u6709\u6570\u636e\u5e93\u652f\u6301\uff0c\u53ef\u4ee5\u4f7f\u7528 Docker \u4e3a\u60a8\u642d\u5efa\u4e00\u4e2a\u53ef\u7528\u7684\u6570\u636e\u5e93\uff0c\u4e0b\u9762\u4e3a\u60a8\u5c55\u793a\u4e00\u4e2a ",(0,r.jsx)(n.a,{href:"https://github.com/PhoenixIQ/hotel-booking/tree/main/docker-mysql-config",children:"Docker \u7684\u914d\u7f6e\u6587\u4ef6"}),"\uff0c\u60a8\u53ef\u4ee5\u8bd5\u7740\u4f7f\u7528\u5b83\uff1a"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"docker-compose"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"version: '3.0'\nservices:\n  mysql:\n    image: mysql:5.7\n    volumes:\n      - mysql_data:/var/lib/mysql\n    restart: always\n    environment:\n      - MYSQL_ROOT_PASSWORD=PHOENIX_EXMAPLE\n      - MYSQL_DATABASE=bookings\n      - MYSQL_USER=phoenix\n      - MYSQL_PASSWORD=phoenix\n    command: [\n      '--explicit_defaults_for_timestamp',\n      '--character-set-server=utf8',\n      '--collation-server=utf8_general_ci'\n    ]\n    ports:\n      - 3306:3306\n  zookeeper:\n    image: wurstmeister/zookeeper\n    volumes:\n      - zookeeper_data:/data\n    ports:\n      - 2182:2182\n  kafka:\n    image: wurstmeister/kafka\n    ports:\n      - 9092:9092\n    environment:\n      KAFKA_BROKER_ID: 0\n      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://127.0.0.1:9092\n      KAFKA_CREATE_TOPICS: \"hotel-bookings\"\n      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181\n      KAFKA_LISTENERS: PLAINTEXT://0.0.0.0:9092\n    volumes:\n      - kafka_data:/kafka\n    depends_on:\n      - zookeeper\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528 MySQL \u60a8\u8fd8\u9700\u8981\u6dfb\u52a0\u76f8\u5173\u4f9d\u8d56\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:"<dependency>\n     <groupId>mysql</groupId>\n     <artifactId>mysql-connector-java</artifactId>\n </dependency>\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,r.jsx)(n.p,{children:"\u672c\u5730\u914d\u7f6e Phoenix \u96c6\u7fa4\u65f6\uff0c\u60a8\u9700\u8981\u591a\u4e2a\u4e0d\u540c\u914d\u7f6e\u6587\u4ef6\uff0c\u9664\u6848\u4f8b\u539f\u672c\u7684\u914d\u7f6e\u5916\uff0c\u60a8\u8fd8\u9700\u8981\u6539\u52a8\u5982\u4e0b\u914d\u7f6e\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"JVM\u914d\u7f6e"}),"\n",(0,r.jsx)(n.li,{children:"\u4e8b\u4ef6\u5b58\u50a8\u914d\u7f6e"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4e3a\u4e86\u65b9\u4fbf\u60a8\u7684\u4f7f\u7528\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u6240\u6709\u914d\u7f6e\uff0c\u53c2\u89c1\uff1a",(0,r.jsx)(n.a,{href:"https://github.com/PhoenixIQ/hotel-booking/tree/main/hotel-server/application/src/main/resources",children:"\u672c\u5730\u96c6\u7fa4\u914d\u7f6e\u53cadocker\u914d\u7f6e"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"node-1"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"server: \n  port: \n    8080\n\nspring: \n  profiles:\n      active: node1\n  datasource:\n    url: jdbc:mysql://localhost:3306/bookings?serverTimezone=UTC&useUnicode=true&characterEncoding=UTF8&allowPublicKeyRetrieval=true&useSSL=false\n    username: root\n    password: PHOENIX_EXMAPLE\n    driver-class-name: com.mysql.jdbc.Driver\n\nquantex:\n  phoenix:\n    akka: \n      seed-node: akka://bookings@127.0.0.1:2551,akka://bookings@127.0.0.1:2552\n      arteryCanonicalHostname: 127.0.0.1\n      artery-canonical-port: 2551\n      management-http-port: 8558\n    server:\n      event-store:\n        driver-class-name: com.mysql.jdbc.Driver\n        data-sources:\n          - url: jdbc:mysql://localhost:3306/bookings?serverTimezone=UTC&useUnicode=true&characterEncoding=UTF8&allowPublicKeyRetrieval=true&useSSL=false\n            username: root\n            password: PHOENIX_EXMAPLE\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"node-2"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"server: \n  port: \n    8081\n\nspring: \n  profiles:\n    active: node2\n  datasource:\n    url: jdbc:mysql://localhost:3306/bookings2?serverTimezone=UTC&useUnicode=true&characterEncoding=UTF8&allowPublicKeyRetrieval=true&useSSL=false\n    username: root\n    password: PHOENIX_EXMAPLE\n    driver-class-name: com.mysql.jdbc.Driver\n\nquantex:\n  phoenix:\n    akka: \n      seed-node: akka://bookings@127.0.0.1:2551,akka://bookings@127.0.0.1:2552\n      arteryCanonicalHostname: 127.0.0.1\n      artery-canonical-port: 2552\n      management-http-port: 8558\n    server:\n      event-store:\n        driver-class-name: com.mysql.jdbc.Driver\n        data-sources:\n          - url: jdbc:mysql://localhost:3306/bookings2?serverTimezone=UTC&useUnicode=true&characterEncoding=UTF8&allowPublicKeyRetrieval=true&useSSL=false\n            username: root\n            password: PHOENIX_EXMAPLE\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u542f\u52a8",children:"\u542f\u52a8"}),"\n",(0,r.jsx)(n.p,{children:"\u5148\u68c0\u67e5\u60a8\u7684\u670d\u52a1\u662f\u5426\u5df2\u7ecf\u505a\u597d\u4e86\u6240\u6709\u51c6\u5907\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6b63\u5728\u8fd0\u884c\u7684 Kafka \u6216\u5f85\u542f\u52a8\u7684 Kafka\u7a0b\u5e8f\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u6b63\u5728\u8fd0\u884c\u7684\u5b58\u50a8\u5de5\u5177(h2\u6216MySQL) \u6216\u5f85\u542f\u52a8\u7684\u7a0b\u5e8f\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u6ce8\uff1a\u591a\u4e2a\u8282\u70b9IP\u4e0d\u80fd\u76f8\u540c\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u60a8\u90fd\u51c6\u5907\u597d\u4e86\uff0c\u90a3\u4e48\u5c31\u5f00\u59cb\u4f7f\u7528\u60a8\u7684\u672c\u5730\u96c6\u7fa4\u5427\uff01"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u6839\u636e\u914d\u7f6e\u6587\u4ef6\uff0c\u914d\u7f6eSpringboot\u542f\u52a8\u53c2\u6570\uff0c\u6307\u5b9a\u542f\u52a8\u7c7b\u4f7f\u7528",(0,r.jsx)(n.code,{children:"spring.profiles.active=node1"}),"\u7684\u914d\u7f6e\u6587\u4ef6\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(10346).Z+"",width:"1346",height:"867"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["\u540c\u4e0a\uff0c\u518d\u4f7f\u7528\u542f\u52a8\u7c7b\u542f\u52a8",(0,r.jsx)(n.code,{children:"spring.profiles.active=node2"}),"\u7684\u914d\u7f6e\u6587\u4ef6\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(64445).Z+"",width:"1346",height:"867"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsxs)(n.li,{children:["\u89c2\u5bdf\u63a7\u5236\u53f0\uff1a\u6253\u5370",(0,r.jsx)(n.code,{children:"Node [akka://hotel-bookings@10.10.16.11:2552] is JOINING"})," \u8bf4\u660e\u7ec4\u96c6\u7fa4\u6210\u529f\uff1b\u6216\u8005\u8fdb\u5165",(0,r.jsx)(n.code,{children:"phoenix-console"}),"\u9875\u9762\u67e5\u770b\u670d\u52a1\u72b6\u6001\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u6ce8\uff1a\u5982\u679c\u60a8\u4f7f\u7528\u5185\u5b58 Kafka\uff0c\u8bf7\u5728\u670d\u52a1\u542f\u52a8\u7b2c\u4e8c\u4e2a\u8282\u70b9\u7684\u65f6\u5019\uff0c\u907f\u514d\u518d\u6b21\u4f7f\u7528 Kafka\u542f\u52a8\u7a0b\u5e8f\u7684\u914d\u7f6e\u3002"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},10346:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/cluster-001-ea1e4512515eae787a649d836620f18b.png"},64445:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/cluster-002-52a9a9468982375913d9a22dc8c42dd9.png"},11151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>t});var r=s(67294);const o={},i=r.createContext(o);function t(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);