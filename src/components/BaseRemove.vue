<template>
  <button
    class=" inline  mx-1 px-1 rounded-full bg-gray-700 text-gray-500 font-bold  hover:bg-gray-400 hover:text-gray-800 "
    @click="remove(toRemove, toRemoveType)"
  >
    -
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    toRemove: {
      type: Object,
      required: true
    },
    toRemoveType: {
      type: String,
      required: true
    }
  },
  methods: {
    remove(toRemove, toRemoveType) {
      if (toRemoveType === 'lesson') this.removeLesson(toRemove)
      else if (toRemoveType === 'form') this.removeForm(toRemove)
    },
    removeLesson(lesson) {
      this.$store.dispatch('removeLesson', {
        lessonToRemove: lesson
      })
    },
    removeForm(form) {
      this.$store.dispatch('removeForm', {
        formToRemove: form
      })
    }
  }
})
</script>

<style scoped></style>
