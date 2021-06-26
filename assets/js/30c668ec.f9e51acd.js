(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[6994],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var f=r.createContext({}),c=function(e){var n=r.useContext(f),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(f.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,f=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(t),m=i,d=u["".concat(f,".").concat(m)]||u[m]||l[m]||s;return t?r.createElement(d,o(o({ref:n},p),{},{components:t})):r.createElement(d,o({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,o=new Array(s);o[0]=u;var a={};for(var f in n)hasOwnProperty.call(n,f)&&(a[f]=n[f]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var c=2;c<s;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},22579:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},metadata:function(){return f},toc:function(){return c},default:function(){return l}});var r=t(22122),i=t(19756),s=(t(67294),t(3905)),o=["components"],a={id:"B9.\u6587\u4ef6\u4f20\u8f93",title:"B9.\u6587\u4ef6\u4f20\u8f93","typora-root-url":"../"},f={unversionedId:"Operating_system/B9.\u6587\u4ef6\u4f20\u8f93",id:"Operating_system/B9.\u6587\u4ef6\u4f20\u8f93",isDocsHomePage:!1,title:"B9.\u6587\u4ef6\u4f20\u8f93",description:"sshfs",source:"@site/docs/5.Operating_system/B9.\u6587\u4ef6\u4f20\u8f93.md",sourceDirName:"5.Operating_system",slug:"/Operating_system/B9.\u6587\u4ef6\u4f20\u8f93",permalink:"/Operating_system/B9.\u6587\u4ef6\u4f20\u8f93",editUrl:"https://github.com/yanzhw/wiki_note/edit/main/docs/5.Operating_system/B9.\u6587\u4ef6\u4f20\u8f93.md",version:"current",lastUpdatedAt:1624240624,formattedLastUpdatedAt:"6/21/2021",frontMatter:{id:"B9.\u6587\u4ef6\u4f20\u8f93",title:"B9.\u6587\u4ef6\u4f20\u8f93","typora-root-url":"../"},sidebar:"Document\ud83d\udcbb",previous:{title:"B8.socket",permalink:"/Operating_system/B8.socket"},next:{title:"B10.IO\u6a21\u578b",permalink:"/Operating_system/B10.IO\u6a21\u578b"}},c=[],p={toc:c};function l(e){var n=e.components,t=(0,i.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"sshfs"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"}," sudo sshfs -o nonempty,allow_other,exec yanzhiwei@aliyun:/ /mnt/tecmint\n")),(0,s.kt)("p",null,"netstat"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"netstat -alntu\n#t -- tcp\n#u -- udp\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},'#include "head.h"\nvoid send_file(const char *filename,FILE *fp,int sockfd) {\n    FILE *fp = NULL;\n    size_t nread;\n    struct FileMsg filemsg;\n    char *p = NULL;\n    if ((fp = fopen(filename, "rb")) == NULL) {\n        perror("fopen");\n        return ;\n    }\n    fseek(fp, 0L, SEEK_END);\n    filmsg.size = ftell(fp);\n    strcpy(filmsg.name, (p = strrchr(filename, \'/\') ? p + 1 : filename));\n    fseek(fp, 0L, SEEK_SET);\n    while ((nread = fread(filemsg.buff, 1, sizeof(filemsg.buff)))) {\n        send(sockfd, (void*)&filemsg, sizeof(filemsg), 0);\n        memset(filemsg.buff, 0, sizeof(filemsg.buff));\n    }\n    return ;\n}\n\nvoid recv_file(int sockfd) {\n        ssize_t recv_size = 0, total_size = 0;\n        struct FileMsg packet_t, packet;\n        int packet_size = sizeof(struct FileMsg);\n        int first  = 1, offset = 0;\n        while ((recv_size = recv(sockfd, &packet, sizeof(packet), 0)) > 0) {\n            if (first) {\n                fp = fopen(msg.filename, "wb");\n            }\n            first = 0;\n            if (offset + recv_size == packet_size) {\n                fwrite(packet.buff, sizeof(packet.buff), 1, fp);\n                printf(GREEN"\u6574\u5305"NONE":packet_size");\n                offset = 0;\n            } else if (offset + recv_size < packet_size) {\n                offset += recv_size; \n                memcpy();\n            }\n        }\n}\n\n\nint main(int argc, char **argv) {\n    if (argc != 2) {\n        fprintf(stderr, "Usage : %s port!\\n", argv[0]);\n        exit(1);\n    }\n    int listener, port, fd;\n    pid_t pid;\n    port = atoi(argv[1]); \n    if ((listener = socket_create(port)) < 0) {\n        perror("socket_create()");\n        exit(1);\n    }\n    whlie (1) {\n        if ((fd = accept(listener, NULL, NULL)) < 0) {\n            perror("accept");\n            exit(1);\n        } \n        if ((pid = fork()) < 0) {\n            perror("fork()");\n            exit(1);\n        }\n        if (pid == 0) {\n            close(listener);\n            recv_file(fd);\n            exit(0);\n        } else {\n            close(fd);\n        }\n    }\n\n    return 0;\n}\n\n')))}l.isMDXComponent=!0}}]);