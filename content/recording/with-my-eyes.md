---
title: "Recording: With My Eyes"
authors: ["Victor Fisher"]
explicit: false
type: Multitrack
style: Hard Rock 
length: "5:38"
released:
link: https://victorslibrary.s3.amazonaws.com/music/With+My+Eyes/With+My+Eyes.mp3
---

<g-link to="/song/with-my-eyes">Song Page</g-link>

## {{ $frontmatter.title }}

By: <g-link to="/band/reenchantment">Reenchantment</g-link> ({{ $frontmatter.authors.join(', ') }})  
Type: {{ $frontmatter.type }}  
Explicit: {{$frontmatter.explicit}}

### Audio

<audio controls controlsList="nodownload">
  <source :src="$frontmatter.link" type="audio/mpeg">
Your browser does not support the audio element.
</audio>
