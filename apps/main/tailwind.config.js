// import { ColorPalette } from "@acme/design-system/src/theme/theme";

module.exports = {
    presets: [require('@acme/design-system/tailwind')],
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        // Add the external packages that are using Tailwind CSS
        './node_modules/@acme/design-system/**/*.js',
        './node_modules/@acme/pages/**/*.js',
    ],
};
