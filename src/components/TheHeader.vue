<template>
  <header>
    <div v-if="!doSearch" class="container">
      <h1>
        <img src="../assets/logo.png" alt="Windbnd Logo">
      </h1>

      <div>
        <the-filter guestsAmount="Add guests" @submited="handleSearch" @openSearch="openSearch"></the-filter>
      </div>
    </div>
    <the-searcher v-else></the-searcher>
  </header>
</template>

<script>
export default {
  data() {
    return {
      doSearch: false
    }
  },
  methods: {
    handleSearch() {
      console.log('teste')
    },
    openSearch() {
      this.doSearch = true;
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