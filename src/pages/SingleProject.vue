<template>
    <div class="container">
        <div class="row justify-content-center">
            <SingleCard :project = "project"/>
        </div> 
    </div>
</template>
<script>
import SingleCard from './SingleCard.vue';
import axios from 'axios';
export default {
    name: 'SingleProject',
    components: {
        SingleCard
    },
    data() {
        return {
            project: {},
            id: ''
        }
    },
    methods: {
        getProject() {
            axios.get(`http://127.0.0.1:8000/api/projects/${this.$route.params.id}`, {
                params: { }
            })
            .then((response) => {
                console.log(response.data.results);
                this.project = response.data.results;
            })
            .catch(function (error) {
                console.warn(error);
            })
        }
    },
    created() {
        this.getProject();
    },
}
</script>
<style lang="scss" scoped>
    
</style>