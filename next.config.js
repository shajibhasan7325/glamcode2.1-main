module.exports = {
    reactStrictMode: true,
    swcMinify: true,
    optimizeFonts: true,
    trailingSlash: true,
    images: {
        domains: ['admin.glamcode.in', 'localhost'],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        minimumCacheTTL: 60,

    },
    experimental: { esmExternals: true },
}

module.exports = {
    distDir: '.next',
};


