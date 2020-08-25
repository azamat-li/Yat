<template>
  <div class="global-time">
    <h1>Общее школьное время корпуса</h1>
    <div class="table-header">
      Время начала урока
    </div>
    <ClassRow
      v-for="(classObject, index) in classObjects"
      :classObject="classObject"
      :key="index"
      class="class"
    >
    </ClassRow>
    <router-link class="router-link" :to="{ name: 'board' }"
      >Доска расписания</router-link
    >
  </div>
</template>

<script>
import Vuex from 'vuex'
import Vue from 'vue'
import ClassRow from '../components/ClassRow'

Vue.use(Vuex)

export default {
  components: {
    ClassRow
  },
  data() {
    return {
      hour: this.classObjects.hour,
      minute: this.classObjects.minute
    }
  },
  computed: {
    classObjects: function() {
      var classObjects = []
      for (var hour = 8; hour <= 19; hour += 1) {
        for (var min = 0, code = 1; min <= 55; min += 5, code += 1) {
          if (!(hour === 19 & min >= (45-35))) {
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
    }
  }
}
</script>

<style lang="css" scoped>
.global-time {
@apply bg-teal-dark 
}
.table-header {
    @apply   mx-1 my-2 py-1 w-16 h-16 rounded bg-teal 
}


</style>
