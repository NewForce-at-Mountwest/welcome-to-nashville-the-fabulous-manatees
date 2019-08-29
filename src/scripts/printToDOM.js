function print (brewName){
const printBrew= document.querySelector("#outputBreweries")
printBrew.innerHTML+=`<p>
${brewName.name}
</p>
<button id="brewSaveBTN">Save</button>
`}


//Print Meetups search results to the DOM
function printMeetUpHTML (meetUps){
    const printMeetUps= document.querySelector("#outputMeetups")
    printMeetUps.innerHTML+=`<p>${meetUps.name.html}</p>
    <button id="meetUpsSaveBTN">Save</button>
    `}