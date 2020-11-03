btnNext1.onclick=function(){
  ChangeForm(Home)
}

let requestURL = "https://api.yelp.com/v3/businesses/search?location=68131&type=restaurant"
function onXHRLoad() {
    let message = ""
    let apiData = JSON.parse(this.responseText)

    for (i = 0; i <= apiData.results.length - 1; i++) {
        console.log(`${apiData.results[i].name}`)
        message = message + apiData.results[i].name + "\n"
    }

    /*for (i = 0; i <= apiData.results.length - 1; i++) {
        console.log(`${apiData.results[i].name}`)
        message = message + apiData.results[i].name + "\n"  + apiData.results[i].formatted_address + "\n" + "\n"
    } */
    txtSearchRestaurant.value = message
}

function callAPI(URL) {
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'https://cors-anywhere.herokuapp.com/' + URL)
    xhttp.addEventListener('load', onXHRLoad)
    xhttp.send()
}

btnSearchYelp.onclick=function(){
  // call the API calling code above
  callAPI(requestURL)

}