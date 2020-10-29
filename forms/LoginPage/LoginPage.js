
let req = ""
let query = ""
let results = ""

btnLogin.onclick=function() {
  let inputUsername = inptUsername.value
  let inputPassword = inptPassword.value
 query = `SELECT  username, password FROM user`
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kmh76825&pass=" + pw + "&database=375groupa1&query=" + query)
  if (req.status == 200) { //transit worked.
    console.log(req.status)
    console.log(req.responseText)
    results = JSON.parse(req.responseText)
    console.log(results)
if (results.includes(inputUsername && inputPassword)) {
    ChangeForm(Home)
   } else { 
  lblError.hidden = false
  lblError.textContent = "That login is not recognized. Please try again."
  inptUsername.value = ""
  inptPassword.value = ""
  }
  } else {
    // transit error
    console.log(`Error: ${req.status}`);
  }

}


lblCreateAccount.onclick=function(){
  ChangeForm(Create)
}
