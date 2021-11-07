---
title: "Recording: Mad in Time (Cover)"
authors: ["Victor Fisher"]
explicit: false
type: Demo
style: Rock
length: "2:28"
released:
link: https://victorslibrary.s3.amazonaws.com/music/demos/Mad+in+Time.mp3
---

<g-link to="/song/mad-in-time-cover">Song Page</g-link>

## {{ $frontmatter.title }}

By: <g-link to="/band/reenchantment">Reenchantment</g-link> ({{ $frontmatter.authors.join(', ') }})  
Type: {{ $frontmatter.type }}  
Explicit: {{$frontmatter.explicit}}

### Audio

<audio controls controlsList="nodownload">
  <source :src="$frontmatter.link" type="audio/mpeg">
Your browser does not support the audio element.
</audio>
