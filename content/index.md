---
title: Home
authors: ["Victor Fisher"]
updated: "2021-10-27"
type: Page
---

import GlobalSearch from '~/components/GlobalSearch.vue'
import MusicSearch from '~/components/MusicSearch.vue'
import ArticleSearch from '~/components/ArticleSearch.vue'
import PageSearch from '~/components/PageSearch.vue'

This website is currently under construction.<br />
<g-link to="/versions">Older Versions</g-link>

## Page Search
<PageSearch />

## Article Search
<ArticleSearch />

## Music Search
<MusicSearch />

## Global Search
<GlobalSearch :searchType="Song" />
