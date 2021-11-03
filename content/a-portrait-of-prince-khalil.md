---
title: A Portrait of Prince Khalil
band: Reenchantment
authors: ["Victor Fisher"]
explicit: false

description: |
  This is a musical portrait of the honorable Joseph Khalil.

recordings:
  - title: A Portrait of Prince Khalil
    type: Recording
    style: Electronic
    length: "1:42"
    released: "2020-04-17"
    link: https://victorslibrary.s3.amazonaws.com/music/A+Portrait+of+Prince+Khalil/A+Portrait+of+Prince+Khalil.mp3

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
