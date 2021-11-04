---
title: Disoriented By the Forest Dark (Far From Help)
band: Reenchantment
authors: ["Victor Fisher"]
explicit: false

description: |
  This song represents the outcry of a wretched soul.

recordings:
  - title: Disoriented By the Forest Dark (Far From Help)
    type: Demo
    style: Rock
    length: "5:35"
    released: 
    link: https://victorslibrary.s3.us-east-2.amazonaws.com/music/demos/Disoriented+By+the+Forest+Dark+(Far+From+Help).mp3

lyrics: |
  Hear me now, I am calling out to you
  Just begging for someone to listen
  We all survive, so alone in this world
  Through all the struggles and fear none shall reach me

  But I’ve gone above, the cold ways of my past
  All the progress just leads to seclusion
  Now I see the demons, as they dance before my eyes
  And I’m begging you, for just one more try
  Yeah I’m begging you, for just one more try

  Fear me, in my wretched shallow ways
  No I won’t let your beauty come closer
  For now I choose, to block out all the world
  And now I choose to block out the world

  I wanted to be there, in my own life
  And I wanted to see you, one final time

  The game of image, inauthentic to the core
  Fantasize a dimension so deceiving
  Listen now as I prey, meditations fill the void
  Our echoes define our religion

  You and I, we scramble as we can
  I cannot lead, and you mustn’t follow
  The answers to our questions are hidden deep within
  Hidden in the dark, all the nothingness will consume

  ‘cause I wanted to be there, in my own life
  And I wanted to see you, one final time
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
