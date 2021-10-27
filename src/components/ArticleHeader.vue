<template>
  <div>
    <div v-if="articleData.authors">By: {{ articleData.authors }}</div>
    <div v-if="articleData.published">Published: {{ articleData.published }}</div>
    <div v-if="articleData.updated">Updated: {{ articleData.updated }}</div>
  </div>
</template>

<script>
export default{
  props: {
    articleData: {
      type: Object,
      required: true
    },
  }
}
</script>
