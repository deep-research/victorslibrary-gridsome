---
title: Soul Loss in the Midst of an Endless Winter
band: Reenchantment
authors: ["Victor Fisher"]
explicit: false

description: |
  This is a song that explores the inner workings of twisted mind.

recordings:
  - title: Soul Loss in the Midst of an Endless Winter
    type: Recording
    style: Rock
    length: "6:35"
    released: "2021-03-10"
    link: https://victorslibrary.s3.us-east-2.amazonaws.com/music/Soul+Loss+in+the+Midst+of+an+Endless+Winter/Soul+Loss+in+the+Midst+of+an+Endless+Winter.mp3
  - title: Soul Loss in the Midst of an Endless Winter (Demo)
    type: Demo
    style: Doom Metal
    length: "4:41"
    released: 
    link: https://victorslibrary.s3.amazonaws.com/music/demos/Soul+Loss+in+the+Midst+of+an+Endless+Winter.mp3

lyrics: |
  Hanging 'round when you’re feeling down
  There’s no happiness there to be found
  In your soul

  The point of life isn’t war and strife
  But it always bleeds through to you
  It takes a toll

  Sick of truth when you lost your youth
  You abandon imagination
  And preached the death of all creation

  All is gone no friend to call upon
  This place is a void
  With no salvation
  No

  I’m telling you you must understand
  The cosmic reprimand can take away your promised land
  And no one can take you, by the hand
  To help you understand what you need to find
  To save your mind
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
