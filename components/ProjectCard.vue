<template>
    <b-card
        :img-src="coverImage"
        :title="project.name"
        class="project-card"
        body-class="project-card-body"
    >
        <b-card-body overlay>
            <div class="project-card-overlay justify-content-center align-items-center">
                <div class="project-tags d-flex flex-wrap">
                    <div
                        v-for="tag in project.keywords"
                        :key="tag"
                        class="project-tag bg-dark text-light"
                    >
                        {{ tag }}
                    </div>
                </div>
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
    data() {
        return {

        };
    },
    computed: {
        coverImage() {
            return this.project.images.length ? this.project.images[0] : null;
        }
    },
    methods: {

    }
};
</script>

<style lang="scss">
$card-padding: 1.25rem;

.project-card .card-img {
    height: 240px;
    object-fit: cover;
}

.card-img-overlay {
    position: absolute;
    top: -$card-padding;
    right: -$card-padding;
    bottom: -$card-padding;
    left: -$card-padding;
    padding: $card-padding;

    &:hover {
        .project-card-overlay {
            display: flex;
            background: content-box
                linear-gradient(rgba(30, 30, 30, 0.9), rgba(20, 20, 20, 0.8));
        }
    }
    .project-card-overlay {
        width: 100%;
        height: 100%;
        display: none;
        //transition: all 1s ease;
    }
}

.project-tags {
    padding: 0 1rem;
    .project-tag {
        padding: 4px 8px;
        border-radius: 8px;
        margin: 4px;
    }
}
</style>