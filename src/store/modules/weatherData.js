import * as types from "../mutation-types"
import api from "../../service/api";

// initial state
const state = {
  weatherData : []
}

// getters
const getters = {
  weatherData(state){
    return state.weatherData.slice(0,1)
  }
}

// actions
const actions = {
     getWeatherData({commit},payload){
        commit("GET_WEATHER_DATA",payload)
     }
}

// mutations
const mutations = {
  [types.GET_WEATHER_DATA](state,payload){
     api.getWeather(payload).then((d) => {
       state.weatherData.unshift(d.data)
     })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
