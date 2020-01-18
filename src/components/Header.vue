<template>
  <v-toolbar class="d-flex justify-center" color="#2196F3">
    <v-toolbar-title class="white--text">{{title}}</v-toolbar-title>
  </v-toolbar>
</template>

<script>

export default {
  name: 'header',

  data: () => ({
     title:"Weather App"
  })
};
</script>
<style scoped>


</style>
