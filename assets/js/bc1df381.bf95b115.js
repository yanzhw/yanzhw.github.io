(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[2433],{3905:function(n,e,t){"use strict";t.d(e,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var p=r.createContext({}),l=function(n){var e=r.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},u=function(n){var e=l(n.components);return r.createElement(p.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,o=n.originalType,p=n.parentName,u=c(n,["components","mdxType","originalType","parentName"]),s=l(t),m=a,g=s["".concat(p,".").concat(m)]||s[m]||d[m]||o;return t?r.createElement(g,i(i({ref:e},u),{},{components:t})):r.createElement(g,i({ref:e},u))}));function m(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=t.length,i=new Array(o);i[0]=s;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=n,c.mdxType="string"==typeof n?n:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},16129:function(n,e,t){"use strict";t.r(e),t.d(e,{frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var r=t(22122),a=t(19756),o=(t(67294),t(3905)),i=["components"],c={id:"C2.conda",title:"C2.conda","typora-root-url":"../"},p={unversionedId:"Programming_Language/C2.conda",id:"Programming_Language/C2.conda",isDocsHomePage:!1,title:"C2.conda",description:"conda\u547d\u4ee4",source:"@site/docs/4.Programming_Language/C2.conda.md",sourceDirName:"4.Programming_Language",slug:"/Programming_Language/C2.conda",permalink:"/Programming_Language/C2.conda",editUrl:"https://github.com/worst0/wiki_note/edit/main/docs/4.Programming_Language/C2.conda.md",version:"current",lastUpdatedAt:1624240624,formattedLastUpdatedAt:"6/21/2021",frontMatter:{id:"C2.conda",title:"C2.conda","typora-root-url":"../"},sidebar:"Document\ud83d\udcbb",previous:{title:"C1.python",permalink:"/Programming_Language/C1.python"},next:{title:"OS",permalink:"/Operating_system/A1.os"}},l=[{value:"conda\u547d\u4ee4",id:"conda\u547d\u4ee4",children:[{value:"Linux\u4e0bJupyterNotebook\u4e2dpython\u7248\u672c/kernel\u5171\u5b58\u7684\u89e3\u51b3\u65b9\u6cd5",id:"linux\u4e0bjupyternotebook\u4e2dpython\u7248\u672ckernel\u5171\u5b58\u7684\u89e3\u51b3\u65b9\u6cd5",children:[]}]},{value:"\u56fd\u5185\u6e05\u534e\u955c\u50cf\u6e90",id:"\u56fd\u5185\u6e05\u534e\u955c\u50cf\u6e90",children:[]}],u={toc:l};function d(n){var e=n.components,t=(0,a.Z)(n,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"conda\u547d\u4ee4"},"conda\u547d\u4ee4"),(0,o.kt)("p",null,"\u5b89\u88c5anaconda"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export PATH=/home/(your_user_name)/anaconda3/bin:$PATH\nsource .bashrc\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"conda --version #\u663e\u793aconda\u7248\u672c\nconda env list #\u67e5\u770b\u5f53\u524d\u5b58\u5728\u54ea\u4e9b\u73af\u5883\nconda create -n your_env_name python=X.X\uff082.7\u30013.6\u7b49\uff09#\u521b\u5efa\u65b0\u7684\u865a\u62df\u73af\u5883\u3002\nsource activate your_env_name\nconda activate your_env_name #\u6fc0\u6d3b\u865a\u62df\u73af\u5883\nsource deactivate  #\u5173\u95ed\u865a\u62df\u73af\u5883\nconda remove -n your_env_name --all #\u5220\u9664\u865a\u62df\u73af\u5883\npip install package_name #\u5b89\u88c5\u5404\u79cd\u6240\u9700python\u5305\n\nconda install <package name> #\u5b89\u88c5\u6307\u5b9a\u7684\u5305\nconda list #\u663e\u793a\u6240\u6709\u7684\u5b89\u88c5\u5305\nconda remove/clean <package name> #\u5220\u9664\u6307\u5b9a\u7684\u5305\n#conda remove/clean -n pytorch1.2 tensorflow\n\nconda env export > \u6587\u4ef6\u540d.yaml #\u5171\u4eab\u73af\u5883\uff1a\u5c06\u5f53\u524d\u4f7f\u7528\u7684\u73af\u5883\u4e2d\u6240\u5305\u542b\u7684python\u5305\u7684\u540d\u79f0\u8fdb\u884c\u6253\u5305\nconda env update -f=/path/\u6587\u4ef6\u540d.yml #\u8f7d\u5165\u522b\u4eba\u5171\u4eab\u7684\u73af\u5883\nconda upgrade conda #\u66f4\u65b0conda\u548c\u5176\u4ed6\u6240\u6709\u5305\nconda update <package name> #\u66f4\u65b0\u6307\u5b9a\u7684\u5305\n conda search --full-name <package name> #\u641c\u7d22\u6307\u5b9a\u7684\u5305\nconda search <\u6a21\u7cca\u8bcd> #\u6a21\u7cca\u67e5\u627e\n")),(0,o.kt)("h3",{id:"linux\u4e0bjupyternotebook\u4e2dpython\u7248\u672ckernel\u5171\u5b58\u7684\u89e3\u51b3\u65b9\u6cd5"},"Linux\u4e0bJupyterNotebook\u4e2dpython\u7248\u672c/kernel\u5171\u5b58\u7684\u89e3\u51b3\u65b9\u6cd5"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"apt install python3-pip")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pip3 install ipykernel")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"python3 -m ipykernel install")," --user"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"jupyter kernelspec list"),"\u53ef\u4ee5\u67e5\u770b\u5f53\u524d\u7684kernel"),(0,o.kt)("p",null,"Linux\u9700\u8981\u6743\u9650"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"}," sudo /home/worst/anaconda3/envs/python-2/bin/python -m ipykernel install --name python2")," "),(0,o.kt)("h2",{id:"\u56fd\u5185\u6e05\u534e\u955c\u50cf\u6e90"},"\u56fd\u5185\u6e05\u534e\u955c\u50cf\u6e90"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"pip\u66f4\u6362\nhttps://mirrors.tuna.tsinghua.edu.cn/help/pypi/\npip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple\n\nanaconda\nhttps://mirrors.tuna.tsinghua.edu.cn/help/anaconda/\n")))}d.isMDXComponent=!0}}]);