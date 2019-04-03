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
        <ContentText class="mb-5" v-html="$t('about_me.DESCRIPTION')" />
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
        name: 'ExpressJS'
      },
      {
        name: 'JWT'
      },
      {
        name: 'ES6'
      },
      {
        name: 'VueJS'
      },
      {
        name: 'Vuex'
      },
      {
        name: 'Web Development'
      },
      {
        name: 'Testing'
      },
      {
        name: 'REST API'
      },
      {
        name: 'PhalconPHP'
      },
      {
        name: 'PHP'
      },
      {
        name: 'Git'
      },
      {
        name: 'LAMP'
      },
      {
        name: 'GruntJS'
      },
      {
        name: 'MongoDB'
      },
      {
        name: 'MySQL'
      },
      {
        name: 'Redis'
      },
      {
        name: 'jQuery'
      },
      {
        name: 'AJAX'
      },
      {
        name: 'JSON'
      },
      {
        name: 'MQTT'
      },
      {
        name: 'Microservices'
      },
      {
        name: 'Team Leadership'
      },
      {
        name: 'Docker'
      },
      {
        name: 'Web Services API'
      },
      {
        name: 'AWS'
      },
      {
        name: 'Auth0'
      },
      {
        name: 'macOS'
      },
      {
        name: 'Linux'
      },
      {
        name: 'Web Design'
      },
      {
        name: 'E-commerce'
      },
      {
        name: 'Bash'
      },
      {
        name: 'SEO'
      },
      {
        name: 'Bootstrap'
      },
      {
        name: 'SVN'
      },
      {
        name: 'LESS'
      },
      {
        name: 'Back-end web development'
      },
      {
        name: 'Networking'
      },
      {
        name: 'Databases'
      },
      {
        name: 'Web Applications'
      },
      {
        name: 'RESTful WebServices'
      },
      {
        name: 'Microsoft Office'
      },
      {
        name: 'Adobe Photoshop'
      }
    ]
  })
}
</script>
