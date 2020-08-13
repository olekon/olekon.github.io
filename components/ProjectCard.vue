<template>
    <b-card
        :title="project.displayName"
        class="project-card"
        body-class="project-card-body"
    >
        <b-card-img-lazy :src="project.coverImage" />
        <b-card-body
            overlay
            @click.stop.prevent="onCardClick"
        >
            <div class="project-card-overlay d-flex flex-column justify-content-between align-items-center">
                <h4 class="project-subtitle text-light">
                    {{ project.short }}
                </h4>
                <KeywordsList :keywords="project.keywords" />
                <b-button
                    class="w-75"
                    variant="light"
                    @click="$emit('click')"
                >
                    {{ $t('actions.details') }}
                </b-button>
            </div>
        </b-card-body>
    </b-card>
</template>

<script>
import KeywordsList from '~/components/KeywordsList';
export default {
    components: {
        KeywordsList
    },
    props: {
        project: {
            type: Object,
            required: true,
        }
    },
    methods: {
        onCardClick() {
            //keep for mobile hover 
        }
    }
};
</script>

<style lang="scss">
$card-padding: 1.25rem;

.project-card {
    border-radius: 0;
    background: linear-gradient(to right, #3b6978b0, 30%, #84a9ac80);
    border-color: #e0e0e0;
    .card-img {
        border-radius: 0;
        height: 200px;
        object-fit: cover;
    }
    .project-card-body {
        padding: 1rem 0 0 0;
        .card-title {
            font-size: 1.3rem;
            font-weight: bold;
            letter-spacing: 0.01em;
            font-family: "Roboto condensed", sans-serif;
        }
    }

    .card-img-overlay {
        cursor: pointer;
        position: absolute;
        top: -$card-padding;
        right: -$card-padding;
        bottom: -$card-padding;
        left: -$card-padding;
        padding: $card-padding;

        &:hover,
        &:active {
            .project-card-overlay {
                opacity: 1;
                background: linear-gradient(
                    to top,
                    rgba(30, 30, 30, 0.8),
                    rgba(10, 10, 10, 0.8)
                );
            }
        }
        .project-card-overlay {
            padding: 1rem;
            width: 100%;
            height: 100%;
            opacity: 0;
            transition: all 0.4s ease-in;

            .project-subtitle {
                font-size: 14px;
            }
        }
    }
}
</style>