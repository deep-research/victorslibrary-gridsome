(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{"7GA/":function(t,n,e){"use strict";e("rB9j"),e("EnZy"),e("DQNa");var o=e("sWYD");n.a={methods:{formatDate:function(t){var n=t.split("-"),e=new Date(n[0],n[1]-1,n[2]);return Object(o.a)(e,"MM/dd/yyy")}}}},Dz4i:function(t,n,e){"use strict";e.r(n);var o=e("KHd+"),i=e("Kglc"),a=e("UQSp"),s=e("oCYn");function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}s.a.config.optionMergeStrategies;var c={Song:i.a,VueRemarkRoot:a.a},p=function(t){var n=t.options.components=t.options.components||{},e=t.options.computed=t.options.computed||{};Object.keys(c).forEach((function(t){"object"===r(c[t])&&"function"==typeof c[t].render||"function"==typeof c[t]&&"function"==typeof c[t].options.render?n[t]=c[t]:e[t]=function(){return c[t]}}))},u=s.a.config.optionMergeStrategies,d="__vueRemarkFrontMatter",l={excerpt:null,title:"Trip-tamine",band:"Reenchantment",authors:["Victor Fisher","Dr. Timothy Leary"],explicit:!1,type:"Song",description:"This is a psychedelic soundtrack for an epic video by Dr. Timothy Leary.\n\nDr. Timothy Leary:\n> Socrates said know thyself\n",recordings:[{title:"Trip-tamine",type:"Video",style:"Electronic",length:"2:43",released:null,link:"https://victorslibrary.s3.amazonaws.com/music/Trip-tamine/Trip-tamine.mp4"}],lyrics:"Dr. Timothy Leary:\n> They came to Socrates and said\n> Stop saying that Socrates\n> You’re corrupting the mind of youth\n\n> There is no self\n> There is no knowledge\n> Obey\n> Believe\n\n> Socrates would not be stopped\n> He said know thyself\n> Operate your brain\n"};var y=function(t){t.options[d]&&(t.options[d]=l),s.a.util.defineReactive(t.options,d,l),t.options.computed=u.computed({$frontmatter:function(){return t.options[d]}},t.options.computed)},_=Object(o.a)({},(function(){var t=this.$createElement,n=this._self._c||t;return n("VueRemarkRoot",[n("Song",{attrs:{songData:this.$frontmatter}})],1)}),[],!1,null,null,null);"function"==typeof p&&p(_),"function"==typeof y&&y(_);n.default=_.exports},Kglc:function(t,n,e){"use strict";var o=e("7GA/"),i={props:{songData:{type:Object,required:!0}},mixins:[o.a]},a=e("KHd+"),s=Object(a.a)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t.songData.band?e("div",[t._v("\n    By: "+t._s(t.songData.band)+"\n    "),t.songData.authors?e("span",[t._v("\n      ("+t._s(t.songData.authors.join(", "))+")\n    ")]):t._e()]):e("div",[t.songData.authors?e("span",[t._v("\n      By: "+t._s(t.songData.authors.join(", "))+"\n    ")]):t._e()]),t.songData.type?e("div",[t._v("\n    Type: "),e("g-link",{attrs:{to:"/songs"}},[t._v("Song")])],1):t._e(),t.songData.published?e("div",[t._v("\n    Published: "+t._s(t.formatDate(t.songData.published))+"\n  ")]):t._e(),t.songData.updated?e("div",[t._v("\n    Updated: "+t._s(t.formatDate(t.songData.updated))+"\n  ")]):t._e(),t.songData.explicit?e("div",[e("br"),t._v("\n    ⚠️ Warning: Contains explicit content.\n  ")]):t._e(),t.songData.description?e("div",[e("h3",[t._v("Description")]),e("vue-markdown",[t._v(t._s(t.songData.description))])],1):t._e(),t.songData.recordings?e("div",[e("h3",[t._v("Recordings")]),t._l(t.songData.recordings,(function(n,o){return e("div",{key:o},[n.title?e("h4",[t._v(t._s(o+1)+". "+t._s(n.title))]):t._e(),n.type?e("div",[t._v("Type: "+t._s(n.type))]):t._e(),n.style?e("div",[t._v("Style: "+t._s(n.style))]):t._e(),n.released?e("div",[t._v("Released: "+t._s(t.formatDate(n.released)))]):t._e(),n.link?e("div",[e("br"),e("audio",{attrs:{controls:"",controlsList:"nodownload"}},[e("source",{attrs:{src:n.link,type:"audio/ogg"}}),e("source",{attrs:{src:n.link,type:"audio/mpeg"}}),t._v("\n        Your browser does not support the audio element.\n        ")])]):t._e()])}))],2):t._e(),t.songData.lyrics?e("div",[e("h3",[t._v("Lyrics")]),e("vue-markdown",[t._v(t._s(t.songData.lyrics))])],1):t._e()])}),[],!1,null,null,null);n.a=s.exports}}]);