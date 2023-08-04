module.exports = {
    presets: [require('@acme/design-system/tailwind')],
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './views/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        // Add the external packages that are using Tailwind CSS
        './node_modules/@acme/design-system/**/*.js',
        './node_modules/@acme/pages/**/*.js',
    ],
};
