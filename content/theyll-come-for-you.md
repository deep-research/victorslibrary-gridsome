---
title: They’ll Come For You
band: Reenchantment
authors: ["Victor Fisher"]
explicit: false

description: |
  The song discusses the way we are unconsciously shaped by <A href="https://en.wikipedia.org/wiki/Social_conditioning" target="_blank">social conditioning</a>.

  This is one of the best examples of my acoustic rock songwriting. The *Mermaid Version* ended up capturing my sound in the most accurate way, although the last minute of the *Pilgrimage Version* is also very interesting because is revealed how I would sound with a more radio friendly approach.

recordings:
  - title: They’ll Come For You (Mermaid Version)
    type: Recording
    style: Rock
    length: "5:15"
    released: 
    link: https://victorslibrary.s3.amazonaws.com/music/Theyll+Come+For+You/Theyll+Come+For+You+(Mermaid+Version).mp3
  - title: They’ll Come For You (Pilgrimage Version)
    type: Recording
    style: Rock
    length: "5:07"
    released: 
    link: https://victorslibrary.s3.amazonaws.com/music/Theyll+Come+For+You/Theyll+Come+For+You+(Pilgrimage+Version).mp3
  - title: They’ll Come For You (Live at the Sacred Forest)
    type: Live
    style: Rock
    length: "5:18"
    released: 
    link: https://victorslibrary.s3.amazonaws.com/music/Theyll+Come+For+You/Theyll+Come+For+You+(Live+at+the+Sacred+Forest).mp3

lyrics: |
  They’ll come for you when you’re too young
  To think about the world
  When uprooting you from your life
  To teach you what they worship

  Introducing you to judging
  Molding you into their image
  Imprisoning you in your, own mind
  God, how blind

  You know that still there was a time
  Before that thinking was a crime
  Long before you, lost yourself

  Back when you knew how it felt to love
  Back when you knew you had control
  Back when you, could survive

  You’re taught to fear and taught to follow
  Never trusting any other
  'cept the masters that will own you
  Take your grass and rights away too

  And they say there was a time
  When we were free
  But empathy is hard to find

  And today all things are so dark
  That we can’t live with open hearts
  No hope, just misery

  The government will try to set you free
  And manipulate your reality
  Against humanity, it’s a crime
  Forget morality, do your time

  Prepare to fight them everyday
  In fear they’ll run and hide away
  Just eat the blotter, save your mind

  Together we have power to
  Stand up cause you’re a human too
  We’ll rot away, if we don’t try
  Come together, and expose the lie
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
