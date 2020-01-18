<template>
<div class="weather-data">
 <v-container fluid>
    <v-row>
      <v-col xs="3" sm="3" md="3" lg="3">
         <CityList />
      </v-col>
      <v-col xs="9" sm="9" md="9" lg="9">
         <WeatherContent />
      </v-col>
    </v-row>
  </v-container>
</div>
</template>

<script>
import CityList from './CityList';
import WeatherContent from './WeatherContent';

export default {
  name: 'WeatherData',

  data: () => ({
     
  }),
  components:{
    CityList,
    WeatherContent
  }
};
</script>
<style>
.weather-data{
  background-color: #E3F2FD;
}
</style>
