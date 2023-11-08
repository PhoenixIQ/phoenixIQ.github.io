"use strict";(self.webpackChunkphoenix_website_next=self.webpackChunkphoenix_website_next||[]).push([[82927],{96825:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(85893),o=n(11151);const i={id:"bookings-microservice",title:"3. \u9152\u5e97\u9884\u8ba2\u5fae\u670d\u52a1"},a="\u9152\u5e97\u9884\u8ba2\u5fae\u670d\u52a1",l={id:"phoenix-2.x/phoenix/quick-start-example/bookings-microservice",title:"3. \u9152\u5e97\u9884\u8ba2\u5fae\u670d\u52a1",description:"\u4e0b\u9762\u6211\u4eec\u5c06\u6839\u636e\u67b6\u6784\u56fe\u6784\u5efa\u4e00\u4e2a\u521d\u6b65\u7684\u9152\u5e97\u623f\u95f4\u7684\u9884\u8ba2\u670d\u52a1\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u8be5\u6848\u4f8b\u5bf9Phoenix\u6709\u66f4\u6df1\u7684\u4e86\u89e3\u3002",source:"@site/versioned_docs/version-2.4.3/phoenix-2.x/01-phoenix/05-quick-start-example/03-bookings-microservice.md",sourceDirName:"phoenix-2.x/01-phoenix/05-quick-start-example",slug:"/phoenix-2.x/phoenix/quick-start-example/bookings-microservice",permalink:"/docs/2.4.3/phoenix-2.x/phoenix/quick-start-example/bookings-microservice",draft:!1,unlisted:!1,editUrl:"https://github.com/PhoenixIQ/versioned_docs/version-2.4.3/phoenix-2.x/01-phoenix/05-quick-start-example/03-bookings-microservice.md",tags:[],version:"2.4.3",sidebarPosition:3,frontMatter:{id:"bookings-microservice",title:"3. \u9152\u5e97\u9884\u8ba2\u5fae\u670d\u52a1"},sidebar:"docs",previous:{title:"2. \u5f00\u53d1\u73af\u5883\u642d\u5efa",permalink:"/docs/2.4.3/phoenix-2.x/phoenix/quick-start-example/setup-environment"},next:{title:"4. \u623f\u95f4\u6d41\u884c\u5ea6\u5206\u6790",permalink:"/docs/2.4.3/phoenix-2.x/phoenix/quick-start-example/popularity-projection"}},s={},c=[{value:"Source downloads",id:"source-downloads",level:2},{value:"maven\u4f9d\u8d56",id:"maven\u4f9d\u8d56",level:2},{value:"\u6d88\u606f\u5b9a\u4e49",id:"\u6d88\u606f\u5b9a\u4e49",level:2},{value:"\u805a\u5408\u6839\u5b9a\u4e49",id:"\u805a\u5408\u6839\u5b9a\u4e49",level:2},{value:"\u670d\u52a1\u8c03\u7528\u63a5\u53e3\u5b9a\u4e49",id:"\u670d\u52a1\u8c03\u7528\u63a5\u53e3\u5b9a\u4e49",level:2},{value:"\u670d\u52a1\u542f\u52a8",id:"\u670d\u52a1\u542f\u52a8",level:2},{value:"\u5355\u5143\u6d4b\u8bd5",id:"\u5355\u5143\u6d4b\u8bd5",level:2},{value:"\u5feb\u901f\u542f\u52a8",id:"\u5feb\u901f\u542f\u52a8",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"\u9152\u5e97\u9884\u8ba2\u5fae\u670d\u52a1",children:"\u9152\u5e97\u9884\u8ba2\u5fae\u670d\u52a1"}),"\n",(0,r.jsx)(t.p,{children:"\u4e0b\u9762\u6211\u4eec\u5c06\u6839\u636e\u67b6\u6784\u56fe\u6784\u5efa\u4e00\u4e2a\u521d\u6b65\u7684\u9152\u5e97\u623f\u95f4\u7684\u9884\u8ba2\u670d\u52a1\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u8be5\u6848\u4f8b\u5bf9Phoenix\u6709\u66f4\u6df1\u7684\u4e86\u89e3\u3002"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"image",src:n(4349).Z+"",width:"902",height:"602"})}),"\n",(0,r.jsx)(t.p,{children:"\u9996\u5148\uff0c\u6211\u4eec\u5c06\u521b\u5efaHotelController\uff0c\u4e00\u4e2a\u51c6\u5907\u8c03\u7528\u9884\u8ba2\u670d\u52a1\u7684\u63a5\u53e3\u3002\u8be5\u5b9e\u73b0\u53ea\u4f1a\u6682\u65f6\u8bb0\u5f55\u8c03\u7528\u3002\u7a0d\u540e\uff0c\u6211\u4eec\u5c06\u901a\u8fc7\u66f4\u591a\u64cd\u4f5c\u548c\u5b9e\u9645\u5b9e\u73b0\u6765\u6269\u5c55\u670d\u52a1\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u5728\u6b64\u9875\u9762\u4e0a\uff0c\u60a8\u5c06\u5b66\u4e60\u5982\u4f55\uff1a"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/2.4.3/phoenix-2.x/phoenix/quick-start-example/bookings-microservice#%E6%B6%88%E6%81%AF%E5%AE%9A%E4%B9%89",children:"\u5b9a\u4e49\u6d88\u606f"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/2.4.3/phoenix-2.x/phoenix/quick-start-example/bookings-microservice#%E8%81%9A%E5%90%88%E6%A0%B9%E5%AE%9A%E4%B9%89",children:"\u5b9a\u4e49\u805a\u5408\u6839"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/2.4.3/phoenix-2.x/phoenix/quick-start-example/bookings-microservice#%E6%9C%8D%E5%8A%A1%E8%B0%83%E7%94%A8%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89",children:"\u5b9e\u73b0\u670d\u52a1\u8c03\u7528\u63a5\u53e3"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/2.4.3/phoenix-2.x/phoenix/quick-start-example/bookings-microservice#%E6%9C%8D%E5%8A%A1%E5%90%AF%E5%8A%A8",children:"\u5728\u672c\u5730\u521d\u59cb\u5316\u5e76\u8fd0\u884c HTTP \u670d\u52a1\u5668\u548c\u670d\u52a1"})}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"source-downloads",children:"Source downloads"}),"\n",(0,r.jsxs)(t.p,{children:["\u6211\u4eec\u5c06\u793a\u4f8b\u6e90\u7801\u5206\u6210\u4e86\u56db\u4e2a\u5206\u652f\uff0c\u60a8\u80fd\u591f\u524d\u5f80\u4ed3\u5e93\u6784\u5efa\u5e76\u8fd0\u884c\u5f53\u524d\u529f\u80fd\uff1a",(0,r.jsx)(t.a,{href:"https://github.com/PhoenixIQ/hotel-booking/tree/part-1",children:"\u9884\u8ba2\u670d\u52a1"})]}),"\n",(0,r.jsx)(t.h2,{id:"maven\u4f9d\u8d56",children:"maven\u4f9d\u8d56"}),"\n",(0,r.jsx)(t.p,{children:"\u672c\u6848\u4f8b\u5b9e\u73b0\u9152\u5e97\u9884\u8ba2\u529f\u80fd\uff0c\u57fa\u4e8e\u6a21\u677f\u5de5\u7a0b\u4e2d\u7684\u4f9d\u8d56\uff0c\u8fd8\u9700\u8981\u6dfb\u52a0\u4ee5\u4e0b\u4f9d\u8d56\uff1a"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-xml",children:"<dependencies>\n    \x3c!--phoenix--\x3e\n    <dependency>\n        <groupId>com.iquantex</groupId>\n        <artifactId>phoenix-client-starter</artifactId>\n        <version>${phoenix.version}</version>\n    </dependency>\n    <dependency>\n        <groupId>com.iquantex</groupId>\n        <artifactId>phoenix-server-starter</artifactId>\n        <version>${phoenix.version}</version>\n    </dependency>\n    \x3c!-- kafka --\x3e\n    <dependency>\n        <groupId>org.springframework.kafka</groupId>\n        <artifactId>spring-kafka</artifactId>\n    </dependency>\n    <dependency>\n        <groupId>org.apache.kafka</groupId>\n        <artifactId>kafka_2.12</artifactId>\n        <version>1.0.0</version>\n        <exclusions>\n            <exclusion>\n                <artifactId>slf4j-log4j12</artifactId>\n                <groupId>org.slf4j</groupId>\n            </exclusion>\n        </exclusions>\n    </dependency>\n    <dependency>\n        <groupId>org.apache.kafka</groupId>\n        <artifactId>kafka_2.12</artifactId>\n        <version>1.0.0</version>\n        <classifier>test</classifier>\n        <scope>compile</scope>\n        <exclusions>\n            <exclusion>\n                <artifactId>slf4j-log4j12</artifactId>\n                <groupId>org.slf4j</groupId>\n            </exclusion>\n        </exclusions>\n    </dependency>\n    \x3c!--\u5185\u5b58\u7248kafka: \u8fd0\u884c\u65f6\u9700\u8981--\x3e\n    <dependency>\n        <groupId>org.springframework.kafka</groupId>\n        <artifactId>spring-kafka-test</artifactId>\n        <exclusions>\n            <exclusion>\n                <artifactId>kafka_2.11</artifactId>\n                <groupId>org.apache.kafka</groupId>\n            </exclusion>\n        </exclusions>\n    </dependency>\n    \x3c!--tools--\x3e\n    <dependency>\n        <groupId>org.projectlombok</groupId>\n        <artifactId>lombok</artifactId>\n        <version>${lombook.version}</version>\n    </dependency>\n    <dependency>\n        <groupId>com.google.protobuf</groupId>\n        <artifactId>protobuf-java</artifactId>\n        <version>${proto.version}</version>\n    </dependency>\n</dependencies>\n"})}),"\n",(0,r.jsx)(t.h2,{id:"\u6d88\u606f\u5b9a\u4e49",children:"\u6d88\u606f\u5b9a\u4e49"}),"\n",(0,r.jsxs)(t.p,{children:["\u5173\u4e8eCommand\u548cEvent\u89e3\u91ca\u53ef\u4ee5",(0,r.jsx)(t.a,{href:"/docs/2.4.3/phoenix-2.x/phoenix-core/phoenix-core-event-souring",children:"\u53c2\u8003\u6587\u6863"}),"\u3002"]}),"\n",(0,r.jsx)(t.p,{children:"\u805a\u5408\u6839\u63a5\u6536Command\u4ea7\u751fEvent\u3002Command\u548cEvent\u9700\u8981\u5b9e\u73b0Serializable\u63a5\u53e3\u3002"}),"\n",(0,r.jsx)(t.p,{children:"Phoenix \u652f\u6301 protostuff\u3001javaBean\u3001protobuf \u7b49\u5e8f\u5217\u5316\u534f\u8bae\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u914d\u7f6e\u8fdb\u884c\u6307\u5b9a\u3002"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"quantex.phoenix.server.default-serializer: proto_stuff\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u672c\u6587\u4f7f\u7528 proto_stuff \u5e8f\u5217\u5316\u534f\u8bae\u8fdb\u884c\u793a\u8303\u3002"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Command\u5b9a\u4e49\u200b"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"@Getter\n@AllArgsConstructor\npublic class HotelCreateCmd implements Serializable {\n\n\tprivate static final long serialVersionUID = 719772692097810576L;\n    // \u9152\u5e97ID\n\tprivate String hotelCode;\n    // \u623f\u95f4\u7c7b\u578b\n\tprivate String restType;\n    // \u9884\u7ea6\u53f7\n\tprivate String subNumber;\n\n}\n\n@Getter\n@AllArgsConstructor\npublic class HotelQueryCmd implements Serializable {\n\n\tprivate static final long serialVersionUID = 5077299466591822621L;\n\n\tprivate String hotelCode;\n\n}\n\n@Getter\n@AllArgsConstructor\npublic class HotelCancelCmd implements Serializable {\n\n\tprivate static final long serialVersionUID = -2900383695028981211L;\n\n\tprivate String hotelCode;\n\n\tprivate String subNumber;\n\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Event\u5b9a\u4e49\u200b"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"@Getter\n@AllArgsConstructor\npublic class HotelCreateEvent implements Serializable {\n\n\tprivate static final long serialVersionUID = -2347396853431433998L;\n\n\tprivate String hotelCode;\n\n\tprivate String restType;\n\n\tprivate String subNumber;\n\n}\n\n@Getter\n@AllArgsConstructor\npublic class HotelQueryEvent implements Serializable {\n\n\tprivate static final long serialVersionUID = -4428963449385271034L;\n\n\tprivate String hotelCode;\n\n\tprivate Map<String, Integer> restRoom;\n\n}\n\n@Getter\n@AllArgsConstructor\npublic class HotelCancelEvent implements Serializable {\n\n\tprivate static final long serialVersionUID = -1282834235746256697L;\n\n\tprivate String hotelCode;\n\n\tprivate String subNumber;\n\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"\u805a\u5408\u6839\u5b9a\u4e49",children:"\u805a\u5408\u6839\u5b9a\u4e49"}),"\n",(0,r.jsxs)(t.p,{children:["\u805a\u5408\u6839\u662f\u6211\u4eec\u4e8b\u4ef6\u5904\u7406\u548c\u4e8b\u4ef6\u5b58\u50a8\u7684\u91cd\u8981\u67a2\u7ebd\uff0c\u8be6\u60c5\u53c2\u89c1\uff1a",(0,r.jsx)(t.a,{href:"/docs/2.4.3/phoenix-2.x/phoenix-core/phoenix-core-entity-aggregate",children:"\u5b9e\u4f53\u805a\u5408\u6839"})]}),"\n",(0,r.jsx)(t.p,{children:"\u805a\u5408\u6839\u7c7b\u5b9a\u4e49\u89c4\u5219\uff1a"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u805a\u5408\u6839\u7c7b\u9700\u8981\u4f7f\u7528 @EntityAggregateAnnotation \u6ce8\u89e3\u8fdb\u884c\u6807\u8bb0,aggregateRootType \u503c\u9700\u8981\u5168\u5c40\u552f\u4e00"}),"\n",(0,r.jsx)(t.li,{children:"\u805a\u5408\u6839\u7c7b\u9700\u8981\u5b9e\u73b0Serializable\u63a5\u53e3, \u5e76\u63d0\u4f9b serialVersionUID"}),"\n",(0,r.jsx)(t.li,{children:"act \u65b9\u6cd5\u63a5\u6536Command\uff0cact \u65b9\u6cd5\u53ea\u80fd\u5305\u542b\u4e00\u4e2a\u5165\u53c2\u4e14\u65b9\u6cd5\u8fd4\u56de\u503c\u4e3aActReturn\u3002"}),"\n",(0,r.jsx)(t.li,{children:"act\u65b9\u6cd5\u9700\u8981\u589e\u52a0 @CommandHandler \u6216 @QueryHandler \u6ce8\u89e3,\u5176\u4e2d aggregateRootId \u4e3a\u805a\u5408\u6839id"}),"\n",(0,r.jsx)(t.li,{children:"on \u65b9\u6cd5\u63a5\u6536Event\uff0con \u65b9\u6cd5\u53ea\u80fd\u5305\u542b\u4e00\u4e2a\u5165\u53c2\u4e14\u65b9\u6cd5\u8fd4\u56de\u503c\u4e3avoid"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"\u8d26\u6237\u805a\u5408\u6839"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'@EntityAggregateAnnotation(aggregateRootType = "HotelAggregate")\npublic class HotelAggregate implements Serializable {\n\n\tprivate static final long serialVersionUID = -4051924255577694209L;\n\n\t/**\n\t * \u5df2\u88ab\u9884\u8ba2\u7684\u623f\u95f4\u7684\u9884\u5b9a\u53f7\n\t */\n\tprivate List<String> bookedRoom = new ArrayList<>();\n\n\t/**\n\t * \u5269\u4f59\u623f\u95f4<type,number> \u623f\u95f4\u7c7b\u578b: 1. \u5927\u5e8a\u623f 2. \u6807\u51c6\u95f4 3. \u60c5\u4fa3\u5957\u623f 4. \u603b\u7edf\u5957\u623f\n\t */\n\t@Getter\n\tprivate Map<String, Integer> restRoom = new HashMap<>();\n\n\t/**\n\t * \u5047\u5b9a\u5404\u7c7b\u623f\u95f4\u5269\u4f5910\u95f4\n\t */\n\tpublic HotelAggregate() {\n\t\trestRoom.put("1", 10);\n\t\trestRoom.put("2", 10);\n\t\trestRoom.put("3", 10);\n\t\trestRoom.put("4", 10);\n\t}\n\n\t/**\n\t * \u67e5\u8be2\u5269\u4f59\u623f\u95f4\u4fe1\u606f\n\t * @param cmd\n\t * @return\n\t */\n\t@QueryHandler(aggregateRootId = "hotelCode")\n\tpublic ActReturn act(HotelQueryCmd cmd) {\n\t\treturn ActReturn.builder().retCode(RetCode.SUCCESS).event(new HotelQueryEvent(cmd.getHotelCode(), restRoom))\n\t\t\t\t.build();\n\t}\n\n\t/**\n\t * \u9884\u7ea6\u6d41\u7a0b\n\t * @param cmd\n\t * @return\n\t */\n\t@CommandHandler(aggregateRootId = "hotelCode")\n\tpublic ActReturn act(HotelCreateCmd cmd) {\n\t\tif (restRoom.get(cmd.getRestType()) > 0) {\n\t\t\treturn ActReturn.builder().retCode(RetCode.SUCCESS)\n\t\t\t\t\t.event(new HotelCreateEvent(cmd.getHotelCode(), cmd.getRestType(), cmd.getSubNumber())).build();\n\t\t}\n\t\treturn ActReturn.builder().retCode(RetCode.FAIL).event(new HotelCreateFailEvent("There is no room left"))\n\t\t\t\t.build();\n\t}\n\n\tpublic void on(HotelCreateEvent event) {\n\t\tthis.bookedRoom.add(event.getSubNumber());\n\t\tthis.restRoom.put(event.getRestType(), restRoom.get(event.getRestType()) - 1);\n\t}\n\n\tpublic void on(HotelCreateFailEvent event) {\n\t}\n\n\t/**\n\t * \u53d6\u6d88\u9884\u7ea6\n\t * @param cmd\n\t * @return\n\t */\n\t@CommandHandler(aggregateRootId = "hotelCode")\n\tpublic ActReturn act(HotelCancelCmd cmd) {\n\t\tif (!bookedRoom.contains(cmd.getSubNumber())) {\n\t\t\treturn ActReturn.builder().retCode(RetCode.FAIL)\n\t\t\t\t\t.event(new HotelCancelFailEvent("Please check your order number")).build();\n\t\t}\n\t\treturn ActReturn.builder().retCode(RetCode.SUCCESS)\n\t\t\t\t.event(new HotelCancelEvent(cmd.getHotelCode(), cmd.getSubNumber())).build();\n\t}\n\n\tpublic void on(HotelCancelEvent event) {\n\t\tbookedRoom.removeIf(v -> v.contains(event.getSubNumber()));\n\t\tString s = event.getSubNumber().split("@")[0];\n\t\tif (restRoom.containsKey(s)) {\n\t\t\trestRoom.put(s, restRoom.get(s) + 1);\n\t\t}\n\t}\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"\u670d\u52a1\u8c03\u7528\u63a5\u53e3\u5b9a\u4e49",children:"\u670d\u52a1\u8c03\u7528\u63a5\u53e3\u5b9a\u4e49"}),"\n",(0,r.jsx)(t.p,{children:"\u589e\u52a0phoenix-client-starter\u4f9d\u8d56\u542f\u52a8\u670d\u52a1\u540ePhoenix\u4f1a\u81ea\u52a8\u6ce8\u5165PhoenixClient Bean\uff0c\u53ef\u4ee5\u901a\u8fc7\u8c03\u7528 PhoenixClient \u7684 send() \u53d1\u9001Command\u4fe1\u606f\u3002"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'@RestController\n@RequestMapping("hotel")\npublic class HotelController {\n\n\t@Autowired\n\tprivate PhoenixClient client;\n\n\t@PutMapping("/bookings/{hotelCode}/{roomType}")\n\tpublic String bookings(@PathVariable String hotelCode, @PathVariable String roomType) {\n\t\t// \u751f\u6210\u9884\u7ea6\u53f7: roomType@UUID\n\t\tString subNumber = roomType + "@" + UUID.randomUUID().toString();\n\t\tHotelCreateCmd cmd = new HotelCreateCmd(hotelCode, roomType, subNumber);\n\t\tFuture<RpcResult> future = client.send(cmd, "hotel-bookings", UUID.randomUUID().toString());\n\t\ttry {\n\t\t\tObject data = future.get(10, TimeUnit.SECONDS).getData();\n\t\t\tif (data instanceof HotelCreateEvent) {\n\t\t\t\treturn ((HotelCreateEvent) data).getSubNumber();\n\t\t\t}\n\t\t\treturn ((HotelCreateFailEvent) data).getMsg();\n\t\t}\n\t\tcatch (InterruptedException | ExecutionException | TimeoutException e) {\n\t\t\treturn "rpc error: " + e.getMessage();\n\t\t}\n\t}\n\n\t@GetMapping("/query/{hotelCode}")\n\tpublic String queryRestRoom(@PathVariable String hotelCode) {\n\t\tHotelQueryCmd hotelQueryCmd = new HotelQueryCmd(hotelCode);\n\t\tFuture<RpcResult> future = client.send(hotelQueryCmd, "hotel-bookings", UUID.randomUUID().toString());\n\t\ttry {\n\t\t\tHotelQueryEvent event = (HotelQueryEvent) future.get(10, TimeUnit.SECONDS).getData();\n\t\t\treturn new ObjectMapper().writeValueAsString(ConvertUtil.Map2Map(event.getRestRoom()));\n\t\t}\n\t\tcatch (InterruptedException | ExecutionException | TimeoutException | JsonProcessingException e) {\n\t\t\treturn "rpc error: " + e.getMessage();\n\t\t}\n\t}\n\n\t@PutMapping("/cancel/{hotelCode}/{subNumber}")\n\tpublic String cancel(@PathVariable String hotelCode, @PathVariable String subNumber) {\n\t\tHotelCancelCmd hotelCancelCmd = new HotelCancelCmd(hotelCode, subNumber);\n\t\tFuture<RpcResult> future = client.send(hotelCancelCmd, "hotel-bookings", UUID.randomUUID().toString());\n\t\ttry {\n\t\t\tObject data = future.get(10, TimeUnit.SECONDS).getData();\n\t\t\tif (data instanceof HotelCancelEvent) {\n\t\t\t\treturn "cancel ok";\n\t\t\t}\n\t\t\treturn ((HotelCancelFailEvent) data).getMsg();\n\t\t}\n\t\tcatch (InterruptedException | ExecutionException | TimeoutException e) {\n\t\t\treturn "rpc error: " + e.getMessage();\n\t\t}\n\t}\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"\u670d\u52a1\u542f\u52a8",children:"\u670d\u52a1\u542f\u52a8"}),"\n",(0,r.jsx)(t.p,{children:"\u4f7f\u7528 SpringBoot \u7684\u670d\u52a1\u542f\u52a8\u673a\u5236\uff0c\u5728\u672c\u5730\u521d\u59cb\u5316\u5e76\u8fd0\u884c HTTP \u670d\u52a1\u5668\u548c\u670d\u52a1\u3002"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"@Slf4j\n@SpringBootApplication\npublic class HotelBookingsApplication {\n    public static void main(String[] args) {\n        try {\n            SpringApplication.run(HotelBookingsApplication.class, args);\n        }\n        catch (Exception e) {\n            log.error(e.getMessage(), e);\n            System.exit(1);\n        }\n    }\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"\u5355\u5143\u6d4b\u8bd5",children:"\u5355\u5143\u6d4b\u8bd5"}),"\n",(0,r.jsx)(t.p,{children:"\u4f7f\u7528 Phoenix \u63d0\u4f9b\u7684 AggregateFixture \u63a5\u53e3\u6a21\u62df\u805a\u5408\u6839\u5b9e\u4f53\uff0c\u8c03\u7528\u805a\u5408\u6839\u7684\u5904\u7406\u547d\u4ee4\u5904\u7406\u80fd\u529b\uff0c\u5206\u522b\u6821\u9a8c HotelAggregate \u7684\u9884\u7ea6\u3001\u67e5\u8be2\u548c\u53d6\u6d88\u529f\u80fd\u3002"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'public class HotelAggregateTest {\n\n\tprivate EntityAggregateFixture getFixture() {\n\t\tEntityAggregateFixture fixture = new EntityAggregateFixture(HotelAggregate.class.getPackage().getName());\n\t\treturn fixture;\n\t}\n\n\t/**\n\t * \u6d4b\u8bd5\u9884\u7ea6\u6d41\u7a0b\n\t */\n\t@Test\n\tpublic void test_bookings() {\n\t\tEntityAggregateFixture fixture = getFixture();\n\t\tHotelCreateCmd hotelCreateCmd = new HotelCreateCmd("iHome", RoomType.DOUBLE,\n\t\t\t\t"1@" + UUID.randomUUID().toString());\n\t\tfixture.when(hotelCreateCmd).printIdentify().expectMessage(HotelCreateEvent.class);\n\t\tHotelAggregate hotelAggregate = fixture.getAggregateRoot(HotelAggregate.class, "iHome");\n\t\tAssert.assertNotNull(hotelAggregate.getRestRoom());\n\t}\n\n\t/**\n\t * \u6d4b\u8bd5\u67e5\u8be2\u5269\u4f59\u623f\u95f4\n\t */\n\t@Test\n\tpublic void test_queryRestRoom() {\n\t\tEntityAggregateFixture fixture = getFixture();\n\t\tHotelAggregate hotelAggregate = fixture.getAggregateRoot(HotelAggregate.class, "iHome");\n\t\tHotelQueryCmd hotelQueryCmd = new HotelQueryCmd("iHome");\n\t\tActReturn act = hotelAggregate.act(hotelQueryCmd);\n\t\tAssert.assertEquals(act.getEvent().getClass(), HotelQueryEvent.class);\n\t}\n\n\t/**\n\t * \u6d4b\u8bd5\u53d6\u6d88\u9884\u8ba2\uff0c\u9884\u7ea6\u53f7\u4e0d\u5b58\u5728\n\t */\n\t@Test\n\tpublic void test_cancel() {\n\t\tEntityAggregateFixture fixture = getFixture();\n\t\tHotelAggregate hotelAggregate = fixture.getAggregateRoot(HotelAggregate.class, "iHome");\n\t\tHotelCancelCmd hotelCancelCmd = new HotelCancelCmd("iHome", "1@" + UUID.randomUUID().toString());\n\t\tActReturn act = hotelAggregate.act(hotelCancelCmd);\n\t\tAssert.assertEquals(act.getEvent().getClass(), HotelCancelFailEvent.class);\n\t}\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"\u5feb\u901f\u542f\u52a8",children:"\u5feb\u901f\u542f\u52a8"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"\u8fd0\u884cHotelBookingsApplication"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"\u8c03\u7528\u9884\u8ba2\u9152\u5e97\u623f\u95f4\u63a5\u53e3"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:"PUT http://127.0.0.1:8080/hotel/bookings/{hotelCode}/{roomType}\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u8fd4\u56de\u9884\u8ba2\u53f7\uff1a"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:"2@c0a2a5b4-0d0e-4347-bb33-62ee5dd5f603\n"})}),"\n",(0,r.jsxs)(t.ol,{start:"3",children:["\n",(0,r.jsx)(t.li,{children:"\u67e5\u8be2\u9152\u5e97\u5269\u4f59\u623f\u95f4\u60c5\u51b5"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:"GET http://127.0.0.1:8080/hotel/query/{hotelCode}\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u8fd4\u56de\uff1a"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:'{"\u6807\u51c6\u95f4":10,"\u60c5\u4fa3\u5957\u623f":10,"\u603b\u7edf\u5957\u623f":10,"\u5927\u5e8a\u623f":10}\n'})}),"\n",(0,r.jsxs)(t.ol,{start:"4",children:["\n",(0,r.jsx)(t.li,{children:"\u8c03\u7528\u53d6\u6d88\u9884\u8ba2\u623f\u95f4\u63a5\u53e3"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:"PUT http://127.0.0.1:8080/hotel/cancel/{hotelCode}/{subNumber}\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u8fd4\u56de\uff1a"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:"cancel ok\n"})})]})}function g(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},4349:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/hotel-part-1-7121ef67bc3358bf7a804ce4c72174ba.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>a});var r=n(67294);const o={},i=r.createContext(o);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);