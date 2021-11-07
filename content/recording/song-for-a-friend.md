---
title: "Recording: Song for a Friend"
authors: ["Victor Fisher"]
explicit: false
type: Multitrack
style: Ballad
length: "4:59"
released: "2021-05-09"
link: https://victorslibrary.s3.us-east-2.amazonaws.com/music/Song+For+A+Friend/Song+For+A+Friend.mp3
---

<g-link to="/song/song-for-a-friend">Song Page</g-link>

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
