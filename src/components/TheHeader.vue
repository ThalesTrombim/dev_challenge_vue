<template>
  <header>
    <div class="container">
      <h1>
        <img src="../assets/logo.png" alt="Windbnd Logo">
      </h1>

      <div>
        <the-filter 
          :guestsAmount="amountGuests"
          :city="city" 
          @submited="handleSearch" 
          @openSearch="openSearch"
        >
        </the-filter>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: ['guests', 'city'],
  computed: {
    amountGuests() {
      if(this.guests === 0) {
        return 'Add guests';
      } else if(this.guests === 1) {
        return `${this.guests} guest`;
      }
      return `${this.guests} guests`
    }
  },
  methods: {
    handleSearch() {
      console.log('testando')
    },
    openSearch() {
      this.$emit('openSearch')
    },
    
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