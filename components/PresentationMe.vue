<template>
  <div class="fade-scroll" :class="{ visible: isVisible }">
    <!-- displays a photo of me that is imported by adding a description and the buttons to their respective link -->
    <div class="flex flex-col items-center">
      <Logo />
      <p class="text-center mt-2 w-1/2 text-lg pb-4 font-comfortaa">
        👋, Je suis Enzo 👨‍💻. Passionné de développement web mais également le réseau, j’ai mis ma curiosité et mes connaissances dans ce domaine. <span class="text-orange-500">
          je suis actuellement dans un bts en alternance au sein du groupe Elsan
        </span>
        pour mon BTS SIO SISR.
      </p>
    </div>
    <div class="flex flex-col items-center gap-5 lg:flex-row lg:justify-center">
      <!-- to display the buttons without repeating too much, we declare a loop with a "v-for", in which we bind the data that is in the script -->
      <a
        v-for="btn in button.link"
        :key="btn.name"
        :href="btn.href"
        target="_blank"
        rel="noopener"
        class="duration-150 border-2 border-orange-400 border-opacity-50 hover:border-2 hover:border-opacity-100 rounded-full py-3 px-5"
      >{{ btn.name }}</a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import scrollFadeMixin from '~/mixins/scrollFadeMixin'

export default {
  mixins: [scrollFadeMixin],
  data () {
    return {
      button: {
        link: [
          {
            name: 'Télécharger CV',
            href: '/CV-CUNY-Enzo–BTS-SIO-SISR.pdf'
          },
          {
            name: 'Mon Github',
            href: 'https://github.com/zozo404'
          },
          {
            name: 'Mon LinkedIn',
            href: 'https://www.linkedin.com/in/enzo-cuny/'
          }
        ]

      }
    }
  },
  computed: {
    ...mapGetters(['getPages'])
  }
}
</script>

<style>

</style>
