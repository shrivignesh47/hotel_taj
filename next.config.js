/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    images: {
        unoptimized: true, // Disable the Image Optimization API
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.(mp4|webm|ogg|swf|ogv)$/, // Add support for video file types
            type: "asset/resource", // Use Webpack's asset/resource loader
            generator: {
                filename: "static/media/[name].[hash][ext]", // Output path for video files
            },
        });

        return config;
    },
};

module.exports = nextConfig;