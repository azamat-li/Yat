<template>
  <div class="class-with-time-container">
    <div class="time">{{ time }}</div>
    <div class="classCode" :style="{ left: leftIndentStyle }">
      {{ classCode }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    classObject: {
      type: Object
    }
  },
  data() {
    return {
      leftIndent: `${this.classObject.leftIndentCoefficient * 8}em`,
      classCode: this.classObject.classCode,
      time: this.classObject.time
    }
  },
  computed: {
    leftIndentStyle: function() {
      return this.leftIndent
    }
  }
}
</script>

<style lang="sass" scoped>
.class-with-time-container
    width: 100vw
    position: relative

.time
    position: absolute
    left: 0px

.classCode
    position: absolute
</style>
