<template>
    <div>
        <div
            :id="containerId"
            :class="{show}"
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
        padding: 20px;
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
            background: #ffffff;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
            border-radius: 8px;
        }

        .popover-header {
        }

        .arrow {
            display: none;
        }
    }
}
</style>