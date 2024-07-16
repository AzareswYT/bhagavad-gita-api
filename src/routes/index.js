// import modules
const auth = require('../utils/auth')
module.exports = app => {
  // default route to docs(https://vedicscriptures.github.io/)
  app.get('/', (req, res) => {
    res.redirect('https://vedicscriptures.github.io/')
  })

  // Bhagavad Gita 🚀 Api Reference Routes Endpoints
  // 1. GET [/slok]
  require('./slok')(app, auth)

  // 2. GET [/slok/:ch/:sl]
  require('./slok_ch_sl')(app, auth)

  // 3. GET [/chapters]
  require('./chapter')(app, auth)

  // 4. GET [/chapter/:ch]
  require('./chapter_ch')(app, auth)

  // 5. GET [/gita.svg]
  require('./gita_svg')(app, auth)

  // error 404 page
  app.get('*', (req, res) => {
    console.info('Invalid request')
    res.status(404).json({
      error: 'Invalid API endpoint',
      message:
        'Read the documentation at https://vedicscriptures.github.io/#api-reference'
    })
  })
}
