<template>
    <div>
        <Navbar></Navbar>
        <slot>  </slot>
        <Foo> </Foo>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Foo from '@/components/Foo.vue'

    export default {
        components: {
            Foo,
            Navbar
        }
    }
</script>

<style lang="scss" scoped>

</style>