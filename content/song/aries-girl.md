---
title: "Song: Aries Girl"
band: Reenchantment
authors: ["Victor Fisher"]
explicit: false

description: |
  This song was inspired by the <a href="https://en.wikipedia.org/wiki/Garden_State_(soundtrack)" target="_blank">Garden State soundtrack</a>, and those times we let a chance to someone love slip away.

lyrics: |
  Hey darlin’ where’d you leave, and why so far away?
  And don’t you realize that I’m beggin’ for you here to stay?
  I know you’ll find what you seek, ya don’t even have to go
  There’s no need to take a single step, I’ll show you by another road

  That afternoon like fog, and almost time to grieve
  One last farewell, hide the tears, and I could barely breathe
  So thanks for all those memories, the beauty’s fadin’ fast
  And if you could feel my pain, you’d see that I won’t last
---

<g-link to="/band/reenchantment">Band Page</g-link>

## {{ $frontmatter.title }}

By: <g-link to="/band/reenchantment">Reenchantment</g-link> ({{ $frontmatter.authors.join(', ') }})

Explicit: {{$frontmatter.explicit}}

### Description

<vue-markdown>{{ $frontmatter.description }}</vue-markdown>

### Recordings

* <g-link to="/recording/aries-girl">Aries Girl</g-link>

### Lyrics

<vue-markdown>{{ $frontmatter.lyrics }}</vue-markdown>
