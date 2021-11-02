---
title: Otherworldly Dream Magic
band: Reenchantment
authors: ["Victor Fisher"]
explicit: false

description: |
  This concise atmospheric rock song refers to the way of those who know.

recordings:
  - title: Otherworldly Dream Magic
    type: Recording
    style: Electronic
    length: "0:44"
    link: https://victorslibrary.s3.amazonaws.com/music/Otherworldly+Dream+Magick/Otherworldly+Dream+Magick.mp3

lyrics: |
  Flying toward the realm beyond
  I travel through the dream
  Forging from the sacred soul
  A future that will gleam

  Find us where we wander
  And rise up to the call
  To teach the generations
  That the art will stop the fall
---

By: {{ $frontmatter.band }} ({{ $frontmatter.authors.join(', ') }})  
Explicit: {{$frontmatter.explicit}}

## Description

<vue-markdown>{{ $frontmatter.description }}</vue-markdown>

## Recordings

{{ $frontmatter.recordings }}

## Lyrics

<vue-markdown>{{ $frontmatter.lyrics }}</vue-markdown>
