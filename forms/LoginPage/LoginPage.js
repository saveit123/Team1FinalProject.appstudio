let pw = "14421442Kh"
let userName = `'kmh76825`
req = ""
query = ""
usernames = ""
passwords=""
var valid = false;

btnLogin.onclick=function() {
  let inputUsername = inptUsername.value
  let inputPassword = inptPassword.value
 query1 = `SELECT username FROM user`
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kmh76825&pass=" + pw + "&database=375groupa1&query=" + query1)
  if (req.status == 200) { //transit worked.
          console.log(req.status)
          console.log(req.responseText)
          usernames = JSON.parse(req.responseText)
          console.log(usernames)
           query2 = `SELECT password FROM user`
        req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kmh76825&pass=" + pw + "&database=375groupa1&query=" + query2)
          if (req.status == 200) { //transit worked.
            console.log(req.status)
            console.log(req.responseText)
            passwords = JSON.parse(req.responseText)
            console.log(passwords)
			validate(inputUsername, inputPassword);
                function validate(username,password) {
                    for (var i=0; i <usernames.length; i++) {
                        if ((inputUsername == usernames[i]) && (inputPassword == passwords[i])) {
                            valid = true;
                            break;  
						}
						}
						}	
    					if (valid) {
							alert("Valid Credentials")
							ChangeForm(Home);
    					} else {
        					alert("Invalid Credentials")
    					}       
			} else {
							  // transit error
    		console.log(`Error: ${req.status}`);
							}			
   	} else { 
			// transit error
    		console.log(`Error: ${req.status}`);
			}
  } 

lblCreateAccount.onclick=function(){
  ChangeForm(Create)
}

