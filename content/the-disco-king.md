---
title: The Disco King
band: Reenchantment
authors: ["Victor Fisher"]
explicit: false

description: |
  This is a psychedelic rock jam that exudes pure coolness at every level.

recordings:
  - title: The Disco King
    type: Recording
    style: Rock
    length: "2:37"
    released: "2019-11-09"
    link: https://victorslibrary.s3.amazonaws.com/music/The+Disco+King/The+Disco+King.mp3

lyrics: Instrumental
---

## {{ $frontmatter.title }}

By: {{ $frontmatter.band }} ({{ $frontmatter.authors.join(', ') }})  
Explicit: {{$frontmatter.explicit}}

## Description

<vue-markdown>{{ $frontmatter.description }}</vue-markdown>

## Recordings

{{ $frontmatter.recordings }}

## Lyrics

<vue-markdown>{{ $frontmatter.lyrics }}</vue-markdown>
