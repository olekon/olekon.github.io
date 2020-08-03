<template>
    <div class="contact-buttons">
        <b-button
            v-for="item in contacts"
            :key="item.name"
            class="contact-button"
            :href="item.url"
            target="_blank"
        >
            {{ item.name }}
        </b-button>
    </div>
</template>

<script>
import data from '~/assets/js/data';
export default {
    computed: {
        contacts() {
            return data.contacts;
        }
    },
};
</script>

<style lang="scss">
.contact-buttons {
    display: flex;
    flex-direction: column;
}
</style>