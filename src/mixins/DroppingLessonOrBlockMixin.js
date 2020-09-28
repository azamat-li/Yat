export default {
  props: {
    block: {
      type: Object,
      required: true
    },
    blockIndex: {
      type: Number,
      required: true
    },
    form: {
      type: Object,
      required: true
    }
  },
  methods: {
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
