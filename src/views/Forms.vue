<template>
  <div>
    <FormComponent
      v-for="(form, formIndex) in forms"
      :key="formIndex"
      :form="form"
      :isEditableButtonEnabled="false"
    ></FormComponent>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import FormComponent from '../components/FormComponent'

export default {
  components: {
    FormComponent
  },
  computed: {
    ...mapState(['schooltimetable']),
    forms() {
      return this.schooltimetable.forms
    }
  }
}
</script>

<style lang="scss" scoped></style>
