---
title: A Plastic Paradise (Recording)
authors: ["Victor Fisher"]
explicit: false
type: Recording
style: Hard Rock
length: "4:54"
released: 
link: https://victorslibrary.s3.amazonaws.com/music/A+Plastic+Paradise/A+Plastic+Paradise.mp3

---

<g-link to="/song/a-plastic-paradise">Song Page</g-link>

## {{ $frontmatter.title }}

By: <g-link to="/band/reenchantment">Reenchantment</g-link> ({{ $frontmatter.authors.join(', ') }})  
Explicit: {{$frontmatter.explicit}}

<audio controls controlsList="nodownload">
  <source :src="$frontmatter.link" type="audio/mpeg">
Your browser does not support the audio element.
</audio>
