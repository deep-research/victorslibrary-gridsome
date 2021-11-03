---
title: The Wrath of God
band: Reenchantment
authors: ["Victor Fisher"]
explicit: true

description: |
  This recording describes a terrifying journey through an apocalyptic vision.

recordings:
  - title: The Wrath of God
    type: Recording
    style: Doom Metal
    length: "19:58"
    released: 
    link: https://victorslibrary.s3.amazonaws.com/music/The+Wrath+of+God/The+Wrath+of+God+%7BNihilism+Remix%7D.mp3

lyrics: |
  I see, into infinity
  Cosmic wave distorting all the infamy
  We cannot live, with our past
  Transgress the sacred, no hope will last
  You are alone, so far from home
  Nothing can take you anywhere
  Forget your dreams, although it may seem
  You’ve always been unstoppable

  Iraq war sound sample:
  > S*\*\*, where the f*\*\* was that one?

  Satan lives, Satan, he is my master forever

  This world, it is the real hell
  There never was salvation, as all the good men fell
  War will swallow us all, leading to our demise
  As our terror grows, morals we sacrifice

  I will destroy you, end your living for all time
  Slowly drain the feeling away
  Crush the lives of all that you love

  Desolation vast, surrounding ocean blue
  Coats the sea in terror
  No freedom from, the industries of man
  We create as we destroy

  Hail to the end of all time, hail to the end of all
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
