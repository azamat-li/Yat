<template>
  <button
    class=" inline  mx-1 px-1 rounded-full bg-gray-700 text-gray-500 font-bold  hover:bg-gray-400 hover:text-gray-800 "
    @click="removeLesson(toRemove)"
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
    },
    removeLesson(lesson) {
      this.$store.dispatch('removeLesson', {
        lessonToRemove: lesson
      })
    }
  }
})
</script>

<style scoped></style>
