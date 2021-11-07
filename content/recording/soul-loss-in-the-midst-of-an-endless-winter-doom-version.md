---
title: "Recording: Soul Loss in the Midst of an Endless Winter (Doom Version)"
authors: ["Victor Fisher"]
explicit: false
type: Multitrack
style: Rock
length: "6:35"
released: "2021-03-10"
link: https://victorslibrary.s3.us-east-2.amazonaws.com/music/Soul+Loss+in+the+Midst+of+an+Endless+Winter/Soul+Loss+in+the+Midst+of+an+Endless+Winter.mp3
---

<g-link to="/song/soul-loss-in-the-midst-of-an-endless-winter">Song Page</g-link>

## {{ $frontmatter.title }}

By: <g-link to="/band/reenchantment">Reenchantment</g-link> ({{ $frontmatter.authors.join(', ') }})  
Released: {{ formatDate($frontmatter.released) }}  
Type: {{ $frontmatter.type }}  
Explicit: {{$frontmatter.explicit}}

### Audio

<audio controls controlsList="nodownload">
  <source :src="$frontmatter.link" type="audio/mpeg">
Your browser does not support the audio element.
</audio>
