"use strict";(self.webpackChunkphoenix_website_next=self.webpackChunkphoenix_website_next||[]).push([[35355],{36779:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var r=t(85893),o=t(11151);const i={id:"popularity-projection",title:"4. \u623f\u95f4\u6d41\u884c\u5ea6\u5206\u6790",description:"\u4ecb\u7ecd\u5982\u4f55\u5b9e\u73b0\u4e00\u4e2a\u623f\u578b\u6d41\u884c\u5ea6\u5206\u6790\u7684\u5fae\u670d\u52a1"},s="\u6d41\u884c\u5ea6\u5206\u6790",a={id:"phoenix/quick-start-example/popularity-projection",title:"4. \u623f\u95f4\u6d41\u884c\u5ea6\u5206\u6790",description:"\u4ecb\u7ecd\u5982\u4f55\u5b9e\u73b0\u4e00\u4e2a\u623f\u578b\u6d41\u884c\u5ea6\u5206\u6790\u7684\u5fae\u670d\u52a1",source:"@site/versioned_docs/version-2.6.0/01-phoenix/05-quick-start-example/04-popularity-projection.md",sourceDirName:"01-phoenix/05-quick-start-example",slug:"/phoenix/quick-start-example/popularity-projection",permalink:"/docs/2.6.0/phoenix/quick-start-example/popularity-projection",draft:!1,unlisted:!1,editUrl:"https://github.com/PhoenixIQ/versioned_docs/version-2.6.0/01-phoenix/05-quick-start-example/04-popularity-projection.md",tags:[],version:"2.6.0",sidebarPosition:4,frontMatter:{id:"popularity-projection",title:"4. \u623f\u95f4\u6d41\u884c\u5ea6\u5206\u6790",description:"\u4ecb\u7ecd\u5982\u4f55\u5b9e\u73b0\u4e00\u4e2a\u623f\u578b\u6d41\u884c\u5ea6\u5206\u6790\u7684\u5fae\u670d\u52a1"},sidebar:"docs",previous:{title:"3. \u9152\u5e97\u9884\u8ba2\u5fae\u670d\u52a1",permalink:"/docs/2.6.0/phoenix/quick-start-example/bookings-microservice"},next:{title:"5. \u8ba2\u5355\u670d\u52a1",permalink:"/docs/2.6.0/phoenix/quick-start-example/order-microservice"}},l={},p=[{value:"Source downloads",id:"source-downloads",level:2},{value:"maven\u4f9d\u8d56",id:"maven\u4f9d\u8d56",level:2},{value:"\u5e94\u7528\u914d\u7f6e",id:"\u5e94\u7528\u914d\u7f6e",level:2},{value:"Spring Data JPA\u7684\u4f7f\u7528",id:"jpa",level:2},{value:"EventPublish\u7684Handle",id:"eventpublish\u7684handle",level:2},{value:"\u670d\u52a1\u8c03\u7528",id:"\u670d\u52a1\u8c03\u7528",level:2},{value:"\u6570\u636e\u76d1\u63a7",id:"\u6570\u636e\u76d1\u63a7",level:2},{value:"\u96c6\u6210\u6d4b\u8bd5",id:"\u96c6\u6210\u6d4b\u8bd5",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u6d41\u884c\u5ea6\u5206\u6790",children:"\u6d41\u884c\u5ea6\u5206\u6790"}),"\n",(0,r.jsx)(n.p,{children:"\u4e86\u89e3\u66f4\u591aPhoenix\u5e94\u7528\u573a\u666f\uff0c\u6211\u4eec\u53ef\u4ee5\u5355\u72ec\u5b9e\u73b0\u547d\u4ee4\u67e5\u8be2\u804c\u8d23\u5206\u79bb(CQRS)\u7684Q\u7aef\uff0c\u901a\u8fc7Q\u7aef\u80fd\u591f\u66f4\u8fc5\u901f\u7684\u67e5\u8be2\u6570\u636e\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"image",src:t(88393).Z+"",width:"902",height:"602"})}),"\n",(0,r.jsx)(n.p,{children:"\u57fa\u4e8e\u9152\u5e97\u9884\u8ba2\u670d\u52a1\u7684\u793a\u4f8b\uff0c\u6211\u4eec\u5c06\u589e\u52a0\u5b9e\u73b0\u9152\u5e97\u623f\u578b\u5173\u6ce8\u5ea6\u6392\u884c\uff0c\u88ab\u9884\u8ba2\u6700\u591a\u6b21\u7684\u5546\u54c1\u88ab\u6807\u8bb0\u4e3a\u6700\u6d41\u884c\u7684\u5546\u54c1\uff0c\u5bf9\u6d41\u884c\u5546\u54c1\u8fdb\u884c\u6392\u5e8f\u3001\u5206\u6790\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u6b64\u9875\u9762\u4e0a\uff0c\u60a8\u5c06\u5b66\u4e60\u5982\u4f55\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#spring-data-jpa%E7%9A%84%E4%BD%BF%E7%94%A8",children:"Spring Data JPA\u7684\u4f7f\u7528"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#eventpublish%E7%9A%84handle",children:"EventPublish\u7684Handle"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#%E6%95%B0%E6%8D%AE%E7%9B%91%E6%8E%A7",children:"\u6570\u636e\u76d1\u63a7"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"source-downloads",children:"Source downloads"}),"\n",(0,r.jsxs)(n.p,{children:["\u6211\u4eec\u5c06\u793a\u4f8b\u6e90\u7801\u5206\u6210\u4e86\u56db\u4e2a\u5206\u652f\uff0c\u60a8\u80fd\u591f\u524d\u5f80\u4ed3\u5e93\u6784\u5efa\u5e76\u8fd0\u884c\u5f53\u524d\u529f\u80fd\uff1a",(0,r.jsx)(n.a,{href:"https://github.com/PhoenixIQ/hotel-booking/tree/part-2",children:"\u6d41\u884c\u5ea6\u5206\u6790"})]}),"\n",(0,r.jsx)(n.h2,{id:"maven\u4f9d\u8d56",children:"maven\u4f9d\u8d56"}),"\n",(0,r.jsx)(n.p,{children:"\u672c\u6848\u4f8b\u5b9e\u73b0\u9152\u5e97\u623f\u95f4\u7684\u6d41\u884c\u5ea6\u5206\u6790\u529f\u80fd\uff0c\u57fa\u4e8e\u9884\u8ba2\u670d\u52a1\u5de5\u7a0b\u4e2d\u7684\u4f9d\u8d56\uff0c\u8fd8\u9700\u8981\u6dfb\u52a0\u4ee5\u4e0b\u4f9d\u8d56\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:"<dependency>\n    <groupId>com.iquantex</groupId>\n    <artifactId>phoenix-event-publish-starter</artifactId>\n    <version>2.6.0</version>\n</dependency>\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-data-jpa</artifactId>\n</dependency>\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u5e94\u7528\u914d\u7f6e",children:"\u5e94\u7528\u914d\u7f6e"}),"\n",(0,r.jsx)(n.p,{children:"\u672c\u6848\u4f8b\u5b9e\u73b0\u9152\u5e97\u623f\u95f4\u7684\u6d41\u884c\u5ea6\u5206\u6790\u529f\u80fd\uff0c\u57fa\u4e8e\u9884\u8ba2\u670d\u52a1\u5de5\u7a0b\u4e2d\u7684\u914d\u7f6e\uff0c\u8fd8\u9700\u8981\u6dfb\u52a0\u4ee5\u4e0b\u914d\u7f6e\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"spring:\n  datasource:\n    url: jdbc:h2:file:./data/test;DB_CLOSE_DELAY=-1;DATABASE_TO_UPPER=FALSE;INIT=CREATE SCHEMA IF NOT EXISTS PUBLIC\n    username: sa\n    password:\n    driver-class-name: org.h2.Driver\n  jpa:\n    hibernate:\n      ddl-auto: update\n      naming:\n        physical-strategy: org.springframework.boot.orm.jpa.hibernate.SpringPhysicalNamingStrategy\n    database-platform: org.hibernate.dialect.MySQL5InnoDBDialect\n    show-sql: false\n\nquantex:\n  phoenix:\n    event-publish:\n      event-task:\n        enabled: true\n        topic: hotel-event-pub\n"})}),"\n",(0,r.jsx)(n.h2,{id:"jpa",children:"Spring Data JPA\u7684\u4f7f\u7528"}),"\n",(0,r.jsx)(n.p,{children:"Spring Data JPA\u662f\u4e00\u6b3e\u5bf9\u8c61\u5173\u7cfb\u6620\u5c04(ORM)\u6846\u67b6\uff0c\u6211\u4eec\u4f7f\u7528 JPA \u521b\u5efa\u6570\u636e\u5e93\u5b58\u50a8\u6d41\u884c\u5ea6\u6392\u884c\u4fe1\u606f\u3002\u4ee5\u4e0a\u4f9d\u8d56\u548c\u914d\u7f6e\u5df2\u7ecf\u7ed9\u51fa\uff0c\u4e0b\u9762\u5c31\u662fJPA\u7684\u4f7f\u7528\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5b9a\u4e49 JPA \u63a5\u53e3\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u5b9a\u4e49 model \u7c7b\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u63a5\u53e3\uff1a"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"public interface BookingsStoreRepository extends CrudRepository<BookingStore, String> {}\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"model\uff1a"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'@Entity\n@Data\n@Builder\n@Table(name = "BOOKING_STORE")\n@AllArgsConstructor\n@NoArgsConstructor\npublic class BookingStore implements Serializable {\n\n\t@Id\n\tprivate String roomType;\n\n\tprivate int bookingsCount;\n\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u4e2a\u63a5\u53e3\u4f1a\u5b9e\u73b0\u81ea\u52a8\u914d\u7f6e\uff0c\u6211\u4eec\u8981\u4f7f\u7528\u5b83\u5b58\u50a8\u6216\u8005\u67e5\u8be2\u65f6\uff0c\u53ea\u9700\u8981\u8c03\u7528\u5b83\u7684 API \u5373\u53ef\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"eventpublish\u7684handle",children:"EventPublish\u7684Handle"}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u60a8\u4e0d\u4e86\u89e3",(0,r.jsx)(n.a,{href:"/docs/phoenix-event-publish/event-publish-readme",children:"\u4e8b\u4ef6\u53d1\u5e03"}),"\u548c ",(0,r.jsx)(n.a,{href:"/docs/phoenix-event-publish/event-publish-integration",children:"Event-Publish \u914d\u7f6e"}),"\uff0c\u8bf7\u5148\u9605\u8bfb\u6587\u6863\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u5f00\u542f eventPublish \u540e\uff0c\u4e8b\u4ef6\u5c06\u53d1\u5e03\u5230\u6307\u5b9a\u6d88\u606f\u961f\u5217\u4e2d\uff0c\u8c03\u7528\u6b64\u961f\u5217\u7684\u53ef\u4ee5\u662f\u5176\u4ed6\u670d\u52a1\u3001Elasticsearch\u7b49\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u6211\u4eec\u4f7f\u7528eventPublish\u63d0\u4f9b\u7684\u62e6\u622a\u529f\u80fd\uff0c\u5bf9\u9884\u8ba2\u623f\u95f4\u7684\u4e8b\u4ef6\u8fdb\u884c\u91cd\u65b0handle\uff0c\u5e76\u4f7f\u7528\u6570\u636e\u5e93\u8fdb\u884c\u6301\u4e45\u5316\uff0c\u5b9e\u73b0\u9152\u5e97\u623f\u95f4\u7c7b\u578b\u7684\u6d41\u884c\u5ea6\u5206\u6790\u529f\u80fd\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'@Component\npublic class PopPublishHandler implements EventHandler<Phoenix.Message, Phoenix.Message> {\n\n\t@Autowired\n\tprivate BookingsStoreRepository repository;\n\n\t/** \u4f7f\u7528\u63d0\u4f9b\u7684\u9ed8\u8ba4\u53cd\u5e8f\u5217\u5316\u5668\uff0c\u53cd\u5e8f\u5217\u5316MQ\u4e2d\u7684\u5b57\u8282\u6570\u7ec4\uff0c\u5f97\u5230\u4ee5Message\u5c01\u88c5\u7684\u9886\u57df\u4e8b\u4ef6 */\n\tprivate EventDeserializer<byte[], Message> deserializer = new DefaultMessageDeserializer();\n\n\t@Override\n\tpublic String getInfo() {\n\t\treturn null;\n\t}\n\n\t@Override\n\tpublic CommittableEventBatchWrapper handleBatch(CommittableEventBatchWrapper batchWrapper) {\n\t\tList<EventStoreRecord<Phoenix.Message>> events = batchWrapper.getEvents();\n\t\tIterator<EventStoreRecord<Phoenix.Message>> iterator = events.iterator();\n\t\twhile (iterator.hasNext()) {\n\t\t\tMessage message = deserializer.deserialize(iterator.next().getContent().toByteArray());\n\t\t\tif (message.getPayload() instanceof HotelCreateEvent) {\n\t\t\t\tString roomType = ((HotelCreateEvent) message.getPayload()).getRestType();\n\t\t\t\ttry {\n\t\t\t\t\tBookingStore bookingStore = repository.findById(roomType).get();\n\t\t\t\t\trepository.save(BookingStore.builder().roomType(roomType)\n\t\t\t\t\t\t\t.bookingsCount(bookingStore.getBookingsCount() + 1).build());\n\t\t\t\t}\n\t\t\t\tcatch (NoSuchElementException e) {\n\t\t\t\t\t// \u83b7\u53d6\u4e0d\u5230\u6570\u636e\u65f6\uff0cget()\u629b\u51fa\u5f02\u5e38\n\t\t\t\t\trepository.save(BookingStore.builder().roomType(roomType).bookingsCount(1).build());\n\t\t\t\t}\n\t\t\t}\n\t\t\telse if (message.getPayload() instanceof HotelCancelEvent) {\n\t\t\t\tString roomType = ((HotelCancelEvent) message.getPayload()).getSubNumber().split("@")[0];\n\t\t\t\tBookingStore bookingStore = repository.findById(roomType).get();\n\t\t\t\tif (bookingStore.getBookingsCount() == 1) {\n\t\t\t\t\trepository.delete(bookingStore);\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\trepository.save(BookingStore.builder().roomType(roomType)\n\t\t\t\t\t\t\t.bookingsCount(bookingStore.getBookingsCount() - 1).build());\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\treturn batchWrapper;\n\t}\n\n\t@Override\n\tpublic int getOrder() {\n\t\treturn 0;\n\t}\n\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u672c\u6848\u4f8b\u4e2d\u6211\u4eec\u53ea\u4f7f\u7528\u4e86\u4e8b\u4ef6\u7684\u62e6\u622a\u529f\u80fd\uff0c\u5982\u679c\u60a8\u60f3\u4e86\u89e3\u66f4\u591a\uff0c\u8bf7\u9605\u8bfb",(0,r.jsx)(n.a,{href:"/docs/phoenix-event-publish/event-publish-client-usage",children:"\u8ba2\u9605\u4e8b\u4ef6"})]}),"\n",(0,r.jsx)(n.h2,{id:"\u670d\u52a1\u8c03\u7528",children:"\u670d\u52a1\u8c03\u7528"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u91cc\u7684\u670d\u52a1\u8c03\u7528\u53ea\u5b9e\u73b0\u4e00\u4e2a\u67e5\u8be2\u7684\u903b\u8f91\uff0c\u6211\u4eec\u80fd\u76f4\u63a5\u4ece\u6570\u636e\u5b58\u50a8\u7aef\u5feb\u901f\u83b7\u53d6\u6570\u636e\uff0c\u5b9e\u73b0\u4e8b\u4ef6\u5199\u5165\u548c\u8bfb\u53d6\u7684\u5206\u79bb\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'@Slf4j\n@RestController\n@RequestMapping("hotel")\npublic class ShoppingController {\n    \n    // other\n\n\t@Autowired\n    private BookingsStoreRepository repository;\n\t\n\t// other\n\n\t@GetMapping("/queryPop")\n    public String queryRestRoom() {\n        try {\n            Map<String, Integer> map = new HashMap<>();\n            repository.findAll()\n                    .forEach(bookingStore -> map.put(bookingStore.getRoomType(), bookingStore.getBookingsCount()));\n            return new ObjectMapper().writeValueAsString(ConvertUtil.Map2Map(ConvertUtil.sortMap(map)));\n        }\n        catch (JsonProcessingException e) {\n            return "query fail: " + e.getMessage();\n        }\n    }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u6570\u636e\u76d1\u63a7",children:"\u6570\u636e\u76d1\u63a7"}),"\n",(0,r.jsxs)(n.p,{children:["\u901a\u8fc7Phoenix\u7684\u4e8b\u4ef6\u53d1\u5e03\u529f\u80fd\uff0c\u6846\u67b6\u672c\u8eab\u8fd8\u652f\u6301\u4e86\u5bf9\u6d88\u606f\u7684\u76d1\u63a7\uff0c\u4ecb\u7ecd\u8bf4\u660e\uff1a",(0,r.jsx)(n.a,{href:"/docs/phoenix-console/phoenix-console-business-monitor",children:"Phoenix ElasticSearch"}),"\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u96c6\u6210\u6d4b\u8bd5",children:"\u96c6\u6210\u6d4b\u8bd5"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u542f\u52a8\u670d\u52a1"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"# \u542f\u52a8\u6839\u76ee\u5f55\u4e0b\u7684 boot.sh \u811a\u672c, \u6307\u5b9a\u670d\u52a1\u540d, Web \u7aef\u53e3\nsh  boot.sh hotel-server 8080\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"\u67e5\u8be2\u6d41\u884c\u5ea6\u6392\u884c\u699c"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"curl http://127.0.0.1:8080/hotel/queryPop\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u8fd4\u56de\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:'{"\u60c5\u4fa3\u5957\u623f":3,"\u5927\u5e8a\u623f":2,"\u603b\u7edf\u5957\u623f":1,"\u6807\u51c6\u95f4":1}\n'})})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},88393:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/hotel-part-2-7441ce8f7fc9aa41378f37656a28679a.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var r=t(67294);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);