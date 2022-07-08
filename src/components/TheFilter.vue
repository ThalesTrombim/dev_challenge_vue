<template>
  <section>
    <div class="container">
      <ul @click="openSearch">
        <li>
          <div class="filteredInfo">
            <p>Paris, France</p>
          </div>
        </li>
        <li>
          <div class="filteredInfo">
            <p class="guests">{{ guestsAmount }}</p>
          </div>
        </li>
        <li>
          <button class="filteredInfo" @click="doSearch"  id="button">
            <span class="material-symbols-outlined" id="buttonIcon">
              search
            </span>
          </button>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  props: ['guestsAmount'],
  emits: ['submited', 'openSearch'],
  methods: {
    doSearch() {
      this.$emit('submited')
    },
    openSearch(e) {
      if(e.target.id === '') {
        this.$emit('openSearch')
      }
    }
  }
}
</script>

<style scoped>
.container {
  box-shadow: 0px 1px 6px 0px #0000001A;
  border-radius: 16px;
  display: flex;
}
ul, li {
  display: flex;
}
ul :nth-child(2) {
  border-left: 1px solid #F2F2F2;
  border-right: 1px solid #F2F2F2;
}

.filteredInfo {
  display: flex;
  align-items: center;
  padding: 18px 16px;
}
.guests {
  color: #BDBDBD;
}

button {
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
}
.material-symbols-outlined {
  color: #EB5757;
}
</style>