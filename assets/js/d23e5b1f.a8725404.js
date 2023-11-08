"use strict";(self.webpackChunkphoenixiq_github_io=self.webpackChunkphoenixiq_github_io||[]).push([[12360],{16862:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var t=r(85893),i=r(11151);const s={id:"event-publish-client-usage",title:"\u8ba2\u9605\u4e8b\u4ef6"},a=void 0,o={id:"phoenix-2.x/phoenix-event-publish/event-publish-client-usage",title:"\u8ba2\u9605\u4e8b\u4ef6",description:"\u4f7f\u7528Spring Kafka\u5b9e\u73b0\u4e8b\u4ef6\u8ba2\u9605\u5ba2\u6237\u7aef",source:"@site/versioned_docs/version-2.5.1/phoenix-2.x/04-phoenix-event-publish/04-client-usage.md",sourceDirName:"phoenix-2.x/04-phoenix-event-publish",slug:"/phoenix-2.x/phoenix-event-publish/event-publish-client-usage",permalink:"/docs/2.5.1/phoenix-2.x/phoenix-event-publish/event-publish-client-usage",draft:!1,unlisted:!1,editUrl:"https://github.com/PhoenixIQ/versioned_docs/version-2.5.1/phoenix-2.x/04-phoenix-event-publish/04-client-usage.md",tags:[],version:"2.5.1",sidebarPosition:4,frontMatter:{id:"event-publish-client-usage",title:"\u8ba2\u9605\u4e8b\u4ef6"},sidebar:"docs",previous:{title:"\u4f7f\u7528\u8bf4\u660e",permalink:"/docs/2.5.1/phoenix-2.x/phoenix-event-publish/event-publish-integration"},next:{title:"\u80cc\u666f\u4ecb\u7ecd",permalink:"/docs/2.5.1/phoenix-2.x/phoenix-dgc/phoenix-dgc-introduce"}},c={},l=[{value:"\u4f7f\u7528Spring Kafka\u5b9e\u73b0\u4e8b\u4ef6\u8ba2\u9605\u5ba2\u6237\u7aef",id:"\u4f7f\u7528spring-kafka\u5b9e\u73b0\u4e8b\u4ef6\u8ba2\u9605\u5ba2\u6237\u7aef",level:2},{value:"Listener\u5199\u6cd5",id:"listener\u5199\u6cd5",level:3},{value:"Listener\u5b9e\u4f8b\u5316\u548c\u4f9d\u8d56\u7ec4\u4ef6\u7684\u914d\u7f6e",id:"listener\u5b9e\u4f8b\u5316\u548c\u4f9d\u8d56\u7ec4\u4ef6\u7684\u914d\u7f6e",level:3},{value:"\u63d0\u4f9b\u624b\u52a8Consumer Ack\u673a\u5236\u7684\u6279\u91cf\u6d88\u8d39Listener",id:"\u63d0\u4f9b\u624b\u52a8consumer-ack\u673a\u5236\u7684\u6279\u91cf\u6d88\u8d39listener",level:3}];function u(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u4f7f\u7528spring-kafka\u5b9e\u73b0\u4e8b\u4ef6\u8ba2\u9605\u5ba2\u6237\u7aef",children:"\u4f7f\u7528Spring Kafka\u5b9e\u73b0\u4e8b\u4ef6\u8ba2\u9605\u5ba2\u6237\u7aef"}),"\n",(0,t.jsx)(n.p,{children:"\u9886\u57df\u4e8b\u4ef6\u53d1\u5e03\u670d\u52a1\u53ef\u7531\u72ec\u7acb\u90e8\u7f72\u7684Event-Publish\u670d\u52a1\u63d0\u4f9b\uff0c\u4e5f\u53ef\u7531\u96c6\u6210\u7684Phoenix-Event-Publish\u4e8b\u4ef6\u53d1\u5e03\u6a21\u5757\u63d0\u4f9b\uff0c\u4e8b\u4ef6\u53d1\u5e03\u4efb\u52a1\u5b9a\u4e49\u540e\uff0c\u7531\u8fd9\u4e9b\u670d\u52a1\u4eceevent-store\u4e2d\u6309\u7167\u4e00\u5b9a\u987a\u5e8f\u8bfb\u53d6\uff0c\u5e76\u53d1\u9001\u5230\u6307\u5b9a\u7684MQ topic\u4e2d\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5f53\u67d0\u4e2a\u670d\u52a1\u9700\u8981\u8ba2\u9605\u8fd9\u4e9b\u4e8b\u4ef6\u65f6\uff0c\u9700\u8981\u5b9e\u73b0\u76f8\u5e94\u7684MQ\u6d88\u8d39\u6a21\u5757\uff0c\u901a\u8fc7\u6d88\u8d39Topic\u6d88\u606f\u7684\u5f62\u5f0f\u53d6\u5f97\u4e8b\u4ef6\uff0c\u5e76\u8fdb\u884c\u540e\u7eed\u5904\u7406\u3002\u5f53\u524dEvent-Publish\u6a21\u5757\u5f00\u53d1\u4e2d\uff0c\u5c1a\u672a\u5bf9Client\u7aef\u7684\u4e8b\u4ef6\u6d88\u8d39\u548c\u5904\u7406\u6a21\u578b\u8fdb\u884c\u4e25\u683c\u5b9a\u4e49\uff0c\u5f62\u6210\u62bd\u8c61\uff0c\u6240\u4ee5\u9700\u8981\u5ba2\u6237\u7aef\u670d\u52a1\u6682\u65f6\u81ea\u884c\u5b9e\u73b0\u8fd9\u90e8\u5206\u903b\u8f91\uff0c\u5728\u76ee\u524d\u9636\u6bb5\u4fdd\u7559\u8f83\u5927\u7684\u7075\u6d3b\u5ea6\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4ee5\u4e0b\u8bf4\u660e\u63d0\u4f9b\u4e00\u4e2a\u4f7f\u7528Spring Kafka Listener\u5c01\u88c5\u5b9e\u73b0MQ\u6d88\u606f\u8ba2\u9605\u7684\u793a\u4f8b\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"listener\u5199\u6cd5",children:"Listener\u5199\u6cd5"}),"\n",(0,t.jsxs)(n.p,{children:["Spring Kafka\u63d0\u4f9b\u6ce8\u89e3",(0,t.jsx)(n.code,{children:"@KafkaListener"}),"\uff0c\u6807\u6ce8\u5728\u6d88\u606f\u8ba2\u9605\u5904\u7406\u7684\u65b9\u6cd5\u4e0a\uff0c\u5373\u6211\u4eec\u9700\u8981\u5b9e\u73b0\u7684\u4e8b\u4ef6\u8ba2\u9605\u5904\u7406\u903b\u8f91\u3002\u4ee5\u94f6\u884c\u8f6c\u8d26\u7684\u4e8b\u4ef6\u8ba2\u9605\u4e3a\u4f8b\uff0c\u5982\u4e0b\u6240\u793a\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'\npublic class BankAccountEventListener {\n\n    // \u4f7f\u7528\u63d0\u4f9b\u7684\u9ed8\u8ba4\u53cd\u5e8f\u5217\u5316\u5668\uff0c\u53cd\u5e8f\u5217\u5316MQ\u4e2d\u7684\u5b57\u8282\u6570\u7ec4\uff0c\u5f97\u5230\u4ee5Message\u5c01\u88c5\u7684\u9886\u57df\u4e8b\u4ef6\n    private EventDeserializer<byte[], Message> deserializer = new DefaultMessageDeserializer();\n\n    // \u4f7f\u7528\u6ce8\u89e3\u6807\u6ce8\u4e8b\u4ef6\u5904\u7406\u7684\u65b9\u6cd5\uff0c\u5728\u6ce8\u89e3\u4e2d\u58f0\u660e\u8ba2\u9605\u6d88\u606f\u7684topic\u548c\u8be5listener\u7684goupId\n    @KafkaListener(topics = "bank-account-event-pub", groupId = "bank-account-event-sub")\n    public void receive(byte[] eventBytes) {\n        try {\n            Message eventMsg = deserializer.deserialize(eventBytes);\n            if (eventMsg.getPayload() instanceof AccountCreateEvent) {\n                String accountCode = ((AccountCreateEvent) eventMsg.getPayload()).getAccountCode();\n            }\n        } catch (Exception e) {\n            log.error("handle event error", e);\n        }\n    }\n}\n\n'})}),"\n",(0,t.jsx)(n.h3,{id:"listener\u5b9e\u4f8b\u5316\u548c\u4f9d\u8d56\u7ec4\u4ef6\u7684\u914d\u7f6e",children:"Listener\u5b9e\u4f8b\u5316\u548c\u4f9d\u8d56\u7ec4\u4ef6\u7684\u914d\u7f6e"}),"\n",(0,t.jsxs)(n.p,{children:["\u4ee5\u4e0a\u4ec5\u4e3aListener\u7684\u58f0\u660e\u5b9a\u4e49\uff0c\u60f3\u8981\u5728\u670d\u52a1\u4e2d\u542f\u52a8\u4ee5\u4e0aListener\uff0c\u9700\u8981\u521b\u5efa\u76f8\u5e94\u7684\u5b9e\u4f8b\uff0c\u8fd9\u4f9d\u8d56\u76f8\u5e94\u7684",(0,t.jsx)(n.code,{children:"ConsumerFactory"}),"\u548c",(0,t.jsx)(n.code,{children:"KafkaListenerContainerFactory"}),"\uff0c\u6211\u4eec\u901a\u8fc7\u58f0\u660eBean Configuration\u7684\u65b9\u5f0f\u8ba9Spring\u7ba1\u7406\u8fd9\u4e9b\u5b9e\u4f8b\u7684\u521b\u5efa\u548c\u4f9d\u8d56\u7ba1\u7406\u3002\u4ee5\u94f6\u884c\u8f6c\u8d26\u7684\u4e8b\u4ef6\u8ba2\u9605\u4e3a\u4f8b\uff0c\u5982\u4e0b\u6240\u793a\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'\n@EnableKafka\n@Configuration\n@ConditionalOnProperty(value = "event.listener.enabled", havingValue = "true")\npublic class KafkaConsumerConfiguration {\n\n    @Value("${spring.kafka.bootstrap-servers}")\n    private String mqAddress;\n\n    /**\n     * \u521b\u5efa\u4e00\u4e2akafka\u7684Consumer\u5de5\u5382\n     */\n    @Bean\n    public ConsumerFactory<String, byte[]> consumerFactory() {\n        Map<String, Object> props = new HashMap<>();\n        props.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, mqAddress);\n        props.put(ConsumerConfig.GROUP_ID_CONFIG, "bank-account-event-listener");\n        props.put(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, "latest");\n        props.put(ConsumerConfig.ENABLE_AUTO_COMMIT_CONFIG, "true");\n        props.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);\n        props.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, ByteArrayDeserializer.class);\n        return new DefaultKafkaConsumerFactory<>(props);\n    }\n\n    /**\n     * \u521b\u5efa\u4e00\u4e2aKafka\u7684listener\n     */\n    @Bean\n    public ConcurrentKafkaListenerContainerFactory<String, byte[]> kafkaListenerContainerFactory(ConsumerFactory<String, byte[]> consumerFactory) {\n        ConcurrentKafkaListenerContainerFactory<String, byte[]> factory = new ConcurrentKafkaListenerContainerFactory<>();\n        factory.setConsumerFactory(consumerFactory);\n        return factory;\n    }\n\n    /**\n     * \u521b\u5efa\u8d26\u6237\u4e8b\u4ef6\u7684listener\n     */\n    @Bean\n    public BankAccountEventListener bankAccountListener() {\n        return new BankAccountEventListener();\n    }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u4f7f\u7528\u914d\u7f6e",(0,t.jsx)(n.code,{children:"spring.kafka.bootstrap-servers"}),"\u8bbe\u7f6e\u4e8b\u4ef6\u8ba2\u9605\u7684Kafka\u5730\u5740\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u63d0\u4f9b\u624b\u52a8consumer-ack\u673a\u5236\u7684\u6279\u91cf\u6d88\u8d39listener",children:"\u63d0\u4f9b\u624b\u52a8Consumer Ack\u673a\u5236\u7684\u6279\u91cf\u6d88\u8d39Listener"}),"\n",(0,t.jsx)(n.p,{children:"\u4ee5\u4e0aListener\u5b9e\u73b0\u4f7f\u7528\u81ea\u52a8\u63d0\u4ea4\u673a\u5236\u7684Consumer\uff0c\u6d88\u606f\u5728\u88abConsumer\u63a5\u6536\u540e\uff0c\u5373\u5411Kafka Broker\u63d0\u4ea4\u6d88\u8d39\u8fdb\u5ea6\uff0c\u4e0b\u6b21\u76f8\u540c\u7684Consumer Group\u5c06\u4e0d\u518d\u6d88\u8d39\u6b64\u6d88\u606f\uff1b\u540c\u65f6\u8be5Listener\u63d0\u4f9b\u7684\u662f\u5355\u4e2a\u6d88\u606f\u5904\u7406\u63a5\u53e3\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["Spring Kafka\u63d0\u4f9b\u4e86",(0,t.jsx)(n.code,{children:"BatchAcknowledgingMessageListener"}),"\uff0c\u8be5Listener\u5b9e\u73b0\u63d0\u4f9b\u6279\u91cf\u6d88\u606f\u6d88\u8d39\u548c\u5904\u7406\u63a5\u53e3\uff0c\u540c\u65f6\u63d0\u4f9b\u624b\u52a8Consumer Ack\u673a\u5236\uff0c\u53ef\u5b9e\u73b0\u6d88\u606f\u88abListener\u6210\u529f\u5904\u7406\u540e\u518d\u5411Kafka Broker\u63d0\u4ea4\u8be5\u6d88\u8d39\u8fdb\u5ea6\uff0c\u4fdd\u8bc1\u5e94\u7528\u5728\u6545\u969c\u6062\u590d\u540e\uff0c\u53ef\u4ee5\u518d\u6b21\u6d88\u8d39\u672a\u6210\u529f\u5904\u7406\u7684\u6d88\u606f\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528\u793a\u4f8b\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'\npublic class BankAccountEventListener implements BatchAcknowledgingMessageListener<String, byte[]> {\n\n    @Override\n    @KafkaListener(topics = "bank-account-event-pub")\n    public void onMessage(List<ConsumerRecord<String, byte[]>> data, Acknowledgment acknowledgment) {\n        for (ConsumerRecord<String, byte[]> record : data) {\n            tryAddNewAccount(record.value());\n        }\n        acknowledgment.acknowledge(); // \u624b\u52a8\u63d0\u4ea4\u6d88\u8d39\u8fdb\u5ea6\n    }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u540c\u65f6\u6ce8\u610f",(0,t.jsx)(n.code,{children:"ConsumerFactory"}),"\u548c",(0,t.jsx)(n.code,{children:"KafkaListenerContainerFactory"}),"\u9700\u8981\u4f7f\u7528\u7279\u5b9a\u8bbe\u7f6e\u3002"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Consumer\u914d\u7f6e\u4e2d\u5173\u95ed\u81ea\u52a8\u6d88\u8d39\u8fdb\u5ea6\u63d0\u4ea4\uff1a",(0,t.jsx)(n.code,{children:'props.put(ConsumerConfig.ENABLE_AUTO_COMMIT_CONFIG, "true")'})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"KafkaListenerContainerFactory"}),"\u8bbe\u7f6e\u624b\u52a8\u63d0\u4ea4\u6a21\u5f0f\u548c\u6279\u91cf\u6d88\u606f\u6a21\u5f0f\uff1a"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"@Bean\npublic ConcurrentKafkaListenerContainerFactory<String, byte[]> kafkaListenerContainerFactory() {\n    ConcurrentKafkaListenerContainerFactory<String, byte[]> factory = new ConcurrentKafkaListenerContainerFactory<>();\n    factory.setConsumerFactory(consumerFactory());\n    // \u5f00\u542f\u6279\u91cf\u6d88\u606f\u6a21\u5f0f\n    factory.setBatchListener(true);\n    // \u5f00\u542f\u624b\u52a8\u63d0\u4ea4\u6a21\u5f0f\uff0c\u7528\u4e8e\u63d0\u4f9bBatchAcknowledgingMessageListener\u56de\u8c03\u4e2d\u7684Acknowlegment\u5bf9\u8c61\n    factory.getContainerProperties().setAckMode(AbstractMessageListenerContainer.AckMode.MANUAL_IMMEDIATE);\n    return factory;\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>a});var t=r(67294);const i={},s=t.createContext(i);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);