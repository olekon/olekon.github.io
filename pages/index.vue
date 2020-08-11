<template>
    <div class="container">
        <main>
            <section id="about">
                <div class="about-content">
                    <h3>{{ $t('about.p1') }}</h3>
                    <p>{{ $t('about.p2') }}</p>
                    <p>{{ $t('about.p3') }}</p>
                </div>
            </section>
            <section id="portfolio">
                <h2 class="mb-4">
                    {{ $t('headers.portfolio') }}
                </h2>
                <div class="portfolio-content">
                    <Portfolio />
                </div>
            </section>
            <section id="posts">
                <h2>
                    {{ $t('headers.posts') }}
                </h2>
                <div class="posts-content">
                    <client-only>
                        <PostsList />
                    </client-only>
                </div>
            </section>
            <section id="contacts">
                <h2>
                    {{ $t('headers.contacts') }}
                </h2>
                <div class="contacts-content d-flex justify-content-center">
                    <ContactButtons />
                </div>
            </section>
        </main>
    </div>
</template>

<script>
import Portfolio from '~/components/Portfolio.vue';
import PostsList from '~/components/PostsList.vue';
import ContactButtons from '~/components/ContactButtons.vue';

export default {
    components: {
        ContactButtons,
        Portfolio,
        PostsList
    },
    data() {
        return {
            sections: [{
                header: '#portfolio h2',
                content: '.portfolio-content',
            }, {
                header: '#posts h2',
                content: '.posts-content',
            }, {
                header: '#contacts h2',
                content: '.contacts-content',
            }]

        };
    },
    mounted() {
        this.createAnimations();

    },

    methods: {
        createAnimations() {
            this.sections.forEach(section => {
                this.createSectionTimeline(section);
            });
        },

        createSectionTimeline({ header, content }) {
            const tl = this.$gsap.timeline({
                scrollTrigger: {
                    trigger: header,
                    start: 'bottom 90%',
                    end: 'top 15%',
                    scrub: true,
                }
            });
            tl.from(header, { xPercent: -120, duration: 1, ease: 'power3' });
            tl.from(content, { xPercent: 110, duration: 1.5, ease: 'power3' }, '-=0');
        }
    }
};
</script>

<style>
.container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system,
        BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
        sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}

.subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
}

.links {
    padding-top: 15px;
}

.about-content {
    padding-top: 10%;
    font-size: 20px;
}

.posts-content {
    padding-top: 5rem;
}
</style>
