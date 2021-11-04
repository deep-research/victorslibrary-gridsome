---
title: Satanic Drug Users from Outer Space
band: Reenchantment
authors: ["Victor Fisher", "Aaron Schreiber"]
explicit: false

description: |
  This kind of song is the reason why I got into into heavy metal as a teenager.

recordings:
  - title: Satanic Drug Users from Outer Space
    type: Multitrack  
    style: Hard Rock
    length: "2:48"
    released: 
    link: https://victorslibrary.s3.amazonaws.com/music/Satanic+Drug+Users+from+Outer+Space/Satanic+Drug+Users+from+Outer+Space.mp3

lyrics: Satan has the best drugs
---

## {{ $frontmatter.title }}

By: <g-link to="/band/reenchantment">Reenchantment</g-link> ({{ $frontmatter.authors.join(', ') }})

Explicit: {{$frontmatter.explicit}}

## Description

<vue-markdown>{{ $frontmatter.description }}</vue-markdown>

## Recordings

{{ $frontmatter.recordings }}

## Lyrics

<vue-markdown>{{ $frontmatter.lyrics }}</vue-markdown>
