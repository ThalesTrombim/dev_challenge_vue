<template>
  <div class="content">
    <the-header @filter="doFilter"></the-header>
    <section class="stayments-container">
      <div class="stayments">
        <the-card
          v-for="stay in filteredHouses"
          :key="stay.id"
          :photo="stay.photo"
          :superHost="stay.superHost"
          :title="stay.title"
          :type="stay.type"
          :beds="stay.beds"
          :rating="stay.rating"
        >
        </the-card>
      </div>
    </section>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheCard from './components/TheCard.vue';
import stays from './stays.json';

export default {
  components: { TheCard },
  data() {
    return {
      houses: stays,
      filteredHouses: stays
    }
  },
  methods: {
    doFilter(val) {
      const { city } = val;
      const [, country] = city.split(", ");

      console.log(country)
      this.filteredHouses = this.houses.filter(stay => stay.country.includes(country))

      console.log(this.houses)
    },
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  font-family: 'Montserrat', sans-serif;
}
.stayments-container {
  padding: 0 16px;
  padding-bottom: 53px;
  min-height: calc(100vh - 222px);
}
.stayments {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 50px;
  column-gap: 34px;
}
</style>