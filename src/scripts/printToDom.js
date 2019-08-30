// this is the function that notates through the API and provides results that are matching the value of the search bar and prints it to the DOM element for the breweries
function Brewprint (brewName){
const printBrew= document.querySelector("#resultsBox")
printBrew.innerHTML+=`<p>
${brewName.name}
</p>
<button id="brewSaveBTN">Save</button>
`

}

// const concertSearchButton = document.querySelector("#concertSearchButton");

//         // console.log(concertSearchButton);

//             concertSearchButton.addEventListener("click", function() {
            
//             const concertInput = document.querySelector(".concerts-input").value;
            
//             console.log(concertInput);

//             ticketManager.getAllEvents(concertInput)

//             });

function concertPrintToScreen (concertResults){

    // const clearConcertInput = document.querySelector("#resultBox")
    // clearConcertInput.innerHTML = ``
    const printConcert = document.querySelector("#resultsBox")

    printConcert.innerHTML+=
    `
    <p>
    ${concertResults.name}<br>
    ${concertResults.classifications[0].genre.name}
    </p>
    <button id="concertSaveBTN">Save</button>
    `
    
};

//Print Meetups search results to the DOM
function printMeetUpHTML (meetUps){
    const printMeetUps= document.querySelector("#resultsBox") 
    printMeetUps.innerHTML+=`<p>${meetUps.name.html}</p>
    <button id="meetUpsSaveBTN">Save</button>`
    }





// loop through PARKS and see if they have searched criterion
const parkFx = {
 searchParks: (searchCriteria, parksData) => {
    for (i = 0; i < parksData.length; i++) {
        if (parksData[i][searchCriteria] === "Yes") {
            const resultsBox = document.querySelector("#resultsBox")
            resultsBox.innerHTML += `<p>${parksData[i].park_name} at ${parksData[i].mapped_location_address} in ${parksData[i].mapped_location_city} has a ${searchCriteria}</p><button class="saveButton">Save</button>`
        }
    }
}
}
