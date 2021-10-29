<template>
  <div>
    <ol>
      <li v-for="node in filteredData" :key="node.id">
        <g-link :to="node.path">{{ node.title }}</g-link>
      </li>
    </ol>
  </div>
</template>

<static-query>
query {
  pages: allContent (sortBy: "title", order: ASC) {
    edges {
      node {
        id
        title
        path
        type
      }
    }
  }
}
</static-query>

<script>
export default{
  props: {
    category: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      filteredData: []
    }
  },
  mounted() {
    // No Filter
    if (!this.category) {
      for (let item of this.$static.pages.edges) {
        this.filteredData.push(item.node)
      }
    // Pages With No Category
    } else if (this.category == "None") {
      for (let item of this.$static.pages.edges) {
        if (item.node.type == "") {
          this.filteredData.push(item.node)
        }
      }
    // Pages With a Category
    } else {
      for (let item of this.$static.pages.edges) {
        if (item.node.type == this.category) {
          this.filteredData.push(item.node)
        }
      }      
    }

  }
}
</script>
