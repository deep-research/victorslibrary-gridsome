(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"+BTt":function(e,t,n){"use strict";n.r(t);var o=n("KHd+"),r=n("NKX/"),a=n("UQSp"),s=n("oCYn");function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}s.a.config.optionMergeStrategies;var l={ReenchantmentSong:r.a,VueRemarkRoot:a.a},c=function(e){var t=e.options.components=e.options.components||{},n=e.options.computed=e.options.computed||{};Object.keys(l).forEach((function(e){"object"===i(l[e])&&"function"==typeof l[e].render||"function"==typeof l[e]&&"function"==typeof l[e].options.render?t[e]=l[e]:n[e]=function(){return l[e]}}))},d=s.a.config.optionMergeStrategies,u="__vueRemarkFrontMatter",p={excerpt:null,title:"As the Aged Wanderer Doth Sulk (Slave of the Seas)",band:"Reenchantment",authors:["Victor Fisher"],explicit:!1,type:"Song",description:"This is a highly romanticized doom metal song. They should play this at the opera.\n",recordings:[{title:"As the Aged Wanderer Doth Sulk (Slave of the Seas)",type:"Recording",style:"Doom Metal",length:"6:46",released:null,link:"https://victorslibrary.s3.amazonaws.com/music/As+the+Aged+Wanderer+Doth+Sulk+(Slave+of+the+Seas)/As+the+Aged+Wanderer+Doth+Sulk+(Slave+of+the+Seas).mp3"}],lyrics:"A storm approaches, the clouds are darkened, black castles reign the sky\nThe hour is nearing, all we were fearing, don’t be afraid to die\nNothing familiar, is here for comfort, night and shade collide\nCold thorns are bleeding, me from the inside, how did I lose my life\n\nWhere have we gone now, so far away from, all that I ever tried\nTo hold together, our bond forever\n\nYeah\n\nAnd I beg the heavens for solace\nI cry and weep and pray, heal me\n\nWhat have I done to deserve this fate\n"};var h=function(e){e.options[u]&&(e.options[u]=p),s.a.util.defineReactive(e.options,u,p),e.options.computed=d.computed({$frontmatter:function(){return e.options[u]}},e.options.computed)},f=Object(o.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("VueRemarkRoot",[t("ReenchantmentSong",{attrs:{songData:this.$frontmatter}})],1)}),[],!1,null,null,null);"function"==typeof c&&c(f),"function"==typeof h&&h(f);t.default=f.exports},"NKX/":function(e,t,n){"use strict";var o={props:{songData:{type:Object,required:!0}}},r=n("KHd+"),a=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.songData.band?n("div",[e._v("\n    By: "+e._s(e.songData.band)+"\n    "),e.songData.authors?n("span",[e._v("\n      ("+e._s(e.songData.authors.join(", "))+")\n    ")]):e._e()]):n("div",[e.songData.authors?n("span",[e._v("\n      By: "+e._s(e.songData.authors.join(", "))+"\n    ")]):e._e()]),e.songData.explicit?n("div",[n("br"),e._v("\n    ⚠️ Warning: Contains explicit content.\n  ")]):e._e(),e.songData.description?n("div",[n("h2",[e._v("Description")]),n("vue-markdown",[e._v(e._s(e.songData.description))])],1):e._e(),e.songData.recordings?n("div",[n("h2",[e._v("Recordings")]),e._l(e.songData.recordings,(function(t,o){return n("div",{key:o},[t.title?n("h3",[e._v(e._s(o+1)+". "+e._s(t.title))]):e._e(),t.type?n("div",[e._v("Type: "+e._s(t.type))]):e._e(),t.style?n("div",[e._v("Style: "+e._s(t.style))]):e._e(),t.released?n("div",[e._v("Released: "+e._s(t.released))]):e._e(),t.link?n("div",[n("br"),n("audio",{attrs:{controls:"",controlsList:"nodownload"}},[n("source",{attrs:{src:t.link,type:"audio/ogg"}}),n("source",{attrs:{src:t.link,type:"audio/mpeg"}}),e._v("\n        Your browser does not support the audio element.\n        ")])]):e._e()])}))],2):e._e(),e.songData.lyrics?n("div",[n("h2",[e._v("Lyrics")]),n("vue-markdown",[e._v(e._s(e.songData.lyrics))])],1):e._e()])}),[],!1,null,null,null);t.a=a.exports},UQSp:function(e,t,n){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}}}]);