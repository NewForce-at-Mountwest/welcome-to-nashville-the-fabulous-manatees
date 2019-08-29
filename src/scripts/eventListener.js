//Function to grab user input value and send to eventbrite.js for searching API


document.querySelector(".meetUpsSearchButton").addEventListener("click", function() {   
        console.log("You clicked the meetups search button from the event listener js")  
        const meetUpsValue = document.querySelector(".meetups").value
        console.log(meetUpsValue)
        
  return
  })

//   const apiManagerBreweries ={
//     getAllBreweries: () =>{
//         const searchBarInput = document.querySelector("#breweryInput").value
//         console.log(searchBarInput)
//         return fetch(`https://api.openbrewerydb.org/breweries?by_state=tennessee&by_city=${searchBarInput}`)
//         .then(response => response.json())
//         .then(breweryToPrint=>{
//             console.log(breweryToPrint)
//             breweryToPrint.forEach(singleBrewery =>{
//                 document.querySelector("#bigOlContainer").innerHTML += buildBreweryHtml.buildEntryCard(singleBrewery)

//   <p id="outputMeetups"></p>

//   <p class="input">
//   <input type="text" class="meetups" placeholder="Search for Meetups">
//   <button class="searchButton">Search</button>
// </p>



