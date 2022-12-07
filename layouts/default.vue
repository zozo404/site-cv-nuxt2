<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>
<script src="https://js.hcaptcha.com/1/api.js" async defer></script>
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
