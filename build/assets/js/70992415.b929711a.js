"use strict";(self.webpackChunkphoenix_website_next=self.webpackChunkphoenix_website_next||[]).push([[10302],{6629:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(85893),i=t(11151);const o={id:"phoenix-transaction-quickstart",title:"\u5feb\u901f\u5165\u95e8"},a=void 0,l={id:"phoenix-2.x/phoenix-transaction/phoenix-transaction-quickstart",title:"\u5feb\u901f\u5165\u95e8",description:"Phoenix\u6846\u67b6\u63d0\u4f9b\u4e86\u4e00\u4e9b\u5217 Phoenix-Starter \u53ef\u4ee5\u5e2e\u52a9\u7528\u6237\u5feb\u901f\u6784\u5efa\u5e94\u7528\u3002",source:"@site/versioned_docs/version-2.4.0/phoenix-2.x/03-phoenix-transaction/01-transaction-quickstart.md",sourceDirName:"phoenix-2.x/03-phoenix-transaction",slug:"/phoenix-2.x/phoenix-transaction/phoenix-transaction-quickstart",permalink:"/docs/2.4.0/phoenix-2.x/phoenix-transaction/phoenix-transaction-quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/PhoenixIQ/versioned_docs/version-2.4.0/phoenix-2.x/03-phoenix-transaction/01-transaction-quickstart.md",tags:[],version:"2.4.0",sidebarPosition:1,frontMatter:{id:"phoenix-transaction-quickstart",title:"\u5feb\u901f\u5165\u95e8"},sidebar:"docs",previous:{title:"\u914d\u7f6e\u8be6\u60c5",permalink:"/docs/2.4.0/phoenix-2.x/phoenix-core/phoenix-core-config"},next:{title:"\u4e8b\u52a1\u805a\u5408\u6839",permalink:"/docs/2.4.0/phoenix-2.x/phoenix-transaction/phoenix-transaction-aggregate"}},s={},c=[{value:"maven\u4f9d\u8d56",id:"maven\u4f9d\u8d56",level:3},{value:"\u6848\u4f8b\u5de5\u7a0b",id:"\u6848\u4f8b\u5de5\u7a0b",level:2},{value:"\u67b6\u6784\u56fe",id:"\u67b6\u6784\u56fe",level:3},{value:"\u6d88\u606f\u5b9a\u4e49",id:"\u6d88\u606f\u5b9a\u4e49",level:3},{value:"command/event\u5b9a\u4e49",id:"commandevent\u5b9a\u4e49",level:4},{value:"\u4e8b\u52a1\u670d\u52a1",id:"\u4e8b\u52a1\u670d\u52a1",level:5},{value:"\u8d26\u6237\u670d\u52a1",id:"\u8d26\u6237\u670d\u52a1",level:5},{value:"\u4ed3\u50a8\u670d\u52a1",id:"\u4ed3\u50a8\u670d\u52a1",level:5},{value:"\u5b9a\u4e49\u805a\u5408\u6839",id:"\u5b9a\u4e49\u805a\u5408\u6839",level:3},{value:"\u5b9a\u4e49\u4e8b\u52a1\u805a\u5408\u6839",id:"\u5b9a\u4e49\u4e8b\u52a1\u805a\u5408\u6839",level:4},{value:"\u5b9a\u4e49\u5b9e\u4f53\u805a\u5408\u6839",id:"\u5b9a\u4e49\u5b9e\u4f53\u805a\u5408\u6839",level:4},{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u670d\u52a1\u8c03\u7528\u8005",id:"\u670d\u52a1\u8c03\u7528\u8005",level:2},{value:"maven\u4f9d\u8d56",id:"maven\u4f9d\u8d56-1",level:3},{value:"\u8c03\u7528\u670d\u52a1",id:"\u8c03\u7528\u670d\u52a1",level:3},{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6-1",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Phoenix"}),"\u6846\u67b6\u63d0\u4f9b\u4e86\u4e00\u4e9b\u5217 Phoenix-Starter \u53ef\u4ee5\u5e2e\u52a9\u7528\u6237\u5feb\u901f\u6784\u5efa\u5e94\u7528\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"maven\u4f9d\u8d56",children:"maven\u4f9d\u8d56"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:"<dependency>\n    <groupId>com.iquantex</groupId>\n    <artifactId>phoenix-server-starter</artifactId>\n    <version>2.4.0</version>\n</dependency>\n\n<dependency>\n    <groupId>com.iquantex</groupId>\n    <artifactId>phoenix-transaction</artifactId>\n    <version>2.4.0</version>\n</dependency>\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u6848\u4f8b\u5de5\u7a0b",children:"\u6848\u4f8b\u5de5\u7a0b"}),"\n",(0,r.jsxs)(n.p,{children:["phoenix\u4e8b\u52a1\u805a\u5408\u6839\u53ef\u4ee5\u5bf9\u5b9e\u4f53\u805a\u5408\u6839\u63d0\u4f9b\u7684",(0,r.jsx)(n.code,{children:"TCC"}),"\u548c",(0,r.jsx)(n.code,{children:"SAGA"}),"\u63a5\u53e3\u7075\u6d3b\u7ec4\u88c5\u3002\u8be5\u6848\u4f8b\u4f7f\u7528\u7684\u662f",(0,r.jsx)(n.code,{children:"TCC+Saga"}),"\u6a21\u5f0f\u3002\u66f4\u591a\u7684\u4e8b\u52a1\u6a21\u5f0f\u8bf7\u53c2\u89c1\uff1a",(0,r.jsx)(n.a,{href:"https://github.com/PhoenixIQ/phoenix-samples/tree/master/shopping",children:"PhoenixIQ/phoenix-samples/shopping"})]}),"\n",(0,r.jsx)(n.p,{children:"\u8d2d\u4e70\u5546\u54c1\u662f\u5f88\u5e38\u89c1\u7684\u4e1a\u52a1\u573a\u666f\uff0c\u4e00\u822c\u6d89\u53ca\u8d2d\u4e70\u65b9\u8d26\u6237\u6263\u51cf\uff0c\u4ee5\u53ca\u5546\u5bb6\u5e93\u5b58\u6263\u51cf\uff0c\u548c\u8ba2\u5355\u751f\u6210\u3002\u8be5\u6848\u4f8b\u4e3a\u4e86\u7b80\u5316\u5b9e\u73b0\uff0c\u4e0d\u751f\u6210\u8ba2\u5355\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u6574\u4e2a\u4e1a\u52a1\u903b\u8f91\u75312\u4e2a\u805a\u5408\u6839(\u5fae\u670d\u52a1)\u6784\u6210:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u4ed3\u50a8\u670d\u52a1: \u5bf9\u7ed9\u5b9a\u7684\u5546\u54c1\u6263\u9664\u4ed3\u50a8\u6570\u91cf\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u8d26\u6237\u670d\u52a1: \u4ece\u7528\u6237\u8d26\u6237\u4e2d\u6263\u9664\u4f59\u989d\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u67b6\u6784\u56fe",children:"\u67b6\u6784\u56fe"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"show",src:t(87572).Z+"",width:"573",height:"288"})}),"\n",(0,r.jsx)(n.h3,{id:"\u6d88\u606f\u5b9a\u4e49",children:"\u6d88\u606f\u5b9a\u4e49"}),"\n",(0,r.jsxs)(n.p,{children:["\u805a\u5408\u6839\u63a5\u6536",(0,r.jsx)(n.strong,{children:"Command"}),"\u4ea7\u751f",(0,r.jsx)(n.strong,{children:"Event"}),"\uff0c",(0,r.jsx)(n.strong,{children:"Command"}),"\u548c",(0,r.jsx)(n.strong,{children:"Event"}),"\u7c7b\u9700\u8981\u5b9e\u73b0",(0,r.jsx)(n.strong,{children:"Serializable"}),"\u63a5\u53e3"]}),"\n",(0,r.jsx)(n.h4,{id:"commandevent\u5b9a\u4e49",children:"command/event\u5b9a\u4e49"}),"\n",(0,r.jsxs)(n.p,{children:["Phoenix\u652f\u6301",(0,r.jsx)(n.code,{children:"protostuff"}),"\u548c",(0,r.jsx)(n.code,{children:"javaBean"}),"\u534f\u8bae\u8fdb\u884c\u5e8f\u5217\u5316\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u914d\u7f6e\u8fdb\u884c\u6307\u5b9a\uff0c\u8bbe\u5b9a\u503c\u5206\u522b\u4e3a:",(0,r.jsx)(n.code,{children:"proto_stuff"}),"\u548c",(0,r.jsx)(n.code,{children:"java"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"quantex.phoenix.server.default-serializer: java\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u91cc\u4f7f\u7528",(0,r.jsx)(n.code,{children:"javaBean"}),"\u5e8f\u5217\u5316\u534f\u8bae\u8fdb\u884c\u793a\u8303."]}),"\n",(0,r.jsx)(n.h5,{id:"\u4e8b\u52a1\u670d\u52a1",children:"\u4e8b\u52a1\u670d\u52a1"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"@Getter\n@AllArgsConstructor\npublic class BuyGoodsCmd implements Serializable {\n    private static final long serialVersionUID = -8667685124103764667L;\n    private String            accountCode;\n    private String            goodsCode;\n    private long              qty;\n    private double            price;\n}\n"})}),"\n",(0,r.jsx)(n.h5,{id:"\u8d26\u6237\u670d\u52a1",children:"\u8d26\u6237\u670d\u52a1"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"@Getter\n@AllArgsConstructor\npublic class AccountTryCmd implements Serializable {\n    private static final long serialVersionUID = 4778468915465985552L;\n    private String accountCode;\n    private double frozenAmt;\n}\n\n@Getter\n@AllArgsConstructor\npublic class AccountConfirmCmd implements Serializable {\n    private static final long serialVersionUID = 6915539313674995272L;\n    private String accountCode;\n    private double frozenAmt;\n}\n\n@Getter\n@AllArgsConstructor\npublic class AccountCancelCmd implements Serializable {\n    private static final long serialVersionUID = 3086192070311956483L;\n    private String accountCode;\n    private double frozenAmt;\n}\n\n@Getter\n@Setter\n@AllArgsConstructor\npublic class AccountTryOkEvent implements Serializable {\n    private static final long serialVersionUID = 1525408241428571363L;\n    private String accountCode;\n    private double frozenAmt;\n}\n\n@Getter\n@Setter\n@AllArgsConstructor\npublic class AccountTryFailEvent implements Serializable {\n    private static final long serialVersionUID = -8352616962272592136L;\n    private String accountCode;\n    private double frozenAmt;\n    private String remark;\n}\n\n@Getter\n@Setter\n@AllArgsConstructor\npublic class AccountConfirmOkEvent implements Serializable {\n    private static final long serialVersionUID = -6789245872360028227L;\n    private String accountCode;\n    private double frozenAmt;\n}\n\n@Getter\n@Setter\n@AllArgsConstructor\npublic class AccountCancelOkEvent implements Serializable {\n    private static final long serialVersionUID = -1017410771260579937L;\n    private String accountCode;\n    private double frozenAmt;\n}\n\n"})}),"\n",(0,r.jsx)(n.h5,{id:"\u4ed3\u50a8\u670d\u52a1",children:"\u4ed3\u50a8\u670d\u52a1"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"\n@Getter\n@AllArgsConstructor\npublic class GoodsSellCmd implements Serializable {\n    private static final long serialVersionUID = -4615713736312293797L;\n    private String goodsCode;\n    private long   qty;\n}\n\n@Getter\n@AllArgsConstructor\npublic class GoodsSellCompensateCmd implements Serializable {\n    private static final long serialVersionUID = -1797830080849363235L;\n    private String goodsCode;\n    private long   qty;\n}\n\n@Getter\n@Setter\n@AllArgsConstructor\npublic class GoodsSellOkEvent implements Serializable {\n    private static final long serialVersionUID = 873406977804359197L;\n    private String goodsCode;\n    private long   qty;\n}\n\n@Getter\n@Setter\n@AllArgsConstructor\npublic class GoodsSellFailEvent implements Serializable {\n    private static final long serialVersionUID = 4825942818190006297L;\n    private String goodsCode;\n    private long   qty;\n    private String remark;\n}\n\n@Getter\n@Setter\n@AllArgsConstructor\npublic class GoodsSellCompensateOkEvent implements Serializable {\n    private static final long serialVersionUID = 3256345453720913064L;\n    private String goodsCode;\n    private long   qty;\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u5b9a\u4e49\u805a\u5408\u6839",children:"\u5b9a\u4e49\u805a\u5408\u6839"}),"\n",(0,r.jsx)(n.h4,{id:"\u5b9a\u4e49\u4e8b\u52a1\u805a\u5408\u6839",children:"\u5b9a\u4e49\u4e8b\u52a1\u805a\u5408\u6839"}),"\n",(0,r.jsxs)(n.p,{children:["\u4e8b\u52a1\u805a\u5408\u6839\u5728\u63a5\u6536\u5230\u8d2d\u4e70\u547d\u4ee4\u65f6\uff0c\u5206\u522b\u8fd4\u56de",(0,r.jsx)(n.code,{children:"\u8d26\u6237\u670d\u52a1TCC"}),"\u548c",(0,r.jsx)(n.code,{children:"\u4ed3\u50a8\u670d\u52a1Saga"}),"\u7684\u547d\u4ee4\u7ed9\u5230\u4e8b\u52a1\u72b6\u6001\u673a\uff0c\u4e8b\u52a1\u72b6\u6001\u673a\u4f1a\u53d1\u9001\u5e76\u534f\u8c03\u9a71\u52a8\u8fbe\u5230\u6700\u7ec8\u72b6\u6001\u3002"]}),"\n",(0,r.jsx)(n.p,{children:'\u4e8b\u52a1\u805a\u5408\u6839\u53ef\u4ee5\u72ec\u7acb\u8fd0\u884c\uff0c\u4e5f\u53ef\u4ee5\u548c\u5b9e\u4f53\u805a\u5408\u6839\u4e00\u8d77\u8fd0\u884c\u3002\u72ec\u7acb\u8fd0\u884c\u7684\u60c5\u51b5\u4e0b\uff0c\u8bbe\u7f6etargetTopic\u4e3a\u5b9e\u4f53\u805a\u5408\u6839\u7684Topic\uff0c\u8fd9\u91cc\u4e3a\u4e86\u65b9\u4fbf\u5c31\u8bbe\u7f6e\u4e3a\u7a7a\u4e32""\u4ee3\u8868\u548c\u5b9e\u4f53\u805a\u5408\u6839\u96c6\u6210\u8fd0\u884c\u3002'}),"\n",(0,r.jsxs)(n.p,{children:["\u4e8b\u52a1\u805a\u5408\u6839\u7684\u5177\u4f53\u5b9a\u4e49\u89c4\u5219\u8bf7\u53c2\u8003 ",(0,r.jsx)(n.a,{href:"/docs/2.4.0/phoenix-2.x/phoenix-transaction/phoenix-transaction-aggregate",children:"\u4e8b\u52a1\u805a\u5408\u6839\u5b9a\u4e49"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'@TransactionAggregateAnnotation(aggregateRootType = "ShoppingAggregateSagaTcc")\npublic class ShoppingAggregateSagaTcc implements Serializable {\n    private static final long serialVersionUID = 7007603076743033374L;\n    private BuyGoodsCmd       request;\n    private String            remark           = "";\n\n    @TransactionStart\n    public TransactionReturn on(BuyGoodsCmd request) {\n        this.request = request;\n        double frozenAmt = request.getQty() * request.getPrice();\n        return TransactionReturn\n            .builder()\n            .addAction(\n                TccAction.builder().tryCmd(new AccountTryCmd(request.getAccountCode(), frozenAmt))\n                    .confirmCmd(new AccountConfirmCmd(request.getAccountCode(), frozenAmt))\n                    .cancelCmd(new AccountCancelCmd(request.getAccountCode(), frozenAmt)).targetTopic("")\n                    .subTransId(UUID.randomUUID().toString()).tryMaxRetryNum(2).confirmRetryNum(3).cancelRetryNum(3)\n                    .build())\n            .addAction(\n                SagaAction.builder().targetTopic("").tiCmd(new GoodsSellCmd(request.getGoodsCode(), request.getQty()))\n                    .ciCmd(new GoodsSellCompensateCmd(request.getGoodsCode(), request.getQty())).tiMaxRetryNum(2)\n                    .ciMaxRetryNum(2).subTransId(UUID.randomUUID().toString()).build()).build();\n    }\n\n    // ... on method\n}\n'})}),"\n",(0,r.jsx)(n.h4,{id:"\u5b9a\u4e49\u5b9e\u4f53\u805a\u5408\u6839",children:"\u5b9a\u4e49\u5b9e\u4f53\u805a\u5408\u6839"}),"\n",(0,r.jsxs)(n.p,{children:["\u5b9e\u4f53\u805a\u5408\u6839\u4e2d\u5bf9",(0,r.jsx)(n.strong,{children:"Command"}),"\u7684\u5904\u7406\u9700\u8981\u9075\u5faa SAGA\u6216TCC \u89c4\u8303\uff0c\u5177\u4f53\u7684\u5b9a\u4e49\u89c4\u5219\u53ef\u4ee5\u53c2\u8003 ",(0,r.jsx)(n.a,{href:"/docs/2.4.0/phoenix-2.x/phoenix-core/phoenix-core-entity-aggregate",children:"\u5b9e\u4f53\u805a\u5408\u6839\u5b9a\u4e49"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'@EntityAggregateAnnotation(aggregateRootType = "AccountAggregate")\npublic class AccountAggregate implements Serializable {\n    private static final long serialVersionUID = 1989248847513267951L;\n    private double            amt;\n    private double            frozenAmt;\n    \n    @CommandHandler(aggregateRootId = "accountCode")\n    public ActReturn act(AccountTryCmd cmd) {\n        if (amt - frozenAmt > cmd.getFrozenAmt()) {\n            return ActReturn.builder().retCode(RetCode.SUCCESS)\n                .event(new AccountTryOkEvent(cmd.getAccountCode(), cmd.getFrozenAmt())).build();\n        } else {\n            String retMessage = String.format("\u8d44\u91d1\u53ef\u7528\u4e0d\u8db3\uff0c\u5269\u4f59:%f, \u5f53\u524d\u9700\u8981\u51bb\u7ed3:%f", amt - frozenAmt, cmd.getFrozenAmt());\n            return ActReturn.builder().retCode(RetCode.FAIL).retMessage(retMessage)\n                .event(new AccountTryFailEvent(cmd.getAccountCode(), cmd.getFrozenAmt(), retMessage)).build();\n        }\n    }\n\n    public void on(AccountTryOkEvent event) {\n        frozenAmt += event.getFrozenAmt();\n    }\n\n    public void on(AccountTryFailEvent event) { }\n\n    @CommandHandler(aggregateRootId = "accountCode")\n    public ActReturn act(AccountConfirmCmd cmd) {\n        return ActReturn.builder().retCode(RetCode.SUCCESS)\n            .event(new AccountConfirmOkEvent(cmd.getAccountCode(), cmd.getFrozenAmt())).build();\n    }\n\n    public void on(AccountConfirmOkEvent event) {\n        amt -= event.getFrozenAmt();\n        frozenAmt -= event.getFrozenAmt();\n    }\n\n    @CommandHandler(aggregateRootId = "accountCode")\n    public ActReturn act(AccountCancelCmd cmd) {\n        return ActReturn.builder().retCode(RetCode.SUCCESS)\n            .event(new AccountCancelOkEvent(cmd.getAccountCode(), cmd.getFrozenAmt())).build();\n    }\n\n    public void on(AccountCancelOkEvent event) {\n        frozenAmt -= event.getFrozenAmt();\n    }\n}\n\n@EntityAggregateAnnotation(aggregateRootType = "GoodsTcc")\npublic class GoodsAggregate implements Serializable {\n    private static final long serialVersionUID = -6111851668488622895L;\n    private long              qty;\n    private long              frozenQty;\n\n    @CommandHandler(aggregateRootId = "goodsCode")\n    public ActReturn act(GoodsSellCmd cmd) {\n        if (cmd.getQty() < 0) {\n            throw new RuntimeException("\u6570\u4e0d\u80fd\u5c0f\u4e8e0");\n        }\n        if (qty > cmd.getQty()) {\n            return ActReturn.builder().retCode(RetCode.SUCCESS)\n                .event(new GoodsSellOkEvent(cmd.getGoodsCode(), cmd.getQty())).build();\n        } else {\n            String ret = String.format("\u4f59\u989d\u4e0d\u8db3\uff0c\u5269\u4f59:%d, \u5f53\u524d\u9700\u8981:%d", qty, cmd.getQty());\n            return ActReturn.builder().retCode(RetCode.FAIL).retMessage(ret)\n                .event(new GoodsSellFailEvent(cmd.getGoodsCode(), cmd.getQty(), ret)).build();\n        }\n    }\n\n    public void on(GoodsSellOkEvent event) {\n        qty -= event.getQty();\n    }\n\n    public void on(GoodsSellFailEvent event) { }\n\n    @CommandHandler(aggregateRootId = "goodsCode")\n    public ActReturn act(GoodsSellCompensateCmd cmd) {\n        return ActReturn.builder().retCode(RetCode.SUCCESS)\n            .event(new GoodsSellCompensateOkEvent(cmd.getGoodsCode(), cmd.getQty())).build();\n    }\n\n    public void on(GoodsSellCompensateOkEvent event) {\n        qty += event.getQty();\n    }\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"\u914d\u7f6e\u6587\u4ef6",children:"\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728",(0,r.jsx)(n.strong,{children:"Spring Boot"}),"\u914d\u7f6e\u6587\u4ef6\u4e2d\u589e\u52a0",(0,r.jsx)(n.strong,{children:"Phoenix"}),"\u7684\u76f8\u5173\u914d\u7f6e"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"quantex:\n  phoenix:\n    server:\n      name: ${spring.application.name}    # \u670d\u52a1\u540d\u79f0\n      package-name: com.iquantex.phoenix.samples.account # \u805a\u5408\u6839\u5305\u8def\u5f84\n      mq:\n        type: kafka                       # mq\u7c7b\u578b\n        address: 127.0.0.1:9092           # mq\u670d\u52a1\u5730\u5740\n        subscribe:\n          - topic: ${spring.application.name}\n      event-store:\n        driver-class-name: org.h2.Driver  # \u6570\u636e\u5e93\u9a71\u52a8\n        data-sources:\n          - url: jdbc:h2:file:./data/test;DB_CLOSE_DELAY=-1;DATABASE_TO_UPPER=FALSE;INIT=CREATE SCHEMA IF NOT EXISTS PUBLIC # \u6570\u636e\u5e93\u94fe\u63a5url\n            username: sa                  # \u6570\u636e\u5e93\u8d26\u6237\n            password:                     # \u6570\u636e\u5e93\u5bc6\u7801\n      default-serializer: java\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u670d\u52a1\u8c03\u7528\u8005",children:"\u670d\u52a1\u8c03\u7528\u8005"}),"\n",(0,r.jsx)(n.h3,{id:"maven\u4f9d\u8d56-1",children:"maven\u4f9d\u8d56"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:"<dependency>\n    <groupId>com.iquantex</groupId>\n    <artifactId>phoenix-client-starter</artifactId>\n    <version>2.4.0</version>\n</dependency>\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u8c03\u7528\u670d\u52a1",children:"\u8c03\u7528\u670d\u52a1"}),"\n",(0,r.jsxs)(n.p,{children:["\u589e\u52a0",(0,r.jsx)(n.code,{children:"phoenix-client-starter"}),"\u4f9d\u8d56\u542f\u52a8\u670d\u52a1\u540e",(0,r.jsx)(n.strong,{children:"Phoenix"}),"\u4f1a\u81ea\u52a8\u6ce8\u5165",(0,r.jsx)(n.strong,{children:"PhoenixClient"}),"\u7684Java Bean\uff0c\u53ef\u4ee5\u901a\u8fc7\u8c03\u7528",(0,r.jsx)(n.strong,{children:"PhoenixClient"}),"\u7684",(0,r.jsxs)(n.strong,{children:["send()",(0,r.jsx)(n.strong,{children:"\u65b9\u6cd5\u53d1\u9001"}),"Command"]}),"\u4fe1\u606f\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'@Slf4j\n@RestController("/goods")\npublic class GoodsController {\n\n  @Value("${spring.application.name}")\n  private String topic;\n\n  @Autowired\n  private PhoenixClient client;\n\n  @GetMapping("/buy")\n  public String buy(String helloId) throws ExecutionException, InterruptedException {\n    BuyGoodsCmd buyGoodsCmd = new BuyGoodsCmd("A1", "book", 1, 101.0);\n    Future<RpcResult> future = client.send(buyGoodsCmd, topic, "");\n    return future.get().getMessage();\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"\u914d\u7f6e\u6587\u4ef6-1",children:"\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"quantex:\n  phoenix:\n    client:\n      name: ${spring.application.name}-client\t# \u670d\u52a1\u540d\u79f0\n      mq:\n        type: kafka\t                            # mq\u7c7b\u578b\n        address: 127.0.0.1:9092                 # mq\u5730\u5740\uff1aembedded\u8868\u793a\u4f7f\u7528\u5185\u5b58kafka\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},87572:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/shopping-1-6fe3819c92f7b8105bffdecfc97a1643.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>a});var r=t(67294);const i={},o=r.createContext(i);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);