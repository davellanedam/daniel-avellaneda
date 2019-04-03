<template>
  <div>
    <Welcome />
    <AboutMe />
    <OpenSource />
    <Services />
  </div>
</template>

<script>
import Welcome from '@/components/Welcome.vue'
import AboutMe from '@/components/AboutMe.vue'
import OpenSource from '@/components/OpenSource.vue'
import Services from '@/components/Services.vue'

export default {
  name: 'Content',
  components: {
    Welcome,
    AboutMe,
    OpenSource,
    Services
  }
}
</script>
