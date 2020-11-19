// make a variable named 'myToken' and put your authorization key in it
let myToken = 'e3RmWeocT4zElvPssMD_Sa7qAWWOUnQT3yGNpBLoTVZgMWW5Bz3QP8c33iJQ0-McUho4RCjkWD13S-X9v7YLOGHnmDOl9ji-3axv4rQ-hpsuI2MOTlAMVs02alqfX3Yx'
// Use the line of code below but remove the '&Authorization=Token e3R.....'
let requestURL2 = "https://api.yelp.com/v3/businesses/search?location=68131&term=restaurant"

function onXHRLoad2() {
  let message = ""
  let priceString =""
  

  // delete messageName (see below for rationale)
  let apiData = JSON.parse(this.responseText)

console.log(apiData)
  // need for (i = 0; i < api.Data......)
  // need businesses.length*
  let priceArray =  [ ] 
  for (i = 0; i < apiData.businesses.length; i++) {
    console.log(`${apiData.businesses[i].price}`)
    if ( typeof (apiData.businesses[i].price) == 'undefined')  priceArray[i] = " "
    else priceArray[i] = apiData.businesses[i].price
  }
  //to make it prettier use another loop with name and price -- put them arrays (name and price array)

  // need for (i = 0; i < api.Data......)
  // need businesses.length
  // use just plain 'message' below so the names are appended to the prices
  for (i = 0; i < apiData.businesses.length; i++) {
    console.log(`${apiData.businesses[i].name}`)
    message = message + apiData.businesses[i].name + "  " + priceArray[i] + "\n"
  }

  txtSearchRestaurant.value = message
}

function callAPI2(URL) {
  var xhttp = new XMLHttpRequest();

  // use line below instead of line 46
  //xhttp.open('GET', 'https://cors-anywhere.herokuapp.com/' + URL)
  //xhttp.open('GET’, URL)
  xhttp.open('GET', 'https://cors-anywhere.herokuapp.com/' + URL)

  // uncomment the line below, and use 'Bearer' instead of 'Token':
  xhttp.setRequestHeader('Authorization', 'Bearer ' + myToken)

  xhttp.addEventListener('load', onXHRLoad2)
  xhttp.send()
}

btnSearchYelp.onclick = function() {
  // call the API calling code above
  callAPI2(requestURL2)
}

btnTransactionBack.onclick=function(){
  ChangeForm(Transaction)
}

btnbackYelp.onclick=function(){
  ChangeForm(Home)
}
