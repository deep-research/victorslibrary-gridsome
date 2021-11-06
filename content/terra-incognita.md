---
title: Terra Incognita
band: Reenchantment
authors: ["Victor Fisher"]
explicit: false

description: |
  This is an atmospheric rock song that has a nautical feel to it.

recordings:
  - title: Terra Incognita
    type: Multitrack  
    style: Electronic
    length: "1:18"
    released: 
    link: https://victorslibrary.s3.amazonaws.com/music/Terra+Incognita/Terra+Incognita.mp3

lyrics: Instrumental
---

<g-link to="/band/reenchantment">Band Page</g-link>

## {{ $frontmatter.title }}

By: <g-link to="/band/reenchantment">Reenchantment</g-link> ({{ $frontmatter.authors.join(', ') }})  
Explicit: {{$frontmatter.explicit}}

### Description

<vue-markdown>{{ $frontmatter.description }}</vue-markdown>

### Recordings

1. <g-link to="/recording/how-enlightened-are-you">How Enlightened Are You?</g-link>

### Lyrics

<vue-markdown>{{ $frontmatter.lyrics }}</vue-markdown>
