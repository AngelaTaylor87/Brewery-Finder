
/* establish the elements like this

let submitButton = document.getElementById("submit-button");
*/

/* // from trivia quiz, adapt to date from the array to the dynamically create the list of breweries.

function populateQuestion () {
    let currentQuestion = questionArray[questionIndex]
    questionText.innerText = currentQuestion.quest;
    currentQuestion.choices.forEach(function(choice, i){
        //console.log(questionIndex + "questionIndex")
        //console.log(i);
        //console.log(choice);
        let choiceButton = document.createElement("button");  
        choiceButton.textContent = choice; 
        choiceButton.onclick = questionClick;
        answerList.appendChild(choiceButton);
    })

}
*/

//These will come from user input.
let userStartingNumber = "6501";
let userStartingStreet = "Memorial";
let userStreetType = "drive"
let userStartingCity = "houston";
let userStartingState = "tx"
let cityName = $('#city-name');
let brewName = $('#brew-name');
let brewResults = $("#brew-results");
let brewSearchCity = "boston";
let searchInput;



function getBrewery() {

    fetch('https://api.openbrewerydb.org/breweries?by_type=brewpub&by_city=' + searchInput,)
        .then(function (response) {
            return response.json();
        })
        .then(function (dataBrew) {
            console.log(dataBrew);
            console.log('Brewery list \n----------');
            for (var i = 0; i < dataBrew.length; i++) {
                console.log("name " + dataBrew[i].name);
                console.log(dataBrew[i].brewery_type);
                console.log(dataBrew[i].street);
                console.log(dataBrew[i].city);
                console.log(dataBrew[i].latitude);
                console.log(dataBrew[i].longitude);

                var card = document.createElement('div');
                var cardBrewName = document.createElement('h4');
                var cardBrewStreet = document.createElement('p');
                var cardBrewCity = document.createElement('p');

                cardBrewName.innerText = dataBrew[i].name;
                cardBrewStreet.innerText = dataBrew[i].street;
                cardBrewCity.innerText = dataBrew[i].city;

                card.append(cardBrewName);
                card.append(cardBrewStreet);
                card.append(cardBrewCity);
                brewResults.append(card);

            }
        });






};

// add function to get the google map directions.  https://maps.googleapis.com/maps/api/directions/json?origin=rice+university+houston+tx&destination=memorial+park+houston+tx&key=AIzaSyDC5AdoHrcoAnFtL415iw6aop7wEUJbSwk

//Comment this because it now runs inside the function.
//getBrewery();

// blurring or hiding landing page image and showing brewery list
var subBtnEl = document.getElementById("subBtn")

subBtnEl.addEventListener("click", () => {
    hideLandingImg();
    showBreweryUserLocation();
    searchCityForm(); //get the form sate
    getBrewery(); //runs the api call to openbrewery 
})
//this captures the data from the brewery city search form.
function searchCityForm(e) {
    searchInput = document.getElementById("city-name").value;
    console.log(searchInput);
}


function hideLandingImg() {
    var landingImgEl = document.querySelector(".circle");
    landingImgEl.setAttribute("style", "filter: blur(20px)");
}

function showBreweryUserLocation() {
    var userFormEl = document.getElementById("user-input-form");
    userFormEl.setAttribute("style", "visibility: visible");


}




