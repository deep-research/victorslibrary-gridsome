---
title: "Recording: The Groove Gestapo"
authors: ["Victor Fisher"]
explicit: false
type: Multitrack
style: Electronic
length: "2:55"
released:
link: https://victorslibrary.s3.amazonaws.com/music/The+Groove+Gestapo/The+Groove+Gestapo.mp3
---

<g-link to="/song/the-groove-gestapo">Song Page</g-link>

## {{ $frontmatter.title }}

By: <g-link to="/band/reenchantment">Reenchantment</g-link> ({{ $frontmatter.authors.join(', ') }})  
Type: {{ $frontmatter.type }}  
Explicit: {{$frontmatter.explicit}}

### Audio

<audio controls controlsList="nodownload">
  <source :src="$frontmatter.link" type="audio/mpeg">
Your browser does not support the audio element.
</audio>
