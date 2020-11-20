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


hbHome.onclick=function(s){
   if (typeof(s) == "object") {
        return;
    }
    if (s === "Goals") {
        hbHome.hide();
        Goals.show();
    }
    if (s === "Transaction") {
      hbHome.hide();
      Transaction.show();
    }
    if (s === "Balance") {
   hbHome.hide();
    Balance.show();
    }
    if (s === "Calculator") {
    hbHome.hide();
    Calculator.show();
    }
      if (s === "Calendar") {
     hbHome.hide();
      Calendar.show();
    }
};
