let requestURL = "https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyA0SIAFDYytJEp_VCA7tsTK_rgXgNINGoI&query=Restaurants in Omaha&location=41.256538, -95.934502"

function onXHRLoad() {
  let message = ""

  // delete messageName (see below for rationale)*
  let apiData1 = JSON.parse(this.responseText)

  // use just plain 'message' below so the names are appended to the prices
  for (i = 0; i < apiData1.results.length; i++) {
    console.log(`${apiData1.results[i].name}`)
    message = message + apiData1.results[i].name + "\n"
  }
  txtGoogleMaps.value = message
}

function callAPI(URL) {
  var xhttp = new XMLHttpRequest();

  xhttp.open('GET', 'https://cors-anywhere.herokuapp.com/' + URL)
  xhttp.addEventListener('load', onXHRLoad)
  xhttp.send()
}
btnSearchGoogleMaps.onclick = function() {
  // call the API calling code above
  callAPI(requestURL)
}


btnBacktoTransaction.onclick=function(){
  ChangeForm(Transaction)
}

btnbackGoogleMaps.onclick=function(){
  ChangeForm(GoogleMaps)
}
