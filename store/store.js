import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// eslint-disable-next-line import/no-named-as-default-member
export const store = new Vuex.Store({
  state: () => ({
    cards: [],
    isLoading: false,
  }),
  mutations: {
    SET_CARDS(state, cards) {
      state.cards = cards;
    },
    SET_CARD(state, card) {
      state.cards.push(card);
    },
    REMOVE_CARD(state, card) {
      state.cards.splice(state.cards.indexOf(card), 1);
    },
    SORT_BY_MIN(state, cards) {
      state.cards = cards.sort((a, b) => Number(a.price) - Number(b.price));
    },
    SORT_BY_MAX(state, cards) {
      state.cards = cards.sort((a, b) => Number(b.price) - Number(a.price));
    },
    SORT_BY_TITLE(state, cards) {
      state.cards = cards.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
        if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
        return 0;
      });
    },
    SORT_BY_DEFAULT(state, cards) {
      state.cards = cards.sort((a, b) => Number(b.id) - Number(a.id));
    },
    SHOW_SPINNER(state, isLoading) {
      state.isLoading = isLoading;
    },
  },
});
