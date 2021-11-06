---
title: With My Eyes
band: Reenchantment
authors: ["Victor Fisher"]
explicit: false

description: |
  This is an emotional song about the <a href="https://en.wikipedia.org/wiki/Occupy_Wall_Street" target="_blank">Occupy Wall Street</a> movement.

recordings:
  - title: With My Eyes
    type: Multitrack  
    style: Hard Rock 
    length: "5:38"
    released: 
    link: https://victorslibrary.s3.amazonaws.com/music/With+My+Eyes/With+My+Eyes.mp3

lyrics: |
  I have seen things with my own eyes
  The perpetrators of which deserve to die
  Your worst enemy will seem so kind
  But say and do anything, now that they
  They’ve sold their minds

  Yeah

  The leader of this dying land, you were all his fans
  Camped after lies he stung your eyes, but still you
  Still you cheered his plans
  One winter day he had his way to lock you
  Lock you all in chains
  How many horrors must there be
  For all you punks to see?

  There is still hope that we will find ourselves a way
  And leave their fear and tyranny exposed
---

<g-link to="/band/reenchantment">Band Page</g-link>

## {{ $frontmatter.title }}

By: <g-link to="/band/reenchantment">Reenchantment</g-link> ({{ $frontmatter.authors.join(', ') }})  
Explicit: {{$frontmatter.explicit}}

### Description

<vue-markdown>{{ $frontmatter.description }}</vue-markdown>

### Recordings

1. <g-link to="/recording/how-enlightened-are-you">How Enlightened Are You?</g-link>

### Lyrics

<vue-markdown>{{ $frontmatter.lyrics }}</vue-markdown>
