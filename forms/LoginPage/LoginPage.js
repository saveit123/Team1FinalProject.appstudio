let pw = "14421442Kh"
let userName = `'kmh76825`
req = ""
query = ""
results = ""
let valid =  ""

btnLogin.onclick=function() {
  let inputUsername = inptUsername.value
  let inputPassword = inptPassword.value
 query1 = `SELECT  username FROM user`
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kmh76825&pass=" + pw + "&database=375groupa1&query=" + query1)
  if (req.status == 200) { //transit worked.
          console.log(req.status)
          console.log(req.responseText)
          results1 = JSON.parse(req.responseText)
          console.log(results1)
           query2 = `SELECT  password FROM user`
        req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kmh76825&pass=" + pw + "&database=375groupa1&query=" + query2)
          if (req.status == 200) { //transit worked.
            console.log(req.status)
            console.log(req.responseText)
            results2 = JSON.parse(req.responseText)
            console.log(results2)
                function validate(inputUsername,inputPassword) {
                    for (var i=0; i <results1.length; i++) {
                        if ((inputUsername == results1[i]) && (inputPassword == results2[i])) {
                           valid = true;
                            break; 
						}
						}
					}
				
						
						
    						if (valid) {
												alert("Valid Credentials")
                                                    query3 = `SELECT  user_id FROM user WHERE  inputUsername == results1[i]`
                                                  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", 				"host=ormond.creighton.edu&user=kmh76825&pass=" + pw + "&database=375groupa1&query=" + query3)
                                                  /*if (req.status == 200) { //transit worked.
                                                    console.log(req.status)
                                                    console.log(req.responseText) */
                                                    userID= JSON.parse(req.responseText)
                                                    console.log(userID)
                                                    ChangeForm(Home);
                                                  /* } else { 
                                                    alert(`transit error`)
                                                    } */
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

