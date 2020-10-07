<template>
  <BaseDrop @drop="dropLessonOrBlock">
    <BaseDrag
      :transferData="{
        type: 'block',
        fromBlockIndex: blockIndex
      }"
    >
      <div class="bg-gray-700 relative m-1 p-1 rounded-lg">
        <div
          class="flex flex-no-shrink items-center mb-2 font-bold m-1 p-1 rounded-full  text-gray-400"
        >
          {{ block.name }}
          <button
            v-if="isFormEditable"
            class="absolute right-0 top-0 px-2  font-bold bg-transparent"
          >
            -
          </button>
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
            :blockType="blockType"
            :isEditable="isEditable"
          />
          <input
            v-if="isFormEditable"
            type="text"
            class="block font-bold   text-right shadow-none w-full h-full bg-transparent px-3"
            placeholder="+"
            @keyup.enter="createLesson($event, block.lessons)"
          />
        </div>
      </div>
    </BaseDrag>
  </BaseDrop>
</template>

<script>
import { mapState } from 'vuex'
import BlockLesson from '@/components/BlockLesson.vue'
import BaseDrop from '@/components/BaseDrop.vue'
import BaseDrag from '@/components/BaseDrag.vue'
import DroppingLessonOrBlockMixin from '@/mixins/DroppingLessonOrBlockMixin'

export default {
  props: {
    isEditable: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapState(['isFormEditable'])
  },
  components: {
    BlockLesson,
    BaseDrop,
    BaseDrag
  },
  mixins: [DroppingLessonOrBlockMixin],
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
