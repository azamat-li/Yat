<template>
  <div class="form-row bg-gray-800">
    <div
      @click.self="goToForm(form)"
      class="form bg-gray-700 rounded-full"
      :style="computedStyle"
    >
      <input
        class="bg-gray-800 text-gray-200 px-2 rounded-full"
        v-model="form.name"
        type="text"
        @blur="updateValue"
        @keyup.enter="updateValue"
        :disabled="!isEditable"
        placeholder="класс #"
        value
      />
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
  @apply rounded-full m-1 py-1 pl-1 relative;
}
.form {
  @apply items-center  shadow m-1 py-1 px-1 pr-4 w-24 flex   no-underline relative;
}
input {
  @apply rounded shadow w-full;
}

input::placeholder {
  @apply text-gray-200;
}
.time {
  @apply absolute px-2 mx-1;
}
</style>
