<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="selection:bg-cyan-500 selection:text-black">
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>
<script>
export default {
  name: 'DefaultLayout'
}
</script>
<style>
html{
  font-family: 'Comfortaa';
}
</style>
