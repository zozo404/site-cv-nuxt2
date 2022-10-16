<template>
  <div>
    <DescriptionMe />
    <Titles :id="'presentation'" class="scroll-mt-40" subtitle="Présentation" />
    <PresentationMe />
    <Titles :id="'competences'" subtitle="Compétences" />
    <CompetencesMe :skills="Skills" />
    <Titles :id="'parcours'" class="scroll-mt-40" subtitle="Parcours" />
    <ParcoursMe :parks="Parcours" />
    <Titles :id="'experiences'" subtitle="Expériences" />
    <ExperienceMe :exps="Stages" />
    <Titles :id="'portfolio'" subtitle="Portfolio" />
    <PortfolioCard :works="Portfolio" />
    <Titles :id="'contact'" subtitle="Contact" />
    <ContactMe />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'IndexPage',
  computed: {
    ...mapGetters(['getSkills', 'getStages', 'getPortfolio', 'getParcours']),
    Skills () {
      return this.getSkills
    },
    Stages () {
      return this.getStages
    },
    Portfolio () {
      return this.getPortfolio
    },
    Parcours () {
      return this.getParcours
    }
  }
}
</script>
