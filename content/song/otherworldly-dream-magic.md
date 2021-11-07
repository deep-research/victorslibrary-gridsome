---
title: "Song: Otherworldly Dream Magic"
band: Reenchantment
authors: ["Victor Fisher"]
explicit: false

description: |
  This concise atmospheric rock song refers to the way of those who know.

lyrics: |
  Flying toward the realm beyond
  I travel through the dream
  Forging from the sacred soul
  A future that will gleam

  Find us where we wander
  And rise up to the call
  To teach the generations
  That the art will stop the fall
---

<g-link to="/band/reenchantment">Band Page</g-link>

## {{ $frontmatter.title }}

By: <g-link to="/band/reenchantment">Reenchantment</g-link> ({{ $frontmatter.authors.join(', ') }})  
Explicit: {{$frontmatter.explicit}}

### Description

<vue-markdown>{{ $frontmatter.description }}</vue-markdown>

### Recordings

1. <g-link to="/recording/otherworldly-dream-magic">Otherworldly Dream Magic</g-link>

### Lyrics

<vue-markdown>{{ $frontmatter.lyrics }}</vue-markdown>
