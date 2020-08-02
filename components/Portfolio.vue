<template>
    <div>
        <div class="portfolio-list d-flex flex-wrap">
            <b-row
                cols="1"
                cols-lg="2"
            >
                <b-col
                    v-for="project in list"
                    :key="project.name"
                >
                    <ProjectCard
                        :project="project"
                        @click="onProjectClick(project)"
                    />
                </b-col>
            </b-row>
        </div>
        <ProjectDetails />
    </div>
</template>

<script>
import ProjectCard from '~/components/ProjectCard.vue';
import ProjectDetails from '~/components/ProjectDetailsModal.vue';
import { createNamespacedHelpers } from 'vuex';

const { mapState, mapMutations } = createNamespacedHelpers('projects');

export default {
    components: {
        ProjectCard,
        ProjectDetails
    },
    computed: {
        ...mapState(['list'])
    },
    methods: {
        onProjectClick(project) {
            this.chooseActiveProject(project);
        },
        ...mapMutations(['chooseActiveProject'])
    }
};
</script>