(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"0Gto":function(n,t,e){"use strict";e.r(t);var o=e("KHd+"),i=e("Kglc"),s=e("UQSp"),a=e("oCYn");function r(n){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}a.a.config.optionMergeStrategies;var l={Song:i.a,VueRemarkRoot:s.a},u=function(n){var t=n.options.components=n.options.components||{},e=n.options.computed=n.options.computed||{};Object.keys(l).forEach((function(n){"object"===r(l[n])&&"function"==typeof l[n].render||"function"==typeof l[n]&&"function"==typeof l[n].options.render?t[n]=l[n]:e[n]=function(){return l[n]}}))},c=a.a.config.optionMergeStrategies,d="__vueRemarkFrontMatter",p={excerpt:null,title:"Pure Misery",band:"Reenchantment",authors:["Victor Fisher"],explicit:!1,type:"Song",description:"This is a song about nihilism, alienation and the descent into insanity.\n",recordings:[{title:"Pure Misery",type:"Demo",style:"Rock",length:"6:42",released:null,link:"https://victorslibrary.s3.amazonaws.com/music/demos/Pure+Misery.mp3"}],lyrics:"Where have I gone in my life?\nThat is worth mentioning?\nWho will remember me when I’m when I’m gone?\nWhat is the point of anything?\n\nSometime I wonder at the world\nAren’t all things relative?\nIs there still something that is good?\nOr has god abandoned everything?\n\nEach day people live their lives\nRepeating on without end\nBut I have woken up from this dream, these dreams\nAnd in my life I’m still alone\n\nSo now you’ve all left me for good\nAll the lies they vanish in the air\nBut I don’t know if I could\nGo on as I have anymore\n\nI’m losing reality\nMy mind’s stuck in ethereal fantasies\nAnd no one can help me\nEverything around me is pure misery\n"};var m=function(n){n.options[d]&&(n.options[d]=p),a.a.util.defineReactive(n.options,d,p),n.options.computed=c.computed({$frontmatter:function(){return n.options[d]}},n.options.computed)},y=Object(o.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("VueRemarkRoot",[t("Song",{attrs:{songData:this.$frontmatter}})],1)}),[],!1,null,null,null);"function"==typeof u&&u(y),"function"==typeof m&&m(y);t.default=y.exports},"7GA/":function(n,t,e){"use strict";e("rB9j"),e("EnZy"),e("DQNa");var o=e("sWYD");t.a={methods:{formatDate:function(n){var t=n.split("-"),e=new Date(t[0],t[1]-1,t[2]);return Object(o.a)(e,"MM/dd/yyy")}}}},Kglc:function(n,t,e){"use strict";var o=e("7GA/"),i={props:{songData:{type:Object,required:!0}},mixins:[o.a]},s=e("KHd+"),a=Object(s.a)(i,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[n.songData.band?e("div",[n._v("\n    By: "+n._s(n.songData.band)+"\n    "),n.songData.authors?e("span",[n._v("\n      ("+n._s(n.songData.authors.join(", "))+")\n    ")]):n._e()]):e("div",[n.songData.authors?e("span",[n._v("\n      By: "+n._s(n.songData.authors.join(", "))+"\n    ")]):n._e()]),n.songData.type?e("div",[n._v("\n    Type: "),e("g-link",{attrs:{to:"/songs"}},[n._v("Song")])],1):n._e(),n.songData.published?e("div",[n._v("\n    Published: "+n._s(n.formatDate(n.songData.published))+"\n  ")]):n._e(),n.songData.updated?e("div",[n._v("\n    Updated: "+n._s(n.formatDate(n.songData.updated))+"\n  ")]):n._e(),n.songData.explicit?e("div",[e("br"),n._v("\n    ⚠️ Warning: Contains explicit content.\n  ")]):n._e(),n.songData.description?e("div",[e("h3",[n._v("Description")]),e("vue-markdown",[n._v(n._s(n.songData.description))])],1):n._e(),n.songData.recordings?e("div",[e("h3",[n._v("Recordings")]),n._l(n.songData.recordings,(function(t,o){return e("div",{key:o},[t.title?e("h4",[n._v(n._s(o+1)+". "+n._s(t.title))]):n._e(),t.type?e("div",[n._v("Type: "+n._s(t.type))]):n._e(),t.style?e("div",[n._v("Style: "+n._s(t.style))]):n._e(),t.released?e("div",[n._v("Released: "+n._s(n.formatDate(t.released)))]):n._e(),t.link?e("div",[e("br"),e("audio",{attrs:{controls:"",controlsList:"nodownload"}},[e("source",{attrs:{src:t.link,type:"audio/ogg"}}),e("source",{attrs:{src:t.link,type:"audio/mpeg"}}),n._v("\n        Your browser does not support the audio element.\n        ")])]):n._e()])}))],2):n._e(),n.songData.lyrics?e("div",[e("h3",[n._v("Lyrics")]),e("vue-markdown",[n._v(n._s(n.songData.lyrics))])],1):n._e()])}),[],!1,null,null,null);t.a=a.exports}}]);