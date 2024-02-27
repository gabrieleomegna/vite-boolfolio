<template lang="">
    <div class="col-3 mx-4 my-5">
        <div class="card" style="width: 18rem;">
            <img :src="project.proj_image" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ project.title }}</h5>
                <p class="card-text">{{ project.description }}</p>
                <router-link :to="linkRoute" class="btn btn-primary">
                    {{ linkLabel }}
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'SingleCard',
    props: {
        project:{
            required: true,
            type: Object
        },
        linkRoute: {
            required: false,
            type: [ Object, String ]
        },
        linkLabel: {
            required: false,
            type: String,
        },
    }
}
</script>
<style lang="scss" scoped>
    
</style>