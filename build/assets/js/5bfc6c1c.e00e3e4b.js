"use strict";(self.webpackChunkphoenix_website_next=self.webpackChunkphoenix_website_next||[]).push([[70553],{94029:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>d,metadata:()=>s,toc:()=>p});var t=n(85893),r=n(11151),i=n(74866),l=n(85162);const d={id:"M-2-5-2",title:"2.5.2 Milestone Notes"},o=void 0,s={id:"phoenix-2.x/phoenix/upgrade/2-5-0/M-2-5-2",title:"2.5.2 Milestone Notes",description:"\u4f18\u5316",source:"@site/versioned_docs/version-2.5.4/phoenix-2.x/01-phoenix/07-upgrade/2-5-0/2-5-2.md",sourceDirName:"phoenix-2.x/01-phoenix/07-upgrade/2-5-0",slug:"/phoenix-2.x/phoenix/upgrade/2-5-0/M-2-5-2",permalink:"/docs/2.5.4/phoenix-2.x/phoenix/upgrade/2-5-0/M-2-5-2",draft:!1,unlisted:!1,editUrl:"https://github.com/PhoenixIQ/versioned_docs/version-2.5.4/phoenix-2.x/01-phoenix/07-upgrade/2-5-0/2-5-2.md",tags:[],version:"2.5.4",frontMatter:{id:"M-2-5-2",title:"2.5.2 Milestone Notes"}},u={},p=[{value:"\u4f18\u5316",id:"\u4f18\u5316",level:2},{value:"\u6f0f\u6d1e\u4fee\u590d",id:"\u6f0f\u6d1e\u4fee\u590d",level:2},{value:"\u4e0d\u517c\u5bb9\u7684 API \u53d8\u52a8",id:"\u4e0d\u517c\u5bb9\u7684-api-\u53d8\u52a8",level:2},{value:"DistributedDataRemote \u5206\u5e03\u5f0f\u6570\u636e\u8fdc\u7a0b\u63a5\u53e3 API \u53d8\u52a8",id:"distributeddataremote-\u5206\u5e03\u5f0f\u6570\u636e\u8fdc\u7a0b\u63a5\u53e3-api-\u53d8\u52a8",level:4}];function c(a){const e={code:"code",h2:"h2",h4:"h4",li:"li",pre:"pre",ul:"ul",...(0,r.a)(),...a.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"\u4f18\u5316",children:"\u4f18\u5316"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u4f18\u5316\u4e86\u5206\u5e03\u5f0f\u6570\u636e API"}),"\n",(0,t.jsx)(e.li,{children:"\u4f18\u5316\u805a\u5408\u6839\u5b9a\u65f6\u4efb\u52a1\u5185\u90e8\u8c03\u5ea6"}),"\n",(0,t.jsx)(e.li,{children:"\u4f18\u5316 Phoenix \u52a0\u8f7d\u6570\u636e\u6e90\u7684\u901f\u5ea6"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u6f0f\u6d1e\u4fee\u590d",children:"\u6f0f\u6d1e\u4fee\u590d"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u89e3\u51b3\u4e86 DDataMap RPC \u7f13\u5b58\u6570\u636e\u9694\u79bb\u95ee\u9898"}),"\n",(0,t.jsx)(e.li,{children:"\u4fee\u590d Console \u4e0d\u663e\u793a\u4e8b\u52a1\u805a\u5408\u6839\u7684 BUG"}),"\n",(0,t.jsx)(e.li,{children:"\u4fee\u590d\u805a\u5408\u6839\u5408\u6cd5\u6027\u6821\u9a8c BUG"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u4e0d\u517c\u5bb9\u7684-api-\u53d8\u52a8",children:"\u4e0d\u517c\u5bb9\u7684 API \u53d8\u52a8"}),"\n",(0,t.jsx)(e.h4,{id:"distributeddataremote-\u5206\u5e03\u5f0f\u6570\u636e\u8fdc\u7a0b\u63a5\u53e3-api-\u53d8\u52a8",children:"DistributedDataRemote \u5206\u5e03\u5f0f\u6570\u636e\u8fdc\u7a0b\u63a5\u53e3 API \u53d8\u52a8"}),"\n",(0,t.jsxs)(i.Z,{children:[(0,t.jsx)(l.Z,{value:"2.5.1",label:"2.5.1",default:!0,children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"public interface DistributedDataRemote {\n\n    /**\n     * \u65b0\u589e\u5355\u4e2a\u5206\u5e03\u5f0f\u6570\u636e, \u7531\u4e00\u4e2a\u805a\u5408\u6839\u7ef4\u62a4\n     *\n     * @param ddataCls\n     * @param ddataCode\n     * @param value\n     * @param targetTopic\n     */\n    <T> boolean addSingleDData(\n            Class<T> ddataCls, String ddataCode, Object value, String targetTopic);\n    /**\n     * \u65b0\u589e\u5e26\u8fc7\u671f\u65f6\u95f4\u7684\u5355\u4e2a\u5206\u5e03\u5f0f\u6570\u636e, \u7531\u4e00\u4e2a\u805a\u5408\u6839\u7ef4\u62a4\n     *\n     * @param ddataCls\n     * @param ddataCode\n     * @param value\n     * @param targetTopic\n     * @param expireTime \u8fc7\u671f\u65f6\u95f4\n     */\n    <T> boolean addSingleDData(\n            Class<T> ddataCls, String ddataCode, Object value, String targetTopic, long expireTime);\n\n    /**\n     * \u65b0\u589e\u5206\u5e03\u5f0f\u6570\u636e\n     *\n     * @param ddataCls\n     * @param ddataCode\n     * @param value\n     * @param targetTopic\n     */\n    <T> boolean addDData(Class<T> ddataCls, String ddataCode, Object value, String targetTopic);\n    /**\n     * \u65b0\u589e\u5e26\u8fc7\u671f\u65f6\u95f4\u7684\u5206\u5e03\u5f0f\u6570\u636e\n     *\n     * @param ddataCls\n     * @param ddataCode\n     * @param value\n     * @param targetTopic\n     * @param expireTime \u8fc7\u671f\u65f6\u95f4\n     */\n    <T> boolean addDData(\n            Class<T> ddataCls, String ddataCode, Object value, String targetTopic, long expireTime);\n    /**\n     * \u5355\u67e5\u8be2\u5355\u4e2a\u805a\u5408\u6839\u7684\u5206\u5e03\u5f0f\u5bf9\u8c61\uff0c\u4e0d\u7ef4\u62a4\u8ba2\u9605\u5173\u7cfb\n     *\n     * @param ddataCls\n     * @param ddataCode\n     * @param targetTopic\n     * @param <T>\n     * @return\n     */\n    <T> DData<T> querySingleDData(Class<T> ddataCls, String ddataCode, String targetTopic);\n\n    /**\n     * \u5355\u67e5\u8be2\u5206\u5e03\u5f0f\u5bf9\u8c61\uff0c\u4e0d\u7ef4\u62a4\u8ba2\u9605\u5173\u7cfb\n     *\n     * @param ddataCls\n     * @param ddataCode\n     * @param targetTopic\n     * @param <T>\n     * @return\n     */\n    <T> DData<T> queryDData(Class<T> ddataCls, String ddataCode, String targetTopic);\n\n    /**\n     * \u8c03\u7528\u8fdc\u7a0b\u65b9\u5f0f\u83b7\u53d6\u5355\u4e2a\u805a\u5408\u6839\u7684\u5206\u5e03\u5f0f\u6570\u636e\u5e76\u5efa\u7acb\u8ba2\u9605\u5173\u7cfb\n     *\n     * @param ddataCls\n     * @param ddataCode\n     * @param targetTopic\n     * @param selfTopic\n     * @param <T>\n     * @return\n     */\n    <T> DData<T> subscribeSingle(\n            Class<T> ddataCls, String ddataCode, String targetTopic, String selfTopic);\n\n    /**\n     * \u89e3\u7ed1\u67d0\u4e00\u8ba2\u9605\u8005\u548c\u67d0\u4e00\u5177\u4f53\u5355\u4e2a\u805a\u5408\u6839\u7684\u5206\u5e03\u5f0f\u6570\u636e\u4e4b\u95f4\u7684\u8ba2\u9605\u5173\u7cfb\n     *\n     * @param ddataCls\n     * @param ddataCode\n     * @param targetTopic\n     * @param selfTopic\n     */\n    <T> boolean unsubscribeSingle(\n            Class<T> ddataCls, String ddataCode, String targetTopic, String selfTopic);\n\n    /**\n     * \u8c03\u7528\u8fdc\u7a0b\u65b9\u5f0f\u83b7\u53d6\u5206\u5e03\u5f0f\u6570\u636e\u5e76\u5efa\u7acb\u8ba2\u9605\u5173\u7cfb\n     *\n     * @param ddataCls\n     * @param ddataCode\n     * @param targetTopic\n     * @param selfTopic\n     * @param <T>\n     * @return\n     */\n    <T> DData<T> subscribe(\n            Class<T> ddataCls, String ddataCode, String targetTopic, String selfTopic);\n\n    /**\n     * \u89e3\u7ed1\u67d0\u4e00\u8ba2\u9605\u8005\u548c\u67d0\u4e00\u5177\u4f53\u7684\u5206\u5e03\u5f0f\u6570\u636e\u4e4b\u95f4\u7684\u8ba2\u9605\u5173\u7cfb\n     *\n     * @param ddataCls\n     * @param ddataCode\n     * @param targetTopic\n     * @param selfTopic\n     */\n    <T> boolean unsubscribe(\n            Class<T> ddataCls, String ddataCode, String targetTopic, String selfTopic);\n    /**\n     * \u6e05\u9664\u8be5\u7c7b\u4e0b\u6240\u6709\u7684\u5206\u5e03\u5f0f\u6570\u636e, \u4ec5\u4f5c\u7528\u4e8e MultiMode\n     *\n     * @param ddataCls\n     * @param targetTopic\n     */\n    <T> boolean clear(Class<T> ddataCls, String targetTopic);\n}\n"})})}),(0,t.jsx)(l.Z,{value:"2.5.2",label:"2.5.2",children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"public interface DistributedDataRemote {\n\n    /**\n     * \u65b0\u589e\u5355\u4e2a\u5206\u5e03\u5f0f\u6570\u636e, \u7531\u4e00\u4e2a\u805a\u5408\u6839\u7ef4\u62a4\n     *\n     * @param ddataCls\n     * @param ddataCode\n     * @param value\n     * @param targetTopic\n     */\n    <T> boolean addSingleDData(\n            Class<T> ddataCls, String ddataCode, Object value, String targetTopic);\n    /**\n     * \u65b0\u589e\u5e26\u8fc7\u671f\u65f6\u95f4\u7684\u5355\u4e2a\u5206\u5e03\u5f0f\u6570\u636e, \u7531\u4e00\u4e2a\u805a\u5408\u6839\u7ef4\u62a4\n     *\n     * @param ddataCls\n     * @param ddataCode\n     * @param value\n     * @param targetTopic\n     * @param expireTime \u8fc7\u671f\u65f6\u95f4\n     */\n    <T> boolean addSingleDData(\n            Class<T> ddataCls,\n            String ddataCode,\n            Object value,\n            String targetTopic,\n            Duration expireTime);\n\n    /**\n     * \u65b0\u589e\u5206\u5e03\u5f0f\u6570\u636e\n     *\n     * @param ddataCls\n     * @param ddataCode\n     * @param value\n     * @param targetTopic\n     */\n    <T> boolean addDData(Class<T> ddataCls, String ddataCode, Object value, String targetTopic);\n    /**\n     * \u65b0\u589e\u5e26\u8fc7\u671f\u65f6\u95f4\u7684\u5206\u5e03\u5f0f\u6570\u636e\n     *\n     * @param ddataCls\n     * @param ddataCode\n     * @param value\n     * @param targetTopic\n     * @param expireTime \u8fc7\u671f\u65f6\u95f4\n     */\n    <T> boolean addDData(\n            Class<T> ddataCls,\n            String ddataCode,\n            Object value,\n            String targetTopic,\n            Duration expireTime);\n    /**\n     * \u5355\u67e5\u8be2\u5355\u4e2a\u805a\u5408\u6839\u7684\u5206\u5e03\u5f0f\u5bf9\u8c61\uff0c\u4e0d\u7ef4\u62a4\u8ba2\u9605\u5173\u7cfb\n     *\n     * @param ddataCls\n     * @param ddataCode\n     * @param targetTopic\n     * @param <T>\n     * @return\n     */\n    <T> DData<T> querySingleDData(Class<T> ddataCls, String ddataCode, String targetTopic);\n\n    /**\n     * \u5355\u67e5\u8be2\u5206\u5e03\u5f0f\u5bf9\u8c61\uff0c\u4e0d\u7ef4\u62a4\u8ba2\u9605\u5173\u7cfb\n     *\n     * @param ddataCls\n     * @param ddataCode\n     * @param targetTopic\n     * @param <T>\n     * @return\n     */\n    <T> DData<T> queryDData(Class<T> ddataCls, String ddataCode, String targetTopic);\n\n    /**\n     * \u8c03\u7528\u8fdc\u7a0b\u65b9\u5f0f\u83b7\u53d6\u5355\u4e2a\u805a\u5408\u6839\u7684\u5206\u5e03\u5f0f\u6570\u636e\u5e76\u5efa\u7acb\u8ba2\u9605\u5173\u7cfb\n     *\n     * @param ddataCls\n     * @param ddataCode\n     * @param targetTopic\n     * @param selfTopic\n     * @param <T>\n     * @return\n     */\n    <T> DData<T> subscribeSingle(\n            Class<T> ddataCls, String ddataCode, String targetTopic, String selfTopic);\n\n    /**\n     * \u89e3\u7ed1\u67d0\u4e00\u8ba2\u9605\u8005\u548c\u67d0\u4e00\u5177\u4f53\u5355\u4e2a\u805a\u5408\u6839\u7684\u5206\u5e03\u5f0f\u6570\u636e\u4e4b\u95f4\u7684\u8ba2\u9605\u5173\u7cfb\n     *\n     * @param ddataCls\n     * @param ddataCode\n     * @param targetTopic\n     * @param selfTopic\n     */\n    <T> boolean unsubscribeSingle(\n            Class<T> ddataCls, String ddataCode, String targetTopic, String selfTopic);\n\n    /**\n     * \u8c03\u7528\u8fdc\u7a0b\u65b9\u5f0f\u83b7\u53d6\u5206\u5e03\u5f0f\u6570\u636e\u5e76\u5efa\u7acb\u8ba2\u9605\u5173\u7cfb\n     *\n     * @param ddataCls\n     * @param ddataCode\n     * @param targetTopic\n     * @param selfTopic\n     * @param <T>\n     * @return\n     */\n    <T> DData<T> subscribe(\n            Class<T> ddataCls, String ddataCode, String targetTopic, String selfTopic);\n\n    /**\n     * \u89e3\u7ed1\u67d0\u4e00\u8ba2\u9605\u8005\u548c\u67d0\u4e00\u5177\u4f53\u7684\u5206\u5e03\u5f0f\u6570\u636e\u4e4b\u95f4\u7684\u8ba2\u9605\u5173\u7cfb\n     *\n     * @param ddataCls\n     * @param ddataCode\n     * @param targetTopic\n     * @param selfTopic\n     */\n    <T> boolean unsubscribe(\n            Class<T> ddataCls, String ddataCode, String targetTopic, String selfTopic);\n    /**\n     * \u6e05\u9664\u8be5\u7c7b\u4e0b\u6240\u6709\u7684\u5206\u5e03\u5f0f\u6570\u636e, \u4ec5\u4f5c\u7528\u4e8e MultiMode\n     *\n     * @param ddataCls\n     * @param targetTopic\n     */\n    <T> boolean clear(Class<T> ddataCls, String targetTopic);\n}\n"})})})]})]})}function m(a={}){const{wrapper:e}={...(0,r.a)(),...a.components};return e?(0,t.jsx)(e,{...a,children:(0,t.jsx)(c,{...a})}):c(a)}},85162:(a,e,n)=>{n.d(e,{Z:()=>l});n(67294);var t=n(86010);const r={tabItem:"tabItem_Ymn6"};var i=n(85893);function l(a){let{children:e,hidden:n,className:l}=a;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,l),hidden:n,children:e})}},74866:(a,e,n)=>{n.d(e,{Z:()=>S});var t=n(67294),r=n(86010),i=n(12466),l=n(16550),d=n(20469),o=n(91980),s=n(67392),u=n(50012);function p(a){return t.Children.toArray(a).filter((a=>"\n"!==a)).map((a=>{if(!a||(0,t.isValidElement)(a)&&function(a){const{props:e}=a;return!!e&&"object"==typeof e&&"value"in e}(a))return a;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof a.type?a.type:a.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function c(a){const{values:e,children:n}=a;return(0,t.useMemo)((()=>{const a=e??function(a){return p(a).map((a=>{let{props:{value:e,label:n,attributes:t,default:r}}=a;return{value:e,label:n,attributes:t,default:r}}))}(n);return function(a){const e=(0,s.l)(a,((a,e)=>a.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((a=>a.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(a),a}),[e,n])}function m(a){let{value:e,tabValues:n}=a;return n.some((a=>a.value===e))}function g(a){let{queryString:e=!1,groupId:n}=a;const r=(0,l.k6)(),i=function(a){let{queryString:e=!1,groupId:n}=a;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:e,groupId:n});return[(0,o._X)(i),(0,t.useCallback)((a=>{if(!i)return;const e=new URLSearchParams(r.location.search);e.set(i,a),r.replace({...r.location,search:e.toString()})}),[i,r])]}function T(a){const{defaultValue:e,queryString:n=!1,groupId:r}=a,i=c(a),[l,o]=(0,t.useState)((()=>function(a){let{defaultValue:e,tabValues:n}=a;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!m({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((a=>a.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const t=n.find((a=>a.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:e,tabValues:i}))),[s,p]=g({queryString:n,groupId:r}),[T,C]=function(a){let{groupId:e}=a;const n=function(a){return a?`docusaurus.tab.${a}`:null}(e),[r,i]=(0,u.Nk)(n);return[r,(0,t.useCallback)((a=>{n&&i.set(a)}),[n,i])]}({groupId:r}),b=(()=>{const a=s??T;return m({value:a,tabValues:i})?a:null})();(0,d.Z)((()=>{b&&o(b)}),[b]);return{selectedValue:l,selectValue:(0,t.useCallback)((a=>{if(!m({value:a,tabValues:i}))throw new Error(`Can't select invalid tab value=${a}`);o(a),p(a),C(a)}),[p,C,i]),tabValues:i}}var C=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var h=n(85893);function f(a){let{className:e,block:n,selectedValue:t,selectValue:l,tabValues:d}=a;const o=[],{blockElementScrollPositionUntilNextRender:s}=(0,i.o5)(),u=a=>{const e=a.currentTarget,n=o.indexOf(e),r=d[n].value;r!==t&&(s(e),l(r))},p=a=>{let e=null;switch(a.key){case"Enter":u(a);break;case"ArrowRight":{const n=o.indexOf(a.currentTarget)+1;e=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(a.currentTarget)-1;e=o[n]??o[o.length-1];break}}e?.focus()};return(0,h.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},e),children:d.map((a=>{let{value:e,label:n,attributes:i}=a;return(0,h.jsx)("li",{role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,ref:a=>o.push(a),onKeyDown:p,onClick:u,...i,className:(0,r.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":t===e}),children:n??e},e)}))})}function v(a){let{lazy:e,children:n,selectedValue:r}=a;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const a=i.find((a=>a.props.value===r));return a?(0,t.cloneElement)(a,{className:"margin-top--md"}):null}return(0,h.jsx)("div",{className:"margin-top--md",children:i.map(((a,e)=>(0,t.cloneElement)(a,{key:e,hidden:a.props.value!==r})))})}function x(a){const e=T(a);return(0,h.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,h.jsx)(f,{...a,...e}),(0,h.jsx)(v,{...a,...e})]})}function S(a){const e=(0,C.Z)();return(0,h.jsx)(x,{...a,children:p(a.children)},String(e))}},11151:(a,e,n)=>{n.d(e,{Z:()=>d,a:()=>l});var t=n(67294);const r={},i=t.createContext(r);function l(a){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof a?a(e):{...e,...a}}),[e,a])}function d(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(r):a.components||r:l(a.components),t.createElement(i.Provider,{value:e},a.children)}}}]);