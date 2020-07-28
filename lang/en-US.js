export default {
    headers: {
        about: 'About',
        portfolio: 'Portfolio',
        skills: 'Skills',
        posts: 'Posts',
        contacts: 'Contacts',
    },
    actions: {
        details: 'Details...'
    },
    about: {
        p1: 'Hello. My name is Oleg Kondrakhanov',
        p2: 'I am a full stack web and blockchain developer',
        p3: 'You can check my portfolio and blog posts below',
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
        }
    }
};