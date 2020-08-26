<template>
  <div class="global-time">
    <h1>Общее школьное время корпуса</h1>
    <div class="table-header">Время начала урока</div>
    <FormWithTimeRow
      v-for="(form, formIndex) of forms.forms"
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
import { mapState, mapActions } from 'vuex'
import FormWithTimeRow from '../components/FormWithTimeRow'

export default {
  components: {
    FormWithTimeRow
  },
  computed: {
    ...mapState(['schooltimetable', 'forms']),
    ...mapActions(['resetIndent']),
    isFormOpen() {
      return this.$route.name === 'form'
    }
  },
  methods: {
    close() {
      this.$router.push({ name: 'main' })
    }
  },
  beforeCreate() {
    this.resetIndent()
  }
}
</script>

<style lang="css" scoped>
.table-header {
  @apply mx-1 my-2 py-1 w-16 h-16 rounded bg-teal;
}
.global-time {
  @apply bg-teal-dark p-1;
}
.form-bg {
  @apply pin py-32 absolute;
  background: rgba(0, 0, 0, 0.8);
}
</style>
