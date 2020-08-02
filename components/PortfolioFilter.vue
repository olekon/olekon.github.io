<template>
    <ul class="portfolio-filters d-flex flex-wrap">
        <li
            class="all-filter"
            @click="clearFilter"
        >
            {{ $t('actions.showAll') }}
        </li>
        <li
            v-for="item in filters"
            :key="item.name"
            :class="{active: activeFilter == item}"
            @click="chooseFilter(item)"
        >
            {{ item.name }}
        </li>
    </ul>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapMutations, mapState } = createNamespacedHelpers('projects');

export default {
    computed: {
        ...mapState(['filters', 'activeFilter'])
    },
    methods: {
        ...mapMutations(['clearFilter', 'chooseFilter'])
    }
};
</script>

<style lang="scss">
.portfolio-filters {
    list-style: none;
    li {
        cursor: pointer;
        padding: 0.5rem;
        border: 1px solid black;
        margin: 0.5rem;
        &.active {
            color: blue;
        }
        &::marker {
            display: none;
            content: none;
        }
    }
}
</style>