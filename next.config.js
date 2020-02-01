const withOffline = require('next-offline');
const path = require('path');

module.exports = (phase, { defaultConfig }) => {
  return {
    ...defaultConfig,
    ...withOffline({
      generateInDevMode: true,
      workboxOpts: {
       swDest: path.resolve(__dirname, 'static/service-worker.js')
      }
    })
  }
}