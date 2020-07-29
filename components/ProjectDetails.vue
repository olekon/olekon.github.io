<template>
    <div v-if="activeProject">
        <div
            :id="containerId"
            :class="{show}"
            class=""
        />
        <b-popover
            id="details-popover"
            triggers="manual"
            :target="containerId"
            :container="containerId"
            :show.sync="show"
        >
            <template v-slot:title>
                <b-button
                    class="close"
                    aria-label="Close"
                    @click="show = false"
                >
                    <span
                        class="d-inline-block"
                        aria-hidden="true"
                    >&times;</span>
                </b-button>
                {{ activeProject.name }}
            </template>
            <div class="details-content h-100">
                <b-carousel
                    controls
                    indicators
                    :interval="0"
                >
                    <b-carousel-slide
                        v-for="image in activeProject.images"
                        :key="image"
                        class="slide-img"
                    >
                        <template v-slot:img>
                            <b-img :src="image" />
                        </template>
                    </b-carousel-slide>
                </b-carousel>

                <div class="details-description p-4 mt-2 bg-light">
                    <div class="details-description-long">
                        <p
                            v-for="(item, index) in activeProject.long"
                            :key="index"
                        >
                            {{ item }}
                        </p>
                    </div>
                    <div class="details-description-tech">
                        <h3>{{ $t('headers.techDetails') }}</h3>
                        <p
                            v-for="(item, index) in activeProject.tech"
                            :key="index"
                        >
                            {{ item }}
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
                    <div class="details-description-links">
                        <h3>{{ $t('headers.links') }}</h3>
                        <div v-if="renderLinks">
                            <p
                                v-for="(item, index) in activeProject.links"
                                :key="index"
                            >
                                <b-link
                                    :href="item"
                                    target="_blank"
                                >
                                    {{ item }}
                                </b-link>
                            </p>
                        </div>
                        <p v-else>
                            {{ activeProject.links }}
                        </p>
                    </div>
                </div>
            </div>
        </b-popover>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapMutations } = createNamespacedHelpers('projects');

export default {
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
            return Array.isArray(this.activeProject.links);
        },
        ...mapState(['activeProject']),
    },

    methods: {
        ...mapMutations(['clearActiveProject']),
    }
};
</script>

<style lang="scss">
#details-container {
    z-index: -1;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: white;
    &.show {
        z-index: 2000;
    }

    #details-popover {
        width: 100%;
        height: 100%;
        max-width: 100%;
        border: 0;
        margin: 0;
        transform: none !important;
        background: transparent;

        .popover-body {
            //padding: 20px;
            margin-left: auto;
            margin-right: auto;
            width: 100%;
            height: 100%;
            max-width: 100%;
            background: linear-gradient(rgb(100, 100, 100), rgb(80, 80, 80));

            .details-content {
                .carousel {
                    height: 50%;
                }
                .slide-img {
                    // width: auto;
                    // height: 30%;
                    img {
                        max-height: 400px;
                        width: 100%;
                        object-fit: contain;
                        object-position: center;
                    }
                }
                .details-description-keywords {
                    flex-wrap: wrap;
                    .details-description-keyword {
                        border-radius: 4px;
                    }
                }
            }
        }

        .popover-header {
        }

        .arrow {
            display: none;
        }
    }
}
</style>