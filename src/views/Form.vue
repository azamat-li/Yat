<template>
  <div class="form">
    <div class="flex flex-row items-start">
      <div class="day" v-for="(form, $formIndex) of schooltimetable.forms" :key="$formIndex">
        <div v-for="(day, $dayIndex) of form.days" :key="$dayIndex">
          <div v-for="(lesson, $lessonIndex) of day.lessons" :key="$lessonIndex">{{ lesson.name }}</div>
        </div>
      </div>
    </div>
    <router-link :to="{ name: 'time-between-classes' }" class="router-link">Общее школьное время</router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['schooltimetable'])
  }
}
</script>

<style lang="css">
.lesson {
  @apply flex items-center flex-wrap shadow mb-2 py-2 px-2 rounded bg-white text-grey-darkest no-underline;
}

.day {
  @apply bg-grey-light p-2 mr-4 text-left shadow rounded;
  min-width: 350px;
}

.form {
  @apply p-4 bg-teal-dark   overflow-auto relative flex flex-row bg-white pin mx-4 m-32 mx-auto py-4 text-left rounded shadow;
  max-height: 90%;
  max-width: 90%;
}

.form-bg {
  @apply pin absolute;
  background: rgba(0, 0, 0, 0.5);
}
</style>
