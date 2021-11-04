---
title: Sleeper Cell
band: Reenchantment
authors: ["Victor Fisher"]
explicit: false

description: |
  I made this track to try out some new distortion pedals. It has an aggressive sound, and I was able to include a disco sounding electric piano as well!

recordings:
  - title: Sleeper Cell
    type: Recording
    style: Hard Rock
    length: "1:46"
    released: 
    link: https://victorslibrary.s3.us-east-2.amazonaws.com/music/Sleeper+Cell/Sleeper+Cell.mp3

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
