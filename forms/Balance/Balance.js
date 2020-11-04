btnBalanceBack.onclick=function(){
  ChangeForm(Home)
}

Balance.onshow = function() {

SELECT MAX(date) FROM monthly_goal;
SELECT MAX(date) FROM weekly_goal;
    
txtCurrentGoal.value  =  