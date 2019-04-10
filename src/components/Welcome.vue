<template>
  <section id="welcome" class="hide-overflow">
    <v-layout wrap>
      <v-flex xs12 md6 class="overlay-container">
        <v-img :src="require('@/assets/daniel.jpg')" height="100%" />
        <div
          class="overlay text-xs-center"
          v-resize-text="{
            ratio: 2.5,
            minFontSize: '8px',
            maxFontSize: '24px'
          }"
        >
          <div class="overlay-text">
            Daniel Avellaneda - {{ $t('welcome.FULL_STACK_WEB_DEVELOPER') }}
          </div>
        </div>
      </v-flex>
      <v-flex xs12 md6>
        <v-layout align-center justify-center fill-height wrap>
          <LocaleChanger />
          <v-flex xs12 pl-5 pr-5 pt-0 pb-5>
            <Logo class="mt-2" />
            <Subheading>DANIEL AVELLANEDA</Subheading>
            <Heading v-html="$t('welcome.TITLE')" />
            <ContentText v-html="$t('welcome.PARAGRAPH_1')" />
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
import LocaleChanger from '@/components/core/LocaleChanger.vue'
import ResizeText from 'vue-resize-text'

export default {
  name: 'Welcome',
  components: { LocaleChanger },
  directives: {
    ResizeText
  }
}
</script>

<style>
.overlay-container {
  position: relative;
}
.overlay-text {
  font-family: 'metropolis-regular', sans-serif;
  color: #fff !important;
}
.overlay {
  padding: 5px;
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: #000;
  opacity: 0.6;
}
</style>
