const app = require('./app') // varsinainen Express-sovellus
const http = require('http')
const config = require('./utils/config')

const server = http.createServer(app)

const PORT = config.PORT || 3003
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})