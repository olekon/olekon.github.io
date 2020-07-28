<template>
    <div class="portfolio-list d-flex flex-wrap">
        <b-row
            cols="1"
            cols-lg="2"
        >
            <b-col
                v-for="project in list"
                :key="project.name"
            >
                <ProjectCard :project="project" />
            </b-col>
        </b-row>
    </div>
</template>

<script>
import ProjectCard from '~/components/ProjectCard.vue';
import { createNamespacedHelpers } from 'vuex';

const { mapState } = createNamespacedHelpers('projects');

export default {
    components: {
        ProjectCard
    },
    computed: {
        ...mapState(['list'])
    }
};
</script>