const withOffline = require('next-offline');

const offlineConfig = {
  generateInDevMode: true,
  workboxOpts: {
   swDest: 'static/service-worker.js'
  }
}

module.exports = (phase, { defaultConfig }) => {
  return {
    ...defaultConfig,
    ...withOffline(offlineConfig)
  }
}