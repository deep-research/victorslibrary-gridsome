---
title: "Recording: The Ritual"
authors: ["Victor Fisher"]
explicit: false
type: Multitrack
style: Doom Metal
length: "9:13"
released:
link: https://victorslibrary.s3.amazonaws.com/music/The+Ritual/The+Ritual.mp3
---

<g-link to="/song/the-ritual">Song Page</g-link>

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
