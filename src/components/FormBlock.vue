<template>
  <BaseDrop @drop="dropLessonOrBlock">
    <BaseDrag :transferData="{ type: 'block', fromBlockIndex: blockIndex }">
      <div class="bg-gray-700  m-1 p-1 rounded-lg">
        <div class="flex flex-no-shrink items-center mb-2 font-bold m-1 p-1 rounded text-gray-400">
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
            class="block w-full h-full bg-transparent p-1"
            placeholder="+ Добавьте Урок"
            @keyup.enter="createLesson($event, block.lessons)"
          />
        </div>
      </div>
    </BaseDrag>
  </BaseDrop>
</template>

<script>
import BlockLesson from '@/components/BlockLesson.vue'
import BaseDrop from '@/components/BaseDrop.vue'
import BaseDrag from '@/components/BaseDrag.vue'
import DroppingLessonOrBlockMixin from '@/mixins/DroppingLessonOrBlockMixin'

export default {
  components: {
    BlockLesson,
    BaseDrop,
    BaseDrag
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

<style lang="css"></style>
