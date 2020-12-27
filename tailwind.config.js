const colors = require('tailwindcss/colors');

module.exports = {
    purge: {
        content: ['src/**/*.tsx'],
    },
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                gray: colors.warmGray,
                blue: colors.lightBlue,
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
