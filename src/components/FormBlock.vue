<template>
  <div
    class="lesson-block bg-gray-700 border-8 border-gray-800 "
    draggable
    @drop="dropLessonOrBlock($event, block.lessons, blockIndex)"
    @dragover.prevent
    @dragenter.prevent
  >
    <div class="flex flex-no-shrink items-center mb-2 font-bold rounded">
      {{ block.name }}
    </div>
    <div class="list-reset">
      <div
        v-for="(lesson, $lessonIndex) of block.lessons"
        :key="$lessonIndex"
        class="lesson  mt-1 rounded"
        data-testid="lesson"
        draggable
        @dragstart="pickUpLesson($event, $lessonIndex, blockIndex)"
        @dragover.prevent
        @dragenter.prevent
        @drop.stop="
          dropLessonOrBlock($event, block.lessons, blockIndex, $lessonIndex)
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

      <input
        type="text"
        class="block w-full h-full bg-transparent"
        placeholder="+ Добавьте Урок"
        @keyup.enter="createLesson($event, block.lessons)"
        @blur="createLesson($event, block.lessons)"
      />
    </div>


  </div>
</template>

<script>
import LessonActionComponent from '@/components/LessonActionComponent'

export default {
  components: {
    LessonActionComponent
  },
  props: {
    block: {
      type: Object,
      required: true
    },
    blockIndex: {
      type: Number,
      required: true
    },
    form: {
      type: Object,
      required: true
    },
    isEditable: {
      type: Boolean,
      default: false
    }
  },
  methods: {
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
    pickUpLesson(e, fromLessonIndex, fromBlockIndex) {
      e.dataTransfer.effectAllowed = 'move'
      e.dataTransfer.dropEffect = 'move'

      e.dataTransfer.setData('from-lesson-index', fromLessonIndex)
      e.dataTransfer.setData('from-block-index', fromBlockIndex)
      e.dataTransfer.setData('type', 'lesson')
    },
    createLesson(e, lessons) {
      this.$store.dispatch('createLesson', { lessons, name: e.target.value })
      e.target.value = ''
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

<style lang="css">
@tailwind base
.lesson-block {
  @apply w-56 p-1  text-left shadow rounded;
}
.lesson {
  @apply flex w-full h-full text-center flex-wrap shadow mb-2  rounded bg-transparent  no-underline;
}
</style>
