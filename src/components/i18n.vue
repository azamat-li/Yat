<template>
    <div class="text-gray-400 ">
        <h2> {{ localized('editable') }}</h2>
        <button @click="activeLocal='en'">English</button>
        <button @click="activeLocal='ru'">Russian</button>
        <button @click="activeLocal='ba'">Bashkir</button>
    </div>
</template>

<script>
    export default {
  data() {
      return {
              activeLocal: 'en',
              editability: {
                  en: {
                      editable: 'Editing',
                      nonEditable: 'Watching'
                  },
                  ru: {
                      editable: 'Изменение',
                      nonEditable: 'Просмотр'
                  },
                  ba: {
                      editable: 'Узгартеу',
                      nonEditable: 'Карау'
                  }
              }
      }
  },
  methods: {
      localized(key){
          return this.editability[this.activeLocal][key]
      }
  }
    }
</script>

<style lang="scss" scoped>
button {
    @apply p-1 m-1;
}
</style>