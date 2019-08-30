//fetching eventbrite API and object parsing
const eventAPIManager = {

  getAllMeetups: (searchField) => {

    const yourToken = "AZ7K4XTOKFMW4X2UKG5O"

    return fetch(
      `https://www.eventbriteapi.com/v3/events/search/?q=nashville_${searchField}&token=${yourToken}`, {
        headers: {
          "Authorization": `Bearer ${yourToken}`,
          "Accept": "application/json",
        }
      }
    )
      .then(response => response.json())
      .then(myParsedMeetUp => {
        myParsedMeetUp.events.forEach(singleEvent => printMeetUpHTML(singleEvent))
      })
      
  }
};












