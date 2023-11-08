"use strict";(self.webpackChunkphoenix_website_next=self.webpackChunkphoenix_website_next||[]).push([[99225],{18474:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=i(85893),t=i(11151);const r={id:"setup-environment",title:"2. \u5f00\u53d1\u73af\u5883\u642d\u5efa",description:"\u642d\u5efa\u5feb\u901f\u5165\u95e8\u6848\u4f8b\u7684\u5f00\u53d1\u73af\u5883"},a="\u5f00\u53d1\u73af\u5883\u642d\u5efa",s={id:"phoenix/quick-start-example/setup-environment",title:"2. \u5f00\u53d1\u73af\u5883\u642d\u5efa",description:"\u642d\u5efa\u5feb\u901f\u5165\u95e8\u6848\u4f8b\u7684\u5f00\u53d1\u73af\u5883",source:"@site/versioned_docs/version-2.6.0/01-phoenix/05-quick-start-example/02-setup-environment.md",sourceDirName:"01-phoenix/05-quick-start-example",slug:"/phoenix/quick-start-example/setup-environment",permalink:"/docs/2.6.0/phoenix/quick-start-example/setup-environment",draft:!1,unlisted:!1,editUrl:"https://github.com/PhoenixIQ/versioned_docs/version-2.6.0/01-phoenix/05-quick-start-example/02-setup-environment.md",tags:[],version:"2.6.0",sidebarPosition:2,frontMatter:{id:"setup-environment",title:"2. \u5f00\u53d1\u73af\u5883\u642d\u5efa",description:"\u642d\u5efa\u5feb\u901f\u5165\u95e8\u6848\u4f8b\u7684\u5f00\u53d1\u73af\u5883"},sidebar:"docs",previous:{title:"1. \u9152\u5e97\u9884\u8ba2\u6848\u4f8b\u67b6\u6784",permalink:"/docs/2.6.0/phoenix/quick-start-example/bookings-architecture"},next:{title:"3. \u9152\u5e97\u9884\u8ba2\u5fae\u670d\u52a1",permalink:"/docs/2.6.0/phoenix/quick-start-example/bookings-microservice"}},l={},d=[{value:"Source downloads",id:"source-downloads",level:2},{value:"IntelliJ IDEA",id:"intellij-idea",level:2},{value:"Build tool",id:"build-tool",level:2},{value:"Download template",id:"download-template",level:2},{value:"Project depend",id:"project-depend",level:2},{value:"Application Configuration",id:"application-configuration",level:2}];function c(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"\u5f00\u53d1\u73af\u5883\u642d\u5efa",children:"\u5f00\u53d1\u73af\u5883\u642d\u5efa"}),"\n",(0,o.jsx)(e.p,{children:"\u8981\u9075\u5faa\u6559\u7a0b\u6b65\u9aa4\uff0c\u60a8\u9700\u8981\u6709\uff1a"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"\u6700\u559c\u6b22\u7684\u6587\u672c\u7f16\u8f91\u5668\u6216 IDEA"}),"\n",(0,o.jsx)(e.li,{children:"JDK 1.8"}),"\n",(0,o.jsx)(e.li,{children:"\u6784\u5efa\u5de5\u5177Maven(3.2+)"}),"\n",(0,o.jsx)(e.li,{children:"\u521b\u5efa\u4e00\u4e2a\u7a7a\u7684Spring Boot\u9879\u76ee(2.0\u7248\u672c)"}),"\n",(0,o.jsxs)(e.li,{children:["\u6b63\u5e38\u8fd0\u884c\u7684Kafka\uff0c\u5982\u679c\u6ca1\u6709\u5408\u9002\u7684Kafka\uff0c\u53ef\u4ee5\u4f7f\u7528\u5185\u5b58\u7248Kafka\uff0c\u53c2\u89c1\uff1a",(0,o.jsx)(e.a,{href:"https://github.com/PhoenixIQ/phoenix-samples/blob/master/shopping/application/src/main/java/com/iquantex/samples/shopping/config/KafkaEmbeddedConfiguration.java",children:"KafkaEmbeddedConfig"})]}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"\u672c\u6559\u7a0b\u4f7f\u7528 h2 \u6570\u636e\u5e93\u548c\u5185\u5b58\u7248 Kafka\u3002\u60a8\u53ef\u4ee5\u5728\u5f00\u53d1\u671f\u95f4\u8fd0\u884c\u672c\u5730\u5b89\u88c5\u7684\u6570\u636e\u5e93\u548c kafka\uff0c\u4f46\u6211\u4eec\u5efa\u8bae\u4f7f\u7528 Docker \u6765\u8fd0\u884c\u8fd9\u4e24\u4e2a\u670d\u52a1\u3002"}),"\n",(0,o.jsx)(e.p,{children:"\u4ee5\u4e0b\u90e8\u5206\u63d0\u4f9b\u4e86\u4e0b\u8f7d\u548c\u5b89\u88c5\u7684\u94fe\u63a5\uff1a"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"#source-downloads",children:"Source downloads"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"#intellij-idea",children:"IntelliJ IDEA"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"#build-tool",children:"Build tool"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"#download-template",children:"Download template"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"#project-depend",children:"Project depend"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"#application-configuration",children:"Application Configuration"})}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"source-downloads",children:"Source downloads"}),"\n",(0,o.jsxs)(e.p,{children:["\u6211\u4eec\u5c06\u793a\u4f8b\u6e90\u7801\u5206\u6210\u4e86\u56db\u4e2a\u5206\u652f\uff0c\u60a8\u80fd\u591f\u524d\u5f80\u4ed3\u5e93\u6784\u5efa\u5e76\u8fd0\u884c\u5f53\u524d\u529f\u80fd\uff1a",(0,o.jsx)(e.a,{href:"https://github.com/PhoenixIQ/hotel-booking/tree/part-0",children:"\u5f00\u53d1\u73af\u5883\u642d\u5efa"})]}),"\n",(0,o.jsx)(e.h2,{id:"intellij-idea",children:"IntelliJ IDEA"}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsxs)(e.p,{children:["Download and install ",(0,o.jsx)(e.a,{href:"https://www.jetbrains.com/idea/download/",children:"IntelliJ"}),"."]}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"build-tool",children:"Build tool"}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsxs)(e.p,{children:["\u6211\u4eec\u4f7f\u7528maven\u4f5c\u4e3a\u6848\u4f8b\u6784\u5efa\u5de5\u5177\u3002\u4e0b\u8f7d\u53c2\u89c1\uff1a",(0,o.jsx)(e.a,{href:"https://maven.apache.org/install.html",children:"Install Maven"})]}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"download-template",children:"Download template"}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsxs)(e.p,{children:["\u6211\u4eec\u4e3a\u60a8\u63d0\u4f9b\u4e86\u5408\u9002\u7684\u7a7a\u9879\u76ee\u6a21\u677f\uff0c\u70b9\u51fb",(0,o.jsx)(e.a,{href:"https://github.com/PhoenixIQ/hotel-booking/raw/main/hotel-booking-template.zip",children:"\u4e0b\u8f7d\u9879\u76ee\u6a21\u677f"}),"\u3002"]}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"project-depend",children:"Project depend"}),"\n",(0,o.jsxs)(e.p,{children:["\u672c\u6559\u7a0b\u4e2d\u6211\u4eec\u4f1a\u4f7f\u7528 Phoenix \u63d0\u4f9b\u7684\u4e09\u4e2a\u4f9d\u8d56\u5305",(0,o.jsx)(e.code,{children:"phoenix-server-starter"}),"\u3001",(0,o.jsx)(e.code,{children:"phoenix-client-starter"}),"\u548c",(0,o.jsx)(e.code,{children:"phoenix-event-publish-starter"}),"\uff0c\u5206\u522b\u80fd\u591f\u63d0\u4f9b\u670d\u52a1\u7aef\u3001\u5ba2\u6237\u7aef\u548c\u53d1\u5e03\u8ba2\u9605\u7684\u529f\u80fd\u3002"]}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"maven\u4f9d\u8d56"})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0"\n         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n\n    <parent>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-dependencies</artifactId>\n        <version>2.0.1.RELEASE</version>\n    </parent>\n\n    <groupId>com.iquantex.phoenix</groupId>\n    <artifactId>hotel-booking</artifactId>\n    <packaging>pom</packaging>\n    <version>${revision}</version>\n\n    <modules>\n        <module>hotel-server</module>\n        <module>order-service</module>\n    </modules>\n\n    <properties>\n        <revision>1.0-SNAPSHOT</revision>\n        <phoenix.version>2.6.0</phoenix.version>\n        <lombook.version>1.16.20</lombook.version>\n        <proto.version>3.4.0</proto.version>\n    </properties>\n\n    <build>\n        <plugins>\n            \x3c!--\u7f16\u8bd1\u63d2\u4ef6--\x3e\n            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-compiler-plugin</artifactId>\n                <configuration>\n                    <source>1.8</source>\n                    <target>1.8</target>\n                </configuration>\n            </plugin>\n            <plugin>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-maven-plugin</artifactId>\n                <configuration>\n                    <skip>true</skip>\n                </configuration>\n            </plugin>\n            \x3c!--\u4ee3\u7801\u683c\u5f0f\u5316\u63d2\u4ef6--\x3e\n            <plugin>\n                <groupId>io.spring.javaformat</groupId>\n                <artifactId>spring-javaformat-maven-plugin</artifactId>\n                <version>0.0.15</version>\n                <executions>\n                    <execution>\n                        <phase>validate</phase>\n                        <inherited>true</inherited>\n                        <goals>\n                            <goal>validate</goal>\n                        </goals>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n'})}),"\n",(0,o.jsx)(e.h2,{id:"application-configuration",children:"Application Configuration"}),"\n",(0,o.jsx)(e.p,{children:"\u4f7f\u7528 SpringBoot \u548c Phoenix \u9700\u8981\u4e00\u4e9b\u5fc5\u8981\u7684\u914d\u7f6e\uff1a"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-yaml",children:"spring:\n  application:\n    name: hotel-bookings # \u81ea\u5b9a\u4e49\u670d\u52a1\u540d\u79f0\n\nquantex:\n  phoenix:\n    client:\n      name: ${spring.application.name}-client   # \u670d\u52a1\u540d\u79f0\n      mq:\n        type: kafka                             # mq\u7c7b\u578b\n        address: 127.0.0.1:9092                 # mq\u5730\u5740\n    server:\n      name: ${spring.application.name}    # \u670d\u52a1\u540d\u79f0\n      package-name: com.iquantex.samples.bookings.domain   # \u805a\u5408\u6839\u5305\u6240\u5728\u8def\u5f84\n      default-serializer: proto_stuff     #\u5e8f\u5217\u5316\u6a21\u5f0f\n      mq:\n        type: kafka                       # mq\u7c7b\u578b\n        address: 127.0.0.1:9092           # mq\u670d\u52a1\u5730\u5740\n        subscribe:\n          - topic: hotel-bookings\n      event-store:\n        driver-class-name: org.h2.Driver  # \u6570\u636e\u5e93\u9a71\u52a8\n        data-sources:\n          - url: jdbc:h2:file:./data/test;DB_CLOSE_DELAY=-1;DATABASE_TO_UPPER=FALSE;INIT=CREATE SCHEMA IF NOT EXISTS PUBLIC # \u6570\u636e\u5e93\u94fe\u63a5url\n            username: sa                  # \u6570\u636e\u5e93\u8d26\u6237\n            password:                     # \u6570\u636e\u5e93\u5bc6\u7801\n"})})]})}function p(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(c,{...n})}):c(n)}},11151:(n,e,i)=>{i.d(e,{Z:()=>s,a:()=>a});var o=i(67294);const t={},r=o.createContext(t);function a(n){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:a(n.components),o.createElement(r.Provider,{value:e},n.children)}}}]);