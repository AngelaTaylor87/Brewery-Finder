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