"use strict";(self.webpackChunkphoenix_website_next=self.webpackChunkphoenix_website_next||[]).push([[7910],{14442:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>d,metadata:()=>s,toc:()=>c});var t=n(85893),r=n(11151),i=n(74866),l=n(85162);const d={id:"M-2-5-1",title:"2.5.1 Milestone Notes"},o=void 0,s={id:"phoenix-2.x/phoenix/upgrade/2-5-x/M-2-5-1",title:"2.5.1 Milestone Notes",description:"\u65b0\u529f\u80fd\u7279\u6027",source:"@site/versioned_docs/version-2.5.5/phoenix-2.x/01-phoenix/07-upgrade/2-5-x/2-5-1.md",sourceDirName:"phoenix-2.x/01-phoenix/07-upgrade/2-5-x",slug:"/phoenix-2.x/phoenix/upgrade/2-5-x/M-2-5-1",permalink:"/docs/2.5.5/phoenix-2.x/phoenix/upgrade/2-5-x/M-2-5-1",draft:!1,unlisted:!1,editUrl:"https://github.com/PhoenixIQ/versioned_docs/version-2.5.5/phoenix-2.x/01-phoenix/07-upgrade/2-5-x/2-5-1.md",tags:[],version:"2.5.5",frontMatter:{id:"M-2-5-1",title:"2.5.1 Milestone Notes"}},u={},c=[{value:"\u65b0\u529f\u80fd\u7279\u6027",id:"\u65b0\u529f\u80fd\u7279\u6027",level:2},{value:"\u6742\u9879",id:"\u6742\u9879",level:2},{value:"\u4e0d\u517c\u5bb9\u7684 API \u53d8\u52a8",id:"\u4e0d\u517c\u5bb9\u7684-api-\u53d8\u52a8",level:2},{value:"1. DistributedDataRemote \u5305\u7ed3\u6784\u8c03\u6574",id:"1-distributeddataremote-\u5305\u7ed3\u6784\u8c03\u6574",level:4},{value:"2. DistributedDataRemote \u5206\u5e03\u5f0f\u6570\u636e\u8fdc\u7a0b\u63a5\u53e3 API \u53d8\u52a8",id:"2-distributeddataremote-\u5206\u5e03\u5f0f\u6570\u636e\u8fdc\u7a0b\u63a5\u53e3-api-\u53d8\u52a8",level:4},{value:"3. DDataMap \u63a5\u53e3\u65b0\u589e API",id:"3-ddatamap-\u63a5\u53e3\u65b0\u589e-api",level:4},{value:"4. DdataChangeCmd \u7c7b\u65b0\u589e\u65b9\u6cd5",id:"4-ddatachangecmd-\u7c7b\u65b0\u589e\u65b9\u6cd5",level:4}];function p(a){const e={code:"code",h2:"h2",h4:"h4",li:"li",pre:"pre",ul:"ul",...(0,r.a)(),...a.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"\u65b0\u529f\u80fd\u7279\u6027",children:"\u65b0\u529f\u80fd\u7279\u6027"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Phoenix-Console \u652f\u6301 Topic \u6d88\u8d39\u63a7\u5236"}),"\n",(0,t.jsx)(e.li,{children:"\u5b9e\u4f53\u805a\u5408\u6839\u589e\u52a0 Timer \u529f\u80fd"}),"\n",(0,t.jsx)(e.li,{children:"\u5206\u5e03\u5f0f\u6570\u636e\u503c\u8fc7\u671f"}),"\n",(0,t.jsx)(e.li,{children:"\u5206\u5e03\u5f0f\u6570\u636e\u6279\u91cf\u5220\u9664"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u6742\u9879",children:"\u6742\u9879"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u63d0\u9ad8\u4e86 Consul \u7ec4\u5efa\u96c6\u7fa4\u7684\u7a33\u5b9a\u6027"}),"\n",(0,t.jsx)(e.li,{children:"\u63d0\u9ad8\u4e86 Phoenix \u6d4b\u8bd5\u7684\u7a33\u5b9a\u6027"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u4e0d\u517c\u5bb9\u7684-api-\u53d8\u52a8",children:"\u4e0d\u517c\u5bb9\u7684 API \u53d8\u52a8"}),"\n",(0,t.jsx)(e.h4,{id:"1-distributeddataremote-\u5305\u7ed3\u6784\u8c03\u6574",children:"1. DistributedDataRemote \u5305\u7ed3\u6784\u8c03\u6574"}),"\n",(0,t.jsxs)(i.Z,{children:[(0,t.jsx)(l.Z,{value:"2.5.0",label:"2.5.0",default:!0,children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"- com.iquantex.phoenix.distributed.data\n   - DefaultDistributedDataRemote \n   - DistributedDataRemote\n   - api\n       - DDataAPI\n   - model\n       - Subscriber\n"})})}),(0,t.jsx)(l.Z,{value:"2.5.1",label:"2.5.1",children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"- com.iquantex.phoenix.core.ddata\n    - DistributedDataRemote\n    - DData\n    - DDataApi\n    - DDataMode\n    - ExpireDData\n    - Subscriber\n    - AbstractDistributedDataRemote\n- com.iquantex.phoenix.client.ddata\n    - ClientDistributedDataRemote\n- com.iquantex.phoenix.distributed.data\n   - DefaultDistributedDataRemote \n"})})})]}),"\n",(0,t.jsx)(e.h4,{id:"2-distributeddataremote-\u5206\u5e03\u5f0f\u6570\u636e\u8fdc\u7a0b\u63a5\u53e3-api-\u53d8\u52a8",children:"2. DistributedDataRemote \u5206\u5e03\u5f0f\u6570\u636e\u8fdc\u7a0b\u63a5\u53e3 API \u53d8\u52a8"}),"\n",(0,t.jsxs)(i.Z,{children:[(0,t.jsx)(l.Z,{value:"2.5.0",label:"2.5.0",default:!0,children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"public interface DistributedDataRemote {\n\n    /**\n     * \u65b0\u589e\u5206\u5e03\u5f0f\u6570\u636e\n     *\n     * @param ddataCls\n     * @param ddataCode\n     * @param value\n     * @param targetTopic\n     */\n    <T> boolean addDData(Class<T> ddataCls, String ddataCode, Object value, String targetTopic);\n\n    /**\n     * \u5355\u67e5\u8be2\u5206\u5e03\u5f0f\u5bf9\u8c61\uff0c\u4e0d\u7ef4\u62a4\u8ba2\u9605\u5173\u7cfb\n     *\n     * @param ddataCls\n     * @param ddataCode\n     * @param targetTopic\n     * @param <T>\n     * @return\n     */\n    <T> T queryDData(Class<T> ddataCls, String ddataCode, String targetTopic);\n\n    /**\n     * \u8c03\u7528\u8fdc\u7a0b\u65b9\u5f0f\u83b7\u53d6\u5206\u5e03\u5f0f\u6570\u636e\u5e76\u5efa\u7acb\u8ba2\u9605\u5173\u7cfb\n     *\n     * @param ddataCls\n     * @param ddataCode\n     * @param targetTopic\n     * @param selfTopic\n     * @param <T>\n     * @return\n     */\n    <T> T getDData(Class<T> ddataCls, String ddataCode, String targetTopic, String selfTopic);\n\n    /**\n     * \u89e3\u7ed1\u67d0\u4e00\u8ba2\u9605\u8005\u548c\u67d0\u4e00\u5177\u4f53\u7684\u5206\u5e03\u5f0f\u6570\u636e\u4e4b\u95f4\u7684\u8ba2\u9605\u5173\u7cfb\n     *\n     * @param ddataCls\n     * @param ddataCode\n     * @param targetTopic\n     * @param selfTopic\n     */\n    <T> boolean remove(Class<T> ddataCls, String ddataCode, String targetTopic, String selfTopic);\n}\n"})})}),(0,t.jsx)(l.Z,{value:"2.5.1",label:"2.5.1",children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"public interface DistributedDataRemote {\n\n    /**\n     * \u65b0\u589e\u5355\u4e2a\u5206\u5e03\u5f0f\u6570\u636e, \u7531\u4e00\u4e2a\u805a\u5408\u6839\u7ef4\u62a4\n     *\n     * @param ddataCls\n     * @param ddataCode\n     * @param value\n     * @param targetTopic\n     */\n    <T> boolean addSingleDData(\n            Class<T> ddataCls, String ddataCode, Object value, String targetTopic);\n    /**\n     * \u65b0\u589e\u5e26\u8fc7\u671f\u65f6\u95f4\u7684\u5355\u4e2a\u5206\u5e03\u5f0f\u6570\u636e, \u7531\u4e00\u4e2a\u805a\u5408\u6839\u7ef4\u62a4\n     *\n     * @param ddataCls\n     * @param ddataCode\n     * @param value\n     * @param targetTopic\n     * @param expireTime \u8fc7\u671f\u65f6\u95f4\n     */\n    <T> boolean addSingleDData(\n            Class<T> ddataCls, String ddataCode, Object value, String targetTopic, long expireTime);\n\n    /**\n     * \u65b0\u589e\u5206\u5e03\u5f0f\u6570\u636e\n     *\n     * @param ddataCls\n     * @param ddataCode\n     * @param value\n     * @param targetTopic\n     */\n    <T> boolean addDData(Class<T> ddataCls, String ddataCode, Object value, String targetTopic);\n    /**\n     * \u65b0\u589e\u5e26\u8fc7\u671f\u65f6\u95f4\u7684\u5206\u5e03\u5f0f\u6570\u636e\n     *\n     * @param ddataCls\n     * @param ddataCode\n     * @param value\n     * @param targetTopic\n     * @param expireTime \u8fc7\u671f\u65f6\u95f4\n     */\n    <T> boolean addDData(\n            Class<T> ddataCls, String ddataCode, Object value, String targetTopic, long expireTime);\n    /**\n     * \u5355\u67e5\u8be2\u5355\u4e2a\u805a\u5408\u6839\u7684\u5206\u5e03\u5f0f\u5bf9\u8c61\uff0c\u4e0d\u7ef4\u62a4\u8ba2\u9605\u5173\u7cfb\n     *\n     * @param ddataCls\n     * @param ddataCode\n     * @param targetTopic\n     * @param <T>\n     * @return\n     */\n    <T> DData<T> querySingleDData(Class<T> ddataCls, String ddataCode, String targetTopic);\n\n    /**\n     * \u5355\u67e5\u8be2\u5206\u5e03\u5f0f\u5bf9\u8c61\uff0c\u4e0d\u7ef4\u62a4\u8ba2\u9605\u5173\u7cfb\n     *\n     * @param ddataCls\n     * @param ddataCode\n     * @param targetTopic\n     * @param <T>\n     * @return\n     */\n    <T> DData<T> queryDData(Class<T> ddataCls, String ddataCode, String targetTopic);\n\n    /**\n     * \u8c03\u7528\u8fdc\u7a0b\u65b9\u5f0f\u83b7\u53d6\u5355\u4e2a\u805a\u5408\u6839\u7684\u5206\u5e03\u5f0f\u6570\u636e\u5e76\u5efa\u7acb\u8ba2\u9605\u5173\u7cfb\n     *\n     * @param ddataCls\n     * @param ddataCode\n     * @param targetTopic\n     * @param selfTopic\n     * @param <T>\n     * @return\n     */\n    <T> DData<T> subscribeSingle(\n            Class<T> ddataCls, String ddataCode, String targetTopic, String selfTopic);\n\n    /**\n     * \u89e3\u7ed1\u67d0\u4e00\u8ba2\u9605\u8005\u548c\u67d0\u4e00\u5177\u4f53\u5355\u4e2a\u805a\u5408\u6839\u7684\u5206\u5e03\u5f0f\u6570\u636e\u4e4b\u95f4\u7684\u8ba2\u9605\u5173\u7cfb\n     *\n     * @param ddataCls\n     * @param ddataCode\n     * @param targetTopic\n     * @param selfTopic\n     */\n    <T> boolean unsubscribeSingle(\n            Class<T> ddataCls, String ddataCode, String targetTopic, String selfTopic);\n\n    /**\n     * \u8c03\u7528\u8fdc\u7a0b\u65b9\u5f0f\u83b7\u53d6\u5206\u5e03\u5f0f\u6570\u636e\u5e76\u5efa\u7acb\u8ba2\u9605\u5173\u7cfb\n     *\n     * @param ddataCls\n     * @param ddataCode\n     * @param targetTopic\n     * @param selfTopic\n     * @param <T>\n     * @return\n     */\n    <T> DData<T> subscribe(\n            Class<T> ddataCls, String ddataCode, String targetTopic, String selfTopic);\n\n    /**\n     * \u89e3\u7ed1\u67d0\u4e00\u8ba2\u9605\u8005\u548c\u67d0\u4e00\u5177\u4f53\u7684\u5206\u5e03\u5f0f\u6570\u636e\u4e4b\u95f4\u7684\u8ba2\u9605\u5173\u7cfb\n     *\n     * @param ddataCls\n     * @param ddataCode\n     * @param targetTopic\n     * @param selfTopic\n     */\n    <T> boolean unsubscribe(\n            Class<T> ddataCls, String ddataCode, String targetTopic, String selfTopic);\n    /**\n     * \u6e05\u9664\u8be5\u7c7b\u4e0b\u6240\u6709\u7684\u5206\u5e03\u5f0f\u6570\u636e, \u4ec5\u4f5c\u7528\u4e8e MultiMode\n     *\n     * @param ddataCls\n     * @param targetTopic\n     */\n    <T> boolean clear(Class<T> ddataCls, String targetTopic);\n}\n"})})})]}),"\n",(0,t.jsx)(e.h4,{id:"3-ddatamap-\u63a5\u53e3\u65b0\u589e-api",children:"3. DDataMap \u63a5\u53e3\u65b0\u589e API"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"public class DDataMap<VALUE> implements Serializable {\n    /**\n     * \u66f4\u65b0\u672c\u5730\u7684\u5206\u5e03\u5f0f\u6570\u636e\n     *\n     * @param key\n     * @param value\n     */\n    public void updateLocal(String key, VALUE value);\n\n    /** \u66f4\u65b0\u5e26\u8fc7\u671f\u65f6\u95f4\u7684\u672c\u5730\u7684\u5206\u5e03\u5f0f\u6570\u636e */\n    public void updateLocal(String key, VALUE value, long expireTime);\n    /**\n     * \u6839\u636e\u8ba2\u9605\u6d88\u606f\u66f4\u65b0\u672c\u5730\u7f13\u5b58\n     *\n     * @param cmd\n     */\n    public void updateLocal(DdataChangeCmd cmd);\n    /**\n     * <strong>Warning:</strong> \u6e05\u7406\u672c\u5730\u7f13\u5b58\u4ee5\u53ca\u8fdc\u7a0b\u5206\u5e03\u5f0f\u805a\u5408\u6839\u4e0b\u7684\u6240\u6709\u5206\u5e03\u5f0f\u6570\u636e.\n     *\n     * @return\n     */\n    public boolean clear();\n}\n\n"})}),"\n",(0,t.jsx)(e.h4,{id:"4-ddatachangecmd-\u7c7b\u65b0\u589e\u65b9\u6cd5",children:"4. DdataChangeCmd \u7c7b\u65b0\u589e\u65b9\u6cd5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"public class DdataChangeCmd implements WriteCmd {\n\n    /**\n     * \u65b0\u589e\u83b7\u53d6\u8fc7\u671f\u65f6\u95f4\n     * @return \u53ef\u80fd\u4e3a null\n     */\n    public Long getExpireTime();\n}\n\n"})})]})}function m(a={}){const{wrapper:e}={...(0,r.a)(),...a.components};return e?(0,t.jsx)(e,{...a,children:(0,t.jsx)(p,{...a})}):p(a)}},85162:(a,e,n)=>{n.d(e,{Z:()=>l});n(67294);var t=n(86010);const r={tabItem:"tabItem_Ymn6"};var i=n(85893);function l(a){let{children:e,hidden:n,className:l}=a;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,l),hidden:n,children:e})}},74866:(a,e,n)=>{n.d(e,{Z:()=>D});var t=n(67294),r=n(86010),i=n(12466),l=n(16550),d=n(20469),o=n(91980),s=n(67392),u=n(50012);function c(a){return t.Children.toArray(a).filter((a=>"\n"!==a)).map((a=>{if(!a||(0,t.isValidElement)(a)&&function(a){const{props:e}=a;return!!e&&"object"==typeof e&&"value"in e}(a))return a;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof a.type?a.type:a.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(a){const{values:e,children:n}=a;return(0,t.useMemo)((()=>{const a=e??function(a){return c(a).map((a=>{let{props:{value:e,label:n,attributes:t,default:r}}=a;return{value:e,label:n,attributes:t,default:r}}))}(n);return function(a){const e=(0,s.l)(a,((a,e)=>a.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((a=>a.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(a),a}),[e,n])}function m(a){let{value:e,tabValues:n}=a;return n.some((a=>a.value===e))}function g(a){let{queryString:e=!1,groupId:n}=a;const r=(0,l.k6)(),i=function(a){let{queryString:e=!1,groupId:n}=a;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:e,groupId:n});return[(0,o._X)(i),(0,t.useCallback)((a=>{if(!i)return;const e=new URLSearchParams(r.location.search);e.set(i,a),r.replace({...r.location,search:e.toString()})}),[i,r])]}function h(a){const{defaultValue:e,queryString:n=!1,groupId:r}=a,i=p(a),[l,o]=(0,t.useState)((()=>function(a){let{defaultValue:e,tabValues:n}=a;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!m({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((a=>a.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const t=n.find((a=>a.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:e,tabValues:i}))),[s,c]=g({queryString:n,groupId:r}),[h,b]=function(a){let{groupId:e}=a;const n=function(a){return a?`docusaurus.tab.${a}`:null}(e),[r,i]=(0,u.Nk)(n);return[r,(0,t.useCallback)((a=>{n&&i.set(a)}),[n,i])]}({groupId:r}),T=(()=>{const a=s??h;return m({value:a,tabValues:i})?a:null})();(0,d.Z)((()=>{T&&o(T)}),[T]);return{selectedValue:l,selectValue:(0,t.useCallback)((a=>{if(!m({value:a,tabValues:i}))throw new Error(`Can't select invalid tab value=${a}`);o(a),c(a),b(a)}),[c,b,i]),tabValues:i}}var b=n(72389);const T={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(85893);function C(a){let{className:e,block:n,selectedValue:t,selectValue:l,tabValues:d}=a;const o=[],{blockElementScrollPositionUntilNextRender:s}=(0,i.o5)(),u=a=>{const e=a.currentTarget,n=o.indexOf(e),r=d[n].value;r!==t&&(s(e),l(r))},c=a=>{let e=null;switch(a.key){case"Enter":u(a);break;case"ArrowRight":{const n=o.indexOf(a.currentTarget)+1;e=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(a.currentTarget)-1;e=o[n]??o[o.length-1];break}}e?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},e),children:d.map((a=>{let{value:e,label:n,attributes:i}=a;return(0,x.jsx)("li",{role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,ref:a=>o.push(a),onKeyDown:c,onClick:u,...i,className:(0,r.Z)("tabs__item",T.tabItem,i?.className,{"tabs__item--active":t===e}),children:n??e},e)}))})}function f(a){let{lazy:e,children:n,selectedValue:r}=a;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const a=i.find((a=>a.props.value===r));return a?(0,t.cloneElement)(a,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((a,e)=>(0,t.cloneElement)(a,{key:e,hidden:a.props.value!==r})))})}function v(a){const e=h(a);return(0,x.jsxs)("div",{className:(0,r.Z)("tabs-container",T.tabList),children:[(0,x.jsx)(C,{...a,...e}),(0,x.jsx)(f,{...a,...e})]})}function D(a){const e=(0,b.Z)();return(0,x.jsx)(v,{...a,children:c(a.children)},String(e))}},11151:(a,e,n)=>{n.d(e,{Z:()=>d,a:()=>l});var t=n(67294);const r={},i=t.createContext(r);function l(a){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof a?a(e):{...e,...a}}),[e,a])}function d(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(r):a.components||r:l(a.components),t.createElement(i.Provider,{value:e},a.children)}}}]);