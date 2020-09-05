<template>
  <div class="main">
    <button
      class="isEditableButton bg-red-100 hover:bg-red-300 text-grey-600 font-bold py-2 px-4 rounded-full"
      @click="toggleisEditable"
      :class="{ 'is-editable': isEditable }"
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
  @apply my-2 p-1;
}
.is-editable {
  @apply bg-teal-100;
}
.is-editable:hover {
  @apply bg-teal-300;
}
</style>
