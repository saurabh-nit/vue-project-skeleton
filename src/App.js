import ErrorPopup from '@/components/ErrorPopup'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapGetters({
      errors: 'getErrorState'
    })
  },
  components: {
    'error-popup': ErrorPopup
  }
}
