<template>
  <div class="form-container  bg-teal-200  top-0">
    <div class="header bg-teal-300 w-56 rounded ">{{ form.name }}</div>
    <div class="flex flex-row items-start day-wrapper ">
      <div
        v-for="(day, $dayIndex) of form.days"
        :key="$dayIndex"
        class="day bg-teal-300"
      >
        <div class="list-reset">
          <div class="flex flex-no-shrink items-center mb-2 font-bold  rounded">
            {{ day.name }}
          </div>
          <div
            v-for="(lesson, $lessonIndex) of day.lessons"
            :key="$lessonIndex"
            class="lesson text-grey-900 bg-red-200 rounded"
          >
            <input
              type="text"
              class="font-bold lesson-name bg-red-200"
              :disabled="!isEditable"
              :value="lesson.name"
              @keyup.enter="updateLessonProperty($event, 'name', lesson)"
              @change="updateLessonProperty($event, 'name', lesson)"
              placeholder="Урок"
            />
            <p v-if="lesson.notes" class="w-full text-no-shrink text-sm">
              {{ lesson.notes }}
            </p>
          </div>
        </div>
        <input
          type="text"
          class="block w-full h-full bg-transparent bg-red-200"
          placeholder="+Добавьте урок"
          @keyup.enter="createLesson($event, day.lessons)"
        />
      </div>
    </div>
    <ToggleEditability
      @toggle-editability="toggleIsEditable"
      :isEditable="isEditable"
      class="toggleEditability"
    ></ToggleEditability>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import ToggleEditability from '../components/ToggleEditability'
export default {
  components: {
    ToggleEditability
  },
  computed: {
    ...mapState(['isEditable']),
    ...mapGetters(['getFormById']),
    form() {
      return this.getFormById(this.$route.params.id)
    }
  },
  methods: {
    createLesson(e, lessons) {
      this.$store.dispatch('createLesson', { lessons, name: e.target.value })
      e.target.value = ''
    },
    goToLesson(lesson) {
      this.$router.push({ name: 'lesson', params: { id: lesson.id } })
    },
    updateLessonProperty(e, key, lesson) {
      this.$store.dispatch('updateLesson', {
        lesson,
        key,
        value: e.target.value
      })
    },
    toggleIsEditable() {
      this.$store.commit('TOGGLE_EDITABILITY', {
        key: 'isEditable',
        value: !this.isEditable
      })
      this.$emit('toggle-is-editable')
    }
  }
}
</script>

<style lang="css">
@tailwind base

.lesson {
  @apply flex w-full h-full text-center flex-wrap shadow mb-2  rounded bg-transparent  no-underline;
}
.lesson-name {
  @apply bg-transparent;
  width: 100%;
  padding: 0px;
  margin: 0px;
}
.day-wrapper {
  display: flex-wrap;
  flex-wrap: wrap;
}
.day {
  @apply w-40 p-1  text-left shadow rounded;
}
.form-container {
  @apply rounded;
}
.isEditableTrigger {
  @apply relative text-right p-4;
  right: 0;
}
.isEditableButton {
  @apply border shadow rounded;
}
.toggleEditability {
  text-align: right;
}

.inputDisabled {
    background: #ffffff
}
</style>
