import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'
const basePath = '/bootcamp-website'

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  images: { unoptimized: true },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? basePath : '',
  },
}

export default nextConfig
