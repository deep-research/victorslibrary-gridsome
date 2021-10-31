<template>
  <Layout>
    <h2>{{ $page.content.title }}</h2>
    <VueRemarkContent />
  </Layout>
</template>

<page-query>
query Content ($id: ID!) {
  content(id: $id) {
    title
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.content.title
    }
  }
}
</script>
