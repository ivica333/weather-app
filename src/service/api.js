import axios from "axios";

const key = "26f93e638205d55959e6bdc1af24dfeb";
export default {
  getWeather(city) {
    return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}`)
  }
}
