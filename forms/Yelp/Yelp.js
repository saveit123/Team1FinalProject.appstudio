//let requestURL = "http://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=68131&type=restaurant"

let requestURL = "http://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=68131&type=restaurant&Authorization=Token e3RmWeocT4zElvPssMD_Sa7qAWWOUnQT3yGNpBLoTVZgMWW5Bz3QP8c33iJQ0-McUho4RCjkWD13S-X9v7YLOGHnmDOl9ji-3axv4rQ-hpsuI2MOTlAMVs02alqfX3Yx"

btnNext1.onclick=function(){
  ChangeForm(Home)
}

 //let requestURL = "https://api.yelp.com/v3/businesses/search?location=68131&type=restaurant"

function onXHRLoad() {
    let message = ""
    let messageName = ""
    let apiData = JSON.parse(this.responseText)

    for (i = 0; i <= apiData.businesses; i++) {
        console.log(`${apiData.businesses[i].price}`)
        message = message + apiData.businesses[i].price + "\n"
    }
//to make it prettier use another loop with name and price -- put them arrays (name and price array)
  for (i = 0; i <= apiData.businesses; i++) {
        console.log(`${apiData.businesses[i].name}`)
        messageName = message + apiData.businesses[i].name + "\n"
    } 
    
    txtSearchRestaurant.value = message + messageName
}

function callAPI(URL) {
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET’, URL)
    //xhttp.setRequestHeader('Authorization', 'Token' + 'e3RmWeocT4zElvPssMD_Sa7qAWWOUnQT3yGNpBLoTVZgMWW5Bz3QP8c33iJQ0-McUho4RCjkWD13S-X9v7YLOGHnmDOl9ji-3axv4rQ-hpsuI2MOTlAMVs02alqfX3Yx')
    xhttp.addEventListener('load', onXHRLoad)
    xhttp.send()
}

btnSearchYelp.onclick=function(){
  // call the API calling code above
  callAPI(requestURL)

}