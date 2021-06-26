/* //establish the elements like this

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
let UserStartingState = "tx"









console.log("the link works")
var requestUrl = 'https://api.openbrewerydb.org/breweries?by_city=san%20diego';

function getBrewery() {
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            console.log('Brewery list \n----------');
            for (var i = 0; i < data.length; i++) {
                console.log(data[i].name);
                console.log(data[i].type);
                console.log(data[i].street);
                console.log(data[i].city);
                console.log(data[i].brewery_type);
            }
        });


};

getBrewery();
