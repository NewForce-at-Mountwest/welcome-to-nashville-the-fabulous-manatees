// this is the function that notates through the API and provides results that are matching the value of the search bar and prints it to the DOM element for the breweries
function Brewprint (brewName){
const printBrew= document.querySelector("#outputBreweries")
printBrew.innerHTML+=`<p>
${brewName.name}
</p>
<button id="brewSaveBTN">Save</button>
`}
