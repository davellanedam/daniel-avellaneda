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
            <ContentText class="mb-5" v-html="$t('open_source.DESCRIPTION')" />
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
export default {
  name: 'OpenSource'
}
</script>
