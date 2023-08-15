const path = require('path');

module.exports = {
    basePath: '/user',
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
        config.resolve.alias['@'] = path.join(__dirname, '/user/src');

        return config;
    },
};
