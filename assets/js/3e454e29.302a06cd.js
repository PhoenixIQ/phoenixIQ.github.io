"use strict";(self.webpackChunkphoenixiq_github_io=self.webpackChunkphoenixiq_github_io||[]).push([[25626],{82063:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>c});var l=i(85893),r=i(11151);const t={id:"phoenix-quick-start-2x",title:"\u5feb\u901f\u5165\u95e8"},o=void 0,s={id:"phoenix-2.x/phoenix/phoenix-quick-start-2x",title:"\u5feb\u901f\u5165\u95e8",description:"Phoenix\u6846\u67b6\u63d0\u4f9bSpring Boot Starter\u53ef\u4ee5\u5f88\u5feb\u901f\u5e2e\u52a9\u7528\u6237\u6784\u5efa\u5e94\u7528\u3002",source:"@site/versioned_docs/version-2.2.4/phoenix-2.x/01-phoenix/02-quick-start.md",sourceDirName:"phoenix-2.x/01-phoenix",slug:"/phoenix-2.x/phoenix/phoenix-quick-start-2x",permalink:"/docs/2.2.4/phoenix-2.x/phoenix/phoenix-quick-start-2x",draft:!1,unlisted:!1,editUrl:"https://github.com/PhoenixIQ/versioned_docs/version-2.2.4/phoenix-2.x/01-phoenix/02-quick-start.md",tags:[],version:"2.2.4",sidebarPosition:2,frontMatter:{id:"phoenix-quick-start-2x",title:"\u5feb\u901f\u5165\u95e8"},sidebar:"docs",previous:{title:"Phoenix\u4ecb\u7ecd",permalink:"/docs/2.2.4/phoenix-2.x/phoenix/"},next:{title:"FAQ",permalink:"/docs/2.2.4/phoenix-2.x/phoenix/phoenix-faq-2x"}},d={},c=[{value:"\u670d\u52a1\u63d0\u4f9b\u8005",id:"\u670d\u52a1\u63d0\u4f9b\u8005",level:2},{value:"maven\u4f9d\u8d56",id:"maven\u4f9d\u8d56",level:3},{value:"\u6d88\u606f\u5b9a\u4e49",id:"\u6d88\u606f\u5b9a\u4e49",level:3},{value:"command\u5b9a\u4e49",id:"command\u5b9a\u4e49",level:4},{value:"event\u5b9a\u4e49",id:"event\u5b9a\u4e49",level:4},{value:"\u5b9a\u4e49\u805a\u5408\u6839",id:"\u5b9a\u4e49\u805a\u5408\u6839",level:3},{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u670d\u52a1\u8c03\u7528\u8005",id:"\u670d\u52a1\u8c03\u7528\u8005",level:2},{value:"Maven\u4f9d\u8d56",id:"maven\u4f9d\u8d56-1",level:3},{value:"\u8c03\u7528\u670d\u52a1",id:"\u8c03\u7528\u670d\u52a1",level:3},{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6-1",level:3},{value:"\u76f8\u5173\u94fe\u63a5",id:"\u76f8\u5173\u94fe\u63a5",level:2}];function a(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Phoenix"}),"\u6846\u67b6\u63d0\u4f9bSpring Boot Starter\u53ef\u4ee5\u5f88\u5feb\u901f\u5e2e\u52a9\u7528\u6237\u6784\u5efa\u5e94\u7528\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u670d\u52a1\u63d0\u4f9b\u8005",children:"\u670d\u52a1\u63d0\u4f9b\u8005"}),"\n",(0,l.jsxs)(n.p,{children:["\u670d\u52a1\u63d0\u4f9b\u8005\u6848\u4f8b,\u8bf7\u53c2\u89c1\uff1a",(0,l.jsx)(n.a,{href:"https://github.com/PhoenixIQ/phoenix-samples/tree/master/hello-world",children:"PhoenixIQ/phoenix-samples/hello-world"})]}),"\n",(0,l.jsx)(n.h3,{id:"maven\u4f9d\u8d56",children:"maven\u4f9d\u8d56"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-xml",children:"<dependency>\n    <groupId>com.iquantex</groupId>\n    <artifactId>phoenix-server-starter</artifactId>\n    <version>2.2.4</version>\n</dependency>\n\x3c!-- 2.2.2\u7248\u672c\u4e4b\u540e\u9700\u8981\u624b\u52a8\u5bfc\u5165JDBC-EventStore\u7684\u5305\u624d\u53ef\u4f7f\u7528--\x3e\n<dependency>\n    <groupId>com.iquantex</groupId>\n    <artifactId>phoenix-eventstore-jdbc</artifactId>\n    <version>2.2.4</version>\n</dependency>\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u6d88\u606f\u5b9a\u4e49",children:"\u6d88\u606f\u5b9a\u4e49"}),"\n",(0,l.jsxs)(n.p,{children:["\u805a\u5408\u6839\u63a5\u6536",(0,l.jsx)(n.strong,{children:"cmd"}),"\u4ea7\u751f",(0,l.jsx)(n.strong,{children:"event"})]}),"\n",(0,l.jsx)(n.h4,{id:"command\u5b9a\u4e49",children:"command\u5b9a\u4e49"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.em,{children:["Phoenix\u652f\u6301",(0,l.jsx)(n.code,{children:"protobuf"}),"\u534f\u8bae\u548c",(0,l.jsx)(n.code,{children:"javaBean"}),"\u534f\u8bae\u8fdb\u884c\u5e8f\u5217\u5316,\u8fd9\u91cc\u4f7f\u7528",(0,l.jsx)(n.code,{children:"javaBean"}),"\u534f\u8bae\u8fdb\u884c\u793a\u8303"]})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"@Data\n@NoArgsConstructor\n@AllArgsConstructor\npublic class HelloCmd implements Serializable {\n\t/** hello \u6307\u4ee4id */\n    private String helloId;\n}\n"})}),"\n",(0,l.jsx)(n.h4,{id:"event\u5b9a\u4e49",children:"event\u5b9a\u4e49"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"@Data\n@NoArgsConstructor\n@AllArgsConstructor\npublic class HelloEvent implements Serializable {\n\t/** hello \u6307\u4ee4id */\n    private String helloId;\n}\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u5b9a\u4e49\u805a\u5408\u6839",children:"\u5b9a\u4e49\u805a\u5408\u6839"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u805a\u5408\u6839\u7c7b\u5b9a\u4e49\u89c4\u5219\uff1a"})}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\u805a\u5408\u6839\u7c7b\u9700\u8981\u4f7f\u7528",(0,l.jsx)(n.code,{children:"@EntityAggregateAnnotation"}),"\u8fdb\u884c\u6807\u8bb0"]}),"\n",(0,l.jsxs)(n.li,{children:["\u805a\u5408\u6839\u7c7b\u9700\u8981\u5b9e\u73b0",(0,l.jsx)(n.code,{children:"Serializable"}),"\u63a5\u53e3"]}),"\n",(0,l.jsxs)(n.li,{children:["\u63a5\u6536",(0,l.jsx)(n.strong,{children:"command"}),"\u65b9\u6cd5\u53ea\u80fd\u5305\u542b\u4e00\u4e2a",(0,l.jsx)(n.strong,{children:"cmd"}),"\u53c2\u6570\u4e14\u65b9\u6cd5\u540d\u5fc5\u987b\u4e3a",(0,l.jsx)(n.code,{children:"act"}),"\u8fd4\u56de\u503c\u4e3a",(0,l.jsx)(n.code,{children:"ActReturn"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"act"}),"\u65b9\u6cd5\u524d\u9700\u8981\u589e\u52a0",(0,l.jsx)(n.code,{children:"@CommandHandler"}),"\u6216",(0,l.jsx)(n.code,{children:"@QueryHandler"}),",\u5176\u4e2d",(0,l.jsx)(n.code,{children:"aggregateRootId"}),"\u4e3a\u805a\u5408\u6839id"]}),"\n",(0,l.jsxs)(n.li,{children:["\u63a5\u6536",(0,l.jsx)(n.strong,{children:"event"}),"\u65b9\u6cd5\u53ea\u80fd\u5305\u542b\u4e00\u4e2a",(0,l.jsx)(n.strong,{children:"event"}),"\u53c2\u6570,\u65b9\u6cd5\u540d\u79f0\u5fc5\u987b\u4e3a",(0,l.jsx)(n.code,{children:"on"}),"\u8fd4\u56de\u503c\u4e3a",(0,l.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:'/**\n * hello \u805a\u5408\u6839\n */\n@Slf4j\n@Data\n@EntityAggregateAnnotation(aggregateRootType = "Hello")\npublic class HelloAggregate implements Serializable {\n\n\tprivate static final long serialVersionUID = -1L;\n\n\t/** \u72b6\u6001: \u8ba1\u6570\u5668 */\n\tprivate long num;\n\n\t/**\n\t * \u5904\u7406hello\u6307\u4ee4,\u4ea7\u751fHelloEvent\n\t * @param cmd hello \u6307\u4ee4\n\t * @return \u5904\u7406\u7ed3\u679c\n\t */\n\t@CommandHandler(aggregateRootId = "helloId")\n\tpublic ActReturn act(Hello.HelloCmd cmd) {\n\t\treturn ActReturn.builder().retCode(RetCode.SUCCESS).retMessage("Hello World Phoenix...")\n\t\t\t\t.event(Hello.HelloEvent.newBuilder().setHelloId(cmd.getHelloId()).build()).build();\n\t}\n\n\t/**\n\t * \u5904\u7406helloEvent\n\t * @param event hello\u4e8b\u4ef6\n\t */\n\tpublic void on(Hello.HelloEvent event) {\n\t\tnum++;\n\t\tlog.info("Phoenix State: {}", num);\n\t}\n}\n'})}),"\n",(0,l.jsx)(n.h3,{id:"\u914d\u7f6e\u6587\u4ef6",children:"\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,l.jsxs)(n.p,{children:["\u5728",(0,l.jsx)(n.strong,{children:"springboot"}),"\u914d\u7f6e\u6587\u4ef6\u4e2d\u589e\u52a0",(0,l.jsx)(n.strong,{children:"phoenix"}),"\u7684\u76f8\u5173\u914d\u7f6e"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:"quantex:\n  phoenix:\n    server:\n      name: ${spring.application.name}    # \u670d\u52a1\u540d\u79f0\n      mq:\n        type: kafka                       # mq\u7c7b\u578b\n        address: 127.0.0.1                # mq\u670d\u52a1\u5730\u5740\n        subscribe-topic: account-server\n      event-store:\n        driver-class-name: org.h2.Driver  # \u6570\u636e\u5e93\u9a71\u52a8\n        data-sources:\n          - url: jdbc:h2:file:./data/test;DB_CLOSE_DELAY=-1;DATABASE_TO_UPPER=FALSE;INIT=CREATE SCHEMA IF NOT EXISTS PUBLIC # \u6570\u636e\u5e93\u94fe\u63a5url\n            username: sa                  # \u6570\u636e\u5e93\u8d26\u6237\n            password:                     # \u6570\u636e\u5e93\u5bc6\u7801\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u670d\u52a1\u8c03\u7528\u8005",children:"\u670d\u52a1\u8c03\u7528\u8005"}),"\n",(0,l.jsx)(n.h3,{id:"maven\u4f9d\u8d56-1",children:"Maven\u4f9d\u8d56"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-xml",children:"<dependency>\n    <groupId>com.iquantex</groupId>\n    <artifactId>phoenix-client-starter</artifactId>\n    <version>2.2.4</version>\n</dependency>\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u8c03\u7528\u670d\u52a1",children:"\u8c03\u7528\u670d\u52a1"}),"\n",(0,l.jsxs)(n.p,{children:["\u589e\u52a0",(0,l.jsx)(n.code,{children:"phoenix-client-starter"}),"\u4f9d\u8d56\u542f\u52a8\u670d\u52a1\u540e",(0,l.jsx)(n.strong,{children:"phoenix"}),"\u4f1a\u81ea\u52a8\u6ce8\u5165",(0,l.jsx)(n.strong,{children:"PhoenixClient"}),"\uff0c\u53ef\u4ee5\u901a\u8fc7\u8c03\u7528",(0,l.jsx)(n.strong,{children:"PhoenixClient"}),"\u7684",(0,l.jsx)(n.strong,{children:"send"}),"\u65b9\u6cd5\u8c03\u7528",(0,l.jsx)(n.strong,{children:"phoenix"}),"\u670d\u52a1"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:'@Autowired\nprivate PhoenixClient client;\n\npublic String send(tring helloId) {\n    Hello.HelloCmd helloCmd = Hello.HelloCmd.newBuilder().setHelloId(helloId).build();\n    client.send(helloCmd, "target_topic", "");\n}\n'})}),"\n",(0,l.jsx)(n.h3,{id:"\u914d\u7f6e\u6587\u4ef6-1",children:"\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:"quantex:\n  phoenix:\n    client:\n      name: ${spring.application.name}-client\t# \u670d\u52a1\u540d\u79f0\n      mq:\n        type: kafka\t                            # mq\u7c7b\u578b\n        address: 127.0.0.1:9092                 # mq\u5730\u5740\uff1aembedded\u8868\u793a\u4f7f\u7528\u5185\u5b58kafka\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u76f8\u5173\u94fe\u63a5",children:"\u76f8\u5173\u94fe\u63a5"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"/docs/2.2.4/phoenix-2.x/phoenix-core/phoenix-core-entity-aggregate-2x",children:"\u670d\u52a1\u63d0\u4f9b\u8005\u8be6\u60c5"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"/docs/2.2.4/phoenix-2.x/phoenix-core/phoenix-core-client-2x",children:"\u670d\u52a1\u8c03\u7528\u8005\u8be6\u60c5"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"/docs/2.2.4/phoenix-2.x/phoenix-core/phoenix-core-config-2x",children:"\u914d\u7f6e\u6587\u4ef6\u8be6\u60c5"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>s,a:()=>o});var l=i(67294);const r={},t=l.createContext(r);function o(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);