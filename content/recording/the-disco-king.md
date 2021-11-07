---
title: "Recording: The Disco King"
authors: ["Victor Fisher"]
explicit: false
type: Multitrack
style: Rock
length: "2:37"
released: "2019-11-09"
link: https://victorslibrary.s3.amazonaws.com/music/The+Disco+King/The+Disco+King.mp3
---

<g-link to="/song/the-disco-king">Song Page</g-link>

## {{ $frontmatter.title }}

By: <g-link to="/band/reenchantment">Reenchantment</g-link> ({{ $frontmatter.authors.join(', ') }})  
Released: {{ formatDate($frontmatter.released) }}  
Type: {{ $frontmatter.type }}  
Explicit: {{$frontmatter.explicit}}

### Audio

<audio controls controlsList="nodownload">
  <source :src="$frontmatter.link" type="audio/mpeg">
Your browser does not support the audio element.
</audio>
