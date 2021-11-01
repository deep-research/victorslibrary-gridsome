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
    <div v-if="songData.type == 'Song'">
      Type: <g-link  to="/songs">Song</g-link>
    </div>
    <div v-if="songData.published">
      Published: {{ formatDate(songData.published) }}
    </div>
    <div v-if="songData.updated">
      Updated: {{ formatDate(songData.updated) }}
    </div>

    <p v-if="songData.explicit">
      ⚠️ Warning: Contains explicit content.
    </p>

    <div v-if="songData.description">
      <h3>Description</h3>
      <vue-markdown>{{ songData.description }}</vue-markdown>
    </div>

    <div v-if="songData.recordings">
      <h3>Recordings</h3>
      <div v-for="(recording, index) in songData.recordings" :key="index">
        <h4 v-if="recording.title">{{ index+1 }}. {{ recording.title }}</h4>
        <div v-if="recording.type">Type: {{ recording.type }}</div>
        <div v-if="recording.style">Style: {{ recording.style }}</div>
        <div v-if="recording.released">Released: {{ formatDate(recording.released) }}</div>
        <p v-if="recording.link">
          <audio controls controlsList="nodownload">
            <source :src="recording.link" type="audio/ogg">
            <source :src="recording.link" type="audio/mpeg">
          Your browser does not support the audio element.
          </audio>
        </p>
      </div>
    </div>

    <div v-if="songData.lyrics">
      <h3>Lyrics</h3>
      <vue-markdown>{{ songData.lyrics }}</vue-markdown>
    </div>
  </div>
</template>

<script>
import dateMixin from "../mixins/dateMixin.js"

export default{
  props: {
    songData: {
      type: Object,
      required: true
    }
  },
  mixins: [dateMixin]
}
</script>
