<template>
  <div class="main bg-gray-800">
    <button
      class="isEditableButton  bg-gray-800 hover:bg-gray-900 hover:text-gray-200 text-grey-300 font-bold py-2 px-4 rounded-full"
      @click="toggleisEditable"
    >
      <div v-show="this.isEditable" data-testid="unLockedButton">Рады изменениям</div>
      <div v-show="!this.isEditable" data-testid="lockedButton">Заперто</div>
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
  @apply  p-1;
}

</style>
