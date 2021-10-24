// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Victor's Library",
  siteUrl: 'https://victorslibrary.com/',
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Content', // Required
        baseDir: './content', // Where .md files are located
        template: './src/templates/Content.vue' // Optional
      }
    }
  ]
}
