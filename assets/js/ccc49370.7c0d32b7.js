(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[103,744],{3146:function(e,t,a){"use strict";a.d(t,{Z:function(){return g}});var n=a(7294),r=a(6010),l=a(3905),i=a(4973),o=a(6742),s=a(3541),c=a(1217),m="blogPostTitle_GeHD",u="blogPostDate_fNvV",d=a(6700);var g=function(e){var t,a,g=(t=(0,d.c2)().selectMessage,function(e){var a=Math.ceil(e);return t(a,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}),v=e.children,f=e.frontMatter,h=e.metadata,p=e.truncated,E=e.isBlogPostPage,b=void 0!==E&&E,_=h.date,N=h.formattedDate,k=h.permalink,Z=h.tags,C=h.readingTime,P=f.author,w=f.title,I=f.image,T=f.keywords,x=f.author_url||f.authorURL,L=f.author_title||f.authorTitle,M=f.author_image_url||f.authorImageURL;return n.createElement(n.Fragment,null,n.createElement(c.Z,{keywords:T,image:I}),n.createElement("article",{className:b?void 0:"margin-bottom--xl"},(a=b?"h1":"h2",n.createElement("header",null,n.createElement(a,{className:(0,r.Z)("margin-bottom--sm",m)},b?w:n.createElement(o.Z,{to:k},w)),n.createElement("div",{className:"margin-vert--md"},n.createElement("time",{dateTime:_,className:u},N,C&&n.createElement(n.Fragment,null," \xb7 ",g(C)))),n.createElement("div",{className:"avatar margin-vert--md"},M&&n.createElement(o.Z,{className:"avatar__photo-link avatar__photo",href:x},n.createElement("img",{src:M,alt:P})),n.createElement("div",{className:"avatar__intro"},P&&n.createElement(n.Fragment,null,n.createElement("h4",{className:"avatar__name"},n.createElement(o.Z,{href:x},P)),n.createElement("small",{className:"avatar__subtitle"},L)))))),n.createElement("div",{className:"markdown"},n.createElement(l.Zo,{components:s.Z},v)),(Z.length>0||p)&&n.createElement("footer",{className:"row margin-vert--lg"},Z.length>0&&n.createElement("div",{className:"col"},n.createElement("strong",null,n.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),Z.map((function(e){var t=e.label,a=e.permalink;return n.createElement(o.Z,{key:a,className:"margin-horiz--sm",to:a},t)}))),p&&n.createElement("div",{className:"col text--right"},n.createElement(o.Z,{to:h.permalink,"aria-label":"Read more about "+w},n.createElement("strong",null,n.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},4147:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return g}});var n=a(7294),r=a(1525),l=a(3146),i=a(4973),o=a(6742);var s=function(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,i.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(o.Z,{className:"pagination-nav__link",to:a.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(i.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(o.Z,{className:"pagination-nav__link",to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(i.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),n.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},c=a(5601),m=a(571),u=a(6146),d=a(6700);var g=function(e){var t=e.content,a=e.sidebar,i=t.frontMatter,o=t.metadata,g=o.title,v=o.description,f=o.nextItem,h=o.prevItem,p=o.editUrl,E=i.hide_table_of_contents;return n.createElement(r.Z,{title:g,description:v,wrapperClassName:d.kM.wrapper.blogPages,pageClassName:d.kM.page.blogPostPage},t&&n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--3"},n.createElement(c.Z,{sidebar:a})),n.createElement("main",{className:"col col--7"},n.createElement(l.Z,{frontMatter:i,metadata:o,isBlogPostPage:!0},n.createElement(t,null)),n.createElement("div",null,p&&n.createElement(u.Z,{editUrl:p})),(f||h)&&n.createElement("div",{className:"margin-vert--xl"},n.createElement(s,{nextItem:f,prevItem:h}))),!E&&t.toc&&n.createElement("div",{className:"col col--2"},n.createElement(m.Z,{toc:t.toc})))))}},5601:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var n=a(7294),r=a(6010),l=a(6742),i="sidebar_2ahu",o="sidebarItemTitle_2hhb",s="sidebarItemList_2xAf",c="sidebarItem_2UVv",m="sidebarItemLink_1RT6",u="sidebarItemLinkActive_12pM";function d(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("div",{className:(0,r.Z)(i,"thin-scrollbar")},n.createElement("h3",{className:o},t.title),n.createElement("ul",{className:s},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:c},n.createElement(l.Z,{isNavLink:!0,to:e.permalink,className:m,activeClassName:u},e.title))}))))}},6146:function(e,t,a){"use strict";a.d(t,{Z:function(){return u}});var n=a(7294),r=a(4973),l=a(2122),i=a(9756),o=a(6010),s="iconEdit_2_ui",c=["className"],m=function(e){var t=e.className,a=(0,i.Z)(e,c);return n.createElement("svg",(0,l.Z)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:(0,o.Z)(s,t),"aria-label":"Edit page"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function u(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},n.createElement(m,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},571:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var n=a(7294),r=a(6010);var l=function(e,t,a){var r=(0,n.useState)(void 0),l=r[0],i=r[1];(0,n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(n)for(var r=0,o=!1,s=document.getElementsByClassName(e);r<s.length&&!o;){var c=s[r],m=c.href,u=decodeURIComponent(m.substring(m.indexOf("#")+1));n.id===u&&(l&&l.classList.remove(t),c.classList.add(t),i(c),o=!0),r+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},i="tableOfContents_35-E",o="table-of-contents__link";function s(e){var t=e.toc,a=e.isChild;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:o,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(s,{isChild:!0,toc:e.children}))}))):null}var c=function(e){var t=e.toc;return l(o,"table-of-contents__link--active",100),n.createElement("div",{className:(0,r.Z)(i,"thin-scrollbar")},n.createElement(s,{toc:t}))}},6979:function(e,t,a){"use strict";var n=a(2122),r=a(9756),l=a(7294),i=a(3935),o=a(2263),s=a(5977),c=a(4996),m=a(6742),u=a(9105),d=a(6397),g=a(7052),v=a(6747),f=a(5613),h=["contextualSearch"],p=null;function E(e){var t=e.hit,a=e.children;return l.createElement(m.Z,{to:t.url},a)}function b(e){var t=e.state,a=e.onClose,n=(0,d.Z)().generateSearchPageLink;return l.createElement(m.Z,{to:n(t.query),onClick:a},"See all ",t.context.nbHits," results")}function _(e){var t,m,d=e.contextualSearch,_=(0,r.Z)(e,h),N=(0,o.default)().siteMetadata,k=(0,f.Z)(),Z=null!=(t=null==(m=_.searchParameters)?void 0:m.facetFilters)?t:[],C=d?[].concat(k,Z):Z,P=Object.assign({},_.searchParameters,{facetFilters:C}),w=(0,c.C)().withBaseUrl,I=(0,s.k6)(),T=(0,l.useRef)(null),x=(0,l.useState)(!1),L=x[0],M=x[1],y=(0,l.useState)(null),R=y[0],S=y[1],O=(0,l.useCallback)((function(){return p?Promise.resolve():Promise.all([a.e(763).then(a.bind(a,3763)),Promise.all([a.e(532),a.e(945)]).then(a.bind(a,6945)),Promise.all([a.e(532),a.e(210)]).then(a.bind(a,9846))]).then((function(e){var t=e[0].DocSearchModal;p=t}))}),[]),B=(0,l.useCallback)((function(){O().then((function(){M(!0)}))}),[O,M]),U=(0,l.useCallback)((function(){M(!1)}),[M]),A=(0,l.useCallback)((function(e){O().then((function(){M(!0),S(e.key)}))}),[O,M,S]),F=(0,l.useRef)({navigate:function(e){var t=e.suggestionUrl;I.push(t)}}).current,z=(0,l.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:w(""+t.pathname+t.hash)})}))})).current,D=(0,l.useMemo)((function(){return function(e){return l.createElement(b,(0,n.Z)({},e,{onClose:U}))}}),[U]),V=(0,l.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",N.docusaurusVersion),e}),[N.docusaurusVersion]);return(0,g.D)({isOpen:L,onOpen:B,onClose:U,onInput:A,searchButtonRef:T}),l.createElement(l.Fragment,null,l.createElement(u.Z,null,l.createElement("link",{rel:"preconnect",href:"https://"+_.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),l.createElement(v.a,{onTouchStart:O,onFocus:O,onMouseOver:O,onClick:B,ref:T}),L&&(0,i.createPortal)(l.createElement(p,(0,n.Z)({onClose:U,initialScrollY:window.scrollY,initialQuery:R,navigator:F,transformItems:z,hitComponent:E,resultsFooterComponent:D,transformSearchClient:V},_,{searchParameters:P})),document.body))}t.Z=function(){var e=(0,o.default)().siteConfig;return l.createElement(_,e.themeConfig.algolia)}}}]);