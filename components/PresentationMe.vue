<template>
  <div>
    <!-- displays a photo of me that is imported by adding a description and the buttons to their respective link -->
    <div class="flex flex-col items-center">
      <Logo />
      <p class="text-center mt-2 w-1/2 text-lg pb-4 font-comfortaa">
        👋, Je suis Enzo 👨‍💻. Passionné de développement web, des nouvelles technologies et bien plus encore, <span class="text-orange-500">
          je suis actuellement disponible pour toute mission, CDI ou CDD
        </span>
        afin de partager mes compétences et ma curiosité.
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
export default {
  data () {
    return {
      button: {
        link: [
          {
            name: 'Télécharger CV',
            href: '/CV-CUNY_Enzo.pdf'
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
