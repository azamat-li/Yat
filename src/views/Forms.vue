<template>
  <div class="form-container">
    <div class="form-class" v-for="(form, $formIndex) of schooltimetable.forms" :key="$formIndex">
      <div class="form-name">{{ form.name }}</div>
      <div class="flex flex-row items-start">
        <div v-for="(day, $dayIndex) of form.days" :key="$dayIndex" class="day">
          <div class="list-reset">
            <div class="flex items-center mb-2 font-bold">{{ day.name }}</div>
            <div v-for="(lesson, $lessonIndex) of day.lessons" :key="$lessonIndex" class="lesson">
              <span class="w-full flex-no-shrink font-bold">
                {{
                lesson.name
                }}
              </span>
              <p v-if="lesson.notes" class="w-full text-no-shrink mt-1 text-sm">{{ lesson.notes }}</p>
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
.lesson {
  @apply flex items-center flex-wrap shadow mb-2 py-2 px-2 rounded bg-white text-grey-darkest no-underline;
}

.day {
  @apply bg-grey-light p-5 m-4 text-left shadow rounded;
}
.form-name {
  @apply bg-teal rounded text-2xl font-bold;
}
.form-class {
  @apply bg-teal  p-1 m-1 rounded;
}
.form-container {
  @apply bg-teal rounded;
}
</style>
