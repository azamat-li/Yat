<template>
  <div class="bg-transparent  ">
            <DefaultTemp>
                <div>
                <div class="header p-2 mb-4 w-1/3 bg-gray-800 text-gray-300 rounded-full">
                    {{ $t('tables.all') }}
                </div>
                </div>
                <FormNames />
                <router-link class="router-link" :to="{ name: 'forms' }">
                {{ $t('forms.all') }}
                </router-link>
                <div
                class="absolute top-0 flex flex-wrap   p-2 bg-gray-900"
                v-show="isFormsOpen"
                @click.self="close"
                >
                <router-view class="bg-gray-800 " />
                </div>
                <div
                class="absolute w-full h-full bg-opacity-75 top-0 flex flex-wrap  p-2  bg-gray-900"
                v-show="isFormOpen"
                @click.self="close"
                >
                <router-view class="bg-gray-800 w-full h-full" />
                </div>
								<p class="text-yellow-800"><b>{{$t('dashboard.hint')}}:</b> {{ $t('dashboard.prompt') }}</p>
            </DefaultTemp>
  </div>
</template>

<script>
import DefaultTemp from '@/templates/DefaultTemp'
import FormNames from '@/components/FormNames'

export default {
  components: {
    FormNames,
    DefaultTemp
  },
  computed: {
    isFormOpen() {
      return this.$route.name === 'form'
    },
    isFormsOpen() {
      return this.$route.name === 'forms'
    },
  },
  methods: {
    close() {
      this.$router.push({ name: 'dashboard' })
    }
  }
}
</script>

<style lang="scss" scoped>
body {
  @apply relative;
}
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
