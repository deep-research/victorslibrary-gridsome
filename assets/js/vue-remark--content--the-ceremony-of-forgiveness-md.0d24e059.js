(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{UQSp:function(t,e,n){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},nsw8:function(t,e,n){"use strict";n.r(e);var o=n("KHd+"),r=n("UQSp"),i=n("oCYn");function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}i.a.config.optionMergeStrategies;var a={VueRemarkRoot:r.a},c=function(t){var e=t.options.components=t.options.components||{},n=t.options.computed=t.options.computed||{};Object.keys(a).forEach((function(t){"object"===s(a[t])&&"function"==typeof a[t].render||"function"==typeof a[t]&&"function"==typeof a[t].options.render?e[t]=a[t]:n[t]=function(){return a[t]}}))},u=i.a.config.optionMergeStrategies,f="__vueRemarkFrontMatter",p={excerpt:null,title:"The Ceremony of Forgiveness",band:"Reenchantment",authors:["Victor Fisher"],explicit:!1,description:"This song describes the feeling of guilt that accompanies a broken relationship. It is one of the best examples of my atmospheric rock sound.\n",recordings:[{title:"The Ceremony of Forgiveness",type:"Recording",style:"Rock",length:"3:10",released:null,link:"https://victorslibrary.s3.amazonaws.com/music/The+Ceremony+of+Forgiveness/The+Ceremony+of+Forgiveness.mp3"}],lyrics:"I’ll say I’m sorry\nThough you may not return\nI plead you for forgiveness\nThat I may not deserve\n\nLife can be so tragic\nFor those of us who feel\nThe pain that’s felt within the heart\nInside may never heal\n\nI love you\n"};var l=function(t){t.options[f]&&(t.options[f]=p),i.a.util.defineReactive(t.options,f,p),t.options.computed=u.computed({$frontmatter:function(){return t.options[f]}},t.options.computed)},m=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("VueRemarkRoot",[n("h2",{attrs:{id:"-frontmattertitle-"}},[n("a",{attrs:{href:"#-frontmattertitle-","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),t._v(t._s(t.$frontmatter.title))]),n("p",[t._v("By: "+t._s(t.$frontmatter.band)+" ("+t._s(t.$frontmatter.authors.join(", "))+")"),n("br"),t._v("\nExplicit: "+t._s(t.$frontmatter.explicit))]),n("h2",{attrs:{id:"description"}},[n("a",{attrs:{href:"#description","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),t._v("Description")]),n("vue-markdown",[t._v(t._s(t.$frontmatter.description))]),n("h2",{attrs:{id:"recordings"}},[n("a",{attrs:{href:"#recordings","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),t._v("Recordings")]),n("p",[t._v(t._s(t.$frontmatter.recordings))]),n("h2",{attrs:{id:"lyrics"}},[n("a",{attrs:{href:"#lyrics","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),t._v("Lyrics")]),n("vue-markdown",[t._v(t._s(t.$frontmatter.lyrics))])],1)}),[],!1,null,null,null);"function"==typeof c&&c(m),"function"==typeof l&&l(m);e.default=m.exports}}]);