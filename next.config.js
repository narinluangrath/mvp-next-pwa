const withOffline = require('next-offline');

const offlineConfig = {
  generateInDevMode: true
}

module.exports = withOffline(offlineConfig);