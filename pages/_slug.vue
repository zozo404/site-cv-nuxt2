<template>
  <div>
    <div v-if="game" class="flex flex-col items-center mt-10 gap-4">
      <Titles :title="game.name" />
      <iframe
        class="w-5/6 h-96 xl:w-1/2 border-2 border-pink-500"
        :src="`https://www.youtube.com/embed/${game.youtube}`"
        title="YouTube video player"
        frameborder="0"
        allowfullscreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />

      <div class="px-5 text-centerw-1/2">
        <p>{{ game.players }} {{ game.difficulty }}</p>
        <br>
        <p>{{ game.text }}</p>
      </div>
    </div>
    <div v-if="service" class="flex flex-col items-center mt-10 gap-4">
      <nuxt-link class="font-light text-xl px-2 rounded-xl border border-transparent hover:border-pink-500" to="/reservation">
        Retour
      </nuxt-link>
      <Titles :title="service.name" />
      <div class="px-5 flex flex-wrap justify-center md:flex-col xl:flex-row md:items-center md:justify-around gap-4 w-full">
        <div class="flex flex-col items-center text-center lg:w-1/2 xl:w-auto">
          <nuxt-img
            provider="sanity"
            :src="service.imageUrl.asset._ref"
            placeholder
            class="h-52 w-full xl:w-auto lg:w-4/5 rounded-xl"
          />
          <p class="pt-3">
            {{ service.text }}
          </p>
        </div>
        <DatePicker />
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SlugPage',
  computed: {
    ...mapGetters(['getGames', 'getServices']),
    routeSlug () {
      return this.$route.params.slug
    },
    game () {
      return this.getGames.find(el => el.slug.current === this.routeSlug)
    },
    service () {
      return this.getServices.find(el => el.slug.current === this.routeSlug)
    }
  }
}

</script>
