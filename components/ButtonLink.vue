<template>
  <div class="flex justify-center fade-scroll" :class="{ visible: isVisible }">
    <!-- button that links to all my repositories on github -->
    <p class="shadow-md duration-200 hover:scale-105 hover:shadow-xl">
      <a href="https://github.com/zozo404?tab=repositories" rel="noopener" target="_blank" class="bg-cyan-400 p-2 rounded-md text-black ">
        Voir plus
      </a>
    </p>
  </div>
</template>
<script>
import scrollFadeMixin from '~/mixins/scrollFadeMixin'

export default {
  mixins: [scrollFadeMixin]
}
</script>
