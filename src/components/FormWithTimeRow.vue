<template>
  <div class="class-container">
    <div>
      <div @click.self="goToForm">{{ form.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    form: {
      type: Object
    }
  },
  methods: {
    goToForm(form) {
      this.$router.push({ name: 'form', params: { id: form.id } })
    }
  }
}
</script>

<style lang="css">
.class-container {
  @apply bg-teal-light;
}
.form {
  @apply items-center;
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
