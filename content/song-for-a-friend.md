---
title: Song for a Friend
band: Reenchantment
authors: ["Victor Fisher"]
explicit: false

description: |
  This is a cute song about love, with a touch of darkness.

recordings:
  - title: Song for a Friend
    type: Multitrack  
    style: Ballad
    length: "4:59"
    released: "2021-05-09"
    link: https://victorslibrary.s3.us-east-2.amazonaws.com/music/Song+For+A+Friend/Song+For+A+Friend.mp3

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
