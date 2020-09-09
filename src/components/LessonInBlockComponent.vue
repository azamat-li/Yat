<template>
  <div>
    <input
      type="text"
      class="font-bold lesson-name"
      :disabled="!isEditable"
      :value="lesson.name"
      @keyup.enter="updateLessonProperty($event, 'name', lesson)"
      @change="updateLessonProperty($event, 'name', lesson)"
      placeholder=" Урок"
    />
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
      this.$emit('update-lesson-property', { e, key, lesson })
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
