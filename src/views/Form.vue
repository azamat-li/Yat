<template>
  <div class="form-container">
    <div class="header">{{ form.name }}</div>
    <div class="flex flex-row items-start">
      <div v-for="(day, $dayIndex) of form.days" :key="$dayIndex" class="day">
        <div class="list-reset">
          <div class="flex items-center mb-2 font-bold">{{ day.name }}</div>
          <div v-for="(lesson, $lessonIndex) of day.lessons" :key="$lessonIndex" class="lesson">
            <input
              type="text"
              class="w-full flex-no-shrink font-bold bg-transparent"
              :disabled="!isEditable"
              :value="lesson.name"
              @keyup.enter="updateLessonProperty($event, 'name', lesson)"
              @change="updateLessonProperty($event, 'name', lesson)"
              placeholder="Название урока"
            />
            <p v-if="lesson.notes" class="w-full text-no-shrink mt-1 text-sm">{{ lesson.notes }}</p>
          </div>
        </div>
        <input
          type="text"
          class="block p-2 w-full bg-transparent"
          placeholder="+ Введите урок"
          @keyup.enter="createTask($event, day.lessons)"
        />
      </div>
      <ToggleEditability @toggle-is-editable="toggleIsEditable"></ToggleEditability>
    </div>
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
    createTask(e, lessons) {
      this.$store.commit('CREATE_LESSON', { lessons, name: e.target.value })
      e.target.value = ''
    },
    goToLesson(lesson) {
      this.$router.push({ name: 'lesson', params: { id: lesson.id } })
    },
    updateLessonProperty(e, key, lesson) {
      this.$store.commit('UPDATE_LESSON', {
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
.lesson-bg {
  @apply pin absolute;
}
.lesson {
  @apply flex items-center text-center flex-wrap shadow mb-2 py-2 px-2 rounded bg-transparent text-grey-darkest no-underline;
}

.day {
  @apply bg-grey-light p-5 m-4 text-left shadow rounded;
}
.form-name {
  @apply rounded text-2xl font-bold p-2 m-2;
}
.form-class {
  @apply bg-teal  p-1 m-1 rounded;
}
.form-container {
  @apply bg-teal rounded;
}
.isEditableTrigger {
  @apply relative text-right p-4;
  right: 0;
}
.isEditableButton {
  @apply border shadow rounded;
}
</style>
