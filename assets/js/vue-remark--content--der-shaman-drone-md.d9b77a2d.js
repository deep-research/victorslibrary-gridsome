(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{UQSp:function(t,n,e){"use strict";n.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},zwLW:function(t,n,e){"use strict";e.r(n);var o=e("KHd+"),r=e("UQSp"),i=e("oCYn");function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}i.a.config.optionMergeStrategies;var s={VueRemarkRoot:r.a},c=function(t){var n=t.options.components=t.options.components||{},e=t.options.computed=t.options.computed||{};Object.keys(s).forEach((function(t){"object"===a(s[t])&&"function"==typeof s[t].render||"function"==typeof s[t]&&"function"==typeof s[t].options.render?n[t]=s[t]:e[t]=function(){return s[t]}}))},p=i.a.config.optionMergeStrategies,u="__vueRemarkFrontMatter",l={excerpt:null,title:"derShamanDrone",band:"Reenchantment",authors:["Victor Fisher"],explicit:!1,description:"This recording is an exploration of the ancient mysteries of tribalism and the shamanic tradition.\n",recordings:[{title:"derShamanDrone",type:"Multitrack",style:"Drone",length:"2:44",released:null,link:"https://victorslibrary.s3.amazonaws.com/music/derShamanDrone/derShamanDrone.mp3"}],lyrics:"Instrumental"};var f=function(t){t.options[u]&&(t.options[u]=l),i.a.util.defineReactive(t.options,u,l),t.options.computed=p.computed({$frontmatter:function(){return t.options[u]}},t.options.computed)},d=Object(o.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("VueRemarkRoot",[e("h2",{attrs:{id:"-frontmattertitle-"}},[e("a",{attrs:{href:"#-frontmattertitle-","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),t._v(t._s(t.$frontmatter.title))]),e("p",[t._v("By: "),e("g-link",{attrs:{to:"/band/reenchantment"}},[t._v("Reenchantment")]),t._v(" ("+t._s(t.$frontmatter.authors.join(", "))+")")],1),e("p",[t._v("Explicit: "+t._s(t.$frontmatter.explicit))]),e("h2",{attrs:{id:"description"}},[e("a",{attrs:{href:"#description","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),t._v("Description")]),e("vue-markdown",[t._v(t._s(t.$frontmatter.description))]),e("h2",{attrs:{id:"recordings"}},[e("a",{attrs:{href:"#recordings","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),t._v("Recordings")]),e("p",[t._v(t._s(t.$frontmatter.recordings))]),e("h2",{attrs:{id:"lyrics"}},[e("a",{attrs:{href:"#lyrics","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),t._v("Lyrics")]),e("vue-markdown",[t._v(t._s(t.$frontmatter.lyrics))])],1)}),[],!1,null,null,null);"function"==typeof c&&c(d),"function"==typeof f&&f(d);n.default=d.exports}}]);