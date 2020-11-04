btnBalanceBack.onclick=function(){
  ChangeForm(Home)
}

let query1=""
let query2=""
let query3 = ""
let query4 = ""

Balance.onshow = function() {

query1 = `SELECT MAX(date) FROM monthly_goal;`
   req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kmh76825&pass=" + pw + "&database=375groupa1&query=" + query1)
          if (req.status == 200) { //transit worked.
            console.log(req.status)
            console.log(req.responseText)
          maxMonthly = JSON.parse(req.responseText)
            console.log(maxMonthly)
          } else {
            alert("transit error")
    					}       
query2 = `SELECT MAX(date) FROM weekly_goal;`
 req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kmh76825&pass=" + pw + "&database=375groupa1&query=" + query2)
          if (req.status == 200) { //transit worked.
            console.log(req.status)
            console.log(req.responseText)
          maxWeekly= JSON.parse(req.responseText)
            console.log(maxWeekly)
            } else {
            alert("transit error")
    					}       
          if(maxMonthly>maxWeekly) {
          query3 = `SELECT  amount FROM monthly_goal WHERE date=maxMonthly;`
 req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kmh76825&pass=" + pw + "&database=375groupa1&query=" + query3)
          if (req.status == 200) { //transit worked.
            console.log(req.status)
            console.log(req.responseText)
          monthlyGoal= JSON.parse(req.responseText)
             txtCurrentGoal.value  =  monthlyGoal
            } else {
            query4= `SELECT  amount FROM weekly_goal WHERE date=maxWeekly;`
            req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kmh76825&pass=" + pw + "&database=375groupa1&query=" + query4)
          if (req.status == 200) { //transit worked.
            console.log(req.status)
            console.log(req.responseText)
          monthlyGoal= JSON.parse(req.responseText)
          txtCurrentGoal.value  =  weeklyGoal
            }  
            }
            }
            }
    
    
    
