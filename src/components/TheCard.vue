<template>
  <div class="container">
    <!-- <img :src="photo" :alt="title"> -->
    <div class="img" :style="{'background-image': `url('${photo})`}"></div>
    <div class="infos-area">
      <div class="super-host" v-if="superHost">SUPER HOST</div>
      <p>{{ type }} {{ amountBeds }}</p>
      <div class="rating">
        <span class="material-symbols-outlined">
          star
        </span>
        <span>{{ rating }}</span>
      </div>
    </div>
    <p class="description">{{ title }}</p>
  </div>
</template>

<script>
export default {
  props: ['photo', 'superHost', 'title', 'type', 'beds', 'rating'],
  computed: {
    amountBeds() {
      if((this.beds !== null) && (this.beds > 1)) {
        return `, ${this.beds} beds`
      } else if(this.beds === 1) {
        return `, ${this.beds} bed`
      }
      return ''
    }
  }
}
</script>

<style scoped>

.img {
  width: 100%;
  height: 267px;
  border-radius: 24px;
  background-size: cover;
  background-position: center center;
}

.infos-area {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  margin-bottom: 12px;
}
.infos-area p {
  color: #828282;
}
.super-host {
  color: #4F4F4F;
  border-radius: 12px;
  border: 1px solid #4F4F4F;
  padding: 7px 10px;
  font-size: 12px;
  font-weight: bold;
}
.description {
  font-weight: bold;
  font-size: 16px;
}

.rating {
  display: flex;
  align-items: center;
  gap: 5px;
}
.rating span {
  font-weight: 500;
  color: #4F4F4F;
}
.rating .material-symbols-outlined {
  color: #EB5757;
}
</style>