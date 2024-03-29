//Function to grab user input value and send to eventbrite.js for searching API
// TicketMaster Search Button - Event Listener - Store input into variable 
const concertSearchButton = document.querySelector("#concertSearchButton");
// console.log(concertSearchButton);
concertSearchButton.addEventListener("click", function () {
    let concertInput = document.querySelector(".concerts-input").value;
    ticketManager.getAllEvents(concertInput)
    document.querySelector("#resultsBox");
    document.querySelector("#resultsBox").innerHTML = ""
});

const meetUpsSearchButton =
document.querySelector(".meetUpsSearchButton").addEventListener("click", function() {
       //console.log("You clicked the meetups search button from the event listener js")
       const clearInput = document.querySelector("#resultsBox")
       clearInput.innerHTML = ` `
           let meetUpsValue = document.querySelector(".meetups").value
      eventAPIManager.getAllMeetups(meetUpsValue)
      //console.log(meetUpsValue)
 })
// setting click events for the search button in the HTML
const brewSearchBtn = document.querySelector("#brewSearchButton");
// console.log(brewSearchBtn);
brewSearchBtn.addEventListener("click",function(){
   // console.log("brew-button");
   let brewSearch = document.querySelector(".breweries").value
   brewManager.getAllBreweries(brewSearch)
   document.querySelector("#resultsBox")
   document.querySelector("#resultsBox").innerHTML=""
})
// parks event listener
const parkSearchButton = document.querySelector(".parkSearchButton")
parkSearchButton.addEventListener("click", function () {
   // pull from json server since api is down and looping through array to list all objects with search criteria, calling function
   const criteria = document.querySelector(".parks").value.replace(" ","_")
   document.querySelector("#resultsBox").innerHTML =""
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