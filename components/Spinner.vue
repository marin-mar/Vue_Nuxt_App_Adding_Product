<template>
  <div class="spinner-wrapper">
    <div class="spinner"></div>
  </div>
</template>

<script>
export default {
  name: 'SpinnerPreloader',
};
</script>

<style lang="scss" scoped>
.spinner {
  display: inline-block;
  width: 80px;
  height: 80px;
  &:after {
    content: ' ';
    display: block;
    width: 4rem;
    height: 4rem;
    margin: 0.5rem;
    border-radius: 50%;
    border: 6px solid $success_bg;
    border-color: $success_bg transparent $success_bg transparent;
    animation: spinner 1.2s linear infinite;
  }
  &-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: $app_bg;
    z-index: 1;
  }
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
