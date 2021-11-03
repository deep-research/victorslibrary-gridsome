---
title: Jonesian
band: Reenchantment
authors: ["Victor Fisher"]
explicit: false

description: |
  This rap song was a protest against the attempt to control my creative process through the genre system.

recordings:
  - title: Jonesian
    type: Recording
    style: Electronic
    length: "3:55"
    released: 
    link: https://victorslibrary.s3.amazonaws.com/music/Jonesian/Jonesian.mp3

lyrics: |
  What is?

  Times are lookin’ tough, you gotta stop, take a long had look upon yourself
  ’cause you’ve been had by the powers that be, and think that only God will set you free
  So stop reading Alex Jones all night, and take a look outside your window at the ground
  And realize that your demise ignores that chances there that will be found

  Now all the rockers and the fans of rap, we can unite around a purpose, common goals
  We must incinerate those wicked ones, who plan a world that is boring with no soul
  They feed those lies to us, that compromise is a productive way to live
  Why can’t they understand that we’ve already given them all we’ve to give

  How could it be our identities, would be considered as a threat to common good
  How insecure of your personal life must you be to make the theory they would
  I cannot understand this plea, to rid the world of all of its variety
  Stop thinking that we live our lives, comparing every little choice to others’ voice

  Now dance

  Female Voice:
  > Oh yeah
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
