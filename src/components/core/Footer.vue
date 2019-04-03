<template>
  <v-footer height="88" class="justify-center">
    <SocialMedia top />
  </v-footer>
</template>

<script>
import SocialMedia from '@/components/SocialMedia.vue'

export default {
  name: 'Footer',
  components: {
    SocialMedia
  }
}
</script>
