<template>
  <div class="title">
    <h3>{{ chapter }}</h3>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>

export default {
  data () {
    return {
      title: "Life",
      chapter: "01"
    }
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.title {
  margin: 300px 0;
  color: #4305FF;
}

h1 {
  font-size: 10em;
  margin: 0;
}

h3 {
  margin: 0;
  font-size: 3em;
}

</style>
