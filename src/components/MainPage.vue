<template>
<div>
    <Header />
    <SearchBar />
    <WeatherData />
</div>
</template>

<script>

import SearchBar from './SearchBar';
import WeatherData from './WeatherData';
import Header from './Header';

export default {
  name: 'MainPage',

  data: () => ({
     
  }),
  components: {
    SearchBar,
    WeatherData,
    Header
  }
};
</script>
<style>

</style>
