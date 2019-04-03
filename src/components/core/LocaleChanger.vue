<template>
  <v-flex xs12 pt-4 text-xs-center>
    <a class="black--text" @click="switchLocale('en')">English</a> /
    <a class="black--text" @click="switchLocale('es')">Español</a>
  </v-flex>
</template>

<script>
export default {
  name: 'LocaleChanger',
  methods: {
    switchLocale(lang) {
      this.$store.dispatch('setLocale', lang)
    }
  },
  computed: {
    displayLocale() {
      return this.$i18n.locale
    }
  }
}
</script>
