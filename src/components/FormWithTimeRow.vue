<template>
  <div class="form-row">
    <div @click.self="goToForm(form)" class="form" :style="computedStyle">
      <input v-model="form.name" type="text" @blur="updateValue" :disabled="!isEditable" value />
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
    isEditable: {
      type: Boolean
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
      this.$store.dispatch('updateFormName', this.form)
    }
  },
  computed: {
    computedStyle() {
      return `left: ${this.indent}em`
    },
    ...mapActions(['updateFormName']),
    ...mapGetters(['getFormById']),
    clickedForm() {
      return this.getFormById(this.form.id)
    }
  }
}
</script>

<style lang="css">
.form-row {
  @apply bg-teal-light rounded m-1 p-1 relative;
}
.form {
  @apply bg-teal items-center rounded shadow m-1 py-1 pr-5 w-24 flex  text-grey-darkest no-underline relative;
}
input {
  @apply rounded shadow w-full;
  background: #b2f5ea;
}
.time {
  @apply absolute px-2 mx-1;
}
</style>
