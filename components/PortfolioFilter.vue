<template>
    <ul class="portfolio-filters d-flex flex-wrap">
        <li
            class="filter-btn all-filter"
            :class="{active: activeFilter == null}"
            @click="clearFilter"
        >
            {{ $t('actions.showAll') }}
        </li>
        <li
            v-for="item in filters"
            :key="item.name"
            class="filter-btn"
            :class="{active: activeFilter == item}"
            @click="chooseFilter(item)"
        >
            <b-img
                class="logo"
                alt="logo"
                :src="getLogo(item)"
            /> <span>{{ item.name }}</span>
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
        getLogo(filter) {
            return require(`~/assets/images/${filter.image}`);
        },
        ...mapMutations(['clearFilter', 'chooseFilter'])
    }
};
</script>

<style lang="scss">
.portfolio-filters {
    padding: 0;
    list-style: none;

    .filter-btn {
        min-width: 4rem;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;
        padding: 0.5rem;
        border: 1px solid black;
        margin: 0.5rem;
        &.active {
            border: none;
            font-weight: bold;
            background-color: wheat;
        }
        &::marker {
            display: none;
            content: none;
        }

        .logo {
            display: block;
            height: 100%;
            margin-right: 0.5rem;
        }
    }
}
</style>