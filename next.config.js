const  { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = ( phase ) => {
  const isDevelopment = phase === PHASE_DEVELOPMENT_SERVER
  const env = {
    APP_NAME: 'ninweb.net',
    API_URL: (() => {
      if(isDevelopment) {
        return 'https://jsonplaceholder.typicode.com'
      } else {
        return 'https://jsonplaceholder.typicode.com'
      }
    })()
  }

  return {
    env,
  }
}