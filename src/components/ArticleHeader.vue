<template>
  <div>
    <div v-if="articleData.authors">
      By: {{articleData.authors.join(', ')}}
    </div>
    <div v-if="articleData.published">
      Published: {{ formatDate(articleData.published) }}
    </div>
    <div v-if="articleData.updated">
      Updated: {{ formatDate(articleData.updated) }}
    </div>
  </div>
</template>

<script>
import dateMixin from "../mixins/dateMixin.js"

export default{
  props: {
    articleData: {
      type: Object,
      required: true
    }
  },
  mixins: [dateMixin]
}
</script>
