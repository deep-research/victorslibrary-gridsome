---
title: "Recording: Terra Incognita"
authors: ["Victor Fisher"]
explicit: false
type: Multitrack
style: Electronic
length: "1:18"
link: https://victorslibrary.s3.amazonaws.com/music/Terra+Incognita/Terra+Incognita.mp3
---

<g-link to="/song/terra-incognita">Song Page</g-link>

## {{ $frontmatter.title }}

By: <g-link to="/band/reenchantment">Reenchantment</g-link> ({{ $frontmatter.authors.join(', ') }})   
Type: {{ $frontmatter.type }}  
Style: {{ $frontmatter.style }}  
Explicit: {{$frontmatter.explicit}}

### Audio

<audio controls controlsList="nodownload">
  <source :src="$frontmatter.link" type="audio/mpeg">
Your browser does not support the audio element.
</audio>
