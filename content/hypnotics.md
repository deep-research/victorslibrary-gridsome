---
title: Hypnotics
band: Reenchantment
authors: ["Victor Fisher"]
explicit: false

description: |
  This song is about the managed social decline and mind control techniques that are perpetrated against the general public. It also references the mythology of The Lord Reverend Wizard of Alchemical Despair's basement.

recordings:
  - title: Hypnotics
    type: Demo
    style: Doom Metal
    length: "7:15"
    released: 
    link: https://victorslibrary.s3.amazonaws.com/music/demos/Hypnotics.mp3

lyrics: |
  Screw this world
  It is lost
  Destroyed by hatred
  Trashed with mistrust

  Each man must fight
  On his own
  Without the law
  You are alone

  Ethereal forest
  Enchanted tomb
  Inside my basement
  In cryptic gloom

  Wither shall we wander
  Who will redeem
  After the doom
  Of human dream
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
