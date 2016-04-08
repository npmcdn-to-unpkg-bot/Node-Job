var express = require('express');
var router = express.Router();
var aws = require('aws-sdk');
var multer  = require('multer');
var upload = multer();
router.post('/images',upload.any(),function(req,res){
  var AWS_ACCESS_KEY = 'AKIAJ2ULJJ6MJIAA3IIA';
  var AWS_SECRET_KEY = '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';
  var S3_BUCKET = 'bumpn-test';

  aws.config.update({accessKeyId: AWS_ACCESS_KEY, secretAccessKey: AWS_SECRET_KEY});
  var s3 = new aws.S3({signatureVersion: 'v4'});
  var image = req.files[0];
  var pid = '10000' + parseInt(Math.random() * 10000000);
  var s3_params = {
    Bucket: S3_BUCKET,
    Key: pid,
    ContentType: image.mimetype,
    ACL: 'public-read',
    Body: image.buffer
  };

  return s3.putObject(s3_params, function(err, data) {
    if(err) {
      res.json({ status: 500, success: false,  message: err});
    } else {
      res.json({
        status: 200,
        success: true,
        message: 'Image uploaded',
        data: 'https://'+ S3_BUCKET +'.s3.amazonaws.com/' + pid
      });
    }
  });
})




module.exports = router;
