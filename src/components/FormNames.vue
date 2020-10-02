<template>
  <div>
    <FormWithTimeRow
      v-for="(form, formIndex) in schoolTimetable.forms"
      :key="formIndex"
      :form="form"
      :indent="getIndent(formIndex)"
      :isEditable="globalTimetableIsEditable"
    >
    </FormWithTimeRow>
    <AddForm />
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex'
import FormWithTimeRow from '@/components/FormWithTimeRow.vue'
import AddForm from '@/components/AddForm.vue'

export default {
  components: {
    FormWithTimeRow,
    AddForm
  },
  computed: {
    ...mapState(['globalTimetableIsEditable', 'schoolTimetable'])
<<<<<<< HEAD
  },
  methods: {
    getIndent(formIndex: number): number {
      let indent = 0
      indent = (formIndex % 10) * 9
      return indent
    }
=======
>>>>>>> 294a44ec06b54634eaedd91665f3465d7263cefb
}
</script>

<style scoped>
input {
  @apply rounded-full;
  margin-left: auto;
}
</style>
