<template>
  <BaseDrop @drop="dropLessonOrBlock">
    <BaseDrag
      class="lesson"
      :transferData="{
        type: 'lesson',
        fromBlockIndex: blockIndex,
        fromLessonIndex: lessonIndex
      }"
    >
      <div class="mt-1 rounded" data-testid="lesson">
        <LessonActionComponent
          :lesson="lesson"
          :isEditable="isEditable"
        ></LessonActionComponent>
        <p v-if="lesson.notes" class="w-full text-no-shrink text-sm">
          {{ lesson.notes }}
        </p>
      </div>
    </BaseDrag>
  </BaseDrop>
</template>

<script>
import LessonActionComponent from '@/components/LessonActionComponent'
import BaseDrop from '@/components/BaseDrop.vue'
import BaseDrag from '@/components/BaseDrag.vue'
import DroppingLessonOrBlockMixin from '@/mixins/DroppingLessonOrBlockMixin'
export default {
  components: {
    LessonActionComponent,
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
    }
  }
}
</script>

<style lang="css" scoped>
.lesson {
  @apply flex w-full h-full text-center flex-wrap shadow mb-2  rounded bg-transparent  no-underline;
}
</style>
