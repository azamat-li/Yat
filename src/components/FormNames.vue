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
    <div class="m-2 w-full flex">
      <input
        class="bg-transparent p-1 mx-4 w-40 "
        type="text"
        placeholder="+ Добавьте Класс"
      />
    </div>
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

<style scoped>
input {
  @apply rounded-full;
  margin-left: auto;
}
</style>
