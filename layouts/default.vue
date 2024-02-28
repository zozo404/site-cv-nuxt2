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
.fade-scroll {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}
.fade-scroll.visible {
  opacity: 1;
}
.flex-di-initial{
  flex-direction: initial;
}
</style>
