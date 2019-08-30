const concertSearchButton = document.querySelector("#concertSearchButton");

        // console.log(concertSearchButton);

            concertSearchButton.addEventListener("click", function() {
            
            const concertInput = document.querySelector(".concerts-input").value;
            
            console.log(concertInput);
            
            eventsManager.getAllEvents(concertInput)

            });
    
          



const brewSearchBtn = document.querySelector("#brewSearchButton");
// console.log(brewSearchBtn);
brewSearchBtn.addEventListener("click",function(){
    // console.log("brew-button");
    let brewSearch = document.querySelector(".breweries").value
    brewManager.getAllBreweries(brewSearch)



})
