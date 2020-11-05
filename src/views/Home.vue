<template>
    <div>
      <Navbar></Navbar>
      <template   v-if="notLoggedIn">
            <h1 > {{ $t('home.greeting')}} </h1>
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
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import { authComputed } from '@/store/helpers'
    export default {
        components: {
            Navbar
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