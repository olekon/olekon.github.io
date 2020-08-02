<template>
    <div>
        <PortfolioFilter />
        <div class="portfolio-list">
            <b-row
                cols="1"
                cols-lg="2"
            >
                <b-col
                    v-for="project in filteredProjects"
                    :key="project.name"
                    class="portfolio-col"
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
import PortfolioFilter from '~/components/PortfolioFilter.vue';
import { createNamespacedHelpers } from 'vuex';

const { mapGetters, mapMutations } = createNamespacedHelpers('projects');

export default {
    components: {
        ProjectCard,
        ProjectDetails,
        PortfolioFilter
    },
    computed: {
        ...mapGetters(['filteredProjects'])
    },
    methods: {
        onProjectClick(project) {
            this.chooseActiveProject(project);
        },
        ...mapMutations(['chooseActiveProject'])
    }
};
</script>

<style lang="scss">
.portfolio-col {
    flex-grow: 1;
}
</style>