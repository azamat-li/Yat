<template>
  <div class="main bg-gray-800">
    <button
      class="rounded-full bg-gray-700 text-gray-500 font-bold py-2 px-4 hover:bg-gray-400 hover:text-gray-800 "
      @click="toggleEditability"
    >
      <div v-show="globalTimetableIsEditable" data-testid="unLockedButton">
        Рады изменениям
      </div>
      <div v-show="!globalTimetableIsEditable" data-testid="lockedButton">
        Заперто
      </div>
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['globalTimetableIsEditable'])
  },
  methods: {
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
.main {
  @apply p-1;
}
button:focus {
  outline: none;
}
</style>
