btnTransactionBack.onclick=function(){
  ChangeForm(Home)
}

btnPayment.onclick = function() {
  let newPayment =  inptTransaction.value
  query = `INSERT INTO payment(amount, payment_type, user_id) 
VALUES('${newPayment}', "payment", '${userID}')`
  console.log(query)
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kmh76825&pass=" + pw + "&database=375groupa1&query=" + query)
console.log(req.status)
  if (req.status == 200) { //transit worked.
  console.log(req.responseText)
    if (req.responseText == 500) { // means the insert succeeded
      console.log("payment added")
        lblTransactionConfirmation.textContent =  `Your transaction of  -$${newPayment} has been created!`
        lblTransactionConfirmation.hidden = false
    } else {
      console.log("There was a problem with adding the transaction.")
      }
  } else {
    // transit error
    console.log("Error: " + req.status);
  }
}

btnIncome.onclick = function() {
  let newIncome =  inptAmount.value
  query = `INSERT INTO deposit(amount, deposit_type, user_id) 
VALUES('${newIncome}', "income", '${userID}')`
  console.log(query)
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kmh76825&pass=" + pw + "&database=375groupa1&query=" + query)
console.log(req.status)
  if (req.status == 200) { //transit worked.
  console.log(req.responseText)
    if (req.responseText == 500) { // means the insert succeeded
      console.log("income added")
          lblTransactionConfirmation.hidden = false
          lblTransactionConfirmation.textContent =  `Your monthly transaction of +$${newIncome} has been created!`
    } else {
      console.log("There was a problem with adding the transaction.")
      }
  } else {
    // transit error
    console.log("Error: " + req.status);
  }
}
