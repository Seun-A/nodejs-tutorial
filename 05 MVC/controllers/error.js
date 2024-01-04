exports.getErrorPage = (req, res) => {
  res.render('404', {
    pageTitle: 'Page Not Found',
    mainCSS: true,
    path: req.url
  })
}