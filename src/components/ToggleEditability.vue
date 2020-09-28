<template>
  <div class="main bg-gray-800">
    <button
      class="rounded bg-gray-800 text-grey-300 font-bold py-2 px-4 hover:bg-gray-400 hover:text-gray-800 "
      @click="toggleisEditable"
    >
      <div v-show="this.isEditable" data-testid="unLockedButton">
        Рады изменениям
      </div>
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
  @apply p-1;
}
button:focus {
    outline-color: #4a5568
}
</style>
