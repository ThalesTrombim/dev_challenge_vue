<template>
  <div class="backdrop" id="backdrop" @click="close">
    <main>
      <ul class="optionsList">
        <li>
          <div class="filter" @click="setNewCity">
            <span>LOCATION</span>
            <p class="chosenCity">{{ filteredOptions.city }}</p>
          </div>
        </li>
        <li>
          <div class="filter">
            <span>GUESTS</span>
            <p v-if="filteredOptions.guests === 0">Add guests</p>
            <p v-else>{{ filteredOptions.guests }}</p>
          </div>
        </li>
        <li>
          <div class="filter action">
            <button @click="submitFilteredOptions">
              <span class="material-symbols-outlined">
                search
              </span>
                search
            </button>
          </div>
        </li>
      </ul>
      <div class="actions">
        <div class="citiesContainer">
          <ul class="citiesList" v-if="filteredOptions.city === ''">
            <li v-for="city in cities" :key="city" :id="city" @click="setCity(city)">
              <span class="material-symbols-outlined">
                pin_drop
              </span> 
              {{ city }}
            </li>
          </ul>
        </div>
        <div class="guestsContainer">
          <the-guests @guests="adultsCounter">
            <p>Adults</p>
            <span>Ages 13 or above</span>
          </the-guests>
          <the-guests @guests="childrenCounter" type="children">
            <p>Children</p>
            <span>Ages 2-12</span>
          </the-guests>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cities: [
        'Paris, France',
        'New York, United States',
        'Rome, Italy',
        'Madrid, Spain',
      ],
      filteredOptions: {
        city: '',
        guests: 0
      },
      children: 0,
      adults: 0,
    }
  }, 
  methods: {
    setCity(city) {
      this.filteredOptions.city = city;
    },
    setNewCity() {
      this.filteredOptions.city = '';
    },
    adultsCounter(val) {
      this.adults = val;
      this.totalGuests();
    },
    childrenCounter(val) {
      this.children = val;
      this.totalGuests();
    },
    totalGuests() {
      this.filteredOptions.guests = this.children + this.adults;
    },
    submitFilteredOptions() {
      this.$emit('setData', this.filteredOptions);
      console.log(this.filteredOptions);
    },
    close(e) {
      if(e.target.id === 'backdrop'){
        this.$emit('close')
      }
    }
  }
}
</script>

<style scoped>
.backdrop {
  background: rgba(0, 0, 0, .4);
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1000;
}

main {
  background: #FFF;
  padding: 93px 96px;
  display: flex;
  flex-direction: column;
  gap: 39px;
}
.optionsList {
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 1px 6px 0px #0000001A;
  border-radius: 16px;
}
.optionsList li {
  list-style: none;
  width: 100%;
  border-right: 1px solid #F2F2F2;
}
.optionsList li:last-child{
  border-right: none;
}
.filter {
  padding: 12px 27px;
}
.filter > span {
  color: #333333;
  font-size: 9px;
  font-weight: bold;
}
.filter > p {
  color: #BDBDBD;
  font-size: 14px;
  /* font-weight: bold; */
}
.filter.action {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 4px;
}
.filter.action button {
  display: flex;
  border: none;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background: #EB5757E5;
  color: #FFF;
  padding: 16px 24px;
  font-size: 16px;
  line-height: 16px;
  gap: 11px;
}
.filter.action button:hover {
  cursor: pointer;
  filter: brightness(1.08)
}

.citiesList {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 36px;
}
.citiesList li {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}
.citiesList li:hover {
  transform: scale(1.01);
}

.filter .chosenCity {
  color: #333333;
  font-weight: 500;
}
.actions {
  display: flex;
  justify-content: center;
}
.citiesContainer {
  flex: 1;
}
.guestsContainer {
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

</style>