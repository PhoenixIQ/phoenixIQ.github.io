"use strict";(self.webpackChunkphoenixiq_github_io=self.webpackChunkphoenixiq_github_io||[]).push([[657],{39946:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var r=n(85893),o=n(11151);const i={id:"order-microservice",title:"5. \u8ba2\u5355\u670d\u52a1"},l="Order Service",d={id:"phoenix-2.x/phoenix/quick-start-example/order-microservice",title:"5. \u8ba2\u5355\u670d\u52a1",description:"\u8ba2\u5355\u670d\u52a1\u5c55\u793a\u4e86EventPublish\u7684\u4e8b\u4ef6\u53d1\u5e03\u4e0e\u8ba2\u9605\uff0c\u540c\u65f6\u4f53\u73b0\u51fa Phoenix \u5b9e\u73b0\u5fae\u670d\u52a1\u7684\u673a\u5236\u3002",source:"@site/versioned_docs/version-2.5.5/phoenix-2.x/01-phoenix/05-quick-start-example/05-order-microservice.md",sourceDirName:"phoenix-2.x/01-phoenix/05-quick-start-example",slug:"/phoenix-2.x/phoenix/quick-start-example/order-microservice",permalink:"/docs/2.5.5/phoenix-2.x/phoenix/quick-start-example/order-microservice",draft:!1,unlisted:!1,editUrl:"https://github.com/PhoenixIQ/versioned_docs/version-2.5.5/phoenix-2.x/01-phoenix/05-quick-start-example/05-order-microservice.md",tags:[],version:"2.5.5",sidebarPosition:5,frontMatter:{id:"order-microservice",title:"5. \u8ba2\u5355\u670d\u52a1"},sidebar:"docs",previous:{title:"4. \u623f\u95f4\u6d41\u884c\u5ea6\u5206\u6790",permalink:"/docs/2.5.5/phoenix-2.x/phoenix/quick-start-example/popularity-projection"},next:{title:"6. \u96c6\u7fa4\u793a\u4f8b",permalink:"/docs/2.5.5/phoenix-2.x/phoenix/quick-start-example/cluster"}},a={},s=[{value:"Source downloads",id:"source-downloads",level:2},{value:"maven\u4f9d\u8d56",id:"maven\u4f9d\u8d56",level:2},{value:"\u5e94\u7528\u914d\u7f6e",id:"\u5e94\u7528\u914d\u7f6e",level:2},{value:"\u67e5\u8be2\u63a5\u53e3",id:"\u67e5\u8be2\u63a5\u53e3",level:2},{value:"Kafka Subscribe",id:"kafka-subscribe",level:2},{value:"\u805a\u5408\u6839\u5904\u7406",id:"\u805a\u5408\u6839\u5904\u7406",level:2},{value:"\u5355\u5143\u6d4b\u8bd5",id:"\u5355\u5143\u6d4b\u8bd5",level:2},{value:"\u96c6\u6210\u6d4b\u8bd5",id:"\u96c6\u6210\u6d4b\u8bd5",level:2}];function c(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"order-service",children:"Order Service"}),"\n",(0,r.jsx)(t.p,{children:"\u8ba2\u5355\u670d\u52a1\u5c55\u793a\u4e86EventPublish\u7684\u4e8b\u4ef6\u53d1\u5e03\u4e0e\u8ba2\u9605\uff0c\u540c\u65f6\u4f53\u73b0\u51fa Phoenix \u5b9e\u73b0\u5fae\u670d\u52a1\u7684\u673a\u5236\u3002"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"image",src:n(79957).Z+"",width:"902",height:"602"})}),"\n",(0,r.jsx)(t.p,{children:"\u8ba2\u5355\u670d\u52a1\u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u5fae\u670d\u52a1\uff0c\u4e3a\u4e86\u6f14\u793a\u542f\u52a8\u65b9\u4fbf\uff0c\u6211\u4eec\u72ec\u7acb\u7684\u4e00\u4e2aorder-service\u7684maven\u6a21\u5757\uff0c\u4f46\u8fd8\u4f7f\u7528hotel-book\u6765\u52a0\u8f7d\u542f\u52a8\uff0c\u8fd9\u6837\u7528\u6237\u53ef\u4ee5\u672c\u5730\u542f\u52a8\u4e00\u4e2a\u8fdb\u7a0b\u6765\u611f\u53d7\u6240\u6709\u529f\u80fd\u3002"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u5f97\u76ca\u4e8ePhoenix Aggregate\u4e92\u76f8\u72ec\u7acb\u7684\u597d\u5904\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u4e00\u4e2a\u96c6\u7fa4\u5f53\u4e2d\u8fd0\u884c\u591a\u4e2a\u805a\u5408\u6839\u5e76\u7075\u6d3b\u62c6\u89e3\u548c\u7ec4\u88c5\u3002"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:"hotel-booking\n\u251c\u2500 .gitignore\n\u251c\u2500 LICENSE\n\u251c\u2500 README.md\n\u251c\u2500 hotel-server\n\u2502    \u251c\u2500 application \n\u2502    \u251c\u2500 core-api \n\u2502    \u2514\u2500 pom.xml\n\u251c\u2500 order-service\n\u2502    \u251c\u2500 pom.xml\n\u2514\u2500 pom.xml\n"})}),"\n",(0,r.jsx)(t.h2,{id:"source-downloads",children:"Source downloads"}),"\n",(0,r.jsxs)(t.p,{children:["\u6211\u4eec\u5c06\u793a\u4f8b\u6e90\u7801\u5206\u6210\u4e86\u56db\u4e2a\u5206\u652f\uff0c\u60a8\u80fd\u591f\u524d\u5f80\u4ed3\u5e93\u6784\u5efa\u5e76\u8fd0\u884c\u5f53\u524d\u529f\u80fd\uff1a",(0,r.jsx)(t.a,{href:"https://github.com/PhoenixIQ/hotel-booking/tree/part-3",children:"\u8ba2\u5355\u670d\u52a1"})]}),"\n",(0,r.jsx)(t.h2,{id:"maven\u4f9d\u8d56",children:"maven\u4f9d\u8d56"}),"\n",(0,r.jsx)(t.p,{children:"\u672c\u6848\u4f8b\u5b9e\u73b0\u9152\u5e97\u623f\u95f4\u9884\u8ba2\u540e\u7684\u8ba2\u5355\u670d\u52a1\uff0c\u57fa\u4e8e\u9884\u8ba2\u670d\u52a1\u5de5\u7a0b\u4e2d\u7684\u4f9d\u8d56\uff0c\u8fd8\u9700\u8981\u6dfb\u52a0\u4ee5\u4e0b\u4f9d\u8d56\uff1a"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-xml",children:"<dependency>\n    <groupId>com.iquantex</groupId>\n    <artifactId>phoenix-event-publish-starter</artifactId>\n    <version>2.5.5</version>\n</dependency>\n"})}),"\n",(0,r.jsx)(t.h2,{id:"\u5e94\u7528\u914d\u7f6e",children:"\u5e94\u7528\u914d\u7f6e"}),"\n",(0,r.jsx)(t.p,{children:"\u672c\u6848\u4f8b\u5b9e\u73b0\u9152\u5e97\u623f\u95f4\u9884\u8ba2\u540e\u7684\u8ba2\u5355\u670d\u52a1\uff0c\u57fa\u4e8e\u9884\u8ba2\u670d\u52a1\u5de5\u7a0b\u4e2d\u7684\u914d\u7f6e\uff0c\u8fd8\u9700\u8981\u6dfb\u52a0\u4ee5\u4e0b\u914d\u7f6e\uff1a"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"quantex:\n  phoenix:\n    event-publish:\n      event-task:\n        enabled: true\n        topic: hotel-event-pub\n"})}),"\n",(0,r.jsx)(t.h2,{id:"\u67e5\u8be2\u63a5\u53e3",children:"\u67e5\u8be2\u63a5\u53e3"}),"\n",(0,r.jsx)(t.p,{children:"\u4e0b\u9762\u901a\u8fc7\u8ba2\u5355\u6848\u4f8b\u6765\u5c55\u793a Phoenix \u7684\u5fae\u670d\u52a1\u7279\u6027\u548cEventPublish\u7684\u5176\u4ed6\u7528\u6cd5\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u8ba2\u5355\u670d\u52a1\u662f\u4e00\u4e2a\u6a21\u62df\u7684\u5176\u4ed6\u670d\u52a1\uff0c\u901a\u8fc7\u9152\u5e97\u9884\u8ba2\u670d\u52a1\u751f\u6210\u7684\u4e8b\u4ef6\u6765\u751f\u6210\u8be5\u670d\u52a1\u7684\u8ba2\u5355\uff0c\u63d0\u4f9b\u8ba2\u5355\u7684\u7cbe\u786e\u67e5\u8be2\u3001\u5168\u90e8\u8ba2\u5355\u67e5\u8be2\u7684\u529f\u80fd\u3002"}),"\n",(0,r.jsxs)(t.p,{children:["\u8ba2\u5355\u670d\u52a1\u4e5f\u4f7f\u7528\u4e86 JPA \u5b58\u50a8\u8ba2\u5355\u6570\u636e\uff0c\u4f7f\u7528\u53ef\u53c2\u89c1\uff1a",(0,r.jsx)(t.a,{href:"./popularity-projection#spring-data-jpa%E7%9A%84%E4%BD%BF%E7%94%A8",children:"Spring Data JPA\u7684\u4f7f\u7528"})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'@RestController\n@RequestMapping("order")\npublic class OrderController {\n\n\t@Autowired\n\tprivate PhoenixClient client;\n\n\t@GetMapping("/queryAll/{hotelCode}")\n\tpublic String queryAll(@PathVariable String hotelCode) {\n\t\tOrderQueryAllCmd orderQueryAllCmd = new OrderQueryAllCmd(hotelCode);\n\t\tFuture<RpcResult> future = client.send(orderQueryAllCmd, "hotel-bookings", UUID.randomUUID().toString());\n\t\ttry {\n\t\t\tOrderQueryAllEvent event = (OrderQueryAllEvent) future.get(10, TimeUnit.SECONDS).getData();\n\t\t\treturn new ObjectMapper().writeValueAsString(event.getList());\n\t\t}\n\t\tcatch (InterruptedException | ExecutionException | TimeoutException | JsonProcessingException e) {\n\t\t\treturn "rpc error: " + e.getMessage();\n\t\t}\n\t}\n\n\t@GetMapping("/query/{hotelCode}/{orderNumber}")\n\tpublic String queryRestRoom(@PathVariable String hotelCode, @PathVariable String orderNumber) {\n\t\tOrderQueryByCmd orderQueryByCmd = new OrderQueryByCmd(hotelCode, orderNumber);\n\t\tFuture<RpcResult> future = client.send(orderQueryByCmd, "hotel-bookings", UUID.randomUUID().toString());\n\t\ttry {\n\t\t\tObject obj = future.get(10, TimeUnit.SECONDS).getData();\n\t\t\tif (obj instanceof OrderQueryByEvent) {\n\t\t\t\treturn new ObjectMapper().writeValueAsString(((OrderQueryByEvent) obj).getOrder());\n\t\t\t}\n\t\t\treturn new ObjectMapper().writeValueAsString(((OrderQueryFailEvent) obj).getMsg());\n\t\t}\n\t\tcatch (InterruptedException | ExecutionException | TimeoutException | JsonProcessingException e) {\n\t\t\treturn "rpc error: " + e.getMessage();\n\t\t}\n\t}\n\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"kafka-subscribe",children:"Kafka Subscribe"}),"\n",(0,r.jsxs)(t.p,{children:["\u5f53EventPublish\u5c06\u4e8b\u4ef6\u53d1\u5e03\u5230kafka\u540e\uff0c\u8fd9\u4e9b\u6d88\u606f\u53ef\u4ee5\u88ab\u5176\u4ed6\u7cfb\u7edf\u6d88\u8d39\uff0c\u4e5f\u53ef\u4ee5\u5b58\u50a8\u5230elasticsearch\u4e2d\u3002\n\u5f53\u67d0\u4e2a\u670d\u52a1\u9700\u8981\u8ba2\u9605\u8fd9\u4e9b\u4e8b\u4ef6\u65f6\uff0c\u9700\u8981\u5b9e\u73b0\u76f8\u5e94\u7684MQ\u6d88\u8d39\u6a21\u5757\uff0c\u901a\u8fc7\u6d88\u8d39Topic\u6d88\u606f\u7684\u5f62\u5f0f\u53d6\u5f97\u4e8b\u4ef6\uff0c\u5e76\u8fdb\u884c\u540e\u7eed\u5904\u7406\u3002\n\u5177\u4f53\u53c2\u89c1\uff1a",(0,r.jsx)(t.a,{href:"/docs/2.5.5/phoenix-2.x/phoenix-core/phoenix-subscribe-pub",children:"\u8ba2\u9605\u4e0e\u5e7f\u64ad"})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'@Configuration\n@ConditionalOnProperty(value = "quantex.phoenix.event-publish.event-task.enabled", havingValue = "true")\npublic class EventPublishTopicSubscribeConfig {\n\n\t@Value("${spring.application.name}")\n\tprivate String appName;\n\n\t@Value("${quantex.phoenix.server.mq.address}")\n\tprivate String mqAddress;\n\n\t@Value("${quantex.phoenix.event-publish.event-task.topic}")\n\tprivate String subscribeTopic;\n\n\tprivate EventDeserializer<byte[], Message> deserializer = new DefaultMessageDeserializer();\n\n\t@Bean("eventPublishTopicSubscribe")\n\tpublic Subscribe customSubscribe() {\n\t\tProperties properties = new Properties();\n\t\tproperties.putIfAbsent(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, "latest");\n\t\treturn new KafkaSubscribe(mqAddress, subscribeTopic, appName, properties, new SourceCollect() {\n\t\t\t@Override\n\t\t\tpublic List<CollectResult> collect(Records records, CollectMetaData collectMetaData) {\n\t\t\t\tList<CollectResult> collectResults = new ArrayList<>();\n\t\t\t\tMessage message = deserializer.deserialize(records.getValue());\n\t\t\t\tif (message.getPayload() instanceof HotelCreateEvent) {\n\t\t\t\t\t// \u53cd\u5e8f\u5217\u5316\u4e0a\u6e38\u4e8b\u4ef6\n\t\t\t\t\tHotelCreateEvent hotelCreateEvent = (HotelCreateEvent) message.getPayload();\n\t\t\t\t\t// \u6839\u636e\u4e0a\u6e38\u4e8b\u4ef6\u8981\u7d20\u6784\u9020\u51fa\u805a\u5408\u6839\u7684cmd\n\t\t\t\t\tOrderCreateCmd orderCreateCmd = OrderCreateCmd.builder().hotelCode(hotelCreateEvent.getHotelCode())\n\t\t\t\t\t\t\t.subNumber(hotelCreateEvent.getSubNumber()).roomType(hotelCreateEvent.getRoomType())\n\t\t\t\t\t\t\t.build();\n\t\t\t\t\tcollectResults.add(new CollectResult(orderCreateCmd, true));\n\t\t\t\t}\n\t\t\t\telse if (message.getPayload() instanceof HotelCancelEvent) {\n\t\t\t\t\tHotelCancelEvent hotelCancelEvent = (HotelCancelEvent) message.getPayload();\n\t\t\t\t\tOrderCancelCmd orderCancelCmd = OrderCancelCmd.builder().hotelCode(hotelCancelEvent.getHotelCode())\n\t\t\t\t\t\t\t.subNumber(hotelCancelEvent.getSubNumber()).build();\n\t\t\t\t\tcollectResults.add(new CollectResult(orderCancelCmd, true));\n\t\t\t\t}\n\t\t\t\treturn collectResults;\n\t\t\t}\n\t\t});\n\t}\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"\u805a\u5408\u6839\u5904\u7406",children:"\u805a\u5408\u6839\u5904\u7406"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'@EntityAggregateAnnotation(aggregateRootType = "OrderAggregate")\npublic class OrderAggregate implements Serializable {\n\n\tprivate static final long serialVersionUID = -4051924255577694209L;\n\n\tprivate List<OrderCreateEvent> orders = new ArrayList<>();\n\n\t@CommandHandler(aggregateRootId = "hotelCode")\n\tpublic ActReturn act(OrderQueryAllCmd cmd) {\n\t\tOrderQueryAllEvent orderCode = new OrderQueryAllEvent("hotelCode", orders);\n\t\treturn ActReturn.builder().retCode(RetCode.SUCCESS).event(orderCode).build();\n\t}\n\n\tpublic void on(OrderQueryAllEvent event) {\n\t}\n\n\t@CommandHandler(aggregateRootId = "hotelCode")\n\tpublic ActReturn act(OrderQueryByCmd cmd) {\n\t\tboolean flag = false;\n\t\tOrderCreateEvent order = null;\n\t\tfor (OrderCreateEvent event : orders) {\n\t\t\tif (event.getSubNumber().equals(cmd.getOrderNumber())) {\n\t\t\t\tflag = true;\n\t\t\t\torder = event;\n\t\t\t}\n\t\t}\n\t\tif (flag) {\n\t\t\treturn ActReturn.builder().retCode(RetCode.SUCCESS).event(new OrderQueryByEvent("hotelCode", order))\n\t\t\t\t\t.build();\n\t\t}\n\t\treturn ActReturn.builder().retCode(RetCode.FAIL)\n\t\t\t\t.event(new OrderQueryFailEvent("hotelCode", "There is no such order number")).build();\n\t}\n\n\tpublic void on(OrderQueryByEvent event) {\n\t}\n\n\tpublic void on(OrderQueryFailEvent event) {\n\t}\n\n\t@CommandHandler(aggregateRootId = "hotelCode")\n\tpublic ActReturn act(OrderCreateCmd createCmd) {\n\t\treturn ActReturn.builder().retCode(RetCode.SUCCESS).event(\n\t\t\t\tnew OrderCreateEvent(createCmd.getHotelCode(), createCmd.getRoomType(), createCmd.getSubNumber()))\n\t\t\t\t.build();\n\t}\n\n\tpublic void on(OrderCreateEvent event) {\n\t\torders.add(event);\n\t}\n\n\t@CommandHandler(aggregateRootId = "hotelCode")\n\tpublic ActReturn act(OrderCancelCmd cmd) {\n\t\treturn ActReturn.builder().retCode(RetCode.SUCCESS)\n\t\t\t\t.event(new OrderCancelEvent(cmd.getHotelCode(), cmd.getSubNumber())).build();\n\t}\n\n\tpublic void on(OrderCancelEvent event) {\n\t\torders.removeIf(e -> {\n\t\t\tif (e.getSubNumber().equals(event.getSubNumber())) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t\treturn false;\n\t\t});\n\t}\n\n}\n\n'})}),"\n",(0,r.jsx)(t.h2,{id:"\u5355\u5143\u6d4b\u8bd5",children:"\u5355\u5143\u6d4b\u8bd5"}),"\n",(0,r.jsx)(t.p,{children:"\u4f7f\u7528 Phoenix \u63d0\u4f9b\u7684 AggregateFixture \u63a5\u53e3\u6a21\u62df\u805a\u5408\u6839\u5b9e\u4f53\uff0c\u8c03\u7528\u805a\u5408\u6839\u7684\u5904\u7406\u547d\u4ee4\u5904\u7406\u80fd\u529b\uff0c\u5206\u522b\u6821\u9a8c OrderAggregate \u7684\u67e5\u8be2\u6240\u6709\u8ba2\u5355\u3001\u67e5\u8be2\u8ba2\u5355\u8be6\u60c5\u3001\u53d6\u6d88\u8ba2\u5355\u548c\u521b\u5efa\u8ba2\u5355\u529f\u80fd\u3002"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'public class OrderAggregateTest {\n\n\tprivate EntityAggregateFixture fixture;\n\n\t@Before\n\tpublic void init() {\n\t\tfixture = new EntityAggregateFixture(OrderAggregate.class.getPackage().getName());\n\t}\n\n\t@Test\n\tpublic void test_queryAll() {\n\t\tOrderQueryAllCmd orderQueryAllCmd = new OrderQueryAllCmd("iHome");\n\t\tfixture.when(orderQueryAllCmd).printIdentify().expectRetSuccessCode();\n\t}\n\n\t@Test\n\tpublic void test_queryBy() {\n\t\tOrderQueryByCmd orderQueryByCmd = new OrderQueryByCmd("iHome", "order-1");\n\t\tfixture.when(orderQueryByCmd).printIdentify().expectRetFailCode();\n\t}\n\n\t@Test\n\tpublic void test_cancel() {\n\t\tOrderCancelCmd orderCancelCmd = new OrderCancelCmd("iHome", "order-1");\n\t\tfixture.when(orderCancelCmd).printIdentify().expectRetSuccessCode();\n\t}\n\n\t@Test\n\tpublic void test_create() {\n\t\tOrderCreateCmd orderCreateCmd = new OrderCreateCmd("iHome", RoomType.DOUBLE, "order-1");\n\t\tfixture.when(orderCreateCmd).printIdentify().expectRetSuccessCode();\n\t}\n\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"\u96c6\u6210\u6d4b\u8bd5",children:"\u96c6\u6210\u6d4b\u8bd5"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"\u542f\u52a8\u4e24\u4e2a\u5fae\u670d\u52a1\u670d\u52a1"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"# \u5728\u6839\u76ee\u5f55\u4e0b\u901a\u8fc7 docker \u542f\u52a8\u6570\u636e\u5e93\u548c Kafka \u7b49\u76f8\u5173\u8d44\u6e90\ndocker-compose up\n# \u542f\u52a8\u6839\u76ee\u5f55\u4e0b\u7684 boot.sh \u811a\u672c, \u6307\u5b9a\u670d\u52a1\u540d, Web \u7aef\u53e3\nsh boot.sh hotel-server 8080\nsh boot.sh order-service 9999\n"})}),"\n",(0,r.jsxs)(t.ol,{start:"2",children:["\n",(0,r.jsx)(t.li,{children:"\u8c03\u7528\u9884\u5b9a\u5fae\u670d\u52a1\u7684\u9884\u8ba2\u9152\u5e97\u623f\u95f4\u63a5\u53e3"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"curl -X PUT http://127.0.0.1:8080/hotel/bookings/{hotelCode}/{roomType}\n"})}),"\n",(0,r.jsxs)(t.ol,{start:"3",children:["\n",(0,r.jsx)(t.li,{children:"\u8c03\u7528\u8ba2\u5355\u5fae\u670d\u52a1\u67e5\u8be2\u6240\u6709\u8ba2\u5355\u67e5\u8be2\u63a5\u53e3"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"curl http://127.0.0.1:9999/order/queryAll/{hotelCode}\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u8fd4\u56de\u6240\u6709\u8ba2\u5355\u4fe1\u606f\uff1a"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'[{\n\t"hotelCode": "iHome",\n\t"roomType": "STANDARD",\n\t"subNumber": "2@c424c25f-505f-444e-aec6-e6f4fec2f832"\n}, {\n\t"hotelCode": "iHome",\n\t"roomType": "COUPLES",\n\t"subNumber": "3@e96b1926-f02d-4f20-969f-6818be852356"\n}, {\n\t"hotelCode": "iHome",\n\t"roomType": "COUPLES",\n\t"subNumber": "3@ea41e115-7c25-4c00-842b-8099af281b28"\n}, {\n\t"hotelCode": "iHome",\n\t"roomType": "COUPLES",\n\t"subNumber": "3@7823deb0-918a-45ed-a3b9-3e347da8b84a"\n}, {\n\t"hotelCode": "iHome",\n\t"roomType": "LUXURIOUS",\n\t"subNumber": "4@585499e8-ba08-432c-a735-a4588263218b"\n}, {\n\t"hotelCode": "iHome",\n\t"roomType": "DOUBLE",\n\t"subNumber": "1@3e03d5f8-fa2f-4fa3-ada5-8bd39b60de0c"\n}, {\n\t"hotelCode": "iHome",\n\t"roomType": "DOUBLE",\n\t"subNumber": "1@b2453d84-6a6a-4376-9e35-7420113f62cd"\n}]\n'})}),"\n",(0,r.jsxs)(t.ol,{start:"4",children:["\n",(0,r.jsx)(t.li,{children:"\u8c03\u7528\u8ba2\u5355\u5fae\u670d\u52a1\u67e5\u8be2\u8ba2\u5355\u8be6\u60c5"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"curl http://127.0.0.1:9999/order/query/{hotelCode}/{orderNumber}\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u8fd4\u56de\uff1a"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n\t"hotelCode": "iHome",\n\t"roomType": "COUPLES",\n\t"subNumber": "3@7823deb0-918a-45ed-a3b9-3e347da8b84a"\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},79957:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/hotel-part-3-e141b73e1730ba53f5e4185446605e43.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>l});var r=n(67294);const o={},i=r.createContext(o);function l(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);