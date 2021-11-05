---
title: "Recording: Aries Girl"
authors: ["Victor Fisher"]
explicit: false
type: Multitrack  
style: Electronic
length: "4:09"
released:
link: https://victorslibrary.s3.amazonaws.com/music/Aries+Girl/Aries+Girl.mp3
---

<g-link to="/song/aries-girl">Song Page</g-link>

## {{ $frontmatter.title }}

By: <g-link to="/band/reenchantment">Reenchantment</g-link> ({{ $frontmatter.authors.join(', ') }})  
Type: {{ $frontmatter.type }}  
Explicit: {{$frontmatter.explicit}}

### Audio

<audio controls controlsList="nodownload">
  <source :src="$frontmatter.link" type="audio/mpeg">
Your browser does not support the audio element.
</audio>
