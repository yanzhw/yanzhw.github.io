(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[9638],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),k=u(n),f=l,m=k["".concat(i,".").concat(f)]||k[f]||d[f]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=k;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:l,o[1]=p;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},32039:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return i},toc:function(){return u},default:function(){return d}});var r=n(22122),l=n(19756),a=(n(67294),n(3905)),o=["components"],p={id:"B1.\u7cfb\u7edf\u7f16\u7a0b",title:"B1.\u7cfb\u7edf\u7f16\u7a0b","typora-root-url":"../"},i={unversionedId:"Server/B1.\u7cfb\u7edf\u7f16\u7a0b",id:"Server/B1.\u7cfb\u7edf\u7f16\u7a0b",isDocsHomePage:!1,title:"B1.\u7cfb\u7edf\u7f16\u7a0b",description:"[TOC]",source:"@site/docs/8.Server/B1.\u7cfb\u7edf\u7f16\u7a0b.md",sourceDirName:"8.Server",slug:"/Server/B1.\u7cfb\u7edf\u7f16\u7a0b",permalink:"/Server/B1.\u7cfb\u7edf\u7f16\u7a0b",editUrl:"https://github.com/worst0/wiki_note/edit/main/docs/8.Server/B1.\u7cfb\u7edf\u7f16\u7a0b.md",version:"current",frontMatter:{id:"B1.\u7cfb\u7edf\u7f16\u7a0b",title:"B1.\u7cfb\u7edf\u7f16\u7a0b","typora-root-url":"../"},sidebar:"Document\ud83d\udcbb",previous:{title:"C++\u591a\u7ebf\u7a0b\u7cfb\u7edf\u7f16\u7a0b",permalink:"/Server/B1.Linux\u591a\u7ebf\u7a0bmuduo"},next:{title:"\u6587\u4ef6\u64cd\u4f5c",permalink:"/Server/B2.\u6587\u4ef6IO"}},u=[{value:"\u6587\u4ef6IO",id:"\u6587\u4ef6io",children:[{value:"\u6587\u4ef6\u63cf\u8ff0\u7b26fd",id:"\u6587\u4ef6\u63cf\u8ff0\u7b26fd",children:[]},{value:"open\u548copenat\u51fd\u6570",id:"open\u548copenat\u51fd\u6570",children:[]},{value:"creat\u51fd\u6570",id:"creat\u51fd\u6570",children:[]},{value:"close\u51fd\u6570",id:"close\u51fd\u6570",children:[]},{value:"lseek\u51fd\u6570",id:"lseek\u51fd\u6570",children:[]}]}],c={toc:u};function d(e){var t=e.components,n=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"[TOC]"),(0,a.kt)("h2",{id:"\u6587\u4ef6io"},"\u6587\u4ef6IO"),(0,a.kt)("p",null,"UNIX\u7cfb\u7edf\u4e2d\u7684\u5927\u591a\u6570\u6587\u4ef6I/O\u53ea\u9700\u7528\u52305\u4e2a\u51fd\u6570\uff1aopen\u3001read\u3001write\u3001lseek\u4ee5\u53caclose\u3002\uff08unbuffered I/O\uff09\n\u672f\u8bed\u4e0d\u5e26\u7f13\u51b2\u6307\u7684\u662f\u6bcf\u4e2aread\u548cwrite\u90fd\u8c03\u7528\u5185\u6838\u4e2d\u7684\u4e00\u4e2a\u7cfb\u7edf\u8c03\u7528\u3002"),(0,a.kt)("h3",{id:"\u6587\u4ef6\u63cf\u8ff0\u7b26fd"},"\u6587\u4ef6\u63cf\u8ff0\u7b26fd"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u5185\u6838\u800c\u8a00\uff0c\u6240\u6709\u6253\u5f00\u7684\u6587\u4ef6\u90fd\u901a\u8fc7\u6587\u4ef6\u63cf\u8ff0\u7b26\u5f15\u7528\u3002\u6587\u4ef6\u63cf\u8ff0\u7b26\u662f\u4e00\u4e2a\u975e\u8d1f\u6574\u6570\u3002\u5f53\u6253\u5f00\u4e00\u4e2a\u73b0\u6709\u6587\u4ef6\u6216\u521b\u5efa\u4e00\u4e2a\u65b0\u6587\u4ef6\u65f6\uff0c\u5185\u6838\u5411\u8fdb\u7a0b\u8fd4\u56de\u4e00\u4e2a\u6587\u4ef6\u63cf\u8ff0\u7b26\u3002"),(0,a.kt)("p",null,"\u60ef\u4f8b\uff0cUNIX\u7cfb\u7edfshell\u628a\u6587\u4ef6\u63cf\u8ff0\u7b260\u4e0e\u8fdb\u7a0b\u7684\u6807\u51c6\u8f93\u5165\u5173\u8054\uff0c\u6587\u4ef6\u63cf\u8ff0\u7b261\u4e0e\u6807\u51c6\u8f93\u51fa\u5173\u8054\uff0c\u6587\u4ef6\u63cf\u8ff0\u7b262\u4e0e\u6807\u51c6\u9519\u8bef\u5173\u8054\u3002\u7b26\u53f7\u5e38\u91cfSTDIN_FILENO\u3001STDOUT_FILENO\u548cSTDERR_FILENO\uff0c\u5728\u5934\u6587\u4ef6",(0,a.kt)("inlineCode",{parentName:"p"},"<unistd.h>"),"\u4e2d\u5b9a\u4e49\u3002"),(0,a.kt)("h3",{id:"open\u548copenat\u51fd\u6570"},"open\u548copenat\u51fd\u6570"),(0,a.kt)("p",null,"\u8c03\u7528open\u6216openat\u51fd\u6570\u53ef\u4ee5\u6253\u5f00\u6216\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <fcntl.h>\nint open(const char *path, int oflag,... /* mode_t mode */);\nint openat(int fd, const char *path, int oflag, ... /* mode_t mode */ );\n")),(0,a.kt)("p",null,"\u4e24\u51fd\u6570\u7684\u8fd4\u56de\u503c\uff1a\u82e5\u6210\u529f\uff0c\u8fd4\u56de\u6587\u4ef6\u63cf\u8ff0\u7b26\uff1b\u82e5\u51fa\u9519\uff0c\u8fd4\u56de\u22121"),(0,a.kt)("p",null,"path\u53c2\u6570\u662f\u8981\u6253\u5f00\u6216\u521b\u5efa\u6587\u4ef6\u7684\u540d\u5b57\u3002oflag\u53c2\u6570\u53ef\u7528\u6765\u8bf4\u660e\u6b64\u51fd\u6570\u7684\u591a\u4e2a\u9009\u9879\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5e38\u7528\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"O_RDONLY"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53ea\u8bfb\u6253\u5f00")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"O_WRONLY"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53ea\u5199\u6253\u5f00")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"O_RDWR"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8bfb\u3001\u5199\u6253\u5f00")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"O_APPEND"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6bcf\u6b21\u5199\u65f6\u90fd\u8ffd\u52a0\u5230\u6587\u4ef6\u7684\u5c3e\u7aef")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"O_CREAT"),(0,a.kt)("td",{parentName:"tr",align:null},"\u82e5\u6b64\u6587\u4ef6\u4e0d\u5b58\u5728\u5219\u521b\u5efa\u5b83\u3002\u4f7f\u7528\u6b64\u9009\u9879\u65f6\uff0copen\u51fd\u6570\u9700\u540c\u65f6\u8bf4\u660e\u53c2\u6570mode\uff0c\u6307\u5b9a\u8be5\u65b0\u6587\u4ef6\u7684\u8bbf\u95ee\u6743\u9650\u4f4d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"O_NONBLOCK"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5982\u679cpath\u5f15\u7528\u7684\u662f\u4e00\u4e2aFIFO\u3001\u4e00\u4e2a\u5757\u7279\u6b8a\u6587\u4ef6\u6216\u4e00\u4e2a\u5b57\u7b26\u7279\u6b8a\u6587\u4ef6\uff0c\u5219\u6b64\u9009\u9879\u4e3a\u6587\u4ef6\u7684\u672c\u6b21\u6253\u5f00\u64cd\u4f5c\u548c\u540e\u7eed\u7684I/O\u64cd\u4f5c\u8bbe\u7f6e\u975e\u963b\u585e\u65b9\u5f0f\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"O_TRUNC"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u6b64\u6587\u4ef6\u5b58\u5728\uff0c\u800c\u4e14\u4e3a\u53ea\u5199\u6216\u8bfb-\u5199\u6210\u529f\u6253\u5f00\uff0c\u5219\u5c06\u5176\u957f\u5ea6\u622a\u65ad\u4e3a0\u3002")))),(0,a.kt)("p",null,"fd\u53c2\u6570\u628aopen\u548copenat\u51fd\u6570\u533a\u5206\u5f00\uff0c\u5171\u67093\u79cd\u53ef\u80fd\u6027\u3002"),(0,a.kt)("p",null,"\uff081\uff09path\u53c2\u6570\u6307\u5b9a\u7684\u662f\u7edd\u5bf9\u8def\u5f84\u540d\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0cfd\u53c2\u6570\u88ab\u5ffd\u7565\uff0copenat\u51fd\u6570\u5c31\u76f8\u5f53\u4e8eopen\u51fd\u6570\u3002"),(0,a.kt)("p",null,"\uff082\uff09path\u53c2\u6570\u6307\u5b9a\u7684\u662f\u76f8\u5bf9\u8def\u5f84\u540d\uff0cfd\u53c2\u6570\u6307\u51fa\u4e86\u76f8\u5bf9\u8def\u5f84\u540d\u5728\u6587\u4ef6\u7cfb\u7edf\u4e2d\u7684\u5f00\u59cb\u5730\u5740\u3002fd\u53c2\u6570\u662f\u901a\u8fc7\u6253\u5f00\u76f8\u5bf9\u8def\u5f84\u540d\u6240\u5728\u7684\u76ee\u5f55\u6765\u83b7\u53d6\u3002"),(0,a.kt)("p",null,"\uff083\uff09path\u53c2\u6570\u6307\u5b9a\u4e86\u76f8\u5bf9\u8def\u5f84\u540d\uff0cfd\u53c2\u6570\u5177\u6709\u7279\u6b8a\u503cAT_FDCWD\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u8def\u5f84\u540d\u5728\u5f53\u524d\u5de5\u4f5c\u76ee\u5f55\u4e2d\u83b7\u53d6\uff0copenat\u51fd\u6570\u5728\u64cd\u4f5c\u4e0a\u4e0eopen\u51fd\u6570\u7c7b\u4f3c\u3002"),(0,a.kt)("p",null,"openat\u51fd\u6570\u89e3\u51b3\u4e24\u4e2a\u95ee\u9898\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u7b2c\u4e00\uff0c\u8ba9\u7ebf\u7a0b\u53ef\u4ee5\u4f7f\u7528\u76f8\u5bf9\u8def\u5f84\u540d\u6253\u5f00\u76ee\u5f55\u4e2d\u7684\u6587\u4ef6\uff0c\u800c\u4e0d\u518d\u53ea\u80fd\u6253\u5f00\u5f53\u524d\u5de5\u4f5c\u76ee\u5f55\u3002\u540c\u4e00\u8fdb\u7a0b\u4e2d\u7684\u6240\u6709\u7ebf\u7a0b\u5171\u4eab\u76f8\u540c\u7684\u5f53\u524d\u5de5\u4f5c\u76ee\u5f55\uff0c\u56e0\u6b64\u5f88\u96be\u8ba9\u540c\u4e00\u8fdb\u7a0b\u7684\u591a\u4e2a\u4e0d\u540c\u7ebf\u7a0b\u5728\u540c\u4e00\u65f6\u95f4\u5de5\u4f5c\u5728\u4e0d\u540c\u7684\u76ee\u5f55\u4e2d\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u7b2c\u4e8c\uff0c\u53ef\u4ee5\u907f\u514dtime-of-check-to-time-of-use\uff08TOCTTOU\uff09\u9519\u8bef\u3002TOCTTOU\u9519\u8bef\u7684\u57fa\u672c\u601d\u60f3\u662f\uff1a\u5982\u679c\u6709\u4e24\u4e2a\u57fa\u4e8e\u6587\u4ef6\u7684\u51fd\u6570\u8c03\u7528\uff0c\u5176\u4e2d\u7b2c\u4e8c\u4e2a\u8c03\u7528\u4f9d\u8d56\u4e8e\u7b2c\u4e00\u4e2a\u8c03\u7528\u7684\u7ed3\u679c\uff0c\u90a3\u4e48\u7a0b\u5e8f\u662f\u8106\u5f31\u7684\u3002\u56e0\u4e3a\u4e24\u4e2a\u8c03\u7528\u5e76\u4e0d\u662f\u539f\u5b50\u64cd\u4f5c\uff0c\u5728\u4e24\u4e2a\u51fd\u6570\u8c03\u7528\u4e4b\u95f4\u6587\u4ef6\u53ef\u80fd\u6539\u53d8\u4e86\uff0c\u8fd9\u6837\u4e5f\u5c31\u9020\u6210\u4e86\u7b2c\u4e00\u4e2a\u8c03\u7528\u7684\u7ed3\u679c\u5c31\u4e0d\u518d\u6709\u6548\uff0c\u4f7f\u5f97\u7a0b\u5e8f\u6700\u7ec8\u7684\u7ed3\u679c\u662f\u9519\u8bef\u7684\u3002")),(0,a.kt)("h3",{id:"creat\u51fd\u6570"},"creat\u51fd\u6570"),(0,a.kt)("p",null,"\u53ef\u8c03\u7528creat\u51fd\u6570\u521b\u5efa\u4e00\u4e2a\u65b0\u6587\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"#include <fcntl.h>\nint creat(const char *path, mode_t mode);\n\u6b64\u51fd\u6570\u7b49\u6548\u4e8e\uff1a\nopen(path, O_WRONLY\uff5cO_CREAT\uff5cO_TRUNC, mode);\n")),(0,a.kt)("p",null,"\u8fd4\u56de\u503c\uff1a\u82e5\u6210\u529f\uff0c\u8fd4\u56de\u4e3a\u53ea\u5199\u6253\u5f00\u7684\u6587\u4ef6\u63cf\u8ff0\u7b26\uff1b\u82e5\u51fa\u9519\uff0c\u8fd4\u56de\u22121"),(0,a.kt)("p",null,"creat\u7684\u4e00\u4e2a\u4e0d\u8db3\u4e4b\u5904\u662f\u5b83\u4ee5\u53ea\u5199\u65b9\u5f0f\u6253\u5f00\u6240\u521b\u5efa\u7684\u6587\u4ef6\u3002"),(0,a.kt)("h3",{id:"close\u51fd\u6570"},"close\u51fd\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"\u53ef\u8c03\u7528close\u51fd\u6570\u5173\u95ed\u4e00\u4e2a\u6253\u5f00\u6587\u4ef6\u3002\n#include <unistd.h>\nint close (int fd)\uff1b\n")),(0,a.kt)("p",null,"\u8fd4\u56de\u503c\uff1a\u82e5\u6210\u529f\uff0c\u8fd4\u56de0\uff1b\u82e5\u51fa\u9519\uff0c\u8fd4\u56de\u22121"),(0,a.kt)("p",null,"\u5173\u95ed\u4e00\u4e2a\u6587\u4ef6\u65f6\u8fd8\u4f1a\u91ca\u653e\u8be5\u8fdb\u7a0b\u52a0\u5728\u8be5\u6587\u4ef6\u4e0a\u7684\u6240\u6709\u8bb0\u5f55\u9501\u30021"),(0,a.kt)("p",null,"\u5f53\u4e00\u4e2a\u8fdb\u7a0b\u7ec8\u6b62\u65f6\uff0c\u5185\u6838\u81ea\u52a8\u5173\u95ed\u5b83\u6240\u6709\u7684\u6253\u5f00\u6587\u4ef6\u3002\u5f88\u591a\u7a0b\u5e8f\u90fd\u5229\u7528\u4e86\u8fd9\u4e00\u529f\u80fd\u800c\u4e0d\u663e\u5f0f\u5730\u7528close\u5173\u95ed\u6253\u5f00\u6587\u4ef6\u3002"),(0,a.kt)("h3",{id:"lseek\u51fd\u6570"},"lseek\u51fd\u6570"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6bcf\u4e2a\u6253\u5f00\u6587\u4ef6\u90fd\u6709\u4e00\u4e2a\u4e0e\u5176\u76f8\u5173\u8054\u7684\u201c\u5f53\u524d\u6587\u4ef6\u504f\u79fb\u91cf\u201d\uff08current file offset\uff09\u3002\u5b83\u901a\u5e38\u662f\u4e00\u4e2a\u975e\u8d1f\u6574\u6570\uff0c\u7528\u4ee5\u5ea6\u91cf\u4ece\u6587\u4ef6\u5f00\u59cb\u5904\u8ba1\u7b97\u7684\u5b57\u8282\u6570\u3002\u901a\u5e38\uff0c\u8bfb\u3001\u5199\u64cd\u4f5c\u90fd\u4ece\u5f53\u524d\u6587\u4ef6\u504f\u79fb\u91cf\u5904\u5f00\u59cb\uff0c\u5e76\u4f7f\u504f\u79fb\u91cf\u589e\u52a0\u6240\u8bfb\u5199\u7684\u5b57\u8282\u6570\u3002\u6309\u7cfb\u7edf\u9ed8\u8ba4\u7684\u60c5\u51b5\uff0c\u5f53\u6253\u5f00\u4e00\u4e2a\u6587\u4ef6\u65f6\uff0c\u9664\u975e\u6307\u5b9aO_APPEND\u9009\u9879\uff0c\u5426\u5219\u8be5\u504f\u79fb\u91cf\u88ab\u8bbe\u7f6e\u4e3a0\u3002")),(0,a.kt)("p",null,"\u53ef\u4ee5\u8c03\u7528lseek\u663e\u5f0f\u5730\u4e3a\u4e00\u4e2a\u6253\u5f00\u6587\u4ef6\u8bbe\u7f6e\u504f\u79fb\u91cf\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"#include <unistd.h>\noff_t lseek(int fd, off_t offset, int whence);\n")),(0,a.kt)("p",null,"\u8fd4\u56de\u503c\uff1a\u82e5\u6210\u529f\uff0c\u8fd4\u56de\u65b0\u7684\u6587\u4ef6\u504f\u79fb\u91cf\uff1b\u82e5\u51fa\u9519\uff0c\u8fd4\u56de\u4e3a\u22121"),(0,a.kt)("p",null,"\u5bf9\u53c2\u6570offset\u7684\u89e3\u91ca\u4e0e\u53c2\u6570whence\u7684\u503c\u6709\u5173\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u82e5whence\u662fSEEK_SET\uff0c\u5219\u5c06\u8be5\u6587\u4ef6\u7684\u504f\u79fb\u91cf\u8bbe\u7f6e\u4e3a\u8ddd\u6587\u4ef6\u5f00\u59cb\u5904offset\u4e2a\u5b57\u8282\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u82e5whence\u662fSEEK_CUR\uff0c\u5219\u5c06\u8be5\u6587\u4ef6\u7684\u504f\u79fb\u91cf\u8bbe\u7f6e\u4e3a\u5176\u5f53\u524d\u503c\u52a0offset\uff0coffset\u53ef\u4e3a\u6b63\u6216\u8d1f\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u82e5whence\u662fSEEK_END\uff0c\u5219\u5c06\u8be5\u6587\u4ef6\u7684\u504f\u79fb\u91cf\u8bbe\u7f6e\u4e3a\u6587\u4ef6\u957f\u5ea6\u52a0offset\uff0coffset\u53ef\u6b63\u53ef\u8d1f\u3002")),(0,a.kt)("p",null,"\u82e5lseek\u6210\u529f\u6267\u884c\uff0c\u5219\u8fd4\u56de\u65b0\u7684\u6587\u4ef6\u504f\u79fb\u91cf\uff0c\u4e3a\u6b64\u53ef\u4ee5\u7528\u4e0b\u5217\u65b9\u5f0f\u786e\u5b9a\u6253\u5f00\u6587\u4ef6\u7684\u5f53\u524d\u504f\u79fb\u91cf\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"off_t currpos;\ncurrpos = lseek(fd, 0, SEEK_CUR);\n")),(0,a.kt)("p",null,"\u5982\u679c\u6587\u4ef6\u63cf\u8ff0\u7b26\u6307\u5411\u7684\u662f\u4e00\u4e2a\u7ba1\u9053\u3001FIFO\u6216\u7f51\u7edc\u5957\u63a5\u5b57\uff0c\u5219lseek\u8fd4\u56de\u22121\uff0c\u5e76\u5c06errno\u8bbe\u7f6e\u4e3aESPIPE\u3002"))}d.isMDXComponent=!0}}]);