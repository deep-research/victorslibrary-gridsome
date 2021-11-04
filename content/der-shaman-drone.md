---
title: derShamanDrone
band: Reenchantment
authors: ["Victor Fisher"]
explicit: false

description: |
  This recording is an exploration of the ancient mysteries of tribalism and the shamanic tradition.

recordings:
  - title: derShamanDrone
    type: Multitrack  
    style: Drone
    length: "2:44"
    released: 
    link: https://victorslibrary.s3.amazonaws.com/music/derShamanDrone/derShamanDrone.mp3

lyrics: Instrumental
---

## {{ $frontmatter.title }}

By: <g-link to="/band/reenchantment">Reenchantment</g-link> ({{ $frontmatter.authors.join(', ') }})

Explicit: {{$frontmatter.explicit}}

## Description

<vue-markdown>{{ $frontmatter.description }}</vue-markdown>

## Recordings

{{ $frontmatter.recordings }}

## Lyrics

<vue-markdown>{{ $frontmatter.lyrics }}</vue-markdown>
