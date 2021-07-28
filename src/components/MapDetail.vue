<template>
  <div class="mapDetail">
    <router-link class="mapDetail__backLink" to="/">Back</router-link>
    <div class="mapDetail__country">
      <img :src="country.flag" :alt="`${country.name} Flag`" />
      <aside class="mapDetail__info">
        <h2 class="mapDetail__countryName">{{ country.name }}</h2>
        <dl class="mapDetail__info-list">
          <dt>Native Name:</dt>
          <dd>{{ country.nativeName }}</dd>
          <dt>Top Level Domain:</dt>
          <dd></dd>
        </dl>
      </aside>
    </div>
  </div>
</template>
<script>
export default {
  name: "MapDetail",
  props: {
    results: [],
  },
  computed: {
    country() {
      return this.results.find(
        (co) => co.alpha2Code === this.$route.params.code
      );
    },
  },
};
</script>
<style scoped>
.mapDetail__country {
  display: flex;
  justify-content: space-between;
  padding: 30px;
}

@media screen and (max-width: 600px) {
  .mapDetail__country {
    flex-direction: column;
  }
}
</style>