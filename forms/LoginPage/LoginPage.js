let pw = "14421442Kh"
let userName = `'kmh76825`
<<<<<<< HEAD
let req = ""
let query = ""
let results = ""
/*
let userID = ""
*/
=======
req = ""
query = ""
usernames = ""
passwords=""
var valid = false;

>>>>>>> 305c35c83ac5588780c050716d3488c5b2aa3d20
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
<<<<<<< HEAD
            results2 = JSON.parse(req.responseText)
            console.log(results2)
                function validate(inputUsername,inputPassword) {
                    for (var i=0; i <results1.length; i++) {
                        if ((inputUsername == results1[i]) && (inputPassword == results2[i])) {
                           valid = true;
=======
            passwords = JSON.parse(req.responseText)
            console.log(passwords)
			validate(inputUsername, inputPassword);
                function validate(username,password) {
                    for (var i=0; i <usernames.length; i++) {
                        if ((inputUsername == usernames[i]) && (inputPassword == passwords[i])) {
                            valid = true;
>>>>>>> 305c35c83ac5588780c050716d3488c5b2aa3d20
                            break;  
						}
						}
						}	
    					if (valid) {
							alert("Valid Credentials")
							ChangeForm(Home);
    					} else {
        					alert("Invalid Credentials")
<<<<<<< HEAD
    						}       
							}
   		} else { 
			// transit error
    		console.log(`Error: ${req.status}`);
			}
  }
  
  else {
   		// transit error
    	console.log(`Error: ${req.status}`);
  }
}
=======
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
>>>>>>> 305c35c83ac5588780c050716d3488c5b2aa3d20


lblCreateAccount.onclick=function(){
  ChangeForm(Create)
}

/*
query3 = `SELECT user_id FROM user WHERE inputUsername == results1[i]) && inputPassword == results2[i]`
                           req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kmh76825&pass=" + pw + "&database=375groupa1&query=" + query3)
          if (req.status == 200) { //transit worked.
           console.log(req.status)
            console.log(req.responseText)
            results3 = JSON.parse(req.responseText)
            console.log(results3)
            window.userID = results3
*/