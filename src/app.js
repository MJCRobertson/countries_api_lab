import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      countries: [],
      selectedCountry: null,
      countriesFilteredByName: ""
  },
    mounted(){
      this.fetchCountry();
    },
    computed: {
      totalPopulation: function(){
        return this.countries.reduce((runningTotal, country) => runningTotal + country.population, 0)
      }
    },
    methods:{
      fetchCountry: function(){
        fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(data => this.countries = data)
      }
    }
  })
})
