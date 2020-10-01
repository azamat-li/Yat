<template>
  <div class="h-full w-full bg-gray-900 p-2">
    <div>
      <div class="header p-2 mb-4 w-1/3 bg-gray-800 text-gray-300 rounded-full">
        Общее школьное время корпуса
      </div>
    </div>
    <FormNames />
    <router-link class="router-link" :to="{ name: 'forms' }"
      >Все классы</router-link
    >
    <div
      class="background forms-background"
      v-show="isFormsOpen"
      @click.self="close"
    >
      <router-view class="router-view" />
    </div>
    <div
      class="background form-background"
      v-show="isFormOpen"
      @click.self="close"
    >
      <router-view class="router-view" />
    </div>
    <ToggleEditability class="toggleEditability"></ToggleEditability>
  </div>
</template>

<script>
import FormNames from '@/components/FormNames'
import ToggleEditability from '../components/ToggleEditability'

export default {
  components: {
    FormNames,
    ToggleEditability
  },
  computed: {
    isFormOpen() {
      return this.$route.name === 'form'
    },
    isFormsOpen() {
      return this.$route.name === 'forms'
    }
  },
  methods: {
    close() {
      this.$router.push({ name: 'main' })
    }
  }
}
</script>

<style lang="scss" scoped>
.toggleEditability {
  @apply bg-gray-900 text-gray-300;
  text-align: right;
}
.background {
  @apply bg-gray-900 absolute  top-0 w-full h-full;
  min-height: 100%;
}
.form-background {
  height: 120vh;
}
.forms-background {
  height: 500vh;
}
.router-view {
  @apply bg-gray-800 rounded absolute p-4 m-4;
}
.router-link {
  @apply text-gray-400;
}
</style>
