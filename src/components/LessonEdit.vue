<template>
  <div class="w-full">
    <input
      type="text"
      class="w-full font-bold bg-transparent "
      style="caret-color: white;"
      v-if="isEditable"
      :value="lesson.name"
      @keyup.enter="updateLessonProperty($event, 'name', lesson)"
      placeholder=" Урок"
    />
    <span v-else class="font-bold bg-transparent">
      <div>{{ lesson.name }}</div>
    </span>
    <BaseRemove
      v-if="isEditable"
      :toRemove="lesson"
      :toRemoveIndex="lessonIndex"
      :toRemoveFrom="block"
      toRemoveType="lesson"
      class="absolute"
    />
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
    lessonIndex: {
      type: Number,
      required: true
    },
    block: {
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

<style lang="css" scoped></style>
