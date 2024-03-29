const express = require('express')

const path = require('path')

const rootDir = require('../util/path')

const router = express.Router()

const products = [] // [{title: 'one'}, {title: 'two'}, {title: 'three'}]

// /admin/add-product => GET
router.get('/add-product', (req, res) => {
  // console.log('This is the /admin/add-product page')
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    activeAddProduct: true,
    mainCSS: true,
    productsCSS: true,
    formCSS: true
  })
})

// /admin/add-product => POST
router.post('/add-product', (req, res) => {
  products.push({ title: req.body.title })
  res.redirect('/')
})

exports.routes = router
exports.products = products