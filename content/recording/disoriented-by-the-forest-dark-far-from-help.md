---
title: "Recording: Disoriented By the Forest Dark (Far From Help)"
authors: ["Victor Fisher"]
explicit: false
type: Demo  
style: Rock
length: "5:35"
released:
link: https://victorslibrary.s3.us-east-2.amazonaws.com/music/demos/Disoriented+By+the+Forest+Dark+(Far+From+Help).mp3
---

<g-link to="/song/disoriented-by-the-forest-dark-far-from-help">Song Page</g-link>

## {{ $frontmatter.title }}

By: <g-link to="/band/reenchantment">Reenchantment</g-link> ({{ $frontmatter.authors.join(', ') }})  
Type: {{ $frontmatter.type }}  
Explicit: {{$frontmatter.explicit}}

### Audio

<audio controls controlsList="nodownload">
  <source :src="$frontmatter.link" type="audio/mpeg">
Your browser does not support the audio element.
</audio>
