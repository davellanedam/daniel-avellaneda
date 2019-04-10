<template>
  <component
    :is="tag"
    class="display-1 v-heading subheading"
    data-aos="fade-up"
    data-aos-duration="700"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'Subheading',
  props: {
    tag: {
      type: String,
      default: 'h2'
    }
  }
}
</script>

<style>
.subheading {
  font-family: 'metropolis-regular', sans-serif !important;
  font-weight: bold !important;
}
</style>
