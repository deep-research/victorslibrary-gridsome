---
title: "Recording: Black Bile"
authors: ["Victor Fisher"]
explicit: false
type: Multitrack  
style: Ballad
length: "2:18"
released:
link: https://victorslibrary.s3.amazonaws.com/music/Black+Bile/Black+Bile.mp3
---

<g-link to="/song/black-bile">Song Page</g-link>

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
