const  { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = ( phase ) => {
  const isDevelopment = phase === PHASE_DEVELOPMENT_SERVER
  const env = {
    APP_NAME: 'ninweb.net',
    API_URL: (() => {
      if(isDevelopment) {
        return 'https://jsonplaceholder.typicode.com/posts'
      } else {
        return 'https://myapi'
      }
    })()
  }

  return {
    env,
  }
}