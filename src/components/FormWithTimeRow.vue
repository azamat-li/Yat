<template>
  <div class="form-container">
    <div @click.self="goToForm" class="form" :style="computedStyle">{{ form.name }}</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    form: {
      type: Object
    },
    indent: {
      type: Number
    }
  },
  methods: {
    goToForm(form) {
      this.$router.push({ name: 'form', params: { id: form.id } })
    }
  },
  computed: {
    computedStyle() {
      return `left: ${this.indent}em`
    },
    ...mapActions(['incrementIndent'])
  }
}
</script>

<style lang="css">
.form-container {
  @apply bg-teal-light rounded m-3 p-5 relative;
}
.form {
  @apply bg-white items-center rounded m-2 p-2 w-10 shadow flex  text-grey-darkest no-underline relative;
}
.form-wrapper {
  @apply shadow items-center flex flex-wrap mb-2 px-2 py-2 rounded bg-grey-light text-grey-darkest no-underline relative w-24;
  left: 5em;
  top: 10em;
}
.time {
  @apply absolute px-2 mx-1 w-16;
}
.whole-hour-separator {
  @apply my-2 py-3 bg-teal-dark;
}
</style>
