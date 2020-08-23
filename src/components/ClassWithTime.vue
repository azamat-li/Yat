<template>
  <div class="class-with-time-container">
    <div class="time">{{ this.classObject.time }}</div>
    <div class="class" :class="classWithPosition">
      {{ this.classObject.classCode }}
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
  computed: {
    classWithPosition() {
      return null
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
    position: relative
</style>
