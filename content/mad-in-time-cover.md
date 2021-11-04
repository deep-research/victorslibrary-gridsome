---
title: Mad in Time (Cover)
band: Reenchantment
authors: ["Victor Fisher"]
explicit: false

description: |
  This is my version of a folk rock song by <a href="https://soundcloud.com/user-14069985/mad-in-time" target="_blank">Olivia Wallace</a>.

recordings:
  - title: Mad in Time (Cover)
    type: Demo
    style: Rock
    length: "2:28"
    released: 
    link: https://victorslibrary.s3.amazonaws.com/music/demos/Mad+in+Time.mp3

lyrics: |
  Mad in time
  Wasn’t right
  Right in line
  But thinking fine

  Thinking fine
  Dying divine
  Mad in time
  But thinking fine

  Magic sigh
  Nothing’s mine
  Drinking wine
  A witches bride

  Thinking fine
  Dying divine
  Mad in time
  But thinking fine

  Slowing time
  So far behind
  Friends in mind
  But then it’s a lie

  Thinking fine
  Dying divine
  Mad in time
  But thinking fine
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
