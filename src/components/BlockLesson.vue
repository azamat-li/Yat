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

export default {
  components: {
    LessonActionComponent
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
    form: {
      type: Object,
      required: true
    },
    block: {
      type: Object,
      required: true
    },
    blockIndex: {
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
    },
    dropLessonOrBlock(e, toLessons, toBlockIndex, toLessonIndex) {
      const type = e.dataTransfer.getData('type')
      if (type === 'lesson') {
        this.dropLesson(
          e,
          toLessons,
          toLessonIndex !== undefined ? toLessonIndex : toLessons.length
        )
      }
    },
    dropLesson(e, toLessons, toLessonIndex) {
      const fromBlockIndex = e.dataTransfer.getData('from-block-index')
      const fromLessons = this.form.days[fromBlockIndex].lessons
      const fromLessonIndex = e.dataTransfer.getData('from-lesson-index')

      this.$store.commit('DROP_LESSON', {
        fromLessons,
        fromLessonIndex,
        toLessons,
        toLessonIndex
      })
    }
  }
}
</script>

<style lang="css" scoped>
.lesson {
  @apply flex w-full h-full text-center flex-wrap shadow mb-2  rounded bg-transparent  no-underline;
}
</style>
