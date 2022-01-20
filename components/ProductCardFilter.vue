<template>
  <!-- <ul class="filter">
    <li class="filter__option" data-option='all'>По умолчанию</li>
    <li class="filter__option" data-option='min'>По цене min (от min к max)</li>
    <li class="filter__option" data-option='max'>По цене max (от max к min)</li>
    <li class="filter__option" data-option='title'>По наименованию</li>
  </ul> -->
  <select id="filter" v-model="selected" name="filter" class="filter">
    <option class="filter__option" value="all" selected>По умолчанию</option>
    <option class="filter__option" value="min">По цене от min к max</option>
    <option class="filter__option" value="max">По цене от max к min</option>
    <option class="filter__option" value="title">По наименованию</option>
  </select>
</template>

<script>
export default {
  name: 'ProductCardFilter',
  data() {
    return {
      selected: 'all',
    }
  },
}
</script>

<style lang="scss" scoped>
.filter {
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
  &__option {
    padding: 0.625rem 1rem;
    color: $app_color;
  }
}
</style>
