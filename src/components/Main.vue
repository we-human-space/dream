<template>
  <div class="main">
    <appHeader></appHeader>
    <appTitle></appTitle>
    <appSubtitle></appSubtitle>
  </div>
</template>

<script>

import HeaderDream from './HeaderDream.vue'
import TitleDream from './TitleDream.vue'
import SubtitleDream from './SubtitleDream.vue'


export default {
  data () {
    return {}
  },
  components: {
    appHeader: HeaderDream,
    appTitle: TitleDream,
    appSubtitle: SubtitleDream
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
