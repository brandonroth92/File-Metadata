var multer = require('multer');
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

module.exports = function(app) {

  //if get request, load file upload form
  app.route('/api/readFile')
  .get(function(req, res) {
    res.status(200).render('form');
  }) //respond with file size upon POST request
  .post(upload.single('file'), function(req, res) {
    res.status(200).json({"size":req.file.size + ' ' + 'bytes'});
  });

}