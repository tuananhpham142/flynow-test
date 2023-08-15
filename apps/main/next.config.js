const path = require('path');

const { FLIGHT_URL, BOOKING_URL, ACCOMMODATION_URL, USER_URL } = process.env;

module.exports = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
        // domains: [],
    },
    webpack: (config, options) => {
        config.resolve.alias['@'] = path.join(__dirname, 'src');

        return config;
    },
    async rewrites() {
        return [
            /**
             * Rewrites for Multi Zones
             */
            {
                source: '/flight',
                destination: `${FLIGHT_URL}/flight`,
            },
            {
                source: '/flight/:path*',
                destination: `${FLIGHT_URL}/flight/:path*`,
            },
            {
                source: '/booking',
                destination: `${BOOKING_URL}/booking`,
            },
            {
                source: '/booking/:path*',
                destination: `${BOOKING_URL}/booking/:path*`,
            },
            {
                source: '/accommodation',
                destination: `${ACCOMMODATION_URL}/accommodation`,
            },
            {
                source: '/accommodation/:path*',
                destination: `${ACCOMMODATION_URL}/accommodation/:path*`,
            },
            {
                source: '/user',
                destination: `${USER_URL}/user`,
            },
            {
                source: '/user/:path*',
                destination: `${USER_URL}/user/:path*`,
            },
        ];
    },
};
