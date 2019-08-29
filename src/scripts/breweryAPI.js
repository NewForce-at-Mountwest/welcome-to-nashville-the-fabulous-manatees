// pulling breweries from external API and forEaching through them all and printing them to the console.

const brewManager = {
    getAllBreweries: (brewInput) => {
        return fetch(`https://api.openbrewerydb.org/breweries?by_city=nashville&by_name=${brewInput}`).then(response => response.json())
        // Parsing breweries from json to javascript
            .then(myParsedBrewies => {
                myParsedBrewies.forEach(singleBrew=>{
                print(singleBrew)
                })
            })
    }
};
