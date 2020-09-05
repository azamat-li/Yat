<template>
  <div class="global-time-board bg-indigo-100 h-full w-full">
    <div>
      <div class="header p-2 w-1/3 bg-teal-200 rounded">
        Общее школьное время корпуса
      </div>
    </div>
    <FormWithTimeRow
      v-for="(form, formIndex) in schooltimetable.forms"
      :key="formIndex"
      :form="form"
      :indent="formIndex * 5"
      :isEditable="globalTimetableIsEditable"
    ></FormWithTimeRow>
    <div
      class="bg-indigo-100 absolute top-0 w-full h-full"
      v-if="isFormOpen"
      @click.self="close"
    >
      <router-view class="bg-teal-200" />
    </div>
    <ToggleEditability
      :isEditable="globalTimetableIsEditable"
      @toggle-editability="toggleEditability"
      class="toggleEditability"
    ></ToggleEditability>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import FormWithTimeRow from '../components/FormWithTimeRow'
import ToggleEditability from '../components/ToggleEditability'

export default {
  components: {
    FormWithTimeRow,
    ToggleEditability
  },
  computed: {
    ...mapState(['schooltimetable']),
    ...mapState(['globalTimetableIsEditable']),
    isFormOpen() {
      return this.$route.name === 'form'
    }
  },
  methods: {
    close() {
      this.$router.push({ name: 'main' })
    },
    toggleEditability() {
      this.$store.commit('TOGGLE_EDITABILITY', {
        key: 'globalTimetableIsEditable',
        value: !this.globalTimetableIsEditable
      })
    }
  }
}
</script>

<style lang="css" scoped>
@tailwind base

.global-time-board {
  @apply rounded;
}

.toggleEditability {
  text-align: right;
}

</style>
