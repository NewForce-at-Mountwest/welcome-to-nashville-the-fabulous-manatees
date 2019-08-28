//fetching eventbrite API and 
const apiManager = {
  
  getAllMeetups: (searchField) => {
    
  const yourToken = "AZ7K4XTOKFMW4X2UKG5O"
  
    return fetch(
      `https://www.eventbriteapi.com/v3/events/search/?q=nashville_${searchField}&token=${yourToken}`, {
          headers: {
            "Authorization": `Bearer ${yourToken}`,
            "Accept": "application/json",
          }
        }
    ).then(response => response.json())
    .then(myParsedMeetUp => {
      myParsedMeetUp.forEach(meetUp => {
        console.log(meetUp)
      })
    } 
      )
  }
};



//AZ7K4XTOKFMW4X2UKG5O

//   You need to put your token in the URL of your fetch request and in the Authorization header
//  You also need to add `"Accept: "application/json"` to the headers.
//  ```js
// fetch(`https://www.eventbriteapi.com/v3/events/search/?q=nashville_${searchField}&token=${yourToken}`, {
//   headers: {
//     "Authorization": `Bearer ${yourToken}`,
//     "Accept": "application/json"
//   }
// })


