// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

import VueMarkdown from 'vue-markdown'
import VRuntimeTemplate from "v-runtime-template";
import Search from "./components/Search.vue"

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  Vue.component('VueMarkdown', VueMarkdown)
  Vue.component('VRuntimeTemplate', VRuntimeTemplate)
  Vue.component('Search', Search)
}
