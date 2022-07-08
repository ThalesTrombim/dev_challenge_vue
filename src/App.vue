<template>
  <div>
    <the-header></the-header>
    <section class="stayments-container">
      <div class="stayments">
        <the-card
          v-for="stay in houses"
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
      houses: stays
    }
  },
  mounted() {
    console.log(this.houses)
  }
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
}
.stayments {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 50px;
  column-gap: 34px;
}
</style>