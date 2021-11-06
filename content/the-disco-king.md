---
title: The Disco King
band: Reenchantment
authors: ["Victor Fisher"]
explicit: false

description: |
  This is a psychedelic rock jam that exudes pure coolness at every level.

recordings:
  - title: The Disco King
    type: Multitrack  
    style: Rock
    length: "2:37"
    released: "2019-11-09"
    link: https://victorslibrary.s3.amazonaws.com/music/The+Disco+King/The+Disco+King.mp3

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
