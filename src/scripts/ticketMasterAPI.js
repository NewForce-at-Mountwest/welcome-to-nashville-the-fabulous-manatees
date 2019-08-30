
// fetch events from TicketMaster and parse them to JS

const ticketManager = {
    getAllEvents:(concertInput) => {
      
      return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=343&keyword=${concertInput}&apikey=KGTfImEiMhu3Zb5ZOmyywUeIuwHACDxS`)
      .then(response => response.json()) 
      .then(parsedEvents => {
          // console.log(parsedEvents._embedded.events)
          parsedEvents._embedded.events.forEach(singleEvents =>{
            
            concertPrintToScreen(singleEvents)
            
            
          })
          document.querySelector(".concerts-input").value=""
      })
  }  
};








