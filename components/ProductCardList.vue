<template>
  <ul class="card-list">
    <li v-for="card in cards" :key="card.id" class="card-list__item">
      <product-card :card="card" />
    </li>
  </ul>
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
      return this.$store.state.cards;
    },
  },
  created() {
    if (process.client) {
      if (localStorage.length > 0) {
        const cards = {};
        for (const key of Object.keys(localStorage)) {
          if (key.match(/[^cards-]/gi)) {
            cards[key] = JSON.parse(localStorage.getItem(key));
          }
        }
        this.$store.commit('SET_CARDS', cards);
      } else {
        this.$store.state.cards.map((card) =>
          localStorage.setItem(`cards-${card.id}`, JSON.stringify(card))
        );
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
}
</style>
