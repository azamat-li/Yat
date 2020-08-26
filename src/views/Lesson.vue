<template>
  <div class="lesson-view">
    <div class="flex flex-col flex-grow items-start justify-between px-4">
      <input
        class="p-2 w-full mr-2 block text-xl font-bold"
        :value="lesson.name"
        @keyup.enter="updateLessonProperty($event, 'name')"
        @change="updateLessonProperty($event, 'name')"
        placeholder="Урок"
      />
      <input
        class="relative bg-transparent border border-none leading-normal p-2 w-full mr-2 block text-xl font-bold"
        :value="lesson.room"
        @change="updateLessonProperty($event, 'room')"
        placeholder="Кабинет"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getLessonById']),
    lesson() {
      return this.getLessonById(this.$route.params.id)
    }
  },
  methods: {
    updateLessonProperty(e, key) {
      this.$store.commit('UPDATE_LESSON', {
        lesson: this.lesson,
        key,
        value: e.target.value
      })
    }
  }
}
</script>

<style lang="css" scoped>
.lesson-view {
  @apply relative flex flex-row bg-white pin mx-4 m-32 mx-auto py-4 text-left rounded shadow;
  max-width: 700px;
}
</style>
