const colors = require('tailwindcss/colors');

module.exports = {
    purge: {
        content: ['src/**/*.tsx'],
    },
    darkMode: 'media',
    theme: {
        extend: {
            colors: {
                gray: colors.warmGray,
                blue: colors.sky,
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/forms')],
};
