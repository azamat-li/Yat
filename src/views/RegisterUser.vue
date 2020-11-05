<template>
    <div >
        <form class="form">
            <label for="name">
            {{ $t('auth.name')  }}  
            </label>
            <input   v-model="name" type="text" name="name" value>

            <label for="email">
                {{ $t('auth.email') }} 
            </label>
                    <input v-model="email" type="email" name="email" value>

            <label for="password">
                {{ $t('auth.password') }}
                </label>
                    <input v-model="password" type="password" name value>

                <button class="button" type="submit" name="button">
                     {{ $t('auth.submit') }}  
                </button>
                <router-link :to="{name: 'login'}">
                    {{ $t('auth.loginSentence')}}
                </router-link>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: '',
                email: '',
                password: ''
        }
    },
    methods:  {
        RegisterUser(){
            this.$store.dispatch('register', {
                name: this.name,
                email: this.email,
                password: this.password
            })
            .then(() => {
                this.$router.push({name: 'dashboard'})
            })
        }
    }
    }
</script>

<style lang="scss" scoped>
input {
    @apply rounded-full;
}
</style>