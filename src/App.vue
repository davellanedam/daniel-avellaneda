<template>
  <v-app>
    <Toolbar />
    <transition name="fade" mode="out-in">
      <v-content v-if="changedLocale">
        <Content />
      </v-content>
    </transition>
    <Footer />
  </v-app>
</template>

<script>
import Footer from '@/components/core/Footer.vue'
import Toolbar from '@/components/core/Toolbar.vue'
import Content from '@/components/core/Content.vue'
import { page } from 'vue-analytics'

export default {
  name: 'App',
  metaInfo() {
    return {
      title: this.$store.getters.appTitle,
      htmlAttrs: {
        lang: this.$i18n.locale
      },
      meta: [
        { name: 'msapplication-TileColor', content: '#ffc40d' },
        { name: 'theme-color', content: '#ffffff' },
        {
          name: 'apple-mobile-web-app-title',
          content: this.$store.getters.appTitle
        },
        { name: 'application-name', content: this.$store.getters.appTitle }
      ],
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png'
        },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', color: '#5bbad5', href: '/safari-pinned-tab.svg' },
        { rel: 'favicon', href: '/favicon.ico' }
      ]
    }
  },
  components: {
    Footer,
    Toolbar,
    Content
  },
  methods: {
    track() {
      page('/')
    }
  },
  created() {
    this.track()
  },
  computed: {
    changedLocale() {
      return this.$store.getters.changedLocale
    }
  }
}
</script>

<style>
@font-face {
  font-family: 'domine-bold';
  src: url('assets/fonts/domine/domine-bold-webfont.woff2') format('woff2'),
    url('assets/fonts/domine/domine-bold-webfont.woff') format('woff');
  font-style: normal;
  font-weight: normal;
}
@font-face {
  font-family: 'metropolis-regular';
  src: url('assets/fonts/metropolis/metropolis-regular-webfont.woff2')
      format('woff2'),
    url('assets/fonts/metropolis/metropolis-regular-webfont.woff')
      format('woff');
  font-style: normal;
  font-weight: normal;
}
body {
  font-family: 'metropolis-regular', sans-serif;
}
a {
  color: #546e7a !important;
  text-decoration: none;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
