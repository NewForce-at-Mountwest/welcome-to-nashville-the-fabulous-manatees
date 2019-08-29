// ### Parks API

// fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?${parkInput}=Yes`, {
//   "$$app_token": yourToken
// })

// pull from json server since api is down and looping through array to list all objects
const parksPull = {
    getAllParks: ()=>{
        fetch("http://localhost:3000/parks")
    .then(parkLocations => parkLocations.json())
    .then(park=>{
        park.forEach(park=>console.log(park))
    })
}}

