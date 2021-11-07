---
title: "Song: Song for a Friend"
band: Reenchantment
authors: ["Victor Fisher"]
explicit: false

description: |
  This is a cute song about love, with a touch of darkness.

lyrics: Instrumental
---

<g-link to="/band/reenchantment">Band Page</g-link>

## {{ $frontmatter.title }}

By: <g-link to="/band/reenchantment">Reenchantment</g-link> ({{ $frontmatter.authors.join(', ') }})  
Explicit: {{$frontmatter.explicit}}

### Description

<vue-markdown>{{ $frontmatter.description }}</vue-markdown>

### Recordings

1. <g-link to="/recording/song-for-a-friend">Song for a Friend</g-link>

### Lyrics

<vue-markdown>{{ $frontmatter.lyrics }}</vue-markdown>
