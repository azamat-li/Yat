<template>
  <div>
    <input
      type="text"
      class="font-bold lesson-name"
      v-if="isEditable"
      :value="lesson.name"
      @keyup.enter="updateLessonProperty($event, 'name', lesson)"
      @change="updateLessonProperty($event, 'name', lesson)"
      placeholder=" Урок"
    />
    <div v-else class="font-bold lesson-name">{{ lesson.name }}</div>
  </div>
</template>

<script>
export default {
  props: {
    lesson: {
      type: Object
    },
    isEditable: {
      type: Boolean
    }
  },
  methods: {
    updateLessonProperty(e, key, lesson) {
      this.$store.dispatch('updateLesson', {
        lesson,
        key,
        value: e.target.value
      })
    }
  }
}
</script>

<style lang="css" scoped>
.lesson-name {
  @apply bg-transparent;
  width: 100%;
  padding: 0px;
  margin: 0px;
}
</style>
