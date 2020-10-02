<template>
  <div>
    <FormWithTimeRow
      v-for="(form, formIndex) in schooltimetable.forms"
      :key="formIndex"
      :form="form"
      :indent="formIndex * 5"
      :isEditable="globalTimetableIsEditable"
    >
    </FormWithTimeRow>
    <AddForm />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import FormWithTimeRow from '@/components/FormWithTimeRow.vue'
import AddForm from '@/components/AddForm.vue'

export default {
  components: {
    FormWithTimeRow,
    AddForm
  },
  computed: {
    ...mapState(['globalTimetableIsEditable', 'schooltimetable'])
  }
}
</script>

<style scoped>
input {
  @apply rounded-full;
  margin-left: auto;
}
</style>
