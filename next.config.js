const { LicenseWebpackPlugin } = require('license-webpack-plugin');

module.exports = {
    webpack: (config, { isServer }) => {
        const isClient = !isServer;

        if (isClient) {
            // OSS packages in webpack client bundles
            config.plugins.push(
                new LicenseWebpackPlugin({
                    outputFilename: 'oss-licenses.json',
                    perChunkOutput: false,
                    renderLicenses: (rawModules) => {
                        const modules = rawModules.map((mod) => {
                            return {
                                name: mod.name,
                                version: mod.packageJson.version,
                                license: mod.licenseId,
                                licenseText: mod.licenseText,
                            };
                        });

                        return JSON.stringify(modules, null, 4);
                    },
                })
            );
        }

        return config;
    },
    async rewrites() {
        return [
            {
                source: '/js/pol.js',
                destination:
                    'https://plausible.io/js/plausible.outbound-links.js',
            },
            {
                source: '/api/event',
                destination: 'https://plausible.io/api/event',
            },
        ];
    },
};
