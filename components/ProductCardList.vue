<template>
  <ul class="card-list">
    <li class="card-list__item">
      <product-card />
    </li>
    <li class="card-list__item">
      <product-card />
    </li>
    <li class="card-list__item">
      <product-card />
    </li>
  </ul>
</template>

<script>
import ProductCardVue from './ProductCard.vue'
export default {
  name: 'ProductCardList',
  components: {
    'product-card': ProductCardVue,
  },
}
</script>

<style lang="scss" scoped>
.card-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  list-style: none;
}
</style>
