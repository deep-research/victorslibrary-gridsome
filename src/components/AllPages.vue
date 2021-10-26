<template>
  <div>
    <ul>
      <li v-for="edge in $static.posts.edges" :key="edge.node.id">
        <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
      </li>
    </ul>
  </div>
</template>

<static-query>
query {
  posts: allContent (sortBy: "title", order: ASC) {
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
