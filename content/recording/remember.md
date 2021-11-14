---
title: "Recording: Remember (High School Version)"
authors: ["Victor Fisher"]
explicit: false
type: Multitrack
style: Rock
length: "9:23"
released:
link: https://victorslibrary.s3.amazonaws.com/music/Remember/Remember+(High+School+Version).mp3
---

<g-link to="/song/remember">Song Page</g-link>

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
