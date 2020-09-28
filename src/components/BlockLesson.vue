<template>
  <div
    class="lesson  mt-1 rounded"
    data-testid="lesson"
    draggable
    @dragstart="pickUpLesson($event, lessonIndex, blockIndex)"
    @dragover.prevent
    @dragenter.prevent
    @drop.stop="
      dropLessonOrBlock($event, block.lessons, blockIndex, lessonIndex)
    "
  >
    <LessonActionComponent
      :lesson="lesson"
      :isEditable="isEditable"
    ></LessonActionComponent>
    <p v-if="lesson.notes" class="w-full text-no-shrink text-sm">
      {{ lesson.notes }}
    </p>
  </div>
</template>

<script>
import LessonActionComponent from '@/components/LessonActionComponent'
import DroppingLessonOrBlockMixin from '@/mixins/DroppingLessonOrBlockMixin'
export default {
  components: {
    LessonActionComponent
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
  },
  methods: {
    pickUpLesson(e, fromLessonIndex, fromBlockIndex) {
      e.dataTransfer.effectAllowed = 'move'
      e.dataTransfer.dropEffect = 'move'

      e.dataTransfer.setData('from-lesson-index', fromLessonIndex)
      e.dataTransfer.setData('from-block-index', fromBlockIndex)
      e.dataTransfer.setData('type', 'lesson')
    }
  }
}
</script>

<style lang="css" scoped>
.lesson {
  @apply flex w-full h-full text-center flex-wrap shadow mb-2  rounded bg-transparent  no-underline;
}
</style>
