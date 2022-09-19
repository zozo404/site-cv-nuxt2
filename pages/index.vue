<template>
  <div>
    <LandingImage />
    <Tarif />
    <Services />
    <Titles :id="'escape'" class="scroll-mt-40" title="ESCAPE GAME VR" subtitle="UBISOFT" />
    <Card :games="Ubisoft" />
    <Titles :id="'arvi'" title="ESCAPE GAME VR (EXCLU)" subtitle="ARVI VR" />
    <Card :games="Arvi" />
    <Titles :id="'arcade'" class="scroll-mt-40" title="ARCADE VR" subtitle="WANADEV" />
    <Card :games="Wanadev" />
    <Titles :id="'synthesys'" subtitle="SYNTHESYS" />
    <Card :games="Synthesys" />
    <Titles :id="'ldlc'" subtitle="LDLC VR STUDIO" />
    <Card :games="Ldlc" />
    <Titles subtitle="PARTENAIRES" />
    <EditorCard :editors="getEditors" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'IndexPage',
  computed: {
    ...mapGetters(['getGames', 'getEditors']),
    Ubisoft () {
      return this.getGames.filter(el => el.editor.name === 'Ubisoft')
    },
    Arvi () {
      return this.getGames.filter(el => el.editor.name === 'Arvi')
    },
    Wanadev () {
      return this.getGames.filter(el => el.editor.name === 'Wanadev')
    },
    Synthesys () {
      return this.getGames.filter(el => el.editor.name === 'Synthesys')
    },
    Ldlc () {
      return this.getGames.filter(el => el.editor.name === 'LDLC Studio VR')
    }
  }

}
</script>
