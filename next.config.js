module.exports = {
    poweredByHeader: false,
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));
        return config;
    },
};
