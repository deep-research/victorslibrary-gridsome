---
title: "Recording: Distorted Dreams"
authors: ["Victor Fisher"]
explicit: false
type: Demo  
style: Doom Metal
length: "6:40"
released:
link: https://victorslibrary.s3.amazonaws.com/music/demos/Distorted+Dreams.mp3
---

<g-link to="/song/distorted-dreams">Song Page</g-link>

## {{ $frontmatter.title }}

By: <g-link to="/band/reenchantment">Reenchantment</g-link> ({{ $frontmatter.authors.join(', ') }})  
Type: {{ $frontmatter.type }}  
Explicit: {{$frontmatter.explicit}}

### Audio

<audio controls controlsList="nodownload">
  <source :src="$frontmatter.link" type="audio/mpeg">
Your browser does not support the audio element.
</audio>
