const LicensePlugin = require('webpack-license-plugin');

module.exports = {
    webpack: (config, {}) => {
        // OSS packages in webpack bundles
        config.plugins.push(new LicensePlugin());

        return config;
    },
};
