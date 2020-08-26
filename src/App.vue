<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="sass">
@import 'assets/styles/tailwind.postcss'

body,
html
    height: 100%

#app
    font-family: Avenir, Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50
    height: 100%

.container
@apply mx-auto

::selection
    background: #b2f5ea

::moz-selection
    background: #b2f5ea

.router-link
    color: #4a5568
</style>

<style lang="css">
@tailwind base;

.header {
  @apply text-2xl p-2;
}
</style>
