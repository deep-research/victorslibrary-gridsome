(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{KdpL:function(e,n,o){"use strict";o.r(n);var t=o("KHd+"),s=o("NKX/"),r=o("UQSp"),i=o("oCYn");function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}i.a.config.optionMergeStrategies;var l={ReenchantmentSong:s.a,VueRemarkRoot:r.a},u=function(e){var n=e.options.components=e.options.components||{},o=e.options.computed=e.options.computed||{};Object.keys(l).forEach((function(e){"object"===a(l[e])&&"function"==typeof l[e].render||"function"==typeof l[e]&&"function"==typeof l[e].options.render?n[e]=l[e]:o[e]=function(){return l[e]}}))},c=i.a.config.optionMergeStrategies,d="__vueRemarkFrontMatter",p={excerpt:null,title:"Disoriented By the Forest Dark (Far From Help)",band:"Reenchantment",authors:["Victor Fisher"],explicit:!1,type:"Song",description:"This song represents the outcry of a wretched soul.\n",recordings:[{title:"Disoriented By the Forest Dark (Far From Help)",type:"Demo",style:"Rock",length:"5:35",released:null,link:"https://victorslibrary.s3.us-east-2.amazonaws.com/music/demos/Disoriented+By+the+Forest+Dark+(Far+From+Help).mp3"}],lyrics:"Hear me now, I am calling out to you\nJust begging for someone to listen\nWe all survive, so alone in this world\nThrough all the struggles and fear none shall reach me\n\nBut I’ve gone above, the cold ways of my past\nAll the progress just leads to seclusion\nNow I see the demons, as they dance before my eyes\nAnd I’m begging you, for just one more try\nYeah I’m begging you, for just one more try\n\nFear me, in my wretched shallow ways\nNo I won’t let your beauty come closer\nFor now I choose, to block out all the world\nAnd now I choose to block out the world\n\nI wanted to be there, in my own life\nAnd I wanted to see you, one final time\n\nThe game of image, inauthentic to the core\nFantasize a dimension so deceiving\nListen now as I prey, meditations fill the void\nOur echoes define our religion\n\nYou and I, we scramble as we can\nI cannot lead, and you mustn’t follow\nThe answers to our questions are hidden deep within\nHidden in the dark, all the nothingness will consume\n\n‘cause I wanted to be there, in my own life\nAnd I wanted to see you, one final time\n"};var m=function(e){e.options[d]&&(e.options[d]=p),i.a.util.defineReactive(e.options,d,p),e.options.computed=c.computed({$frontmatter:function(){return e.options[d]}},e.options.computed)},y=Object(t.a)({},(function(){var e=this.$createElement,n=this._self._c||e;return n("VueRemarkRoot",[n("ReenchantmentSong",{attrs:{songData:this.$frontmatter}})],1)}),[],!1,null,null,null);"function"==typeof u&&u(y),"function"==typeof m&&m(y);n.default=y.exports},"NKX/":function(e,n,o){"use strict";var t={props:{songData:{type:Object,required:!0}}},s=o("KHd+"),r=Object(s.a)(t,(function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",[e.songData.band?o("div",[e._v("\n    By: "+e._s(e.songData.band)+"\n    "),e.songData.authors?o("span",[e._v("\n      ("+e._s(e.songData.authors.join(", "))+")\n    ")]):e._e()]):o("div",[e.songData.authors?o("span",[e._v("\n      By: "+e._s(e.songData.authors.join(", "))+"\n    ")]):e._e()]),e.songData.explicit?o("div",[o("br"),e._v("\n    ⚠️ Warning: Contains explicit content.\n  ")]):e._e(),e.songData.description?o("div",[o("h2",[e._v("Description")]),o("vue-markdown",[e._v(e._s(e.songData.description))])],1):e._e(),e.songData.recordings?o("div",[o("h2",[e._v("Recordings")]),e._l(e.songData.recordings,(function(n,t){return o("div",{key:t},[n.title?o("h3",[e._v(e._s(t+1)+". "+e._s(n.title))]):e._e(),n.type?o("div",[e._v("Type: "+e._s(n.type))]):e._e(),n.style?o("div",[e._v("Style: "+e._s(n.style))]):e._e(),n.released?o("div",[e._v("Released: "+e._s(n.released))]):e._e(),n.link?o("div",[o("br"),o("audio",{attrs:{controls:"",controlsList:"nodownload"}},[o("source",{attrs:{src:n.link,type:"audio/ogg"}}),o("source",{attrs:{src:n.link,type:"audio/mpeg"}}),e._v("\n        Your browser does not support the audio element.\n        ")])]):e._e()])}))],2):e._e(),e.songData.lyrics?o("div",[o("h2",[e._v("Lyrics")]),o("vue-markdown",[e._v(e._s(e.songData.lyrics))])],1):e._e()])}),[],!1,null,null,null);n.a=r.exports},UQSp:function(e,n,o){"use strict";n.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}}}]);