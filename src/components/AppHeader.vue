<template>
    <header class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="">Boolfolio</a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active" v-for="(link, index) in linkItems" :key="index">
                        <router-link class="nav-link" :to="{name: link.routeName}"> {{ link.label }} </router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>
<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            linkItems: [
                {
                    label: 'Home',
                    routeName: 'home'
                },
                {
                    label: 'Projects',
                    routeName: 'projects.index'
                },
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
    
</style>