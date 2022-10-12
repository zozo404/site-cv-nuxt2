<template>
  <div>
    <LandingImage />
    <DescriptionMe />
    <Titles :id="'presentation'" class="scroll-mt-40" subtitle="Présentation" />
    <Card :games="Ubisoft" />
    <Titles :id="'competences'" subtitle="Compétences" />
    <Card :games="Arvi" />
    <Titles :id="'parcours'" class="scroll-mt-40" subtitle="Parcours" />
    <Card :games="Wanadev" />
    <Titles :id="'experiences'" subtitle="Expériences" />
    <Card :games="Synthesys" />
    <Titles :id="'portfolio'" subtitle="Portfolio" />
    <Titles :id="'contact'" subtitle="Contact" />
    <Card :games="Ldlc" />
  </div>
</template>

<script>

export default {
  name: 'IndexPage'
}
</script>
