<template>
  <!-- component which displays a button designating a scroll down -->
  <div class="border border-1 h-16 w-8 rounded-2xl flex flex-col items-center fade-scroll" :class="{ visible: isVisible }">
    <div class="border-4 w-1 rounded-full border-red-600 animate relative top-14" />
  </div>
</template>

<script>
import scrollFadeMixin from '~/mixins/scrollFadeMixin'

export default {
  mixins: [scrollFadeMixin]
}
</script>
