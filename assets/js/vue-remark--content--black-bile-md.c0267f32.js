(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{UQSp:function(t,n,e){"use strict";n.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},Ucsm:function(t,n,e){"use strict";e.r(n);var o=e("KHd+"),i=e("UQSp"),r=e("oCYn");function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.a.config.optionMergeStrategies;var s={VueRemarkRoot:i.a},c=function(t){var n=t.options.components=t.options.components||{},e=t.options.computed=t.options.computed||{};Object.keys(s).forEach((function(t){"object"===a(s[t])&&"function"==typeof s[t].render||"function"==typeof s[t]&&"function"==typeof s[t].options.render?n[t]=s[t]:e[t]=function(){return s[t]}}))},l=r.a.config.optionMergeStrategies,u="__vueRemarkFrontMatter",p={excerpt:null,title:"Black Bile",band:"Reenchantment",authors:["Victor Fisher"],explicit:!1,description:"This song describes the symptoms that one may encounter when facing a loss of meaning in their life. It was recorded with the use of traditional instrumentation.\n",recordings:[{title:"Black Bile",type:"Recording",style:"Ballad",length:"2:18",released:null,link:"https://victorslibrary.s3.amazonaws.com/music/Black+Bile/Black+Bile.mp3"}],lyrics:"Life alone an endless circle, going on and on\nWhat do I have, to be looking forward to?\nNothing’s good without a struggle, anymore\nWhy can’t I force myself, to do the things I need to do?\n\nNo one cares for any other, in honesty\nWho do we think we are? Promising so much won’t matter\nYour ideology will drown me, in my own fear\nCan’t you reason with me? Save me now the end is near\n\nSave me\n"};var d=function(t){t.options[u]&&(t.options[u]=p),r.a.util.defineReactive(t.options,u,p),t.options.computed=l.computed({$frontmatter:function(){return t.options[u]}},t.options.computed)},f=Object(o.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("VueRemarkRoot",[e("h2",{attrs:{id:"-frontmattertitle-"}},[e("a",{attrs:{href:"#-frontmattertitle-","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),t._v(t._s(t.$frontmatter.title))]),e("p",[t._v("By: "),e("g-link",{attrs:{to:"/band/reenchantment"}},[t._v("Reenchantment")]),t._v(" ("+t._s(t.$frontmatter.authors.join(", "))+")")],1),e("p",[t._v("Explicit: "+t._s(t.$frontmatter.explicit))]),e("h2",{attrs:{id:"description"}},[e("a",{attrs:{href:"#description","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),t._v("Description")]),e("vue-markdown",[t._v(t._s(t.$frontmatter.description))]),e("h2",{attrs:{id:"recordings"}},[e("a",{attrs:{href:"#recordings","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),t._v("Recordings")]),e("p",[t._v(t._s(t.$frontmatter.recordings))]),e("h2",{attrs:{id:"lyrics"}},[e("a",{attrs:{href:"#lyrics","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),t._v("Lyrics")]),e("vue-markdown",[t._v(t._s(t.$frontmatter.lyrics))])],1)}),[],!1,null,null,null);"function"==typeof c&&c(f),"function"==typeof d&&d(f);n.default=f.exports}}]);