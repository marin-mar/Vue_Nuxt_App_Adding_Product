<template>
  <div class="app">
    <h1 class="greeting">Добавление товара</h1>
    <product-card />
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard';

export default {
  name: 'IndexPage',
  components: {'product-card' : ProductCard},
}
</script>

<style lang="scss" scoped>
.app {
  display: grid;
  gap: 1rem;
  padding: 2rem;
}
</style>
