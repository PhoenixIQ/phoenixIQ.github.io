"use strict";(self.webpackChunkphoenix_website_next=self.webpackChunkphoenix_website_next||[]).push([[78311],{13603:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>l,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var i=t(85893),r=t(11151);const a={id:"aggregate-segment",title:"\u805a\u5408\u6839\u7247\u6bb5\u4ee3\u7801",description:"\u652f\u6301\u5c06\u805a\u5408\u6839\u4ee3\u7801\u62c6\u5206\u5230\u591a\u4e2a\u7c7b\u7684\u80fd\u529b"},c=void 0,o={id:"phoenix-advanced/aggregate-segment",title:"\u805a\u5408\u6839\u7247\u6bb5\u4ee3\u7801",description:"\u652f\u6301\u5c06\u805a\u5408\u6839\u4ee3\u7801\u62c6\u5206\u5230\u591a\u4e2a\u7c7b\u7684\u80fd\u529b",source:"@site/versioned_docs/version-2.6.0/09-phoenix-advanced/02-segment.md",sourceDirName:"09-phoenix-advanced",slug:"/phoenix-advanced/aggregate-segment",permalink:"/docs/2.6.0/phoenix-advanced/aggregate-segment",draft:!1,unlisted:!1,editUrl:"https://github.com/PhoenixIQ/versioned_docs/version-2.6.0/09-phoenix-advanced/02-segment.md",tags:[],version:"2.6.0",sidebarPosition:2,frontMatter:{id:"aggregate-segment",title:"\u805a\u5408\u6839\u7247\u6bb5\u4ee3\u7801",description:"\u652f\u6301\u5c06\u805a\u5408\u6839\u4ee3\u7801\u62c6\u5206\u5230\u591a\u4e2a\u7c7b\u7684\u80fd\u529b"},sidebar:"docs",previous:{title:"\u805a\u5408\u6839\u5b9a\u65f6\u4efb\u52a1",permalink:"/docs/2.6.0/phoenix-advanced/aggregate-timer"},next:{title:"\u5206\u5e03\u5f0f\u6570\u636e",permalink:"/docs/2.6.0/phoenix-advanced/phoenix-distributed-data"}},s={},d=[{value:"\u4ecb\u7ecd",id:"introduce",level:2},{value:"Spring \u652f\u6301",id:"spring",level:2},{value:"\u4f7f\u7528\u8bf4\u660e",id:"usage",level:2}];function g(e){const n={admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"introduce",children:"\u4ecb\u7ecd"}),"\n",(0,i.jsx)(n.p,{children:"\u805a\u5408\u6839\u5f88\u597d\u5730\u7ec4\u7ec7\u5173\u8054\u7684\u5b9e\u4f53\u548c\u503c\u5bf9\u8c61\uff0c\u5f62\u6210\u4e00\u4e2a\u76f8\u5bf9\u72ec\u7acb\u7684\u4e1a\u52a1\u9886\u57df\uff0c\u8ba9\u7528\u6237\u5199\u51fa\u6765\u7684\u4ee3\u7801\u76f8\u5bf9\u5185\u805a\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4f46\u968f\u7740\u4e1a\u52a1\u4e0d\u65ad\u6df1\u5165\u4ee5\u53ca\u968f\u7740\u65f6\u95f4\u7684\u63a8\u79fb\uff0c\u4e1a\u52a1\u89c4\u6a21\u548c\u590d\u6742\u5ea6\u4e5f\u53ef\u80fd\u589e\u957f\uff0c\u6240\u4ee5\u8d8a\u6765\u8d8a\u591a\u7684\u5b9e\u4f53\u548c\u503c\u5bf9\u8c61\u9700\u8981\u548c\u805a\u5408\u5173\u8054\uff0c\u5e76\u5728\u6700\u7ec8\u5bfc\u81f4\u805a\u5408\u6839\u7684\u4ee3\u7801\u4f53\u79ef\u8d8a\u6765\u8d8a\u5e9e\u5927\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u4e0d\u62c6\u5206\u805a\u5408\u7684\u60c5\u51b5\u4e0b\uff0c\u9605\u8bfb\u4e00\u4e2a\u805a\u5408\u6839\u7684\u4e1a\u52a1\u903b\u8f91\u5341\u5206\u590d\u6742\u3002\u56e0\u6b64 Phoenix \u63d0\u4f9b\u4e86\u80fd\u591f\u62c6\u5206\u805a\u5408\u6839\u4ee3\u7801\u5e76\u540c\u65f6\u4fdd\u6301\u5185\u805a\u7684\u7279\u6027\uff1a",(0,i.jsx)(n.strong,{children:"\u805a\u5408\u6839\u7247\u6bb5\u4ee3\u7801\u7279\u6027"})]}),"\n",(0,i.jsx)(n.p,{children:":::info \u6ce8\u610f"}),"\n",(0,i.jsx)(n.p,{children:"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0cPhoenix \u53ea\u652f\u6301\u4e00\u4e2a\u547d\u4ee4\u53ea\u80fd\u88ab\u4e00\u4e2a\u805a\u5408\u6839\u5904\u7406, \u5982\u679c\u67d0\u4e2a SubAggregate \u60f3\u8981\u88ab\u591a\u4e2a\u4e0d\u540c\u7c7b\u578b\u805a\u5408\u6839\u5171\u4eab\uff0c\u8bf7\u4f7f\u7528\u5bf9\u8c61\u7ec4\u5408 + \u59d4\u6d3e\u6a21\u5f0f\uff08Delegation Pattern\uff09\u800c\u4e0d\u662f\u672c\u6587\u7684\u7279\u6027\u3002"}),"\n",(0,i.jsx)(n.p,{children:":::"}),"\n",(0,i.jsxs)(n.p,{children:["\u805a\u5408\u6839\u7247\u6bb5\u4ee3\u7801\u80fd\u591f\u4fdd\u6301\u805a\u5408\u6839\u539f\u6709\u4e1a\u52a1\u903b\u8f91\u4e0d\u53d8\uff0c\u5e76\u4e14\u5728\u4ee3\u7801\u7684\u7ec4\u6210\u65b9\u5f0f\u4e0a\uff0c\u652f\u6301\u5c06",(0,i.jsx)(n.em,{children:"\u547d\u4ee4\u5904\u7406\u5668"}),"\u7684\u65b9\u6cd5\u5199\u5230\u5173\u8054\u7684\u7c7b\u4e2d\uff08\u6210\u5458\u3001\u7236\u7c7b\u3001\u63a5\u53e3\uff09\uff1a"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u914d\u7f6e ",(0,i.jsx)(n.code,{children:"quantex.phoenix.server.method-lookup-strategy-class-name"})," \u4e5f\u5c31\u662f\u805a\u5408\u6839\u626b\u63cf\u7b56\u7565\u4e3a ",(0,i.jsx)(n.code,{children:"com.iquantex.phoenix.server.aggregate.cls.SegmentAggregateRelatedStrategy"}),"\uff08\u9ed8\u8ba4\u5df2\u914d\u7f6e\u6b64\u5b9e\u73b0\uff09 \u6216\u5176\u4ed6\u81ea\u5b9a\u4e49\u5b9e\u73b0"]}),"\n",(0,i.jsx)(n.li,{children:"\u5728\u805a\u5408\u6839\u4e2d\uff0c\u6309 1 \u63d0\u4f9b\u7684\u7b56\u7565\u7c7b\u652f\u6301\u7684\u65b9\u5f0f\u7ec4\u5408\u4e00\u4e2a\u805a\u5408\u6839\u7c7b\uff08\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u652f\u6301\u6210\u5458\u3001\u7236\u7c7b\u3001\u63a5\u53e3\uff09"}),"\n",(0,i.jsxs)(n.li,{children:["\u5728\u7247\u6bb5\u4ee3\u7801\u7684\u7c7b\u5934\u90e8\u589e\u52a0 ",(0,i.jsx)(n.code,{children:"@AggregateSegment"})," \u6ce8\u89e3"]}),"\n",(0,i.jsxs)(n.li,{children:["\uff08\u53ef\u9009\uff09\u5728\u9700\u8981\u88ab\u9012\u5f52\u626b\u63cf\u7684\u6210\u5458\u4e0a\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"@Inject"})," \u6ce8\u89e3\u6807\u8bc6"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[":::tip \u63d0\u793a\n\u5982\u679c\u7528\u6237\u89c9\u5f97 @Inject \u7684\u65b9\u5f0f\u592a\u8fc7\u4e8e\u7e41\u7410, \u4e5f\u53ef\u4ee5\u5728 ",(0,i.jsx)(n.code,{children:"quantex.phoenix.server.method-lookup-strategy-class-name"})," \u5b9e\u73b0\u81ea\u5df1\u7684\u7247\u6bb5\u4ee3\u7801\u626b\u63cf\u7279\u6027, \u53ea\u9700\u8981\u5b9e\u73b0 ",(0,i.jsx)(n.code,{children:"com.iquantex.phoenix.server.aggregate.cls.AggregateRelatedStrategy"})," \u5e76\u8fd4\u56de\u9700\u8981\u626b\u63cf\u7684\u7c7b\u5373\u53ef, Phoenix \u4f1a\u68c0\u7d22\u5e76\u8fc7\u6ee4\u4e0d\u5305\u542b ",(0,i.jsx)(n.code,{children:"@AggregateSegment"})," \u7684\u7c7b.\n:::"]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:'\u6ce8\u610f\uff0c\u4e8b\u52a1\u805a\u5408\u6839\u5904\u7406\u65f6\u4f1a\u4f7f\u7528\u5e8f\u5217\u5316\u6df1\u62f7\u8d1d\u4e00\u4e2a\u526f\u672c\u7528\u4e8e "try" \u6267\u884c\u7528\u6237\u4ee3\u7801\uff0c\u56e0\u6b64\u5f53\u4f7f\u7528\u4e1a\u52a1\u5bf9\u8c61\u7ec4\u5408\u3001\u7247\u6bb5\u4ee3\u7801\u7b49\u7279\u6027\u65f6\uff0c\u9700\u8981\u7279\u522b\u6ce8\u610f\u4e00\u4e9b\u5bf9\u8c61\u7684\u5e8f\u5217\u5316\u3002'})}),"\n",(0,i.jsx)(n.h2,{id:"spring",children:"Spring \u652f\u6301"}),"\n",(0,i.jsx)(n.p,{children:"\u4f7f\u7528\u7247\u6bb5\u4ee3\u7801\u7279\u6027\u7684\u805a\u5408\u6839\u7247\u6bb5\u652f\u6301 Spring \u7684\u4f9d\u8d56\u6ce8\u5165\uff0c\u5e76\u4e14\u5728\u805a\u5408\u6839\u5355\u5143\u6d4b\u8bd5\u4e2d\u4e5f\u652f\u6301\u4e86 Mock \u4e00\u4e2a Bean \u7684\u80fd\u529b\u3002"}),"\n",(0,i.jsx)(n.p,{children:":::info \u63d0\u793a\n\u76ee\u524d Phoenix \u7684\u4f9d\u8d56\u6ce8\u5165\u9700\u8981\u4f7f\u7528\u6ce8\u89e3 @Inject \u6807\u8bc6\u6210\u5458\uff0c\u5e76\u4e14\u53ea\u652f\u6301\u6ce8\u5165\u6839\u805a\u5408\u6839\u7684\u6210\u5458\uff0c\u5f53\u5d4c\u5957\u5c42\u6b21\u8f83\u6df1\u65f6\u6682\u4e0d\u652f\u6301. \u5982:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"public class Parent {\n    @Inject private ChildrenSegment businessObj;\n}\npublic class ChildrenSegment {\n    @Inject private GrandChildSegment businessObj;\n}\npublic class GrandChildSegment {\n    @Autowired private MockService service;\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:":::"}),"\n",(0,i.jsx)(n.p,{children:"\u4e0b\u9762\u662f\u805a\u5408\u6839\u4f9d\u8d56\u6ce8\u5165\u7684\u6b63\u786e\u793a\u4f8b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'@EntityAggregateAnnotation(aggregateRootType = "test")\npublic class Parent implements Serializable {\n\n    /** \u8fd9\u91cc\u4e0d\u5e8f\u5217\u5316\u8be5\u7c7b, \u8f6c\u800c\u4f7f\u7528 Phoenix \u7684\u81ea\u9009\u5feb\u7167\u5b58\u50a8\u6570\u636e, \u5b9e\u9645\u4f7f\u7528\u65f6\u6309\u9700\u5b9e\u73b0 */\n    @Inject private transient ChildrenSegment businessObj;\n}\n\n\n@AggregateSegment\npublic class ChildrenSegment {\n\n    /** Bean \u548c \u914d\u7f6e\u90fd\u652f\u6301\u6ce8\u5165 */\n    @Autowired private MockService mockService;\n\n    @Value("${some.spring.properties}")\n    private String propertiesValue;\n\n    @CommandHandler(aggregateRootId = "id")\n    public ActReturn act(Boolean cmd) {\n        return ActReturn.builder().build();\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"\u4f7f\u7528\u8bf4\u660e"}),"\n",(0,i.jsxs)(n.p,{children:[":::info \u63d0\u793a\nSegmentAggregateRelatedStrategy \u4e0d\u4f1a\u91cd\u590d\u626b\u63cf\u540c\u4e00\u4e2a\u7c7b, \u4e14\u4e0d\u4f1a\u626b\u63cf\u6210\u5458\u7684\u63a5\u53e3, \u53ea\u6709\u88ab ",(0,i.jsx)(n.code,{children:"@Inject"})," \u7684\u6210\u5458\u53ca\u5176\u4e5f\u88ab ",(0,i.jsx)(n.code,{children:"@Inject"})," \u7684\u6210\u5458\u624d\u4f1a\u88ab\u626b\u63cf, \u672a\u88ab ",(0,i.jsx)(n.code,{children:"@Inject"})," \u6807\u8bc6\u7684\u6210\u5458\u5e76\u4e0d\u4f1a\u88ab\u626b\u63cf.\n:::"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4e0b\u9762\u7684\u4ee3\u7801\u4e2d ",(0,i.jsx)(n.code,{children:"Parent"})," \u805a\u5408\u6839\u540c\u65f6\u62e5\u6709 ",(0,i.jsx)(n.code,{children:"ImplementationSegmentA"}),",",(0,i.jsx)(n.code,{children:"ImplementationSegmentB"}),",",(0,i.jsx)(n.code,{children:"InheritanceSegment"}),",",(0,i.jsx)(n.code,{children:"CompositionSubOneSegment"}),",",(0,i.jsx)(n.code,{children:"CompositionSubTwoSegment"}),",",(0,i.jsx)(n.code,{children:"CompositionSubTwoSubSegment"})," \u7684 act()\u3001on() \u65b9\u6cd5, \u793a\u4f8b\u4ee3\u7801\u5982\u4e0b\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'import java.io.Serializable;\n\n@EntityAggregateAnnotation(aggregateRootType = "test")\npublic static class Parent extends InheritanceSegment\n        implements ImplementationSegmentA, ImplementationSegmentB {\n\n    @Inject private CompositionSubOneSegment subOneAggregate;\n    @Inject private CompositionSubTwoSegment subTwoAggregate;\n    // \u4e0d\u4f1a\u88ab\u626b\u63cf, \u8be5\u7c7b\u4e0d\u662f\u7247\u6bb5\u4ee3\u7801.\n    @Inject private CompositionSubThreeSegment subThreeAggregate;\n    private String notnull;\n}\n\n// ========= \u63a5\u53e3\n@AggregateSegment\npublic interface ImplementationSegmentA {\n\n    @CommandHandler(aggregateRootId = "id")\n    default ActReturn act(Boolean cmd) {\n        return ActReturn.builder().build();\n    }\n}\n\n@AggregateSegment\npublic interface ImplementationSegmentB {\n\n    @CommandHandler(aggregateRootId = "id")\n    default ActReturn act(Short cmd) {\n        return ActReturn.builder().build();\n    }\n}\n\n\n// ========== \u7ee7\u627f\n@AggregateSegment\npublic static class InheritanceSegment {\n\n    @CommandHandler(aggregateRootId = "id")\n    public ActReturn act(String cmd) {\n        return ActReturn.builder().build();\n    }\n}\n\n// ========= \u4e0b\u7ea7\uff08\u6210\u5458\uff09\u805a\u5408\u6839, Three \u4e0d\u4f1a\u88ab\u626b\u63cf.\n@AggregateSegment\npublic static class CompositionSubOneSegment {\n\n    // \u8be5\u7c7b\u4e0d\u4f1a\u88ab\u626b\u63cf.\n    private CompositionSubOneSubSegment subOneSubAggregate;\n\n    @QueryHandler(aggregateRootId = "id")\n    public ActReturn act(Integer cmd) {\n        return ActReturn.builder().build();\n    }\n}\n\n@AggregateSegment\npublic static class CompositionSubTwoSegment {\n\n    @Inject private CompositionSubTwoSubSegment subTwoSubAggregate;\n\n    @QueryHandler(aggregateRootId = "id")\n    public ActReturn act(Long cmd) {\n        return ActReturn.builder().build();\n    }\n}\n\npublic static class CompositionSubThreeSegment {\n\n    @QueryHandler(aggregateRootId = "id")\n    public ActReturn act(Character cmd) {\n        return ActReturn.builder().build();\n    }\n}\n\n// ========= \u4e0b\u7ea7\u7684\u4e0b\u7ea7(\u53ea\u6709 Two \u4f1a\u88ab\u626b\u63cf\uff09\n@AggregateSegment\npublic static class CompositionSubOneSubSegment {\n\n    @QueryHandler(aggregateRootId = "id")\n    public ActReturn act(Byte cmd) {\n        return ActReturn.builder().build();\n    }\n}\n\n@AggregateSegment\npublic static class CompositionSubTwoSubSegment {\n\n    @QueryHandler(aggregateRootId = "id")\n    public ActReturn act(BigInteger cmd) {\n        return ActReturn.builder().build();\n    }\n}\n'})})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>c});var i=t(67294);const r={},a=i.createContext(r);function c(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);