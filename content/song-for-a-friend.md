---
title: Song for a Friend
band: Reenchantment
authors: ["Victor Fisher"]
explicit: false

description: |
  This is a cute song about love, with a touch of darkness.

recordings:
  - title: Song for a Friend
    type: Recording
    style: Ballad
    length: "4:59"
    released: "2021-05-09"
    link: https://victorslibrary.s3.us-east-2.amazonaws.com/music/Song+For+A+Friend/Song+For+A+Friend.mp3

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
