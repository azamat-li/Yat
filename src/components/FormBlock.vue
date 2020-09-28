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
      <BlockLesson
        v-for="(lesson, $lessonIndex) of block.lessons"
        :key="$lessonIndex"
        :lesson="lesson"
        :lessonIndex="$lessonIndex"
        :form="form"
        :block="block"
        :blockIndex="blockIndex"
      />
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
import BlockLesson from '@/components/BlockLesson.vue'
import DroppingLessonOrBlockMixin from '@/mixins/DroppingLessonOrBlockMixin'

export default {
  components: {
    BlockLesson
  },
  mixins: [DroppingLessonOrBlockMixin],

  props: {
    isEditable: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    createLesson(e, lessons) {
      this.$store.dispatch('createLesson', { lessons, name: e.target.value })
      e.target.value = ''
    },
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

<style lang="css">
.lesson-block {
  @apply w-56 p-1  text-left shadow rounded;
}
</style>
