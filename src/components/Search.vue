<template>
  <div>
    <!-- Results Count -->
    <h2 v-if="filter !== 'Category'">
      Results: {{filteredData.length}}
    </h2>

    <!-- Sorted Results -->
    <ol>
      <li v-for="node in filteredData" :key="node.id">
        <g-link :to="node.path">{{ node.title }}</g-link>
      </li>
    </ol>
  </div>
</template>

<static-query>
query {
  pages: allContent {
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
    filter: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      filteredData: []
    }
  },
  methods: {
    compare(a, b) {
      let x = a.title.toLowerCase()
      let y = b.title.toLowerCase()

      if ( x < y ){
        return -1;
      }
      if ( x > y ){
        return 1;
      }
      return 0;
    }
  },
  mounted() {
    for (let item of this.$static.pages.edges) {
      // Global Search
      if (!this.filter) {
       this.filteredData.push(item.node)

      // Pages With No Category
      } else if (this.filter == "None" && item.node.type == "") {
        this.filteredData.push(item.node) 

      // Pages With a Category
      } else if (this.filter == item.node.type) {
        this.filteredData.push(item.node)
      }
    }

    // Sort the Data
    this.filteredData.sort(this.compare);
  }
}
</script>
