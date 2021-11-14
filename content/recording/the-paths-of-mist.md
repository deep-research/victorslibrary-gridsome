---
title: "Recording: The Paths of Mist"
authors: ["Victor Fisher"]
explicit: false
type: Multitrack
style: Doom Metal
length: "5:22"
released:
link: https://victorslibrary.s3.amazonaws.com/music/The+Paths+of+Mist/The+Paths+of+Mist.mp3
---

<g-link to="/song/the-paths-of-mist">Song Page</g-link>

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
