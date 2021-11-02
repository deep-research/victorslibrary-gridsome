<template>
  <div>
    <!-- Results Count -->
    <h3>Results: {{filteredData.length}}</h3>

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
       this.filteredData.push(item.node)
    }
    // Sort the Data
    this.filteredData.sort(this.compare);
  }
}
</script>