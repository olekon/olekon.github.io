export default {
    headers: {
        about: 'Обо мне',
        portfolio: 'Портфолио',
        skills: 'Навыки',
        posts: 'Статьи',
        contacts: 'Контакты',
        techDetails: 'Технические подробности',
        links: 'Ссылки',
    },
    about: {
        p1: 'Добрый день. Меня зовут Олег Кондраханов',
        p2: 'Я веб-разработчик, имею опыт работы с технологией "блокчейн"',
        p3: 'Ознакомтесь с моим портфолио и некоторыми статьями, прокрутив страницу ниже',
    },
    actions: {
        details: 'Больше...',
        showAll: 'Все',
        readPost: 'Читать...'
    },
    projects: {
        'bcshop.io': {
            short: 'Marketplace for online goods and services based on the Ethereum blockchain.',
            long: [
                'I was one of the project’s core team members, the CTO. I researched Ethereum capabilities \
            and features, developed blockchain related modules - smart contracts and caching module, communicated \
            with our integration partners (Bancor) and managed outsource website development team.', 
                'Apart from tech duties I also wrote monthly progress reports and articles for the company’s blog.'],
            tech: [
                'The website communicates with the blockchain via special API service, written in Node.js (Express). \
                Smart contracts are organized into so called Storage/Logic pattern to make upgrades easier. \
                All smart contracts are covered with Truffle unit tests. Blockchain events that emitted by BCShop \
                contracts are cached be the caching module, also written in Node.js.'],
            links: 'Unfortunately, the startup ran out of finances and has to be closed.',
        },
        'justsmartcontracts.dev': {
            short: 'Free open-source web tool for interacting with Ethereum smart contracts',
            long: [
                'The idea of this tool came to me while I was working for BCShop.io. Back in the days it was quite \
                hard to watch inner properties of the smart contract or call its methods especially if contract’s \
                creator didn’t verify its source on the Etherscan. So I decided to create simple yet effective tool \
                myself.',
                'It is able to deploy a new smart contract or inspect the existing one, generate transaction to sign \
                later or right now, watch contract’s events, etc.',
                'A friend of mine [https://github.com/32kaa] helped with the Metamask wallet integration for \
                transaction signing.'
            ],
            tech: [
                'That project was my door to the world of front-end development, so its setup is very basic. \
                Front-end is pure React and Ant Design components, smart contracts’ data is stored inside a \
                browser’s local storage. I also used Storybook when writing my own components.',
                'Back end is a simple Express.js application that is used mostly for proxying the requests \
                to third-party APIs.'
            ],
        }, 
        'a2.legal': {
            short: 'MVP web application for a legal company. Users are able to apply for legal help, \
            then system matches suitable lawyers to solve a case.',
            long: [
                'That was my first project as part of the Naulab [https://naulab.pro/] team, kind of "test task". \
                It was really small - about five pages total. The interesting part was that the app was split into \
                three parts:',
                '* App for clients, where they can post their cases',
                '* App for lawyers, where they can specify their skills and fields of expertise',
                '* App for authentication and registration, that redirects user to the corresponding app depending \
                on their role (client/lawyer). I developed a part of frontend - user profile forms and API-wrapper \
                module with tests for it.'
            ],
            tech: [
                'Front-end part is React+Redux, Jest for tests, back-end part is Django Rest Framework + Swagger.'
            ],
            links: 'It seems application is not used by the legal company, as I haven’t found it on their website.',
        },
        'imaginarium': {
            short: 'Online version of the "Imaginarium" board game.',
            long: [
                'In this project I acted as part of Naulab [https://naulab.pro/] team',
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
            displayName: 'Имаджинариум онлайн',
        },
        't&d beauty': {
            short: 'Web application for T&D Beauty - a beauty services aggregator.',
            long: [
                'In this project I acted as part of Naulab [https://naulab.pro/] team',
                'My job was to implement almost all the front-end part - Nuxt setup, Vue components, HTML and \
                CSS (actually SCSS) coding. ',
                'So far this is my favorite and most interesting project from the list due to variety of front-end \
                fields to explore and integrate. The hard part was the initial design was remade during the process \
                and overall development process was not optimal sometimes.',
            ],
            tech: [
                'We needed server-side-rendering for SEO so Nuxt was obvious choice as we really like Vue.',
                'Apart from login/password authorization we integrated several social networks using OAuth - Facebook,\
                 Google and Instagram. We also used browser Geolocation and Google Maps API for letting users set \
                 their location.',
                'Backend is based on Django Rest Framework',
            ],
            links: 'Still in development'
        }, 
        'ghvs.ru': {
            short: 'Website for the Main Cathedral of the Russian Armed Forces.',
            long: [
                'In this project I acted as part of Naulab [https://naulab.pro/] team.',
                'My job was to implement animations using CSS and JQuery - main menu, footer menu, buttons. \
                I also coded several pages both in Django template and CSS, respecting three responsive design sizes.',
            ],
            tech: [
                'Back-end is based on Django + Wagtail CMS. Front-end is HTML + SCSS + JQuery for certain complicated \
                animations, like menus.'
            ]
        }
    }
};