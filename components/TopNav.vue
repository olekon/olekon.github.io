<template>
    <b-navbar
        id="main-nav"
        sticky
        toggleable="lg"
        variant="light"
    >
        <b-navbar-brand class="brand">
            <h1><span class="name">Oleg Kondrakhanov</span>Full stack web developer</h1>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse" />
        <b-collapse
            id="nav-collapse"
            is-nav
        >
            <b-navbar-nav class="ml-auto">
                <b-nav-item href="#about">
                    <i class="fas fa-user" /> {{ $t('headers.about') }}
                </b-nav-item>
                <b-nav-item href="#portfolio">
                    <i class="fas fa-briefcase" /> {{ $t('headers.portfolio') }}
                </b-nav-item>
                <b-nav-item href="#posts">
                    <i class="fas fa-pen-alt" /> {{ $t('headers.posts') }}
                </b-nav-item>
                <b-nav-item href="#contacts">
                    <i class="fas fa-paper-plane" /> {{ $t('headers.contacts') }}
                </b-nav-item>
                <b-nav-item-dropdown
                    class="nav-lang"
                    :text="$i18n.locale"
                >
                    <b-dropdown-item
                        v-for="lang in $i18n.locales"
                        :key="lang.code"
                        :class="`nav-lang-lang.code`"
                        @click="$i18n.setLocale(lang.code)"
                    >
                        {{ lang.code }}
                    </b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
export default {
    computed: {
        locales() {
            return this.$i18n.locales;
        }
    },
    methods: {
    }
};
</script>

<style lang="scss">
.nav-item {
    font-size: 20px;
    margin-right: 0.5rem;
}
</style>