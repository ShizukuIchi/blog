(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{149:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return l});var a=n(7),r=n.n(a),o=n(0),i=n.n(o),c=n(156),s=n(157),u=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data.site.siteMetadata.title;return i.a.createElement(c.a,{location:this.props.location,title:t},i.a.createElement(s.a,{title:"404: Not Found"}),i.a.createElement("h1",null,"Not Found"),i.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},e}(i.a.Component);e.default=u;var l="1097489062"},152:function(t,e,n){"use strict";n.d(e,"b",function(){return l});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(32),s=n.n(c);n.d(e,"a",function(){return s.a});n(154);var u=r.a.createContext({}),l=function(t){return r.a.createElement(u.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},153:function(t,e,n){"use strict";n.d(e,"a",function(){return s}),n.d(e,"b",function(){return u});n(33);var a=n(164),r=n.n(a),o=n(165),i=n.n(o);delete i.a.googleFonts;var c=new r.a(Object.assign({},i.a,{bodyFontFamily:["微軟正黑體"],headerFontFamily:["微軟正黑體"],overrideThemeStyles:function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"},a:{color:"#199bd4",fontFamily:"微軟正黑體"},"h1,h2,h3,h4,h5,h6":{fontFamily:"微軟正黑體"}}}}));var s=c.rhythm,u=c.scale},154:function(t,e,n){var a;t.exports=(a=n(155))&&a.default||a},155:function(t,e,n){"use strict";n.r(e);n(33);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(54),s=n(2),u=function(t){var e=t.location,n=s.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=u},156:function(t,e,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),c=n(152),s=n(153),u=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t,e=this.props,n=e.location,a=e.title,r=e.children;return t="/blog/"===n.pathname?i.a.createElement("h1",{style:{marginBottom:Object(s.a)(1.5),marginTop:0}},i.a.createElement(c.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)):i.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},i.a.createElement(c.a,{style:{boxShadow:"none",textDecoration:"none",color:"#52bae7"},to:"/"},a)),i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(s.a)(24),padding:Object(s.a)(1.5)+" "+Object(s.a)(.75)}},i.a.createElement("header",null,t),i.a.createElement("main",null,r))},e}(i.a.Component);e.a=u},157:function(t,e,n){"use strict";var a=n(158),r=n(0),o=n.n(r),i=n(4),c=n.n(i),s=n(166),u=n.n(s);function l(t){var e=t.description,n=t.lang,r=t.meta,i=t.keywords,c=t.title,s=a.data.site,l=e||s.siteMetadata.description,d="All posts"===c?s.siteMetadata.author+"'s "+s.siteMetadata.title:c;return o.a.createElement(u.a,{htmlAttributes:{lang:n},title:c,titleTemplate:d,meta:[{name:"description",content:l},{property:"og:title",content:c},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:l}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}l.defaultProps={lang:"en",meta:[],keywords:[]},l.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},e.a=l},158:function(t){t.exports={data:{site:{siteMetadata:{title:"網頁小筆記",description:"HTML，CSS 網頁重要基礎小筆記",author:"Shizuku"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-a27ee197884fa83ec068.js.map