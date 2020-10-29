req = ""
query = ""
results = ""
let pw = "14421442Kh"
let userName = 'kmh76825'

btnCreate.onclick = function() {
  let newUsername =  inptUsernameCreate.value
  let newPassword = inptPasswordCreate.value
  let newEmail = inptEmail.value
  query = `INSERT INTO user VALUES ('${newUsername}, ${newEmail}, ${newPassword})`
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kmh76825&pass=" + pw + "&database=kmh76825&query=" + query)

  if (req.status == 200) { //transit worked.
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