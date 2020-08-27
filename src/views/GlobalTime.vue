<template>
  <div class="global-time-board">
    <div class="header">Общее школьное время корпуса</div>
    <div class="table-header">Время начала урока</div>
    <FormWithTimeRow
      v-for="(form, formIndex) in schooltimetable.forms"
      :key="formIndex"
      :form="form"
      :indent="formIndex * 5"
      :isEditable="globalTimetableIsEditable"
    ></FormWithTimeRow>
    <div class="form-bg" v-if="isFormOpen" @click.self="close">
      <router-view />
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
.table-header {
  @apply mx-1 my-2 py-1 w-16 h-16 rounded bg-teal;
}
.global-time-board {
  @apply bg-teal-dark rounded;
}
.form-bg {
  @apply bg-teal pin  absolute p-5 rounded  w-full;
  background: rgba(129, 230, 217, 0.95);
}
.toggleEditability {
  text-align: right;
}
</style>
