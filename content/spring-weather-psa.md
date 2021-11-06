---
title: Spring Weather PSA
band: Reenchantment
authors: ["Victor Fisher"]
explicit: false

description: |
  I was required to play public service announcements on my college radio show, which was called *Reverend Radio*. After getting sick of them, I decided to make one of my own. It ended up playing the automation system for many months.
  
  <a href="https://wmxm.org/" target="_blank">WMXM 88.9 FM - Lake Forest College Radio</a>


recordings:
  - title: Spring Weather PSA
    type: Multitrack
    style: Electronic
    length: "0:41"
    released: 
    link: https://victorslibrary.s3.amazonaws.com/music/Spring+Weather+PSA/Spring+Weather+PSA.mp3

lyrics: |
  Hello, I’m The Reverend of Despair and you’re listening to WMXM 88.9 FM, Lake Forest College Radio

  Spring is just around the corner so get outside, have a breath of fresh air, put on some Rollerblades

  You’ll have a great time, I promise

  I mean what else are you gonna do, be on your computer all day?

  Take a break from studying, and just enjoy the nice weather

  *This has been a public service announcement from The Reverend of Despair*
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
