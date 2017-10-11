<template>
  <div class="main">
    <appHeaderLife></appHeaderLife>
    <appTitleLife></appTitleLife>
    <appSubtitleLife></appSubtitleLife>
  </div>
</template>

<script>

import HeaderLife from './HeaderLife.vue'
import TitleLife from './TitleLife.vue'
import SubtitleLife from './SubtitleLife.vue'


export default {
  data () {
    return {}
  },
  components: {
    appHeaderLife: HeaderLife,
    appTitleLife: TitleLife,
    appSubtitleLife: SubtitleLife
  },
  methods: {
    scrollTop: () => { console.log('scrollingtop'); window.scrollTo(0, 0); }
  },
  mounted() {
    this.scrollTop()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
