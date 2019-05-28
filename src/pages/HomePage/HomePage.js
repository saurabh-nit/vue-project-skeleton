export default {
  name: 'HomePage',
  created () {
    this.goToListingPage()
    console.log('THIS.STORE', this.$store)
  },
  methods: {
    goToListingPage () {
      console.log('*****', 'goToListingPage')
    }
  }
}
