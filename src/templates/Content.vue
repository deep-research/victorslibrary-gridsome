<template>
  <Layout>
    <h1>{{ $page.content.title }}</h1>
    <VueRemarkContent />
  </Layout>
</template>

<!-- Front-matter fields can be queried from GraphQL layer -->
<page-query>
query Content ($id: ID!) {
  content(id: $id) {
    title
  }
}
</page-query>
