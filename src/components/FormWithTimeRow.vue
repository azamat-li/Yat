<template>
  <div class="form-row">
    <div @click.self="goToForm" class="form" :style="computedStyle">{{ form.name }}</div>
  </div>
</template>

<script>

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
  }
}
</script>

<style lang="css">
.form-row {
  @apply bg-teal-light rounded m-1 p-1 relative;
}
.form {
  @apply bg-white items-center rounded m-1 p-1 w-10 shadow flex  text-grey-darkest no-underline relative;
}

.time {
  @apply absolute px-2 mx-1 w-16;
}

</style>
