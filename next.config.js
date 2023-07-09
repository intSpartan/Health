/** @type {import('next').NextConfig} */
// const nextConfig = {}
// webpack: (config) => {
//     config.externals.push({ sharp: 'commonjs sharp', canvas: 'commonjs canvas' });
//     return config;
// }


// module.exports = nextConfig

module.exports = {
    webpack: (config) => {
        // Add the provided configuration to the webpack configuration
        config.externals.push({ sharp: 'commonjs sharp', canvas: 'commonjs canvas' });
        return config;
    },
};
