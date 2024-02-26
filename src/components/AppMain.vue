<script>
import axios from 'axios';

export default {
    name: 'AppMain',
    data() {
        return {
            posts: [],
        }
    },
    methods: {
        getProjects() {
            axios.get('http://127.0.0.1:8000/api/projects', {
                params: { }
            })
            .then((response) => {
                console.log(response.data.results.data);
                this.posts = response.data.results.data;
            })
            .catch(function (error) {
                console.warn(error);
            })
        }
    },
    created() {
        this.getProjects();
    },
}
</script>

<template>
    <main class="container">
        <section class="row">
            <div class="col-12">
                <h1>
                    Our latest projects:
                </h1>
                <ul>
                    <li v-for="post in posts" :key="post.id">
                        {{ post.title }}

                    </li>
                </ul>
            </div>
        </section>
    </main>
</template>

<style lang="scss">
    
</style>