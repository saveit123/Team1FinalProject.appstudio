Balance.onshow = function() {

  query = `SELECT MAX(goal_id) FROM goals`
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kmh76825&pass=" + pw + "&database=375groupa1&query=" + query)
  if (req.status == 200) { //transit worked.
    console.log(req.status)
    console.log(req.responseText)
    maxRecent = JSON.parse(req.responseText)
    console.log(maxRecent)
  } else {
    alert("transit error")
  }
  query = `SELECT amount FROM goals WHERE goal_id =` + maxRecent
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kmh76825&pass=" + pw + "&database=375groupa1&query=" + query)
  if (req.status == 200) { //transit worked.
    console.log(req.status)
    console.log(req.responseText)
    currentGoal = JSON.parse(req.responseText)
    currentGoal = Number(currentGoal)
    console.log(currentGoal)
    txtCurrentGoal.value = +currentGoal
  } else {
    alert("transit error")
  }
  
    query = `SELECT SUM(amount) FROM payment WHERE user_id = ` + userID
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kmh76825&pass=" + pw + "&database=375groupa1&query=" + query)
  console.log(req.status)
  if (req.status == 200) { //transit worked.
    totalPayments = JSON.parse(req.responseText)
    totalPayments = Number(totalPayments)
    console.log(totalPayments)
    console.log(req.responseText)
  } else {
    // transit error
    console.log("Error: " + req.status);
  }
  query = `SELECT SUM(amount) FROM deposit WHERE user_id = ` + userID
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kmh76825&pass=" + pw + "&database=375groupa1&query=" + query)
  console.log(req.status)
  if (req.status == 200) { //transit worked.
    totalIncome = JSON.parse(req.responseText)
    totalIncome = Number(totalIncome)
    console.log(totalIncome)
    console.log(req.responseText)
  } else {
    // transit error
    console.log("Error: " + req.status);
  }

currentBalance = Number(currentGoal) + Number(totalIncome) - Number(totalPayments)

console.log(currentBalance)
txtCurrentBalance.value = currentBalance

}

Button1.onclick=function(){
  ChangeForm(Home)
}
