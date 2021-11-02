---
title: derShamanDrone
band: Reenchantment
authors: ["Victor Fisher"]
explicit: false

description: |
  This recording is an exploration of the ancient mysteries of tribalism and the shamanic tradition.

recordings:
  - title: derShamanDrone
    type: Recording
    style: Drone
    length: "2:44"
    released: 
    link: https://victorslibrary.s3.amazonaws.com/music/derShamanDrone/derShamanDrone.mp3

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
