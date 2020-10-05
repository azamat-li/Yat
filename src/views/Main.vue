<template>
  <div class="bg-transparent p-2 relative">
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
      class="absolute top-0 w-full h-full  forms-background"
      v-show="isFormsOpen"
      @click.self="close"
    >
      <router-view class="router-view" />
    </div>
    <div
      class="absolute top-0 w-full h-full p-4 bg-gray-900"
      v-show="isFormOpen"
      @click.self="close"
    >
      <router-view class="bg-gray-800" />
    </div>
  </div>
</template>

<script>
import FormNames from '@/components/FormNames'

export default {
  components: {
    FormNames
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
.forms-background {
  height: 500vh;
}
.router-link {
  @apply text-gray-400;
}
</style>
