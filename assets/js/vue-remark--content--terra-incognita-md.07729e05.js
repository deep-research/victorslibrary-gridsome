(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{UQSp:function(t,n,o){"use strict";n.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},iMvo:function(t,n,o){"use strict";o.r(n);var e=o("KHd+"),r=o("UQSp"),i=o("oCYn");function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}i.a.config.optionMergeStrategies;var s={VueRemarkRoot:r.a},c=function(t){var n=t.options.components=t.options.components||{},o=t.options.computed=t.options.computed||{};Object.keys(s).forEach((function(t){"object"===a(s[t])&&"function"==typeof s[t].render||"function"==typeof s[t]&&"function"==typeof s[t].options.render?n[t]=s[t]:o[t]=function(){return s[t]}}))},p=i.a.config.optionMergeStrategies,u="__vueRemarkFrontMatter",l={excerpt:null,title:"Terra Incognita",band:"Reenchantment",authors:["Victor Fisher"],explicit:!1,description:"This is an atmospheric rock song that has a nautical feel to it.\n",recordings:[{title:"Terra Incognita",type:"Recording",style:"Electronic",length:"1:18",released:null,link:"https://victorslibrary.s3.amazonaws.com/music/Terra+Incognita/Terra+Incognita.mp3"}],lyrics:"Instrumental"};var f=function(t){t.options[u]&&(t.options[u]=l),i.a.util.defineReactive(t.options,u,l),t.options.computed=p.computed({$frontmatter:function(){return t.options[u]}},t.options.computed)},d=Object(e.a)({},(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("VueRemarkRoot",[o("h2",{attrs:{id:"-frontmattertitle-"}},[o("a",{attrs:{href:"#-frontmattertitle-","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v(t._s(t.$frontmatter.title))]),o("p",[t._v("By: "+t._s(t.$frontmatter.band)+" ("+t._s(t.$frontmatter.authors.join(", "))+")"),o("br"),t._v("\nExplicit: "+t._s(t.$frontmatter.explicit))]),o("h2",{attrs:{id:"description"}},[o("a",{attrs:{href:"#description","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("Description")]),o("vue-markdown",[t._v(t._s(t.$frontmatter.description))]),o("h2",{attrs:{id:"recordings"}},[o("a",{attrs:{href:"#recordings","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("Recordings")]),o("p",[t._v(t._s(t.$frontmatter.recordings))]),o("h2",{attrs:{id:"lyrics"}},[o("a",{attrs:{href:"#lyrics","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("Lyrics")]),o("vue-markdown",[t._v(t._s(t.$frontmatter.lyrics))])],1)}),[],!1,null,null,null);"function"==typeof c&&c(d),"function"==typeof f&&f(d);n.default=d.exports}}]);