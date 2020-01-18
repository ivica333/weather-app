<template>

<!-- display weather information-->
     
        <v-row justify="center">
          <v-col v-for="data in this.weatherData" :key="data.weather[0].id" xs="12" sm="12" md="10" lg="10">
            <v-toolbar color="#2196F3" dark>
             <v-toolbar-title>Weather info</v-toolbar-title>
            </v-toolbar>
            <v-card>
              <v-card-title class="subheading font-weight-bold">{{data.name}}</v-card-title>

              <v-divider></v-divider>

              <v-list dense>
                <v-list-item>Weather : {{data.weather[0].main}} <v-icon>{{ changeIcon(data.weather[0].main) }}</v-icon></v-list-item>
                <v-list-item>Description : {{data.weather[0].description}}</v-list-item>
                <v-list-item>Temperature : {{data.main.temp | convertTemp}}</v-list-item>
                <v-list-item>Min. Temperature : {{data.main.temp_min | convertTemp}}</v-list-item>
                <v-list-item>Max. Temperature : {{data.main.temp_max | convertTemp}}</v-list-item>
                <v-list-item>Wind speed : {{data.wind.speed}} m/s</v-list-item>
                <v-btn color="#2196F3" class="ml-2" @click="addToFavorites(data.name)" dark>ADD TO FAVORITES</v-btn>
              </v-list>
            </v-card>
          </v-col>
        </v-row>

 
 

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'WeatherContent',

  data: () => ({
     weatherIcon:null
  }),
  computed:{
    ...mapGetters(["weatherData"])
  },
  methods:{
     changeIcon(type){
       switch (type) {
        case "Clouds":
          return "mdi-weather-cloudy";
          break;
        case "Clear":
          return "mdi-weather-sunny";
          break;
        case "Fog":
          return "mdi-weather-fog";
          break;
        case "Mist":
          return "mdi-weather-hazy";
          break;
        case "Rain":
          return "mdi-weather-pouring";
          break;
        default:
        return ""
      }
     },
     addToFavorites(city){
         localStorage.setItem(city,city)
         location.reload()
      }
  },
  filters:{
    convertTemp(val){
      let f = ((val - 273.15)*1.8)+32
       return f.toFixed(2) + " ℉"
    }
  }
};
</script>
<style scoped>

</style>
