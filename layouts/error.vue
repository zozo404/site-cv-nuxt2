<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex items-center justify-center h-screen">
    <h1 v-if="error.statusCode === 404">
      <div
        class="text-center container mx-auto my-14 flex items-center justify-center md:my-24 lg:my"
      >
        <div class="text-center">
          <!-- animation -->
          <h1 class="text-6xl font-bold font-rubik-doodle-shadow">
            404
          </h1>
          <p class="text-xl font-semibold">
            Page not found
          </p>
          <p>
            The page you are looking for might be under construction or does not
            exist.
          </p>
          <a href="/" class="text-[#adff2f] text-2xl hover:underline mt-4 block">
            Go back home
          </a>
        </div>
      </div>
    </h1>
    <h1 v-else>
      <div
        class="text-center container mx-auto my-14 flex items-center justify-center md:my-24 lg:my"
      >
        <div class="text-center">
          <h1 class="text-6xl font-bold">
            An error occurred
          </h1>
          <p class="text-xl font-semibold">
            Page not found
          </p>
          <p class="mt-4">
            The page you are looking for might be under construction or does not
            exist.
          </p>
          <a href="/" class="text-[#adff2f] hover:underline mt-4 block">
            Go back home
          </a>
        </div>
      </div>
    </h1>
  </div>
</template>

<script>
export default {
  layout: 'error-layout',
  // eslint-disable-next-line vue/require-prop-types
  props: ['error'] // you can set a custom layout for the error page
}
</script>
