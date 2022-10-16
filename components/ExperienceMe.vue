<template>
  <div class="flex flex-wrap justify-evenly my-5">
    <div v-for="exp in exps" :key="exp._id" class="flex w-4/5 md:w-auto">
      <div class="border border-1 border-orange-400 rounded-md text-center mb-3 w-full p-4">
        <p>{{ exp.year }}</p>
        <a class="flex justify-center" :href="exp.link" target="_blank" rel="noopener">
          <nuxt-img
            :src="exp.imageId.asset._ref"
            provider="sanity"
            placeholder
            class="w-12 py-2"
          />
        </a>
        <p>{{ exp.name }}</p>
        <p>{{ exp.theme }}</p>
        <p>{{ exp.locate }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExperienceMe',
  props: {
    exps: {
      default: null,
      type: Array
    }
  }
}
</script>
