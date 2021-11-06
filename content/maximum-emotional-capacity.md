---
title: Maximum Emotional Capacity
band: Reenchantment
authors: ["Victor Fisher"]
explicit: false

description: |
  This is sad song about the feeling of longing for love.

recordings:
  - title: Maximum Emotional Capacity
    type: Draft
    style: Rock
    length: "3:38"
    released: 
    link: https://victorslibrary.s3.us-east-2.amazonaws.com/music/demos/Maximum+Emotional+Capacity.mp3

lyrics: |
  I cannot continue on without you
  Though I many not even know, who you are
  The void forms in an empty place, through the heart
  And I can’t even start to tell you how it feels

  I were lost so far away, looking through the dark
  That which unspeakable, may not be found
  I’ll wonder anyway, for you and me
  Someday I pray that you will see
  And one day I pray that you will be there with me
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
