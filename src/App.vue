<template>
  <div id="app">
    <router-view
      :results="filteredResults"
      @filter-term="(term) => (search = term)"
      @filter-region="(newRegion) => (region = newRegion)"
    ></router-view>
  </div>
</template>

<script>
import Home from "./components/Home.vue";

export default {
  name: "App",
  components: {
    Home,
  },
  created() {
    this.getCountries(this.search, this.region);
  },
  data() {
    return {
      results: [],
      search: "",
      region: "none",
    };
  },
  computed: {
    filteredResults: function () {
      if (this.region === "none") {
        return this.results;
      }

      return this.results.filter((country) => {
        return this.region === country.region;
      });
    },
  },
  methods: {
    getCountries: function (search, region) {
      let endpoint = "https://restcountries.eu/rest/v2/";
      if (search === "") {
        endpoint = endpoint + "all";
      } else {
        endpoint = endpoint + "name/" + search;
      }

      fetch(endpoint)
        .then((response) => response.json())
        .then((results) => (this.results = results));
    },
  },
  watch: {
    search: function (search) {
      this.getCountries(search, this.region);
    },
    region: function (region) {
      this.getCountries(this.search, region);
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.search-and-filter {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
