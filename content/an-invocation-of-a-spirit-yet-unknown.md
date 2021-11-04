---
title: An Invocation of a Spirit Yet Unknown
band: Reenchantment
authors: ["Victor Fisher"]
explicit: false

description: |
  This is an ode to the spirits of loneliness.

recordings:
  - title: An Invocation of a Spirit Yet Unknown
    type: Recording
    style: Rock
    length: "3:17"
    released: 
    link: https://victorslibrary.s3.amazonaws.com/music/An+Invocation+of+a+Spirit+Yet+Unknown/An+Invocation+of+a+Spirit+Yet+Unknown+(Heavy+Version).mp3

lyrics: |
  One lonely night, I think you know how it feels, when the dark clouds start descending
  I went outside to greet the earth, and the sky which has no ending
  Though there is power in nature, still the void inside can grow
  There is no happiness in the wilderness, when it leaves you on your own

  So I invoked a spirit, a spirit that’s unknown
  And no one known what chaos, now has an earthly home
  So light a black candle to Eris, and pray that you’ll be fine
  And prey you’ll never be in the company of a tortured soul like mine

  Terence McKenna:
  > The cost of sanity in this society is a certain level of alienation
  >
  > If you don’t have a plan, you become a part of somebody else’s plan
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
