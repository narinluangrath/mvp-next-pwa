const withOffline = require('next-offline');

const offlineConfig = {
  generateInDevMode: true
}

// module.exports = (phase, { defaultConfig }) => {
//   return {
//     ...defaultConfig,
//     ...withOffline(offlineConfig)
//   }
// }

module.exports = withOffline(offlineConfig);