const path = require('path')

module.exports = {
  resolve: {
    extensions: [".ts", ".vue", ".json", "*"],
    alias: {
      '@': path.resolve(__dirname, 'resources/js/'),
    }
  }
}
