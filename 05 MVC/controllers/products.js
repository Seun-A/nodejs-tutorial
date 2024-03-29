const Product = require("../models/product")

exports.getAddProduct = (req, res) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    activeAddProduct: true,
    mainCSS: true,
    productsCSS: true,
    formCSS: true
  })
}

exports.postAddProduct = (req, res) => {
  const product = new Product(req.body.title)
  product.save()

  res.redirect('/')
}

exports.getProducts = (req, res) => {
  Product.fetchAll(products => {
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path:'/',
      hasProducts: products.length > 0,
      activeShop: true,
      mainCSS: true,
      productsCSS: true
    })
  })
  
}