---
title: What For?
band: Reenchantment
authors: ["Victor Fisher"]
explicit: false

description: |
  This song was recorded back in the era when Victor was interested in the art of the <a href="https://en.wikipedia.org/wiki/Death_growl" target="_blank">death growl</a>.
  
  Black metal bands such as Darkthrone were a major inspiration.

recordings:
  - title: What For?
    type: Recording
    style: Hard Rock
    length: "0:55"
    released: 
    link: https://victorslibrary.s3.amazonaws.com/music/What+For/What+For.mp3

lyrics: |
    War

    Why did they send you here?
    To fight these so called enemies?
    I will suffer drenched in blood
    Is this worth the glory for me?

    There is no point to war
    Dodging bullets annihilate
    We’re told they must be destroyed
    I still don’t know what for
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
