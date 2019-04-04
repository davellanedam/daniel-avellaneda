<template>
  <section id="services" class="hide-overflow">
    <v-layout>
      <v-flex xs12 v-show="$vuetify.breakpoint.smAndDown">
        <v-img :src="require('@/assets/services.jpg')" height="100%" />
      </v-flex>
    </v-layout>
    <v-layout orange lighten-1 white--text fill-height wrap>
      <v-flex xs12 md6 pa-5>
        <v-layout>
          <v-flex xs12>
            <Heading v-html="$t('services.TITLE')" />
            <ContentText class="mb-5" v-html="$t('services.DESCRIPTION')" />
          </v-flex>
        </v-layout>
        <v-layout align-center justify-center wrap>
          <v-flex
            v-for="(service, i) in services"
            :key="i"
            xs12
            sm6
            text-xs-center
            mb-3
          >
            <v-icon
              size="52"
              v-text="service.icon"
              data-aos="fade-up"
              data-aos-duration="700"
              color="white"
            />
            <ContentText>
              <div class="mb-2 service-heading" v-text="service.name" />
            </ContentText>
          </v-flex>
          <v-flex xs12 text-xs-center mb-3>
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=573162396392&text=daniel-avellaneda.com"
            >
              <v-icon
                size="52"
                data-aos="fade-up"
                data-aos-duration="700"
                color="white"
                >mdi-whatsapp</v-icon
              >
              <ContentText>
                <div
                  class="mb-2 service-heading"
                  v-html="$t('services.INTERESTED_CHAT_NOW')"
                />
              </ContentText>
            </a>
            <Logo class="mt-5" />
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex md6>
        <v-img :src="require('@/assets/services.jpg')" height="100%" />
      </v-flex>
    </v-layout>
  </section>
</template>
<script>
export default {
  name: 'Services',
  computed: {
    services() {
      return [
        {
          name: this.$t('services.WEB_DEVELOPMENT'),
          icon: 'mdi-settings-outline'
        },
        {
          name: this.$t('services.IT_CONSULTING'),
          icon: 'mdi-clipboard-text-outline'
        },
        {
          name: this.$t('services.APP_DESIGN'),
          icon: 'mdi-pencil-outline'
        },
        {
          name: this.$t('services.SUPPORT'),
          icon: 'mdi-account'
        }
      ]
    }
  }
}
</script>

<style>
.service-heading {
  font-family: 'domine-bold', sans-serif !important;
  font-size: 1.2em;
  color: #ffffff !important;
}
</style>
