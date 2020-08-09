<template>
    <carousel
        class="posts-list"
        :scroll-per-page="false"
        :per-page="1"
        :per-page-custom="[[768, 2]]"
        navigation-enabled
        :navigation-next-label="navNextLabel"
        :navigation-prev-label="navPrevLabel"
    >
        <slide
            v-for="post in posts"
            :key="post.name"
            class="posts-item"
        >
            <div class="slide-content">
                <h5>{{ post.title }}</h5>
                <KeywordsList :keywords="post.keywords" />
                <b-button
                    variant="primary"
                    class="w-75"
                    :href="post.url"
                    target="_blank"
                >
                    {{ $t('actions.readPost') }}
                </b-button>
            </div>
        </slide>
    </carousel>
</template>

<script>
import data from '~/assets/js/data.js';
import KeywordsList from '~/components/KeywordsList';

export default {
    components: {
        KeywordsList
    },

    computed: {
        posts() {
            return data.posts;
        },
        navNextLabel() {
            return '<i class="fas fa-angle-right" />';
        },
        navPrevLabel() {
            return '<i class="fas fa-angle-left" />';
        }
    },

}; 
</script>

<style lang="scss">
.posts-item {
    padding: 1rem;

    .slide-content {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        height: 16rem;
        padding: 1rem;

        background: linear-gradient(rgb(160, 160, 160), rgb(200, 200, 200));
    }
}

.VueCarousel-navigation-button {
    padding: 0 !important;
}

.VueCarousel-dot-container {
    margin-top: 0 !important;

    .VueCarousel-dot {
        margin-top: 0 !important;
    }
}
</style>