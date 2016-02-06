
document.getElementById("calBtn").addEventListener("click", inVoicer);

function inVoicer(){

  var invoice = {
    service: document.getElementById("service").value,
    date: document.getElementById("date").value,
    note: document.getElementById("note").value,
    pay: document.getElementById("pay").value,
    hours: document.getElementById("hours").value
  };
  var payOut;
  var outName = document.getElementById("sName");
  var outDate = document.getElementById("sDate");
  var outNote = document.getElementById("sNote");
  var outPay = document.getElementById("sPay");
  var outHrs = document.getElementById("sHrs");
  var outTotal = document.getElementById("sTotal");

  payOut = invoice.pay * invoice.hours;
  outName.innerHTML = invoice.service;
  outDate.innerHTML = invoice.date;
  outNote.innerHTML = invoice.note;
  outPay.innerHTML = '$' + invoice.pay + ' /hr';
  outHrs.innerHTML = invoice.hours + ' hours';
  outTotal.innerHTML = 'Total: $' + payOut;

}



