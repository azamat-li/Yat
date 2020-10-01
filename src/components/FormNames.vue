<template>
  <div>
    <FormWithTimeRow
      v-for="(form, formIndex) in schooltimetable.forms"
      :key="formIndex"
      :form="form"
      :indent="formIndex * 5"
      :isEditable="globalTimetableIsEditable"
    ></FormWithTimeRow>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import FormWithTimeRow from '@/components/FormWithTimeRow.vue'

export default {
  components: {
    FormWithTimeRow
  },
  computed: {
    ...mapState(['globalTimetableIsEditable', 'schooltimetable'])
  }
}
</script>

<style scoped></style>
