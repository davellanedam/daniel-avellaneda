<template>
  <section id="about" class="hide-overflow">
    <v-layout>
      <v-flex xs12 v-show="$vuetify.breakpoint.smAndDown">
        <v-img :src="require('@/assets/about-me.jpg')" height="100%" />
      </v-flex>
    </v-layout>
    <v-layout light-blue lighten-2 white--text>
      <v-flex xs12 md6 pa-5>
        <Heading v-html="$t('about_me.TITLE')" />
        <ContentText v-html="$t('about_me.PARAGRAPH_1')" />
        <ContentText v-html="$t('about_me.PARAGRAPH_2')" />
        <ContentText v-html="$t('about_me.PARAGRAPH_3')" />
        <v-layout
          v-for="(skill, i) in skills"
          :key="i"
          style="color: #69A1BB;"
          wrap
          data-aos="fade-up"
          data-aos-duration="700"
          white--text
          d-inline
        >
          <v-chip color="white">{{ skill.name }}</v-chip>
        </v-layout>
      </v-flex>
      <v-flex md6>
        <v-img :src="require('@/assets/about-me.jpg')" height="100%" />
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
export default {
  name: 'AboutMe',
  data: () => ({
    skills: [
      {
        name: 'HTML'
      },
      {
        name: 'CSS'
      },
      {
        name: 'JavaScript'
      },
      {
        name: 'NodeJS'
      },
      {
        name: 'VueJS'
      },
      {
        name: 'PhalconPHP'
      },
      {
        name: 'PHP'
      },
      {
        name: 'MongoDB'
      },
      {
        name: 'MySQL'
      },
      {
        name: 'Redis'
      }
    ]
  })
}
</script>
