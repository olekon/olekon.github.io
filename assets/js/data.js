/* eslint-disable max-len */
export default {
    projects: [{
        name: 'BCShop.io',
        keywords: ['ethereum', 'solidity', 'node.js', 'web3.js', 'truffle'],
        links: false,        
        weight: 4,
        order: 0,
        coverImage: 'https://i.imgur.com/MVVB4Sg.png',
        images: [            
            'https://i.imgur.com/7yF9lOp.png',
            'https://i.imgur.com/WfIWCTT.png',
            'https://i.imgur.com/G4iYdHp.png'
        ],
    }, {
        name: 'justsmartcontracts.dev',
        keywords: ['react', 'web3.js', 'ethereum', 'ant design', 'node.js', 'express', 'storybook'],
        links: {
            website: 'https://justsmartcontracts.dev/',
            source: 'https://github.com/olekon/justsmartcontracts',
        },
        weight: 5,
        order: 1,
        coverImage: 'https://i.imgur.com/eVbKnxc.png',
        images: [        
            'https://i.imgur.com/TgDMrtF.png',
            'https://i.imgur.com/Oa3UQWC.png',
        ]
    }, {
        name: 'A2.legal',
        keywords: ['react', 'redux', 'jest', 'ant design'],
        links: false,        
        weight: 4,
        order: 2,
        coverImage: 'https://i.imgur.com/68JnzMV.jpg',
        images: [            
            'https://i.imgur.com/rHMrv3d.png',
            'https://i.imgur.com/JjhNYpL.png',
            'https://i.imgur.com/KhRDjjk.png'
        ],
    }, {
        name: 'Imaginarium',
        keywords: ['vue', 'bootstrap', 'websockets', 'django'],
        links: {
            website: 'https://playimaginarium.cosmodrome.games/'
        },
        weight: 5,
        order: 3,
        coverImage: 'https://i.imgur.com/626wVrs.png',
        images: [        
            'https://i.imgur.com/m9hPCeh.png',
            'https://i.imgur.com/ZkFKSeB.png',
            'https://i.imgur.com/cIKoInQ.png',
            'https://i.imgur.com/5uW8KXd.png'
        ]
    }, {
        name: 'T&D Beauty',
        keywords: ['nuxt', 'vue', 'vuex', 'bootstrap', 'oauth', 'geolocation', 'django'],
        links: false,
        weight: 5,
        order: 4,
        coverImage: 'https://i.imgur.com/9nmaSAw.png',
        images: [        
            'https://i.imgur.com/hiCPgMf.png',
            'https://i.imgur.com/EHuQRVi.png',
            'https://i.imgur.com/i3POedr.png',
            'https://i.imgur.com/wMzjwpk.png',
        ]
    }, {
        name: 'ghvs.ru',
        keywords: ['jquery', 'scss', 'django', 'wagtail'],
        links: {
            website: 'https://ghvs.ru/'
        },
        weight: 5,
        order: 5,
        coverImage: 'https://i.imgur.com/cXTFZLe.png',
        images: [        
            'https://i.imgur.com/hcMLnw2.png',
            'https://i.imgur.com/WZNyT1N.png',
            'https://i.imgur.com/cEkyYEK.png',
        ]
    },  {
        name: 'portfolio',
        keywords: ['nuxt', 'vue', 'bootstrap', 'gsap'],
        links: {
            website: 'https://olekon.github.io/',
            source: 'https://github.com/olekon/olekon.github.io/tree/v2-nuxt'
        },
        weight: 5,
        order: 6,
        coverImage: 'https://i.imgur.com/mxpg7LY.png',
        images: [        
        ]
    }],

    posts: [{
        name: 'caching',
        title: 'Caching Ethereum events with MySQL',
        url: 'https://medium.com/coinmonks/caching-ethereum-events-with-mysql-18bfa3558355',
        keywords: ['ethereum', 'node.js', 'web3.js', 'mysql'] 
    }, {
        name: 'justsmartcontracts',
        title: 'Introducing JustSmartContracts.dev',
        url: 'https://medium.com/coinmonks/introducing-justsmartcontracts-dev-web-tool-for-interacting-with-ethereum-smart-contracts-da9b5dfe563c',
        keywords: ['ethereum', 'web3.js']
    }, {
        name: 'enums',
        title: 'Think Twice Before Using Enums in Solidity Smart Contracts',
        url: 'https://medium.com/coinmonks/beware-the-solidity-enums-5f64b3435fa4',
        keywords: ['ethereum', 'solidity']
    }, {
        name: 'express',
        title: 'Serving a Node.js Express App From a Subfolder',
        url: 'https://medium.com/better-programming/serving-a-node-js-express-app-from-a-subfolder-a-routing-lifehack-a3c88da9840c',
        keywords: ['node.js', 'express']
    }],

    contacts:[{
        name: 'email',
        icon: 'fas fa-envelope',
        url: 'mailto:kondrahanov@gmail.com',
        title: 'kondrahanov@gmail.com',
    }, {
        name: 'linkedin',
        icon: 'fab fa-linkedin',
        url: 'https://www.linkedin.com/in/oleg-kondrakhanov-0142b114a/',
        title: 'LinkedIn',
    }, {
        name: 'github',
        icon: 'fab fa-github-square',
        url: 'https://github.com/olekon/',
        title: 'GitHub',
    }, {
        name: 'medium',
        icon: 'fab fa-medium',
        url: 'https://medium.com/@kondrahanov',
        title: 'Medium',
    }],

    keywords: {
        'node.js': {
            image: 'nodejs-logo.svg',
            filter: true,
        },
        'ethereum': {
            image: 'ethereum-logo.svg',
            filter: true,
        },
        'react': {
            image: 'react-logo.svg',
            filter: true,
        },
        'vue': {
            image: 'vue-logo.svg',
            filter: true,
        },
        'bootstrap': {
            image: 'bootstrap-logo.svg',
            filter: true,
        },
        'django': {
            image: 'django-logo.svg',
            filter: true,
        },
        'nuxt': {
            image: 'nuxt-logo.svg',
            filter: true,
        },
        'jquery': {
            image: 'jquery-logo.svg',
            filter: true,
        },

        'solidity': {
            image: ''
        },
        'web3.js': {
            image: ''
        },
        'truffle': {
            image: ''
        },
       
        'storybook': {
            image: ''
        },
        'express': {
            image: ''
        },
        'redux': {
            image: ''
        },
        'jest': {
            image: ''
        },
        'ant design': {
            image: '',
        },
        
        'vuex': {
            image: '',
        },
      
        'websockets': {
            image: ''
        },
       
        'oauth': {
            image: ''
        },
        'geolocation': {
            image: ''
        },
       
        'scss': {
            image: ''
        },
        'wagtail': {
            image: ''
        },
        'mysql': {
            image: ''
        }
    }
};