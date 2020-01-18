<template>
<div class="search-bar">
  <v-container fluid>
    <v-row justify="center">
      <v-col sm="8" md="8" lg="8">
        <v-text-field @keyup.enter="searchCity()" v-model="searchValue" :label="searchType" single-line outlined append-icon="mdi-magnify"></v-text-field>
      </v-col>
    </v-row>
  </v-container>
 </div>
</template>

<script>

export default {
  name: 'SearchBar',

  data: () => ({
     searchType:"Search city",
     searchValue:""
  }),
 methods:{
   searchCity(){
     this.$store.dispatch("getWeatherData",this.searchValue)
     this.searchValue = ""
   }
 }
};
</script>
<style scoped>
.search-bar{
  background-color: #E3F2FD;
}
</style>
