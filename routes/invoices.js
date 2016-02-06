var express = require('express');
//var mongoose = require('mongoose');
var router = express.Router();

router.get('/invoices', function(req, res){
  res.render('invoices',
    {
      title: "Invoices Page",
      name: "Invoicer",
      content: "This is page description"
    }
  )
});

module.exports = router;