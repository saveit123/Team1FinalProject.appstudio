btnGoalsBack.onclick=function(){
  ChangeForm(Home)
}



/*
drpViewWeeklyGoals.onclick = function(s) {
if (typeof(s) == "object") {
return
} else {
drpViewWeeklyGoals.value = s
let message = ""
}
}
*/

Goals.onshow = function() {
  drpViewMonthlyGoals.clear()
  query = "SELECT * FROM monthly_goal"
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
  query = "SELECT * FROM weekly_goal"
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

/*
drpWeekly.onclick = function(s) {
if (typeof(s) == "object") {
return
} else {
drpviewGoals.value = s
let message = ""
}
}
*/

/*
drpviewGoals.onclick = function(s) {
if (typeof(s) == "object") {
return
} else {
drpviewGoals.value = s
let message = ""
}
}
*/
/*
for (i = 0; i < customerInfo.length; i++)
if (s == customerInfo[i][1])
customerState = customerInfo[i][4]
for (i = 0; i < customerInfo.length; i++)
if (customerState == customerInfo[i][4])
message = message + customerInfo[i][1] + "\n"
txtResults.value = `These are the customers located in ${customerState}: \n${message}`
}
}
btnNextForm.onclick = function() {
ChangeForm(customerDelete)
}
*/
/*
Goals.onshow=function(){
  query1 = `SELECT  username FROM user`
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kmh76825&pass=" + pw + "&database=375groupa1&query=" + query1)
  if (req.status == 200) { //transit worked.
          console.log(req.status)
          console.log(req.responseText)
          results1 = JSON.parse(req.responseText)
}


drpBudget.onclick=function(){
  
}

*/

btnWeeklyGoal.onclick = function() {
  let newGoal =  inptAmount.value
  query = `INSERT INTO weekly_goal (user_id, amount) 
VALUES(1, '${newGoal}')`
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
  query = `INSERT INTO monthly_goal (user_id, amount) 
VALUES(1, '${newGoal}')`
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




/*
drpviewGoals.onclick=function(s){
  // this 'if' kicks user out if they  just clicked on control
  // but not on one item in the list.
  if (typeof(s) == "object")
    return
  else { // the user picked something
    console.log(s)
    drpviewGolas.value = s // make dropdown show the choice the user made
    query = `SELECT date from monthly_goal WHERE name = '${s}'`
    //Grab the state of the customer chosen
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kmh76825&pass=" + pw + "&database=kmh76825&query=" + query)

    if (req.status == 200) { //transit worked.
      //save the sate of the customer
      customerSelectState = JSON.parse(req.responseText)
      console.log(customerSelectState)
    }
    query = `SELECT name from customer WHERE state = '${customerSelectState[0]}'`
    // get the other customers who have the same state
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kmh76825&pass=" + pw + "&database=kmh76825&query=" + query)
   
    if (req.status == 200) { //transit worked.
      //save the sate of the customer
      customerSelectSameState = JSON.parse(req.responseText)
      console.log(customerSelectSameState)
    }
   
    let customerMessage = ""
    for (i = 0; i <= customerSelectSameState.length - 1; i++)
      customerMessage = customerMessage + customerSelectSameState[i] + "\n"
    // clear txt and then change
    txtResults.value = customerMessage
  }  
}
*/