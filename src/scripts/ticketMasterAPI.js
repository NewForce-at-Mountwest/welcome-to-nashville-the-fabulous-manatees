
const eventsManager = {
    getAllEvents:() => {
      // fetch events from TicketMaster and parse them to JS
      return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=343&apikey=KGTfImEiMhu3Zb5ZOmyywUeIuwHACDxS`)
      .then(response => response.json()) 
      .then(parsedEvents => {
          console.log(parsedEvents._embedded.events)
          parsedEvents._embedded.events.forEach(singleEvents => console.log(singleEvents))
        })
    }
};
