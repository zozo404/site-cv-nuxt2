<template>
  <div>
    <LandingImage />
    <DescriptionMe />
    <Titles :id="'presentation'" class="scroll-mt-40" subtitle="Présentation" />
    <Titles :id="'competences'" subtitle="Compétences" />
    <Titles :id="'parcours'" class="scroll-mt-40" subtitle="Parcours" />
    <Titles :id="'experiences'" subtitle="Expériences" />
    <Titles :id="'portfolio'" subtitle="Portfolio" />
    <Titles :id="'contact'" subtitle="Contact" />
  </div>
</template>

<script>

export default {
  name: 'IndexPage'
}
</script>
