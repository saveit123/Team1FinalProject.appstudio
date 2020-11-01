
btnGoalsBack.onclick=function(){
  ChangeForm(Home)
}

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
