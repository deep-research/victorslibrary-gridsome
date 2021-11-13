---
title: "Song: The Invasion of the Telepathic Squirrels"
band: Reenchantment
authors: ["Victor Fisher", "Aaron Schreiber"]
explicit: false

description: |
  I have been preparing for this looming cataclysm for many years.

lyrics: Instrumental
---

<g-link to="/band/reenchantment">Band Page</g-link>

## {{ $frontmatter.title }}

By: <g-link to="/band/reenchantment">Reenchantment</g-link> ({{ $frontmatter.authors.join(', ') }})  
Explicit: {{$frontmatter.explicit}}

### Description

<vue-markdown>{{ $frontmatter.description }}</vue-markdown>

### Recordings

1. <g-link to="/recording/the-invasion-of-the-telepathic-squirrels">The Invasion of the Telepathic Squirrels</g-link>

### Lyrics

<vue-markdown>{{ $frontmatter.lyrics }}</vue-markdown>
