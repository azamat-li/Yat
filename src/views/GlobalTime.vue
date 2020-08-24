<template>
  <div class="global-time">
    <h1>Общее школьное время корпуса</h1>
    <ClassWithTime
      v-for="(classObject, index) in classObjects"
      :classObject="classObject"
      :key="index"
      class="class"
    >
    </ClassWithTime>
    <router-link class="router-link" :to="{ name: 'board' }"
      >Доска расписания</router-link
    >
  </div>
</template>

<script>
import ClassWithTime from '../components/ClassWithTime'
export default {
  components: {
    ClassWithTime
  },
  computed: {
    classObjects: function() {
      var classObjects = []
      for (var hour = 8; hour <= 19; hour += 1) {
        for (var min = 0, code = 1; min <= 55; min += 5, code += 1) {
          if (!( hour === 19 & min >= 45)) {
            var cl = {}
            var minTwoDigitized = '00'
            if (min < 10) {
              minTwoDigitized = '0' + min
            } else {
              minTwoDigitized = min
            }
            cl.time = hour + ':' + minTwoDigitized
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


</style>
