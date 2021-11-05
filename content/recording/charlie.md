---
title: "Recording: Charlie"
authors: ["Victor Fisher"]
explicit: false
type: Multitrack  
style: Electronic
length: "0:58"
released:
link: https://victorslibrary.s3.amazonaws.com/music/Charlie/Charlie.mp3
---

<g-link to="/song/charlie">Song Page</g-link>

## {{ $frontmatter.title }}

By: <g-link to="/band/reenchantment">Reenchantment</g-link> ({{ $frontmatter.authors.join(', ') }})  
Type: {{ $frontmatter.type }}  
Explicit: {{$frontmatter.explicit}}

### Audio

<audio controls controlsList="nodownload">
  <source :src="$frontmatter.link" type="audio/mpeg">
Your browser does not support the audio element.
</audio>
