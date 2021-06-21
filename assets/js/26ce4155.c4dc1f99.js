(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[5086],{3905:function(n,e,r){"use strict";r.d(e,{Zo:function(){return f},kt:function(){return s}});var t=r(67294);function i(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function o(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function a(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){i(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function l(n,e){if(null==n)return{};var r,t,i=function(n,e){if(null==n)return{};var r,t,i={},o=Object.keys(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||(i[r]=n[r]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(i[r]=n[r])}return i}var c=t.createContext({}),u=function(n){var e=t.useContext(c),r=e;return n&&(r="function"==typeof n?n(e):a(a({},e),n)),r},f=function(n){var e=u(n.components);return t.createElement(c.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},p=t.forwardRef((function(n,e){var r=n.components,i=n.mdxType,o=n.originalType,c=n.parentName,f=l(n,["components","mdxType","originalType","parentName"]),p=u(r),s=i,m=p["".concat(c,".").concat(s)]||p[s]||d[s]||o;return r?t.createElement(m,a(a({ref:e},f),{},{components:r})):t.createElement(m,a({ref:e},f))}));function s(n,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var o=r.length,a=new Array(o);a[0]=p;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=n,l.mdxType="string"==typeof n?n:i,a[1]=l;for(var u=2;u<o;u++)a[u]=r[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},85838:function(n,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var t=r(22122),i=r(19756),o=(r(67294),r(3905)),a=["components"],l={id:"C1.nowcoder",title:"C1.nowcoder","typora-root-url":"../"},c={unversionedId:"Online_Judge/C1.nowcoder",id:"Online_Judge/C1.nowcoder",isDocsHomePage:!1,title:"nowcoder",description:"\u6700\u957f\u7684\u53ef\u6574\u5408\u7684\u5b50\u6570\u7ec4\u957f\u5ea6",source:"@site/docs/3.Online_Judge/C1.nowcoder.md",sourceDirName:"3.Online_Judge",slug:"/Online_Judge/C1.nowcoder",permalink:"/Online_Judge/C1.nowcoder",editUrl:"https://github.com/worst0/wiki_note/edit/main/docs/3.Online_Judge/C1.nowcoder.md",version:"current",lastUpdatedAt:1624240624,formattedLastUpdatedAt:"6/21/2021",frontMatter:{id:"C1.nowcoder",title:"C1.nowcoder","typora-root-url":"../"},sidebar:"Document\ud83d\udcbb",previous:{title:"HZOJ",permalink:"/Online_Judge/B1.HZOJ"},next:{title:"D1.EP",permalink:"/Online_Judge/D1.EP"}},u=[{value:"\u65cb\u8f6c\u6570\u7ec4\u7684\u6700\u5c0f\u6570\u5b57",id:"\u65cb\u8f6c\u6570\u7ec4\u7684\u6700\u5c0f\u6570\u5b57",children:[]},{value:"\u8df3\u53f0\u9636",id:"\u8df3\u53f0\u9636",children:[]}],f={toc:u};function d(n){var e=n.components,r=(0,i.Z)(n,a);return(0,o.kt)("wrapper",(0,t.Z)({},f,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h5",{id:"\u6700\u957f\u7684\u53ef\u6574\u5408\u7684\u5b50\u6570\u7ec4\u957f\u5ea6"},"\u6700\u957f\u7684\u53ef\u6574\u5408\u7684\u5b50\u6570\u7ec4\u957f\u5ea6"),(0,o.kt)("p",null,"sort + dp"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c++"},'#include<cstdio>\n#include<algorithm>\nusing namespace std;\n    \nint main(){\n    int n;\n    scanf("%d", &n);\n    int A[n];\n    for(int i =0; i < n; ++i){\n        scanf("%d", &A[i]);\n    }\n    if(n <= 1){\n        printf("%d", n);\n        return 0;\n    }\n    sort(A, A+n);\n    int res=0, zong = 1;\n    for(int i = 1; i < n; ++i){\n        if(A[i] == A[i-1]) continue;\n        if(A[i] == A[i-1]+1){\n            zong++;\n            res = max(zong, res);\n        }\n        else{\n            zong = 1;\n        }\n    }\n    printf("%d", res);\n    return 0;\n        \n}\n')),(0,o.kt)("h3",{id:"\u65cb\u8f6c\u6570\u7ec4\u7684\u6700\u5c0f\u6570\u5b57"},"\u65cb\u8f6c\u6570\u7ec4\u7684\u6700\u5c0f\u6570\u5b57"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"//C++ \u4e8c\u5206\u6cd5\nclass Solution {\npublic:\n    int minNumberInRotateArray(vector<int> rotateArray) {\n        if (rotateArray.empty()) return 0;\n        int left = 0, right = rotateArray.size() - 1;\n        while (left < right) {\n            //\u786e\u8ba4\u5b50\u6570\u7ec4\u662f\u5426\u662f\u7c7b\u4f3c1,1,2,4,5,..,7\u7684\u975e\u9012\u51cf\u6570\u7ec4\n            if (rotateArray[left] < rotateArray[right]) return rotateArray[left];\n            \n            int mid = left + (right - left) / 2;\n            //\u5982\u679c\u5de6\u534a\u6570\u7ec4\u4e3a\u6709\u5e8f\u6570\u7ec4\n            if (rotateArray[left] < rotateArray[mid])\n                left = mid + 1;\n            //\u5982\u679c\u53f3\u534a\u6570\u7ec4\u4e3a\u6709\u5e8f\u6570\u7ec4\n            else if (rotateArray[mid] < rotateArray[right])\n                right = mid;\n            //\u5426\u5219\uff0crotateArray[left] == rotateArray[mid] == rotateArray[right]\n            else {\n                ++left;\n            }\n        }\n        return rotateArray[left];\n    }\n};\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"public static int minNumberInRotateArray(int[] array) {\n        if (array.length == 0)\n            return 0;\n        int left = 0;\n        int right = array.length - 1;\n        int middle = -1;\n        while (array[left]>=array[right]) {\n            if(right-left==1){\n                middle = right;\n                break;\n            }\n            middle = left + (right - left) / 2;\n            if (array[middle] >= array[left]) {\n                left = middle;\n            }\n            if (array[middle] <= array[right]) {\n                right = middle;\n            }\n        }\n        return array[middle];\n    }\n")),(0,o.kt)("h3",{id:"\u8df3\u53f0\u9636"},"\u8df3\u53f0\u9636"),(0,o.kt)("p",null,"\u4e00\u53ea\u9752\u86d9\u4e00\u6b21\u53ef\u4ee5\u8df3\u4e0a1\u7ea7\u53f0\u9636\uff0c\u4e5f\u53ef\u4ee5\u8df3\u4e0a2\u7ea7\u2026\u2026\u5b83\u4e5f\u53ef\u4ee5\u8df3\u4e0an\u7ea7\u3002\u6c42\u8be5\u9752\u86d9\u8df3\u4e0a\u4e00\u4e2an\u7ea7\u7684\u53f0\u9636\u603b\u5171\u6709\u591a\u5c11\u79cd\u8df3\u6cd5\u3002"),(0,o.kt)("p",null,"\u56e0\u4e3an\u7ea7\u53f0\u9636\uff0c\u7b2c\u4e00\u6b65\u6709n\u79cd\u8df3\u6cd5\uff1a\u8df31\u7ea7\u3001\u8df32\u7ea7\u3001\u5230\u8df3n\u7ea7\n\u8df31\u7ea7\uff0c\u5269\u4e0bn-1\u7ea7\uff0c\u5219\u5269\u4e0b\u8df3\u6cd5\u662ff(n-1)\n\u8df32\u7ea7\uff0c\u5269\u4e0bn-2\u7ea7\uff0c\u5219\u5269\u4e0b\u8df3\u6cd5\u662ff(n-2)\n\u6240\u4ee5f(n)=f(n-1)+f(n-2)+...+f(1)\n\u56e0\u4e3af(n-1)=f(n-2)+f(n-3)+...+f(1)"),(0,o.kt)("p",null,"\u6240\u4ee5f(n)=2*f(n-1)"))}d.isMDXComponent=!0}}]);