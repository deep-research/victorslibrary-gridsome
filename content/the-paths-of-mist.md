---
title: The Paths of Mist
band: Reenchantment
authors: ["Victor Fisher"]
explicit: false

description: |
  This atmospheric doom metal song is the earliest one I wrote for my high school band, Shroud of Delirium. The recording is also one of the first ones I made that I still have access to.

  In addition to doom metal, I was heavily influenced by black metal during this period.

recordings:
  - title: The Paths of Mist
    type: Recording
    style: Doom Metal
    length: "5:22"
    released: 
    link: https://victorslibrary.s3.amazonaws.com/music/The+Paths+of+Mist/The+Paths+of+Mist.mp3

lyrics: |
  Wandering on the paths of mist
  I reflect upon my wasted life
  Pondering the mistakes that I made
  Jealous of what could have been

  Each step is closer to my destiny
  The path that is written for us

  I cannot control the future
  For man is nothing
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
