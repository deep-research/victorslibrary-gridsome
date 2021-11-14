---
title: "Recording: This Wicked Realm"
authors: ["Victor Fisher"]
explicit: false
type: Multitrack
style: Doom Metal
length: "5:55"
released:
link: https://victorslibrary.s3.amazonaws.com/music/This+Wicked+Realm/This+Wicked+Realm.mp3
---

<g-link to="/song/this-wicked-realm">Song Page</g-link>

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
