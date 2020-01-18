<template>

<v-row>
  <v-col cols="12">
   <v-card>
    <v-toolbar color="#2196F3" dark>
      <v-toolbar-title>Check Weather</v-toolbar-title>
    </v-toolbar>
    <v-list>
      <v-list-item v-for="(city,i) in predefinedCities" :key="i">

        <v-list-item-content>
          <v-list-item-title @click="weatherInfo(city)" v-text="city"></v-list-item-title>
        </v-list-item-content>

      </v-list-item>
    </v-list>
      <FavouritesList />
    </v-card>
  </v-col>
</v-row>
           
</template>

<script>
import FavouritesList from './FavouritesList';
import mixin from '../mixins';

export default {
  name: 'FavoritesList',

  data: () => ({
      predefinedCities: ["Dubrovnik", "Osijek", "Zagreb", "Las Vegas"]
  }),
components:{
  FavouritesList
},
mixins:[mixin]
};
</script>
<style scoped>

</style>
