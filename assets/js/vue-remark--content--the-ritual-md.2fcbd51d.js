(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{UQSp:function(t,n,e){"use strict";n.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},m6Yp:function(t,n,e){"use strict";e.r(n);var o=e("KHd+"),r=e("UQSp"),i=e("oCYn");function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}i.a.config.optionMergeStrategies;var s={VueRemarkRoot:r.a},c=function(t){var n=t.options.components=t.options.components||{},e=t.options.computed=t.options.computed||{};Object.keys(s).forEach((function(t){"object"===a(s[t])&&"function"==typeof s[t].render||"function"==typeof s[t]&&"function"==typeof s[t].options.render?n[t]=s[t]:e[t]=function(){return s[t]}}))},l=i.a.config.optionMergeStrategies,u="__vueRemarkFrontMatter",p={excerpt:null,title:"The Ritual",band:"Reenchantment",authors:["Victor Fisher"],explicit:!1,description:"This is an epic song about the dark history of mankind.\n",recordings:[{title:"The Ritual",type:"Multitrack",style:"Doom Metal",length:"9:13",released:null,link:"https://victorslibrary.s3.amazonaws.com/music/The+Ritual/The+Ritual.mp3"}],lyrics:"Into dark, I was born\nNo redemption from the cold\nAll alone, I walk the earth\nNever to feel pleasure again\n\nThrough all time to the dawn of man\nWhere is fate leading us to\nI cannot see through vast eternity\nBut I know we can’t abandon hope\n\nThrough the ages, man has fought\nWe use weapons to destroy ourselves\nIn troubled times, we don’t concern\nOurselves with others’ suffering\n\nIt’s a crime to think that cruelty\nTowards a brother is so small a thing\nThough we all worship different gods\nWe dwell beneath the same sky\n\nSave me from myself\nI’ve have enough of this\n"};var f=function(t){t.options[u]&&(t.options[u]=p),i.a.util.defineReactive(t.options,u,p),t.options.computed=l.computed({$frontmatter:function(){return t.options[u]}},t.options.computed)},h=Object(o.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("VueRemarkRoot",[e("h2",{attrs:{id:"-frontmattertitle-"}},[e("a",{attrs:{href:"#-frontmattertitle-","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),t._v(t._s(t.$frontmatter.title))]),e("p",[t._v("By: "),e("g-link",{attrs:{to:"/band/reenchantment"}},[t._v("Reenchantment")]),t._v(" ("+t._s(t.$frontmatter.authors.join(", "))+")")],1),e("p",[t._v("Explicit: "+t._s(t.$frontmatter.explicit))]),e("h2",{attrs:{id:"description"}},[e("a",{attrs:{href:"#description","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),t._v("Description")]),e("vue-markdown",[t._v(t._s(t.$frontmatter.description))]),e("h2",{attrs:{id:"recordings"}},[e("a",{attrs:{href:"#recordings","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),t._v("Recordings")]),e("p",[t._v(t._s(t.$frontmatter.recordings))]),e("h2",{attrs:{id:"lyrics"}},[e("a",{attrs:{href:"#lyrics","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),t._v("Lyrics")]),e("vue-markdown",[t._v(t._s(t.$frontmatter.lyrics))])],1)}),[],!1,null,null,null);"function"==typeof c&&c(h),"function"==typeof f&&f(h);n.default=h.exports}}]);