<template>
  <div class="global-time-board h-full w-full">
    <div>
      <div class="header p-2 w-1/3 bg-teal-100 rounded">Общее школьное время корпуса</div>
    </div>
    <FormWithTimeRow
      v-for="(form, formIndex) in schooltimetable.forms"
      :key="formIndex"
      :form="form"
      :indent="formIndex * 5"
      :isEditable="globalTimetableIsEditable"
    ></FormWithTimeRow>
    <router-link :to="{ name: 'forms' }">Все классы</router-link>
    <div class="background forms-background" v-show="isFormsOpen" @click.self="close">
      <router-view class="router-view" />
    </div>
    <div class="background form-background" v-show="isFormOpen" @click.self="close">
      <router-view class="router-view" />
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
    },
    isFormsOpen() {
      return this.$route.name === 'forms'
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
.background {
  @apply bg-gray-500 absolute  top-0 w-full h-full;
  min-height: 100%;
}
.form-background {
  height: 120vh;
}
.forms-background {
  height: 500vh;
}
.router-view {
  @apply bg-white rounded absolute;
  width: 95vw;
  min-height: 100%;
  top: 3vh;
  left: 2%;
}
</style>
