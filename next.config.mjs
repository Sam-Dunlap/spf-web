/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {protocol: 'https',
            hostname: 'pokeapi.co',
            port: '',
            pathname: '/**'
            }, {protocol: 'https', hostname: 'raw.githubusercontent.com', port: '', pathname: '/**'}
        ]
    }
};

export default nextConfig;
