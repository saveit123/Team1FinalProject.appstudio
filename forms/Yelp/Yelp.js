btnNext1.onclick=function(){
  ChangeForm(Home)
}

/*
let requestURL = "simplecalculatorbygkservice.herokuapp.com/api/agritaskcalculator/result/{expression}?customerId=111980&productId=1504795"
function onXHRLoad() {
    let message = ""
    let apiData = JSON.parse(this.responseText)
    for (i = 0; i <= apiData.results.length - 1; i++) {
        console.log(`${apiData.results[i].name}`)
        message = message + apiData.results[i].name + "\n"
    }
    txtCal.value = message
    // if want to add to database call a function here that does that
    // addToDatabase()
}


function callAPI(URL) {
    var xhttp = new XMLHttpRequest();
    
// make the API request
    xhttp.addEventListener('load', onXHRLoad)
    xhttp.send()
}

btnCal.onclick=function(){
   // call the API calling code above
  callAPI(requestURL)
}
*/