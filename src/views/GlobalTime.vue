<template>
  <div class="global-time">
    <h1>Общее школьное время корпуса</h1>
    <div class="table-header">Время начала урока</div>
    <ClassRow
      v-for="(classObject, index) in classObjects"
      :classObject="classObject"
      :key="index"
      class="class"
    ></ClassRow>
    <div class="form-bg" v-if="isFormOpen" @click.self="close">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import ClassRow from '../components/ClassRow'

export default {
  components: {
    ClassRow
  },
  data() {
    return {
      hour: this.classObjects.hour,
      minute: this.classObjects.minute,
      ...mapState(['schooltimetable'])
    }
  },
  computed: {
    classObjects: function() {
      var classObjects = []
      for (var hour = 8; hour <= 19; hour += 1) {
        for (var min = 0, code = 1; min <= 55; min += 5, code += 1) {
          if (!((hour === 19) & (min >= 45 - 35))) {
            var cl = {}
            var minTwoDigitized = '00'
            if (min < 10) {
              minTwoDigitized = '0' + min
            } else {
              minTwoDigitized = min
            }
            cl.hour = hour
            cl.minute = minTwoDigitized
            cl.code = 'Класс #' + code
            cl.leftIndentCoefficient = code
            classObjects.push(cl)
          }
        }
      }
      return classObjects
    },
    isFormOpen() {
      return this.$route.name === 'form'
    }
  }
}
</script>

<style lang="css" scoped>
.global-time {
  @apply bg-teal-dark;
}
.table-header {
  @apply mx-1 my-2 py-1 w-16 h-16 rounded bg-teal;
}
.form-bg {
    @apply pin absolute  p-10;
    background: rgba(0, 0, 0, 0.5);
}
</style>
