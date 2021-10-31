<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link class="siteTitle" to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/versions">Versions</g-link>
      </nav>
    </header>
    <slot/>
    <footer class="footer">© {{new Date().getFullYear()}} Victor Fisher</footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
  font-size: 125%;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 20px;
  height: 80px;
}

.footer {
  margin-bottom: 40px;
  margin-top: 40px;
}

.nav__link {
  margin-left: 20px;
  text-decoration: none;
}

.image {
  width: 100%;
  max-width: 500px;
  height: auto;
}

ol li {
  margin-bottom: 10px;;
}

.siteTitle {
  font: 30px Helvetica, Sans-Serif;
  text-decoration: none;
	letter-spacing: 7px;
	color: rgba(0,0,255,0.5);
}
</style>
