export default {
    // ================== BASIC ==================
    NAME: 'Bad_Boy',

    // Traiding pairs
    PAIRS: {
        'ETH-XDC':{
            FEE:0.02 // fee 2%
        },
        'XDC-ETH':{
            FEE:0.02 // fee 2%
        },
        'BTC-XDC':{
            FEE:0.03  //fee 3%
        },
        'XDC-BTC':{
            FEE:0.03 //fee 3%
        },
    },

// WALLET SETUP
    WALLETS: {
        //ETH provider wallet
        //Should be different than your ERC20 provider wallet
        ETH: {
            ADDRESS: '0xd4cbe92bf27a7abe4f022fbad5d088c8865208fb',
            // Ethereum Private Key
            SECRET: '',
        },

        BTC: {
            ADDRESS: 'bc1qrzvjghs48u7shgmgrw0ll8cjl6vvehanmxl49a',
            // BIP39 mnemonic 12 words
            SECRET: '',
        },

        XDC:{
            //XDC public address starting with 0x instead of xdc
            ADDRESS: '0x2253a4a9ae8dc13ee94e600e7aea54ff70bd55c2',
            // XDC Private Key
            SECRET: '',
        },
    },

    // BLOCKCHAIN PROVIDER
    BLOCKCHAIN_PROVIDER: {
        INFURA: '',
    },

    // PRICE PROVIDER
/*    PRICE: {
        PROVIDER: 'Binance',
        API_KEY: '0xfffffff',
        SECRET_KEY: 'Nawhfhfhfh',
        UPDATE_INTERVAL: 10,
    }, */

    PRICE: {
        PROVIDER: 'CryptoCompare',
        API_KEY: '',
        UPDATE_INTERVAL: 35,
    },

    // REBALANCE
    EXCHANGE: {
        NAME: 'Binance',
        API_KEY: '0xfffffff',
        SECRET_KEY: 'Nawhfhfhfh',
    },
// NOTIFICATIONS
    NOTIFICATIONS: {
        EMAIL: {
            ENABLED: true,
            SERVICE: 'gmail',
            USERNAME: 'xyz@gmail.com',
            PASSWORD: 'test',
            FROM: 'xyz@gmail.com',
            TO: 'xyz-receiver@gmail.com',
            SUBJECT: 'JELLY-206-main',
        },
        SLACK: {
            ENABLED: false,
            WEBHOOK_URL: '', 
        },
    },

    // ================== ADVANCED ==================

    AGGREGATOR_URL: 'https://network.jelly.market/api/v1/info',
    TRACKER_URL: 'jelly-tracker.herokuapp.com',
    JELLY_PRICE_PROVIDER: '',

    SERVER: { PORT: 9003 },

    // ================== Database configuration ==================
    //options: MONGODB or SQLITE
    DATABASE: {
        ACTIVE: 'SQLITE',

        MONGODB: {
            //Docker Setup
            URL: 'mongodb://db:27017/butler',
            AUTH: 'admin',
            MONGO_PASSWORD: process.env.MONGO_PASSWORD,

            //Manual setup
            //URL: 'mongodb://localhost:27017/butler',
        },
        SQLITE: {
            database: 'butler.sqlite',
        },
    },
};


