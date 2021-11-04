---
title: This Wicked Realm
band: Reenchantment
authors: ["Victor Fisher"]
explicit: false

description: |
  The lyrics for this song describe the inability to express a magical experience to other people. And the music was able to beautifully capture my interest in both doom metal and atmospheric rock.

recordings:
  - title: This Wicked Realm
    type: Recording
    style: Doom Metal
    length: "5:55"
    released: 
    link: https://victorslibrary.s3.amazonaws.com/music/This+Wicked+Realm/This+Wicked+Realm.mp3

lyrics: |
  Aya, bring the dawn

  Try to live with the truth that you know, it is all that must be
  Can you cope with the knowledge that you’re the only one to see
  My silence buries you for all eternity
  Why can’t you realize the truth must set you free

  Aya, shall arise

  You’re mine now, yeah

  This wicked realm
  This wicked
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
