<template>
    <div>
      <DefaultTemp>
      <template   v-if="notLoggedIn">
            <h1 > {{ $t('home.status')}} </h1>
            <div >
                {{ $t('home.message')}}
            </div>
            <router-link :to="{name: 'login'}">
                {{ $t('auth.login')}}
            </router-link>
                {{ $t('or')}}
            <router-link :to="{ name: 'register'}">
                {{ $t('auth.register')}}
            </router-link>
      </template>
      </DefaultTemp>
    </div>
</template>

<script>
import DefaultTemp from '@/templates/DefaultTemp'

import { authComputed } from '@/store/helpers'
    export default {
        components: {
            DefaultTemp
        },
    computed: {
        notLoggedIn() {
            return !this.loggedIn
        }
    }
    }
</script>

<style lang="scss" scoped>

</style>