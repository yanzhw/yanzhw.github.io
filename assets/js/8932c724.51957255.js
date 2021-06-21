(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[5055],{3905:function(n,e,t){"use strict";t.d(e,{Zo:function(){return d},kt:function(){return m}});var r=t(67294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var c=r.createContext({}),l=function(n){var e=r.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},d=function(n){var e=l(n.components);return r.createElement(c.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,a=n.originalType,c=n.parentName,d=s(n,["components","mdxType","originalType","parentName"]),p=l(t),m=i,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return t?r.createElement(f,o(o({ref:e},d),{},{components:t})):r.createElement(f,o({ref:e},d))}));function m(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var a=t.length,o=new Array(a);o[0]=p;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=n,s.mdxType="string"==typeof n?n:i,o[1]=s;for(var l=2;l<a;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},16627:function(n,e,t){"use strict";t.r(e),t.d(e,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var r=t(22122),i=t(19756),a=(t(67294),t(3905)),o=["components"],s={id:"B3.C++-exercise",title:"B3.C++-exercise","typora-root-url":"../"},c={unversionedId:"Programming_Language/B3.C++-exercise",id:"Programming_Language/B3.C++-exercise",isDocsHomePage:!1,title:"C++-exercise",description:"img",source:"@site/docs/4.Programming_Language/B3.C++-exercise.md",sourceDirName:"4.Programming_Language",slug:"/Programming_Language/B3.C++-exercise",permalink:"/Programming_Language/B3.C++-exercise",editUrl:"https://github.com/worst0/wiki_note/edit/main/docs/4.Programming_Language/B3.C++-exercise.md",version:"current",lastUpdatedAt:1624240624,formattedLastUpdatedAt:"6/21/2021",frontMatter:{id:"B3.C++-exercise",title:"B3.C++-exercise","typora-root-url":"../"},sidebar:"Document\ud83d\udcbb",previous:{title:"STL",permalink:"/Programming_Language/B2.STL"},next:{title:"C++ othres",permalink:"/Programming_Language/B4.C++-others"}},l=[{value:"copy_assign \u62f7\u8d1d",id:"copy_assign-\u62f7\u8d1d",children:[]},{value:"deep_copy \u6df1\u6d45\u62f7\u8d1d",id:"deep_copy-\u6df1\u6d45\u62f7\u8d1d",children:[]},{value:"static-const",id:"static-const",children:[]},{value:"friend",id:"friend",children:[]},{value:"\u7ee7\u627f\uff08\u5355\u4e2a\uff0c\u591a\u4e2a\uff09",id:"\u7ee7\u627f\uff08\u5355\u4e2a\uff0c\u591a\u4e2a\uff09",children:[]},{value:"\u591a\u6001",id:"\u591a\u6001",children:[]},{value:"\u62bd\u8c61\u7c7b",id:"\u62bd\u8c61\u7c7b",children:[]}],d={toc:l};function u(n){var e=n.components,s=(0,i.Z)(n,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,s,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:t(88985).Z})),(0,a.kt)("h3",{id:"copy_assign-\u62f7\u8d1d"},"copy_assign \u62f7\u8d1d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"personInfo(){}; \u4e0epersonInfo() = default; \u5bf9\u7b49\u5417\nvoid displayInfo() = delete;             \u4e3a\u4ec0\u4e48\u53ef\u4ee5\u7528delete\u4e0d\u53ef\u7528default\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'typedef unsigned int uInt;\n\nclass PersonInfo\n{\n    string name;\n    uInt IDNumber;\n    string address;\n    string company;\n    bool isMale;\npublic:\n    //PersonInfo(){};  PersonInfo() = default; ???\n\n    PersonInfo(){};\n    PersonInfo(uInt idn) {\n        IDNumber = idn;\n    }\n\n    //PersonInfo(const PersonInfo &pi) = delete;\n    //\u7cfb\u7edf\u7684\u62f7\u8d1d\u6784\u9020\u51fd\u6570\u548c\u6784\u9020\u51fd\u6570\u4e0d\u540c\uff0c\u8be5\u51fd\u6570\u4e0d\u53ef\u91cd\u8f7d\n    \n    PersonInfo(const PersonInfo &pi) {\n        cout << "\u9ed8\u8ba4copy" << endl;\n        address = pi.address;\n        company = pi.company;\n        isMale = pi.isMale;\n    }\n    //\u8d4b\u503c\u64cd\u4f5c\u8fd0\u7b97\u7b26\u91cd\u8f7d\u51fd\u6570\uff0c\u5176default\u548cdelete\u578b\u548c\u62f7\u8d1d\u51fd\u6570\u4e00\u81f4\n    PersonInfo& operator=(const PersonInfo &pi) {\n        cout << "\u91cd\u8f7d=" << endl;\n        address = pi.address;\n        company = pi.company;\n        isMale = pi.isMale;\n        return *this;\n    }\n\n    //\u4e3a\u4ec0\u4e48\u4e0d\u53ef\u7528default\uff0c\u53ef\u7528delete\uff1b\n    void displayInfo(PersonInfo &info) {\n        cout << info.name << endl;\n        cout << info.IDNumber<< endl;\n        cout << info.address << endl;\n        cout << info.company << endl;\n    }\n\n    PersonInfo makeCopy(const PersonInfo &pi) {\n        PersonInfo temp;\n        temp.name = pi.name;\n        temp.IDNumber = pi.IDNumber;\n        return temp;\n    }\n\n};\n\nint main()\n{\n    PersonInfo pi(1);\n    pi.displayInfo(pi);\n    PersonInfo pj = pi;\n    pj.displayInfo(pj);\n    PersonInfo pt = pi;\n    pt.displayInfo(pt);\n    return 0;\n}\n\n')),(0,a.kt)("h3",{id:"deep_copy-\u6df1\u6d45\u62f7\u8d1d"},"deep_copy \u6df1\u6d45\u62f7\u8d1d"),(0,a.kt)("p",null,"\u200b\t\u4e1a\u52a1\u903b\u8f91\u5c42\uff0c\u6839\u636e\u9700\u8981\uff0c\u5982\u679c\u662f\u62f7\u8d1d\u6784\u9020\uff0c\u4f1a\u5b9a\u4e49\u6210\u6df1\u62f7\u8d1d\n\u200b    ==\u6d45\u62f7\u8d1d\uff0c\u4e0d\u8981\u521b\u5efa\u5bf9\u8c61\uff0c\u53ea\u505a\u6307\u9488\u7684\u5f15\u7528== \u5426\u5219\u5bb9\u6613\u51fa\u73b0\u95ee\u9898\uff0c\u91cd\u590d\u91ca\u653e\u7a7a\u95f4segment fault\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"/*\n    \u4fee\u6539\u62f7\u8d1d\u503c\u662f\u5426\u4f1a\u66f4\u6539\u539f\u503c\n    \u662f\uff1a\u6d45\n    \u5426\uff1a\u6df1\n    \u4e1a\u52a1\u903b\u8f91\u5c42\uff0c\u6839\u636e\u9700\u8981\uff0c\u5982\u679c\u662f\u62f7\u8d1d\u6784\u9020\uff0c\u4f1a\u5b9a\u4e49\u6210\u6df1\u62f7\u8d1d\n    \u6d45\u62f7\u8d1d\uff0c\u4e0d\u8981\u521b\u5efa\u5bf9\u8c61\uff0c\u53ea\u505a\u6307\u9488\u7684\u5f15\u7528\n*/\nclass Address\n{\npublic:\n    string city;\n};\n\nclass PersonInfo\n{\n    \npublic:\n    Address *myAddress;\n    PersonInfo() {\n        myAddress = new Address;\n    };\n    // \u8fd9\u662f\uff1f\u6df1\u62f7\u8d1d\n    PersonInfo(const PersonInfo &info)\n    {\n        //myAddress = new Address; \n        myAddress->city = info.myAddress->city;\n    }\n\n    ~PersonInfo()\n    {\n        delete myAddress;\n    }\n};\n")),(0,a.kt)("h3",{id:"static-const"},"static-const"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20201125115826336",src:t(41768).Z})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'/*\n    static \u4fee\u9970\u7684\u662f\u7c7b\u6210\u5458\u51fd\u6570\u548c\u6210\u5458\u53d8\u91cf\u2014\u2014\u5c01\u88c5\u6027\u5bf9\u5176\u4ecd\u6709\u4f5c\u7528\n    \u6240\u6709\u7684\u5bf9\u8c61\u62ff\u5230\u7684\u90fd\u662f\u540c\u4e00\u4efd\u7c7b\u6210\u5458\u53d8\u91cf\n    \u7c7b\u6210\u5458\u51fd\u6570\u53ef\u4ee5\u4f7f\u7528\u666e\u901a\u5bf9\u8c61\u8c03\u7528\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u7c7b\u8c03\u7528\n*/\n/*\n    const \u5bf9\u8c61\u53ea\u80fd\u8c03\u7528const\u51fd\u6570\n    \u975econst\u5bf9\u8c61\u5373\u80fd\u8c03\u7528\u975econst\u4e5f\u80fd\u8c03\u7528const\n    const\u6210\u5458\u53d8\u91cf\u521d\u59cb\u5316\u5fc5\u987b\u4f7f\u7528\u521d\u59cb\u5316\u5217\u8868\n    const\u6210\u5458\u51fd\u6570\u91cc\u4e0d\u53ef\u4fee\u6539\u6210\u5458\u53d8\u91cf\u7684\u503c\n    \u5982\u679c\u6210\u5458\u53d8\u91cf\u5b9a\u4e49\u524d\u52a0\u4e86mutable\uff0c\u8868\u793a\u6210\u5458\u53ef\u4ee5\u5728const\u6210\u5458\u51fd\u6570\u91cc\u4fee\u6539\n    \u5728\u90e8\u5206\u573a\u666f\u4e0b\uff0c\u9700\u8981\u5b9a\u4e49const\u7248\u672c\u548c\u975econst\u4e24\u4e2a\u7248\u672c\u7684\u51fd\u6570\n*/\n/*\n\u90e8\u5206\u8fd0\u7b97\u7b26\u91cd\u8f7d\n    \u53ef\u91cd\u8f7d\u8fd0\u7b97\u7b26\n        \u53cc\u76ee\u7b97\u672f\u8fd0\u7b97\u7b26 + (\u52a0)\uff0c-(\u51cf)\uff0c*(\u4e58)\uff0c/(\u9664)\uff0c% (\u53d6\u6a21)\n\u5173\u7cfb\u8fd0\u7b97\u7b26   ==(\u7b49\u4e8e)\uff0c!= (\u4e0d\u7b49\u4e8e)\uff0c< (\u5c0f\u4e8e)\uff0c> (\u5927\u4e8e>\uff0c<=(\u5c0f\u4e8e\u7b49\u4e8e)\uff0c>=(\u5927\u4e8e\u7b49\u4e8e)\n\u903b\u8f91\u8fd0\u7b97\u7b26   ||(\u903b\u8f91\u6216)\uff0c&&(\u903b\u8f91\u4e0e)\uff0c!(\u903b\u8f91\u975e)\n\u5355\u76ee\u8fd0\u7b97\u7b26   + (\u6b63)\uff0c-(\u8d1f)\uff0c*(\u6307\u9488)\uff0c&(\u53d6\u5730\u5740)\n\u81ea\u589e\u81ea\u51cf\u8fd0\u7b97\u7b26 ++(\u81ea\u589e)\uff0c--(\u81ea\u51cf)\n\u4f4d\u8fd0\u7b97\u7b26    | (\u6309\u4f4d\u6216)\uff0c& (\u6309\u4f4d\u4e0e)\uff0c~(\u6309\u4f4d\u53d6\u53cd)\uff0c^(\u6309\u4f4d\u5f02\u6216),\uff0c<< (\u5de6\u79fb)\uff0c>>(\u53f3\u79fb)\n\u8d4b\u503c\u8fd0\u7b97\u7b26   =, +=, -=, *=, /= , % = , &=, |=, ^=, <<=, >>=\n\u7a7a\u95f4\u7533\u8bf7\u4e0e\u91ca\u653e new, delete, new[ ] , delete[]\n\u5176\u4ed6\u8fd0\u7b97\u7b26   ()(\u51fd\u6570\u8c03\u7528)\uff0c->(\u6210\u5458\u8bbf\u95ee)\uff0c,(\u9017\u53f7)\uff0c[](\u4e0b\u6807)\n    \n    \u4e0d\u53ef\u91cd\u8f7d\u8fd0\u7b97\u7b26\n        .\uff1a\u6210\u5458\u8bbf\u95ee\u8fd0\u7b97\u7b26\n.*, ->*\uff1a\u6210\u5458\u6307\u9488\u8bbf\u95ee\u8fd0\u7b97\u7b26\n::\uff1a\u57df\u8fd0\u7b97\u7b26\nsizeof\uff1a\u957f\u5ea6\u8fd0\u7b97\u7b26\n?:\uff1a\u6761\u4ef6\u8fd0\u7b97\u7b26\n#\uff1a \u9884\u5904\u7406\u7b26\u53f7\n    \n    \u91cd\u8f7d\u89c4\u5219\n        \uff081\uff09\u4e0d\u53ef\u81c6\u9020\u8fd0\u7b97\u7b26\uff1b\n\uff082\uff09\u8fd0\u7b97\u7b26\u539f\u6709\u64cd\u4f5c\u6570\u7684\u4e2a\u6570\u3001\u4f18\u5148\u7ea7\u548c\u7ed3\u5408\u6027\u4e0d\u80fd\u6539\u53d8\uff1b\n\uff083\uff09\u64cd\u4f5c\u6570\u4e2d\u81f3\u5c11\u4e00\u4e2a\u662f\u81ea\u5b9a\u4e49\u7c7b\u578b\uff1b\n\uff084\uff09\u4fdd\u6301\u91cd\u8f7d\u8fd0\u7b97\u7b26\u7684\u81ea\u7136\u542b\u4e49\u3002\n        \uff081\uff09\u5f53\u91cd\u8f7d\u4e3a\u6210\u5458\u51fd\u6570\u65f6\uff0c\u4f1a\u9690\u542b\u4e00\u4e2athis\u6307\u9488\uff1b\u5f53\u91cd\u8f7d\u4e3a\u53cb\u5143\u51fd\u6570\u65f6\uff0c\u4e0d\u5b58\u5728\u9690\u542b\u7684this\u6307\u9488\uff0c\u9700\u8981\u5728\u53c2\u6570\u5217\u8868\u4e2d\u663e\u793a\u5730\u6dfb\u52a0\u64cd\u4f5c\u6570\u3002\n\uff082\uff09\u5f53\u91cd\u8f7d\u4e3a\u6210\u5458\u51fd\u6570\u65f6\uff0c\u53ea\u5141\u8bb8\u53f3\u53c2\u6570\u7684\u9690\u5f0f\u8f6c\u6362\uff1b\u5f53\u91cd\u8f7d\u4e3a\u53cb\u5143\u51fd\u6570\u65f6\uff0c\u80fd\u591f\u63a5\u53d7\u5de6\u53c2\u6570\u548c\u53f3\u53c2\u6570\u7684\u9690\u5f0f\u8f6c\u6362\u3002\n        \u4e00\u822c\u89c4\u5219\u4e3a\uff1a\u5355\u76ee\u6210\u5458\uff0c\u53cc\u76ee\u53cb\u5143\n        =\u3001()\u3001[]\u3001\u4ee5\u53ca ->\u64cd\u4f5c\u7b26\u53ea\u80fd\u88ab\u7c7b\u7684\u6210\u5458\u51fd\u6570\u91cd\u8f7d\n        << >>\u5b9a\u4e49\u4e3a\u53cb\u5143\n*/\n/*\n\u4e09\uff08\u62f7\u8d1d\u6784\u9020\uff0c\u62f7\u8d1d\u8d4b\u503c\u8fd0\u7b97\u7b26\uff0c\u6790\u6784\u51fd\u6570\uff09\u4e94\u6cd5\u5219\n    \u9700\u8981\u6790\u6784\u51fd\u6570\u7684\u7c7b\u4e5f\u9700\u8981\u62f7\u8d1d\u6784\u9020\u51fd\u6570\u548c\u62f7\u8d1d\u8d4b\u503c\u51fd\u6570\u3002\n    \u9700\u8981\u62f7\u8d1d\u64cd\u4f5c\u7684\u7c7b\u4e5f\u9700\u8981\u8d4b\u503c\u64cd\u4f5c\uff0c\u53cd\u4e4b\u4ea6\u7136\u3002\n    \u6790\u6784\u51fd\u6570\u4e0d\u80fd\u662f\u5220\u9664\u7684\n    \u5982\u679c\u4e00\u4e2a\u7c7b\u6210\u5458\u6709\u5220\u9664\u7684\u6216\u4e0d\u53ef\u8bbf\u95ee\u7684\u6790\u6784\u51fd\u6570\uff0c\u90a3\u4e48\u5176\u9ed8\u8ba4\u548c\u62f7\u8d1d\u6784\u9020\u51fd\u6570\u4f1a\u88ab\u5b9a\u4e49\u4e3a\u5220\u9664\u7684\u3002\n    \u5982\u679c\u4e00\u4e2a\u7c7b\u6709const\u6216\u5f15\u7528\u6210\u5458\uff0c\u5219\u4e0d\u80fd\u4f7f\u7528\u5408\u6210\u7684\u62f7\u8d1d\u8d4b\u503c\u64cd\u4f5c\u3002\uff08\u65e0\u6cd5\u9ed8\u8ba4\u6784\u9020\u7684const\u6210\u5458\u7684\u7c7b \u5219\u8be5\u7c7b\u5c31\u65e0\u9ed8\u8ba4\u6784\u9020\u51fd\u6570\uff09\n*/\nclass PersonInfo\n{\n    string address = "\u4e2d\u56fd\u6d59\u6c5f\u7701\u676d\u5dde\u5e02\u4f59\u676d\u533a";\n    // \u8fd9\u4e2a\u6570\u636e\u7c7b\u6210\u5458\u7684\u4e00\u90e8\u5206\n    static string name;\n    bool isMale = true;\n    mutable int number;\npublic:\n    void displayInfo() const\n    {\n        cout << address << endl;\n        cout << name << endl;\n        // address = "\u4e2d\u56fd\u4e0a\u6d77\u5e02\u8679\u6865\u533a\u8679\u6865\u673a\u573a";\n        // number = 10001;\n    }\n    void displayInfo()\n    {\n        cout << address << endl;\n        cout << name << endl;\n        cout << "this is non const version" << endl;\n        // address = "\u4e2d\u56fd\u4e0a\u6d77\u5e02\u8679\u6865\u533a\u8679\u6865\u673a\u573a";\n        // number = 10001;\n    }\n    static void displayInfo(const PersonInfo &info)\n    {\n        cout << info.address << endl;\n        cout << info.name << endl;\n    }\n    void changeIsMale()\n    {\n        isMale = !isMale;\n    }\n};\nstring PersonInfo::name = "\u674e\u56db";\nvoid displayInfo(const PersonInfo &info)\n{\n    info.displayInfo();\n}\nint main()\n{\n    PersonInfo pi;\n    PersonInfo *somePs = new PersonInfo[100]; \n    pi.displayInfo();\n    displayInfo(somePs[10]);\n    // PersonInfo::name = "\u738b\u4e94";\n    pi.displayInfo(somePs[66]);\n    PersonInfo::displayInfo(somePs[77]);\n    pi.changeIsMale();\n    return 0;\n}\n\n')),(0,a.kt)("h3",{id:"friend"},"friend"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'/*\n    (1) \u53cb\u5143\u5173\u7cfb\u4e0d\u80fd\u88ab\u7ee7\u627f\u3002 \n    (2) \u53cb\u5143\u5173\u7cfb\u662f\u5355\u5411\u7684\uff0c\u4e0d\u5177\u6709\u4ea4\u6362\u6027\u3002\n    \u82e5\u7c7bB\u662f\u7c7bA\u7684\u53cb\u5143\uff0c\u7c7bA\u4e0d\u4e00\u5b9a\u662f\u7c7bB\u7684\u53cb\u5143\uff0c\n    \u8981\u770b\u5728\u7c7b\u4e2d\u662f\u5426\u6709\u76f8\u5e94\u7684\u58f0\u660e\u3002\n    (3) \u53cb\u5143\u5173\u7cfb\u4e0d\u5177\u6709\u4f20\u9012\u6027\u3002\u82e5\u7c7bB\u662f\u7c7bA\u7684\u53cb\u5143\uff0c\n    \u7c7bC\u662fB\u7684\u53cb\u5143\uff0c\u7c7bC\u4e0d\u4e00\u5b9a\u662f\u7c7bA\u7684\u53cb\u5143\uff0c\n    \u540c\u6837\u8981\u770b\u7c7b\u4e2d\u662f\u5426\u6709\u76f8\u5e94\u7684\u7533\u660e\n*/\n/*\n    \u6b63\u5e38\u5bf9\u4e8e\u67d0\u4e2a\u79c1\u6709\u6210\u5458\uff0c\u8bbe\u7f6eset/get\u65b9\u6cd5\n*/\nclass SomeBody\n{\n    string name;\npublic:\n    void setName(string name)\n    {\n        this->name = name;\n    }\n    string getName()\n    {\n        return this->name;\n    }\n    // \u53cb\u5143\u7684\u4f5c\u7528\uff0c\u4f7f\u5916\u90e8\u4e5f\u53ef\u4ee5\u8bbf\u95ee\u79c1\u6709\u6210\u5458\n    // \u58f0\u660e\u53cb\u5143\u51fd\u6570\n    friend void showMe(SomeBody &);\n    // \u58f0\u660e\u4e3a\u53cb\u5143\u7c7b \u53cb\u5143\u7c7b\u91cc\u7684 \\\n    \u6240\u6709\u6210\u5458\u51fd\u6570\u90fd\u53ef\u4ee5\u8bbf\u95ee\u88ab\u53cb\u5143\u7684\u7c7b\u7684\u79c1\u6709\u53d8\u91cf\n    friend class Friend;\n};\nvoid showMe(SomeBody &sb)\n{\n    cout << sb.name << endl;\n}\nclass Friend\n{\npublic:\n    void showMyFriend(SomeBody &sb)\n    {\n        cout << sb.name << endl;\n    }\n};\nint main()\n{\n    SomeBody sb;\n    sb.setName("\u50bb\u50bb\u7684\u5c0f\u53ef\u7231");\n    // sb.name = "";\n    cout << sb.getName() << endl;\n    showMe(sb);\n    Friend().showMyFriend(sb);\n    return 0;\n}\n\n')),(0,a.kt)("h3",{id:"\u7ee7\u627f\uff08\u5355\u4e2a\uff0c\u591a\u4e2a\uff09"},"\u7ee7\u627f\uff08\u5355\u4e2a\uff0c\u591a\u4e2a\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'./single_inherit.cpp\n/*\n    \u6210\u5458\u53d8\u91cf\u57fa\u7c7b\u5f53\u4e2d\u5c01\u88c5 private protected public\n    \n    \u7ee7\u627f\u5c01\u88c5\n    private     \u672c\u7c7b\u5f53\u4e2d\u53ef\u4ee5\u8bbf\u95ee\uff0c\u6d3e\u751f\u7c7b\u4e0d\u53ef\u8bbf\u95ee\n    protected   public\u964d\u4e3aprotected\n    public      \u4e0d\u66f4\u6539\u4efb\u4f55\u6743\u9650\n    \u7ee7\u627f\u53ea\u80fd\u7f29\u51cf\u5c01\u88c5\uff0c\u4e0d\u80fd\u6269\u5145\u5c01\u88c5\u6743\u9650\n    \u7ee7\u627f\u7684\u9650\u5236\u662f\u5f71\u54cd\u4e0b\u4e00\u4ee3\u7684\n    \u5982\u679c\u6ca1\u6709\u540e\u7ee7\u7c7b\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u4e3aprivate\u79c1\u6709\u7ee7\u627f\n    \u5982\u679c\u4e0d\u5e0c\u671b\u66f4\u6539\u4efb\u4f55\u539f\u5148\u7684\u6210\u5458\u6743\u9650\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u4e3apublic\n    \u5982\u679c\u5e0c\u671b\u6570\u636e\u5bf9\u5916\u90e8\u4fdd\u62a4\uff0c\u5185\u90e8\u516c\u5f00\uff0c\u8bbe\u7f6e\u4e3aprotected\n*/\nclass Base {\nprivate:\n    int n = 10;\nprotected:\n    int j = 100;\npublic:\n    int m = 666;\n};\nclass Drived : protected Base {\n// private:\n//   \u5bf9\u4e8eprivate\u7ee7\u627f\u6d3e\u751f\u7c7b\uff1a \u5176\u7236\u7c7b\u7684protected \uff0cpublic j, m \u76f8\u5f53\u4e8e\u653e\u5728\u5f53\u524dprivate\u4e0b\npublic:\n    void showMessage() {\n        cout << j << endl;\n        cout << m << endl;\n    }\n};\nclass Third : Drived{\npublic:\n    void showMessageTT() {\n        cout << j << endl;\n        cout << m << endl;\n    }\n};\nint main() {\n    Drived d;\n    d.showMessage();\n    Third s;\n    s.showMessageTT();\n    return 0;\n}\n\n./dynamic_condi.cpp\nusing namespace std;\nstruct Animal {\n    virtual void eat() {\n        cout << "Animal eat something" << endl;\n    }\n};\nstruct Dog: Animal {\n    void eat() {\n        cout << "Dog eat meat" << endl;\n    }\n};\nstruct Cat: Animal {\n    void eat() {\n        cout << "Cat eat fish" << endl;\n    }\n};\nstruct Mouse: Animal {\n    void eat() {\n        cout << "Mouse eat nailao" << endl;\n    }\n};\n\n./mutil_inherit.cpp\nstruct Person {\n    public:\n    string lastName = ":";\n    Person() = default;\n    Person(string n) :lastName(n) {cout << "Person:"<< &lastName << endl;};\n};\nstruct F :virtual Person {\n    //string lastName = "y";\n    F():Person("y") { cout << "F:" << &lastName << endl; };\n};\nstruct M :virtual Person{\n    //string lastName = "z";\n    M():Person("z") {cout << "M:" << &lastName << endl;};\n};\n/*\n    \u89e3\u51b3\u6b67\u5f02\u6027\u95ee\u9898\n        -1 \u6307\u5b9a\u8bbf\u95ee\u7684\u57df\n        -2 virtual \u865a\u7ee7\u627f\n        \u9488\u5bf9\u83f1\u5f62\u7ee7\u627f\uff0c\u53ef\u4ee5\u4f7f\u7528\u865a\u7ee7\u627f\n            -1 \u6b64\u65f6\u65e0\u6cd5\u5728\u8bbf\u95ee\u5230\u57fa\u7c7b\uff08\u7236\u7c7b\uff09\u5bf9\u5e94\u7684\u503c\n            -2 \u4ea7\u751f\u7684\u5bf9\u8c61\u7684\u7a7a\u95f4\u56e0\u6b64\u53d1\u751f\u6539\u53d8\n                    Person  F    M   S1\n    \u6ca1\u6709virtual     32      32  32  96\n        Person:0x7ffdceacb130\n        F:0x7ffdceacb130\n        Person:0x7ffdceacb150\n        M:0x7ffdceacb150\n    \u52a0virtual\u540e     32      40  40  80\n        F:0x7ffefd729a40\n        M:0x7ffefd729a40\n    40 = 32 + 8\n    80 = 40(Person) + 8(\u5730\u5740) +_ 32(myLastName)\n    \u6240\u8c13\u7684\u865a\u7ee7\u627f\uff0c\u4ea7\u751f\u7684\u662f\u4e00\u79cd\u5730\u5740\u62f7\u8d1d\uff0c\u800c\u4e0d\u662f\u7a7a\u95f4\u62f7\u8d1d\n    \u6765\u6e90\u4e8e\u7236\u6bcd\u7684\u7a7a\u95f4\uff0c\u53ea\u6709\u4e00\u4efd\uff0c\u8fd9\u4efd\u662f\u4ece\u7956\u5148\u57fa\u7c7b\u7ee7\u627f\u4e0b\u6765\u7684\uff0c\n    \u81ea\u7136\u6ca1\u6709\u7236\u6bcd\u7a7a\u95f4\uff0c\u4e5f\u5c31\u65e0\u6cd5\u8bbf\u95ee\uff1b\n    \n    \u6240\u6709\u4e0a\u5c42\u7279\u6027\uff0c\u5176\u5b9e\u5230\u5e95\u5c42\u5f53\u4e2d\uff0c\u90fd\u9700\u8981\u4ece\u5185\u5b58\u89d2\u5ea6\u601d\u8003\n*/\nstruct S1: public F, public M {\n    string myLastName; \n};\nstruct S2: S1 {\n    string newLastName;\n};\nint main() {\n    \n    S1 s;\n    cout << s.F::lastName << endl;\n    cout << s.M::lastName << endl;\n    cout << sizeof(Person) << " " << sizeof(F) << " " << sizeof(M) << " " << sizeof(S1) << endl;\n    \n    cout << sizeof(Person) << " " << sizeof(F) << " " << sizeof(M) << " " << sizeof(S2) << endl;\n    return 0;\n}\n./array.cpp\n/*************************************************************************\n    > File Name: array.cpp\n    > Author: yanzhiwei \n    > Mail: 1931248856@qq.com\n    > Created Time: 2020\u5e7411\u670825\u65e5 \u661f\u671f\u4e09 13\u65f651\u520611\u79d2\n ************************************************************************/\n#include <iostream>\n#include <algorithm>\n#include <cstdio>\n#include <cstdlib>\n#include <cmath>\n#include <cstring>\n#include <string>\n#include <ctime>\nusing namespace std;\nclass MyArray\n{\nprivate:\n    int *m_p;//\u6570\u7ec4\u7a7a\u95f4\u7684\u8d77\u59cb\u5730\u5740\n    size_t m_len;//\u7533\u8bf7\u7684\u6570\u7ec4\u5143\u7d20\u4e2a\u6570\npublic:\n    MyArray(size_t n);//n \u8868\u793a\u7533\u8bf7\u7684\u52a8\u6001\u6570\u7ec4\u5143\u7d20\u4e2a\u6570\u3002 \n    ~MyArray();\n    MyArray(const MyArray &a);\n    MyArray &operator=(const MyArray &a);\n    int &operator[](size_t index);\n    const int &operator[](size_t index) const;\n    friend ostream& operator<<(ostream &out, const MyArray &a);\n};\nMyArray::MyArray(size_t n) {\n    m_len = n >= 0 ? n : 0;\n    if (n == 0) m_p = nullptr;\n    else m_p = new int[n];\n}\nMyArray::~MyArray() {\n    m_len = 0;\n    if (m_p != nullptr) delete m_p;\n}\nMyArray::MyArray(const MyArray &a) {\n    if (a.m_len == 0) return ;\n    m_len = a.m_len;\n    m_p = new int[m_len];\n    memcpy(m_p, a.m_p, sizeof(int) * m_len);\n}\nMyArray& MyArray::operator=(const MyArray &a) {\n    if (a.m_len == 0) return *this;\n    m_len = a.m_len;\n    m_p = new int[m_len];\n    memcpy(m_p, a.m_p, sizeof(int) * m_len);\n}\nint &MyArray::operator[](size_t index) {\n    if (index < 0 || index >= m_len) {\n        cout << "the index is error!" << endl;\n    }\n    return m_p[index];\n}\nconst int& MyArray::operator[](size_t index) const {\n    if (index < 0 || index >= m_len) {\n        cout << "const the index is error!" << endl;\n    }\n    return m_p[index];\n}\nostream& operator<<(ostream &out, const MyArray &a) {\n    cout << "the array[" << a.m_len << "] = ";\n    for (int i = 0; i < a.m_len; ++i) {\n        i && out << " ";\n        out << a.m_p[i];\n    }\n    return out;\n}\nint main() {\n    srand(time(0));\n    MyArray a1(10);    \n    for (int i = 0; i < 5; ++i) {\n        a1[i] = rand() % 100;\n    }\n    MyArray a2(a1);\n    MyArray a3 = a1;\n    cout << a1 << endl;\n    cout << a2 << endl;\n    cout << a3 << endl;\n    a1[11];\n    a2[10];\n    a3[11];\n    cout << a2[9] << endl;\n    return 0;\n}\n')),(0,a.kt)("h3",{id:"\u591a\u6001"},"\u591a\u6001"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'/*\n    \u52a8\u6001\u591a\u6001\u53d1\u751f\u7684\u6761\u4ef6\n        -1 \u5fc5\u987b\u6709\u7ee7\u627f\n        -2 \u5fc5\u987b\u6709\u65b9\u6cd5\u91cd\u5199\n        -3 \u57fa\u7c7b\u7684\u6307\u9488\u6216\u5f15\u7528\u7ed1\u5b9a\u5b50\u7c7b\u7684\u5bf9\u8c61\n        -4 \u53d1\u751f\u591a\u6001\u7684\u51fd\u6570\u5fc5\u987b\u4e3a\u865a\u51fd\u6570\n    \n    \u5f53\u4e00\u4e2a\u7c7b\u4e2d\uff0c\u6ca1\u6709\u8bbe\u7f6e\u4e00\u4e2a\u51fd\u6570\u4e3a\u865a\u51fd\u6570\u65f6\uff0c\n    \u7a0b\u5e8f\u5728\u7f16\u8bd1\u671f\u95f4\u4f1a\u751f\u6210\u8be5\u51fd\u6570\u7684\u9759\u6001\u5730\u5740\uff0c\n    \u901a\u8fc7\u5bf9\u8c61\u6307\u9488\uff0c\u53ef\u4ee5\u8bbf\u95ee\u5230\u6539\u5730\u5740\uff0c\u4e5f\u5c31\u6ca1\u6709segmentation fault \n    \u8bbe\u7f6e\u4e00\u4e2a\u51fd\u6570\u4e3a\u865a\u51fd\u6570\u540e\n    \u5bf9\u8c61\u7a7a\u95f4\u4e2d\u5c31\u4e00\u4e2a\u865a\u51fd\u6570\u8868\uff0c\u5982\u679c\u4e00\u4e2a\u5bf9\u8c61\u641c\u7d22\u4e0d\u5230\u8be5\u865a\u51fd\u6570\u8868\uff0c\n    \u4ea7\u751fsegmentation fault\n    \n    \u52a8\u6001\u7ed1\u5b9a\u7528\u4e8e\u4f20\u9012\u7ed3\u679c\n*/\n/*\nvoid lockSick(SomePerson *) {\n    \n}\n*/\nint main() {\n    //tom and jerry \n    Dog spike;\n    Cat tom;\n    Mouse jerry;\n    //why \u7a7a\u6307\u9488\u53ef\u4ee5\u8c03\u7528eat\u65b9\u6cd5\uff1b\n    Animal *anyAnimal = nullptr;\n    //anyAnimal->eat();\n    cout << sizeof(*anyAnimal) << endl;\n    anyAnimal = &spike;\n    anyAnimal->eat();\n    anyAnimal = &tom;\n    anyAnimal->eat();\n    anyAnimal = &jerry;\n    anyAnimal->eat();\n    return 0;\n}\n./static_condic.cpp\nvoid swap(int a, int b) { cout << "int" << endl; };\nvoid swap(string a, string b) { cout << "string" << endl; };\nvoid swap(double a, double b) { cout << "double" << endl; };\nvoid swap(char a, char b) {cout << "char" << endl;};\n/*\n    \u9759\u6001\u591a\u6001\n    \u5fc5\u987b\u5728\u7f16\u8bd1\u5668\u671f\u7ed9\u5b9a\u7c7b\u578b>\u5bf9\u5e94\u7684\u6570\u636e\u7c7b\u578b\n    \u6307\u9488\u5305\u542b\u591a\u5c42\u542b\u4e49\n        -1 \u7a7a\u95f4\u5730\u5740\n        -2 \u7a7a\u95f4\u957f\u5ea6\n        -3 \u4ece\u7a7a\u95f4\u8bfb\u53d6\u51fa\u7684\u503c\u7684\u7c7b\u578b\n    \u7f16\u8bd1\u671f\u5df2\u7ecf\u786e\u5b9a\u5176\u5bfb\u5740\u65b9\u5f0f\n*/\nint main() {\n    int *i, *j;\n    i = (int *)malloc(3);\n    j = (int *)malloc(3);\n    cout << sizeof(*i) << endl;\n    swap(*i, *j);\n    return 0;\n}\n')),(0,a.kt)("h3",{id:"\u62bd\u8c61\u7c7b"},"\u62bd\u8c61\u7c7b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'./abstract_class.cpp\n/*\n    \u62e5\u6709\u7eaf\u865a\u51fd\u6570\u7684\u7c7b\uff0c\u79f0\u4e3a\u62bd\u8c61\u7c7b\n    \u62bd\u8c61\u7c7b\u4e0d\u53ef\u4ee5\u6784\u9020\u5bf9\u8c61\n    \n    \u6d3e\u751f\u7c7b\u6ca1\u6709\u5bf9\u7eaf\u865a\u51fd\u6570\u8fdb\u884c\u5b9e\u73b0\uff0c\u90a3\u4e48\u6d3e\u751f\u7c7b\u4e5f\u662f\u62bd\u8c61\u7c7b\n    \u548c\u6cdb\u5316\u5173\u7cfb\u7684\u533a\u522b\u5728\u4e8e\uff0c\u6cdb\u5316\u7684\u7c7b\u53ef\u4ee5\u751f\u4ea7\u5bf9\u8c61\n    WorkBuilding \u4e0e Building \u4e4b\u95f4\u5c31\u662f\u5b9e\u73b0\u5173\u7cfb\n    C++\u5f53\u4e2d\u9762\u5411\u63a5\u53e3\u7f16\u7a0b\uff0c\u5c31\u662f\u901a\u8fc7\u62bd\u8c61\u7c7b\u5b9e\u73b0\u7684\n    \u6bd4\u5982\uff1a\u5a03\u54c8\u54c8\u5c31\u662f\u4e00\u4e2a\u501f\u53e3\uff0c\u62bd\u8c61\n        \u77ff\u6cc9\u6c34\n        \u8425\u517b\u5feb\u7ebf\n    \u5de5\u5382\u8bbe\u8ba1\u6a21\u5f0f\n        \u5b9e\u9645\u7531\u8be5\u5de5\u5382\u751f\u4ea7\u5bf9\u8c61\n    \u62bd\u8c61\u5de5\u5382\u8bbe\u8ba1\u6a21\u5f0f\n        \u53ea\u63d0\u4f9b\u751f\u4ea7\u6280\u672f\u652f\u6301\uff0c\u5e73\u53f0\u6388\u6743\u7b49 Apple\n*/\nclass Building {\n    public:\n    virtual void build() = 0;\n};\nclass WorkBuilding : public Building {\n    public:\n    void build() {\n        cout << "\u5efa\u9020" << endl;\n    }   \n};\nint main() {\n    Building *someBuild = new WorkBuilding;\n    someBuild->build();\n    return 0;\n}\n')))}u.isMDXComponent=!0},41768:function(n,e,t){"use strict";e.Z=t.p+"assets/images/image-20201125115826336-a901db16ca041b9ac7dd4b485c73e8ba.png"},88985:function(n,e,t){"use strict";e.Z=t.p+"assets/images/lALPDg7mO1isSkHNApbNCZY_2454_662-ab3a5619c4c31d0815e357292cc3f3d8.png"}}]);