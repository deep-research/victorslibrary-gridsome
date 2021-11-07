---
title: "Song: Sleeper Cell"
band: Reenchantment
authors: ["Victor Fisher"]
explicit: false

description: |
  I made this track to try out some new distortion pedals. It has an aggressive sound, and I was able to include a disco sounding electric piano as well!

lyrics: Instrumental
---

<g-link to="/band/reenchantment">Band Page</g-link>

## {{ $frontmatter.title }}

By: <g-link to="/band/reenchantment">Reenchantment</g-link> ({{ $frontmatter.authors.join(', ') }})  
Explicit: {{$frontmatter.explicit}}

### Description

<vue-markdown>{{ $frontmatter.description }}</vue-markdown>

### Recordings

1. <g-link to="/recording/sleeper-cell">Sleeper Cell</g-link>

### Lyrics

<vue-markdown>{{ $frontmatter.lyrics }}</vue-markdown>
