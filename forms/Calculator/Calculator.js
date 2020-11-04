/*
btnCalculatorBack.onclick=function(){
  ChangeForm(Home)
}


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
/*
// Use the line of code below but remove the '&Authorization=Token e3R.....'*
// let requestURL = "https://api.yelp.com/v3/businesses/search?location=68131&type=restaurant&Authorization=Token e3RmWeocT4zElvPssMD_Sa7qAWWOUnQT3yGNpBLoTVZgMWW5Bz3QP8c33iJQ0-McUho4RCjkWD13S-X9v7YLOGHnmDOl9ji-3axv4rQ-hpsuI2MOTlAMVs02alqfX3Yx"
let requestURL = "https://simple-calculator.p.rapidapi.com/?host=simple-calculator.p.rapidapi.com"
// make a variable named 'myToken' and put your authorization key in it*
let myToken =  '1e3338ccbbmshf93f75dd05e0ce6p1ebcbajsnf5568754e9d4'

btnNext1.onclick=function(){
  ChangeForm(Home)
}


function onXHRLoad() {
    let message = ""
    
// delete messageName (see below for rationale)*
    let apiData = JSON.parse(this.responseText)
    
// need for (i = 0; i < api.Data......)*
// need businesses.length*
    for (i = 0; i < apiData.businesses.length; i++) {
        console.log(`${apiData.businesses[i].price}`)
        message = message + apiData.businesses[i].price + "\n"
    }
//to make it prettier use another loop with name and price -- put them arrays (name and price array)

// need for (i = 0; i < api.Data......)*
// need businesses.length*
// use just plain 'message' below so the names are appended to the prices
  for (i = 0; i < apiData.businesses.length; i++) {
        console.log(`${apiData.businesses[i].name}`)
        message = message + apiData.businesses[i].name + "\n"
    }

    txtCalc.value = message
}

function callAPI(URL) {
    var xhttp = new XMLHttpRequest();

// use line below instead of line 46
//xhttp.open('GET', 'https://cors-anywhere.herokuapp.com/' + URL)*
   //xhttp.open('GET’, URL)
xhttp.open('GET', 'https://cors-anywhere.herokuapp.com/' + URL)

// uncomment the line below, and use 'Bearer' instead of 'Token':
xhttp.setRequestHeader('Authorization', 'Bearer ' + myToken)

    xhttp.addEventListener('load', onXHRLoad)
    xhttp.send()
}

btnCalc.onclick=function(){
  // call the API calling code above
  callAPI(requestURL)
}
*/
