<template>
  <div>
    <button
      class="isEditableButton bg-teal-dark hover:bg-teal-darkest text-white font-bold py-2 px-4 rounded-full"
      @click="toggleisEditable"
    >
      <div v-if="isEditable">Editable</div>
      <div v-if="!isEditable">Not Editable</div>
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['isEditable'])
  },
  methods: {
    toggleisEditable() {
      this.$store.commit('TOGGLE_EDITABILITY', {
        key: 'isEditable',
        value: !this.isEditable
      })
      this.$emit('toggle-is-editable')
    }
  }
}
</script>

<style lang="scss" scoped></style>
