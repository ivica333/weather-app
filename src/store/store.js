import Vue from 'vue'
import Vuex from 'vuex' 
import weatherData from './modules/weatherData'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    weatherData:weatherData
  }
})
