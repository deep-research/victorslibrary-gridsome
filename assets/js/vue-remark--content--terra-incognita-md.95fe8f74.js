(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{"NKX/":function(t,n,o){"use strict";var e={props:{songData:{type:Object,required:!0}}},i=o("KHd+"),r=Object(i.a)(e,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",[t.songData.band?o("div",[t._v("\n    By: "+t._s(t.songData.band)+"\n    "),t.songData.authors?o("span",[t._v("\n      ("+t._s(t.songData.authors.join(", "))+")\n    ")]):t._e()]):o("div",[t.songData.authors?o("span",[t._v("\n      By: "+t._s(t.songData.authors.join(", "))+"\n    ")]):t._e()]),t.songData.explicit?o("div",[o("br"),t._v("\n    ⚠️ Warning: Contains explicit content.\n  ")]):t._e(),t.songData.description?o("div",[o("h2",[t._v("Description")]),o("vue-markdown",[t._v(t._s(t.songData.description))])],1):t._e(),t.songData.recordings?o("div",[o("h2",[t._v("Recordings")]),t._l(t.songData.recordings,(function(n,e){return o("div",{key:e},[n.title?o("h3",[t._v(t._s(e+1)+". "+t._s(n.title))]):t._e(),n.type?o("div",[t._v("Type: "+t._s(n.type))]):t._e(),n.style?o("div",[t._v("Style: "+t._s(n.style))]):t._e(),n.released?o("div",[t._v("Released: "+t._s(n.released))]):t._e(),n.link?o("div",[o("br"),o("audio",{attrs:{controls:"",controlsList:"nodownload"}},[o("source",{attrs:{src:n.link,type:"audio/ogg"}}),o("source",{attrs:{src:n.link,type:"audio/mpeg"}}),t._v("\n        Your browser does not support the audio element.\n        ")])]):t._e()])}))],2):t._e(),t.songData.lyrics?o("div",[o("h2",[t._v("Lyrics")]),o("vue-markdown",[t._v(t._s(t.songData.lyrics))])],1):t._e()])}),[],!1,null,null,null);n.a=r.exports},UQSp:function(t,n,o){"use strict";n.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},iMvo:function(t,n,o){"use strict";o.r(n);var e=o("KHd+"),i=o("NKX/"),r=o("UQSp"),s=o("oCYn");function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}s.a.config.optionMergeStrategies;var c={ReenchantmentSong:i.a,VueRemarkRoot:r.a},u=function(t){var n=t.options.components=t.options.components||{},o=t.options.computed=t.options.computed||{};Object.keys(c).forEach((function(t){"object"===a(c[t])&&"function"==typeof c[t].render||"function"==typeof c[t]&&"function"==typeof c[t].options.render?n[t]=c[t]:o[t]=function(){return c[t]}}))},p=s.a.config.optionMergeStrategies,l="__vueRemarkFrontMatter",d={excerpt:null,title:"Terra Incognita",band:"Reenchantment",authors:["Victor Fisher"],explicit:!1,type:"Song",description:"This is an atmospheric rock song that has a nautical feel to it.\n",recordings:[{title:"Terra Incognita",type:"Recording",style:"Electronic",length:"1:18",released:null,link:"https://victorslibrary.s3.amazonaws.com/music/Terra+Incognita/Terra+Incognita.mp3"}],lyrics:"Instrumental"};var f=function(t){t.options[l]&&(t.options[l]=d),s.a.util.defineReactive(t.options,l,d),t.options.computed=p.computed({$frontmatter:function(){return t.options[l]}},t.options.computed)},_=Object(e.a)({},(function(){var t=this.$createElement,n=this._self._c||t;return n("VueRemarkRoot",[n("ReenchantmentSong",{attrs:{songData:this.$frontmatter}})],1)}),[],!1,null,null,null);"function"==typeof u&&u(_),"function"==typeof f&&f(_);n.default=_.exports}}]);