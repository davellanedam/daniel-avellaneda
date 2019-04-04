<template>
  <section id="welcome" class="hide-overflow">
    <v-layout wrap>
      <v-flex xs12 md6>
        <v-img :src="require('@/assets/daniel.jpg')" height="100%" />
      </v-flex>
      <v-flex xs12 md6>
        <v-layout align-center justify-center fill-height wrap>
          <LocaleChanger />
          <v-flex xs12 pl-5 pr-5 pt-0 pb-5>
            <Logo class="mt-2" />
            <Subheading>/* DANIEL AVELLANEDA */</Subheading>
            <Heading v-html="$t('welcome.TITLE')" />
            <ContentText v-html="$t('welcome.PARAGRAPH_1')" />
            <ContentText v-html="$t('welcome.PARAGRAPH_2')" />
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
import LocaleChanger from '@/components/core/LocaleChanger.vue'

export default {
  name: 'Welcome',
  components: { LocaleChanger }
}
</script>

<style>
.myPicture {
  font-family: 'metropolis-regular', sans-serif;
  font-size: 1.5em;
  background: url('../assets/daniel.jpg');
  height: 100%;
  position: relative;
}
.overlay {
  position: absolute;
  display: block;
  background: #000;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  padding: 20px 20px;
}
</style>
