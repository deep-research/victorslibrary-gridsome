---
title: "Recording: In Vain..."
authors: ["Victor Fisher"]
explicit: false
type: Multitrack
style: Doom Metal
length: "8:27"
released:
link: https://victorslibrary.s3.amazonaws.com/music/In+Vain.../In+Vain....mp3
---

<g-link to="/song/in-vain">Song Page</g-link>

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
