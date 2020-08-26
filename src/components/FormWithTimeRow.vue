<template>
  <div class="form-row">
    <div @click.self="goToForm" class="form" :style="computedStyle">
      <input v-model="form.name" type="text" @blur="updateValue" value />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
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
    },
    updateValue() {
      this.$store.dispatch('updateFormName')
    }
  },
  computed: {
    computedStyle() {
      return `left: ${this.indent}em`
    },
    ...mapActions(['updateFormName']),
    ...mapGetters(['getFormById'])
  }
}
</script>

<style lang="css">
.form-row {
  @apply bg-teal-light rounded m-1 p-1 relative;
}
.form {
  @apply bg-white items-center rounded shadow m-1 p-1 w-24 flex  text-grey-darkest no-underline relative;
}
input {
  @apply   rounded shadow w-full;
  background: #b2f5ea;
}
.time {
  @apply absolute px-2 mx-1;
}
</style>
