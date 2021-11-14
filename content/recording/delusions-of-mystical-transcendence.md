---
title: "Recording: Delusions of Mystical Transcendence"
authors: ["Victor Fisher"]
explicit: false
type: Demo  
style: Doom Metal
length: "5:29"
released:
link: https://victorslibrary.s3.amazonaws.com/music/demos/Delusions+of+Mystical+Transcendence.mp3
---

<g-link to="/song/delusions-of-mystical-transcendence">Song Page</g-link>

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

