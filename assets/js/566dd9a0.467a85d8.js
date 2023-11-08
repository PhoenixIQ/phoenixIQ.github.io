"use strict";(self.webpackChunkphoenixiq_github_io=self.webpackChunkphoenixiq_github_io||[]).push([[85914],{3109:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var s=c(85893),i=c(11151);const t={id:"phoenix-dgc-api",title:"\u63a5\u53e3\u8bf4\u660e"},r=void 0,l={id:"phoenix-2.x/phoenix-dgc/phoenix-dgc-api",title:"\u63a5\u53e3\u8bf4\u660e",description:"DGC \u63d0\u4f9b\u4ee5\u4e0b\u4e09\u4e2a\u6ce8\u89e3\u5934\uff1a",source:"@site/versioned_docs/version-2.4.0/phoenix-2.x/08-phoenix-dgc/01-api.md",sourceDirName:"phoenix-2.x/08-phoenix-dgc",slug:"/phoenix-2.x/phoenix-dgc/phoenix-dgc-api",permalink:"/docs/2.4.0/phoenix-2.x/phoenix-dgc/phoenix-dgc-api",draft:!1,unlisted:!1,editUrl:"https://github.com/PhoenixIQ/versioned_docs/version-2.4.0/phoenix-2.x/08-phoenix-dgc/01-api.md",tags:[],version:"2.4.0",sidebarPosition:1,frontMatter:{id:"phoenix-dgc-api",title:"\u63a5\u53e3\u8bf4\u660e"},sidebar:"docs",previous:{title:"\u5feb\u901f\u5165\u95e8",permalink:"/docs/2.4.0/phoenix-2.x/phoenix-dgc/phoenix-dgc-instruction"},next:{title:"\u529f\u80fd\u6d4b\u8bd5",permalink:"/docs/2.4.0/phoenix-2.x/phoenix-dgc/phoenix-dgc-feature-test"}},d={},a=[{value:"@Model",id:"model",level:2},{value:"@Observable",id:"observable",level:2},{value:"@Compute",id:"compute",level:2},{value:"DgcObjectManager",id:"dgcobjectmanager",level:2},{value:"\u6269\u5c55\u7c7b\u4f7f\u7528",id:"\u6269\u5c55\u7c7b\u4f7f\u7528",level:2}];function o(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"DGC \u63d0\u4f9b\u4ee5\u4e0b\u4e09\u4e2a\u6ce8\u89e3\u5934\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"@Model"}),"\n",(0,s.jsx)(n.li,{children:"@Compute"}),"\n",(0,s.jsx)(n.li,{children:"@Observable"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"model",children:"@Model"}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u4e00\u4e2a\u7c7b\u9700\u8981\u4f7f\u7528 DGC \u529f\u80fd\uff0c\u5219\u9700\u8981\u5728\u7c7b\u5934\u4e0a\u6dfb\u52a0 ",(0,s.jsx)(n.code,{children:"@Model"})," \u6ce8\u89e3\u3002\u53ea\u6709\u52a0\u4e86 @Model \u6ce8\u89e3\u7684\u7c7b\uff0cDGC \u5728\u5b9e\u4f8b\u5316\u5bf9\u8c61\u65f6\u624d\u4f1a\u52a8\u6001\u4ee3\u7406\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"observable",children:"@Observable"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"@Observable"})," \u4f5c\u7528\u4e8e ",(0,s.jsx)(n.code,{children:"@Model"})," \u6807\u8bc6\u7684\u7c7b\u4e2d\u7684\u5c5e\u6027\u4e0a\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u4e00\u4e2a\u5c5e\u6027\u88ab ",(0,s.jsx)(n.code,{children:"@Observable"})," \u6ce8\u89e3\u6807\u8bc6\uff0c\u9700\u8981\u4e3a\u8be5\u5c5e\u6027\u63d0\u4f9b\u76f8\u5e94\u7684 get/set \u65b9\u6cd5\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u540c\u65f6 DGC \u4f1a\u5bf9\u8be5\u5c5e\u6027\u8fdb\u884c\u76d1\u542c\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5f53\u8c03\u7528\u8be5\u5c5e\u6027\u7684 get \u65b9\u6cd5\u65f6\uff0c\u4f1a\u6839\u636e\u8c03\u7528\u5173\u7cfb\u6784\u5efa\u4f9d\u8d56\u5173\u7cfb\u56fe\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u5f53\u8c03\u7528\u8be5\u5c5e\u6027\u7684 set \u65b9\u6cd5\u65f6\uff0c\u4f1a\u6839\u636e DGC \u4e2d\u7ef4\u62a4\u7684\u4f9d\u8d56\u5173\u7cfb\u56fe\uff0c\u5c06\u6240\u6709\u6d89\u53ca\u5230\u7684\u65b9\u6cd5\u7684\u7f13\u5b58\u7f6e\u4e3a\u5931\u6548\uff08\u5220\u9664\uff09\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"@Observable(implClass = CopyOnWriteArrayList.class)\nprivate List<String> list;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"compute",children:"@Compute"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"@Compute"})," \u4f5c\u7528\u4e8e ",(0,s.jsx)(n.code,{children:"@Model"})," \u6807\u8bc6\u7684\u7c7b\u4e2d\u7684\u65b9\u6cd5\u4e0a\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u88ab ",(0,s.jsx)(n.code,{children:"@Compute"})," \u6807\u8bc6\u7684\u65b9\u6cd5\uff0c\u5728\u6bcf\u6b21\u8ba1\u7b97\u4e4b\u540e\u4f1a\u5bf9\u7ed3\u679c\u8fdb\u884c\u7f13\u5b58\u3002\u5982\u679c\u5728\u4e0b\u6b21\u8bbf\u95ee\u8be5\u65b9\u6cd5\u4e4b\u524d\uff0c\u65b9\u6cd5\u4e2d\u8ba1\u7b97\u903b\u8f91\u6240\u6d89\u53ca\u5230\u7684\u5c5e\u6027\u503c\u6ca1\u6709\u53d1\u751f\u53d8\u5316\uff0c\u5219\u4e0b\u6b21\u8bbf\u95ee\u8be5\u65b9\u6cd5\u65f6\u4f1a\u76f4\u63a5\u8fd4\u56de\u7f13\u5b58\u4e2d\u7684\u7ed3\u679c\uff0c\u4e0d\u4f1a\u518d\u6b21\u8ba1\u7b97\u4e00\u904d\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u6ce8\u610f\uff1a"})," ",(0,s.jsx)(n.code,{children:"@Compute"})," \u6ce8\u89e3\u6240\u6807\u8bc6\u7684\u65b9\u6cd5\u4e2d\u53ea\u80fd\u5b58\u5728 get \u903b\u8f91\uff0c\u4e0d\u5141\u8bb8\u51fa\u73b0 set \u903b\u8f91\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"dgcobjectmanager",children:"DgcObjectManager"}),"\n",(0,s.jsx)(n.p,{children:"DgcObjectManger\u662f DGC \u7684\u6838\u5fc3\u5165\u53e3\u7c7b\uff0c\u7528\u6237\u5728\u4f7f\u7528 DGC \u65f6\u5e94\u9996\u5148\u5b9e\u4f8b\u5316DgcObjectManager\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"DgcObjectManager dgcObjectManager = new DgcObjectManager()\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u4e00\u4e2a DgcObjectManager \u5bf9\u8c61\u5373\u53ef\u7ba1\u7406 DGC \u5bf9\u8c61\u4f9d\u8d56\u56fe\uff0c\u5f53\u7136\u5982\u679c\u4e3a\u4e86\u8ffd\u6c42\u5e76\u53d1\uff0c\u4e5f\u53ef\u4ee5\u521b\u5efa\u591a\u4e2a DgcObjectManager\uff08\u6bd4\u5982 Phoenix \u96c6\u6210 DGC \u65f6\uff0c\u6bcf\u4e2a\u805a\u5408\u6839\u5bf9\u8c61\u62e5\u6709\u4e00\u4e2a DgcObjectManger \u5bf9\u8c61\uff09\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u6709\u4e86 DgcObjectManager \u4e4b\u540e\u5bf9\u8c61\u4e4b\u540e\uff0c\u53ef\u4ee5\u4f7f\u7528 DgcObjectManager \u521b\u5efa\u88ab ",(0,s.jsx)(n.code,{children:"@Model"})," \u6ce8\u89e3\u6807\u8bc6\u7684\u7c7b\u7684\u5bf9\u8c61\uff0c\u8fd9\u6837\u8be5\u5bf9\u8c61\u7684\u64cd\u4f5c\u5c31\u4f1a\u88ab DGC \u6240\u4ee3\u7406\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"public <T> T getDgcObject(Class<T> targetCls);\npublic <T> T getDgcObject(Class<T> targetCls, Object... arguments)\n"})}),"\n",(0,s.jsx)(n.p,{children:"DgcManager \u6709\u4e00\u4e2a\u5168\u5c40\u7684\u529f\u80fd\u5f00\u5173\uff0c\u51b3\u5b9a\u662f\u5426\u542f\u7528 DGC \u529f\u80fd\uff0c\u9ed8\u8ba4\u4e3a true\uff08\u5f00\u542f\uff09\u3002\u7ed3\u5408 Phoenix \u6765\u7528\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u5728 phoenix-server \u7684\u914d\u7f6e\u4e2d\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e\u8fdb\u884c\u542f\u7528/\u505c\u7528\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"quantex.phoenix.server.dgc-enable: true\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u662f\u5355\u72ec\u4f7f\u7528 DGC \u6a21\u5757\u7684\u529f\u80fd\uff0c\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u65b9\u5f0f\u9009\u62e9\u5f00\u542f/\u5173\u95ed DGC \u529f\u80fd\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"DgcObjectManager dgcObjectManager = new DgcObjectManager()\ndgcObjectManager.setEnable(true/false);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u6269\u5c55\u7c7b\u4f7f\u7528",children:"\u6269\u5c55\u7c7b\u4f7f\u7528"}),"\n",(0,s.jsxs)(n.p,{children:["\u9488\u5bf9\u81ea\u5b9a\u4e49\u7684\u7c7b\u5c5e\u6027\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u63d0\u4f9b\u76f8\u5e94\u7684 get/set \u65b9\u6cd5\u6765\u5bf9\u5c5e\u6027\u8fdb\u884c\u8bbf\u95ee\u548c\u66f4\u65b0\uff0c\u5e76\u4e14\u901a\u8fc7\u6dfb\u52a0 ",(0,s.jsx)(n.code,{children:"@Compute"})," \u6ce8\u89e3\u6765\u5bf9\u76f8\u5173\u65b9\u6cd5\u7684\u503c\u8fdb\u884c\u7f13\u5b58\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4f46\u662f\u5982\u679c\u4f7f\u7528\u7684\u7c7b\u662f\u7b2c\u4e09\u65b9\u7c7b\u5e93\u63d0\u4f9b\u7684\uff0c\u8fd9\u4e2a\u65f6\u5019\u6211\u4eec\u662f\u6ca1\u6709\u529e\u6cd5\u5bf9\u8fd9\u4e9b\u7c7b\u8fdb\u884c\u4fee\u6539\u7684\uff08\u65e0\u6cd5\u6dfb\u52a0 ",(0,s.jsx)(n.code,{children:"@Model"}),"\u3001",(0,s.jsx)(n.code,{children:"@Observable"}),"\u3001",(0,s.jsx)(n.code,{children:"@Compute"})," \u7b49\u6ce8\u89e3\uff09\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u4f8b\u5982 List\u3001Set\u3001Map \u7c7b\u578b\u7684\u96c6\u5408\u7c7b\uff0c\u5bf9\u8fd9\u4e9b\u96c6\u5408\u7684\u66f4\u65b0\uff0c\u5c31\u4e0d\u80fd\u7b80\u5355\u7684\u901a\u8fc7 set \u65b9\u6cd5\u6765\u8fdb\u884c\u4e86\uff0c\u96c6\u5408\u7684\u5f88\u591a\u65b9\u6cd5\u90fd\u6709\u53ef\u80fd\u5bfc\u81f4\u96c6\u5408\u6570\u636e\u66f4\u65b0\uff08\u4f8b\u5982 List \u7684 add\u3001remove \u7b49\u65b9\u6cd5\u90fd\u4f1a\u5bfc\u81f4\u96c6\u5408\u6570\u636e\u8fdb\u884c\u66f4\u65b0\uff09\u3002\u9664\u4e86\u8fd9\u4e9b\u96c6\u5408\u7c7b\u4e4b\u5916\uff0c\u6211\u4eec\u4f9d\u8d56\u7684\u5176\u4ed6\u7b2c\u4e09\u65b9\u7c7b\u5e93\u63d0\u4f9b\u7684\u7c7b\u4e5f\u5b58\u5728\u540c\u6837\u7684\u95ee\u9898\u3002"}),"\n",(0,s.jsx)(n.p,{children:"DGC \u9488\u5bf9\u8fd9\u79cd\u60c5\u51b5\u63d0\u4f9b\u4e86\u4e00\u79cd\u6269\u5c55\u65b9\u5f0f\uff0c\u6765\u4f7f\u5f97\u7b2c\u4e09\u65b9\u7c7b\u5e93\u7684\u7c7b\u4e5f\u53ef\u4ee5\u4f7f\u7528 DGC \u80fd\u529b\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["DGC \u63d0\u4f9b\u4e86 ",(0,s.jsx)(n.code,{children:"ExtendClassDefine"})," \u63a5\u53e3\uff0c\u9488\u5bf9\u7b2c\u4e09\u65b9\u7c7b\u5e93\u7684\u7c7b\uff0c\u9700\u8981\u624b\u52a8\u6dfb\u52a0\u4e00\u4e2a\u8be5\u63a5\u53e3\u7684\u5b9e\u73b0\u7c7b\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"public interface ExtendClassDefine<EXCLASS> {\n\n    /** \u5224\u65ad\u662f\u5426\u662f\u8be5\u6269\u5c55(\u7c7b/\u63a5\u53e3)\u7684(\u5b50\u7c7b/\u5b9e\u73b0\u7c7b),\u6216\u8005\u81ea\u5df1. */\n    boolean isSubClassOrSelf(Object obj);\n\n    /** \u5224\u65ad\u662f\u5426\u662f\u8fd9\u4e2a\u6269\u5c55\u7c7b\u7684\u5199\u65b9\u6cd5 */\n    boolean isWriteOps(Method method);\n\n     /** \u5982\u679c\u6269\u5c55\u7c7b\u5bb9\u7eb3\u4e86dgc\u4e2d\u7684\u5bf9\u8c61\u4f7f\u7528,\u6bd4\u5982Map,List,\u90a3\u4e48\u9700\u8981\u63d0\u4f9b\u83b7\u53d6\u6240\u6709\u5bf9\u8c61\u7684\u65b9\u6cd5 */\n    Set<Object> getCollections(EXCLASS extendObject);\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ExtendClassDefine"})," \u63a5\u53e3\u5bf9 ",(0,s.jsx)(n.code,{children:"set \u65b9\u6cd5"})," \u8fdb\u884c\u4e86\u62bd\u8c61\uff0c\u7edf\u4e00\u7528\u5199\u65b9\u6cd5\u6765\u8868\u793a\u3002\u4e00\u4e2a\u7b2c\u4e09\u65b9\u7c7b\u4e2d\u7684\u65b9\u6cd5\uff0c\u53ea\u8981\u4f1a\u5bfc\u81f4\u6570\u636e\u7684\u66f4\u65b0\uff08\u589e\u5220\u6539\uff09\uff0c\u90fd\u5c5e\u4e8e\u5199\u65b9\u6cd5\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"DGC \u5bf9\u6240\u6709\u7684\u6269\u5c55\u7c7b\u63d0\u4f9b\u4e86\u4e00\u4e2a\u7edf\u4e00\u7684\u62bd\u8c61\u7c7b\uff0c\u4f7f\u7528\u65f6\u9700\u8981\u7ee7\u627f\u8fd9\u4e2a\u62bd\u8c61\u7c7b\uff0c\u4ece\u800c\u5b9e\u73b0\u5177\u4f53\u7684\u6269\u5c55\u7c7b\u5b9e\u73b0\u7c7b\u3002\u5e76\u6ce8\u518c\u5230 DGC \u4e2d\u3002\u4e4b\u540e\u5373\u53ef\u6b63\u5e38\u4f7f\u7528\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"public abstract class AbstractExtendClassDefine<EXCLASS> implements ExtendClassDefine<EXCLASS> {\n\n    /** \u5199\u65b9\u6cd5\u96c6\u5408 */\n    protected Set<String> writeName = new HashSet<>();\n\n    @Override\n    public abstract boolean isSubClassOrSelf(Object obj);\n\n    @Override\n    public boolean isWriteOps(Method method) {\n        return writeName.contains(method.getName());\n    }\n\n    @Override\n    public abstract Set<Object> getCollections(EXCLASS extendObject);\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},11151:(e,n,c)=>{c.d(n,{Z:()=>l,a:()=>r});var s=c(67294);const i={},t=s.createContext(i);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);