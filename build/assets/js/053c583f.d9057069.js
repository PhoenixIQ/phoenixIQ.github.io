"use strict";(self.webpackChunkphoenix_website_next=self.webpackChunkphoenix_website_next||[]).push([[58839],{92398:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var t=i(85893),a=i(11151);const r={id:"phoenix-transaction-aggregate",title:"\u4e8b\u52a1\u805a\u5408\u6839"},c=void 0,o={id:"phoenix-2.x/phoenix-transaction/phoenix-transaction-aggregate",title:"\u4e8b\u52a1\u805a\u5408\u6839",description:"Phoenix\u6846\u67b6\u63d0\u4f9b\u4e86\u4e8b\u52a1\u6a21\u5757\uff0c\u76ee\u524d\u652f\u6301\u7684\u4e8b\u52a1\u6a21\u5f0f\u6709SAGA\u4e0eTCC\u3002\u5728\u5b9a\u4e49\u4e8b\u52a1\u5904\u7406\u6a21\u578b\u65f6\uff0c\u4f60\u53ef\u4ee5\u7075\u6d3b\u914d\u7f6e\u8fd9\u4e24\u79cd\u4e8b\u52a1\u6a21\u5f0f\u3002\u672c\u7bc7\u5c06\u4ecb\u7ecd\u4e8b\u52a1\u805a\u5408\u6839\u7684\u5b9a\u4e49\u89c4\u8303\u3002",source:"@site/versioned_docs/version-2.4.0/phoenix-2.x/03-phoenix-transaction/02-transaction-aggregate.md",sourceDirName:"phoenix-2.x/03-phoenix-transaction",slug:"/phoenix-2.x/phoenix-transaction/phoenix-transaction-aggregate",permalink:"/docs/2.4.0/phoenix-2.x/phoenix-transaction/phoenix-transaction-aggregate",draft:!1,unlisted:!1,editUrl:"https://github.com/PhoenixIQ/versioned_docs/version-2.4.0/phoenix-2.x/03-phoenix-transaction/02-transaction-aggregate.md",tags:[],version:"2.4.0",sidebarPosition:2,frontMatter:{id:"phoenix-transaction-aggregate",title:"\u4e8b\u52a1\u805a\u5408\u6839"},sidebar:"docs",previous:{title:"\u5feb\u901f\u5165\u95e8",permalink:"/docs/2.4.0/phoenix-2.x/phoenix-transaction/phoenix-transaction-quickstart"},next:{title:"\u4e8b\u52a1\u6a21\u5f0f",permalink:"/docs/2.4.0/phoenix-2.x/phoenix-transaction/phoenix-transaction-module"}},s={},l=[{value:"maven\u4f9d\u8d56",id:"maven\u4f9d\u8d56",level:2},{value:"\u4e8b\u52a1\u805a\u5408\u6839",id:"\u4e8b\u52a1\u805a\u5408\u6839",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:4},{value:"\u4e8b\u52a1\u5165\u53e3",id:"\u4e8b\u52a1\u5165\u53e3",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801-1",level:4},{value:"TransactionReturn",id:"transactionreturn",level:4},{value:"TransactionAction",id:"transactionaction",level:4},{value:"\u4e8b\u4ef6\u5904\u7406",id:"\u4e8b\u4ef6\u5904\u7406",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801-2",level:4},{value:"\u4e8b\u52a1\u5b8c\u6210",id:"\u4e8b\u52a1\u5b8c\u6210",level:2},{value:"\u5b9e\u4f8b\u4ee3\u7801",id:"\u5b9e\u4f8b\u4ee3\u7801",level:4}];function d(n){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:"Phoenix\u6846\u67b6\u63d0\u4f9b\u4e86\u4e8b\u52a1\u6a21\u5757\uff0c\u76ee\u524d\u652f\u6301\u7684\u4e8b\u52a1\u6a21\u5f0f\u6709SAGA\u4e0eTCC\u3002\u5728\u5b9a\u4e49\u4e8b\u52a1\u5904\u7406\u6a21\u578b\u65f6\uff0c\u4f60\u53ef\u4ee5\u7075\u6d3b\u914d\u7f6e\u8fd9\u4e24\u79cd\u4e8b\u52a1\u6a21\u5f0f\u3002\u672c\u7bc7\u5c06\u4ecb\u7ecd\u4e8b\u52a1\u805a\u5408\u6839\u7684\u5b9a\u4e49\u89c4\u8303\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"maven\u4f9d\u8d56",children:"maven\u4f9d\u8d56"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-xml",children:"<dependency>\n   <groupId>com.iquantex</groupId>\n   <artifactId>phoenix-transaction</artifactId>\n   <version>2.4.0</version>\n</dependency>\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u4e8b\u52a1\u805a\u5408\u6839",children:"\u4e8b\u52a1\u805a\u5408\u6839"}),"\n",(0,t.jsxs)(e.p,{children:["\u4e8b\u52a1\u805a\u5408\u6839\u9700\u8981\u4f7f\u7528",(0,t.jsx)(e.code,{children:"@TransactionAggregateAnnotation"}),"\u6765\u6807\u8bb0\u7c7b\uff0c\u670d\u52a1\u542f\u52a8\u540ephoenix\u4f1a\u6821\u9a8c\u5b9a\u4e49\u89c4\u8303\u548c\u521b\u5efa\u4e8b\u52a1\u805a\u5408\u6839\u7c7b\u5bf9\u8c61\u3002\u4e8b\u52a1\u805a\u5408\u6839\u7c7b\u9700\u8981\u9075\u5faa\u5982\u4e0b\u89c4\u8303:"]}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\u805a\u5408\u6839\u7c7b\u9700\u8981\u4f7f\u7528 ",(0,t.jsx)(e.code,{children:"@TransactionAggregateAnnotation"})," \u6ce8\u89e3\u8fdb\u884c\u6807\u8bb0\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:["\u805a\u5408\u6839\u7c7b\u4ee5\u53ca\u805a\u5408\u6839\u7c7b\u4e2d\u7684\u5b9e\u4f53\u5747\u9700\u5b9e\u73b0 ",(0,t.jsx)(e.code,{children:"Serializable"})," \u63a5\u53e3\uff0c\u5e76\u5b9a\u4e49serialVersionUID\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u6ce8\u610f:\u5728\u805a\u5408\u6839\u4e0a\u6dfb\u52a0 ",(0,t.jsx)(e.code,{children:"@TransactionAggregateAnnotation"})," \u6ce8\u89e3\u65f6\uff0c\u9700\u8981\u901a\u8fc7 ",(0,t.jsx)(e.code,{children:"aggregateRootType"})," \u6307\u5b9a\u4e00\u4e2a\u805a\u5408\u6839\u7684\u7c7b\u522b\u3002\u7528\u6765\u533a\u5206\u4e0d\u540c\u7684\u805a\u5408\u6839\u7c7b\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h4,{id:"\u793a\u4f8b\u4ee3\u7801",children:"\u793a\u4f8b\u4ee3\u7801"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'@TransactionAggregateAnnotation(aggregateRootType = "ShoppingAggregateSagaTcc")\npublic class ShoppingAggregateSagaTcc implements Serializable {\n    private static final long     serialVersionUID          = 7007603076743033374L; \n    // ... act and on method\n}\n'})}),"\n",(0,t.jsx)(e.h2,{id:"\u4e8b\u52a1\u5165\u53e3",children:"\u4e8b\u52a1\u5165\u53e3"}),"\n",(0,t.jsx)(e.p,{children:"\u4e8b\u52a1\u805a\u5408\u6839\u9700\u8981\u4f7f\u7528@TransactionStart\u8868\u793a\u4e8b\u52a1\u7684\u5165\u53e3\uff0c\u8be5\u4e8b\u52a1\u5f00\u59cb\u65b9\u6cd5\u9700\u8981\u5b9a\u4e49\u4e8b\u52a1\u7684\u5904\u7406\u6a21\u578b\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u4e8b\u52a1\u5f00\u59cb\u65b9\u6cd5\u9700\u8981\u9075\u5faa\u5982\u4e0b\u89c4\u8303:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u4f7f\u7528@TransactionStart\u6ce8\u89e3"}),"\n",(0,t.jsx)(e.li,{children:"\u8be5\u65b9\u6cd5\u53ea\u80fd\u6709\u4e00\u4e2a\u5165\u53c2"}),"\n",(0,t.jsx)(e.li,{children:"\u5982\u679c\u5f53\u524d\u7c7b\u4e2d\u5b58\u5728\u591a\u4e2a\u4f7f\u7528@TransactionStart\u6ce8\u89e3\u5e76\u4e14\u53ea\u6709\u4e00\u4e2a\u5165\u53c2\u7684\u65b9\u6cd5\uff0c\u90a3\u4e48\u4f60\u5c06\u6536\u5230\u4e00\u4e2aAggregateClassException\u5f02\u5e38"}),"\n"]}),"\n",(0,t.jsx)(e.h4,{id:"\u793a\u4f8b\u4ee3\u7801-1",children:"\u793a\u4f8b\u4ee3\u7801"}),"\n",(0,t.jsx)(e.p,{children:"Phoenix\u4e8b\u52a1\u805a\u5408\u6839\u53ef\u4ee5\u5bf9\u5b9e\u4f53\u805a\u5408\u6839\u63d0\u4f9b\u7684TCC\u548cSAGA\u63a5\u53e3\u7075\u6d3b\u7ec4\u88c5\uff0c\u8be5\u793a\u4f8b\u4f7f\u7528\u7684\u662fTCC+SAGA\u6df7\u5408\u6a21\u5f0f\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'    @TransactionStart\n    public TransactionReturn on(BuyGoodsCmd request) {\n        this.request = request;\n        double frozenAmt = request.getQty() * request.getPrice();\n        return TransactionReturn\n            .builder()\n            .addAction(\n                TccAction.builder().tryCmd(new AccountTryCmd(request.getAccountCode(), frozenAmt))\n                    .confirmCmd(new AccountConfirmCmd(request.getAccountCode(), frozenAmt))\n                    .cancelCmd(new AccountCancelCmd(request.getAccountCode(), frozenAmt)).targetTopic("")\n                    .subTransId(UUID.randomUUID().toString()).tryMaxRetryNum(2).confirmRetryNum(3).cancelRetryNum(3)\n                    .build())\n            .addAction(\n                SagaAction.builder().targetTopic("").tiCmd(new GoodsSellCmd(request.getGoodsCode(), request.getQty()))\n                    .ciCmd(new GoodsSellCompensateCmd(request.getGoodsCode(), request.getQty())).tiMaxRetryNum(2)\n                    .ciMaxRetryNum(2).subTransId(UUID.randomUUID().toString()).build()).build();\n    }\n'})}),"\n",(0,t.jsx)(e.h4,{id:"transactionreturn",children:"TransactionReturn"}),"\n",(0,t.jsx)(e.p,{children:"\u4e8b\u52a1\u7684\u5165\u53e3\u65b9\u6cd5\u5728\u5904\u7406 Command \u547d\u4ee4\u4e4b\u540e\u9700\u8981\u8fd4\u56de\u5904\u7406\u7684\u7ed3\u679c\u4ee5\u53ca\u4e00\u4e9b\u5fc5\u8981\u7684\u4fe1\u606f\uff0cPhoenix\u5bf9\u4e8b\u52a1\u7684\u5165\u53e3\u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u505a\u4e86\u4e00\u5c42\u5c01\u88c5\uff0c\u7edf\u4e00\u653e\u5230\u4e86TransactionReturn\u4e2d\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"public class TransactionReturn {\n    private final List<TransactionAction> actions;\n    // setter getter ...\n}\n\n"})}),"\n",(0,t.jsx)(e.h4,{id:"transactionaction",children:"TransactionAction"}),"\n",(0,t.jsx)(e.p,{children:'TransactionAction\u7c7b\u5b9a\u4e49\u4e86\u76ee\u6807Topic\u3002\u5982\u679c\u5b9e\u4f53\u805a\u5408\u6839\u4e0e\u4e8b\u52a1\u805a\u5408\u6839\u5206\u5f00\u90e8\u7f72\uff0c\u90a3\u4e48Topic\u9700\u8981\u8bbe\u7f6e\u6210\u76ee\u6807\u5b9e\u4f53\u805a\u5408\u6839\u7684Topic\u3002\u5982\u679c\u5b9e\u4f53\u805a\u5408\u6839\u4e0e\u4e8b\u52a1\u805a\u5408\u6839\u96c6\u6210\u90e8\u7f72\uff0c\u90a3\u4e48Topic\u9700\u8981\u8bbe\u7f6e\u6210\u7a7a\u4e32("")'}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"public abstract class TransactionAction {\n    protected String targetTopic;\n}\n\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u76ee\u524d\u652f\u6301TCC\u4e0eSAGA\u4e24\u79cd\u4e8b\u52a1\u6a21\u5f0f\uff0c\u8be6\u7ec6\u7684\u4e24\u79cd\u6a21\u5f0f\u7684\u8bf4\u660e\u8bf7\u53c2\u8003 ",(0,t.jsx)(e.a,{href:"/docs/2.4.0/phoenix-2.x/phoenix-transaction/phoenix-transaction-module",children:"\u4e8b\u52a1\u6a21\u5f0f"})]}),"\n",(0,t.jsx)(e.p,{children:"TccAction\u4e2d\u7684tryCmd\u3001confirmCmd\u548ccancelCmd\u5747\u9700\u8981\u5b9a\u4e49\uff0c\u5426\u5219\u4e8b\u52a1\u6267\u884c\u8fc7\u7a0b\u4e2d\u4f1a\u51fa\u73b0\u4e8b\u52a1\u56de\u6eda/\u63d0\u4ea4\u5f02\u5e38\uff08\u65e0\u6cd5\u4fdd\u8bc1\u72b6\u6001\u4e00\u81f4\u6027\uff09\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"public class TccAction extends TransactionAction {\n    // try      \u9ed8\u8ba4\u6700\u5927\u91cd\u8bd5\u6b21\u6570\n    public static final int TRY_MAX_RETRY_NUM_DEFAULT     = 5;\n    // confirm  \u9ed8\u8ba4\u6700\u5927\u91cd\u8bd5\u6b21\u6570\n    public static final int CONFIRM_MAX_RETRY_NUM_DEFAULT = 10;\n    // cancel   \u9ed8\u8ba4\u6700\u5927\u91cd\u8bd5\u6b21\u6570\n    public static final int CANCEL_MAX_RETRY_NUM_DEFAULT  = 10;\n    private final Object    tryCmd;\n    private final Object    confirmCmd;\n    private final Object    cancelCmd;\n    private final Integer   tryMaxRetryNum;\n    private final Integer   cancelMaxRetryNum;\n    private final Integer   confirmMaxRetryNum;\n    private final String    subTransId;\n    // getter setter ...\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u6b63\u5e38\u4e8b\u52a1\u6a21\u578b\u4e2dSagaAction\u4e2d\u7684tiCmd\u548cciCmd\u5747\u9700\u8981\u5b9a\u4e49\uff0c\u5426\u5219\u4e8b\u52a1\u6267\u884c\u8fc7\u7a0b\u4e2d\u4f1a\u51fa\u73b0\u4e8b\u52a1\u56de\u6eda\u5f02\u5e38\uff08\u65e0\u6cd5\u4fdd\u8bc1\u72b6\u6001\u4e00\u81f4\u6027\uff09\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"public class SagaAction extends TransactionAction {\n    // ti \u9ed8\u8ba4\u6700\u5927\u91cd\u8bd5\u6b21\u6570\n    public static final int TI_MAX_RETRY_NUM_DEFAULT = 5;\n    // ci \u9ed8\u8ba4\u6700\u5927\u91cd\u8bd5\u6b21\u6570\n    public static final int CI_MAX_RETRY_NUM_DEFAULT = 10;\n    private final Object    tiCmd;\n    private final Object    ciCmd;\n    private final Integer   tiMaxRetryNum;\n    private final Integer   ciMaxRetryNum;\n    private final String    subTransId;\n    // getter setter ...\n}\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u9488\u5bf9\u4e00\u4e9b\u7279\u6b8a\u573a\u666f\uff0c\u6bd4\u5982\u53ea\u9700\u8981Saga\u53d1\u51fa\u4e00\u4e2aTiCmd\uff0c\u4e0d\u9700\u8981\u56de\u6eda\u7684\u573a\u666f\uff0c\u53ef\u4ee5\u8bbe\u7f6eSagaAction\u4e2d\u7684ciCmd\u4e3a",(0,t.jsx)(e.code,{children:"PhoenixServer.TransactionSagaMockCiCmd"}),"\uff0c\u53c2\u8003\u5b9e\u4f8b\u4ee3\u7801"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"    public TransactionReturn on(BuyGoodsCmd buyGoodsCmd) {\n        this.buyGoodsCmd = buyGoodsCmd;\n        return TransactionReturn.builder()\n                .addAction(\n                        SagaAction.builder()\n                                .tiCmd(new AccountQueryCmd(buyGoodsCmd.getAccountCode()))\n                                .ciCmd(SagaAction.genMockCiCmd())\n                                .build())\n                .build();\n    }\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u4e8b\u4ef6\u5904\u7406",children:"\u4e8b\u4ef6\u5904\u7406"}),"\n",(0,t.jsx)(e.p,{children:"\u7ecf\u8fc7\u5b9e\u4f53\u805a\u5408\u6839\u5904\u7406\u540e\u4ea7\u751f\u7684Event\u4e8b\u4ef6\u4f1a\u53d1\u9001\u5230\u4e8b\u52a1\u805a\u5408\u6839\uff0c\u53ef\u4ee5\u6839\u636e\u9700\u8981\u5b9a\u4e49on\u65b9\u6cd5\u6765\u5904\u7406Event\u4e8b\u4ef6\u3002"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"on()"})," \u65b9\u6cd5\u9700\u8981\u9075\u5faa\u5982\u4e0b\u89c4\u8303:"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"on\u65b9\u6cd5\u4e2d\u4e0d\u80fd\u6709IO\u64cd\u4f5c\uff0c\u4f8b\u5982:\u8c03\u7528DB\u64cd\u4f5c\uff0c\u8c03\u7528\u5916\u90e8\u63a5\u53e3"}),"\n",(0,t.jsx)(e.li,{children:"on\u65b9\u6cd5\u4e2d\u4e0d\u80fd\u6709\u968f\u673a\u51fd\u6570\uff0c\u4f8b\u5982:\u83b7\u53d6\u7cfb\u7edf\u5f53\u524d\u65f6\u95f4\uff0c\u83b7\u53d6\u968f\u673a\u6570"}),"\n",(0,t.jsx)(e.li,{children:"on\u65b9\u6cd5\u53ef\u4ee5\u91cd\u8f7d\u5b9a\u4e49\uff0c\u5e76\u4e14\u81f3\u5c11\u6709\u4e00\u4e2a\u5165\u53c2\u3002"}),"\n"]}),"\n",(0,t.jsx)(e.h4,{id:"\u793a\u4f8b\u4ee3\u7801-2",children:"\u793a\u4f8b\u4ee3\u7801"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'    public TransactionReturn on(AccountTryFailEvent event) {\n        log.info("\u5546\u54c1<{}> \u6210\u529f\u552e\u51fa", event.getGoodsCode());\n        return null;\n    }\n'})}),"\n",(0,t.jsx)(e.h2,{id:"\u4e8b\u52a1\u5b8c\u6210",children:"\u4e8b\u52a1\u5b8c\u6210"}),"\n",(0,t.jsx)(e.p,{children:"\u4e8b\u52a1\u5b8c\u6210\u540e\uff0c\u4f1a\u8c03\u7528\u4e8b\u52a1\u805a\u5408\u6839\u7684onFinish\u65b9\u6cd5"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"onFinish()"})," \u65b9\u6cd5\u9700\u8981\u9075\u5faa\u5982\u4e0b\u89c4\u8303:"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["onFinish\u65b9\u6cd5\u662f\u552f\u4e00\u7684\uff0c\u4e0d\u53ef\u91cd\u8f7d\u5b9a\u4e49\uff0c\u5426\u5219\u4f60\u4f1a\u6536\u5230\u4e00\u4e2a",(0,t.jsx)(e.code,{children:"AggregateClassException"}),"\u5f02\u5e38"]}),"\n"]}),"\n",(0,t.jsx)(e.h4,{id:"\u5b9e\u4f8b\u4ee3\u7801",children:"\u5b9e\u4f8b\u4ee3\u7801"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'public Object onFinish() {\n    return new BuyGoodsEvent("\u8d2d\u4e70\u5546\u54c1\u6210\u529f");\n}\n'})})]})}function u(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},11151:(n,e,i)=>{i.d(e,{Z:()=>o,a:()=>c});var t=i(67294);const a={},r=t.createContext(a);function c(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:c(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);