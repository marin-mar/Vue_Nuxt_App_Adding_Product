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
    state.cards = cards.sort((a, b) => Number(a.id) - Number(b.id));
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

// .$get(
//   'https://raw.githubusercontent.com/marin-mar/idaproject_test/main/data.json?token=GHSAT0AAAAAABPJ4HDCC26KJJA7URPNTQ4CYPNFWRA'
// )
