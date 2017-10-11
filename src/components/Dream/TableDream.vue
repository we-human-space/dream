<template>
  <div class="subtitle">
    <div class="subtitlePlacement">

      <div class="content">
        <div class="contentPlacement">
          <p>Table of Dreams</p>
          <router-link to="/life"><p>Chapter 01 - Life</p></router-link>
          <p>Chapter 02 - <i>Coming Soon</i></p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {

    }
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.content {
  display: flex;
  align-items: center;
  justify-content: left;
  height: 100vh;
}

.contentPlacement {

}

.subtitle {
  display: flex;
  justify-content: center;
}

.subtitlePlacement {
  text-align: left;
  width: 85%;
}

p {
  font-size: 4em;
  line-height: 1.2em;
}

a {
  text-decoration: none;
  color: black;
}

a:hover {
  border-bottom: solid 2px red;
}

</style>
