module.exports = {
    theme: {
        colors: {
            white: '#ffffff',
            background: '#FBFBFB',
            muted: '#919EAB',
            grey: {
                100: '#F9FAFB',
                200: '#F4F6F8',
                300: '#DFE3E8',
                400: '#C4CDD5',
                500: '#919EAB',
                600: '#637381',
                700: '#454F5B',
                800: '#212B36',
                900: '#161C24',
            },
            danger: {
                lighter: '#FFEDED',
                light: '#FF8080',
                DEFAULT: '#FF0000',
                dark: '#C80000',
                darker: '#920000',
            },
            warning: {
                lighter: '#FFF2DB',
                light: '#FFC65B',
                DEFAULT: '#FFA801',
                dark: '#C88200',
                darker: '#925F00',
            },
            success: {
                lighter: '#E5F4E6',
                light: '#98D29A',
                DEFAULT: '#4CAF50',
                dark: '#3C883E',
                darker: '#2C632D',
            },
            primary: {
                lighter: '#E4EAF4',
                light: '#92A9D5',
                DEFAULT: '#4469AF',
                dark: '#36538A',
                darker: '#273D65',
            },
            secondary: {
                lighter: '#ea80fc',
                light: '#e040fb',
                DEFAULT: '#9c27b0',
                dark: '#8e24aa',
                darker: '#6a1b9a',
            },
        },
        extend: {
            // SHADOW
            boxShadow: {
                xs: '0px 4px 10px 0px #0000001A', // elevation 1
                sm: '0px 6px 12px 0px #0000001A', // elevation 2
                DEFAULT: '0px 10px 16px 0px #0000001A', // elevation 3
                lg: '0px 16px 22px 0px #00000014', // elevation 4
                xl: '0px 28px 32px 0px #00000014', // elevation 5
                '2xl': '0px 32px 64px 0px #00000014', // elevation 6
            },
            // that is animation class
            animation: {
                fadeInDown: 'fadeInDown 0.3s ease-in',
                fadeOutUp: 'fadeOutUp 0.3s ease-in-out',
            },

            // that is actual animation
            keyframes: () => ({
                fadeInDown: {
                    '0%': {
                        opacity: 0,
                        transform: 'translateY(-15px)',
                        transition: 'opacity .3s ease, transform .3s ease',
                    },
                    '100%': {
                        opacity: 1,
                        transform: 'translateY(0)',
                        transition: 'opacity .3s ease, transform .3s ease',
                    },
                },
                fadeOutUp: {
                    '0%': {
                        opacity: 1,
                        transition: 'opacity .3s ease, transform .3s ease',
                    },
                    '100%': {
                        opacity: 0,
                        transform: 'translateY(-25px)',
                        display: 'none',
                        transition: 'opacity .3s ease, transform .3s ease',
                    },
                },
            }),
        },
    },
};
