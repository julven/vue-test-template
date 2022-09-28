<template>
    <div>
        <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/list">List</router-link> |
            <router-link to="/account">Account</router-link>
        </nav>
    </div>

</template>

<script>
export default {
    name: 'Nav',
    props: {},
    setup() {


        return {

        }
    }
}
</script>