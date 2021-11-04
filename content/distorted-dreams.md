---
title: Distorted Dreams
band: Reenchantment
authors: ["Victor Fisher"]
explicit: true

description: |
  This song is about the cosmic struggle that is at play within the depths of the human psyche.

recordings:
  - title: Distorted Dreams
    type: Demo
    style: Doom Metal
    length: "6:54"
    released: 
    link: https://victorslibrary.s3.amazonaws.com/music/demos/Distorted+Dreams.mp3

lyrics: |
  Filter all the darkness
  Through your mind
  Creating the wicked
  They’re trapped in time

  Foreseen is the ending
  Of your being
  Distorting all you feel
  You can’t believe that it’s real

  And struggle unconscious
  To save the world
  While you doubt your existing
  For what you stood

  See you’re blinded by the shadows
  Which haunt the past
  And bargain with the devil but we’ll
  We’ll never last

  Sleep, fall into a distant dream
  Mellow out and forget your form
  The fear you inherited
  From the day you were born

  Just rest, see the pleasure in living now
  Tune out of the controlling crowd
  The ones who think they know
  How it was meant to be

  Suffocate and suffer
  Martyr to the grave
  Omen from another, world
  Binded by the blood, of the sage
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
