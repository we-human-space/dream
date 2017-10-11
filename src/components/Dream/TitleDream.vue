<template>
  <div class="title">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>

export default {
  data () {
    return {
      title: "The Dream We're Willing To Die For"
    }
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.title {
  margin: 300px 0;
}

h1 {
  font-size: 10em;
}

</style>
