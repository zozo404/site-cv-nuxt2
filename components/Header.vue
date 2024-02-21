<template>
  <header class="bg-zinc-900 lg:h-40 w-full z-20 sticky top-0 fade-scroll" :class="{ visible: isVisible }">
    <nav
      class="2lg:max-h-40 max-h-20 SamsungGA425G:max-h-24 w-full py-4 2lg:py-6 grid grid-cols-2 grid-rows-1 2lg:grid-cols-3 items-center justify-between 2lg:border-none bg-zinc-900"
      aria-label="Top"
    >
      <!-- logo -->
      <nuxt-link to="/" class="flex justify-center 2lg:col-span-1 h-full">
        <span class="sr-only">Logo</span>
        <!-- mettre img -->
        <nuxt-img
          provider="sanity"
          :src="Logo.imageId.asset._ref"
          alt="logo"
          class="h-full"
          sizes="xs:100vw"
        />
      </nuxt-link>
      <div class="text-right pr-8 2lg:hidden flex justify-end cursor-pointer " @click="toggle">
        <i class="fas fa-bars h-8 w-8" />
      </div>
      <!-- navigation -->
      <div
        class="hidden col-span-2 2lg:col-span-1 2lg:col-start-2 2lg:row-start-1 2lg:flex flex-row gap-2 2lg:gap-[0.4rem] xl:gap-4 items-center"
      >
        <div v-for="lien in liens" :key="lien.texte" class="mb-4 py-4 flex space-x-6">
          <a
            key="Index"
            :href="lien.lien"
            class="text-base lg:text-xl 2xl:text-2xl font-medium text-gray-300 hover:text-indigo-50"
            @click="toggle"
          >
            {{ lien.texte }}
          </a>
        </div>
      </div>
      <!-- fin nav fermée -->
    </nav>
    <!-- nav ouverte -->
    <nav :class="{hidden:isActive}" class="2lg:hidden w-full absolute top-0 h-screen z-40 bg-zinc-900 grid grid-cols-2 grid-rows-6 ">
      <div class="grid grid-cols-2 grid-rows-1 col-span-2  my-4 h-12 SamsungGA425G:h-16 justify-items-center w-full">
        <!-- logo -->
        <nuxt-link to="/" class="flex justify-center lg:col-span-1 h-full ">
          <span class="sr-only">Logo</span>
          <!-- mettre img -->
          <nuxt-img
            provider="sanity"
            :src="Logo.imageId.asset._ref"
            alt="logo"
            class="h-full"
            sizes="xs:100vw"
          />
        </nuxt-link>
        <!-- hamburger icon -->
        <div class="w-full h-full pr-8 2lg:hidden flex justify-end cursor-pointer" @click="toggle">
          <i class="fas fa-xmark h-10 w-8 z-50 place-self-center" />
        </div>
      </div>
      <!-- liens -->
      <div v-for="lien in liens" :key="lien.texte" class="mb-4 py-4 flex flex-col items-center">
        <nuxt-link
          key="Index"
          :to="lien.lien"
          class="text-2xl font-medium text-gray-300 hover:text-indigo-50"
          @click.native="toggle"
        >
          {{ lien.texte }}
        </nuxt-link>
      </div>
      <!--  -->
      <!-- bouton réserver -->
    </nav>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import scrollFadeMixin from '~/mixins/scrollFadeMixin'

export default {
  name: 'HeaderApp',
  mixins: [scrollFadeMixin],
  data () {
    return {
      isActive: true,
      liens: [
        {
          texte: 'Accueil',
          lien: '/'
        },
        {
          texte: 'Présentation',
          lien: '/#presentation'
        },
        {
          texte: 'Compétences',
          lien: '/#competences'
        },
        {
          texte: 'Parcours',
          lien: '/#parcours'
        },
        {
          texte: 'Expériences',
          lien: '/#experiences'
        },
        {
          texte: 'Portfolio',
          lien: '/#portfolio'
        },
        {
          texte: 'Contact',
          lien: '/#contact'
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['getPages']),
    Logo () {
      return this.getPages.find(el => el.name === 'Logo')
    }
  },
  methods: {
    toggle () {
      this.isActive = !this.isActive
    }
  }
}
</script>
