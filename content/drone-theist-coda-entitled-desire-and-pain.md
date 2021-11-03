---
title: DroneTheist [Coda entitled Desire and Pain]
band: Reenchantment
authors: ["Victor Fisher"]
explicit: false

description: |
  This song is a reflection on the Jungian shadow, and the terrifying realms of nihilism.

recordings:
  - title: DroneTheist [Coda entitled Desire and Pain]
    type: Recording
    style: Drone
    length: "15:16"
    released: 
    link: https://victorslibrary.s3.amazonaws.com/music/DroneTheist+%5BCoda+entitled+Desire+and+Pain%5D/DroneTheist+%5BCoda+entitled+Desire+and+Pain%5D.mp3

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
