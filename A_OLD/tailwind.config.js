const colors = require('tailwindcss/colors');

module.exports = {
    content: ['src/**/*.tsx'],
    theme: {
        extend: {
            colors: {
                gray: colors.stone,
                blue: colors.sky,
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
