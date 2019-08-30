
// setting click events for the search button in the HTML
const brewSearchBtn = document.querySelector("#brewSearchButton");
// console.log(brewSearchBtn);
brewSearchBtn.addEventListener("click",function(){
    // console.log("brew-button");

    let brewSearch = document.querySelector(".breweries").value
    brewManager.getAllBreweries(brewSearch)



})


// parks event listener
const parkSearchButton = document.querySelector(".parkSearchButton")
parkSearchButton.addEventListener("click", function () {
    // pull from json server since api is down and looping through array to list all objects with search criteria, calling function 
    const criteria = document.querySelector(".parks").value.replace(" ","_")
    document.querySelector("#outputParks").innerHTML =""
    const parksPull = {
        getAllParks: () => {
            return fetch("http://localhost:3000/parks")
                .then(parkLocations => parkLocations.json())
                .then(parks => parkFx.searchParks(criteria, parks)
                    )
                }
        }
    parksPull.getAllParks()
})

