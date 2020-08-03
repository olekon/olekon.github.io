<template>
    <div class="contact-buttons">
        <b-button
            v-for="item in contacts"
            :key="item.name"
            variant="link"
            class="contact-button"
            :class="item.name"
            :href="item.url"
            target="_blank"
        >
            <i
                class="mr-2"
                :class="item.icon"
            /><span>{{ item.title }}</span>
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
    width: 320px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .contact-button {
        display: block;
        font-size: 18px;
        &.email {
            font-size: 20px;
            margin: 2rem 0;
        }

        i {
            font-size: 24px;
        }
    }
}
</style>