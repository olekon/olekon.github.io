<template>
    <div class="keywords-list d-flex flex-wrap">
        <div
            v-for="item in keywords"
            :key="item"
            class="keywords-item bg-warning text-dark"
        >
            {{ item }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        keywords: {
            type: Array,
            required: true
        }
    }
};
</script>

<style lang="scss">
.keywords-list {
    .keywords-item {
        padding: 4px 8px;
        border-radius: 8px;
        margin: 4px;
        font-size: 14px;
        font-weight: bold;
    }
}
</style>