<template>
  <div>
    <FormComponent :form="form" :isEditableButtonEnabled="true"></FormComponent>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import FormComponent from '../components/FormComponent'

export default {
  components: {
    FormComponent
  },
  computed: {
    ...mapGetters(['getFormById']),
    form() {
      return this.getFormById(this.$route.params.id)
    }
  }
}
</script>
