<template>
  <transition-group appear name="card-list" tag="ul" class="card-list">
    <li v-for="card in cards" :key="card.id" class="card-list__item">
      <product-card :card="card" />
    </li>
  </transition-group>
</template>

<script>
import ProductCardVue from './ProductCard.vue';
export default {
  name: 'ProductCardList',
  components: {
    'product-card': ProductCardVue,
  },
  computed: {
    cards() {
      this.$store.commit('SHOW_SPINNER', false);
      return this.$store.state.cards;
    },
  },
  watch: {
    cards: {
      handler(cards) {
        if (process.client) {
          localStorage.cards = JSON.stringify(cards);
        }
      },
      deep: true,
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });

    if (localStorage.getItem('cards')) {
      try {
        this.$store.commit(
          'SET_CARDS',
          JSON.parse(localStorage.getItem('cards'))
        );
      } catch (e) {
        localStorage.removeItem('cards');
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.card-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  list-style: none;
  &-enter-active,
  &-leave-active {
    transition: all 1s;
  }
  &-enter,
  &-leave-to {
    opacity: 0;
    transform: translateX(2rem) translateY(-2rem);
  }
  &-move {
    transition: transform 1s;
  }
  &__item {
    width: max-content;
  }
}
</style>
