<template>
  <div :id="id" class="bg-zinc-900 flex flex-col items-center mt-7 fade-scroll" :class="{ visible: isVisible }">
    <h2 class="sm:text-4xl lg:text-5xl text-3xl font-light text-white text-center px-4 pt-6 ">
      <span class="">{{ title }}</span>
    </h2>
    <div v-if="subtitle" class="flex w-3/4 md:w-1/3 justify-center items-center py-8 border-2 border-orange-400 rounded-full mb-4">
      <p class="sm:text-4xl md:text-3xl lg:text-3xl text-3xl font-light text-gray-300 text-center">
        {{ subtitle }}
      </p>
    </div>
  </div>
</template>

<script>
import scrollFadeMixin from '~/mixins/scrollFadeMixin'

export default {
  name: 'TitlesApp',
  mixins: [scrollFadeMixin],
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    }
  }
}
</script>
