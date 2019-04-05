<template>
  <div>
    <v-toolbar v-observe-visibility="visibilityChanged" flat absolute app>
      <v-avatar tile>
        <img :src="require('@/assets/logo.png')" alt="Daniel Avellaneda" />
      </v-avatar>
      <v-spacer />
      <SocialMedia bottom customClass="ma-2" />
    </v-toolbar>
    <div v-show="show">
      <span>
        <v-fab-transition>
          <v-btn
            color="grey darken-1"
            fab
            dark
            small
            fixed
            top
            left
            @click="sidebar = !sidebar"
          >
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </v-fab-transition>
      </span>
      <v-navigation-drawer
        v-model="sidebar"
        app
        disable-resize-watcher
        temporary
        width="150"
      >
        <v-list>
          <v-list-tile>
            <v-list-tile-content>
              <v-avatar tile>
                <img
                  :src="require('@/assets/logo.png')"
                  alt="Daniel Avellaneda"
                />
              </v-avatar>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon @click.stop="sidebar = !sidebar">
                <v-icon>mdi-menu-left</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
          <v-list-tile @click="scrollTo('#welcome')" class="mt-3">
            <v-list-tile-content>{{ $t('welcome.HOME') }}</v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="scrollTo('#about')">
            <v-list-tile-content>{{
              $t('about_me.TITLE')
            }}</v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="scrollTo('#open-source')">
            <v-list-tile-content>
              {{ $t('open_source.TITLE') }}
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="scrollTo('#services')">
            <v-list-tile-content>
              {{ $t('services.TITLE') }}
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <div class="text-xs-center mt-2">
          <SocialMedia bottom small customClass="ma-0" />
        </div>
      </v-navigation-drawer>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SocialMedia from '@/components/SocialMedia.vue'

export default {
  name: 'Toolbar',
  components: {
    SocialMedia
  },
  data() {
    return {
      sidebar: false,
      show: false,
      isVisible: true
    }
  },
  computed: {
    ...mapGetters(['appTitle'])
  },
  methods: {
    visibilityChanged(isVisible) {
      this.show = isVisible ? false : true
    },
    scrollTo(anchor) {
      this.sidebar = false
      this.$scrollTo(anchor)
    }
  }
}
</script>
