<template>
  <div class="form-container top-0">
    <div class="bg-white h-8">
      <div class="header bg-teal-100 w-56 rounded">{{ form.name }}</div>
    </div>
    <div class="flex flex-row items-start day-wrapper">
      <div
        v-for="(day, $dayIndex) of form.days"
        :key="$dayIndex"
        class="day bg-red-100 border-8 border-teal-100"
        draggable
        @drop="dropLessonOrBlock($event, day.lessons, $dayIndex)"
        @dragover.prevent
        @dragenter.prevent
      >
        <div class="flex flex-no-shrink items-center mb-2 font-bold rounded">{{ day.name }}</div>
        <div class="list-reset">
          <div
            v-for="(lesson, $lessonIndex) of day.lessons"
            :key="$lessonIndex"
            class="lesson text-grey-900 bg-yellow-100 mt-1 rounded"
            data-testid="lesson"
            draggable
            @dragstart="pickUpLesson($event, $lessonIndex, $dayIndex)"
            @dragover.prevent
            @dragenter.prevent
            @drop.stop="
              dropLessonOrBlock($event, day.lessons, $dayIndex, $lessonIndex)
            "
          >
            <LessonActionComponent :lesson="lesson" :isEditable="isEditable"></LessonActionComponent>
            <p v-if="lesson.notes" class="w-full text-no-shrink text-sm">{{ lesson.notes }}</p>
          </div>

          <input
            type="text"
            class="block w-full h-full bg-transparent"
            placeholder="+ Добавьте урок"
            @keyup.enter="createLesson($event, day.lessons)"
            @blur="createLesson($event, day.lessons)"
          />
        </div>
      </div>
    </div>

    <ToggleEditability
      @toggle-editability="toggleIsEditable"
      :isEditable="isEditable"
      class="toggleEditability"
      v-show="isEditableButtonEnabled"
    ></ToggleEditability>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import ToggleEditability from '../components/ToggleEditability'
import LessonActionComponent from '@/components/LessonActionComponent'

export default {
  props: {
    form: {
      type: Object
    },
    isEditableButtonEnabled: {
      type: Boolean
    }
  },
  components: {
    ToggleEditability,
    LessonActionComponent
  },
  computed: {
    ...mapState(['isEditable']),
    ...mapGetters(['getFormById'])
  },
  methods: {
    createLesson(e, lessons) {
      this.$store.dispatch('createLesson', { lessons, name: e.target.value })
      e.target.value = ''
    },
    goToLesson(lesson) {
      this.$router.push({ name: 'lesson', params: { id: lesson.id } })
    },

    toggleIsEditable() {
      this.$store.commit('TOGGLE_EDITABILITY', {
        key: 'isEditable',
        value: !this.isEditable
      })
      this.$emit('toggle-is-editable')
    },
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

<style lang="css">
@tailwind base

.lesson {
  @apply flex w-full h-full text-center flex-wrap shadow mb-2  rounded bg-transparent  no-underline;
}
.day-wrapper {
  display: flex-wrap;
  flex-wrap: wrap;
}
.day {
  @apply w-56 p-1  text-left shadow rounded;
}
.form-container {
  @apply rounded;
}
.isEditableTrigger {
  @apply relative text-right p-2;
  right: 0;
}
.isEditableButton {
  @apply border shadow rounded;
}
.toggleEditability {
  text-align: right;
}

.inputDisabled {
  background: #ffffff;
}
</style>
