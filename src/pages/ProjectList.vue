<script>
import axios from 'axios';
import SingleCard from './SingleCard.vue';

export default {
    name: 'ProjectList',
    components: {
        SingleCard
    },
    data() {
        return {
            projects: [],
        }
    },
    methods: {
        getProjects() {
            axios.get('http://127.0.0.1:8000/api/projects', {
                params: { }
            })
            .then((response) => {
                console.log(response.data.results.data);
                this.projects = response.data.results.data;
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
                <div class="container">
                    <div class="row justify-content-center">
                        <SingleCard v-for="project in projects" :key="project.id"
                            :project="project" :linkRoute="{ name: 'projects.show', params: { id: project.id}}" linkLabel="Read more..."/>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
    
</style>