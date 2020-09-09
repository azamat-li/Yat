<template>
  <div id="app">
    <router-view />
  </div>
</template>

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
</style>
