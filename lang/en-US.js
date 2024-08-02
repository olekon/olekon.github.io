export default {
    headers: {
        about: 'About',
        portfolio: 'Portfolio',
        skills: 'Skills',
        posts: 'Articles',
        contacts: 'Contacts',
        techDetails: 'Tech details',
        links: 'Links'
    },
    errors: {
        error404: 'Sorry, but there is no such page',
        common: 'Sorry, something went wrong',
    },
    links: {
        website: 'Website',
        source: 'Source code',
        more: 'More'
    },
    actions: {
        details: 'Details...',
        showAll: 'All',
        readPost: 'Read...',
        toHomePage: 'Back to home',
    },
    about: {
        p1: 'Hello. My name is Oleg Kondrakhanov',
        p2: 'I am a full stack web and blockchain developer',
        p3: 'You can check my portfolio and blog posts below',
    },
    projects: {
        'bcshop.io': {
            short: 'Marketplace for digital goods and services based on the Ethereum blockchain.',
            long: [
                'I was one of the project’s core team members, the CTO. I researched Ethereum capabilities \
            and features, developed blockchain related modules - smart contracts and caching module, communicated \
            with our integration partners (Bancor) and managed outsource website development team.',
                'Apart from tech duties I also wrote monthly progress reports and articles for the company’s blog.'],
            tech: [
                'The website communicates with the blockchain via special API service, written in Node.js (Express). \
                Smart contracts are organized into so called Storage/Logic pattern to make upgrades easier.',
                'All smart contracts are covered with Truffle unit tests. Blockchain events that emitted by BCShop \
                contracts are cached be the caching module, also written in Node.js.'],
            links: 'Unfortunately, the startup ran out of finances and has to be closed.',
        },
        'justsmartcontracts.dev': {
            short: 'Free open-source web tool for interacting with Ethereum smart contracts',
            long: [
                'The idea of this tool came to me while I was working for BCShop. Back in the days it was quite \
                hard to watch inner properties of the smart contract or call its methods especially if contract’s \
                creator didn’t verify its source on the Etherscan. So I decided to create simple yet effective tool \
                myself.',
                'It is able to deploy a new smart contract or inspect the existing one, generate transaction to sign \
                later or right now, watch contract’s events, etc.',
            ],
            tech: [
                'That project was my door to the world of modern web development, so its setup is very basic. \
                Initially front-end was pure React and Ant Design UI components but later I rewrote \
                it using Nextjs and Zustand state management. Smart contracts’ data is stored inside a \
                browser’s local storage. I also used Storybook when writing my own components.',
                'Back end is a simple Node.js-Express application that is used mostly for proxying the requests \
                to third-party APIs.'
            ],
        },
        'a2.legal': {
            short: 'MVP web application for a legal company.',
            long: [
                'That was my first project as part of the [Naulab](https://naulab.pro/) team, kind of "test task". \
                It was really small - about five pages total. The interesting part was that the app was split into \
                three parts:',
                '* App for clients, where they can post their cases',
                '* App for lawyers, where they can specify their skills and fields of expertise',
                '* App for authentication and registration, that redirects user to the corresponding app depending \
                on their role (client/lawyer).',
                'I developed a part of frontend - user profile forms and API-wrapper module with tests for it.'
            ],
            tech: [
                'Front-end part is React+Redux, Jest for tests, back-end part is Django Rest Framework + Swagger.'
            ],
            links: 'It seems application is not used by the legal company, as I haven’t found it on their website.',
        },
        'imaginarium': {
            short: 'Online version of the "Imaginarium" board game.',
            long: [
                'In this project I acted as part of the [Naulab](https://naulab.pro/) team',
                'Here we decided to go with Vue on front-end with back-end based on Django. I’ve implemented most \
                of the front-end part: developed Vue components and front-end app logic, including interaction via \
                websockets.'
            ],
            tech:[
                'Vue applications (based on BootstrapVue component library) are integrated into Django-rendered \
                templates. During the development we used webpack dev server.',
                'Back-end is represented by two servers, both implemented using Django: web server renders website \
                pages, game server (Django+Redis) handles websockets, game logic and players actions.'
            ],
            displayName: 'Imaginarium online',
        },
        't&d beauty': {
            short: 'Web application for T&D Beauty - a beauty services aggregator.',
            long: [
                'In this project I acted as part of the [Naulab](https://naulab.pro/) team',
                'My job was to implement almost all the front-end part - Nuxt setup, Vue components, HTML and \
                CSS (actually SCSS) coding. ',
                'It was one of the most interesting projects from the list due to variety of front-end \
                fields to explore and integrate.',
            ],
            tech: [
                'We needed server-side-rendering for SEO so Nuxt was obvious choice as we really like Vue.',
                'Apart from login/password authorization we integrated several social networks using OAuth - Facebook \
                and Google. We also used browser Geolocation and Google Maps API for letting users set \
                 their location.',
                'Backend is based on Django Rest Framework',
            ],
            links: 'Still in development'
        },
        'ghvs.ru': {
            short: 'Website for the Main Cathedral of the Russian Armed Forces.',
            long: [
                'In this project I acted as part of the [Naulab](https://naulab.pro/) team.',
                'My job was to implement animations using CSS and jQuery - main menu, footer menu, buttons. \
                I also coded several pages both in Django template and CSS, respecting three responsive design sizes.',
            ],
            tech: [
                'Back-end is based on Django + Wagtail CMS. Front-end is HTML + SCSS + jQuery for certain complicated \
                animations, like menus.'
            ]
        },
        'portfolio': {
            displayName: 'My portfolio',
            short: 'Website with the showcase of my work',
            long:[
                'That\'s the website you are currently looking at :)',
            ],
            tech: [
                'Here I used Nuxt as static site generator. Russian and English locales are handled with nuxt-i18n.',
                'I also used GSAP to implement several complicated animations like scroll-based moving of \
                headers and sections, or project cards flipping when switching filters.'
            ]
        },
        'sensoriumxr': {
            displayName: 'Sensorium',
            short: 'Sensorium Corporation web apps',
            long:[
                'Sensorium Corporation was my employer since the middle of 2020 till end of 2021 ',
                'Here I\' ve been working with two web applications. The first one is company\'s website that \
                provides basic information on what kind of business it is.',
                'The second one https://sensoriumgalaxy.com/ is web application itself, intended for end-users \
                to sign up and buy stuff for their virtual avatars.'
            ],
            tech: [
                'First of all I was asked to add Strapi CMS for sensoriumxr.com, so to make certain pages and \
                blocks easy-to-change',
                'Later it was connected with Lokalise translation platform, resulting in effective and expandable\
                 implementation of multi-language feature.'
            ]
        },
        'decommas': {
            displayName: 'DeCommas',
            short: 'R&D department of 3Commas (crypto trading terminal)',
            long:[
                'I have been working at DeCommas as the Web3 team lead since early 2022.',
                'In this role, I lead a team of 3-5 developers through various startup-like projects.',
                'The primary projects included https://decommas.io/ - a collection of DeFi-related tools, \
                and https://app.stier.trade/ - a terminal for memecoin trading.'
            ],
            tech: [
                'Thanks to having multiple projects, I was lucky to utilize both widespread web technologies \
                such as NestJS/NextJS and specialized ones like Alchemy\'s smart accounts \
                or the LiFi SDK for cryptoassets swapping.'
            ]
        }
    }
};
