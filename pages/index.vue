<template>
  <div>
    <DescriptionMe />
    <Titles :id="'presentation'" class="scroll-mt-40" subtitle="Présentation" />
    <PresentationMe />
    <Titles :id="'competences'" subtitle="Compétences" />
    <CompetencesMe :skills="Skills" />
    <Titles :id="'parcours'" class="scroll-mt-40" subtitle="Parcours" />
    <ParcoursMe :parcours="Parcours" />
    <Titles :id="'experiences'" subtitle="Expériences" />
    <Titles :id="'portfolio'" subtitle="Portfolio" />
    <Titles :id="'contact'" subtitle="Contact" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'IndexPage',
  computed: {
    ...mapGetters(['getSkills', 'getParcours']),
    Skills () {
      return this.getSkills
    },
    Parcours () {
      return this.getParcours
    }
  }
}
</script>
