---
title: The Groove Gestapo
band: Reenchantment
authors: ["Victor Fisher"]
explicit: false

description: |
  This song was channeled from a strange dimension where I was a <a href="https://en.wikipedia.org/wiki/Glam_rock" target="_blank">glam rock</a> guitarist during the 1970s.

recordings:
  - title: The Groove Gestapo
    type: Recording
    style: Electronic
    length: "2:55"
    released: 
    link: https://victorslibrary.s3.amazonaws.com/music/The+Groove+Gestapo/The+Groove+Gestapo.mp3

lyrics: |
  Groove Gestapo house raid:
  > This is the Groove Gestapo
  > Open up the door
  > Are you grooving in there?
---

By: {{ $frontmatter.band }} ({{ $frontmatter.authors.join(', ') }})  
Explicit: {{$frontmatter.explicit}}

## Description

<vue-markdown>{{ $frontmatter.description }}</vue-markdown>

## Recordings

{{ $frontmatter.recordings }}

## Lyrics

<vue-markdown>{{ $frontmatter.lyrics }}</vue-markdown>