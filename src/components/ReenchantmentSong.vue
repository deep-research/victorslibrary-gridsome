<template>
  <div>
    <div v-if="songData.band">
      By: {{ songData.band }}
      <span v-if="songData.authors">
        ({{ songData.authors.join(', ') }})
      </span>
    </div>
    <div v-else>
      <span v-if="songData.authors">
        By: {{ songData.authors.join(', ') }}
      </span>     
    </div>

    <div v-if="songData.explicit">
      Explicit: {{songData.explicit}}
    </div>

    <div v-if="songData.description">
      <h2>Description</h2>
      <div>{{ songData.description }}</div>
    </div>

    <div v-if="songData.recordings">
      <h2>Recordings</h2>
      <div>{{ songData.recordings }}</div>
    </div>

    <div v-if="songData.lyrics">
      <h2>Lyrics</h2>
      <div>{{ songData.lyrics }}</div>
    </div>
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
