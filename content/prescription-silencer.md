---
title: Prescription Silencer
band: Reenchantment
authors: ["Victor Fisher"]
explicit: false

description: |
  I experimented with sound design on this high energy synth rock track.

recordings:
  - title: Prescription Silencer
    type: Recording
    style: Hard Rock
    length: "3:33"
    released: 
    link: https://victorslibrary.s3.amazonaws.com/music/Prescription+Silencer/Prescription+Silencer.mp3

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
