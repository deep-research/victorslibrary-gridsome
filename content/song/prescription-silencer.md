---
title: "Song: Prescription Silencer"
band: Reenchantment
authors: ["Victor Fisher"]
explicit: false

description: |
  I experimented with sound design on this high energy synth rock track.

lyrics: Instrumental
---

<g-link to="/band/reenchantment">Band Page</g-link>

## {{ $frontmatter.title }}

By: <g-link to="/band/reenchantment">Reenchantment</g-link> ({{ $frontmatter.authors.join(', ') }})  
Explicit: {{$frontmatter.explicit}}

### Description

<vue-markdown>{{ $frontmatter.description }}</vue-markdown>

### Recordings

1. <g-link to="/recording/prescription-silencer">Prescription Silencer</g-link>

### Lyrics

<vue-markdown>{{ $frontmatter.lyrics }}</vue-markdown>
