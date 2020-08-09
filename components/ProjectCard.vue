<template>
    <b-card
        :img-src="project.coverImage"
        :title="project.displayName"
        class="project-card"
        body-class="project-card-body"
    >
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

.project-card .card-img {
    height: 200px;
    object-fit: cover;
}

.project-card-body {
    .card-title {
        font-size: 1.3rem;
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
                rgba(30, 30, 30, 0.9),
                rgba(20, 20, 20, 0.8)
            );
        }
    }
    .project-card-overlay {
        padding: 1rem;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: all 0.3s ease-in;

        .project-subtitle {
            font-size: 14px;
        }
    }
}
</style>