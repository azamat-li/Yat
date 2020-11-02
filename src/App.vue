<template>
  <div id="app" class="bg-gray-900">
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    const locale = localStorage.getItem('locale')
    if (locale) {
      this.$i18n.locale = locale
    } else if (navigator.language) {
      this.$i18n.locale = navigator.language.substring(0, 2)
    }
  }
}
</script>

<style lang="css">
@tailwind base;
@tailwind components;
@tailwind utilities;

body,
html {
  height: 100%;
}
.router-link {
  @apply text-gray-900;
}

#app {
  @apply text-gray-800;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
}

::selection {
  @apply bg-indigo-200;
}
::moz-selection {
  @apply bg-indigo-200;
}

.header {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

input {
  @apply rounded-sm shadow-sm text-gray-300;
}

input::placeholder {
  @apply text-gray-200;
}
</style>
