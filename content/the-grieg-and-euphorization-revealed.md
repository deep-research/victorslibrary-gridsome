---
title: The Grieg and Euphorization Revealed
band: Reenchantment
authors: ["Victor Fisher"]
explicit: false

description: |
  This song depicts the contrast between a feeling of extreme terror and a calm and reflective period that may be experienced in its wake.
  
  It is named after the exquisite composer <a href="https://en.wikipedia.org/wiki/Funeral_March_in_Memory_of_Rikard_Nordraak" target="_blank">Edvard Grieg</a>.

recordings:
  - title: The Grieg and Euphorization Revealed
    type: Recording
    style: Doom Metal
    length: "3:25"
    released: 
    link: https://victorslibrary.s3.amazonaws.com/music/The+Grieg+and+Euphorization+Revealed/The+Grieg+and+Euphorization+Revealed.mp3

lyrics: |
  I hate to see you, looking so bad
  The Guilt upon us now, the worst we've ever had
  All men and creatures, must die in vain today
  You’ve brought upon your soul, a life of pain
---

By: {{ $frontmatter.band }} ({{ $frontmatter.authors.join(', ') }})  
Explicit: {{$frontmatter.explicit}}

## Description

<vue-markdown>{{ $frontmatter.description }}</vue-markdown>

## Recordings

{{ $frontmatter.recordings }}

## Lyrics

<vue-markdown>{{ $frontmatter.lyrics }}</vue-markdown>
