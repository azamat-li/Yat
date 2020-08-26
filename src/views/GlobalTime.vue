<template>
  <div class="global-time-board">
    <h1>Общее школьное время корпуса</h1>
    <div class="table-header">Время начала урока</div>
    <FormWithTimeRow
      v-for="(form, formIndex) in schooltimetable.forms"
      :key="formIndex"
      :form="form"
      :indent="formIndex * 5"
    ></FormWithTimeRow>
    <div class="form-bg" v-if="isFormOpen" @click.self="close">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import FormWithTimeRow from '../components/FormWithTimeRow'

export default {
  components: {
    FormWithTimeRow
  },
  computed: {
    ...mapState(['schooltimetable']),
    isFormOpen() {
      return this.$route.name === 'form'
    }
  },
  methods: {
    close() {
      this.$router.push({ name: 'main' })
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
  @apply bg-teal  absolute rounded  w-full ;
}
</style>
