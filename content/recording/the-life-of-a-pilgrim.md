---
title: "Recording: The Life of a Pilgrim"
authors: ["Victor Fisher"]
explicit: false
type: Multitrack
style: Electronic
length: "2:37"
released:
link: https://victorslibrary.s3.amazonaws.com/music/The+Life+of+a+Pilgrim/The+Life+of+a+Pilgrim.mp3
---

<g-link to="/song/the-life-of-a-pilgrim">Song Page</g-link>

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
