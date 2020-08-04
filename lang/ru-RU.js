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
    links: {
        website: 'Сайт',
        source: 'Исходный код'
    },
    actions: {
        details: 'Больше...',
        showAll: 'Все',
        readPost: 'Читать...'
    },
    about: {
        p1: 'Добрый день. Меня зовут Олег Кондраханов',
        p2: 'Я веб-разработчик, имею опыт работы с технологией "блокчейн"',
        p3: 'Ознакомтесь с моим портфолио и некоторыми статьями, прокрутив страницу ниже',
    },

    projects: {
        'bcshop.io': {
            short: 'Торговая площадка для онлайн-товаров и услуг на базе блокчейна Ethereum.',
            long: [
                'Я был одним из членов основной команды проекта - начальником технического отдела. \
                Я занимался изучением возможностей Ethereum, разрабатывал всю блокчейн-часть проекта - смарт-контракты \
                 и модуль кэширования, занимался интеграцией с партнерами и вопросами взаимодействия с командой\
                разработчиков веб-сайта на аутсорсе',
                'Помимо работ по технической части я также составлял месячные отчеты о прогрессе проекта и писал статьи\
                в блог компании'
            ],
            tech: [
                'Веб-сайт взаимодействует с блокчейном посредством специального АПИ сервиса, написанного на \
                Node.js (Express). Смарт-контракты спроектированы согласно паттерну "Хранилище/Логика" для \
                более удобного обновления',
                'Код смарт-контрактов полностью покрыт юнит-тестами. События (events) блокчейна, относящиеся к\
                смарт-контрактами проекта, кэшируются специальным модулем, тоже реализованном на Node.js.',
            ],
            links: 'К сожалению, у стартапа закончилось финансирование, и он был закрыт.',
        },
        'justsmartcontracts.dev': {
            short: 'Веб-приложение для удобной работы со смарт-контрактами на блокчейне Ethereum.',
            long: [
                'Идея подобного инструмента возникла, пока я работал в команде BCShop. В те дни операции со \
                смарт-контрактами (например, просмотр прошлых событий) вызывали ряд трудностей, особенно если\
                создатель контракта не верифицировал его на Etherscan. Поэтому я решил создать простое, но \
                эффективное приложения для этих целей.',
                'С его помощью можно задеплоить смарт-контракт или посмотреть свойства существующего. \
                Также можно сохранить сгенерированную транзакцию для последующей подписи в другом месте, \
                проверить события контракта и многое другое.',                
                'Мой [коллега](https://github.com/32kaa) помог с интеграцией кошелька Metamask для подписи транзакций.',
            ],
            tech: [
                'Этот проект был для меня "дверью" в мир современной веб разработки, потому его устройство очень \
                простое. Фронт-энд построен на чистом React + UI-компоненты Ant Design. Информация о смарт-контрактах\
                хранится в локальном хранилище браузера. Для проверки внешнего вида компонентов используется Storybook',
                'Бэк-энд - простое приложение на базе Node.js-Express, основная функция которого - проксировать \
                запросы к сторонним АПИ.',
            ],
        }, 
        'a2.legal': {
            short: 'MVP web application for a legal company. Users are able to apply for legal help, \
            then system matches suitable lawyers to solve a case.',
            long: [
                'That was my first project as part of the [Naulab](https://naulab.pro/) team, kind of "test task". \
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
                'In this project I acted as part of the [Naulab](https://naulab.pro/) team.',
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