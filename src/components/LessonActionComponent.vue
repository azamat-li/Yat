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
    </span>
    <BaseRemove :toRemove="lesson" toRemoveType="lesson" />
  </div>
</template>

<script>
import BaseRemove from '@/components/BaseRemove.vue'
export default {
  components: {
    BaseRemove
  },
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
