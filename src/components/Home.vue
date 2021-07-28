<template>
  <div class="mapslist-home">
    <div class="search-and-filter">
      <div class="search-and-filter__country-search">
        <input
          type="text"
          @input="(e) => $emit('filter-term', e.target.value)"
        />
      </div>
      <div class="search-and-filter__region-filter">
        <select @change="(e) => $emit('filter-region', e.target.value)">
          <option value="none" selected>Filter By Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
    <MapsList :results="results" />
  </div>
</template>
<script>
import MapsList from "./MapsList.vue";
export default {
  name: "Home",
  props: {
    results: [],
  },
  components: {
    MapsList,
  },
};
</script>