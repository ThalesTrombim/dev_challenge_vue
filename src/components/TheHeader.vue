<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="Windbnb">
    </h1>
    <div>
      <the-search></the-search>
    </div>
  </header>
</template>

<script>
import TheSearch from '@/components/TheSearch';

export default {
  components: {
    TheSearch
  }
}
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 32px;
  max-width: 1248px;
  margin: auto;
}
</style>