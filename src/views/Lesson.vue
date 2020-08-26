<template>
  <div class="lesson-view">
    <div class="flex flex-col flex-grow items-start justify-between px-4">
      <input
        class="p-2 w-full mr-2 block text-xl font-bold"
        :value="lesson.name"
        @keyup.enter="updateLessonProperty($event, 'name')"
        @change="updateLessonProperty($event, 'name')"
      />
      <input
        class="relative bg-transparent border border-none leading-normal p-2 w-full mr-2 block text-xl font-bold"
        :value="lesson.room"
        @change="updateLessonProperty($event, 'room')"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('getFormById'),
    lesson() {
      return this.getFormById(this.$route.params.id)
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

<style lang="scss" scoped></style>
