<template>
  <div v-if="portfolio">
    <div class="flex flex-col items-center mt-10 gap-4 fade-scroll" :class="{ visible: isVisible }">
      <div class="cursor-pointer" @click="goBack">
        <h1 class="pl-2 py-3">
          <i class="fa-solid fa-arrow-left" />
          Retour
        </h1>
      </div>
      <Titles :title="portfolio.name" />
      <nuxt-img
        provider="sanity"
        :src="portfolio.imageUrl.asset._ref"
        :alt="portfolio.imageUrl.alt"
        placeholder
        class="w-full h-full sm:w-1/2 rounded-md border-2 border-orange-600"
      />
      <div class="mt-4 px-5 flex flex-col text-center w-4/5 lg:w-1/2">
        <div class="flex justify-center space-x-4">
          Difficulté du projet:
          <span v-if="portfolio.difficulty == 'Simple'" class="inline-flex items-center rounded-full bg-green-100 px-3 py-0.5 text-sm font-medium text-green-800 ml-1">{{ portfolio.difficulty }}</span>
          <span v-if="portfolio.difficulty == 'Moyen'" class="inline-flex items-center rounded-full bg-yellow-100 px-3 py-0.5 text-sm font-medium text-yellow-800 ml-1">{{ portfolio.difficulty }}</span>
          <span v-if="portfolio.difficulty == 'Dur'" class="inline-flex items-center rounded-full bg-red-100 px-3 py-0.5 text-sm font-medium text-red-800 ml-1">{{ portfolio.difficulty }}</span>
        </div>
        <p class="my-8">
          {{ portfolio.text }}
        </p>
        <br>
        <div class="md:flex justify-around flex-wrap">
          <p>
            Vous pouvez accéder au github du projet <br>
            <a :href="portfolio.link" target="_blank" rel="noopener" class="text-orange-400 text-lg">Ici</a>
          </p>
          <p v-if="portfolio.url">
            Ou directement au projet <br>
            <a :href="portfolio.url" target="_blank" rel="noopener" class="text-orange-400 text-lg">{{ portfolio.name }}</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import scrollFadeMixin from '~/mixins/scrollFadeMixin'

export default {
  name: 'SlugPage',
  mixins: [scrollFadeMixin],
  computed: {
    ...mapGetters(['getPortfolio']),
    routeSlug () {
      return this.$route.params.slug
    },
    portfolio () {
      return this.getPortfolio.find(el => el.slug.current === this.routeSlug)
    }
  },
  // Ajoutez cette méthode pour la redirection vers la page 404
  beforeMount () {
    if (!this.portfolio) {
      this.$router.push('../layouts/error')
    }
  },
  methods: {
    goBack () {
      this.$router.back()
    }
  }
}
</script>
