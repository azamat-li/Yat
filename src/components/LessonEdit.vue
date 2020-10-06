<template>
  <div>
    <input
      type="text"
      class=" font-bold bg-transparent w-4/6 rounded shadow-sm"
      v-if="isEditable"
      :value="lesson.name"
      @keyup.enter="updateLessonProperty($event, 'name', lesson)"
      placeholder=" Урок"
    />
    <span v-else class=" font-bold bg-transparent w-full ">
      <div class="inline">{{ lesson.name }}</div>
    </span>
    <BaseRemove
      v-if="isEditable"
      :toRemove="lesson"
      :toRemoveIndex="lessonIndex"
      :toRemoveFrom="block"
      toRemoveType="lesson"
      class="right-0  "
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
