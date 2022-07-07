<template>
  <div>
    <div class="type-guests-type">
      <slot></slot>
    </div>
    <div class="counters">
      <button @click="removeGuest">
        <span class="material-symbols-outlined">
          remove
        </span>
      </button>
      <span class="counter">{{ counter }}</span>
      <button @click="addGuest">
        <span class="material-symbols-outlined">
          add
        </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['guests'],
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    addGuest() {
      if(this.counter+1 <= 8) {
        this.counter++
      }
      this.$emit('guests', this.counter);
    },
    removeGuest() {
      if(this.counter-1 > 0) {
        this.counter--
      }
    }
  }
};
</script>

<style scoped>

.type-guests-type {
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
}
.type-guests-type p {
  font-size: 14px;
  font-weight: bold;
}
.type-guests-type span {
  color: #BDBDBD;
}

.counters {
  display: flex;
  align-items: center;
  gap: 15px;
}

button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #828282;
  background: transparent;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  filter: brightness(.9);
  background-color: rgba(0, 0, 0, 0.05);
}

.material-symbols-outlined {
  color: #828282;
}

.counter {
  font-weight: bold;
}
</style>
