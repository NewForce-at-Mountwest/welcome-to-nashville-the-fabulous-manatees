// ### Parks API

// fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?${parkInput}=Yes`, {
//   "$$app_token": yourToken
// })


// loop through parks and see if they have searched criterion
const criteria = document.querySelector(".parks").value


function searchParks(searchCriteria, parksData) {
    for (i = 0; i < parksData.length; i++) {
        if (parksData.searchCriteria === "Yes") {
            const parksOutput = document.querySelector("#outputParks")
            parksOutput.innerHTML = `<p>${parksData.park_name} at ${parksData.mapped_location_address} in ${parksData.mapped_location_city} has a ${searchCriteria}</p>`
        }
    }
};

// event listener
const parkSearchButton = document.querySelector(".parkSearchButton")
parkSearchButton.addEventListener("click", function () {
    // pull from json server since api is down and looping through array to list all objects with search criteria, calling function 
    const criteria = document.querySelector(".parks").value
    const parksPull = {
        getAllParks: () => {
            return fetch("http://localhost:3000/parks")
                .then(parkLocations => parkLocations.json())
                .then(parks => searchParks(criteria, parks)
                    )
                }
        }
    
    parksPull.getAllParks()
})