---
title: "Recording: Pure Misery"
authors: ["Victor Fisher"]
explicit: false
type: Demo
style: Rock
length: "6:42"
released:
link: https://victorslibrary.s3.amazonaws.com/music/demos/Pure+Misery.mp3
---

<g-link to="/song/pure-misery">Song Page</g-link>

## {{ $frontmatter.title }}

By: <g-link to="/band/reenchantment">Reenchantment</g-link> ({{ $frontmatter.authors.join(', ') }})  
Type: {{ $frontmatter.type }}  
Explicit: {{$frontmatter.explicit}}

### Audio

<audio controls controlsList="nodownload">
  <source :src="$frontmatter.link" type="audio/mpeg">
Your browser does not support the audio element.
</audio>
