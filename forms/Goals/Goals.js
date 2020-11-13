btnGoalsBack.onclick=function(){
  ChangeForm(Home)
}

Goals.onshow = function() {
  drpViewMonthlyGoals.clear()
  query = "SELECT * FROM goals WHERE type = 'monthly' AND user_id =" + userID
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kmh76825&pass=" + pw + "&database=375groupa1&query=" + query)
  if (req.status == 200) {
  results = JSON.parse(req.responseText)
  console.log(results)
  goalsMonth = results
  }
if (results.length == 0) {
  console.log(`There are no goals in the database.`)
 } else {
  for (i = 0; i < results.length; i++)
drpViewMonthlyGoals.addItem(results[i][1])
}
 drpViewWeeklyGoals.clear()
  query = "SELECT * FROM goals WHERE type = 'weekly' AND user_id =" + userID
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kmh76825&pass=" + pw + "&database=375groupa1&query=" + query)
  if (req.status == 200) {
  results = JSON.parse(req.responseText)
  console.log(results)
  goalsWeek = results
  }
if (results.length == 0) {
  console.log(`There are no goals in the database.`)
 } else {
  for (i = 0; i < results.length; i++)
drpViewWeeklyGoals.addItem(results[i][1])
}
}

btnWeeklyGoal.onclick = function() {
  let newGoal =  inptAmount.value
  query = `INSERT INTO goals(amount, type, user_id) 
VALUES('${newGoal}', "weekly", '${userID})`
  console.log(query)
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kmh76825&pass=" + pw + "&database=375groupa1&query=" + query)
console.log(req.status)
  if (req.status == 200) { //transit worked.
  console.log(req.responseText)
    if (req.responseText == 500) { // means the insert succeeded
      console.log("goal added")
        lblGoalsConfirmation.textContent =  `Your weekly goal of  $${newGoal} has been created!`
        lblGoalsConfirmation.hidden = false
    } else {
      console.log("There was a problem with adding the goal.")
      }
  } else {
    // transit error
    console.log("Error: " + req.status);
  }
}

btnMonthlyGoal.onclick = function() {
  let newGoal =  inptAmount.value
  query = `INSERT INTO goals(amount, type, user_id) 
VALUES('${newGoal}', "monthly", '${userID}')`
  console.log(query)
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kmh76825&pass=" + pw + "&database=375groupa1&query=" + query)
console.log(req.status)
  if (req.status == 200) { //transit worked.
  console.log(req.responseText)
    if (req.responseText == 500) { // means the insert succeeded
      console.log("goal added")
          lblGoalsConfirmation.hidden = false
          lblGoalsConfirmation.textContent =  `Your monthly goal of $${newGoal} has been created!`
    } else {
      console.log("There was a problem with adding the goal.")
      }
  } else {
    // transit error
    console.log("Error: " + req.status);
  }
}