const path = require('path')
const paths = require('./config/paths')

const resolve = pathUrl => path.resolve(__dirname, '.', pathUrl)

module.exports = {
  style: {
    postOptions: {
      plugins: [require('tailwindcss'), require('autoprefixer')]
    }
  },
  webpack: {
    alias: {
      '@': paths.appSrc
    }
  }
}
