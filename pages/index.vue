<template>
  <div class="app">
    <div class="app__header">
      <h1 class="app__title">Добавление товара</h1>
    </div>
    <div class="app__show-form">
      <button
        class="app__show-form--btn"
        @click="showForm(), (isHidden = !isHidden)"
      >
        {{ isHidden ? 'Добавить товар' : 'Закрыть форму' }}
      </button>
    </div>
    <div class="app__filter">
      <product-card-filter />
    </div>
    <div class="app__form">
      <product-card-add-form />
    </div>
    <div class="app__list">
      <spinner-preloader v-if="isLoading() === true" />
      <product-card-list />
      <p v-show="isHasCards() === 'false'" class="app__text">
        В списке нет товаров.<br />Воспользуйтесь формой для добавления.
      </p>
    </div>
  </div>
</template>

<script>
import ProductCardVue from '~/components/ProductCardList.vue';
import ProductCardAddFormVue from '~/components/ProductCardAddForm.vue';
import ProductCardFilterVue from '~/components/ProductCardFilter.vue';
import SpinnerVue from '~/components/Spinner.vue';

export default {
  name: 'IndexPage',
  components: {
    'product-card-list': ProductCardVue,
    'product-card-add-form': ProductCardAddFormVue,
    'product-card-filter': ProductCardFilterVue,
    'spinner-preloader': SpinnerVue,
  },
  data() {
    return {
      isHidden: false,
    };
  },
  watch: {
    cards() {
      this.isHasCards();
    },
  },
  methods: {
    isLoading() {
      return this.$store.state.isLoading;
    },
    isHasCards() {
      return this.$store.state.cards.length > 0 ? 'true' : 'false';
    },
    showForm() {
      document.querySelector('.app__form').classList.toggle('isHidden');
    },
  },
};
</script>

<style lang="scss" scoped>
.app {
  display: grid;
  gap: 1rem;
  @media (max-width: 768px) {
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: min-content min-content min-content min-content;
    grid-template-areas:
      'header header'
      'button filter'
      'form form'
      'list list';
  }
  @media (min-width: 769px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: min-content 1.1fr;
    grid-template-areas:
      'header header header filter'
      'form list list list';
    padding: 2rem;
  }
  &__header {
    grid-area: header;
    @media (max-width: 768px) {
      text-align: center;
    }
  }
  &__filter {
    grid-area: filter;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    @media (max-width: 768px) {
      align-items: center;
    }
    @media (min-width: 769px) {
      align-items: flex-end;
    }
  }
  &__form {
    grid-area: form;
    width: 20.75rem;
    animation-name: slideInDown;
    animation-duration: 1s;
    animation-fill-mode: both;
    @media (max-width: 768px) {
      margin: auto;
    }
    & .add-form {
      @media (max-width: 768px) {
        position: static;
      }
      @media (min-width: 769px) {
        position: fixed;
      }
    }
    &.isHidden {
      z-index: 1;
      animation-name: slideOutUp;
      animation-duration: 1s;
      animation-fill-mode: both;
    }
  }
  &__list {
    grid-area: list;
    position: relative;
    & .card-list {
      @media (max-width: 768px) {
        justify-content: center;
      }
    }
  }
  &__title {
    position: fixed;
    @media (max-width: 768px) {
      position: static;
    }
  }
  &__text {
    display: block;
    padding: 1rem;
    text-align: center;
    border-top: 1px solid $accent_color;
    border-bottom: 1px solid $accent_color;
  }
  &__show-form {
    grid-area: button;
    @media (max-width: 768px) {
      display: flex;
      justify-content: center;
    }
    @media (min-width: 769px) {
      display: none;
    }
    &--btn {
      display: block;
      min-width: 7.5931rem;
      width: max-content;
      min-height: 2.25rem;
      padding: 0.625rem 1rem;
      font-family: Source Sans Pro;
      font-style: normal;
      font-weight: 400;
      font-size: 0.75rem;
      line-height: 0.9375rem;
      color: $disabled_color;
      background-color: $app_bg;
      box-shadow: $input_shadow;
      border: transparent;
      border-radius: 4px;
      appearance: none;
      background-image: url('~/assets/img/filterArrow.svg');
      background-repeat: no-repeat;
      background-position: right;
      background-size: 4.59px;
      background-position-x: calc(100% - 1rem);
      transition: all 0.3s;
      cursor: pointer;
    }
  }
}
@keyframes slideInDown {
  0% {
    transform: translateY(-100%);
    visibility: visible;
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes slideOutUp {
  0% {
    transform: translateY(0);
  }
  100% {
    visibility: hidden;
    width: 0;
    height: 0;
    transform: translateY(-100%);
  }
}
</style>
