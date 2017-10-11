<template>
  <div>
  <appTop></appTop>
  <div class="header"></div>
  </div>
</template>

<script>

import TopDream from './TopDream.vue'

export default {
  data () {
    return {}
  },
  components: {
    appTop: TopDream
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@media screen and (max-width: 760px) {
  .header {
    background-image: url('../../assets/img/Dream.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100vh;
    margin: 0;
  }
}

@media screen and (min-width: 761px) {
  .header {
    background-image: url('../../assets/img/DreamBig.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 160vh;
    margin: 0;
  }
}


</style>
