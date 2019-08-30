//Function to grab user input value and send to eventbrite.js for searching API

const meetUpsSearchButton = 
document.querySelector(".meetUpsSearchButton").addEventListener("click", function() {   
        console.log("You clicked the meetups search button from the event listener js")  
        let meetUpsValue = document.querySelector(".meetups").value
       eventAPIManager.getAllMeetups(meetUpsValue)
       console.log(meetUpsValue)
  })






// setting click events for the search button in the HTML
const brewSearchBtn = document.querySelector("#brewSearchButton");
// console.log(brewSearchBtn);
brewSearchBtn.addEventListener("click",function(){
    // console.log("brew-button");

    let brewSearch = document.querySelector(".breweries").value
    brewManager.getAllBreweries(brewSearch)



})


