<template>
  <div class="card">
    <img
      class="card__img"
      src="~/assets/img/productCardImg.png"
      alt="ProductCardImg"
    />
    <div class="card__body">
      <h3 class="card__title">Наименование товара</h3>
      <p class="card__description">
        Довольно-таки интересное описание товара в несколько строк.
        Довольно-таки интересное описание товара в несколько строк
      </p>
      <p class="card__price"><span class="card__sum">10 000</span> руб.</p>
    </div>
    <button class="card__delete">
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
}
</script>

<style lang="scss" scoped>
.card {
  width: 20.75rem;
  height: 26.4375rem;
  color: $app_color;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  background-color: $card_bg;
  box-shadow: $card_shadow;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  &:hover {
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
  &__sum {
  }
  &__delete {
    width: 2rem;
    height: 2rem;
    background-color: $card_delete_color;
    box-shadow: $card_delete_shadow;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    visibility: hidden;
    transition: all 0.3s;
    &:hover {
      transform: scale(0.9);
    }
  }
  &__delete-img {
    margin: 0.5rem;
  }
}
</style>
