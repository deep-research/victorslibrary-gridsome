---
title: Trip-tamine
band: Reenchantment
authors: ["Victor Fisher", "Dr. Timothy Leary"]
explicit: false

description: |
  This is a psychedelic soundtrack for an epic video by Dr. Timothy Leary.

  Dr. Timothy Leary:
  > Socrates said know thyself

recordings:
  - title: Trip-tamine
    type: Video
    style: Electronic
    length: "2:43"
    released: 
    link: https://victorslibrary.s3.amazonaws.com/music/Trip-tamine/Trip-tamine.mp4

lyrics: |
  Dr. Timothy Leary:
  > They came to Socrates and said
  > Stop saying that Socrates
  > You’re corrupting the mind of youth

  > There is no self
  > There is no knowledge
  > Obey
  > Believe

  > Socrates would not be stopped
  > He said know thyself
  > Operate your brain
---

By: {{ $frontmatter.band }} ({{ $frontmatter.authors.join(', ') }})  
Explicit: {{$frontmatter.explicit}}

## Description

<vue-markdown>{{ $frontmatter.description }}</vue-markdown>

## Recordings

{{ $frontmatter.recordings }}

## Lyrics

<vue-markdown>{{ $frontmatter.lyrics }}</vue-markdown>
