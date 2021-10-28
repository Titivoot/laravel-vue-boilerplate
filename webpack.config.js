const path = require('path')

module.exports = {
  resolve: {
    extensions: [".ts", ".vue", "*"],
    alias: {
      '@': path.resolve(__dirname, 'resources/js/'),
    }
  }
}
