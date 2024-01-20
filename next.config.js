/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    env: {
        NEXTAUTH_URL: process.env.NEXTAUTH_URL
    }
};

module.exports = nextConfig;