---
title: Drawing Down the Moon (The Art of the Cunning)
band: Reenchantment
authors: ["Victor Fisher"]
explicit: false

description: |
  With this soundscape, I took a journey into the secrets of witchcraft. It was recorded with the bassoon and the tin whistle, along with various synthesized tones.

recordings:
  - title: Drawing Down the Moon (The Art of the Cunning)
    type: Recording
    style: Electronic
    length: "1:48"
    released: 
    link: https://victorslibrary.s3.amazonaws.com/music/Drawing+Down+the+Moon+(The+Art+of+the+Cunning)/Drawing+Down+the+Moon+(The+Art+of+the+Cunning).mp3

lyrics: Instrumental
---

By: {{ $frontmatter.band }} ({{ $frontmatter.authors.join(', ') }})  
Explicit: {{$frontmatter.explicit}}

## Description

<vue-markdown>{{ $frontmatter.description }}</vue-markdown>

## Recordings

{{ $frontmatter.recordings }}

## Lyrics

<vue-markdown>{{ $frontmatter.lyrics }}</vue-markdown>
