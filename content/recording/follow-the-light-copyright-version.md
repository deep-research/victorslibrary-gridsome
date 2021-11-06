---
title: "Recording: Follow the Light (Copyright Version)"
authors: ["Victor Fisher"]
explicit: false
type: Multitrack  
style: Doom Metal
length: "10:42"
released: "2021-05-03"
link: https://victorslibrary.s3.us-east-2.amazonaws.com/music/Follow+the+Light/Follow+the+Light+(Copyright+Version).mp3
---

<g-link to="/song/follow-the-light">Song Page</g-link>

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
