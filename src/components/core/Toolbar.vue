<template>
  <v-toolbar flat absolute app>
    <v-avatar tile>
      <img :src="require('@/assets/logo.png')" alt="Daniel Avellaneda" />
    </v-avatar>
    <v-spacer />
    <SocialMedia bottom />
  </v-toolbar>
</template>

<script>
import SocialMedia from '@/components/SocialMedia.vue'

export default {
  name: 'Toolbar',
  components: {
    SocialMedia
  }
}
</script>
