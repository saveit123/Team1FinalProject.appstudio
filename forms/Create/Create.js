
req = ""
query = ""
results = ""


btnCreate.onclick = function() {
  let username =  inptUsernameCreate.value
  let password = inptPasswordCreate.value
  let email = inptEmail.value
  query = "INSERT INTO user VALUES ('username, email, password')"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kmh76825&pass=" + pw + "&database=kmh76825&query=" + query)

  if (req.status == 200) { //transit worked.
    if (req.responseText == 500) { // means the insert succeeded
      console.log("You have successfully added the user!")
    } else
      console.log("There was a problem with adding the user to the database.")
  } else {
    // transit error
    console.log("Error: " + req.status);
  }

/*
  query = `SELECT name from customer ORDER BY customer_id DESC`
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kmh76825&pass=" + pw + "&database=kmh76825&query=" + query)

  if (req.status == 200) { //transit worked.
    //save the sate of the customer 
    results = JSON.parse(req.responseText)
  } else {
    // transit error
    console.log(`Error: ${req.status}`);
  }
  // putting new list of customers into txtDelete
  let customersAdd = ""
  for (i = 0; i <= results.length - 1; i++)
    customersAdd = customersAdd + results[i] + "\n"
  // change value of text area
  txtAdd.value = customersAdd
}
*/

btnReturnLogin.onclick=function(){
  ChangeForm(LoginPage)
}
