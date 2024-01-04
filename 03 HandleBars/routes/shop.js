const express = require('express')

const path = require('path')

const rootDir = require('../util/path')
const adminData = require('./admin')

const router = express.Router()

router.get('/', (req, res) => {
  const products = adminData.products
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'))
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path:'/',
    hasProducts: products.length > 0,
    activeShop: true,
    mainCSS: true,
    productsCSS: true,
  })
})

module.exports = router