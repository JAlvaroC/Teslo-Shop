// import { hostname } from 'os'

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: {
//       protocol: 'https',
//       hostname: 'res.cloudinary.com'
//     }
//   },
//   compiler: {
//     styledComponents: true
//   }
// }

// export default nextConfig

import { hostname } from 'os'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      }
    ]
  },
  compiler: {
    styledComponents: true
  }
}

export default nextConfig
