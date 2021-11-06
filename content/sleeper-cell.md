---
title: Sleeper Cell
band: Reenchantment
authors: ["Victor Fisher"]
explicit: false

description: |
  I made this track to try out some new distortion pedals. It has an aggressive sound, and I was able to include a disco sounding electric piano as well!

recordings:
  - title: Sleeper Cell
    type: Multitrack  
    style: Hard Rock
    length: "1:46"
    released: 
    link: https://victorslibrary.s3.us-east-2.amazonaws.com/music/Sleeper+Cell/Sleeper+Cell.mp3

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
