<template>
  <BaseDrop v-if="lesson.name" @drop="dropLessonOrBlock">
    <BaseDrag
      class="lesson"
      :transferData="{
        type: 'lesson',
        fromBlockIndex: blockIndex,
        fromLessonIndex: lessonIndex
      }"
    >
      <div class="mt-1 rounded" data-testid="lesson">
        <LessonEdit
          :lesson="lesson"
          :isEditable="isEditable"
        ></LessonEdit>
        <p v-if="lesson.notes" class="w-full text-no-shrink text-sm">
          {{ lesson.notes }}
        </p>
      </div>
    </BaseDrag>
  </BaseDrop>
</template>

<script>
import LessonEdit from '@/components/LessonEdit'
import BaseDrop from '@/components/BaseDrop.vue'
import BaseDrag from '@/components/BaseDrag.vue'
import DroppingLessonOrBlockMixin from '@/mixins/DroppingLessonOrBlockMixin'
export default {
  components: {
    LessonEdit,
    BaseDrop,
    BaseDrag
  },
  mixins: [DroppingLessonOrBlockMixin],
  props: {
    lesson: {
      type: Object,
      required: true
    },
    lessonIndex: {
      type: Number,
      required: true
    },
    isEditable: {
      type: Boolean,
      default: false
    },
    form: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="css" scoped>
.lesson {
  @apply flex w-full h-full text-center flex-wrap shadow mb-2 p-2  rounded-full shadow-md bg-transparent  no-underline;
}
</style>
