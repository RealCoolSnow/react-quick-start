const path = require('path')

const resolve = pathUrl => path.join(__dirname, pathUrl)

module.exports = {
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')]
    }
  },
  webpack: {
    alias: {
      '@/assets': resolve('src/assets'),
      '@/components': resolve('src/components'),
      '@/pages': resolve('src/pages'),
      '@/service': resolve('src/service'),
      '@/store': resolve('src/store'),
      '@/styles': resolve('src/styles'),
      '@/utils': resolve('src/utils')
    }
  }
}
