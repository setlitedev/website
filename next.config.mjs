/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'setlite.in', // when someone visits setlite.in
          },
        ],
        destination: 'https://setlite.com/:path*', // send them to setlite.com
        permanent: true, // 308 Permanent Redirect
      },
    ];
  },
};

export default nextConfig;
