(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{157:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(163),c=a(161);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(c.a,{title:"Home"}),r.a.createElement("main",{class:"content-wrapper"},r.a.createElement("div",{class:"intro"},r.a.createElement("h1",null,"Hello!"),r.a.createElement("h2",null,"I'm Ben Evans, a web developer"),r.a.createElement("p",null,"Check out the links below if you want to know more about me.")),r.a.createElement("div",{class:"links"},r.a.createElement("a",{href:"https://github.com/benevansnz/"},"Github"),r.a.createElement("a",{href:"https://codepen.io/benevansnz/"},"Codepen"),r.a.createElement("a",{href:"http://twitter.com/benevansnz/"},"Twitter"),r.a.createElement("a",{href:"https://www.linkedin.com/in/benevansnz/"},"LinkedIn"))))}},158:function(e,t,a){var n;e.exports=(n=a(160))&&n.default||n},159:function(e){e.exports={data:{site:{siteMetadata:{title:"benevansnz"}}}}},160:function(e,t,a){"use strict";a.r(t);a(41);var n=a(0),r=a.n(n),i=a(5),c=a.n(i),o=a(65),s=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},161:function(e,t,a){"use strict";var n=a(162),r=a(0),i=a.n(r),c=a(5),o=a.n(c),s=a(166),l=a.n(s);function u(e){var t=e.description,a=e.lang,r=e.meta,c=e.title,o=n.data.site,s=t||o.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:c},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:s}].concat(r)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),title:o.a.string.isRequired},t.a=u},162:function(e){e.exports={data:{site:{siteMetadata:{title:"benevansnz",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},163:function(e,t,a){"use strict";var n=a(159),r=a(0),i=a.n(r),c=a(5),o=a.n(c),s=(a(40),a(158),i.a.createContext({}));function l(e){var t=e.staticQueryData,a=e.data,n=e.query,r=e.render,c=a?a.data:t[n]&&t[n].data;return i.a.createElement(i.a.Fragment,null,c&&r(c),!c&&i.a.createElement("div",null,"Loading (StaticQuery)"))}var u=function(e){var t=e.data,a=e.query,n=e.render,r=e.children;return i.a.createElement(s.Consumer,null,function(e){return i.a.createElement(l,{data:t,query:a,render:n||r,staticQueryData:e})})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func};a(164),a(165);var d=function(e){var t=e.children;return i.a.createElement(u,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{padding:"5vh 5vw"}},i.a.createElement("main",null,t)))},data:n})};d.propTypes={children:o.a.node.isRequired};t.a=d}}]);
//# sourceMappingURL=component---src-pages-index-js-9370e289ac77546d4cba.js.map