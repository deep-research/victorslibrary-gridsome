---
title: "Recording: Suicidal Shaman"
authors: ["Victor Fisher"]
explicit: false
type: Multitrack
style: Hard Rock
length: "2:37"
link: https://victorslibrary.s3.amazonaws.com/music/Suicidal+Shaman/Suicidal+Shaman.mp3
---

<g-link to="/song/suicidal-shaman">Song Page</g-link>

## {{ $frontmatter.title }}

By: <g-link to="/band/reenchantment">Reenchantment</g-link> ({{ $frontmatter.authors.join(', ') }})   
Type: {{ $frontmatter.type }}  
Explicit: {{$frontmatter.explicit}}

### Audio

<audio controls controlsList="nodownload">
  <source :src="$frontmatter.link" type="audio/mpeg">
Your browser does not support the audio element.
</audio>
