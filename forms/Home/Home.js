btnBalance.onclick = function() {
  ChangeForm(Balance)
}

btnGoals.onclick = function() {
  ChangeForm(Goals)
}

btnTransaction.onclick = function() {
  ChangeForm(Transaction)
}

btnCalculator.onclick = function() {
  ChangeForm(Calculator)
}

btnCalendar.onclick = function() {
  ChangeForm(Calendar)
}

/*

  query = `SELECT user_id FROM user`
  console.log(query)
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kmh76825&pass=" + pw + "&database=375groupa1&query=" + query)
console.log(req.status)
  if (req.status == 200) { //transit worked.
  console.log(req.responseText)
  userID = JSON.parse(req.responseText)
    if (req.responseText == 500) { // means the insert succeeded
      console.log(`${userID}`)
    } else
      console.log("There was a problem.")
  } else {
    // transit error
    console.log("Error: " + req.status);
  }


*/
hmChange.onclick=function(s){
    if (typeof(s) == "object") {
        return;
    }
    if (s === "Goals") {
        hmChange.hide();
        Goals.show();
    }
    if (s === "Balance") {
        hmChange.hide();
        Balance.show();
    }
    if (s === "Transaction") {
       hmChange.hide();
        Transaction.show();
    }
    if (s === "Calendar") {
      hmChange.hide();
      Calendar.show();
    }
       if (s === "Calculator") {
        hmChange.hide();
        Calculator.show();
    }
};
