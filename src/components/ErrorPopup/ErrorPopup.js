import OverLayComponent from '@/components/OverLay'
import Transition from '@/components/Transition'

export default {
  name: 'error-popup',
  data () {
    return {}
  },
  props: {
    isErrorPopupVisible: {
      required: false
    },
    errorList: {
      required: false
    }
  },
  components: {
    'overlay-component': OverLayComponent,
    'transition-component': Transition
  },
  methods: {
    disablePopup () {
      this.$store.dispatch('removeErrorPopup',
        {
          isErrorPopupVisible: false,
          errorList: []
        }
      )
    }
  }
}
