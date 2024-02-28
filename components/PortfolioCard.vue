<template>
  <div>
    <div class="flex flex-col md:flex-row md:flex-wrap justify-center 2lg:flex-di-initial place-self-auto gap-4 items-center p-10 fade-scroll" :class="{ visible: isVisible }">
      <!-- for loop to display some examples of my achievements, they each have a page for them, which gives the difficulty, the goal and the link of the project -->
      <div v-for="work in works" :key="work._id" class="flex flex-col items-center h-full w-full md:max-w-[48%] lg:max-w-[49%] 2lg:max-w-[32%] 2xl:max-w-[24%]  rounded-xl ">
        <nuxt-link :to="work.slug.current" class="max-w-sm overflow-hidden rounded-xl shadow-md duration-200 hover:scale-105 hover:shadow-xl w-full h-full border-2 border-orange-500">
          <div>
            <nuxt-img
              provider="sanity"
              :src="work.imageUrl.asset._ref"
              placeholder
              class="h-52 w-full"
              :alt="work.imageUrl.alt"
            />
            <div class="p-5">
              <p class="text-lg text-center mb-5 text-gray-300">
                {{ work.name }}
              </p>
              <button class="w-full rounded-md bg-black  py-2 text-gray-300 hover:bg-amber-600 hover:text-black hover:shadow-md duration-200">
                En savoir plus
              </button>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
    <ButtonLink />
  </div>
</template>
<script>
import scrollFadeMixin from '~/mixins/scrollFadeMixin'

export default {
  name: 'PortfolioCard',
  mixins: [scrollFadeMixin],
  props: {
    works: {
      default: null,
      type: Array
    }
  }
}
</script>
