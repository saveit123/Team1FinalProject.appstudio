cmdMultiply.onclick = function() {
var FirstNumber;
var SecondNumber;
var Total;
  FirstNumber = parseFloat(txtFirstNo.value);
  SecondNumber = parseFloat(txtSecondNo.value);
  Total = FirstNumber * SecondNumber;
  txtTotal.value = Total;
}
cmdAdd.onclick = function() {
var FirstNumber;
var SecondNumber;
var Total;
  FirstNumber = parseFloat(txtFirstNo.value);
  SecondNumber = parseFloat(txtSecondNo.value);
  Total = FirstNumber + SecondNumber;

  txtTotal.value = Total;
}
cmdSubtract.onclick = function() {
var FirstNumber;
var SecondNumber;
var Total;
  FirstNumber = parseFloat(txtFirstNo.value);
  SecondNumber = parseFloat(txtSecondNo.value);
  Total = FirstNumber - SecondNumber;

  txtTotal.value = Total;
}

cmdDivide.onclick = function() {
var FirstNumber;
var SecondNumber;
var Total;
  FirstNumber = parseFloat(txtFirstNo.value);
  SecondNumber = parseFloat(txtSecondNo.value);
  Total = (FirstNumber) / (SecondNumber);

  txtTotal.value = Total;
}

cmdAdd.onclick = function() {
  if (isNaN(txtFirstNo.value)) {
    alert("First Number must be a number!");
    return;
  }

  if (isNaN(txtSecondNo.value)) {
    alert("Second Number must be a number!");
    return;
  }

  var FirstNumber = parseFloat(txtFirstNo.value);
  var SecondNumber = parseFloat(txtSecondNo.value);

  var Total = FirstNumber + SecondNumber;

  txtTotal.value = Total.toString();
}

cmdSubtract.onclick = function() {
  if (isNaN(txtFirstNo.value)) {
    alert("First Number must be a number!");
    return;
  }

  if (isNaN(txtSecondNo.value)) {
    alert("Second Number must be a number!");
    return;
  }

  var FirstNumber = parseFloat(txtFirstNo.value);
  var SecondNumber = parseFloat(txtSecondNo.value);

  var Total = FirstNumber - SecondNumber;

  txtTotal.value = Total.toString();
}

cmdMultiply.onclick = function() {
  if (isNaN(txtFirstNo.value)) {
    alert("First Number must be a number!");
    return;
  }

  if (isNaN(txtSecondNo.value)) {
    alert("Second Number must be a number!");
    return;
  }

  var FirstNumber = parseFloat(txtFirstNo.value);
  var SecondNumber = parseFloat(txtSecondNo.value);

  var Total = FirstNumber * SecondNumber;

  txtTotal.value = Total.toString();
}

cmdDivide.onclick = function() {
  if (isNaN(txtFirstNo.value)) {
    alert("First Number must be a number!");
    return;
  }

  if (isNaN(txtSecondNo.value)) {
    alert("Second Number must be a number!");
    return;
  }

  var FirstNumber = parseFloat(txtFirstNo.value);
  var SecondNumber = parseFloat(txtSecondNo.value);
  var Total = (FirstNumber) / (SecondNumber);


  txtTotal.value = Total.toString();
}


btnBackCalc.onclick=function(){
  ChangeForm(Home)
}
