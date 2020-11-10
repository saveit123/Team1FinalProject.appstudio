btnBalanceBack.onclick=function(){
  ChangeForm(Home)
}



Balance.onshow = function() {

query = `SELECT MAX(date) FROM monthly_goal`
   req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kmh76825&pass=" + pw + "&database=375groupa1&query=" + query)
          if (req.status == 200) { //transit worked.
            console.log(req.status)
            console.log(req.responseText)
          maxMonthly = JSON.parse(req.responseText)
          maxMonthly = maxMonthly[0][0]
            console.log(maxMonthly)
          } else {
            alert("transit error")
    					}       
query = `SELECT MAX(date) FROM weekly_goal`
 req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kmh76825&pass=" + pw + "&database=375groupa1&query=" + query)
          if (req.status == 200) { //transit worked.
            console.log(req.status)
            console.log(req.responseText)
          maxWeekly= JSON.parse(req.responseText)
          maxWeekly = maxWeekly[0][0]
            console.log(maxWeekly)
            } else {
            alert("transit error")
    					}       
          if(maxMonthly>maxWeekly) {
          query = `SELECT amount FROM monthly_goal WHERE date = + ${maxMonthly}`
 req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kmh76825&pass=" + pw + "&database=375groupa1&query=" + query)
          if (req.status == 200) { //transit worked.
            console.log(req.status)
            console.log(req.responseText)
          currentGoal = Number(req.responseText)
             txtCurrentGoal.value  =  + currentGoal
            } else {
            query= `SELECT amount FROM weekly_goal WHERE date = + ${maxWeekly}`
            req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kmh76825&pass=" + pw + "&database=375groupa1&query=" + query)
          if (req.status == 200) { //transit worked.
            console.log(req.status)
            console.log(req.responseText)
          currentGoal = Number(req.responseText)
          txtCurrentGoal.value  =  + currentGoal
            }  
            }
            }
            }
    
    
    
