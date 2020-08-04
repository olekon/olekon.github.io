<template>
    <ul class="portfolio-filters d-flex flex-wrap">
        <li
            class="filter-btn all-filter"
            :class="getClass(null)"
            @click="clearFilter"
        >
            {{ $t('actions.showAll') }}
        </li>
        <li
            v-for="item in filters"
            :key="item.name"
            class="filter-btn"
            :class="getClass(item)"
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
        getClass(item) {
            return {
                active: this.activeFilter == item,
                inactive: this.activeFilter && this.activeFilter != item
            };
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
        margin: 0.3rem;
        padding: 0.5rem 1rem 0.5rem 0.5rem;

        min-width: 4rem;
        height: 3rem;

        display: flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;
        border: 1px solid rgb(100, 100, 100);
        background-color: rgb(210, 210, 210);
        border-radius: 8px;
        font-weight: bold;

        transition: background-color 0.5s ease-in-out;
        &.active {
            background-color: rgb(240, 240, 240);
        }
        &.inactive {
            opacity: 0.4;
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