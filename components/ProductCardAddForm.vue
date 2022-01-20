<template>
  <form
    id="add-form"
    class="add-form"
    :tabindex="0"
    action=""
    method="post"
    @submit.prevent="onSubmit"
    @submit="checkForm"
  >
    <div class="add-form__block">
      <label for="title" class="add-form__label required"
        >Наименование товара</label
      >
      <input
        id="title"
        v-model="title"
        type="text"
        name="title"
        class="add-form__input valid"
        placeholder="Введите наименование товара"
      />
      <span v-if="errors.includes('title')" class="add-form__warning" >Поле является обязательным</span>
    </div>
    <div class="add-form__block">
      <label for="description" class="add-form__label">Описание товара</label>
      <textarea
        id="description"
        v-model="description"
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
        v-model="link"
        type="url"
        name="link"
        class="add-form__input valid"
        placeholder="Введите ссылку"
      />
      <span v-if="errors.includes('link')" class="add-form__warning" >Поле является обязательным</span>
    </div>
    <div class="add-form__block">
      <label for="price" class="add-form__label required">Цена товара</label>
      <input
        id="price"
        v-model="price"
        type="number"
        name="price"
        class="add-form__input valid"
        placeholder="Введите цену"
      />
      <span v-if="errors.includes('price')" class="add-form__warning" >Поле является обязательным</span>
    </div>
    <button type="submit" class="add-form__button disabled">
      Добавить товар
    </button>
    <p v-if="errors.length">
      <b>Пожалуйста исправьте указанные ошибки:</b>
      <ul>
        <li v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
    </p>
  </form>
</template>

<script>
export default {
  name: 'ProductCardAddForm',
  data() {
    return {
      card: {},
      errors: [],
      title: '',
      description: '',
      link: '',
      price: '',
    }
  },
  watch: {

  },
  methods: {
    checkForm(e) {
      e.preventDefault()
      this.errors = []
      if (this.title && this.link && this.price) {
        return true
      }
      if (!this.title.trim()) {
        document.getElementById('title').classList.add('invalid');
        this.errors.push('title');
      }
      if (!this.link.trim()) {
        document.getElementById('link').classList.add('invalid');
        this.errors.push('link');
      }
      if (!this.price.trim()) {
        document.getElementById('price').classList.add('invalid');
        this.errors.push('price');
      }
      return this.errors
    },
    onSubmit() {
      // if (this.checkForm()) {
      //     const newUser = {
      //       id: this.users.length + 1,
      //       first_name: this.first_name,
      //       last_name: this.first_name,
      //       email: this.email,
      //     }
      //     this.$emit('addUser', newUser)
      //     this.first_name = ''
      //     this.last_name = ''
      //     this.email = ''
      // }
    },
  },
}
</script>

<style lang="scss" scoped>
.add-form {
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
      /* & + .add-form__warning {
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
      } */
    }
    /* &.valid + .add-form__warning {
      visibility: hidden;
    } */
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
    &.disabled {
      color: $disabled_color;
      background-color: $disabled_bg;
      cursor: default;
    }
  }
}
</style>
