---
title: Prescription Silencer
band: Reenchantment
authors: ["Victor Fisher"]
explicit: false

description: |
  I experimented with sound design on this high energy synth rock track.

recordings:
  - title: Prescription Silencer
    type: Multitrack  
    style: Hard Rock
    length: "3:33"
    released: 
    link: https://victorslibrary.s3.amazonaws.com/music/Prescription+Silencer/Prescription+Silencer.mp3

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
