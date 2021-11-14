---
title: "Recording: What For?"
authors: ["Victor Fisher"]
explicit: false
type: Multitrack
style: Hard Rock
length: "0:55"
released:
link: https://victorslibrary.s3.amazonaws.com/music/What+For/What+For.mp3
---

<g-link to="/song/what-for">Song Page</g-link>

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
