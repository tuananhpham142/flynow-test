module.exports = {
    presets: [require('@acme/design-system/tailwind')],
    content: [
        './src/app/**/*.{js,ts,jsx,tsx}',
        './src/views/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        // Add the external packages that are using Tailwind CSS
        './node_modules/@acme/design-system/**/*.js',
        './node_modules/@acme/pages/**/*.js',
    ],
};
