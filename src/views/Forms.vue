<template>
  <div class="absolute top-0 stretch-to-page-height">
    <Form
      v-for="(form, formIndex) in forms"
      :key="formIndex"
      :form="form"
      :isEditableButtonEnabled="false"
    ></Form>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['schooltimetable']),
    forms() {
      return this.schooltimetable.forms
    }
  }
}
</script>
<style lang="css" scoped></style>
