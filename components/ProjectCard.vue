<template>
    <b-card
        :img-src="coverImage"
        :title="project.name"
        class="project-card"
        body-class="project-card-body"
    >
        <b-card-body overlay>
            <div class="project-card-overlay d-flex flex-column justify-content-between align-items-center">
                <h4 class="project-subtitle text-light">
                    {{ project.short }}
                </h4>
                <div class="project-tags d-flex flex-wrap">
                    <div
                        v-for="tag in project.keywords"
                        :key="tag"
                        class="project-tag bg-warning text-dark"
                    >
                        {{ tag }}
                    </div>
                </div>
                <b-button
                    class="w-50"
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
export default {
    props: {
        project: {
            type: Object,
            required: true,
        }
    },
    computed: {
        coverImage() {
            return this.project.images.length ? this.project.images[0] : null;
        }
    },
};
</script>

<style lang="scss">
$card-padding: 1.25rem;

.project-card .card-img {
    height: 200px;
    object-fit: cover;
}

.card-img-overlay {
    cursor: pointer;
    position: absolute;
    top: -$card-padding;
    right: -$card-padding;
    bottom: -$card-padding;
    left: -$card-padding;
    padding: $card-padding;

    &:hover {
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
        transition: all 0.5s ease-in;

        .project-subtitle {
            font-size: 14px;
        }
    }
}

.project-tags {
    padding: 1rem;
    .project-tag {
        padding: 4px 8px;
        border-radius: 8px;
        margin: 4px;
    }
}
</style>