<template>
  <BaseDrop 
  class="w-full"
  v-if="lesson.name" @drop="dropLessonOrBlock">
    <BaseDrag
      class="flex  w-full h-full text-center flex-wrap  mb-2   rounded-full bg-transparent  no-underline"
      :transferData="{
        type: 'lesson',
        fromBlockIndex: blockIndex,
        fromLessonIndex: lessonIndex
      }"
    >
      <div class="mt-1 w-full rounded flex" data-testid="lesson">
        <LessonEdit
          :lesson="lesson"
          :lessonIndex="lessonIndex"
          :block="block"
          :isEditable="isEditable"
          class="w-full"
        ></LessonEdit>
        <p v-if="lesson.notes" class="text-no-shrink text-sm">
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

<style lang="css" scoped></style>
