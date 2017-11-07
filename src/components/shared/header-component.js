export default {
  data () {
    return {
      scrollPosition: null,
      currentComponent: '',
      switchLanguage: 'en'
    }
  },
  // 為了加上 header 陰影花了快一小時 囧
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.updateScroll)
  },
  methods: {
    changeLanguage(lang) {
      this.switchLanguage = lang
      // 設定語系
      // 花了兩天找文件終於找到惹
      // https://kazupon.github.io/vue-i18n/en/sfc.html
      this.$i18n.locale = lang
      this.currentComponent = this.$route.path.split("/")[2]
      // console.log(lang)
      // console.log(this.$route.path.split("/")[2])
      // console.log(this.$route.path)
      // console.log("currentLanguage: " + this.switchLanguage)
      // console.log("currentComponent: " + this.currentComponent)
    },
    updateScroll() {
      this.scrollPosition = window.scrollY
      // console.log(this.scrollPosition)
      if (this.scrollPosition > 100) {
        // console.log('> 100!')
        $('#app .box').addClass('scrollActive')
        $('#app .box').removeClass('scrollInActive')
      } else {
        $('#app .box').removeClass('scrollActive')
        $('#app .box').addClass('scrollInActive')
      }
    }
  }
}