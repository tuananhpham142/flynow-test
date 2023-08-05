const path = require('path');

module.exports = {
    basePath: '/accommodation',
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
        config.resolve.alias['@'] = path.join(__dirname, '/accommodation/src');

        return config;
    },
};
