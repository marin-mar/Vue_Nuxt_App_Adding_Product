<template>
  <form
    id="add-form"
    class="add-form"
    :tabindex="0"
    action=""
    method="post"
    @submit.prevent="onSubmit"
  >
    <div class="add-form__block">
      <label for="title" class="add-form__label required"
        >Наименование товара</label
      >
      <input
        id="title"
        v-model.trim="card.title"
        type="text"
        name="title"
        :class="['add-form__input', { invalid: errors.includes('title') }]"
        placeholder="Введите наименование товара"
        @blur="checkInput('title')"
        @keyup.enter="$event.target.blur()"
      />
      <span v-if="errors.includes('title')" class="add-form__warning"
        >Поле является обязательным</span
      >
    </div>
    <div class="add-form__block">
      <label for="description" class="add-form__label">Описание товара</label>
      <textarea
        id="description"
        v-model.trim="card.description"
        name="description"
        class="add-form__textarea"
        rows="7"
        placeholder="Введите описание товара"
      ></textarea>
    </div>
    <div class="add-form__block">
      <label for="link" class="add-form__label required"
        >Ссылка на изображение товара</label
      >
      <input
        id="link"
        v-model.trim="card.link"
        type="url"
        name="link"
        :class="['add-form__input', { invalid: errors.includes('link') }]"
        placeholder="Введите ссылку"
        @blur="checkInput('link')"
        @keyup.enter="$event.target.blur()"
      />
      <span v-if="errors.includes('link')" class="add-form__warning"
        >Поле является обязательным</span
      >
    </div>
    <div class="add-form__block">
      <label for="price" class="add-form__label required">Цена товара</label>
      <input
        id="price"
        v-model.number="card.price"
        v-model="formatPrice"
        :type="indicatorChange ? 'number' : 'text'"
        name="price"
        :class="['add-form__input', { invalid: errors.includes('price') }]"
        placeholder="Введите цену"
        @focus="indicatorChange = true"
        @blur="checkInput('price'), (indicatorChange = false)"
        @keyup.enter="$event.target.blur()"
      />
      <span v-if="errors.includes('price')" class="add-form__warning"
        >Поле является обязательным</span
      >
    </div>
    <button
      tabindex="0"
      type="submit"
      :class="['add-form__button', { success: isCardFull() }]"
      @click="addNewCard()"
    >
      Добавить товар
    </button>
    <p v-if="isAddingSuccessful" class="add-form__success">
      <b>Товар добавлен</b>
    </p>
  </form>
</template>

<script>
export default {
  name: 'ProductCardAddForm',
  data() {
    return {
      card: {
        title: '',
        description: '',
        link: '',
        price: '',
      },
      errors: [],
      indicatorChange: false,
      isAddingSuccessful: false,
    };
  },
  computed: {
    formatPrice: {
      get() {
        return this.indicatorChange
          ? this.card.price
          : this.card.price.toLocaleString();
      },
      set(value) {
        this.card.price = +value.replace(/\s/g, '');
        this.$emit('input', this.card.price);
      },
    },
  },
  methods: {
    checkInput(field) {
      if (this.card[field] && !this.errors.includes(field)) return true;
      if (this.card[field] && this.errors.includes(field)) {
        const index = this.errors.indexOf(field);
        if (index > -1) {
          this.errors.splice(index, 1);
        }
      }
      if (!this.card[field] && !this.errors.includes(field)) {
        this.errors.push(field);
      }
      return this.errors;
    },
    isCardFull() {
      let state = true;
      [this.card.title, this.card.link, this.card.price].forEach((field) => {
        if (field === null || field === '') {
          state = false;
        }
      });
      return state;
    },
    onSubmit(e) {
      e.preventDefault();
    },
    addNewCard() {
      const newCard = {
        id: Date.now(),
        title: this.card.title,
        description: this.card.description,
        link: this.card.link,
        price: this.card.price,
      };
      this.$emit('addNewCard', newCard);
      this.$store.commit('SET_CARD', newCard);
      if (process.client) {
        localStorage.setItem(`cards-${newCard.id}`, JSON.stringify(newCard));
      }
      this.isAddingSuccessful = true;
      this.card.title = '';
      this.card.description = '';
      this.card.link = '';
      this.card.price = '';
      setTimeout(!this.isAddingSuccessful, 2000);
    },
  },
};
</script>

<style lang="scss" scoped>
.add-form {
  position: fixed;
  width: 20.75rem;
  min-height: 27.5rem;
  background: $app_bg;
  box-shadow: $app_shadow;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  &__block {
    display: flex;
    flex-direction: column;
  }
  &__label {
    font-family: inherit;
    font-style: inherit;
    font-weight: inherit;
    font-size: 0.625rem;
    line-height: 0.8125rem;
    letter-spacing: -0.02em;
    color: $label_color;
    margin-bottom: 4px;
    &.required::after {
      content: '';
      width: 4px;
      height: 4px;
      color: transparent;
      background: $accent_color;
      border-radius: 50%;
      display: inline-block;
      vertical-align: text-top;
    }
  }
  &__input,
  &__textarea {
    width: 100%;
    height: 2.25rem;
    font-size: 0.75rem;
    line-height: 0.9375rem;
    color: $app_color;
    background: $app_bg;
    box-shadow: $input_shadow;
    border-color: transparent;
    border-radius: 4px;
    padding: 0.625rem 1rem;
    &::placeholder {
      font-family: Source Sans Pro;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 15px;
      color: $disabled_color;
    }
    &.invalid {
      border: 1px solid $accent_color;
    }
  }
  &__textarea {
    height: 6.75rem;
  }
  &__warning {
    visibility: visible;
    margin-top: 0.25rem;
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 400;
    font-size: 0.5rem;
    line-height: 0.625rem;
    letter-spacing: -0.02em;
    color: $accent_color;
    transition: all 0.3s;
  }
  &__button {
    width: 100%;
    height: 2.25rem;
    margin-top: 1.5rem;
    padding: 0.625rem;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 0.75rem;
    line-height: 0.9375rem;
    text-align: center;
    letter-spacing: -0.02em;
    border: transparent;
    border-radius: 10px;
    transition: all 0.3s;
    color: $disabled_color;
    background-color: $disabled_bg;
    cursor: default;
    &.success {
      color: $success_color;
      background-color: $success_bg;
      cursor: pointer;
      &:hover,
      &:active,
      &:focus {
        transform: scale(0.9);
      }
    }
  }
  &__success {
    color: $success_bg;
  }
}
</style>
