(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{587:function(o,e,t){"use strict";t.r(e),e.default={headers:{about:"Обо мне",portfolio:"Портфолио",skills:"Навыки",posts:"Статьи",contacts:"Контакты",techDetails:"Технические подробности",links:"Ссылки"},errors:{error404:"Извините, но такой страницы не существует",common:"Извините, что-то пошло не так"},links:{website:"Сайт",source:"Исходный код",more:"Еще"},actions:{details:"Больше...",showAll:"Все",readPost:"Читать...",toHomePage:"Вернуться в начало"},about:{p1:"Добрый день. Меня зовут Олег Кондраханов",p2:"Я блокчейн/веб-разработчик",p3:"Ознакомьтесь с моим портфолио и некоторыми статьями, прокрутив страницу ниже"},projects:{"bcshop.io":{short:"Торговая площадка для цифровых товаров и услуг на базе блокчейна Ethereum.",long:["Я был одним из членов основной команды проекта - начальником технического отдела.                 Я занимался изучением возможностей Ethereum, разрабатывал всю блокчейн-часть проекта - смарт-контракты                  и модуль кэширования, занимался интеграцией с партнерами и вопросами взаимодействия с командой                разработчиков веб-сайта на аутсорсе.","Помимо работ по технической части я также составлял месячные отчеты о прогрессе проекта и писал статьи                в блог компании."],tech:['Веб-сайт взаимодействует с блокчейном посредством специального АПИ сервиса, написанного на                 Node.js (Express). Смарт-контракты спроектированы согласно паттерну "Хранилище/Логика" для                 более удобного обновления.',"Код смарт-контрактов полностью покрыт юнит-тестами. События (events) блокчейна, относящиеся к                смарт-контрактами проекта, кэшируются специальным модулем, тоже реализованном на Node.js."],links:"К сожалению, у стартапа закончилось финансирование, и он был закрыт."},"justsmartcontracts.dev":{short:"Веб-приложение для удобной работы со смарт-контрактами на блокчейне Ethereum.",long:["Идея подобного инструмента возникла, пока я работал в команде BCShop. В те дни операции со                 смарт-контрактами (например, просмотр прошлых событий) вызывали ряд трудностей, особенно если                создатель контракта не верифицировал его на Etherscan. Поэтому я решил создать простое, но                 эффективное приложения для решения этих задач.","С его помощью можно задеплоить смарт-контракт или посмотреть свойства существующего.                 Также можно сохранить сгенерированную транзакцию для последующей подписи в другом месте,                 проверить события контракта и многое другое."],tech:['Этот проект был для меня "дверью" в мир современной веб разработки, потому его устройство очень                 простое. Сперва фронт-энд был основан на чистом React + UI-компоненты Ant Design, однако.                позже я переписал его на Nextjs и Zustand. Информация о смарт-контрактах                хранится в локальном хранилище браузера. Для проверки внешнего вида компонентов используется Storybook',"Бэк-энд - простое приложение на базе Node.js-Express, основная функция которого - проксировать                 запросы к сторонним АПИ."]},"a2.legal":{short:"MVP веб-приложения для юридической компании.",long:['Это был мой первый проект в качестве члена команды [Naulab](https://naulab.pro/), своего рода                "тестовое задание". Приложение очень маленькое - порядка пяти страниц и разбито на три более мелких:',"* Приложение для клиентов, где они могут оставлять заявки на юридическую помощь;","* Приложение для юристов, где они указывают набор профессионалных навыков и отраслей права;","* Приложение для авторизации и регистрации, которое в зависимости от роли пользователя перенаправляет                 его в нужное приложение.","Я разрабатывал часть фронт-энда - страницы профиля (для юриста и клиента), а также слой работы с АПИ                  и тесты для него."],tech:["Фронт-энд часть - React в связке с Redux, Jest для ряда тестов. Бэк-энд - Django Rest Framework +                 Swagger."],links:"Приложение пока не используется, судя по сайту компании-заказчика."},imaginarium:{short:'Онлайн-версия настольной игры "Имаджинариум".',long:["Я работал над этим проектом в качестве члена команды [Naulab](https://naulab.pro/).",'На этом проекте мы впервые решили попробовать Vue на фронт-энде. Я приложил руку к большинству                 фронт-энд части: разрабатывал компоненты Vue, логику "фронта" и взаимодействие через веб-сокеты. '],tech:["Компоненты Vue (основанные на BootstrapVue) интегрированы в шаблоны Django.","Бэк-энд представлен двумя серверами: первый рендерит веб-страницы, второй обрабатывает игровые                 ситуации через веб-сокеты"],displayName:"Имаджинариум онлайн"},"t&d beauty":{short:"Веб-приложение для T&D Beauty - агрегатор услуг бьюти-мастеров.",long:["Я работал над этим проектом в качестве члена команды [Naulab](https://naulab.pro/).","Моей работой была реализация практически всей фронт-энд части - освоение Nuxt, написание                 компонентов Vue, верстка.","Для меня это был один из наиболее интересных проектов из списка, в основном благодаря широкому                разнообразию областей фронт-энд разработки, с которыми пришлось столкнуться."],tech:["Серверный рендеринг был обязательной фичей, поэтому выбор пал на Nuxt, т.к. мы очень любим Vue.","Помимо стандартной авторизации через логин/пароль была добавлена возможность входа через платформы                 Facebook и Google. Для определения местонахождения пользователя использовалось встроенное АПИ                браузера и Google-карты.","Бэк-энд основан на Django Rest Framework."],links:"В процессе разработки."},"ghvs.ru":{short:"Сайт Главного храма Вооруженных сил Российской Федерации.",long:["Я работал над этим проектом в качестве члена команды [Naulab](https://naulab.pro/).",'Моей работой была верстка и "оживление" ряда веб-страниц (меню, кнопки и прочее) анимациями с                 использованием CSS и jQuery, в трех вариантах адаптивного дизайна. Также я разрабатывал некоторые                 шаблоны Django.'],tech:["Бэк-энд основан на Django в комбинации с Wagtail CMS. На фронт-энде мы не использовали специальные                 фреймворки, только HTML, SCSS и jQuery для особенно сложных анимаций."]},portfolio:{displayName:"Мое портфолио",short:"Сайт-презентация моих работ",long:["Вы сейчас его просматриваете :)"],tech:["Я использовал Nuxt в качестве генератора статичных сайтов. Русский/английский языки переключаются                 с помощью модуля nuxt-i18n.","Для реализации ряда сложных анимаций, таких как перемещение заголовков и контента во время прокрутки                 или вращение карточек проектов при переключении фильтров, я использовал GSAP."]},sensoriumxr:{displayName:"Sensorium",short:"Вебсайты компании Sensorium Corporation",long:["Я работал в этой компании с середины 2020 года до конца 2021 года.","В основном моей зоной ответственности были два вебсайта.                 Первый - это корпоративный сайт, рассказывающий о деятельности компании.","Второй - https://sensoriumgalaxy.com/ - веб-приложение. предназначенное для конечных пользователей                Здесь они могут регистрироваться и покупать разные штуки для своих виртуальных аватаров."],tech:["Первой задачей было внедрить Strapi CMS в sensoriumxr.com, чтобы ряд страниц и контентных блоков можно                 было редактировать без участия программистов.","Позднее в эту конструкцию добавили интеграцию с платформой переводов Lokalise. Таким образом на сайте                получилась поддержка мультиязычности, к тому же эффективная и расширяемая."]},decommas:{displayName:"DeCommas",short:"R&D отдел компании 3Commas (терминала для торговли криптовалютой)",long:["Я работаю в DeCommas в должности Web3 тимлида с начала 2022 года.","В этой роли я руковожу командой из 3-5 разработчиков, выполняя различные проекты в стиле стартапов.","Основные проекты включают https://decommas.io/ - набор инструментов, связанных с DeFi,               и https://app.stier.trade/ - терминал для торговли мемкоинами"],tech:["Благодаря нескольким проектам мне посчастливилось использовать как                 широко распространенные веб-технологии, такие как NestJS/NextJS, так и                 узкоспециализированные, например, смарт-аккаунты от Alchemy или SDK от LiFi для обмена криптоактивами"]}}}}}]);