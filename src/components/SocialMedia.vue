<template>
  <div>
    <v-tooltip :bottom="bottom" :top="top" v-for="(item, i) in items" :key="i">
      <v-btn
        flat
        icon
        class="ma-2"
        color="grey darken-1"
        :href="item.link"
        target="_blank"
        :key="i"
        slot="activator"
      >
        <v-icon dark v-text="item.icon" />
      </v-btn>
      <span>{{ item.name }}</span>
    </v-tooltip>
  </div>
</template>

<script>
export default {
  name: 'SocialMedia',
  props: {
    bottom: Boolean,
    top: Boolean
  },
  data() {
    return {
      items: [
        {
          name: 'GitHub',
          icon: 'mdi-github-circle',
          link: 'https://www.github.com/davellanedam'
        },
        {
          name: 'LinkedIn',
          icon: 'mdi-linkedin',
          link: 'https://www.linkedin.com/in/daniel-avellaneda/'
        },
        {
          name: 'Twitter',
          icon: 'mdi-twitter',
          link: 'https://www.twitter.com/davellanedam'
        },
        {
          name: 'Email',
          icon: 'mdi-email',
          link: 'mailto:davellanedam@gmail.com'
        }
      ]
    }
  }
}
</script>
