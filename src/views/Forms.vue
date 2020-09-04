<template>
  <div class="form-container bg-teal">
    <div
      class="form-class bg-teal"
      v-for="(form, $formIndex) of schooltimetable.forms"
      :key="$formIndex"
    >
      <div class="form-name  bg-teal">{{ form.name }}</div>
      <div class="flex flex-row items-start">
        <div v-for="(day, $dayIndex) of form.days" :key="$dayIndex" class="day bg-grey-light">
          <div class="list-reset">
            <div class="flex items-center mb-2 font-bold">{{ day.name }}</div>
            <div
              v-for="(lesson, $lessonIndex) of day.lessons"
              :key="$lessonIndex"
              class="lesson"
            >
              <span class="w-full flex-no-shrink font-bold">
                {{ lesson.name }}
              </span>
              <p v-if="lesson.notes" class="w-full text-no-shrink mt-1 text-sm">
                {{ lesson.notes }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    form: {
      type: Object
    }
  },
  computed: {}
}
</script>

<style lang="css">
@tailwind base

.lesson {
  @apply flex items-center flex-wrap shadow mb-2 py-2 px-2 rounded bg-white text-grey-darkest no-underline;
}

.day {
  @apply  p-5 m-4 text-left shadow rounded;
}
.form-name {
  @apply rounded text-2xl font-bold;
}
.form-class {
  @apply   p-1 m-1 rounded;
}
.form-container {
  @apply  rounded;
}
</style>
