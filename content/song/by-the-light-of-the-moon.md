---
title: "Song: By the Light of the Moon"
band: Reenchantment
authors: ["Victor Fisher"]
explicit: false

description: |
  This is a song that was written during a lunar ritual about intuition and depth psychology.

lyrics: |
  By the light of the moon I can see
  Through the dark of the night revealing
  Rising from the underworld
  All the secrets of my being

  And when my nature was hidden
  Because I needed to survive
  I never knew how to come to terms
  With the sadness in my mind

  Power comes from the feeling
  And the feeling from beyond
  The wise are those who follow
  And the foolish those who try

  The path will lead you deeper
  But the crowd will leave you blind
  You have to face the pain and fear
  To leave the past behind
---

<g-link to="/band/reenchantment">Band Page</g-link>

## {{ $frontmatter.title }}

By: <g-link to="/band/reenchantment">Reenchantment</g-link> ({{ $frontmatter.authors.join(', ') }})  
Explicit: {{$frontmatter.explicit}}

### Description

<vue-markdown>{{ $frontmatter.description }}</vue-markdown>

### Recordings

1. <g-link to="/recording/by-the-light-of-the-moon">By the Light of the Moon</g-link>

### Lyrics

<vue-markdown>{{ $frontmatter.lyrics }}</vue-markdown>
