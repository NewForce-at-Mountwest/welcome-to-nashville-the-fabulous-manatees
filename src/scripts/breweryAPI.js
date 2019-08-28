// pulling breweries from external API and forEaching through them all and printing them to the console.

const brewManager = {
    getAllBreweries: () => {
        return fetch(`https://api.openbrewerydb.org/breweries?by_state=tennessee&by_city=nashville`).then(response => response.json())
            .then(myParsedBrewies => {
                myParsedBrewies.forEach
                (singleBrewery => console.log(singleBrewery))
            })
    }
};
