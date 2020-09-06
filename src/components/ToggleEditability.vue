<template>
  <div class="main">
    <button
      class="isEditableButton  bg-red-100 hover:bg-yellow-100 text-grey-900 font-bold py-2 px-4 rounded-full"
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
  @apply my-2 p-1;
}

</style>
