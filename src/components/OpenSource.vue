<template>
  <section id="open-source" class="hide-overflow">
    <v-layout>
      <v-flex xs12 v-show="$vuetify.breakpoint.smAndDown">
        <v-img :src="require('@/assets/open-source.jpg')" height="100%" />
      </v-flex>
    </v-layout>
    <v-layout light-green lighten-1 white--text wrap>
      <v-flex md6>
        <v-img :src="require('@/assets/open-source.jpg')" height="100%" />
      </v-flex>
      <v-flex xs12 md6>
        <v-layout align-center justify-center fill-height wrap>
          <v-flex xs12 pa-5>
            <Heading v-html="$t('open_source.TITLE')" />
            <ContentText v-html="$t('open_source.PARAGRAPH_1')" />
            <ContentText v-html="$t('open_source.PARAGRAPH_2')" />
            <ContentText v-html="$t('open_source.PARAGRAPH_3')" />
            <ContentText v-html="$t('open_source.PARAGRAPH_4')" />
            <ContentText>
              <h2>API (NodeJS, ExpressJS, MongoDB)</h2>
              <div v-show="apiStars != 0">
                <v-icon class="white--text">mdi-star</v-icon>
                {{ apiStars }} {{ $t('open_source.STARS_ON_GITHUB') }}
              </div>
              <div v-show="apiDownloads != 0">
                <v-icon class="white--text">mdi-cloud-download</v-icon>
                {{ apiDownloads }} {{ $t('open_source.DOWNLOADS_ON_NPM') }}
              </div>
              <div>
                <a
                  target="_blank"
                  href="https://github.com/davellanedam/node-express-mongodb-jwt-rest-api-skeleton"
                  >{{ $t('open_source.GITHUB_REPOSITORY') }}</a
                >
                /
                <a
                  target="_blank"
                  href="https://api-demo.daniel-avellaneda.com"
                  >{{ $t('open_source.LIVE_DEMO') }}</a
                >
              </div>
              <h2 class="mt-3">Frontend (VueJS)</h2>
              <div v-show="frontendStars != 0">
                <v-icon class="white--text">mdi-star</v-icon>
                {{ frontendStars }} {{ $t('open_source.STARS_ON_GITHUB') }}
              </div>
              <div v-show="frontendDownloads != 0">
                <v-icon class="white--text">mdi-cloud-download</v-icon>
                {{ frontendDownloads }} {{ $t('open_source.DOWNLOADS_ON_NPM') }}
              </div>
              <div>
                <a
                  target="_blank"
                  href="https://github.com/davellanedam/vue-skeleton-mvp"
                  >{{ $t('open_source.GITHUB_REPOSITORY') }}</a
                >
                /
                <a
                  target="_blank"
                  href="https://vue-demo.daniel-avellaneda.com"
                  >{{ $t('open_source.LIVE_DEMO') }}</a
                >
              </div>
            </ContentText>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'OpenSource',
  computed: {
    apiStars() {
      return this.$store.state.github.apiStars.toLocaleString(
        this.$store.getters.locale
      )
    },
    apiDownloads() {
      return this.$store.state.npm.apiDownloads.toLocaleString(
        this.$store.getters.locale
      )
    },
    frontendStars() {
      return this.$store.state.github.frontendStars.toLocaleString(
        this.$store.getters.locale
      )
    },
    frontendDownloads() {
      return this.$store.state.npm.frontendDownloads.toLocaleString(
        this.$store.getters.locale
      )
    }
  },
  methods: {
    ...mapActions([
      'getApiStargazers',
      'getApiDownloads',
      'getFrontendStargazers',
      'getFrontendDownloads'
    ])
  },
  async mounted() {
    try {
      await this.getApiStargazers()
      await this.getApiDownloads()
      await this.getFrontendStargazers()
      await this.getFrontendDownloads()
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      // console.error(error)
    }
  }
}
</script>
