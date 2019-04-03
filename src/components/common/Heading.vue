<template>
  <component
    :is="tag"
    class="v-heading mb-3 font-weight-light"
    data-aos="fade-up"
    data-aos-duration="700"
    v-resize-text
  >
    <slot />
  </component>
</template>

<script>
import ResizeText from 'vue-resize-text'

export default {
  name: 'Heading',
  props: {
    tag: {
      type: String,
      default: 'h1'
    }
  },
  directives: {
    ResizeText
  }
}
</script>

<style>
.v-heading {
  font-size: 10px;
  font-family: 'domine-bold', sans-serif !important;
}
</style>
