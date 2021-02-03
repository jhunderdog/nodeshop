module.exports.get404 = function get404(req,res,next) {
  return res.status(404).render('404');
}