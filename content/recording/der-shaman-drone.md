---
title: "Recording: derShamanDrone"
authors: ["Victor Fisher"]
explicit: false
type: Multitrack  
style: Drone
length: "2:44"
released:
link: https://victorslibrary.s3.amazonaws.com/music/derShamanDrone/derShamanDrone.mp3
---

<g-link to="/song/der-shaman-drone">Song Page</g-link>

## {{ $frontmatter.title }}

By: <g-link to="/band/reenchantment">Reenchantment</g-link> ({{ $frontmatter.authors.join(', ') }})  
Type: {{ $frontmatter.type }}  
Explicit: {{$frontmatter.explicit}}

### Audio

<audio controls controlsList="nodownload">
  <source :src="$frontmatter.link" type="audio/mpeg">
Your browser does not support the audio element.
</audio>
