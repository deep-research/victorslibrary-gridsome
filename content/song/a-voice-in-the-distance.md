---
title: A Voice in the Distance (Song)
band: Reenchantment
authors: ["Victor Fisher"]
explicit: false

description: |
  This is a song about inspiration and being positive and hope. Ew!

lyrics: |
  It’s been a hard time
  From many years ago
  We’ve lost so much we had
  And hope is hard to show

  I cared about you all
  But my distance feels so great
  I’ll pray to the gods above
  That the hour is not too late

  It’s such a heavy burden
  Living with a soul
  It’s hard to face the truth within
  A self beyond control

  Changing is the finest of
  the arts we have today
  No matter what the lies
  within me have to say

  A voice in the distance
  A voice within
  A voice that is calling
  For you to not give in
---

## {{ $frontmatter.title }}

By: <g-link to="/band/reenchantment">Reenchantment</g-link> ({{ $frontmatter.authors.join(', ') }})

Explicit: {{$frontmatter.explicit}}

## Description

<vue-markdown>{{ $frontmatter.description }}</vue-markdown>

## Recordings

* <g-link to="/recording/a-voice-in-the-distance">A Voice in the Distance</g-link>

## Lyrics

<vue-markdown>{{ $frontmatter.lyrics }}</vue-markdown>