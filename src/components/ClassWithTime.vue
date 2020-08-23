<template>
  <div class="class-with-time-container">
    <div class="time">{{ time }}</div>
    <div class="codePosition " :style="leftIndentStyle">
      {{ code }}
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
      leftIndent: `${this.classObject.leftIndentCoefficient * 6}em`,
      code: this.classObject.code,
      time: this.classObject.time
    }
  },
  computed: {
    leftIndentStyle: function() {
      return 'left: ' + this.leftIndent + ';' + 'width:' + this.leftIndent
    }
  }
}
</script>

<style lang="sass" scoped>
.class-with-time-container

.time
    position: absolute
    left: 0px
    display: flex-wrap
    flex-wrap: wrap

.codePosition
    position: relative
    width: 10em
</style>

<style lang="css"></style>
