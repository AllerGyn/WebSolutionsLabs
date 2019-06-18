<template>
    <div>
      <h1>Связанные поля</h1>
      <input :style="{zoom}" v-model="count">
      <hr>
      <input :style="{zoom}" v-model="count">
    </div>
</template>

<script>
export default {
  data () {
    return {
      count: ''
    }
  },
  props: {
    zoom: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: red;
}

</style>
