<template>
  <Layout>

    <h2>Old versions of this website:</h2>
    <ul>
      <li>
        <a href="https://strapi.victorslibrary.com/">
          Strapi Version (Stable)
        </a>
      </li>
      <li>
        <a href="https://nuxt.victorslibrary.com/">
          Nuxt Version (Broken)
        </a>
      </li>
    </ul>

    <h2>Sample Pages</h2>
    <div v-for="edge in $page.posts.edges" :key="edge.node.id">
      <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
    </div>
  </Layout>
</template>

<page-query>
query {
  posts: allContent {
    edges {
      node {
        id
        title
        path
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
