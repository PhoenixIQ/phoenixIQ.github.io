"use strict";(self.webpackChunkphoenixiq_github_io=self.webpackChunkphoenixiq_github_io||[]).push([[51091],{76687:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var t=a(85893),r=a(11151),i=a(74866),l=a(85162);const c={slug:"2.6.x-migration-guide",title:"Phoenix 2.6.0 \u8fc1\u79fb\u6307\u5357",authors:"andychen",tags:["Phoenix","Migration","Guide"]},s=void 0,o={permalink:"/blog/2.6.x-migration-guide",editUrl:"https://github.com/PhoenixIQ/blog/2023-11-10-2.6.x-MigrationGuide.md",source:"@site/blog/2023-11-10-2.6.x-MigrationGuide.md",title:"Phoenix 2.6.0 \u8fc1\u79fb\u6307\u5357",description:"Phoenix 2.6.0 \u6709\u4e00\u4e9b\u91cd\u5927\u53d8\u5316\uff0c\u5176\u4e2d\u8bb8\u591a\u53d8\u5316\u53ef\u80fd\u5bfc\u81f4\u7528\u6237\u5728\u5347\u7ea7\u540e\u51fa\u73b0\u65e0\u6cd5\u542f\u52a8\u7684\u95ee\u9898\uff0c\u9075\u5faa\u4e0b\u9762\u7684\u5347\u7ea7\u6307\u5357\u80fd\u591f\u5e2e\u52a9",date:"2023-11-10T00:00:00.000Z",formattedDate:"2023\u5e7411\u670810\u65e5",tags:[{label:"Phoenix",permalink:"/blog/tags/phoenix"},{label:"Migration",permalink:"/blog/tags/migration"},{label:"Guide",permalink:"/blog/tags/guide"}],readingTime:11.88,hasTruncateMarker:!0,authors:[{name:"jingzhang.chen",title:"Maintainer",url:"https://github.com/roiocam",imageURL:"https://avatars.githubusercontent.com/u/26020358?v=4",key:"andychen"}],frontMatter:{slug:"2.6.x-migration-guide",title:"Phoenix 2.6.0 \u8fc1\u79fb\u6307\u5357",authors:"andychen",tags:["Phoenix","Migration","Guide"]},unlisted:!1,prevItem:{title:"EventPublish \u7684\u56de\u6eaf\u548c\u53bb\u91cd",permalink:"/blog/event-publish-backtrack"},nextItem:{title:"Phoenix 2.6.x Release",permalink:"/blog/2.6.x-release"}},d={authorsImageUrls:[void 0]},u=[{value:"\u4e00. API \u53d8\u52a8",id:"\u4e00-api-\u53d8\u52a8",level:3},{value:"1. PhoenixClient",id:"1-phoenixclient",level:4},{value:"2. SourceCollect",id:"2-sourcecollect",level:4},{value:"\u4e8c. \u6570\u636e\u5e93\u8868\u7ed3\u6784\u53d8\u52a8",id:"\u4e8c-\u6570\u636e\u5e93\u8868\u7ed3\u6784\u53d8\u52a8",level:3},{value:"\u4e09. \u76d1\u63a7\u65b9\u5f0f\u53d8\u52a8",id:"\u4e09-\u76d1\u63a7\u65b9\u5f0f\u53d8\u52a8",level:3},{value:"\u56db. Scala \u7248\u672c\u5347\u7ea7",id:"\u56db-scala-\u7248\u672c\u5347\u7ea7",level:3},{value:"\u4e94. Kafka \u7248\u672c\u5347\u7ea7",id:"\u4e94-kafka-\u7248\u672c\u5347\u7ea7",level:3},{value:"5.1 \u6392\u9664 Phoenix \u4f9d\u8d56\u4e2d\u7684 Kafka \u7248\u672c",id:"51-\u6392\u9664-phoenix-\u4f9d\u8d56\u4e2d\u7684-kafka-\u7248\u672c",level:4},{value:"5.2 \u5728\u4f9d\u8d56 Phoenix \u4e0a\u8ff0\u5305\u7684\u9879\u76ee\u4e2d\u624b\u52a8\u5f15\u5165\u6307\u5b9a\u7248\u672c Kafka-Client",id:"52-\u5728\u4f9d\u8d56-phoenix-\u4e0a\u8ff0\u5305\u7684\u9879\u76ee\u4e2d\u624b\u52a8\u5f15\u5165\u6307\u5b9a\u7248\u672c-kafka-client",level:4},{value:"5.3 \u66f4\u6362 MQ \u6d88\u8d39\u6a21\u5f0f",id:"53-\u66f4\u6362-mq-\u6d88\u8d39\u6a21\u5f0f",level:4},{value:"\u516d. \u5b9e\u4f53\u805a\u5408\u6839\u6ce8\u89e3\u53d8\u5316",id:"\u516d-\u5b9e\u4f53\u805a\u5408\u6839\u6ce8\u89e3\u53d8\u5316",level:3},{value:"\u4e03. \u4e8b\u52a1\u805a\u5408\u6839\u6ce8\u89e3\u53d8\u5316",id:"\u4e03-\u4e8b\u52a1\u805a\u5408\u6839\u6ce8\u89e3\u53d8\u5316",level:3},{value:"\u516b. EventStore \u8868\u7ed3\u6784\u53d8\u5316",id:"\u516b-eventstore-\u8868\u7ed3\u6784\u53d8\u5316",level:3},{value:"\u4e5d. \u4e8b\u52a1\u805a\u5408\u6839\u589e\u52a0\u6821\u9a8c",id:"\u4e5d-\u4e8b\u52a1\u805a\u5408\u6839\u589e\u52a0\u6821\u9a8c",level:3}];function p(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Phoenix 2.6.0 \u6709\u4e00\u4e9b\u91cd\u5927\u53d8\u5316\uff0c\u5176\u4e2d\u8bb8\u591a\u53d8\u5316\u53ef\u80fd\u5bfc\u81f4\u7528\u6237\u5728\u5347\u7ea7\u540e\u51fa\u73b0\u65e0\u6cd5\u542f\u52a8\u7684\u95ee\u9898\uff0c\u9075\u5faa\u4e0b\u9762\u7684\u5347\u7ea7\u6307\u5357\u80fd\u591f\u5e2e\u52a9\n\u7528\u6237\u5e73\u6ed1\u5347\u7ea7\u3002"}),"\n"]}),"\n","\n",(0,t.jsx)(n.p,{children:"\u5b98\u65b9\u516c\u5f00\u7684 Github \u4ed3\u5e93\u4e2d\uff0c\u4e5f\u6709\u5347\u7ea7\u5230 2.6.0 \u7684 Merge Request \u53ef\u4ee5\u53c2\u8003\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u4e0d\u5347\u7ea7 Scala \u7248\u672c\uff1a",(0,t.jsx)(n.a,{href:"https://github.com/PhoenixIQ/phoenix-samples/pull/38",children:"https://github.com/PhoenixIQ/phoenix-samples/pull/38"})]}),"\n",(0,t.jsxs)(n.li,{children:["\u5347\u7ea7 Scala \u7248\u672c + \u589e\u52a0\u7247\u6bb5\u805a\u5408\u6839\u6848\u4f8b\uff1a",(0,t.jsx)(n.a,{href:"https://github.com/PhoenixIQ/phoenix-samples/pull/37",children:"https://github.com/PhoenixIQ/phoenix-samples/pull/37"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"\u4e00-api-\u53d8\u52a8",children:"\u4e00. API \u53d8\u52a8"}),"\n",(0,t.jsx)(n.h4,{id:"1-phoenixclient",children:"1. PhoenixClient"}),"\n",(0,t.jsx)(n.p,{children:"PhoenixClient \u73b0\u5728\u9700\u8981\u624b\u52a8\u6307\u5b9a RPC \u8fd4\u56de\u7684\u7ed3\u679c\u7c7b\u578b, \u793a\u4f8b\u53d8\u52a8\u4ee3\u7801\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-diff",children:'        public String allocate(String account, double amt, String allocateNumber) {\n                AccountAllocateCmd cmd = new AccountAllocateCmd(account, amt, allocateNumber);\n-               Future<RpcResult> future = phoenixClient.send(cmd, accountTopic, "");\n+               Future<RpcResult<String>> future = phoenixClient.send(cmd, accountTopic, "");\n                try {\n                        RpcResult result = future.get(10, TimeUnit.SECONDS);\n                        return result.getMessage();\n'})}),"\n",(0,t.jsxs)(i.Z,{children:[(0,t.jsx)(l.Z,{value:"2.6.0",label:"2.6.0",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"public interface IPhoenixClient {\n  /**\n   * Client \u7aef\u5f02\u6b65\u53d1\u9001\u63a5\u53e3. \u56de\u590d\u5230\u6307\u5b9a topic\n   *\n   * @param msg rpc\u8c03\u7528\u6d88\u606f\n   * @param targetTopic \u63a5\u6536\u547d\u4ee4\u7684\u670d\u52a1 Topic\n   * @param sourceTopic \u63a5\u6536\u56de\u590d\u7684\u54cd\u5e94\u670d\u52a1 Topic\n   * @param requestId \u8bf7\u6c42ID\n   */\n  MessageMetaData sendNoReply(\n          Object msg, String targetTopic, String sourceTopic, String requestId);\n\n  /**\n   * Client \u7aef\u5f02\u6b65\u53d1\u9001\u63a5\u53e3. \u4e0d\u9700\u8981\u56de\u590d\n   *\n   * @param msg rpc\u8c03\u7528\u6d88\u606f\n   * @param targetTopic \u76ee\u7684\u5730 Topic\n   * @param requestId \u8bf7\u6c42ID\n   */\n  MessageMetaData sendNoReply(Object msg, String targetTopic, String requestId);\n}\n"})})}),(0,t.jsx)(l.Z,{value:"2.5.x",label:"2.5.x",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"public interface IPhoenixClient {\n  /**\n   * Client \u7aef\u5f02\u6b65\u53d1\u9001\u63a5\u53e3. \u56de\u590d\u5230\u6307\u5b9a topic\n   *\n   * @param msg rpc\u8c03\u7528\u6d88\u606f\n   * @param targetTopic \u63a5\u6536\u547d\u4ee4\u7684\u670d\u52a1 Topic\n   * @param sourceTopic \u63a5\u6536\u56de\u590d\u7684\u54cd\u5e94\u670d\u52a1 Topic\n   * @param requestId \u8bf7\u6c42ID\n   */\n  void sendNoReply(\n          Object msg, String targetTopic, String sourceTopic, String requestId);\n\n  /**\n   * Client \u7aef\u5f02\u6b65\u53d1\u9001\u63a5\u53e3. \u4e0d\u9700\u8981\u56de\u590d\n   *\n   * @param msg rpc\u8c03\u7528\u6d88\u606f\n   * @param targetTopic \u76ee\u7684\u5730 Topic\n   * @param requestId \u8bf7\u6c42ID\n   */\n  void sendNoReply(Object msg, String targetTopic, String requestId);\n}\n"})})})]}),"\n",(0,t.jsx)(n.h4,{id:"2-sourcecollect",children:"2. SourceCollect"}),"\n",(0,t.jsx)(n.p,{children:"\u4e00\u4e2a\u793a\u4f8b\u7684\u4fee\u6539\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-diff",children:" class SelfSerializeSchema implements SourceCollect {\n\n     @Override\n-    public List<CollectResult> collect(Records records, CollectMetaData collectMetaData) {\n+    public List<CollectResult> collect(Records records, CollectMetaDataQuery collectMetaData) {\n"})}),"\n",(0,t.jsxs)(i.Z,{children:[(0,t.jsx)(l.Z,{value:"2.6.0",label:"2.6.0",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"public interface SourceCollect {\n\n    /**\n     * \u8f6c\u6362\u6d88\u606f,\u5b9e\u73b0\u4e2d\u53ef\u4ee5\u81ea\u5b9a\u4e49\u53cd\u5e8f\u5217\u5316\uff0c\u5e7f\u64ad\u7b49\u5404\u79cd\u64cd\u4f5c\n     *\n     * <p>{@link CollectResult}\u662f\u4e3a\u4e86\u7528\u6237\u53ef\u4ee5\u81ea\u5b9a\u4e49\u4e00\u4e9b\u6d88\u606f\u5904\u7406\u8def\u5f84.\n     *\n     * @param records \u6e90\u6570\u636e\n     * @param collectMetaDataQuery \u8f6c\u6362\u6ce8\u518c\u6e90\u6570\u636e\u67e5\u8be2\u63a5\u53e3\n     * @return \u6d88\u606f\u5b9e\u4f53\u5217\u8868\n     */\n    List<CollectResult> collect(Records records, CollectMetaDataQuery collectMetaDataQuery);\n\n    /**\n     * \u662f\u5426\u652f\u6301\u6279\u91cf\u8f6c\u6362\u6d88\u606f.\n     *\n     * @return\n     */\n    default boolean supportBatchCollect() {\n        return false;\n    }\n\n    /**\n     * \u6279\u91cf\u8f6c\u6362\u6d88\u606f. \u4f7f\u7528\u6279\u91cf\u6d88\u606f\u8f6c\u6362\u65f6, \u5fc5\u987b\u4e25\u683c\u6309\u7167\u6e90\u6570\u636e\u96c6\u5408\u7684\u987a\u5e8f\u5904\u7406.\n     *\n     * @param recordsList \u6e90\u6570\u636e\u96c6\u5408\n     * @param collectMetaDataQuery \u8f6c\u6362\u6ce8\u518c\u6e90\u6570\u636e\u67e5\u8be2\u63a5\u53e3\n     * @return \u6d88\u606f\u5b9e\u4f53\u5217\u8868\n     */\n    default List<CollectResult> batchCollect(\n            List<Records> recordsList, CollectMetaDataQuery collectMetaDataQuery) {\n        return Collections.emptyList();\n    }\n}\n"})})}),(0,t.jsx)(l.Z,{value:"2.5.x",label:"2.5.x",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"public interface SourceCollect {\n\n  /**\n   * \u8f6c\u6362\u6d88\u606f,\u5b9e\u73b0\u4e2d\u53ef\u4ee5\u81ea\u5b9a\u4e49\u53cd\u5e8f\u5217\u5316\uff0c\u5e7f\u64ad\u7b49\u5404\u79cd\u64cd\u4f5c\n   *\n   * <p>{@link CollectResult}\u662f\u4e3a\u4e86\u7528\u6237\u53ef\u4ee5\u81ea\u5b9a\u4e49\u4e00\u4e9b\u6d88\u606f\u5904\u7406\u8def\u5f84.\n   *\n   * @param records \u6e90\u6570\u636e\n   * @param collectMetaData \u8f6c\u6362\u6ce8\u518c\u6e90\u6570\u636e\n   * @return \u6d88\u606f\u5b9e\u4f53\u5217\u8868\n   */\n  List<CollectResult> collect(Records records, CollectMetaData collectMetaData);\n}\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"\u4e8c-\u6570\u636e\u5e93\u8868\u7ed3\u6784\u53d8\u52a8",children:"\u4e8c. \u6570\u636e\u5e93\u8868\u7ed3\u6784\u53d8\u52a8"}),"\n",(0,t.jsxs)(i.Z,{children:[(0,t.jsx)(l.Z,{value:"2.6.0",label:"2.6.0",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"create table if not exists event_store\n(\n    aggregate_root_type varchar(255)                              not null,\n    aggregate_id        varchar(255)                              not null,\n    version             bigint(19)                                not null,\n    idempotent_id       varchar(128)                              not null,\n    event_content       longblob                                  null,\n    command_class_name  varchar(256) default ''                   null,\n    create_time         timestamp(3) default CURRENT_TIMESTAMP(3) null,\n    primary key (aggregate_id, version),\n    constraint event_store_cmd_id_idx\n        unique (idempotent_id)\n);\n\ncreate index idx_create_time\n    on event_store (create_time);\n\n"})})}),(0,t.jsx)(l.Z,{value:"2.5.x",label:"2.5.x",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"create table if not exists event_store\n(\n    aggregate_root_type varchar(255)                              not null,\n    aggregate_id        varchar(255)                              not null,\n    version             bigint(19)                                not null,\n    idempotent_id       varchar(128)                              not null,\n    event_content       longblob                                  null,\n    create_time         timestamp(3) default CURRENT_TIMESTAMP(3) null,\n    primary key (aggregate_id, version),\n    constraint event_store_cmd_id_idx\n        unique (idempotent_id)\n);\n\ncreate index idx_create_time\non event_store (create_time);\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"\u4e09-\u76d1\u63a7\u65b9\u5f0f\u53d8\u52a8",children:"\u4e09. \u76d1\u63a7\u65b9\u5f0f\u53d8\u52a8"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728 2.6.0 \u7248\u672c\u62bd\u8c61 Phoenix APM \u57cb\u70b9\u6a21\u5757\u540e\uff0c\u7528\u6237\u9700\u8981",(0,t.jsx)(n.strong,{children:"\u9009\u62e9\u5e76\u4e3b\u52a8\u5f15\u5165"}),"\u57cb\u70b9\u6a21\u5757\u7684\u4f9d\u8d56:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"phoenix-telemetry-jmx"}),"\uff1a\u57fa\u4e8e JMX \u7684\u4ee3\u7801\u57cb\u70b9\uff08\u5982\u540c2.5.X \u53ca\u4e4b\u524d\uff09"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"phoenix-telemetry-otel"}),"\uff1a\u57fa\u4e8e OpenTelemetry \u7684\u4ee3\u7801\u57cb\u70b9\uff0c\u5bfc\u51fa\u6307\u6807\u7684\u65b9\u5f0f\u4e0d\u540c\uff0c\u8bf7\u53c2\u8003\u76d1\u63a7\u6587\u6863\uff1a",(0,t.jsx)(n.a,{href:"/docs/phoenix-console/phoenix-console-system-monitor#exporter",children:"\u914d\u7f6e\u6307\u6807\u5bfc\u51fa\u5668"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-diff",children:"+        <dependency>\n+            <groupId>com.iquantex</groupId>\n+            <artifactId>phoenix-telemetry-jmx</artifactId>\n+            <version>${phoenix.version}</version>\n+        </dependency>\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u56db-scala-\u7248\u672c\u5347\u7ea7",children:"\u56db. Scala \u7248\u672c\u5347\u7ea7"}),"\n",(0,t.jsx)(n.p,{children:"\u5728 2.6.0 \u7248\u672c\u4e2d, Phoenix \u5347\u7ea7\u4e86\u90e8\u5206\u4f9d\u8d56\u7684\u540c\u65f6\u5347\u7ea7\u4e86 Scala \u7248\u672c(2.13.11), \u5e76\u652f\u6301\u53d1\u5e03\u591a Scala \u7248\u672c\u53d1\u5e03, \u7528\u6237\u53ef\u901a\u8fc7\u5f15\u5165\u4f9d\u8d56\u4e2d\u9644\u52a0\u540e\u7f00\u7684\u65b9\u5f0f\u9009\u62e9 scala \u7248\u672c\uff0c\u76ee\u524d\u4f9d\u8d56 scala \u5e76\u652f\u6301 2.12 \u7248\u672c\u7684\u6a21\u5757\u5982\u4e0b\uff1a\uff08\u4f7f\u7528 2.13 \u7248\u672c\u5219\u65e0\u9700\u663e\u5f0f\u6307\u5b9a scala \u540e\u7f00\uff09"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u5176\u4f59\u672a\u6307\u5b9a\u6a21\u5757\u65e0\u9700\u6307\u5b9a scala \u7248\u672c."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-log",children:"[INFO] phoenix-client-starter_2.12                                        [jar]\n[INFO] phoenix-cluster-core_2.12                                          [jar]\n[INFO] phoenix-cluster-nacos_2.12                                         [jar]\n[INFO] phoenix-cluster-consul_2.12                                        [jar]\n[INFO] phoenix-cluster-eureka_2.12                                        [jar]\n[INFO] phoenix-console_2.12                                               [jar]\n[INFO] phoenix-dgc_2.12                                                   [jar]\n[INFO] phoenix-distributed-data_2.12                                      [jar]\n[INFO] phoenix-distributed-data-starter_2.12                              [jar]\n[INFO] phoenix-event-publish_2.12                                         [jar]\n[INFO] phoenix-event-publish-starter_2.12                                 [jar]\n[INFO] phoenix-eventstore-jdbc_2.12                                       [jar]\n[INFO] phoenix-kafka-extend-starter_2.12                                  [jar]\n[INFO] phoenix-server_2.12                                                [jar]\n[INFO] phoenix-server-starter_2.12                                        [jar]\n[INFO] phoenix-starter-autoconfigure_2.12                                 [jar]\n[INFO] phoenix-stream-kafka_2.12                                          [jar]\n[INFO] phoenix-stream-kafka-starter_2.12                                  [jar]\n[INFO] phoenix-telemetry-jmx_2.12                                         [jar]\n[INFO] phoenix-telemetry-otel_2.12                                        [jar]\n[INFO] phoenix-transaction_2.12                                           [jar]\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5f53\u7528\u6237\u4e0d\u5e0c\u671b\u5347\u7ea7\u5230\u65b0\u7248\u7684 Scala \u65f6\uff0c\u9700\u8981\u53d8\u66f4\u4e00\u4e9b\u4f9d\u8d56\u7684\u5de5\u4ef6 ID\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-diff",children:"         <dependency>\n             <groupId>com.iquantex</groupId>\n-            <artifactId>phoenix-server-starter</artifactId>\n+            <artifactId>phoenix-server-starter_2.12</artifactId>\n         </dependency>\n         <dependency>\n             <groupId>com.iquantex</groupId>\n-            <artifactId>phoenix-transaction</artifactId>\n+            <artifactId>phoenix-transaction_2.12</artifactId>\n         </dependency>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u4e3a\u4e86\u907f\u514d\u540c\u65f6\u5f15\u5165\u4e24\u4e2a\u76f8\u540c\u4f9d\u8d56\u7684\u4e0d\u540c\u7248\u672c\u7684 ",(0,t.jsx)(n.code,{children:"NoClassFoundError"}),"(Scala \u4e8c\u8fdb\u5236\u654f\u611f) \u95ee\u9898, \u53ef\u5728\u7236\u5de5\u7a0b\u4e0b\u5f15\u5165\u4e0b\u9762\u7684\u63d2\u4ef6\u6765\u5e2e\u52a9\u68c0\u67e5 Scala \u7248\u672c\u51b2\u7a81"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u901a\u8fc7\u547d\u4ee4\uff1a",(0,t.jsx)(n.code,{children:"mvn clean compile validate"})," \u6267\u884c\u6821\u9a8c\uff0c\u4e0b\u9762\u7684\u6848\u4f8b\u7528\u4e8e\u6392\u67e5\u4e0d\u7b26\u5408 scala 2.13 \u5347\u7ea7\u7684\u4f9d\u8d56"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<build>\n    <plugins>\n        \x3c!-- make sure we don't have any _2.10, _2.11 or _2.12 dependencies when building\nfor Scala 2.13 --\x3e\n        <plugin>\n            <groupId>org.apache.maven.plugins</groupId>\n            <artifactId>maven-enforcer-plugin</artifactId>\n            <version>3.0.0-M3</version>\n            <executions>\n                <execution>\n                    <id>enforce-versions</id>\n                    <phase>validate</phase>\n                    <goals>\n                        <goal>enforce</goal>\n                    </goals>\n                    <configuration>\n                        <rules>\n                            <bannedDependencies>\n                                <excludes combine.children=\"append\">\n                                  <exclude>*:*_2.10</exclude>\n                                  <exclude>*:*_2.11</exclude>\n                                  <exclude>*:*_2.12</exclude>\n                                </excludes>\n                                <message>Scala 2.10/2.11/2.12 dependencies are not allowed for Scala 2.13\n                                    builds.\n                                    This can be caused by hard-coded scala versions, where the\n                                    'scala.binary.version' property should be used instead.\n                                </message>\n                            </bannedDependencies>\n                        </rules>\n                    </configuration>\n                </execution>\n            </executions>\n        </plugin>\n    </plugins>\n</build>\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u4e94-kafka-\u7248\u672c\u5347\u7ea7",children:"\u4e94. Kafka \u7248\u672c\u5347\u7ea7"}),"\n",(0,t.jsx)(n.p,{children:"\u5728 2.6.0 \u4e2d\uff0c\u6211\u4eec\u5c06\u4f9d\u8d56\u7684 Kafka-Clients \u7248\u672c\u5347\u7ea7\u5230\u4e86 2.4.1\uff0c\u5e76\u4e14\u5728\u9ed8\u8ba4\u6a21\u5f0f\u4e0b\u542f\u7528\u4e86\u65b0\u7248\u672c\u7684 API\uff0c\u5982\u7528\u6237\u4e0d\u5e0c\u671b\u5347\u7ea7\u5230\u6700\u65b0\u7248\u672c\u7684 Kafka\uff0c\u5219\u53ef\u4ee5\u9075\u5faa\u4ee5\u4e0b\u6b65\u9aa4\u56de\u9000 KafkaClient \u7248\u672c\uff1a"}),"\n",(0,t.jsx)(n.h4,{id:"51-\u6392\u9664-phoenix-\u4f9d\u8d56\u4e2d\u7684-kafka-\u7248\u672c",children:"5.1 \u6392\u9664 Phoenix \u4f9d\u8d56\u4e2d\u7684 Kafka \u7248\u672c"}),"\n",(0,t.jsx)(n.p,{children:"\u6839\u636e\u9879\u76ee\u6309\u9700\u6392\u9664\uff0c\u53ea\u6709\u4e0b\u9762\u4e09\u4e2a\u4f9d\u8d56\u9700\u8981\u6392\u9664\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-diff",children:"             <dependency>\n                 <groupId>com.iquantex</groupId>\n                 <artifactId>phoenix-server-starter_2.12</artifactId>\n                 <version>${phoenix.version}</version>\n+                <exclusions>\n+                    <exclusion>\n+                        <groupId>org.apache.kafka</groupId>\n+                        <artifactId>kafka-clients</artifactId>\n+                    </exclusion>\n+                </exclusions>\n             </dependency>\n             <dependency>\n                 <groupId>com.iquantex</groupId>\n                 <artifactId>phoenix-client-starter_2.12</artifactId>\n                 <version>${phoenix.version}</version>\n+                <exclusions>\n+                    <exclusion>\n+                        <groupId>org.apache.kafka</groupId>\n+                        <artifactId>kafka-clients</artifactId>\n+                    </exclusion>\n+                </exclusions>\n             </dependency>\n             <dependency>\n                 <groupId>com.iquantex</groupId>\n                 <artifactId>phoenix-core</artifactId>\n                 <version>${phoenix.version}</version>\n+                <exclusions>\n+                    <exclusion>\n+                        <groupId>org.apache.kafka</groupId>\n+                        <artifactId>kafka-clients</artifactId>\n+                    </exclusion>\n+                </exclusions>\n             </dependency>\n"})}),"\n",(0,t.jsx)(n.h4,{id:"52-\u5728\u4f9d\u8d56-phoenix-\u4e0a\u8ff0\u5305\u7684\u9879\u76ee\u4e2d\u624b\u52a8\u5f15\u5165\u6307\u5b9a\u7248\u672c-kafka-client",children:"5.2 \u5728\u4f9d\u8d56 Phoenix \u4e0a\u8ff0\u5305\u7684\u9879\u76ee\u4e2d\u624b\u52a8\u5f15\u5165\u6307\u5b9a\u7248\u672c Kafka-Client"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-diff",children:"     <dependencies>\n+        <dependency>\n+            <groupId>org.apache.kafka</groupId>\n+            <artifactId>kafka-clients</artifactId>\n+            <version>1.0.0</version>\n+        </dependency>\n         <dependency>\n             <groupId>com.iquantex</groupId>\n             <artifactId>phoenix-server-starter_2.12</artifactId>\n             <version>${phoenix.version}</version>\n+                <exclusions>\n+                    <exclusion>\n+                        <groupId>org.apache.kafka</groupId>\n+                        <artifactId>kafka-clients</artifactId>\n+                    </exclusion>\n+                </exclusions>\n         </dependency>\n"})}),"\n",(0,t.jsx)(n.h4,{id:"53-\u66f4\u6362-mq-\u6d88\u8d39\u6a21\u5f0f",children:"5.3 \u66f4\u6362 MQ \u6d88\u8d39\u6a21\u5f0f"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-diff",children:"   quantex:\n     phoenix:\n       server:    \n         mq:\n+          consumer-type: poll # \u589e\u52a0\u6b64\u914d\u7f6e\uff0c\u5e76\u4fee\u6539\u4e3a POLL\uff0c\u9ed8\u8ba4\u4e0b\u4e3a PUSH\n           type: kafka\n           address: 127.0.0.1:9092\n           subscribe:\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u516d-\u5b9e\u4f53\u805a\u5408\u6839\u6ce8\u89e3\u53d8\u5316",children:"\u516d. \u5b9e\u4f53\u805a\u5408\u6839\u6ce8\u89e3\u53d8\u5316"}),"\n",(0,t.jsx)(n.p,{children:"\u5728 2.6.0 \u4e2d\uff0c\u5b9e\u4f53\u805a\u5408\u6839\u65b0\u589e\u4e86\u4e00\u4e9b\u7279\u6027\uff0c\u56e0\u6b64\u5728\u6ce8\u89e3\u4e0a\u65b0\u589e\u4e86\u4e00\u4e9b\u5185\u5bb9"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-diff",children:'@EntityAggregateAnnotation(\n        aggregateRootType = "BankAccount",\n        idempotentSize = 100,\n        snapshotInterval = 100000,\n        numberOfRetainSnapshots = 2,\n+       allowPassivation = true,\n+       batchWeight = 200,\n+       runningMode= Mode.SYNC,\n+       bufferSize = 200,\n+       snapshotMode = SnapshotMode.EAGER\n)\npublic class BankAccountAggregate implements SelectiveSnapshot<SnapshotData> {\n\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u5bf9\u4e8e\u539f\u6709\u7528\u5feb\u7167\u5468\u671f\u6765\u5173\u95ed\u5feb\u7167\u529f\u80fd\u7684\u7528\u6237\uff0c\u5219\u9700\u8981\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u7684\u6539\u53d8\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-diff",children:'@EntityAggregateAnnotation(\n        aggregateRootType = "BankAccount",\n-       snapshotInterval = 0,\n+       snapshotMode = SnapshotMode.DISABLE\n)\npublic class BankAccountAggregate implements SelectiveSnapshot<SnapshotData> {\n\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u6b64\u5916\uff0c\u5b9e\u4f53\u805a\u5408\u6839\u6512\u6279\u5927\u5c0f\uff08\u6027\u80fd\u8c03\u4f18\u914d\u7f6e\uff09\u4e5f\u4ece\u72ec\u7acb\u7684 Spring \u914d\u7f6e\u4e2d\u8fc1\u79fb\u5230\u805a\u5408\u6839\u6ce8\u89e3\u914d\u7f6e\u4e2d\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-diff",children:"quantex:\n  phoenix:\n    server:\n-     performance:\n-       batch-process: 200\n+     entityAggregate:\n+       BankAccount: # {aggregateRootType}\n+         batchWeight: 200\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u4e03-\u4e8b\u52a1\u805a\u5408\u6839\u6ce8\u89e3\u53d8\u5316",children:"\u4e03. \u4e8b\u52a1\u805a\u5408\u6839\u6ce8\u89e3\u53d8\u5316"}),"\n",(0,t.jsx)(n.p,{children:"\u5728 2.6.0 \u4e2d\uff0c\u5bf9\u4e8b\u52a1\u805a\u5408\u6839\u7684\u914d\u7f6e\u8fdb\u884c\u91cd\u6784\uff0c\u589e\u52a0\u4e00\u4e9b\u8c03\u4f18\u914d\u7f6e\uff0c\u5e76\u5c06\u5927\u90e8\u5206\u8c03\u4f18\u914d\u7f6e\u653e\u5728\u6ce8\u89e3\u4e4b\u4e0a."}),"\n",(0,t.jsx)(n.p,{children:"\u91cd\u8bd5\u7b56\u7565\u914d\u7f6e\u4ece Spring \u914d\u7f6e\u4e2d\u8fc1\u79fb\u5230\u6ce8\u89e3\u4e2d\uff08\u4ecd\u7136\u662f\u9000\u907f\u7b56\u7565=0, \u56fa\u5b9a\u9891\u7387=1):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-diff",children:"quantex:\n  phoenix:\n    server:\n-     performance:\n-       transaction-retry-strategy: 0\n+     transactionAggregate:\n+       BankTransferSaga: # {aggregateRootType}\n+         retryStrategy: 0\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5fc3\u8df3\u914d\u7f6e\u65b0\u589e\u591a\u79cd\u7c7b\u578b, \u589e\u52a0\u6512\u6279\u914d\u7f6e\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-diff",children:'@TransactionAggregateAnnotation(\n    aggregateRootType = "BankTransferSaga",\n-   heartbeatInterval = 10\n+   heartbeatTickInterval = 3,\n+   heartbeatCheckInterval = 2,\n+   retryStrategy = RetryStrategy.EXPONENTIAL_BACKOFF,\n+   maxRetryNum = Integer.MAX_VALUE,\n+   batchWeight = 200\n)\npublic class BankTransferSaga implements Serializable {\n\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u516b-eventstore-\u8868\u7ed3\u6784\u53d8\u5316",children:"\u516b. EventStore \u8868\u7ed3\u6784\u53d8\u5316"}),"\n",(0,t.jsx)(n.p,{children:"\u5728 2.6.0 \u4e2d\uff0c\u4e3a\u4e86\u652f\u6301 Console \u6309\u547d\u4ee4\u67e5\u8be2\uff0c\u56e0\u6b64\u4fee\u6539\u4e86 DDL \u589e\u52a0\u4e86\u547d\u4ee4\u540d\u5b57\u6bb5\u7528\u4e8e\u67e5\u8be2\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u56e0\u6b64\u4ece 2.5.x \u5347\u7ea7\u7684\u7528\u6237\u53ef\u80fd\u4f1a\u9047\u5230\u5b57\u6bb5\u7f3a\u5931\u7684\u5f02\u5e38\uff0c\u6709\u4e24\u79cd\u89e3\u51b3\u65b9\u6848\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u8868\u91cd\u5efa","\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u5f7b\u5e95\u505c\u6b62\u5e94\u7528"}),"\n",(0,t.jsx)(n.li,{children:"\u4ece\u6570\u636e\u5e93\u4e2d\u5220\u9664\u8868"}),"\n",(0,t.jsx)(n.li,{children:"\u91cd\u542f Phoenix \u5e94\u7528\uff0c\u901a\u8fc7 Phoenix \u7684\u542f\u52a8\u5efa\u8868\u91cd\u5efa"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"\u901a\u8fc7\u6570\u636e\u5e93 DDL \u4fee\u6539\u8868\u7ed3\u6784"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u4ee5\u4e0b\u662f\u7ecf\u8fc7\u9a8c\u8bc1\u7684\u5404\u6570\u636e\u5e93 DDL:"}),"\n",(0,t.jsxs)(i.Z,{children:[(0,t.jsx)(l.Z,{value:"MySQL",label:"MySQL",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-diff",children:"-- DDL\nCREATE TABLE event_store\n(\n    aggregate_root_type VARCHAR(255) NOT NULL,\n    aggregate_id        VARCHAR(255) NOT NULL,\n    version             BIGINT(19)   NOT NULL,\n    idempotent_id       VARCHAR(128) NOT NULL,\n    event_content       longblob,\n+   command_class_name  VARCHAR(256) DEFAULT '',\n    create_time         TIMESTAMP(3) DEFAULT current_timestamp(3),\n    constraint event_store_pk\n        PRIMARY KEY (aggregate_id, version)\n)\n-- \u8fc1\u79fb SQL\nALTER TABLE event_store ADD command_class_name VARCHAR(256) DEFAULT ''\n"})})}),(0,t.jsx)(l.Z,{value:"Oracle",label:"Oracle",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-diff",children:"-- DDL\nCREATE TABLE event_store\n(\n    aggregate_root_type VARCHAR2(255) NOT NULL,\n    aggregate_id        VARCHAR2(255) NOT NULL,\n    version             number(19)    NOT NULL,\n    idempotent_id       VARCHAR2(128) NOT NULL,\n    event_content       BLOB,\n+   command_class_name  VARCHAR(256) DEFAULT '',\n    create_time         TIMESTAMP(3) DEFAULT current_timestamp,\n    constraint event_store_pk\n        PRIMARY KEY (aggregate_id, version)\n)\n-- \u8fc1\u79fb SQL\nALTER TABLE EVENT_STORE ADD (command_class_name VARCHAR2(256) DEFAULT '');\n"})})}),(0,t.jsx)(l.Z,{value:"PostgresSQL",label:"PostgresSQL",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-diff",children:"-- DDL\nCREATE TABLE event_store\n(\n    aggregate_root_type VARCHAR(255) NOT NULL,\n    aggregate_id        VARCHAR(255) NOT NULL,\n    version             BIGINT       NOT NULL,\n    idempotent_id       VARCHAR(128) NOT NULL,\n    event_content       BYTEA,\n+   command_class_name  VARCHAR(256) DEFAULT '',\n    create_time         TIMESTAMP(3) DEFAULT current_timestamp(3),\n    constraint event_store_pk\n        PRIMARY KEY (aggregate_id, version)\n)\n-- \u8fc1\u79fb SQL\nALTER TABLE public.event_store ADD command_class_name  VARCHAR(256) DEFAULT ''\n"})})}),(0,t.jsx)(l.Z,{value:"H2",label:"H2",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-diff",children:"-- DDL\nCREATE TABLE event_store\n(\n    aggregate_root_type VARCHAR(255) NOT NULL,\n    aggregate_id        VARCHAR(255) NOT NULL,\n    version             BIGINT(19)   NOT NULL,\n    idempotent_id       VARCHAR(128) NOT NULL,\n    event_content       VARBINARY,\n+   command_class_name  VARCHAR(256) DEFAULT '',\n    create_time         TIMESTAMP(3) DEFAULT current_timestamp(3),\n    constraint event_store_pk\n        PRIMARY KEY (aggregate_id, version)\n)\n-- \u8fc1\u79fb SQL\nALTER TABLE event_store ADD command_class_name VARCHAR(256) DEFAULT ''\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"\u4e5d-\u4e8b\u52a1\u805a\u5408\u6839\u589e\u52a0\u6821\u9a8c",children:"\u4e5d. \u4e8b\u52a1\u805a\u5408\u6839\u589e\u52a0\u6821\u9a8c"}),"\n",(0,t.jsx)(n.p,{children:"\u539f\u6709\u7684\u4e8b\u52a1\u805a\u5408\u6839\u6821\u9a8c\u5e76\u4e0d\u5b8c\u5584\uff0c\u4e3a\u4e86\u89c4\u8303\u5316\u4ee3\u7801\uff0c\u4e8b\u52a1\u805a\u5408\u6839\u589e\u52a0\u4e86\u591a\u4e2a\u6821\u9a8c\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u4e8b\u52a1\u805a\u5408\u6839\u5165\u53e3(",(0,t.jsx)(n.code,{children:"@TransactionStart"}),") \u65b9\u6cd5\u5fc5\u987b\u4ee5 ",(0,t.jsx)(n.code,{children:"act"})," \u547d\u540d"]}),"\n",(0,t.jsxs)(n.li,{children:["\u4e8b\u52a1\u805a\u5408\u6839\u53ea\u5141\u8bb8\u6709\u4e00\u4e2a\u65e0\u53c2\u6570\uff0c\u540d\u4e3a ",(0,t.jsx)(n.code,{children:"onFinish"})," \u65b9\u6cd5\uff0c\u5e76\u4e14\u4ee5 ",(0,t.jsx)(n.code,{children:"TransactionFinishReturn"})," \u8fd4\u56de"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-diff",children:'    @TransactionStart\n-   public TransactionReturn on(Account.AccountTransferCmd cmd) {\n+   public TransactionReturn act(Account.AccountTransferCmd cmd) {\n        return TransactionReturn.builder().build();\n    }\n    \n    public TransactionFinishReturn onFinsish() {\n        return TransactionFinishReturn.builder()\n          .retMessage("not allowed null here")\n          .data(new ResultEvent())\n          .build();\n    }\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},85162:(e,n,a)=>{a.d(n,{Z:()=>l});a(67294);var t=a(86010);const r={tabItem:"tabItem_Ymn6"};var i=a(85893);function l(e){let{children:n,hidden:a,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,l),hidden:a,children:n})}},74866:(e,n,a)=>{a.d(n,{Z:()=>I});var t=a(67294),r=a(86010),i=a(12466),l=a(16550),c=a(20469),s=a(91980),o=a(67392),d=a(50012);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}(a);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function h(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:a}=e;const r=(0,l.k6)(),i=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,s._X)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function x(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,i=p(e),[l,s]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[o,u]=g({queryString:a,groupId:r}),[x,m]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,d.Nk)(a);return[r,(0,t.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:r}),f=(()=>{const e=o??x;return h({value:e,tabValues:i})?e:null})();(0,c.Z)((()=>{f&&s(f)}),[f]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),m(e)}),[u,m,i]),tabValues:i}}var m=a(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(85893);function j(e){let{className:n,block:a,selectedValue:t,selectValue:l,tabValues:c}=e;const s=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.o5)(),d=e=>{const n=e.currentTarget,a=s.indexOf(n),r=c[a].value;r!==t&&(o(n),l(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=s.indexOf(e.currentTarget)+1;n=s[a]??s[0];break}case"ArrowLeft":{const a=s.indexOf(e.currentTarget)-1;n=s[a]??s[s.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},n),children:c.map((e=>{let{value:n,label:a,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>s.push(e),onKeyDown:u,onClick:d,...i,className:(0,r.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function b(e){let{lazy:n,children:a,selectedValue:r}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function _(e){const n=x(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",f.tabList),children:[(0,v.jsx)(j,{...e,...n}),(0,v.jsx)(b,{...e,...n})]})}function I(e){const n=(0,m.Z)();return(0,v.jsx)(_,{...e,children:u(e.children)},String(n))}},11151:(e,n,a)=>{a.d(n,{Z:()=>c,a:()=>l});var t=a(67294);const r={},i=t.createContext(r);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);