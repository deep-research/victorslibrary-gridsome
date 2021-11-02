// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

import VueMarkdown from 'vue-markdown'
import VRuntimeTemplate from "v-runtime-template"
import format from 'date-fns/format'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  Vue.component('VueMarkdown', VueMarkdown)
  Vue.component('VRuntimeTemplate', VRuntimeTemplate)
  
  Vue.mixin({
    methods: {
      formatDate: function (inputString) {
        var parts = inputString.split('-');
        var date = new Date(parts[0], parts[1] - 1, parts[2]); 
  
        return format(date, "MM/dd/yyy")
      }
    }
  })
}
