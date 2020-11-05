<template>
    <div>
        <section>
            <form @submit.prevent="login" class="form"> 
                <label for="email">
                    {{ $t('auth.email')}}
                </label>
                <input type="email" name="email" v-model="email" value >

                <label for="password">
                    {{ $t('auth.password')}}
                </label>
                <input type="password" name="password" v-model="password" value>

                <button class="button" type="submit" name="button"> 
                    {{ $t('auth.login')}}
                </button>
            </form>
        </section>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            login() {
                this.$store.dispatch('login', {
                    email: this.email,
                    password: this.password
                })
                .then(() => {
                    this.$router.push({ name: 'dashboard'})
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