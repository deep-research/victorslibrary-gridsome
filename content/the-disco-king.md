---
title: The Disco King
band: Reenchantment
authors: ["Victor Fisher"]
explicit: false

description: This is a psychedelic rock jam that exudes pure coolness at every level.

recordings:
  - title: The Disco King
    type: Recording
    style: Rock
    length: "2:37"
    released: November 9 2019
    link: https://victorslibrary.s3.amazonaws.com/music/The+Disco+King/The+Disco+King.mp3

lyrics: Instrumental
---

By: {{ $frontmatter.band }} ({{ $frontmatter.authors }})  
Explicit: {{$frontmatter.explicit}}

## Description

{{ $frontmatter.description }}

## Recordings

{{ $frontmatter.recordings }}

## Lyrics

{{ $frontmatter.lyrics }}
