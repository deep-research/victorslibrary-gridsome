---
title: Gaze into the Vast Ethers of Perception
band: Reenchantment
authors: ["Victor Fisher"]
explicit: false

description: |
  This song was inspired by an original encounter with that most controversial of plants.

recordings:
  - title: Gaze into the Vast Ethers of Perception (High School Version)
    type: Recording
    style: Doom Metal
    length: "8:33"
    link: https://victorslibrary.s3.amazonaws.com/music/Gaze+into+the+Vast+Ethers+of+Perception/Gaze+into+the+Vast+Ethers+of+Perception+(High+School+Version).mp3

lyrics: |
  I live
  In a world wreathed in fear
  And no one close is near
  To stop the forces
  Of metamorphoses

  Deep inside in your eye I can see
  You are not free in your mind’s penitentiary
  Slowly, the curves of time can grow on me
  It’s the THC, that flows inside of me

  You breathe
  The sights and sounds surrounding
  The fields of our being
  And there is nowhere to be
  Unless your mind you can flee

  It’s the end of all time that cannot be
  Unless the voice of all hell calls to me
  And if I can’t control anything
  Then experience is all there will be

  As I live on, into the years
  And I look up, to the galaxy
  Space never ends, unto eternity
  As does my mind, live on in me
---

## {{ $frontmatter.title }}

By: {{ $frontmatter.band }} ({{ $frontmatter.authors.join(', ') }})  
Explicit: {{$frontmatter.explicit}}

## Description

<vue-markdown>{{ $frontmatter.description }}</vue-markdown>

## Recordings

{{ $frontmatter.recordings }}

## Lyrics

<vue-markdown>{{ $frontmatter.lyrics }}</vue-markdown>
