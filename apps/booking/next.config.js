const path = require('path');

module.exports = {
    basePath: '/booking',
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
        config.resolve.alias['@'] = path.join(__dirname, '/booking');

        return config;
    },
};
