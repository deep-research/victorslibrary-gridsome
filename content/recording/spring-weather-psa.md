---
title: "Recording: Spring Weather PSA"
authors: ["Victor Fisher"]
explicit: false
type: Multitrack
style: Electronic
length: "0:41"
link: https://victorslibrary.s3.amazonaws.com/music/Spring+Weather+PSA/Spring+Weather+PSA.mp3
---

<g-link to="/song/spring-weather-psa">Song Page</g-link>

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
