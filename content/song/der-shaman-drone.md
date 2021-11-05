---
title: "Song: derShamanDrone"
band: Reenchantment
authors: ["Victor Fisher"]
explicit: false

description: |
  This recording is an exploration of the ancient mysteries of tribalism and the shamanic tradition.

lyrics: Instrumental
---

<g-link to="/band/reenchantment">Band Page</g-link>

## {{ $frontmatter.title }}

By: <g-link to="/band/reenchantment">Reenchantment</g-link> ({{ $frontmatter.authors.join(', ') }})  
Explicit: {{$frontmatter.explicit}}

## Description

<vue-markdown>{{ $frontmatter.description }}</vue-markdown>

## Recordings

1. <g-link to="/recording/der-shaman-drone">derShamanDrone</g-link>

## Lyrics

<vue-markdown>{{ $frontmatter.lyrics }}</vue-markdown>
