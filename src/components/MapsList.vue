<template>
  <div class="mapslist">
    <router-link
      v-for="country in results"
      :key="country.alpha2Code"
      class="mapslist__item"
      :to="`/country/${country.alpha2Code}`"
    >
      <img
        :src="country.flag"
        :alt="`${country.name} Flag`"
        class="mapslist__flag"
      />
      <h2 class="mapslist__name">{{ country.name }}</h2>
      <dl class="mapslist__details">
        <dt>Population:</dt>
        <dd>{{ country.population }}</dd>
        <dt>Region:</dt>
        <dd>{{ country.region }}</dd>
        <dt>Capital:</dt>
        <dd>{{ country.capital }}</dd>
      </dl>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "MapsList",
  props: {
    results: [],
  },
};
</script>

<style scoped>
.mapslist {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 -10px;
}

.mapslist__item {
  flex-basis: 20%;
  padding: 10px;
}

.mapslist__flag {
  max-width: 100%;
}

@media screen and (max-width: 600px) {
  .mapslist__item {
    flex-basis: 100%;
  }
}
</style>