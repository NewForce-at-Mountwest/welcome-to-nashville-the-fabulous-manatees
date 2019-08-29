const concertSearchButton = document.querySelector(".concerts-searchButton");

        console.log(concertSearchButton);

        concertSearchButton.addEventListener("click", function() {
            
            const concertGenreInput = document.querySelector(".concerts-input").value;
            
            console.log(concertGenreInput);

        }); 
        
        
        const concertResultsOutput = document.querySelector("#outputConcerts");
        concertResultsOutput.addEventListener("click", function() {
        if (event.target.id === "#concerts-searchButton") {
      
          const concertHTMLstring = `test`
      
          concertResultsOutput.innerHTML += concertHTMLstring
      
        }
    });           

