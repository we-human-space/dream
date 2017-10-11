<template>
  <div class="main">
    <appHeader></appHeader>
    <appTitle></appTitle>
    <appSubtitle></appSubtitle>
    <appTableDream></appTableDream>
  </div>
</template>

<script>

import HeaderDream from './HeaderDream.vue'
import TitleDream from './TitleDream.vue'
import SubtitleDream from './SubtitleDream.vue'
import TableDream from './TableDream.vue'


export default {
  data () {
    return {}
  },
  components: {
    appHeader: HeaderDream,
    appTitle: TitleDream,
    appSubtitle: SubtitleDream,
    appTableDream: TableDream
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
