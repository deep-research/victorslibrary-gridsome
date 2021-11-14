---
title: "Recording: A Voice in the Distance"
authors: ["Victor Fisher"]
explicit: false
type: Multitrack  
style: Rock
length: "4:03"
released: "2019-12-25"
link: https://victorslibrary.s3.amazonaws.com/music/A+Voice+in+the+Distance/A+Voice+in+the+Distance.mp3
---

<g-link to="/song/a-voice-in-the-distance">Song Page</g-link>

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
