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
    },
    blockType: {
      type: String,
      required: true
    }
  },
  methods: {
    dropLessonOrBlock(transferData) {
      if (transferData.type === 'lesson') {
        this.dropLesson(transferData)
      }
    },
    dropLesson({ fromBlockIndex, fromLessonIndex }) {
      let fromLessons
      console.log(fromBlockIndex + ' ' + this.blockType)
      if (this.blockType === 'day') {
        fromLessons = this.form.days[fromBlockIndex].lessons
      } else if (this.blockType === 'draft') {
        fromLessons = this.form.drafts[fromBlockIndex].lessons
      }
      this.$store.commit('DROP_LESSON', {
        fromLessons,
        fromLessonIndex,
        toLessons: this.block.lessons,
        toLessonIndex: this.lessonIndex
      })
    }
  }
}
