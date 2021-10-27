<template>
  <div>
    <div>By: {{ songData.band }} ({{ songData.authors }})</div>  
    <div>Explicit: {{songData.explicit}}</div>

    <h2>Description</h2>
    <div>{{ songData.description }}</div>

    <h2>Recordings</h2>
    <div>{{ songData.recordings }}</div>

    <h2>Lyrics</h2>
    <div>{{ songData.lyrics }}</div>
  </div>
</template>

<script>
export default{
  props: {
    songData: {
      type: Object,
      required: true
    }
  }
}
</script>
