<template>
  <div>
    <section>
      <button @click="setLocale('en')" >In English</button>
      <button @click="setLocale('ru')">На Русском</button>
      <button @click="setLocale('ba')">Башҡортса</button>
      <button @click="setLocale('tat')">Татарча</button>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale
      localStorage.setItem('locale', locale)
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  @apply p-1 m-1 inline-block text-gray-200 bg-gray-800;
}
</style>
