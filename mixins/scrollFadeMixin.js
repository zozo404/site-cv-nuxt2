// mixins/scrollFadeMixin.js
export default {
  data () {
    return {
      isVisible: false
    }
  },
  methods: {
    handleScroll () {
      const elementTop = this.$el.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      // Vérifier si l'élément est dans la vue
      // Modifier la valeur pour faire apparaître l'élément +/- vite
      this.isVisible = elementTop < windowHeight / 1.1
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll() // Appeler la fonction une fois au montage pour vérifier la visibilité initiale
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
