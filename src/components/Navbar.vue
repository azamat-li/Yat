<template>
    <div id="nav" class="rounded-full mb-2"> 
        <div v-if="notLoggedIn" >
                <button type="button" class="btn"  @click="login">
                    {{ $t('auth.login') }}
                </button>
                <button type="button" class="btn" @click="register">
                    {{ $t('auth.register') }} 
                </button>
        </div>
        <div v-else>
            <button type="button"  class="btn" @click="goToDashboard"   > 
            {{     $t('dashboard')   }}
            </button>
            <button type="button" class="logoutButton btn" @click="logout">
                {{ $t('auth.logout') }}
            </button>
        </div>
    </div>
</template>

<script>
import { authComputed } from '../store/helpers'
    export default {
        computed: {
            user() {
                return this.$store.state.user
            },
         ...authComputed,
         notLoggedIn() {
             return !this.loggedIn
         }
        },
        methods: {
            login() {
                this.$router.push({ name: 'login'})
            },
            logout() {
                this.$router.push('/')
                this.$store.dispatch('logout')
            },
            register() {
                this.$router.push({name: 'register'})
            },
            goToDashboard() {
                this.$router.push({ name: 'dashboard'})
            },
        }
    }
</script>

<style lang="scss" scoped>
#nav {
    display: flex;
    align-items: center;
    min-height: 50px;
    padding: 0.2em 1em;
   background:  radial-gradient( circle farthest-corner at 4.7% 14%, rgba(48,225,152,1) 0%, rgba(9,123,226,1) 90% );
} .nav-welcome { margin-left: auto; margin-right: 1rem; color: white; } a { font-weight: bold; color: #2c3e50; margin: auto 0.8em auto 0.4em; text-decoration: none; border-top: 2px solid transparent; } .router-lint-exact-active {
    color: white;
    border-bottom: 2px solid #fff;
}

button,
.btn {
    margin-left: auto;
    background: white;
    text-decoration: none ;
    color:  #2c3e50;
    @apply rounded-full p-1 m-1 inline-block;
     
     &.router-link-active {
         color: #2c3e50;
     }
}


.logoutButton {
    cursor: pointer;
}

.nav-welcome + button {
    margin-left: 0;
}
</style>