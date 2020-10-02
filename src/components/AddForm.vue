<template>
  <div class="m-2 w-full h-8">
    <input
      class="bg-transparent p-1 mx-4 w-40 r-align"
      type="text"
      placeholder="+ Добавьте Класс"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped>
.r-align {
  float: right;
  overflow: auto;
}
</style>
