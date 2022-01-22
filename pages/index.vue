<template>
  <div class="app">
    <div class="app__header">
      <h1 class="app__title">Добавление товара</h1>
    </div>
    <div class="app__filter">
      <product-card-filter />
    </div>
    <div class="app__form">
      <product-card-add-form />
    </div>
    <div class="app__list">
      <product-card-list />
    </div>
  </div>
</template>

<script>
import ProductCardVue from '~/components/ProductCardList.vue';
import ProductCardAddFormVue from '~/components/ProductCardAddForm.vue';
import ProductCardFilterVue from '~/components/ProductCardFilter.vue';

export default {
  name: 'IndexPage',
  components: {
    'product-card-list': ProductCardVue,
    'product-card-add-form': ProductCardAddFormVue,
    'product-card-filter': ProductCardFilterVue,
  },
};
</script>

<style lang="scss" scoped>
.app {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: min-content 1.1fr;
  gap: 1rem;
  grid-template-areas:
    'header header header filter'
    'form list list list';
  padding: 2rem;
  &__header {
    grid-area: header;
  }
  &__filter {
    grid-area: filter;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  &__form {
    grid-area: form;
    width: 20.75rem;
  }
  &__list {
    grid-area: list;
  }
  &__title {
    position: fixed;
  }
}
</style>
