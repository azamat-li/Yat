<template>
  <div class="global-time">
    <h1>Общее школьное время</h1>
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
    time() {
      var times = []
      for (var min = 0; min < 45; min += 5) {
        times.push('8:' + min)
      }
      return times
    },
    classObjects: function() {
      var classObjects = []
      for (var min = 0, code = 1; min <= 45; min += 5, code += 1) {
        var cl = {}
        cl.time = '8:' + min
        cl.code = 'Класс #' + code
        cl.leftIndentCoefficient = code
        classObjects.push(cl)
      }
      return classObjects
    }
  }
}
</script>

<style lang="css" scoped>
.global-time {
@apply bg-teal-dark h-full
}


</style>
