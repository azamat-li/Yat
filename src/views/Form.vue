<template>
  <div class="form-container  bg-teal  top-0">
    <div class="header ">{{ form.name }}</div>
    <div class="flex flex-row items-start day-wrapper ">
      <div
        v-for="(day, $dayIndex) of form.days"
        :key="$dayIndex"
        class="day bg-grey-light"
      >
        <div class="list-reset">
          <div class="flex flex-no-shrink items-center mb-2 font-bold">
            {{ day.name }}
          </div>
          <div
            v-for="(lesson, $lessonIndex) of day.lessons"
            :key="$lessonIndex"
            class="lesson text-grey-darkest"
          >
            <input
              type="text"
              class="font-bold lesson-name "
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
          class="block w-full h-full bg-transparent"
          placeholder="+ Добавьте урок"
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
  @apply w-40 p-5 m-4 text-left shadow rounded;
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
