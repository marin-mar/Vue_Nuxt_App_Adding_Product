<template>
  <div class="card" tabindex="0">
    <img class="card__img" :src="`${card.link}`" alt="ProductCardImg" />
    <div class="card__body">
      <h3 class="card__title">{{ card.title }}</h3>
      <p class="card__description">
        {{ card.description }}
      </p>
      <p class="card__price">
        <span class="card__sum">{{ card.price }}</span> руб.
      </p>
    </div>
    <button class="card__delete" :tabindex="2">
      <img
        class="card__delete-img"
        src="~/assets/img/deleteImg.svg"
        alt="ProductCardImg"
      />
    </button>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    card: {
      type: Object,
      // required: true,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 20.75rem;
  min-height: 26.4375rem;
  color: $app_color;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  background-color: $app_bg;
  box-shadow: $app_shadow;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s;
  &:hover,
  &:active,
  &:focus {
    transform: translateY(-0.5rem);
    .card__delete {
      visibility: visible;
    }
  }
  &__img {
    border-radius: 4px 4px 0px 0px;
  }
  &__body {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    margin-right: 1rem;
    margin-left: 1rem;
    gap: 1rem;
  }
  &__title {
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.5625rem;
  }
  &__description {
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.25rem;
  }
  &__price {
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 1.875rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
  &__delete {
    width: 2rem;
    height: 2rem;
    background-color: $accent_color;
    box-shadow: $delete_shadow;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    visibility: hidden;
    transition: all 0.3s;
    &:hover,
    &:active,
    &:focus {
      transform: scale(0.9);
    }
  }
  &__delete-img {
    margin: 0.5rem;
  }
}
</style>
