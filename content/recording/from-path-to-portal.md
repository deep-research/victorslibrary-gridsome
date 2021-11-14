---
title: "Recording: From Path to Portal"
authors: ["Victor Fisher"]
explicit: false
type: Demo  
style: Rock
length: "3:09"
released:
link: https://victorslibrary.s3.amazonaws.com/music/demos/From+Path+to+Portal.mp3
---

<g-link to="/song/from-path-to-portal">Song Page</g-link>

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
