export const state = () => ({
  cards: [],
});

export const mutations = {
  SET_CARDS(state, cards) {
    state.cards = cards;
  },
  SET_CARD(state, card) {
    state.cards.push(card);
  },
  REMOVE_CARD(state, card) {
    state.cards.splice(state.cards.indexOf(card), 1);
  },
};

// get cards from API
export const actions = {
  nuxtServerInit({ commit }) {
    return this.$axios
      .$get('http://localhost:3001/cards')
      .then((response) => {
        commit('SET_CARDS', response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
