<template>
    <div class="container flex-column justify-content-around">
        <div class="error-container d-flex align-items-center flex-column flex-sm-row">
            <h1 class="mr-sm-5 text-danger">
                {{ error.statusCode }}
            </h1>
            <h2>
                {{ errorText }}
            </h2>
        </div>

        <div class="home-link mt-4">
            <nuxt-link to="/">
                {{ $t('actions.toHomePage') }}
            </nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        error: {
            type: Object,
            required: true
        }
    },
    computed: {
        errorText() {
            return this.error.statusCode === 404 ? this.$t('errors.error404') : this.$t('errors.common');
        }
    }
};
</script>

<style lang="scss">
.error-container {
    h1 {
        font-size: 64px;
    }
}
</style>