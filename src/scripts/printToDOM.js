function print (brewName){
const printBrew= document.querySelector("#outputBreweries")
printBrew.innerHTML+=`<p>
${brewName.name}
</p>
<button id="brewSaveBTN">Save</button>
`}


// loop through PARKS and see if they have searched criterion
const criteria = document.querySelector(".parks").value
const parkFx = {
 searchParks: (searchCriteria, parksData) => {
    for (i = 0; i < parksData.length; i++) {
        if (parksData[i][searchCriteria] == "Yes") {
            const parksOutput = document.querySelector("#outputParks")
            parksOutput.innerHTML += `<p>${parksData[i].park_name} at ${parksData[i].mapped_location_address} in ${parksData[i].mapped_location_city} has a ${searchCriteria}</p><button class="saveButton">Save</button>`
        }else{
            document.querySelector("#outputParks").innerHTML =`<p>Oops! No ${searchCriteria} in this town!</p>`
        }
    }
}
}