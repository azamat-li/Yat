<template>
  <button
    class=" inline  mx-1 px-1 rounded-full bg-gray-700 text-gray-500 font-bold  hover:bg-gray-400 hover:text-gray-800 "
    @click="remove(toRemoveType)"
  >
    -
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    toRemoveType: {
      type: String,
      required: true
    },
    toRemoveIndex: {
      type: Number,
      required: true
    },
    toRemoveFrom: {
      type: Object
    }
  },
  methods: {
    remove(toRemoveType) {
      if (toRemoveType === 'lesson') this.removeLesson()
      else if (toRemoveType === 'form') this.removeForm()
    },
    removeLesson() {
      this.$store.dispatch('removeLesson', {
        lessonToRemoveIndex: this.toRemoveIndex,
        block: this.toRemoveFrom
      })
    },
    removeForm() {
      this.$store.dispatch('removeForm', {
        toRemoveIndex: this.toRemoveIndex,
        form: this.toRemoveFrom
      })
    }
  }
})
</script>

<style scoped></style>
