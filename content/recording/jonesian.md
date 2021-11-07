---
title: "Recording: Jonesian"
authors: ["Victor Fisher"]
explicit: false
type: Multitrack
style: Electronic
length: "3:55"
released:
link: https://victorslibrary.s3.amazonaws.com/music/Jonesian/Jonesian.mp3
---

<g-link to="/song/jonesian">Song Page</g-link>

## {{ $frontmatter.title }}

By: <g-link to="/band/reenchantment">Reenchantment</g-link> ({{ $frontmatter.authors.join(', ') }})  
Type: {{ $frontmatter.type }}  
Explicit: {{$frontmatter.explicit}}

### Audio

<audio controls controlsList="nodownload">
  <source :src="$frontmatter.link" type="audio/mpeg">
Your browser does not support the audio element.
</audio>
