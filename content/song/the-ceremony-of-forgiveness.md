---
title: "Song: The Ceremony of Forgiveness"
band: Reenchantment
authors: ["Victor Fisher"]
explicit: false

description: |
  This song describes the feeling of guilt that accompanies a broken relationship. It is one of the best examples of my atmospheric rock sound.

lyrics: |
  I’ll say I’m sorry
  Though you may not return
  I plead you for forgiveness
  That I may not deserve

  Life can be so tragic
  For those of us who feel
  The pain that’s felt within the heart
  Inside may never heal

  I love you
---

<g-link to="/band/reenchantment">Band Page</g-link>

## {{ $frontmatter.title }}

By: <g-link to="/band/reenchantment">Reenchantment</g-link> ({{ $frontmatter.authors.join(', ') }})  
Explicit: {{$frontmatter.explicit}}

### Description

<vue-markdown>{{ $frontmatter.description }}</vue-markdown>

### Recordings

1. <g-link to="/recording/the-ceremony-of-forgiveness">The Ceremony of Forgiveness</g-link>

### Lyrics

<vue-markdown>{{ $frontmatter.lyrics }}</vue-markdown>
