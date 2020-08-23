<template>
  <div>
    <h1>Общее школьное время</h1>
    <ClassWithTime
      class="class"
      v-bind:classObject="{ time: '08:00', classCode: '#1' }"
    >
    </ClassWithTime>
    <ClassWithTime time="05" classCode="#2"> </ClassWithTime>
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
  data() {
    return {
      class: {
        type: Object
      }
    }
  }
}
</script>

<style lang="sass" scoped></style>
