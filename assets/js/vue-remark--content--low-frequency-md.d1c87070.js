(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"NKX/":function(t,n,e){"use strict";var o={props:{songData:{type:Object,required:!0}}},i=e("KHd+"),s=Object(i.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t.songData.band?e("div",[t._v("\n    By: "+t._s(t.songData.band)+"\n    "),t.songData.authors?e("span",[t._v("\n      ("+t._s(t.songData.authors.join(", "))+")\n    ")]):t._e()]):e("div",[t.songData.authors?e("span",[t._v("\n      By: "+t._s(t.songData.authors.join(", "))+"\n    ")]):t._e()]),t.songData.explicit?e("div",[e("br"),t._v("\n    ⚠️ Warning: Contains explicit content.\n  ")]):t._e(),t.songData.description?e("div",[e("h2",[t._v("Description")]),e("vue-markdown",[t._v(t._s(t.songData.description))])],1):t._e(),t.songData.recordings?e("div",[e("h2",[t._v("Recordings")]),t._l(t.songData.recordings,(function(n,o){return e("div",{key:o},[n.title?e("h3",[t._v(t._s(o+1)+". "+t._s(n.title))]):t._e(),n.type?e("div",[t._v("Type: "+t._s(n.type))]):t._e(),n.style?e("div",[t._v("Style: "+t._s(n.style))]):t._e(),n.released?e("div",[t._v("Released: "+t._s(n.released))]):t._e(),n.link?e("div",[e("br"),e("audio",{attrs:{controls:"",controlsList:"nodownload"}},[e("source",{attrs:{src:n.link,type:"audio/ogg"}}),e("source",{attrs:{src:n.link,type:"audio/mpeg"}}),t._v("\n        Your browser does not support the audio element.\n        ")])]):t._e()])}))],2):t._e(),t.songData.lyrics?e("div",[e("h2",[t._v("Lyrics")]),e("vue-markdown",[t._v(t._s(t.songData.lyrics))])],1):t._e()])}),[],!1,null,null,null);n.a=s.exports},UQSp:function(t,n,e){"use strict";n.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},"gx/W":function(t,n,e){"use strict";e.r(n);var o=e("KHd+"),i=e("NKX/"),s=e("UQSp"),r=e("oCYn");function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.a.config.optionMergeStrategies;var c={ReenchantmentSong:i.a,VueRemarkRoot:s.a},u=function(t){var n=t.options.components=t.options.components||{},e=t.options.computed=t.options.computed||{};Object.keys(c).forEach((function(t){"object"===a(c[t])&&"function"==typeof c[t].render||"function"==typeof c[t]&&"function"==typeof c[t].options.render?n[t]=c[t]:e[t]=function(){return c[t]}}))},l=r.a.config.optionMergeStrategies,p="__vueRemarkFrontMatter",d={excerpt:null,title:"Low Frequency",band:"Reenchantment",authors:["Victor Fisher"],explicit:!1,type:"Song",description:"*Prepare yourself for an evil sound exploration that is certain to trigger both insanity and enlightenment!*\n\nAlan Moore has discussed the alchemical principals of solve and coagula in his speeches on magic. These concepts would be referred to as analysis and synthesis today. This sound exploration was created at a time when Victor was primarily interested in the possibilities of analytical thought. It is meant for playing in the background during ritual work.\n\nPlease note: This recording is currently not available but can be provided upon request.\n",lyrics:"Instrumental"};var f=function(t){t.options[p]&&(t.options[p]=d),r.a.util.defineReactive(t.options,p,d),t.options.computed=l.computed({$frontmatter:function(){return t.options[p]}},t.options.computed)},y=Object(o.a)({},(function(){var t=this.$createElement,n=this._self._c||t;return n("VueRemarkRoot",[n("ReenchantmentSong",{attrs:{songData:this.$frontmatter}})],1)}),[],!1,null,null,null);"function"==typeof u&&u(y),"function"==typeof f&&f(y);n.default=y.exports}}]);