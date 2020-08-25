<template>
  <div class="global-time">
    <h1>Общее школьное время корпуса</h1>
    <div class="table-header">Время начала урока</div>
    <FormWithTimeRow v-for="(form, formIndex) of forms.forms" :key="formIndex" :form="form"></FormWithTimeRow>
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
    ...mapState(['forms']),
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
.global-time {
  @apply bg-teal-dark;
}
.table-header {
  @apply mx-1 my-2 py-1 w-16 h-16 rounded bg-teal;
}
.form-bg {
  @apply pin py-32 absolute;
  background: rgba(0, 0, 0, 0.8);
}
</style>
