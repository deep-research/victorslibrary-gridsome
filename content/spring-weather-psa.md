---
title: Spring Weather PSA
band: Reenchantment
authors: ["Victor Fisher"]
explicit: false

description: |
  I was required to play public service announcements on my college radio show, which was called *Reverend Radio*. After getting sick of them, I decided to make one of my own. It ended up playing the automation system for many months.
  
  <a href="https://wmxm.org/" target="_blank">WMXM 88.9 FM - Lake Forest College Radio</a>


# recordings:
#   - title: 
#     type: 
#     style: 
#     length: 
#     released: 
#     link: 

lyrics: |
  Hello, I’m The Reverend of Despair and you’re listening to WMXM 88.9 FM, Lake Forest College Radio

  Spring is just around the corner so get outside, have a breath of fresh air, put on some Rollerblades

  You’ll have a great time, I promise

  I mean what else are you gonna do, be on your computer all day?

  Take a break from studying, and just enjoy the nice weather

  *This has been a public service announcement from The Reverend of Despair*
---

By: {{ $frontmatter.band }} ({{ $frontmatter.authors.join(', ') }})  
Explicit: {{$frontmatter.explicit}}

## Description

<vue-markdown>{{ $frontmatter.description }}</vue-markdown>

## Recordings

{{ $frontmatter.recordings }}

## Lyrics

<vue-markdown>{{ $frontmatter.lyrics }}</vue-markdown>