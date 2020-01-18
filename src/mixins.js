export default {
  methods:{
    weatherInfo(city){
        this.$store.dispatch("getWeatherData",city)
    }
}
}
