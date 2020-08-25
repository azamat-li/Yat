<template>
  <div class="class-container">
    <div v-if="minute == '00' & hour != '8'" class="whole-hour-separator">  </div>
    <div class="time beautiful">{{ time }}</div>
    <div class="code-position beautiful" :style="leftIndentStyle">
      <div class="code">
        {{ code }}
      </div>
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
      leftIndent: `${this.classObject.leftIndentCoefficient * 5}em`,
      code: this.classObject.code,
      time: this.classObject.hour + ':' + this.classObject.minute,
      minute: this.classObject.minute,
      hour: this.classObject.hour
    }
  },
  computed: {
    leftIndentStyle: function() {
      return 'left: ' + this.leftIndent
    }
  }
}
</script>


<style lang="css">
.class-container{
@apply bg-teal-light 
}
.beautiful {
    @apply shadow items-center flex flex-wrap mb-2 px-2 py-2 rounded bg-grey-light text-grey-darkest no-underline
}
.code {
    @apply items-center 
}
.code-position {
    @apply relative w-24
}
.time {
    @apply absolute px-2 mx-1 w-16
}
.whole-hour-separator {
    @apply my-2 py-3 bg-teal-dark
}
</style>
