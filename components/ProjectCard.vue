<template>
    <b-card
        :title="project.displayName"
        class="project-card"
        body-class="project-card-body"
    >
        <div class="img-wrapper">
            <b-card-img-lazy :src="project.coverImage" />
        </div>

        <b-card-body
            overlay
            @click.stop.prevent="onCardClick"
        >
            <div class="project-card-overlay d-flex flex-column justify-content-between align-items-center">
                <h4 class="project-subtitle text-light">
                    {{ project.short }}
                </h4>
                <KeywordsList
                    :keywords="project.keywords"
                    class="mb-2"
                />
                <b-button
                    class="w-75 details-btn btn-animated"
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
@import "~bootstrap/scss/bootstrap-grid.scss";
$card-padding: 1.25rem;

.project-card {
    border-radius: 0;
    background: linear-gradient(to right, #3b6978b0, 30%, #84a9ac80);
    border-color: #e0e0e0;

    .img-wrapper {
        position: relative;
        padding-top: 40%;
        .card-img {
            border-radius: 0;
            object-fit: cover;

            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: auto;
            max-height: 100%;
        }
    }

    .project-card-body {
        padding: 1rem 0 0 0;
        @include media-breakpoint-down(md) {
            padding: 0.5rem 0 0 0;
        }

        .card-title {
            @include media-breakpoint-down(md) {
                font-size: 1rem;
                margin-bottom: 0.3rem;
            }
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
                    to bottom,
                    rgba(30, 30, 30, 0.9),
                    rgba(10, 10, 10, 0.9)
                );
            }
        }
        .project-card-overlay {
            @include media-breakpoint-down(md) {
                padding: 0.6rem;
            }
            padding: 1rem;
            width: 100%;
            height: 100%;
            opacity: 0;
            transition: all 0.4s ease-in;

            .project-subtitle {
                @include media-breakpoint-down(md) {
                    font-size: 13px;
                }
                font-size: 14px;
            }
            .details-btn {
                @include media-breakpoint-down(md) {
                    font-size: 13px;
                    line-height: 1;
                    padding: 4px 12px;
                }
            }
        }
    }
}
</style>