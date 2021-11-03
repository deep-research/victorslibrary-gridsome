---
title: Suicidal Shaman
band: Reenchantment
authors: ["Victor Fisher"]
explicit: true

description: |
  This is particularly nihilistic and rage fueled song of mine.

recordings:
  - title: Suicidal Shaman
    type: Recording
    style: Hard Rock
    length: "2:37"
    released: 
    link: https://victorslibrary.s3.amazonaws.com/music/Suicidal+Shaman/Suicidal+Shaman.mp3

lyrics: |
  I am unemployed
  I am f\*\*\*ing sick
  I still live with my parents
  And I don’t give a s\*\*\*

  I am single and lonely
  And I hate this f\*\*\*ing world
  I never thought it would be like this
  And I just can’t forget that girl
  
  Yeah

  I like Eric and Dylan
  ’cause you have raped my f\*\*\*ing soul
  I’m a slave in this hopeless trap
  The lowest ones are in control

  I know I have no future
  This evil system has to die
  Your brightest turn to darkness
  For you must pay for every lie
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
