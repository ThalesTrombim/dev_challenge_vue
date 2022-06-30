<template>
  <ul class="container">
    <li>locality</li>
    <li>guests</li>
    <li>
      <p>Search icon</p>
      <button>
        <img src="" alt="">
      </button>
    </li>
  </ul>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  list-style: none;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 1px 1px;
  justify-content: space-between;
}
.container :nth-child(2) {
  border-right: 1px solid #F2F2F2;
  border-left: 1px solid #F2F2F2;
}

li {
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>