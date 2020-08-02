<template>
    <b-modal
        v-if="activeProject"
        id="details-modal"
        size="lg"
        visible
        :title="activeProject.displayName"
        hide-footer
        @hide="onModalClose"
    >
        <div class="details-content h-100">
            <div class="details-description mt-2">
                <div class="details-description-long">
                    <p
                        v-for="(item, index) in activeProject.long"
                        :key="index"
                    >
                        <VueMarkdown>{{ item }}</VueMarkdown>
                    </p>
                </div>
                <div class="details-description-tech">
                    <h3>{{ $t('headers.techDetails') }}</h3>
                    <p
                        v-for="(item, index) in activeProject.tech"
                        :key="index"
                    >
                        <VueMarkdown>{{ item }}</VueMarkdown>
                    </p>
                    <div class="details-description-keywords d-flex">
                        <div
                            v-for="item in activeProject.keywords"
                            :key="item"
                            class="details-description-keyword m-1 p-2 bg-warning text-dark"
                        >
                            {{ item }}
                        </div>
                    </div>
                </div>
                <div class="details-description-links mt-4">
                    <h3>{{ $t('headers.links') }}</h3>
                    <div v-if="renderLinks">
                        <p
                            v-for="(item, index) in Object.entries(activeProject.links)"
                            :key="index"
                        >
                            <b-link
                                :href="item[1]"
                                target="_blank"
                            >
                                {{ $t('links.' + item[0]) }}
                            </b-link>
                        </p>
                    </div>
                    <p v-else>
                        {{ activeProject.links }}
                    </p>
                </div>
            </div>
        </div>
    </b-modal>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapMutations } = createNamespacedHelpers('projects');

export default {
    components: {
        VueMarkdown
    },
    props: {

    },
    data() {
        return {
            containerId: 'details-container',
        };
    },
    computed: {
        show: {
            get() {
                return this.activeProject !== null;
            },
            set(value) {
                if (!value) {
                    this.clearActiveProject();
                }
            }
        },
        renderLinks() {
            return (typeof this.activeProject.links) === 'object';
        },
        ...mapState(['activeProject']),
    },

    methods: {
        onModalClose() {
            this.clearActiveProject();
        },
        ...mapMutations(['clearActiveProject']),
    }
};
</script>

<style lang="scss">
.details-description-keywords {
    flex-wrap: wrap;
    .details-description-keyword {
        border-radius: 4px;
    }
}
</style>