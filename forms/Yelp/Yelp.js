

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

    txtSearchRestaurant.value = message
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

btnSearchYelp.onclick=function(){
  // call the API calling code above
  callAPI(requestURL)
}


