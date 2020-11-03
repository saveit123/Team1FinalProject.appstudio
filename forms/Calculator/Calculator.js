btnCalculatorBack.onclick=function(){
  ChangeForm(Home)
}

/*
var data = null;
function callAPI(URL) {
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
}
xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
         console.log(this.responseText);
   }
});

xhr.open("GET", "https://simple-calculator.p.rapidapi.com/");
xhr.setRequestHeader("x-rapidapi-host", "simple-calculator.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "1e3338ccbbmshf93f75dd05e0ce6p1ebcbajsnf5568754e9d4");

xhr.send(data);



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