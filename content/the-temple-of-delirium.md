---
title: The Temple of Delirium
band: Reenchantment
authors: ["Victor Fisher"]
explicit: false

description: |
  This song is a musical depiction of the dark side within us all.

  It is the official anthem of the subversive cult that is known as The Shadow Work Society.

recordings:
  - title: The Temple of Delirium
    type: Recording
    style: Doom Metal
    length: "3:54"
    released: 
    link: https://victorslibrary.s3.amazonaws.com/music/The+Temple+of+Delirium/The+Temple+of+Delirium.mp3

lyrics: |
  I met the void inside me
  I vow to never heal
  I haven’t found a way to hide
  That the sages can reveal

  We worship in the dead of night
  We see through all your lies
  We hold allegiance to the dark
  Our final sacrifice

  You have to suffer on the path
  So many go insane
  But in the quest for power
  Just the chosen will remain

  Come worship with us in the night
  Together we shall rise
  Lets hold allegiance to the dark
  An eternal sacrifice

  666

  From *The Satanic Bible* by Anton LaVey:
  > Called the black pope by many of his followers
  > Anton LaVey began the road to the high priesthood of the Church of Satan when he was only 16 years old
  > And an organ player in a carnival
---

By: {{ $frontmatter.band }} ({{ $frontmatter.authors.join(', ') }})  
Explicit: {{$frontmatter.explicit}}

## Description

<vue-markdown>{{ $frontmatter.description }}</vue-markdown>

## Recordings

{{ $frontmatter.recordings }}

## Lyrics

<vue-markdown>{{ $frontmatter.lyrics }}</vue-markdown>
