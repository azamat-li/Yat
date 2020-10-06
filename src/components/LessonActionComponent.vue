<template>
  <div>
    <input
      type="text"
      class="font-bold lesson-name"
      v-if="isEditable && lesson.name"
      :value="lesson.name"
      @keyup.enter="updateLessonProperty($event, 'name', lesson)"
      placeholder=" Урок"
    />
    <span class="font-bold lesson-name">
      <div class="inline">{{ lesson.name }}</div>
      <button
        class="inline rounded-full bg-gray-700 text-gray-500 font-bold py-2 px-4 hover:bg-gray-400 hover:text-gray-800 "
        @click="removeLesson(lesson)"
      >
        -
      </button>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    lesson: {
      type: Object,
      required: true
    },
    block: {
      type: Object,
      required: true
    },
    form: {
      type: Object,
      required: true
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
    },
    removeLesson(lesson) {
      this.$store.dispatch('removeLesson', {
        lessonToRemove: lesson
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
