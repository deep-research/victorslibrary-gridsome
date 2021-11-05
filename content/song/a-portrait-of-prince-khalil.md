---
title: "Song: A Portrait of Prince Khalil"
band: Reenchantment
authors: ["Victor Fisher"]
explicit: false

description: |
  This is a musical portrait of the honorable Joseph Khalil.

lyrics: Instrumental
---

<g-link to="/band/reenchantment">Band Page</g-link>

## {{ $frontmatter.title }}

By: <g-link to="/band/reenchantment">Reenchantment</g-link> ({{ $frontmatter.authors.join(', ') }})  
Explicit: {{$frontmatter.explicit}}

### Description

<vue-markdown>{{ $frontmatter.description }}</vue-markdown>

### Recordings

1. <g-link to="/recording/a-portrait-of-prince-khalil">A Portrait of Prince Khalil</g-link>

### Lyrics

<vue-markdown>{{ $frontmatter.lyrics }}</vue-markdown>
