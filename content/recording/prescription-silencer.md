---
title: "Recording: Prescription Silencer"
authors: ["Victor Fisher"]
explicit: false
type: Multitrack
style: Hard Rock
length: "3:33"
released:
link: https://victorslibrary.s3.amazonaws.com/music/Prescription+Silencer/Prescription+Silencer.mp3
---

<g-link to="/song/prescription-silencer">Song Page</g-link>

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
