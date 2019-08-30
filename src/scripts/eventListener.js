const concertSearchButton = document.querySelector("#concertSearchButton");

        // console.log(concertSearchButton);

        concertSearchButton.addEventListener("click", function() {
            
            const concertGenreInput = document.querySelector(".concerts-input").value;
            
            // console.log(concertGenreInput);
            eventsManager.getAllEvents(concertGenreInput)


                // if (genreName.classifications[0].genre.name === concertGenreInput){
                // const printConcert = document.querySelector("#outputConcerts")
                // printConcert.innerHTML+=`<p>
                // ${genreName.name}<br>
                // ${genreName.classifications[0].genre.name}
                // </p>
                // <button id="concertSaveBTN">Save</button>`
                // }
            });
    
          



const brewSearchBtn = document.querySelector("#brewSearchButton");
// console.log(brewSearchBtn);
brewSearchBtn.addEventListener("click",function(){
    // console.log("brew-button");
    let brewSearch = document.querySelector(".breweries").value
    brewManager.getAllBreweries(brewSearch)



})
