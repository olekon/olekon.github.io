<template>
    <div>
        <PortfolioFilter />
        <div class="portfolio-list">
            <b-row
                cols="1"
                cols-md="2"
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
    watch: {
        filteredProjects: function (newItems, oldItems) {
            if (newItems.length !== oldItems.length) {
                //portfolio height changes - must recalculate trigger positions
                this.$nextTick(() => {
                    this.$scrollTrigger.refresh();
                });
            }
        }
    },
    methods: {
        onProjectClick(project) {
            this.chooseActiveProject(project);
        },
        ...mapMutations(['chooseActiveProject'])
    },
};
</script>

<style lang="scss">
.portfolio-list {
    .portfolio-col {
        flex-grow: 1;
    }
    .project-card {
        margin-bottom: 3rem;
    }
    .col {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }
}
</style>