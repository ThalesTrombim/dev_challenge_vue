<template>
  <div class="backdrop">
    <main>
      <ul>
        <li>
          <div class="filter">
            <span>LOCATION</span>
          </div>
        </li>
        <li>
          <div class="filter">
            <span>GUESTS</span>
          </div>
        </li>
        <li>
          <div class="filter action">
            <button>
              <span class="material-symbols-outlined">
                search
              </span>
                search
            </button>
          </div>
        </li>
      </ul>
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
      }
    }
  }
}
</script>

<style scoped>
.backdrop {
  background: rgba(0, 0, 0, .4);
  height: 100vh;
}

main {
  background: #FFF;
  padding: 93px 96px;
}
ul {
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 1px 6px 0px #0000001A;
  border-radius: 16px;
}
li {
  list-style: none;
  width: 100%;
  border-right: 1px solid #F2F2F2;
}
li:last-child{
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


</style>