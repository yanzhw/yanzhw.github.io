(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[1269],{3905:function(e,a,t){"use strict";t.d(a,{Zo:function(){return o},kt:function(){return h}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),i=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):m(m({},a),e)),t},o=function(e){var a=i(e.components);return n.createElement(l.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},N=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),N=i(t),h=r,k=N["".concat(l,".").concat(h)]||N[h]||c[h]||s;return t?n.createElement(k,m(m({ref:a},o),{},{components:t})):n.createElement(k,m({ref:a},o))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,m=new Array(s);m[0]=N;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,m[1]=p;for(var i=2;i<s;i++)m[i]=t[i];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},2970:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return p},metadata:function(){return l},toc:function(){return i},default:function(){return c}});var n=t(22122),r=t(19756),s=(t(67294),t(3905)),m=["components"],p={id:"A6.\u54c8\u5e0c\u8868",title:"A6.\u54c8\u5e0c\u8868","typora-root-url":"../"},l={unversionedId:"Algorithm/A6.\u54c8\u5e0c\u8868",id:"Algorithm/A6.\u54c8\u5e0c\u8868",isDocsHomePage:!1,title:"\u54c8\u5e0c\u8868",description:"\u54c8\u5e0c\u8868\uff08HashTable\uff09\u662f\u4ee5\u952e-\u503c(key-indexed) \u5b58\u50a8\u6570\u636e\u7684\u7ed3\u6784",source:"@site/docs/2.Algorithm/A6.\u54c8\u5e0c\u8868.md",sourceDirName:"2.Algorithm",slug:"/Algorithm/A6.\u54c8\u5e0c\u8868",permalink:"/Algorithm/A6.\u54c8\u5e0c\u8868",editUrl:"https://github.com/worst0/wiki_note/edit/main/docs/2.Algorithm/A6.\u54c8\u5e0c\u8868.md",version:"current",frontMatter:{id:"A6.\u54c8\u5e0c\u8868",title:"A6.\u54c8\u5e0c\u8868","typora-root-url":"../"},sidebar:"Document\ud83d\udcbb",previous:{title:"\u54c8\u5f17\u66fc\u6811\u4e0e\u54c8\u5f17\u66fc\u7f16\u7801",permalink:"/Algorithm/A5.\u54c8\u592b\u66fc\u6811"},next:{title:"\u6392\u5e8f",permalink:"/Algorithm/A7.\u6392\u5e8f"}},i=[{value:"\u54c8\u5e0c\u8868\u7684\u5b9e\u73b0",id:"\u54c8\u5e0c\u8868\u7684\u5b9e\u73b0",children:[]},{value:"\u6784\u9020\u54c8\u5e0c",id:"\u6784\u9020\u54c8\u5e0c",children:[]},{value:"\u5904\u7406\u54c8\u5e0c\u51b2\u7a81",id:"\u5904\u7406\u54c8\u5e0c\u51b2\u7a81",children:[]},{value:"\u4e3a\u4ec0\u4e48\u54c8\u5e0c\u6876\u7684\u957f\u5ea6\u548c\u9664\u7559\u4f59\u6570\u6cd5\u7684M\u4e3a\u8d28\u6570\uff1f",id:"\u4e3a\u4ec0\u4e48\u54c8\u5e0c\u6876\u7684\u957f\u5ea6\u548c\u9664\u7559\u4f59\u6570\u6cd5\u7684m\u4e3a\u8d28\u6570\uff1f",children:[]},{value:"\u5e38\u89c1\u7684\u4e09\u79cd\u54c8\u5e0c\u7ed3\u6784\uff1a",id:"\u5e38\u89c1\u7684\u4e09\u79cd\u54c8\u5e0c\u7ed3\u6784\uff1a",children:[]},{value:"\u5b9e\u73b0",id:"\u5b9e\u73b0",children:[]}],o={toc:i};function c(e){var a=e.components,t=(0,r.Z)(e,m);return(0,s.kt)("wrapper",(0,n.Z)({},o,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u54c8\u5e0c\u8868\uff08HashTable\uff09\u662f\u4ee5\u952e-\u503c(key-indexed) \u5b58\u50a8\u6570\u636e\u7684\u7ed3\u6784")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u4e00\u822c\u6765\u8bf4\u54c8\u5e0c\u8868\u90fd\u662f\u7528\u6765\u5feb\u901f\u5224\u65ad\u4e00\u4e2a\u5143\u7d20\u662f\u5426\u51fa\u73b0\u96c6\u5408\u91cc"),"\u3002"),(0,s.kt)("p",null,"\u54c8\u5e0c\u51fd\u6570\u662f\u628a\u4f20\u5165\u7684key\u6620\u5c04\u5230\u7b26\u53f7\u8868\u7684\u7d22\u5f15\u4e0a\u3002"),(0,s.kt)("p",null,"\u54c8\u5e0c\u78b0\u649e\u5904\u7406\u6709\u591a\u4e2akey\u6620\u5c04\u5230\u76f8\u540c\u7d22\u5f15\u4e0a\u65f6\u7684\u60c5\u666f\uff0c\u5904\u7406\u78b0\u649e\u7684\u666e\u904d\u65b9\u5f0f\u662f\u62c9\u94fe\u6cd5\u548c\u7ebf\u6027\u63a2\u6d4b\u6cd5\u3002"),(0,s.kt)("h3",{id:"\u54c8\u5e0c\u8868\u7684\u5b9e\u73b0"},"\u54c8\u5e0c\u8868\u7684\u5b9e\u73b0"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u5305\u62ec\u6784\u9020\u54c8\u5e0c\u548c\u5904\u7406\u54c8\u5e0c\u51b2\u7a81",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"\u4f7f\u7528\u54c8\u5e0c\u51fd\u6570\u5c06\u88ab\u67e5\u627e\u7684\u952e\u8f6c\u6362\u4e3a\u6570\u7ec4\u7684\u7d22\u5f15\u3002")," \u65b9\u6cd5\u6709 ",(0,s.kt)("strong",{parentName:"li"},"\u76f4\u63a5\u5730\u5740\u6cd5\u3001\u5e73\u65b9\u53d6\u4e2d\u6cd5\u3001\u9664\u7559\u4f59\u6570\u6cd5"),"\u7b49\u3002\u7406\u60f3\u7684\u60c5\u51b5\u4e0b\uff0c\u4e0d\u540c\u7684\u952e\u4f1a\u88ab\u8f6c\u6362\u4e3a\u4e0d\u540c\u7684\u7d22\u5f15\u503c\uff0c\u4f46\u662f\u5728\u6709\u4e9b\u60c5\u51b5\u4e0b\u6211\u4eec\u9700\u8981\u5904\u7406\u591a\u4e2a\u952e\u88ab\u54c8\u5e0c\u5230\u540c\u4e00\u4e2a\u7d22\u5f15\u503c\u7684\u60c5\u51b5\u3002\u6240\u4ee5\u54c8\u5e0c\u67e5\u627e\u7684\u7b2c\u4e8c\u4e2a\u6b65\u9aa4\u5c31\u662f\u5904\u7406\u51b2\u7a81\u3002"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"\u5904\u7406\u54c8\u5e0c\u78b0\u649e\u51b2\u7a81"),"\u3002\u6709\u5f88\u591a\u5904\u7406\u54c8\u5e0c\u78b0\u649e\u51b2\u7a81\u7684\u65b9\u6cd5\uff0c",(0,s.kt)("strong",{parentName:"li"},"\u5982\u62c9\u94fe\u6cd5(\u54c8\u5e0c\u6876)\u3001\u7ebf\u6027\u63a2\u6d4b\u6cd5(\u5f00\u653e\u5b9a\u5740\u6cd5)\u3001\u518d\u54c8\u5e0c\u6cd5\u3001\u516c\u5171\u6ea2\u51fa\u533a\u6cd5"),"\u3002")))),(0,s.kt)("h3",{id:"\u6784\u9020\u54c8\u5e0c"},"\u6784\u9020\u54c8\u5e0c"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u5730\u5740\u6cd5",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u7528key\u6216key\u7684\u7ebf\u6027\u51fd\u6570\u503c\u4f5c\u4e3a\u7d22\u5f15"),(0,s.kt)("li",{parentName:"ul"},"\u5982\u679c\u6240\u6709\u7684\u952e\u90fd\u662f\u6574\u6570\uff0c\u90a3\u4e48\u5c31\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e2a\u7b80\u5355\u7684\u65e0\u5e8f\u6570\u7ec4\u6765\u5b9e\u73b0\uff1a\u5c06\u952e\u4f5c\u4e3a\u7d22\u5f15\uff0c\u503c\u5373\u4e3a\u5176\u5bf9\u5e94\u7684\u503c\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u5feb\u901f\u8bbf\u95ee\u4efb\u610f\u952e\u7684\u503c\u3002"))),(0,s.kt)("li",{parentName:"ul"},"\u5e73\u65b9\u53d6\u4e2d\u6cd5",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"\u5c06key\u5e73\u65b9\u540e\u53d6\u4e2d\u95f4\u7684\u51e0\u4f4d\u6570\u4f5c\u4e3a\u7d22\u5f15\uff0c\u53ef\u4ee5\u662f3\u4f4d\u62164\u4f4d"))),(0,s.kt)("li",{parentName:"ul"},"\u9664\u7559\u4f59\u6570\u6cd5",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"\u6700\u5e38\u7528\u7684\u6784\u9020\u54c8\u5e0c\u51fd\u6570\u7684\u65b9\u6cd5\uff0c\u76f4\u63a5\u5bf9key\u53d6\u6a21\uff0c\u4e5f\u53ef\u4ee5\u5e73\u65b9\u540e\u53d6\u6a21\u3002"),(0,s.kt)("li",{parentName:"ul"},"\u83b7\u53d6",(0,s.kt)("strong",{parentName:"li"},"\u6b63\u6574\u6570\u54c8\u5e0c\u503c"),"\u6700\u5e38\u7528\u7684\u65b9\u6cd5\u662f\u4f7f\u7528\u9664\u7559\u4f59\u6570\u6cd5\uff0c\u5373\u5bf9\u4e8e\u5927\u5c0f\u4e3a\u7d20\u6570M\u7684\u6570\u7ec4\uff0c\u5bf9\u4e8e\u4efb\u610f\u6b63\u6574\u6570k\uff0c\u8ba1\u7b97k\u9664\u4ee5M\u7684\u4f59\u6570\u3002",(0,s.kt)("strong",{parentName:"li"},"M\u4e00\u822c\u53d6\u7d20\u6570"),"\u3002")))),(0,s.kt)("h4",{id:"\u5b57\u7b26\u4e32\u54c8\u5e0c\u503c"},"\u5b57\u7b26\u4e32\u54c8\u5e0c\u503c"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u5c06\u5b57\u7b26\u4e32\u4f5c\u4e3a\u952e\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u5c06\u5b83\u4f5c\u4e3a\u4e00\u4e2a\u5927\u7684\u6574\u6570\uff0c\u5c06\u7ec4\u6210\u5b57\u7b26\u4e32\u7684\u6bcf\u4e00\u4e2a\u5b57\u7b26\u53d6ASCII\u503c\u7136\u540e\u8fdb\u884c\u54c8\u5e0c\uff0c\u91c7\u7528Horner\u8ba1\u7b97\u5b57\u7b26\u4e32\u54c8\u5e0c\u503c\u3002"),(0,s.kt)("li",{parentName:"ul"},"\u5982\u679c\u5bf9\u6bcf\u4e2a\u5b57\u7b26\u53bb\u54c8\u5e0c\u503c\u53ef\u80fd\u4f1a\u6bd4\u8f83\u8017\u65f6\uff0c\u6240\u4ee5\u53ef\u4ee5\u901a\u8fc7\u95f4\u9694\u53d6N\u4e2a\u5b57\u7b26\u6765\u83b7\u53d6\u54c8\u897f\u503c\u6765\u8282\u7701\u65f6\u95f4")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'int hash = 0;\nchar *str = "abcdef";\nfor(int i = 0;i < strlen(str);i++){\n    hash = 31*hash + (int)str[i];\n}\ncout<<hash<<endl;\n')),(0,s.kt)("h3",{id:"\u5904\u7406\u54c8\u5e0c\u51b2\u7a81"},"\u5904\u7406\u54c8\u5e0c\u51b2\u7a81"),(0,s.kt)("h4",{id:"\u62c9\u94fe\u6cd5\uff08\u54c8\u5e0c\u6876\u6cd5\uff09"},"\u62c9\u94fe\u6cd5\uff08\u54c8\u5e0c\u6876\u6cd5\uff09"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u57fa\u672c\u601d\u60f3",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"\u5c06\u5927\u5c0f\u4e3aM\u7684\u6570\u7ec4\u7684\u6bcf\u4e00\u4e2a\u5143\u7d20\u6307\u5411\u4e00\u4e2a\u94fe\u8868\uff0c\u94fe\u8868\u4e2d\u7684\u6bcf\u4e00\u4e2a\u7ed3\u70b9\u90fd\u5b58\u50a8\u6563\u5217\u503c\u4e3a\u8be5\u7d22\u5f15\u7684\u952e\u503c\u5bf9\u3002\u6ce8\u610f\u9009\u62e9\u8db3\u591f\u5927\u7684M\uff0c\u4f7f\u5f97\u6240\u6709\u7684\u94fe\u8868\u90fd\u5c3d\u53ef\u80fd\u7684\u77ed\u5c0f\uff0c\u4ee5\u4fdd\u8bc1\u67e5\u627e\u7684\u6548\u7387"))),(0,s.kt)("li",{parentName:"ul"},"\u62c9\u94fe\u6cd5\u67e5\u627e",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"\u6839\u636e\u6563\u5217\u503c\u627e\u5230\u7d22\u5f15\u5bf9\u5e94\u7684\u94fe\u8868\uff0c"),(0,s.kt)("li",{parentName:"ul"},"\u6cbf\u7740\u94fe\u8868\u987a\u5e8f\u627e\u5230\u76f8\u5e94\u7684\u952e")))),(0,s.kt)("h4",{id:"\u7ebf\u6027\u63a2\u6d4b\u6cd5\uff08\u5f00\u653e\u5b9a\u5740\u6cd5\uff09"},"\u7ebf\u6027\u63a2\u6d4b\u6cd5\uff08\u5f00\u653e\u5b9a\u5740\u6cd5\uff09"),(0,s.kt)("p",null,"\u57fa\u672c\u601d\u60f3\uff1af(key) = (f(key) + d) MOD M"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u7ebf\u6027\u63a2\u6d4b",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"\u5f53\u78b0\u649e\u53d1\u751f\u65f6\u5373\u4e00\u4e2a\u952e\u7684\u6563\u5217\u503c\u88ab\u53e6\u5916\u4e00\u4e2a\u952e\u5360\u7528\u65f6\uff0c\u76f4\u63a5\u68c0\u67e5\u6563\u5217\u8868\u4e2d\u7684\u4e0b\u4e00\u4e2a\u4f4d\u7f6e\u5373\u5c06\u7d22\u5f15\u503c\u52a01"))),(0,s.kt)("li",{parentName:"ul"},"\u4e8c\u6b21\u63a2\u6d4b",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"\u7d22\u5f15\u503c\u4f4d\u79fb\u91cf\u4e0d\u4e3a1\uff0c\u4e3a1\uff0c-1\uff0c2\uff0c-2...\u7684\u5e73\u65b9"))),(0,s.kt)("li",{parentName:"ul"},"\u968f\u673a\u63a2\u6d4b",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"\u7d22\u5f15\u503c\u4f4d\u79fb\u91cf\u91c7\u7528\u968f\u673a\u51fd\u6570\u8ba1\u7b97\u5f97\u5230\u3002\u968f\u673a\u79cd\u5b50\u4ea7\u751f\u4f2a\u968f\u673a\u6570\uff0c\u6bcf\u6b21\u5f97\u5230\u7684\u968f\u673a\u5e8f\u5217\u76f8\u540c")))),(0,s.kt)("h4",{id:"\u518d\u54c8\u5e0c\u6cd5"},"\u518d\u54c8\u5e0c\u6cd5"),(0,s.kt)("p",null,"\u4f7f\u7528\u54c8\u5e0c\u51fd\u6570\u53bb\u6563\u5217\u4e00\u4e2a\u8f93\u5165\u7684\u65f6\u5019\uff0c\u8f93\u51fa\u662f\u540c\u4e00\u4e2a\u4f4d\u7f6e\u5c31\u518d\u6b21\u6563\u5217\uff0c\u76f4\u81f3\u4e0d\u53d1\u751f\u51b2\u7a81\u4f4d\u7f6e\uff0c\u4f46\u6bcf\u6b21\u51b2\u7a81\u90fd\u8981\u91cd\u65b0\u6563\u5217\uff0c\u8ba1\u7b97\u65f6\u95f4\u589e\u52a0\uff0c\u53e6\u5916\u9700\u8981\u51c6\u5907\u591a\u4e2a\u54c8\u5e0c\u51fd\u6570"),(0,s.kt)("h4",{id:"\u516c\u5171\u6ea2\u51fa\u533a\u6cd5"},"\u516c\u5171\u6ea2\u51fa\u533a\u6cd5"),(0,s.kt)("p",null,"\u5efa\u7acb\u4e00\u4e2a\u516c\u5171\u6ea2\u51fa\u533a\u57df\uff0c\u628ahash\u51b2\u7a81\u7684\u5143\u7d20\u90fd\u653e\u5728\u8be5\u6ea2\u51fa\u533a\u91cc\u3002\u67e5\u627e\u65f6\uff0c\u5982\u679c\u53d1\u73b0hash\u8868\u4e2d\u5bf9\u5e94\u6876\u91cc\u5b58\u5728\u5176\u4ed6\u5143\u7d20\uff0c\u8fd8\u9700\u8981\u5728\u516c\u5171\u6ea2\u51fa\u533a\u91cc\u518d\u6b21\u8fdb\u884c\u67e5\u627e\u3002"),(0,s.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u54c8\u5e0c\u6876\u7684\u957f\u5ea6\u548c\u9664\u7559\u4f59\u6570\u6cd5\u7684m\u4e3a\u8d28\u6570\uff1f"},"\u4e3a\u4ec0\u4e48\u54c8\u5e0c\u6876\u7684\u957f\u5ea6\u548c\u9664\u7559\u4f59\u6570\u6cd5\u7684M\u4e3a\u8d28\u6570\uff1f"),(0,s.kt)("p",null,"\u8bbe\u6709\u4e00\u4e2a\u54c8\u5e0c\u51fd\u6570\uff1a",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"H"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"c"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mi",{parentName:"mrow"},"c"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"%"),(0,s.kt)("mi",{parentName:"mrow"},"N")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"H( c ) = c \\% N")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.08125em"}},"H"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.80556em",verticalAlign:"-0.05556em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,s.kt)("span",{parentName:"span",className:"mord"},"%"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N"))))),"; \u5f53N\u53d6\u4e00\u4e2a\u5408\u6570\u65f6\uff0c\u6700\u7b80\u5355\u7684\u4f8b\u5b50\u662f\u53d6 ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"2"),(0,s.kt)("mi",{parentName:"msup"},"n"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2^n")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.664392em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.664392em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n")))))))))))),"\uff0c\u6bd4\u5982\u8bf4\u53d6",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"2"),(0,s.kt)("mn",{parentName:"msup"},"3")),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mn",{parentName:"mrow"},"8")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2^3=8")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141079999999999em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141079999999999em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"3")))))))),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"8"))))),",\u8fd9\u65f6\u5019 H(11100(\u4e8c\u8fdb\u5236)) = H(28) = 4 H(10100(\u4e8c\u8fdb\u5236)) = H(20) = 4"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"c\u7684\u4e8c\u8fdb\u5236",(0,s.kt)("strong",{parentName:"li"},"\u7b2c4\u4f4d\uff08\u4ece\u53f3\u5411\u5de6\u6570\uff09\u5c31\u201c\u5931\u6548\u201d"),"\u4e86\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u65e0\u8bba\u7b2cc\u76844\u4f4d\u53d6\u4ec0\u4e48\u503c\uff0c\u90fd\u4f1a\u5bfc\u81f4H( c )\u7684\u503c\u4e00\u6837\uff0e\u8fd9\u65f6\u5019c\u7684\u7b2c\u56db\u4f4d\u5c31\u6839\u672c\u4e0d\u53c2\u4e0eH( c )\u7684\u8fd0\u7b97\uff0c\u8fd9\u6837H( c )\u5c31\u65e0\u6cd5\u5b8c\u6574\u5730\u53cd\u6620c\u7684\u7279\u6027\uff0c\u589e\u5927\u4e86\u5bfc\u81f4\u51b2\u7a81\u7684\u51e0\u7387\uff0e"),(0,s.kt)("li",{parentName:"ul"},"\u53d6\u5176\u4ed6\u5408\u6570\u65f6\uff0c\u90fd\u4f1a\u4e0d\u540c\u7a0b\u5ea6\u7684\u5bfc\u81f4c\u7684\u67d0\u4e9b\u4f4d\u201d\u5931\u6548\u201d\uff0c\u4ece\u800c\u5728\u4e00\u4e9b\u5e38\u89c1\u5e94\u7528\u4e2d\u5bfc\u81f4\u51b2\u7a81\uff0e"),(0,s.kt)("li",{parentName:"ul"},"\u53d6\u8d28\u6570\uff0c\u57fa\u672c\u53ef\u4ee5\u4fdd\u8bc1c\u7684\u6bcf\u4e00\u4f4d\u90fd\u53c2\u4e0eH( c )\u7684\u8fd0\u7b97\uff0c\u4ece\u800c\u5728\u5e38\u89c1\u5e94\u7528\u4e2d\u51cf\u5c0f\u51b2\u7a81\u51e0\u7387\uff0e")),(0,s.kt)("h3",{id:"\u5e38\u89c1\u7684\u4e09\u79cd\u54c8\u5e0c\u7ed3\u6784\uff1a"},"\u5e38\u89c1\u7684\u4e09\u79cd\u54c8\u5e0c\u7ed3\u6784\uff1a"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u6570\u7ec4"),(0,s.kt)("li",{parentName:"ul"},"set\uff08\u96c6\u5408\uff09"),(0,s.kt)("li",{parentName:"ul"},"map\uff08\u6620\u5c04\uff09")),(0,s.kt)("h3",{id:"\u5b9e\u73b0"},"\u5b9e\u73b0"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},'/*************************************************************************\n    > File Name: 14.hash_table.cpp\n    > Author:\n    > Mail:\n    > Created Time: \u516d  2/22 15:02:01 2020\n ************************************************************************/\ninclude <stdio.h>\ninclude <stdlib.h>\ninclude <string.h>\n\ntypedef struct Node {\n    char *str;\n    struct Node *next;\n} Node;\n\ntypedef struct HashTable {\n    Node **data;\n    int size;\n} HashTable;\n\nNode *init_node(char *str, Node *head) {\n    Node *p = (Node *)malloc(sizeof(Node));\n    p->str = strdup(str);\n    p->next = head;\n    return p;\n}\n\nHashTable *init_hashtable(int n) {\n    HashTable *h = (HashTable *)malloc(sizeof(HashTable));\n    h->size = n << 1;\n    h->data = (Node **)calloc(h->size, sizeof(Node *));\n    return h;\n}\n\nint BKDRHash(char *str) {\n    int seed = 31, hash = 0;\n    for (int i = 0; str[i]; i++) hash = hash * seed + str[i];\n    return hash & 0x7fffffff;\n}\n\nint insert(HashTable *h, char *str) {\n    int hash = BKDRHash(str);\n    int ind = hash % h->size;\n    h->data[ind] = init_node(str, h->data[ind]);\n    return 1;\n}\n\nint search(HashTable *h, char *str) {\n    int hash = BKDRHash(str);\n    int ind = hash % h->size;\n    Node *p = h->data[ind];\n    while (p && strcmp(p->str, str)) p = p->next;\n    return p != NULL;\n}\n\nvoid clear_node(Node *node) {\n    if (node == NULL) return ;\n    Node *p = node, *q;\n    while (p) {\n        q = p->next;\n        free(p->str);\n        free(p);\n        p = q;\n    }\n    free(q);\n    return ;\n}\n\nvoid clear_hashtable(HashTable *h) {\n    if (h == NULL) return ;\n    for (int i = 0; i < h->size; i++) clear_node(h->data[i]);\n    free(h->data);\n    free(h);\n    return ;\n}\n\nint main() {\n    int op;\n    define max_n 100\n    char str[max_n + 5];\n    HashTable *h = init_hashtable(max_n + 5);\n    while (~scanf("%d%s", &op, str)) {\n        switch (op) {\n            case 0:\n                printf("insert %s to hash table\\n", str);\n                insert(h, str);\n                break;\n            case 1:\n                printf("search %s from hash table resule = %d\\n", str, search(h, str));\n                break;\n        }\n    }\n    clear_hashtable(h);\n    return 0;\n}\n')))}c.isMDXComponent=!0}}]);