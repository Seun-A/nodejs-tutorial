const express = require('express')

const path = require('path')
const bodyParser = require('body-parser')
const expressHbs = require('express-handlebars')

const app = express()

app.engine('hbs', expressHbs.engine({ extname: 'hbs', defaultLayout: 'main-layout'}))
app.set('view engine', 'hbs')
app.set('views', 'views')

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminData.routes)
app.use(shopRoutes)

app.use((req, res) => {
  res.render('404', {
    pageTitle: 'Page Not Found',
    mainCSS: true,
  })
})
app.listen(3000)
