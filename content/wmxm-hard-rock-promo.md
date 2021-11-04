---
title: WMXM Hard Rock Promo
band: Reenchantment
authors: ["Victor Fisher"]
explicit: false

description: |
  I used to open my <a href="http://wmxm.radioactivity.fm/playlist.html?djoid=5590" target="_blank">show</a> on <a href="https://wmxm.org/" target="_blank">college radio</a> with this recording as the introduction.

recordings:
  - title: WMXM Hard Rock Promo
    type: Recording
    style: Hard Rock
    length: "0:50"
    released: 
    link: https://victorslibrary.s3.amazonaws.com/music/WMXM+Hard+Rock+Promo/WMXM+Hard+Rock+Promo.mp3

lyrics: You’re listening to WMXM 88.9 FM
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
