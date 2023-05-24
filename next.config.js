/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  rewrites: async () => {
    return [
      {
        source: "/pages/pay/index.html",
        destination: "/pages/api/pay.js",
      },
    ]
},
}

module.exports = nextConfig
