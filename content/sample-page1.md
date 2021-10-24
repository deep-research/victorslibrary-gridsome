---
title: Sample Page 1
description: Description from frontmatter to markdown
---

import MyComponent from '~/components/MyComponent.vue'

{{ $frontmatter.description }}

<MyComponent />