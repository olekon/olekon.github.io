<template>
    <ul class="portfolio-filters d-flex flex-wrap justify-content-center">
        <li
            class="filter-btn"
            :class="getClass(null)"
            @click="onFilterClick(null)"
        >
            {{ $t('actions.showAll') }}
        </li>
        <li
            v-for="item in filters"
            :key="item.name"
            class="filter-btn"
            :class="getClass(item)"
            @click="onFilterClick(item)"
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
                inactive: this.activeFilter && this.activeFilter != item,
                ['filter-' + (item ? item.name : 'all')]: true,
            };
        },
        onFilterClick(filter) {
            if (filter) {
                this.chooseFilter(filter);
            } else {
                this.clearFilter();
            }
        },
        ...mapMutations(['clearFilter', 'chooseFilter'])
    }
};
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap-grid.scss";

.portfolio-filters {
    padding: 0;
    list-style: none;

    .filter-btn {
        @include media-breakpoint-down(sm) {
            padding: 0.3rem;
            height: 2rem;
            //   border-radius: 4px;
        }
        margin: 0.2rem;
        padding: 0.3rem 0.5rem 0.3rem 0.3rem;

        min-width: 3.5rem;
        height: 3rem;

        display: flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;
        border: 1px solid rgb(140, 140, 140);
        background-color: rgb(210, 210, 210);
        border-radius: 8px;

        font-size: 0.8rem;
        font-weight: bold;

        transition: background-color 0.5s ease-in-out;

        &:hover {
            background-color: rgb(160, 160, 160);
        }
        &.active {
            background-color: rgb(230, 230, 230);
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

            @include media-breakpoint-down(sm) {
                width: 30px;
                object-fit: contain;
                margin-right: 0.2rem;
            }
        }
    }
}
</style>