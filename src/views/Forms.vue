<template>
  <div class=" top-0  bg-white text-black">
    <Form
      v-for="(form, formIndex) of forms"
      :formProp="form"
      :key="formIndex"
      :form="form"
      class="w-full h-full"
    >
    </Form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Form from '@/views/Form.vue'

export default {
  components: {
    Form
  },
  computed: {
    ...mapState(['schoolTimetable']),
    forms() {
      return this.schoolTimetable.forms
    }
  }
}
</script>
<style lang="css" scoped></style>
