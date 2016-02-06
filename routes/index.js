var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('index', {
    title: "Home Page",
    name: "Invoicer",
    content: "This is page description"
  });
});





//************************************
//            Database
//************************************
mongoose.connect('localhost:27017/invoices');

var Schema = new mongoose.Schema({
  _id: String,
  service: String,
  date: String,
  note: String,
  pay: Number,
  hours: Number,
  total: Number * Number
});


var invoice = mongoose.model('newInvoices', Schema);


router.post('/getInvoice', function(req, res, next){

  console.log(req.body);

  new invoice({
    _id: Date.now(),
    service: req.body.service,
    date: req.body.date,
    note: req.body.note,
    pay: req.body.pay,
    hours: req.body.hours,
    total: req.body.pay * req.body.hours

  }).save(function(err){
    if(err) res.json(err);
    else res.send(req.body);
  });

});

module.exports = router;
