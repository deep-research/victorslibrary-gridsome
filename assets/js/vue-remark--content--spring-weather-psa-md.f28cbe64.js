(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{UQSp:function(t,e,n){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},bPk9:function(t,e,n){"use strict";n.r(e);var o=n("KHd+"),r=n("UQSp"),i=n("oCYn");function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}i.a.config.optionMergeStrategies;var s={VueRemarkRoot:r.a},c=function(t){var e=t.options.components=t.options.components||{},n=t.options.computed=t.options.computed||{};Object.keys(s).forEach((function(t){"object"===a(s[t])&&"function"==typeof s[t].render||"function"==typeof s[t]&&"function"==typeof s[t].options.render?e[t]=s[t]:n[t]=function(){return s[t]}}))},u=i.a.config.optionMergeStrategies,p="__vueRemarkFrontMatter",l={excerpt:null,title:"Spring Weather PSA",band:"Reenchantment",authors:["Victor Fisher"],explicit:!1,description:'I was required to play public service announcements on my college radio show, which was called *Reverend Radio*. After getting sick of them, I decided to make one of my own. It ended up playing the automation system for many months.\n\n<a href="https://wmxm.org/" target="_blank">WMXM 88.9 FM - Lake Forest College Radio</a>\n',lyrics:"Hello, I’m The Reverend of Despair and you’re listening to WMXM 88.9 FM, Lake Forest College Radio\n\nSpring is just around the corner so get outside, have a breath of fresh air, put on some Rollerblades\n\nYou’ll have a great time, I promise\n\nI mean what else are you gonna do, be on your computer all day?\n\nTake a break from studying, and just enjoy the nice weather\n\n*This has been a public service announcement from The Reverend of Despair*\n"};var d=function(t){t.options[p]&&(t.options[p]=l),i.a.util.defineReactive(t.options,p,l),t.options.computed=u.computed({$frontmatter:function(){return t.options[p]}},t.options.computed)},f=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("VueRemarkRoot",[n("h2",{attrs:{id:"-frontmattertitle-"}},[n("a",{attrs:{href:"#-frontmattertitle-","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),t._v(t._s(t.$frontmatter.title))]),n("p",[t._v("By: "+t._s(t.$frontmatter.band)+" ("+t._s(t.$frontmatter.authors.join(", "))+")"),n("br"),t._v("\nExplicit: "+t._s(t.$frontmatter.explicit))]),n("h2",{attrs:{id:"description"}},[n("a",{attrs:{href:"#description","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),t._v("Description")]),n("vue-markdown",[t._v(t._s(t.$frontmatter.description))]),n("h2",{attrs:{id:"recordings"}},[n("a",{attrs:{href:"#recordings","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),t._v("Recordings")]),n("p",[t._v(t._s(t.$frontmatter.recordings))]),n("h2",{attrs:{id:"lyrics"}},[n("a",{attrs:{href:"#lyrics","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),t._v("Lyrics")]),n("vue-markdown",[t._v(t._s(t.$frontmatter.lyrics))])],1)}),[],!1,null,null,null);"function"==typeof c&&c(f),"function"==typeof d&&d(f);e.default=f.exports}}]);