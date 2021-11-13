---
title: "Song: The Truth About This World"
band: Reenchantment
authors: ["Victor Fisher"]
explicit: false

description: 
  This contains philosophical musings about the mysteries of the universe.

lyrics: |
  Did the wise men know the truth about this world?
  About this world of ours
  That I find myself within
  About this world of ours
  That I am bound to dwell within

  Is there a place for those who wish to know?
  For those of us who feel the dream
  Or does it lie beyond the grave?
---

<g-link to="/band/reenchantment">Band Page</g-link>

## {{ $frontmatter.title }}

By: <g-link to="/band/reenchantment">Reenchantment</g-link> ({{ $frontmatter.authors.join(', ') }})  
Explicit: {{$frontmatter.explicit}}

### Description

<vue-markdown>{{ $frontmatter.description }}</vue-markdown>

### Recordings

1. <g-link to="/recording/the-truth-about-this-world">The Truth About This World</g-link>

### Lyrics

<vue-markdown>{{ $frontmatter.lyrics }}</vue-markdown>
