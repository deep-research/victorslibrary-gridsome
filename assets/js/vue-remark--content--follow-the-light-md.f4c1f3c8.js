(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"NKX/":function(e,t,n){"use strict";var o={props:{songData:{type:Object,required:!0}}},i=n("KHd+"),s=Object(i.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.songData.band?n("div",[e._v("\n    By: "+e._s(e.songData.band)+"\n    "),e.songData.authors?n("span",[e._v("\n      ("+e._s(e.songData.authors.join(", "))+")\n    ")]):e._e()]):n("div",[e.songData.authors?n("span",[e._v("\n      By: "+e._s(e.songData.authors.join(", "))+"\n    ")]):e._e()]),e.songData.explicit?n("div",[n("br"),e._v("\n    ⚠️ Warning: Contains explicit content.\n  ")]):e._e(),e.songData.description?n("div",[n("h2",[e._v("Description")]),n("vue-markdown",[e._v(e._s(e.songData.description))])],1):e._e(),e.songData.recordings?n("div",[n("h2",[e._v("Recordings")]),e._l(e.songData.recordings,(function(t,o){return n("div",{key:o},[t.title?n("h3",[e._v(e._s(o+1)+". "+e._s(t.title))]):e._e(),t.type?n("div",[e._v("Type: "+e._s(t.type))]):e._e(),t.style?n("div",[e._v("Style: "+e._s(t.style))]):e._e(),t.released?n("div",[e._v("Released: "+e._s(t.released))]):e._e(),t.link?n("div",[n("br"),n("audio",{attrs:{controls:"",controlsList:"nodownload"}},[n("source",{attrs:{src:t.link,type:"audio/ogg"}}),n("source",{attrs:{src:t.link,type:"audio/mpeg"}}),e._v("\n        Your browser does not support the audio element.\n        ")])]):e._e()])}))],2):e._e(),e.songData.lyrics?n("div",[n("h2",[e._v("Lyrics")]),n("vue-markdown",[e._v(e._s(e.songData.lyrics))])],1):e._e()])}),[],!1,null,null,null);t.a=s.exports},UQSp:function(e,t,n){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},Wa1g:function(e,t,n){"use strict";n.r(t);var o=n("KHd+"),i=n("NKX/"),s=n("UQSp"),r=n("oCYn");function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}r.a.config.optionMergeStrategies;var l={ReenchantmentSong:i.a,VueRemarkRoot:s.a},c=function(e){var t=e.options.components=e.options.components||{},n=e.options.computed=e.options.computed||{};Object.keys(l).forEach((function(e){"object"===a(l[e])&&"function"==typeof l[e].render||"function"==typeof l[e]&&"function"==typeof l[e].options.render?t[e]=l[e]:n[e]=function(){return l[e]}}))},u=r.a.config.optionMergeStrategies,h="__vueRemarkFrontMatter",d={excerpt:null,title:"Follow the Light",band:"Reenchantment",authors:["Victor Fisher"],explicit:!1,type:"Song",description:"This is the second song that I wrote for my main high school band Shroud of Delirium. It exemplifies our early doom metal sound. The lyrics describes the drive towards individuation that I experienced in my early teenage years.\n",recordings:[{title:"Follow the Light (Copyright Version)",type:"Recording",style:"Doom Metal",length:"10:42",released:"2021-05-03",link:"https://victorslibrary.s3.us-east-2.amazonaws.com/music/Follow+the+Light/Follow+the+Light+(Copyright+Version).mp3"},{title:"Follow the Light (Ambient Version)",type:"Recording",style:"Doom Metal",length:"7:32",released:null,link:"https://victorslibrary.s3.amazonaws.com/music/Follow+the+Light/Follow+the+Light+(Ambient+Version).mp3"},{title:"Follow the Light (High School Version)",type:"Recording",style:"Doom Metal",length:"9:20",released:null,link:"https://victorslibrary.s3.amazonaws.com/music/Follow+the+Light/Follow+the+Light+(High+School+Version).mp3"}],lyrics:"All my life, I follow the light\nHoping it will lead somewhere\nBut sometimes it seems that I have no chance\n‘cause everyone is there to hold me back\n\nDon’t believe in anything\nReligion is just a lie\nEveryone wants something from me\nBut I can only be myself\n\nI don't want your money\nI don't want any fame\nYour values are worthless\nAnd filled with shame\n\nWhat have you done\nEverything is ruined\nIt is the end\nOf all time\n\nI will suffer\nFor eternity\nThe pain's never ending\nSatan laughs at me\n"};var p=function(e){e.options[h]&&(e.options[h]=d),r.a.util.defineReactive(e.options,h,d),e.options.computed=u.computed({$frontmatter:function(){return e.options[h]}},e.options.computed)},m=Object(o.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("VueRemarkRoot",[t("ReenchantmentSong",{attrs:{songData:this.$frontmatter}})],1)}),[],!1,null,null,null);"function"==typeof c&&c(m),"function"==typeof p&&p(m);t.default=m.exports}}]);