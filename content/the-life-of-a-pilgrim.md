---
title: The Life of a Pilgrim
band: Reenchantment
authors: ["Victor Fisher"]
explicit: false

description: |
  This is an atmospheric rock song about the <a href="https://en.wikipedia.org/wiki/Hero%27s_journey" target="_blank">hero’s journey</a> and <a href="https://en.wikipedia.org/wiki/The_Way_of_a_Pilgrim" target="_blank">The Way of a Pilgrim</a>. Both sources contain fascinating perspectives on the nature of mystical practice.

recordings:
  - title: The Life of a Pilgrim
    type: Multitrack  
    style: Electronic
    length: "2:37"
    released: 
    link: https://victorslibrary.s3.amazonaws.com/music/The+Life+of+a+Pilgrim/The+Life+of+a+Pilgrim.mp3

lyrics: |
  We left down a long road
  That no one else could see
  If feels like its been ages since I’ve
  Known reality

  It wasn’t fun to leave you
  But I had to chase the dream
  The life of a pilgrim
  Is not what it may seem
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
