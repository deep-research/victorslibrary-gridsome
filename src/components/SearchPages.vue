<template>
  <div>
    <ul>
      <li v-for="edge in $static.pages.edges" :key="edge.node.id">
        <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
      </li>
    </ul>
  </div>
</template>

<static-query>
query {
  pages: allContent (filter: { type: { eq: "Search" }}, sortBy: "title", order: ASC) {
    edges {
      node {
        id
        title
        path
      }
    }
  }
}
</static-query>
