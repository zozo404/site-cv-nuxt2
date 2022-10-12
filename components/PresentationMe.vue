<template>
  <div>
    <div>
      <!-- <nuxt-img
          provider="sanity"
          :src="Logo.imageId.asset._ref"
          alt="logo vr café"
          class="h-full"
          sizes="xs:100vw"
        /> -->
      <p>
        Passionné de développement, des nouvelles technologies, de cryptomonnaie et bien plus encore, je suis actuellement libre pour tout contrat afin de partager mes compétences et ma curiosité.
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getPages']),
    Logo () {
      return this.getPages.find(el => el.name === 'Logo')
    }
  }
}
</script>

<style>

</style>
