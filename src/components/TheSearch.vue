<template>
  <ul class="container">
    <li>locality</li>
    <li>guests</li>
    <li>Search icon</li>
  </ul>
</template>

<style>
.container {
  display: flex;
  align-items: center;
  list-style: none;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px;
}
.container :nth-child(2) {
  border-right: 1px solid #F2F2F2;
  border-left: 1px solid #F2F2F2;
}

li {
  padding: 19px 16px;
}
</style>