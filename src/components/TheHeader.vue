<template>
  <header>
    <div v-if="!doSearch" class="container">
      <h1>
        <img src="../assets/logo.png" alt="Windbnd Logo">
      </h1>

      <div>
        <the-filter 
          :guestsAmount="guests"
          :city="city" 
          @submited="handleSearch" 
          @openSearch="openSearch"
        >
        </the-filter>
      </div>
    </div>
    <the-searcher v-else @setData="setData" @close="closeSearcher"></the-searcher>
  </header>
</template>

<script>
export default {
  data() {
    return {
      city: 'Paris, France',
      guests: 'Add guests',
      doSearch: false,
    }
  },
  methods: {
    handleSearch() {
      console.log('testando')
    },
    openSearch() {
      this.doSearch = true;
    },
    setData(infos) {
      this.city = infos.city;
      this.guests = infos.guests
      this.$emit('filter', {city: this.city, guests: this.guests})
      this.doSearch = false;
    },
    closeSearcher() {
      this.doSearch = false;
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1248px;
  margin: auto;
  padding: 32px 16px;
}
</style>