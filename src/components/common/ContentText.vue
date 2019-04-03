<template>
  <p
    class="content font-weight-light"
    style="line-height: 1.7 !important;"
    data-aos="fade-up"
    data-aos-duration="700"
  >
    <slot />
  </p>
</template>

<script>
export default {
  name: 'ContentText'
}
</script>

<style>
.content {
  font-family: 'metropolis-regular', sans-serif;
  font-size: 1.3em;
}
</style>
