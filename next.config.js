/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        // This forces Next.js to consider all components as client components
        // NOTE: This is not ideal for performance but can help debug the issue
        appDir: true,
        serverComponentsExternalPackages: [],
    },
}

module.exports = nextConfig