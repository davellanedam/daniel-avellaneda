<template>
  <v-app>
    <Toolbar />
    <v-content>
      <Content />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Footer from '@/components/core/Footer.vue'
import Toolbar from '@/components/core/Toolbar.vue'
import Content from '@/components/core/Content.vue'

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
  }
}
</script>

<style>
@font-face {
  font-family: 'domine-regular';
  src: url('assets/fonts/domine/domine-regular-webfont.woff2') format('woff2'),
    url('assets/fonts/domine/domine-regular-webfont.woff') format('woff');
  font-style: normal;
  font-weight: normal;
}
@font-face {
  font-family: 'domine-bold';
  src: url('assets/fonts/domine/domine-bold-webfont.woff2') format('woff2'),
    url('assets/fonts/domine/domine-bold-webfont.woff') format('woff');
  font-style: normal;
  font-weight: normal;
}
@font-face {
  font-family: 'metropolis-black';
  src: url('assets/fonts/metropolis/metropolis-black-webfont.woff2')
      format('woff2'),
    url('assets/fonts/metropolis/metropolis-black-webfont.woff') format('woff');
  font-style: normal;
  font-weight: normal;
}
@font-face {
  font-family: 'metropolis-black-italic';
  src: url('assets/fonts/metropolis/metropolis-blackitalic-webfont.woff2')
      format('woff2'),
    url('assets/fonts/metropolis/metropolis-blackitalic-webfont.woff')
      format('woff');
  font-style: normal;
  font-weight: normal;
}
@font-face {
  font-family: 'metropolis-extrabold';
  src: url('assets/fonts/metropolis/metropolis-extrabold-webfont.woff2')
      format('woff2'),
    url('assets/fonts/metropolis/metropolis-extrabold-webfont.woff')
      format('woff');
  font-style: normal;
  font-weight: normal;
}
@font-face {
  font-family: 'metropolis-extrabold-italic';
  src: url('assets/fonts/metropolis/metropolis-extrabolditalic-webfont.woff2')
      format('woff2'),
    url('assets/fonts/metropolis/metropolis-extrabolditalic-webfont.woff')
      format('woff');
  font-style: normal;
  font-weight: normal;
}
@font-face {
  font-family: 'metropolis-bold';
  src: url('assets/fonts/metropolis/metropolis-bold-webfont.woff2')
      format('woff2'),
    url('assets/fonts/metropolis/metropolis-bold-webfont.woff') format('woff');
  font-style: normal;
  font-weight: normal;
}
@font-face {
  font-family: 'metropolis-bold-italic';
  src: url('assets/fonts/metropolis/metropolis-bolditalic-webfont.woff2')
      format('woff2'),
    url('assets/fonts/metropolis/metropolis-bolditalic-webfont.woff')
      format('woff');
  font-style: normal;
  font-weight: normal;
}
@font-face {
  font-family: 'metropolis-semibold';
  src: url('assets/fonts/metropolis/metropolis-semibold-webfont.woff2')
      format('woff2'),
    url('assets/fonts/metropolis/metropolis-semibold-webfont.woff')
      format('woff');
  font-style: normal;
  font-weight: normal;
}
@font-face {
  font-family: 'metropolis-semibold-italic';
  src: url('assets/fonts/metropolis/metropolis-semibolditalic-webfont.woff2')
      format('woff2'),
    url('assets/fonts/metropolis/metropolis-semibolditalic-webfont.woff')
      format('woff');
  font-style: normal;
  font-weight: normal;
}
@font-face {
  font-family: 'metropolis-medium';
  src: url('assets/fonts/metropolis/metropolis-medium-webfont.woff2')
      format('woff2'),
    url('assets/fonts/metropolis/metropolis-medium-webfont.woff') format('woff');
  font-style: normal;
  font-weight: normal;
}
@font-face {
  font-family: 'metropolis-medium-italic';
  src: url('assets/fonts/metropolis/metropolis-mediumitalic-webfont.woff2')
      format('woff2'),
    url('assets/fonts/metropolis/metropolis-mediumitalic-webfont.woff')
      format('woff');
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
@font-face {
  font-family: 'metropolis-italic';
  src: url('assets/fonts/metropolis/metropolis-regularitalic-webfont.woff2')
      format('woff2'),
    url('assets/fonts/metropolis/metropolis-regularitalic-webfont.woff')
      format('woff');
  font-style: normal;
  font-weight: normal;
}
@font-face {
  font-family: 'metropolis-light';
  src: url('assets/fonts/metropolis/metropolis-light-webfont.woff2')
      format('woff2'),
    url('assets/fonts/metropolis/metropolis-light-webfont.woff') format('woff');
  font-style: normal;
  font-weight: normal;
}
@font-face {
  font-family: 'metropolis-light-italic';
  src: url('assets/fonts/metropolis/metropolis-lightitalic-webfont.woff2')
      format('woff2'),
    url('assets/fonts/metropolis/metropolis-lightitalic-webfont.woff')
      format('woff');
  font-style: normal;
  font-weight: normal;
}
@font-face {
  font-family: 'metropolis-extralight';
  src: url('assets/fonts/metropolis/metropolis-extralight-webfont.woff2')
      format('woff2'),
    url('assets/fonts/metropolis/metropolis-extralight-webfont.woff')
      format('woff');
  font-style: normal;
  font-weight: normal;
}
@font-face {
  font-family: 'metropolis-extralight-italic';
  src: url('assets/fonts/metropolis/metropolis-extralightitalic-webfont.woff2')
      format('woff2'),
    url('assets/fonts/metropolis/metropolis-extralightitalic-webfont.woff')
      format('woff');
  font-style: normal;
  font-weight: normal;
}
@font-face {
  font-family: 'metropolis-thin';
  src: url('assets/fonts/metropolis/metropolis-thin-webfont.woff2')
      format('woff2'),
    url('assets/fonts/metropolis/metropolis-thin-webfont.woff') format('woff');
  font-style: normal;
  font-weight: normal;
}
@font-face {
  font-family: 'metropolis-thin-italic';
  src: url('assets/fonts/metropolis/metropolis-thinitalic-webfont.woff2')
      format('woff2'),
    url('assets/fonts/metropolis/metropolis-thinitalic-webfont.woff')
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
</style>
