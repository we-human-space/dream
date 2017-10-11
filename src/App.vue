<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

import './assets/css/fonts.css'

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'futura-pt', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
}

body {
  margin: 0;
}
</style>
