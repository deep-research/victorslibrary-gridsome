---
title: "Song: From Path to Portal"
band: Reenchantment
authors: ["Victor Fisher"]
explicit: false

description: |
  This is a neo-pagan acoustic rock song. It's rather catchy!

lyrics: |
  Trust the earth, and the water
  To heal you deep inside, when you have to say goodbye
  In centuries when we’re forgotten
  They’ll say that we were blind, they’ll say we lost our minds
  They’ll say we lost our minds, even if we try

  Feel the air and the fire
  Awakening your pride, from the ashes of a strength you’d never find
  To all my sisters and brothers
  I think we can survive, I know that we will thrive
  I know we’ll win the fight, if we prepare to die
  We’re prepared to die
---

<g-link to="/band/reenchantment">Band Page</g-link>

## {{ $frontmatter.title }}

By: <g-link to="/band/reenchantment">Reenchantment</g-link> ({{ $frontmatter.authors.join(', ') }})  
Explicit: {{$frontmatter.explicit}}

### Description

<vue-markdown>{{ $frontmatter.description }}</vue-markdown>

### Recordings

1. <g-link to="/recording/from-path-to-portal">From Path to Portal</g-link>

### Lyrics

<vue-markdown>{{ $frontmatter.lyrics }}</vue-markdown>
