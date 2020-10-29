req = ""
query = ""
results = ""
let pw = "14421442Kh"
let userName = `'kmh76825`

btnCreate.onclick = function() {
  let newUsername =  inptUsernameCreate.value
  let newPassword = inptPasswordCreate.value
  let newEmail = inptEmail.value
  query = `INSERT INTO user (username, email, password) 
VALUES('${newUsername}','${newEmail}','${newPassword}')`
  console.log(query)
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kmh76825&pass=" + pw + "&database=375groupa1&query=" + query)
console.log(req.status)
  if (req.status == 200) { //transit worked.
  console.log(req.responseText)
    if (req.responseText == 500) { // means the insert succeeded
      console.log("You have successfully added the user!")
    } else
      console.log("There was a problem with adding the user to the database.")
  } else {
    // transit error
    console.log("Error: " + req.status);
     txtCreateConfirm.value =  "Your account was successfully created.  Procede to Login page."
  }
}
btnReturnLogin.onclick=function(){
  ChangeForm(LoginPage)
}