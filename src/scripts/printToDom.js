function print (brewName){
const printBrew= document.querySelector("#outputBreweries")
printBrew.innerHTML+=`<p>
${brewName.name}
</p>
<button id="brewSaveBTN">Save</button>
`}


// TicketMaster print results to screen

function concertPrintToScreen(concertResult){

    const printConcert = document.querySelector("#outputConcerts")
    
    printConcert.innerHTML+=
    `
    <p>
    ${concertResult.name}<br>
    ${concertResult.classifications[0].genre.name}
    </p>
    <button id="concertSaveBTN">Save</button>
    `

};
