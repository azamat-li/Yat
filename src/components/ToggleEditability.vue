<template>
  <div class="main">
    <button
      class="isEditableButton bg-teal-dark hover:bg-teal-darkest text-white font-bold py-2 px-4 rounded-full"
      @click="toggleisEditable"
    >
      <div v-if="this.isEditable">Можно менять</div>
      <div v-if="!this.isEditable">Нельзя менять</div>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    isEditable: {
      type: Boolean
    }
  },
  methods: {
    toggleisEditable() {
      this.$emit('toggle-editability')
    }
  }
}
</script>

<style lang="css" scoped>
.main {
    @apply my-2 p-1;
}
</style>
