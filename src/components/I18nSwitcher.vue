<template>
  <div>
    <section>
      <button @click="setLocale('en')">
        English
      </button>
      <button @click="setLocale('ru')">Russian</button>
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
  @apply p-1 m-1;
}
</style>
