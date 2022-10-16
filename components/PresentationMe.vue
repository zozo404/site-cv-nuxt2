<template>
  <div>
    <div class="flex flex-col items-center">
      <Logo />
      <p class="text-center mt-2 w-1/2 text-lg pb-4">
        Passionné de développement, des nouvelles technologies, de cryptomonnaie et bien plus encore, je suis actuellement libre pour tout contrat afin de partager mes compétences et ma curiosité.
      </p>
    </div>
    <div class="flex flex-col items-center gap-5 lg:flex-row lg:justify-center">
      <a
        v-for="btn in button.link"
        :key="btn.name"
        :href="btn.href"
        target="_blank"
        rel="noopener"
        class="duration-150 border-2 border-orange-400 border-opacity-0 hover:border-2 hover:border-opacity-100 rounded-full py-3 px-5"
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
            href: '/CV-Enzo-Cuny.pdf'
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
