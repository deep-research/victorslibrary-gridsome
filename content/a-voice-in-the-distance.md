---
title: A Voice in the Distance
band: Reenchantment
authors: ["Victor Fisher"]
explicit: false

description: |
  This is a song about inspiration and being positive and hope. Ew!

recordings:
  - title: A Voice in the Distance
    type: Recording
    style: Rock
    length: "4:03"
    released: "2019-12-25"
    link: https://victorslibrary.s3.amazonaws.com/music/A+Voice+in+the+Distance/A+Voice+in+the+Distance.mp3

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

By: {{ $frontmatter.band }} ({{ $frontmatter.authors.join(', ') }})  
Explicit: {{$frontmatter.explicit}}

## Description

<vue-markdown>{{ $frontmatter.description }}</vue-markdown>

## Recordings

{{ $frontmatter.recordings }}

## Lyrics

<vue-markdown>{{ $frontmatter.lyrics }}</vue-markdown>
