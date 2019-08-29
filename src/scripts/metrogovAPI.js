// ### Parks API

// fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?${parkInput}=Yes`, {
//   "$$app_token": yourToken
// })

// pull from json server since api is down and looping through array to list all objects
const parksPull = {
    getAllParks: ()=>{
        fetch("http://localhost:3000/parks")
    .then(parkLocations => parkLocations.json())
    .then(park=>{
        // park.forEach(park=>console.log(park))
    })
}}

// loop through parks and see if they have searched criterion

function searchParks(criteria) {
    for (i = 0; i < 6; i++) {
        if (parks.criteria === "Yes") {
            const parksOutput = document.querySelector("#outputParks")
            parksOutput.innerHTML = `<p>${park.park_name} at ${park.mapped_location_address} in ${park.mapped_location_city} has a ${criteria}`
        }
    }
};

// event listener then calling innerHTML printing
const parkSearchButton = document.querySelector(".parkSearchButton")
parkSearchButton.addEventListener("click", function(){
    const parksInput = document.querySelector(".parks").value
    searchParks(parksInput)
});